import { useState } from "react";
import DisplayRoom from "./displayroom";


export default function ShowRooms({rooms,setRooms}:{rooms:any,setRooms:any}) {

    const [activeRoom,setActiveRoom] = useState(null);

    const handlechange = (event:any) =>{
        setActiveRoom(event.target.value)
    }

    return(
        <div>
        <div className=" bg-azure-500 grid grid-cols-5 space-y-5 space-x-4 border-spacing-5">
            <p>Rooms :
            <select onChange={handlechange} name="selectedroom" id="roomselect">
            <option value="" disabled selected hidden>--Select--</option>
                {rooms.map(
                    (each:any,i:any)=>(
                        <option hidden={each.use==false} value={i}>{each.roomno}</option>)
                        // <label key={"radiol"+each.roomno} hidden={each.use == false}>
                        /* <input type="radio" name="selectedRoom" key={"radio"+each.roomno} id={each} onChange={handlechange} value={i}/>{each.roomno}</label> */
                    
                )}
                </select>
                </p>
                </div>
            <DisplayRoom rooms={rooms} activeRoom={activeRoom} setRooms={setRooms}></DisplayRoom>
        </div>
    )
}