export const formatCommas = str => {
    console.log(str);
    var array = str.split("");
    var data = "";
    var count = 0;
    for(var i=array.length-1; i >= 0; i--) {
        count++;
        if(count>3) {
            data += ','
            count=1;
        } 
            data += array[i];
    }
    var final = "";
    for(var i=data.length-1; i>-1;i--) {
        final += data[i]
    }
    return final;
}