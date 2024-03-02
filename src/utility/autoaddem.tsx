

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

export default function autoAddEm (rooms:any,students:any) {

    var myRoom = rooms.slice();

    var myStudents = students.slice();

    const totalStudents = myStudents.rollnos.length;

    var seatingCapacity=0;
    var noOfBenches = 0;

    myRoom.forEach((element: any) => {
        element.benches.forEach((bench:any) => {
            var skip = false;
            if (bench[0].dept != "" ){
                if (bench.length == 1){
                    skip = true;
                }
                if (bench[1].dept != ""){
                    skip= true;
                }
                
            }
            if (!skip){
            seatingCapacity += 1;
            noOfBenches += 1;
            }
        })
    });

    if (totalStudents > seatingCapacity){
        return "Not enough benches";
    }

    
}