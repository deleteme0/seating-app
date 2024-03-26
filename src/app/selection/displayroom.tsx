"use client";

import { Elsie_Swash_Caps } from "next/font/google";
import { useState } from "react";
import { act } from "react-dom/test-utils";

//function SingleSeat({handle:any,ind:any,rooms:any}){
//    return(
//        <div>
//            
//        </div>
//    )
//}


const getStyle = (num:any) => {
    if (num == ""){
        return " bg-blue-500 ";
    }else{
        return " bg-red-500 ";
    }
}


const Numba = ({i}) =>{

    return (
        <div style={{color:'black',fontSize: 13, position: 'absolute', padding: 5,  borderColor: 'black', borderWidth: 1, borderRadius: 50, width: 35 }}>
            {i+1}
        </div>
    )
}

const HybridSeat = ({skipbench,info,num}) => {

    if (info.length == 0){
        return(
            <div key={info+num} style={{"display":"flex","padding":"0.5rem","flexDirection":"row","justifyContent":"center"}}   className="  flex flex-row justify-center  border-zinc-950 p-2 h-30 w-200  ">
                {/* <Numba i={num}/>
                <p key={info+num+"p"} style={{color:'black', padding: '10px', margin: '10px'}}>
                        
                        </p> */}
            </div>
        )
    }

    return(
        <div style={{"display":"flex","marginTop":"1.25rem","flexDirection":"column","verticalAlign":"middle"}} className=" flex flex-col align-middle space-y-5 ">
            
            <Numba i ={num} />
            
        <div style={{"display":"flex","padding":"0.5rem","flexDirection":"row","justifyContent":"center"}} className="  flex flex-row justify-center  border-zinc-950 p-2 h-30 w-200  ">
            
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
        </div>
    )
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

    const [count,setCount] = useState(1);

    if (activeRoom == "" || rooms[activeRoom].use == false){
        return (
            <div></div>
        )
    }

    return(
        <div id='root123' style={{"display":"flex","justifyContent":"center","alignContent":"center","verticalAlign":"middle"}} className={"flex align-middle content-center justify-center "}>
            <table style={{"alignContent":"center","borderCollapse":"collapse","tableLayout":"fixed"}} className=' table-fixed border-collapse content-center '>
            <tbody>
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
                <tr key={i+"rowboix"+"fdsaf"}>
                {/* <div key={i+"rowboix"} style={{"display":"flex","borderColor":"black","padding":"0.5rem","gap":"0.75rem","justifyContent":"center"}} className={`flex justify-center p-2 gap-3  `}> */}
                    {
                        each.map((bench,j)=>{
                            return(
                                <td style={{"borderWidth":"1px","borderColor":"#000000"}} className=" border border-black" key={i+j+"hsfdsa"}>
                                    
                                <HybridSeat skipbench={skipbench} num={j*(rooms[activeRoom].benches.length)+i} key={i+j+"hs"}info={bench} ></HybridSeat>
                                </td>
                            )
                        })
                    }
                {/* </div> */}
                </tr>
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
            </tbody>
           </table>
        </div>
    )
}