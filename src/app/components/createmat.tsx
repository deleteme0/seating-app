

export default function createMat (lim,r,c){

    var res = [];

    if (lim == "" || lim == 0){
        return -1;
    }
    if (r == "" || c == 0){
        return -1
    }

    const each ={
        dept:"",
        rollno:"",
        selected:""
    }

    for (var i=0;i<r;i++){
        var curr = [];
        for(var j=0;j<c;j++){
            var currdis = [];

            for(var k=0;k<lim;k++){
                currdis.push(each)
            }
            curr.push(currdis);
        }
        res.push(curr);
    }

    return res;

}