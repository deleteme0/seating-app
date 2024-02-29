"use client";
//function SingleSeat({handle:any,ind:any,rooms:any}){
//    return(
//        <div>
//            
//        </div>
//    )
//}

const SingleSeat = ({handle,ind,rooms}:{handle:any,ind:any,rooms:any}) =>{
    return(
        <div>
            <button onClick={() => {handle(ind)}}>one</button>

        </div>
    )
}
const  DoubleSeat = ({handle,ind,rooms}:{handle:any,ind:any,rooms:any}) => {
    return(
        <div>
            <button onClick={() => {handle(ind,0)}}>one</button>
            <button onClick={() => {handle(ind,1)}}>two</button>
        </div>
    )
}

export default function DisplayRoom({rooms,activeRoom,setRooms}:{rooms:any,activeRoom:any,setRooms:any}) {

    const handleSingle = (ind:any) =>{
        let newrooms = rooms.slice();
        
        if (newrooms[activeRoom].benches[ind][0] == 0){
            newrooms[activeRoom].benches[ind][0] = 1;
        }else if(newrooms[activeRoom].benches[ind][0] >= 1){
            newrooms[activeRoom].benches[ind][0] = 0;
        }

        console.log(newrooms[activeRoom].benches[ind]);

        
        setRooms(newrooms);
    }

    const handleDouble = (ind:any,which:any) =>{

        let newrooms = rooms.slice();

        if (newrooms[activeRoom].benches[ind][which] == 0){
            newrooms[activeRoom].benches[ind][which] = 1;
        }else if(newrooms[activeRoom].benches[ind][which] >= 1){
            newrooms[activeRoom].benches[ind][which] = 0;
        }

        console.log(newrooms[activeRoom].benches[ind]);
        

        setRooms(newrooms);
    }

    if (activeRoom == null){
        return (
            <div></div>
        )
    }

    return(
        <div>
            {rooms[activeRoom].benches.map((each:any,i:any)=>{
                if (each.length == 1){
                    return(
                        <SingleSeat ind={i} rooms={rooms} handle={handleSingle}/>
                    )
                }else{
                    return (
                        <DoubleSeat ind={i} rooms={rooms} handle={handleDouble}/>
                    )
                }
            })}
        </div>
    )
}