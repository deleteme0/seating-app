"use client";

import { Elsie_Swash_Caps } from "next/font/google";
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
        <button onClick={() => {handle}} className=" bg-lime-500 "></button>
    )
}

const getStyle = (num:any) => {
    if (num == ""){
        return " bg-blue-500 ";
    }else{
        return " bg-red-500 ";
    }
}

const SingleSeat = ({ handle, ind, rooms, activeRoom }: { handle: any, ind: any, rooms: any, activeRoom: any }) => {
    return (
        <div className="bench">
            <button onClick={() => { handle(ind) }} className={getStyle(rooms[activeRoom].benches[ind][0].dept)}>
                {
                    rooms[activeRoom].benches[ind].map((each: any, index: number) => (
                        <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: each.dept !== "" ? 'lightgrey' : 'white', width: '150px' }}>
                            {each.dept !== "" ? `${each.dept} ${each.rollno}` : "Available"}
                        </div>
                    ))
                }
            </button>
        </div>
    );
}

const DoubleSeat = ({ handle, ind, rooms, activeRoom }: { handle: any, ind: any, rooms: any, activeRoom: any }) => {
    return (
        <div className="bench">
            <button onClick={() => { handle(ind, 0) }} className={getStyle(rooms[activeRoom].benches[ind][0].dept)}>
                {
                    rooms[activeRoom].benches[ind].slice(0, 1).map((each: any, index: number) => (
                        <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: each.dept !== "" ? 'lightgrey' : 'white', width: '150px' }}>
                            {each.dept !== "" ? `${each.dept} ${each.rollno}` : "Available"}
                        </div>
                    ))
                }
            </button>
            <button onClick={() => { handle(ind, 1) }} className={getStyle(rooms[activeRoom].benches[ind][1].dept)}>
                {
                    rooms[activeRoom].benches[ind].slice(1, 2).map((each: any, index: number) => (
                        <div key={index} style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: each.dept !== "" ? 'lightgrey' : 'white', width: '150px' }}>
                            {each.dept !== "" ? `${each.dept} ${each.rollno}` : "Available"}
                        </div>
                    ))
                }
            </button>
        </div>
    );
}


/*
const SingleSeat = ({handle,ind,rooms,activeRoom}:{handle:any,ind:any,rooms:any,activeRoom:any}) =>{
    return(
        <div>
            <button onClick={() => {handle(ind)}} className={getStyle(rooms[activeRoom].benches[ind][0].selected)}> 
            {
                rooms[activeRoom].benches[ind].map((each:any)=>{
                    if (each.dept != ""){
                        return(<p> {each.dept} {each.rollno}</p>)
                    }
                    return(<p> Available</p>)
                    
                })
            }
            </button>
        </div>
    )
}
const  DoubleSeat = ({handle,ind,rooms,activeRoom}:{handle:any,ind:any,rooms:any,activeRoom:any}) => {
    return(
        <div>
            <button onClick={() => {handle(ind,0)}} className={getStyle(rooms[activeRoom].benches[ind][0].selected)}> 
            {
                rooms[activeRoom].benches[ind].slice(0,1).map((each:any)=>{
                    if (each.dept != ""){
                        return(<p> {each.dept} {each.rollno}</p>)
                    }
                    return(<p> Available</p>)
                    
                })
            }
            </button>
            <button onClick={() => {handle(ind,1)}} className={getStyle(rooms[activeRoom].benches[ind][1].selected)}>
            {
                rooms[activeRoom].benches[ind].slice(1,2).map((each:any)=>{
                    if (each.dept != ""){
                        return(<p> {each.dept} {each.rollno}</p>)
                    }
                    return(<p> Available</p>)
                    
                })
            }
            </button>
        </div>
    )
}
*/

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

    if (activeRoom == "" || rooms[activeRoom].use == false){
        return (
            <div></div>
        )
    }

    return(
        <div className=" border-collapse border-2  border-neutral-500">
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