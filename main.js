function para_1(){
    var inputs = [];

    for(var i = 1 ; i <=7 ; i++)
    {
        inputs.push(document.getElementById("inputs_" + i).value);
        document.getElementById("p_1").innerHTML=inputs.join(".");  
    }
}


function para_2(){
    var input = [];

    for(var n = 8 ; n <=14 ; n++)
    {
        input.push(document.getElementById("input_" + n).value);
        document.getElementById("p_2").innerHTML=input.join(".");  
    }
}