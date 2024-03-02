

/**
 * 
 * @param rooms 
 * {
 * 
 * }
 * @param students 
 * {
 * dept:
 * rollnos:
 * }
 */

export default function autoAddEm (rooms:any,students:any,skipbench:any) {

    var myRoom = rooms.slice();

    const dept = students.dept;
    //var myStudents = students.slice();
    var myStudents = structuredClone(students);

    const totalStudents = myStudents.rollnos.length;

    var seatingCapacity=0;
    var noOfBenches = 0;

    var gotLast = false;

    myRoom.forEach((element: any) => {

        if (element.use == false){
            return;
        }

        element.benches.forEach((bench:any) => {
            var skip = false;

            //reset benches
            if (bench[0].dept == dept){
                bench[0].dept = "";
            }
            if (bench.length > 1){
                if (bench[1].dept == dept){
                    bench[1].dept = "";
                }
            }
            
            //take count
            if (bench[0].dept != "" ){
                if (bench.length == 1){
                    skip = true;
                }
                else if (bench[1].dept != ""){
                    skip= true;
                }
            }

            if (skipbench == true){
                if (gotLast == true){
                    gotLast = false;
                }else{
                    if (skip == false){
                        seatingCapacity += 1;
                        noOfBenches += 1;
                        gotLast = true;
                    }else{
                        gotLast= false;
                    }
                }
            }
            else if (!skip){
                
                seatingCapacity += 1;
                noOfBenches += 1;
            }
        })
    });
    console.log(totalStudents,seatingCapacity);
    if (totalStudents > seatingCapacity){
        return -1;
    }

    //ARRANGEMENT DONE BELOW

    myRoom.forEach((room:any) => {
        if (room.use == false){
            return;
        }
        gotLast = false;
        room.benches.forEach((bench:any)=>{

            if (myStudents.rollnos.length == 0){
                return;
            }

            if (gotLast && skipbench){
                gotLast = false;
                return;
            }

            if (bench[0].dept == ''){
                bench[0].dept = dept;
                bench[0].rollno = myStudents.rollnos.shift();
                gotLast = true;
            }else{
                if (bench.length == 1){
                    return;
                }

                if (bench[1].dept == ''){
                    console.log('here');
                    bench[1].dept = dept;
                    bench[1].rollno = myStudents.rollnos.shift();
                    gotLast = true;
                }
            }
        })
    })
    return myRoom;


}