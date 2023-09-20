import {Link} from "react-router-dom";
import chatBot from "./assets/chatBot.png";
import main from "./assets/Register.jpg"
import "./App.css"
function ChatBot(){
    return  (
     <df-messenger id="test"
         intent="WELCOME"
         agent-id="d4bf08d1-af6b-47bc-af2d-953093470fab"
         language-code="en"
         placeholder-text="Ask something"
         bot-writing-text="Just a minute"
         chat-title="NAMSKARAM-Vehicle Tracking Chatbot Assistant"
         chat-icon={chatBot}
         df-messenger-button-titlebar-color="#e93f4b"
     ></df-messenger>
   )
}

function TypeOfUser()
{
    return (
        <div className={"fixed top-0 left-0 col-auto justify-center items-center h-full w-full"}>
            <img src={main} className={"fixed top-0 left-0 w-full h-full z-[-1] blur-sm brightness-90 contrast-60 saturate-6"}/>
                <h1 className={"fixed text-[45px] top-[40px] w-full text-white text-4xl text-center drop-shadow-lg"}>Choose Your Session</h1>
                <div className={"flex row justify-center w-full h-full items-center z-10"}>
                    <div>
                    <div className={"filter mix-blend-hard-light ml-40 mt-40 mr-40 bg-[#e93f4b] w-[330px] h-[330px] flex items-center justify-center rounded-[50px]"}>
                        <Link className={"filter-none"} to={"/driver/RegisterDriver/"}>
                                <svg className={"filter-none"} width="215" height="215" viewBox="0 0 278 270" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M79.4286 185.625C79.4286 194.945 70.5382 202.5 59.5714 202.5C48.6046 202.5 39.7143 194.945 39.7143 185.625C39.7143 176.305 48.6046 168.75 59.5714 168.75C70.5382 168.75 79.4286 176.305 79.4286 185.625Z" fill="#F8F8F8"/>
                                    <path d="M238.286 185.625C238.286 194.945 229.395 202.5 218.429 202.5C207.462 202.5 198.571 194.945 198.571 185.625C198.571 176.305 207.462 168.75 218.429 168.75C229.395 168.75 238.286 176.305 238.286 185.625Z" fill="#F8F8F8"/>
                                    <path d="M119.143 168.75C108.176 168.75 99.2857 176.305 99.2857 185.625C99.2857 194.945 108.176 202.5 119.143 202.5H158.857C169.824 202.5 178.714 194.945 178.714 185.625C178.714 176.305 169.824 168.75 158.857 168.75H119.143Z" fill="#F8F8F8"/>
                                    <path d="M59.5714 33.75C48.6046 33.75 39.7143 41.3052 39.7143 50.625V116.448C39.7143 126.984 50.8778 134.86 62.9457 133.204C80.9252 130.737 115.018 126.562 139 126.562C162.982 126.562 197.075 130.737 215.054 133.204C227.122 134.86 238.286 126.984 238.286 116.448V50.625C238.286 41.3052 229.395 33.75 218.429 33.75H59.5714ZM59.5714 50.625H218.429V116.448C218.423 116.458 218.429 116.477 218.429 116.448C218.429 116.447 218.42 116.479 218.386 116.503C218.353 116.527 218.32 116.54 218.3 116.545C218.29 116.547 218.271 116.552 218.22 116.545C200.309 114.087 164.768 109.688 139 109.688C113.232 109.688 77.691 114.087 59.7804 116.545C59.7292 116.552 59.7105 116.548 59.7009 116.545C59.6806 116.54 59.6472 116.527 59.6135 116.503C59.5802 116.479 59.5694 116.461 59.5696 116.462C59.5696 116.49 59.5753 116.472 59.5696 116.462L59.5714 50.625Z" fill="#F8F8F8"/>
                                    <path d="M0 42.1875C0 18.888 22.2259 0 49.6429 0H228.357C255.774 0 278 18.888 278 42.1875V194.062C278 207.865 270.201 220.119 258.143 227.816V261.562C258.143 266.222 253.698 270 248.214 270H208.5C203.017 270 198.571 266.222 198.571 261.562V236.25H79.4286V261.562C79.4286 266.222 74.9834 270 69.5 270H29.7857C24.3023 270 19.8571 266.222 19.8571 261.562V227.816C7.79942 220.119 0 207.865 0 194.062V42.1875ZM49.6429 16.875C33.1927 16.875 19.8571 28.2078 19.8571 42.1875V194.062C19.8571 208.042 33.1927 219.375 49.6429 219.375H228.357C244.807 219.375 258.143 208.042 258.143 194.062V42.1875C258.143 28.2078 244.807 16.875 228.357 16.875H49.6429Z" fill="#F8F8F8"/>
                                </svg>
                            </Link>
                        </div>
                        <h1 className={"text-[40px] text-white font-medium text-center"}>Driver</h1>
                    </div>
                    <div>
                    <div className={"filter mix-blend-hard-light ml-40 mt-40 mr-40 bg-[#E93F4B] w-[330px] h-[330px] flex items-center justify-center  rounded-[50px]"}>
                            <Link to={"/user/lookupVehicle/"}>
                                <svg width="215" height="215" viewBox="0 0 236 252" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M118 126.5C150.615 126.5 177 98.2623 177 63.5C177 28.7377 150.615 0.5 118 0.5C85.3846 0.5 59 28.7377 59 63.5C59 98.2623 85.3846 126.5 118 126.5ZM156.5 63.5C156.5 86.2674 139.232 104.667 118 104.667C96.7677 104.667 79.5 86.2674 79.5 63.5C79.5 40.7326 96.7677 22.3333 118 22.3333C139.232 22.3333 156.5 40.7326 156.5 63.5ZM20.5 251V251.5H215.5V251C215.5 251.5 215.5 251.5 215.501 251.5H215.502L215.506 251.5L215.518 251.5L215.565 251.499C215.604 251.499 215.662 251.497 215.737 251.495C215.886 251.489 216.102 251.479 216.376 251.458C216.923 251.416 217.702 251.333 218.635 251.167C220.498 250.835 222.989 250.171 225.486 248.837C227.985 247.502 230.494 245.493 232.377 242.476C234.261 239.456 235.5 235.456 235.5 230.167C235.5 219.632 230.582 198.674 213.428 180.346C196.256 162 166.865 146.333 118 146.333C69.1345 146.333 39.7441 162 22.5725 180.346C5.41752 198.674 0.5 219.632 0.5 230.167C0.5 235.456 1.73874 239.456 3.62269 242.476C5.50564 245.493 8.01518 247.502 10.5144 248.837C13.0111 250.171 15.5022 250.835 17.3655 251.167C18.2982 251.333 19.0767 251.416 19.6241 251.458C19.8979 251.479 20.1141 251.489 20.2632 251.495C20.3378 251.497 20.3956 251.499 20.4354 251.499L20.4816 251.5L20.4943 251.5L20.4981 251.5H20.4993C20.4997 251.5 20.5 251.5 20.5 251ZM198.909 195.761C211.632 209.354 214.779 224.115 214.988 229.594H21.0113C21.2209 224.115 24.3675 209.354 37.0909 195.761C49.701 182.288 73.478 168.167 118 168.167C162.522 168.167 186.299 182.288 198.909 195.761Z" fill="#F8F8F8" stroke="#F8F8F8"/>
                                </svg>
                            </Link>
                        </div>
                            <h1 className={"text-[40px] text-white font-medium text-center"}>User</h1>
                    </div>
                </div>
                <ChatBot/>
        </div>
    )
}

export default TypeOfUser;