

export default function MatStyle({rooms,setRoom}){
    var edit = true
    if (setRoom){
         edit = true;
    }else{
         edit = false;
    }
    //console.log(rooms.length)
    if (rooms.length == 0){
        return (
            <></>
        )
    }

    // rooms = [
    //     [[{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0},{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}]],
    //     [[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}]],
    //     [[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}]],
    //     [[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}],[{dept:"",rollno:"",selected:0}]]
    // ]

    const handleDaClick = (i:number,j:number,k:number) =>{

        var newrooms = rooms.slice();

        console.log(i,j,k);

        if (newrooms[i][j][k].selected == 1){
            newrooms[i][j][k].selected = 0
        } else{
            newrooms[i][j][k].selected = 1
        }

        console.log(newrooms)

        
        setRoom(newrooms)
        
    }

    return(
        <>
        <div className=" flex flex-col overflow-scroll space-y-1">

        {rooms.map((row,i) =>(
            <div key={"row"+i} className=" flex flex-row space-x-3  " ><div className=" " >{i+1}</div>
            {row.map((bench,j) =>(
                <div key={"bench"+i+j} className="flex flex-row p-1 bg-gray-600 rounded space-x-1 border-rose-600  " > 
                
                {bench.map((seat,k) =>(
                    <button className="  " key={"thisis"+i+j+k} onClick={()=>handleDaClick(i,j,k)} style={{backgroundColor: seat.selected == 0 ? "indianred" : "powderblue" }}>seat</button>
                ))}
                </div>
            ))}
            </div>
        ))
        }
        </div>
        </>
    )
}