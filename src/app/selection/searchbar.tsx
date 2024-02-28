
export default function SearchBar({setCount,setRooms,rooms}:{setCount:any,setRooms:any,rooms:any}) {

    const handleRoomChange = ({rooms,i}:{rooms:any,i:any}) => {
        var newrooms = rooms.slice();
        console.log(newrooms[i]);
        newrooms[i].use = !newrooms[i].use;
        
        setRooms(newrooms);
    }

    return (
        <div className="grid align-middle text-black mb-6 bg-gray-500 md:grid-cols-2 gap-6 gap-x-5 space-x-4">
            
            <div>
                <label id="department" className="">Department:
                <input type="text" id="department" className=" bg-red-500 border border-gray-500 focus:border-blue-600 border-t-2 text-gray-900"></input>
                </label>
            </div>
            <div>
                
                <label className=" grid grid-cols-1 ">Select Rooms:
                {rooms.map(
                    (each:any,i:any)=>(
                        <label key={i}>
                        {each.roomno}: <input type="checkbox" id={i} name="room" onChange={() => {handleRoomChange({rooms,i})}}/>
                        </label>
                    )
                )}
                <label id="myCheckbox" >
                111: <input type="checkbox" name="myCheckbox" />
                </label>
      </label>
            </div>
            <div>
                <label id="Count" className="">Count:
                <input type="number" id="Count" onChange={(val) => {setCount(val.target.value);
                }} className=" bg-red-500 border border-gray-500 focus:border-blue-600 border-t-2 text-gray-900"></input>
                </label>
            </div>
        </div>
    )
}