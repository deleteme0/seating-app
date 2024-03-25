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

const SingleSeat = ({ info,selected,handle, ind, rooms, activeRoom }: { info:any,selected:boolean,handle: any, ind: any, rooms: any, activeRoom: any }) => {
    return (
        <div className="bench">
            <button onClick={() => { handle(ind) }} className={getStyle(rooms[activeRoom].benches[ind][0].dept)}>
                {
                    rooms[activeRoom].benches[ind].map((each: any, index: number) => (
                        <div key={index+"ss"} style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: each.dept !== "" ? 'lightgrey' : 'white', width: '150px' }}>
                            {selected ? `${info}` : "Available"}
                        </div>
                    ))
                }
            </button>
        </div>
    );
}

const Numba = ({i}) =>{

    return (
        <div style={{'position':'absolute',}}>
            {i+1}
        </div>
    )
}

const HybridSeat = ({skipbench,info,num}) => {

    if (info.length == 0){
        return(
            <div style={{"display":"flex","padding":"0.5rem","justifyContent":"center","borderColor":"black","borderWidth":"2px"}} className=" flex justify-center border-2 border-zinc-950 p-2 h-30 w-200 ">
                <Numba i={num}/>
                <p  style={{color:'black', padding: '10px', margin: '10px'}}>
                        ************
                        </p>
            </div>
        )
    }

    return(
        <div style={{'textAlign':'center','color':'black','fontSize':10,"display":"flex","padding":"0.5rem","flexDirection":"row","borderColor":"black","justifyContent":"center","borderWidth":"2px"}} className="  flex flex-row justify-center border-2 border-zinc-950 p-2 h-30 w-200  ">
            <Numba i={num}/>
            {
                info.map((seat,i)=>{
                    if (skipbench && i!=0){
                        return;
                    }
                    return(
                        <button key={i+seat.dept+seat.rollno} style={{border: '1px solid black', padding: '10px', margin: '10px',backgroundColor: seat.dept == ""? '#0ea5e9' : '#e11d48'}}>
                            {seat.dept !== ""? seat.rollno : "------------"}
                        </button>
                    )
                })
            
}
        </div>
    )
}
const ctr=0;
const DoubleSeat = ({ handle, ind, rooms, activeRoom }: { handle: any, ind: any, rooms: any, activeRoom: any }) => {
    return (
        <div className="bench">
            <button onClick={() => { handle(ind, 0) }} className={getStyle(rooms[activeRoom].benches[ind][0].dept)}>
                {
                    rooms[activeRoom].benches[ind].slice(0, 1).map((each: any, index: number) => (
                        <div key={index+"ds1"} style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: each.dept !== "" ? 'lightgrey' : 'white', width: '150px' }}>
                            {each.dept !== "" ? `${each.dept} {ctr} ${each.rollno}` : "Available"}
                        </div>
                    ))
                }
            </button>
            <button onClick={() => { handle(ind, 1) }} className={getStyle(rooms[activeRoom].benches[ind][1].dept)}>
                {
                    rooms[activeRoom].benches[ind].slice(1, 2).map((each: any, index: number) => (
                        <div key={index+"ds2"} style={{ border: '1px solid black', padding: '10px', margin: '10px', backgroundColor: each.dept !== "" ? 'lightgrey' : 'white', width: '150px' }}>
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

export default function DisplayRoom({skipbench,rooms,activeRoom,setRooms}:{skipbench:any,rooms:any,activeRoom:any,setRooms:any}) {

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
        <div id='root123'  style={{"display":"flex","overflow":"scroll","padding":"1.25rem","flexDirection":"column","borderWidth":"2px","verticalAlign":"middle","borderCollapse":"collapse"}} className={" flex flex-col align-middle border-collapse border-2 p-5 border-neutral-500 overflow-scroll "}>
            {rooms[activeRoom].benches.map((each:any,i:any)=>{
                return(
                // each.map((bench,j)=>{
                //     if (bench.length == 1){
                //         console.log(bench)
                //         return(
                //         <SingleSeat key={i+j+"ssmain"+bench[0]} ind={i} rooms={rooms} selected={bench[0].dept == ""} info={bench[0].dept} handle={handleSingle} activeRoom={activeRoom}/>
                //         )
                //     }
                //     else{
                //         return(
                //         <DoubleSeat key={i+j+"dsmain"} ind={i} rooms={rooms} handle={handleDouble} activeRoom={activeRoom}/>
                //         )
                //     }
                // })
                
                <div key={i+"rowboix"} style={{"display":"flex","borderColor":"black","padding":"0.5rem","gap":"0.75rem","justifyContent":"center"}} className={`flex justify-center p-2 gap-3  `}>
                    {
                        each.map((bench,j)=>{
                            return(
                                <HybridSeat skipbench={skipbench} num={j*(rooms[activeRoom].benches.length)+i} key={i+j+"hs"}info={bench} ></HybridSeat>
                            )
                        })
                    }
                </div>
                )
                // if (each.length == 1){
                //     return(
                //         <SingleSeat key={i+"ssmain"} ind={i} rooms={rooms} handle={handleSingle} activeRoom={activeRoom}/>
                //     )
                // }else{
                //     return (
                //         <DoubleSeat key={i+"dsmain"} ind={i} rooms={rooms} handle={handleDouble} activeRoom={activeRoom}/>
                //     )
                // }
            })}
           
        </div>
    )
}