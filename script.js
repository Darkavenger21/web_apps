var hr = 0;
var min = 0;
var sec = 0;
var count = 0;

var timer = false;

function start(){
    timer = true;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;

    hr=0;
    min=0;
    sec=0;
    count=0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("count").innerHTML = "00";
}

function stopwatch(){
    if(timer==true)
    {
        count = count+1;
        if(count == 100){
            sec = sec+1;
            count = 0;
        }
        if(sec == 60){
            min = min+1;
            sec = 0;
        }
        if(min == 60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }

        var hrst = hr;
        var minst = min;
        var secst = sec;
        var countst = count;

        if(hr<10){
            hrst = "0" + hrst;
        }
        if(min<10){
            minst = "0" + minst;
        }
        if(sec<10){
            secst = "0" + secst;
        }
        if(count<10){
            countst = "0" + countst;
        }

        document.getElementById("hr").innerHTML = hrst;
        document.getElementById("min").innerHTML = minst;
        document.getElementById("sec").innerHTML = secst;
        document.getElementById("count").innerHTML = countst;

        setTimeout( "stopwatch()", 10);
    }    
}