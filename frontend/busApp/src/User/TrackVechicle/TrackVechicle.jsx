import React, { useState,useEffect,useContext } from "react"
import axios from "axios"
import {Link,useParams} from "react-router-dom"
import {
    DirectionsRenderer,
    DirectionsService,
    GoogleMap,
    MarkerF,
    TrafficLayer,
    useLoadScript
} from "@react-google-maps/api"
import { SocketContext } from "../../Context/SocketContext"
import "./TrackVechicle.css"
import {MAPS_KEY} from "../../Constants/keys.js";
import {adminAddress, axiosConfig, SERVER_URL} from "../../Constants/config.js";
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastPayload } from "../../Context/Assets"
import stopAudio from "./stop.mp4"
import {unmountComponentAtNode} from "react-dom";



const MemoizedDirectionsRenderer = React.memo(({ directions }) => (
    <DirectionsRenderer options={{ directions: directions }} />
));

const MemoizedDirectionsService = React.memo(({ directionsOptions, setDirectionsResponse }) => (
    <DirectionsService options={directionsOptions} callback={(response) => {
        if (response !== null) {
            if (response.status === 'OK') {
                setDirectionsResponse(response);
            } else {
                console.log('response: ', response)
            }
        }
    }}/>
));

function Map()
{
    const {socket} = useContext(SocketContext);
    const {id}=useParams()
    const [latitude,setLatitude]=useState(0)
    const [longitude,setLongitude]=useState(0)
    const [directionsResponse, setDirectionsResponse] = useState(null);
    const [directionsOptions, setDirectionsOptions] = useState();
    const [progress, setProgress] = useState();

    useEffect(() => {
        socket.on(`busLocation-${id}`,(payload)=>{
            setLatitude(payload.latitude)
            setLongitude(payload.longitude)
            setProgress(payload.progress)
            console.log(payload);
        }
        )
    }, [])

    useEffect(()=> {
        (async () => {
            const route = await axios.get(`${SERVER_URL}/api/v1/activeBus/${id}`, axiosConfig);
            const waypoints = [];
            route.data.bus.route.stations.map((station) => {
                waypoints.push({"location": `${station.position[0]} ${station.position[1]}`, "stopover": true});
            });


            const directionsOptions = {
                destination: waypoints[waypoints.length-1].location ,
                origin: waypoints[0].location,
                waypoints: waypoints,
                travelMode: 'DRIVING',
            };
            setDirectionsOptions(directionsOptions);
        })();
    },[])

    return (
        <>
            <GoogleMap zoom={10} center={{lat:latitude,lng:longitude}} mapContainerClassName="container shadow-custom">
                { directionsOptions && <MemoizedDirectionsService directionsOptions={directionsOptions} setDirectionsResponse={setDirectionsResponse}/>}
                {directionsResponse && <>
                    <TrafficLayer/>
                    <MemoizedDirectionsRenderer directions={directionsResponse }/>
                </>}
                <MarkerF position={{lat:latitude,lng:longitude}} />
            </GoogleMap>
            <ul className="">
                <ul className={"absolute left-[8%] top-[50%] border-l-[6px] border-red-600 flex flex-col gap-[15px]"}>
                    {progress && progress.map((p) => {return (<li className={"ml-[-11px] flex flex-row items-center gap-2"}><div className={p.reached?"w-4 h-4 bg-[#38B3F9] rounded-full":"w-4 h-4 bg-red-600 rounded-full"}></div><p className={p.reached?"text-[#38B3F9]":"text-red-700"}>{`${p.distance} ${p.eta}`}</p></li>)})}
                </ul>
            </ul>

        </>
    )
}

function Card({busNumber,busNumberPlate,contactInfo,route,age,name,busStatus})
{
    const {id}=useParams()
    return (
        <div className="flex flex-col space-y-5 items-center justify-between mb-[30px]">
        <div className="rounded-[20px] bg-[#E93F4B] w-[30vw] text-white pt-4 pb-4 pl-6 pr-6 space-y-3 shadow-custom mt-[7vh]">
            <h1>Bus Number :{busNumber}</h1>
            <h1>Bus Number Plate : {busNumberPlate}</h1>
            <h1>Driver Name : {name}</h1>
            <h2>Driver Contact Information : {contactInfo}</h2>
            <div className="flex">Bus Status : &nbsp; {busStatus === "active"?<h1 className="w-[20px] h-[20px] rounded-full animate-pulse bg-green-600"></h1>:<h1 className="w-[20px] h-[20px]rounded-full animate-pulse bg-red-600"></h1>}</div>
        </div>
        </div>
    )
}

export function TrackVechicle()
{
    const {isLoaded}=useLoadScript({
        googleMapsApiKey: MAPS_KEY
    })
    const {socket}=useContext(SocketContext)       
    const {id}=useParams()
    const [dataReceived,setDataReceived]=useState({})
    const [isLoading,setLoading]=useState(true)
    const [passenger,setPassenger]=useState(0)
    async function getActiveBusDetails()
    {
        const response=await axios.get(`${SERVER_URL}/api/v1/activeBus/${id}`, axiosConfig)
        console.log(response.data.bus)
        // console.log(response.data.buses)
        setDataReceived(response.data.bus)
        setLoading(false)
    }

    useEffect(()=>{
        console.log(`busLocation-${id}`)
        getActiveBusDetails()
    },[])

    useEffect(()=>{
        socket.on("sendCountPassenger",(payload)=>{

            setPassenger(payload.countPassenger)
        })
    },[])

    if(!isLoaded)
        return <h1>Loading...</h1>
    else
    {
        return (
            <div className="w-[100vw] h-screen flex flex-col items-center font-lexend">
            <div className="mt-[40px]">
                <Map/>
            </div>
            <h1 className="relative top-[30px] right-[60px] text-[#9A9A9A] text-[20px]">PASSENGER COUNT : <span className="text-[black]">{passenger}/60</span></h1>
            <div className="flex h-[90vh] justify-between items-center w-[60%]">
                    {isLoading ?<h1> Loading... </h1>:<Card key={dataReceived._id} busNumber={dataReceived.busNumber} busNumberPlate={dataReceived.busNumberPlate} contactInfo={dataReceived.driver.contactInfo} route={dataReceived.route} age={dataReceived.driver.age} name={dataReceived.driver.name} busStatus={dataReceived.busStatus}  objectId={dataReceived._id}/>}
            </div>
            </div>
        )
    }
}
