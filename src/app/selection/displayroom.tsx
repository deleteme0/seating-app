"use client";

import { act } from "react-dom/test-utils";

//function SingleSeat({handle:any,ind:any,rooms:any}){
//    return(
//        <div>
//            
//        </div>
//    )
//}

const SeatButtom = ({handle,shade}:{handle:any,shade:any}) =>{

    if (shade == 1){
        return(
            <button onClick={() => {handle}} className=" bg-blue-500 "></button>
        )
    }
    return(
        <button onClick={() => {handle}} className=" bg-red-500 "></button>
    )
}

const getStyle = (num:any) => {
    if (num == 0){
        return " bg-blue-500 ";
    }else{
        return " bg-red-500 ";
    }
}

const SingleSeat = ({handle,ind,rooms,activeRoom}:{handle:any,ind:any,rooms:any,activeRoom:any}) =>{
    return(
        <div>
            <button onClick={() => {handle(ind)}} className={getStyle(rooms[activeRoom].benches[ind][0].selected)}> seat </button>
        </div>
    )
}
const  DoubleSeat = ({handle,ind,rooms,activeRoom}:{handle:any,ind:any,rooms:any,activeRoom:any}) => {
    return(
        <div>
            <button onClick={() => {handle(ind,0)}} className={getStyle(rooms[activeRoom].benches[ind][0].selected)}> seat </button>
            <button onClick={() => {handle(ind,1)}} className={getStyle(rooms[activeRoom].benches[ind][1].selected)}> seat </button>
        </div>
    )
}

export default function DisplayRoom({rooms,activeRoom,setRooms}:{rooms:any,activeRoom:any,setRooms:any}) {

    const handleSingle = (ind:any) =>{
        let newrooms = rooms.slice();
        
        if (newrooms[activeRoom].benches[ind][0].selected == 0){
            newrooms[activeRoom].benches[ind][0].selected = 1;
        }else if(newrooms[activeRoom].benches[ind][0].selected >= 1){
            newrooms[activeRoom].benches[ind][0].selected = 0;
        }

        console.log(newrooms[activeRoom].benches[ind]);

        
        setRooms(newrooms);
    }

    const handleDouble = (ind:any,which:any) =>{

        let newrooms = rooms.slice();

        if (newrooms[activeRoom].benches[ind][which].selected == 0){
            newrooms[activeRoom].benches[ind][which].selected = 1;
        }else if(newrooms[activeRoom].benches[ind][which].selected >= 1){
            newrooms[activeRoom].benches[ind][which].selected = 0;
        }

        console.log(newrooms[activeRoom].benches[ind]);
        

        setRooms(newrooms);
    }

    if (activeRoom == null || rooms[activeRoom].use == false){
        return (
            <div></div>
        )
    }

    return(
        <div>
            {rooms[activeRoom].benches.map((each:any,i:any)=>{
                if (each.length == 1){
                    return(
                        <SingleSeat ind={i} rooms={rooms} handle={handleSingle} activeRoom={activeRoom}/>
                    )
                }else{
                    return (
                        <DoubleSeat ind={i} rooms={rooms} handle={handleDouble} activeRoom={activeRoom}/>
                    )
                }
            })}
        </div>
    )
}