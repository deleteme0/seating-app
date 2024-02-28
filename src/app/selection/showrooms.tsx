import { useState } from "react";
import DisplayRoom from "./displayroom";


export default function ShowRooms({rooms,setRooms}:{rooms:any,setRooms:any}) {

    const [activeRoom,setActiveRoom] = useState(null);

    const handlechange = (event:any) =>{
        setActiveRoom(event.target.value)
    }

    return(
        <div className=" bg-gray-500 grid grid-cols-5 space-y-5 space-x-4 border-spacing-5">
            <p>Rooms :</p>
                {rooms.map(
                    (each:any,i:any)=>(
                        <label key={"radiol"+each.roomno} hidden={each.use == false}>
                        <input type="radio" name="selectedRoom" key={"radio"+each.roomno} id={each} onChange={handlechange} value={each.roomno}/>
                        {each.roomno}</label>
                    )
                )}
            <DisplayRoom rooms={rooms} activeRoom={activeRoom} setRooms={setRooms}></DisplayRoom>
        </div>
    )
}