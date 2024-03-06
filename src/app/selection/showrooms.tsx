import { useState } from "react";
import DisplayRoom from "./displayroom";
import "./select.css"


export default function ShowRooms({rooms,setRooms}:{rooms:any,setRooms:any}) {

    const [activeRoom,setActiveRoom] = useState(null);

    const handlechange = (event:any) =>{
        setActiveRoom(event.target.value)
    }

    return (
        <div style={{ background: 'white' }}>
            <div className="bg-azure-500 grid grid-cols-5 space-x-4">
                <p>Rooms:
                    <select onChange={handlechange} className="selections" name="selectedroom" id="roomselect">
                        <option value="" disabled selected hidden>--Select--</option>
                        {rooms.map(
                            (each: any, i: any) => (
                                <option hidden={each.use === false} key={"sfads"+i} value={i}>{each.roomno}</option>
                            )
                        )}
                    </select>
                </p>
            </div>
            <DisplayRoom rooms={rooms} activeRoom={activeRoom} setRooms={setRooms}></DisplayRoom>
        </div>
    );
    
}