
import autoAddEm from "../utililties/autoaddem"

export default function SearchBar({setCount,setRooms,rooms,students,setStudents}:{setCount:any,setRooms:any,rooms:any,students:any,setStudents:any}) {

    const handleArrange = () =>{
        var ourRoom = rooms.slice();
        students.forEach((each:any) => {
            if (each.use == false){
                return;
            }
            if (ourRoom == -1){
                return;
            }
            ourRoom = autoAddEm(ourRoom,each,false);

            
        })
        if (ourRoom == -1){
            return;
        }
        console.log(ourRoom);

        setRooms(ourRoom);
    }

    const handleRoomChange = ({rooms,i}:{rooms:any,i:any}) => {
        var newrooms = rooms.slice();
        console.log(newrooms[i]);

        if (newrooms[i].use == true){
            newrooms[i].benches.forEach((element:any) => {
                element.forEach((each:any) => {
                    each.selected = 0;
                });
            });
        }

        newrooms[i].use = !newrooms[i].use;
        
        setRooms(newrooms);
    }
    const handleDeptChange = ({students,i}:{students:any,i:any}) => {
        var newstudents = students.slice();
        console.log(students[i]);

        newstudents[i].use = !newstudents[i].use;
        
        setStudents(newstudents);
    }

    return (
        <div className="grid align-middle text-black mb-6 bg-gray-500 md:grid-cols-2 gap-6 gap-x-5 space-x-4">
            
            <div>
                <label id="department" className="">Department:
                <input type="text" id="department" className=" bg--500 border border-gray-500 focus:border-blue-600 border-t-2 text-gray-900"></input>
                </label>
            </div>
            <div>
                
                <label className=" grid grid-cols-1 ">Select Depts:
                {students.map(
                    (each:any,i:any)=>(
                        <label key={i}>
                        {each.dept}: <input type="checkbox" id={i} name="room" onChange={() => {handleDeptChange({students,i})}}/> {each.rollnos.length} Students
                        </label>
                    )
                )}
                {/* <label id="myCheckbox" >
                111: <input type="checkbox" name="myCheckbox" />
                </label> */}
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
                {/* <label id="myCheckbox" >
                111: <input type="checkbox" name="myCheckbox" />
                </label> */}
                </label>
            </div>
            <div>
                <label id="Count" className="">Count:
                <input type="number" id="Count" onChange={(val) => {setCount(val.target.value);
                }} className="bg-blue 500 border border-gray-500 focus:border-blue-600 border-t-2 text-gray-900"></input>
                </label>
            </div>
            <div>
                <button onClick={()=>{handleArrange()}} className=" bg-blue-500">Auto Arrange</button>
            </div>
        </div>
    )
}