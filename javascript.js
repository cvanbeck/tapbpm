let lastTime = 0;
let nextTime = 0;
let timeArray = [];
let timeBetweenAvg = 0;
let bpm = 0;

function differenceInTime(){
    if(nextTime == 0){
        nextTime = Date.now()
        return
    }
    lastTime = nextTime;
    nextTime = Date.now()
    timeArray.push((nextTime - lastTime)/1000)
    //console.log((nextTime - lastTime)/1000)
}

function averageTimeBetween(){
    const sum = timeArray.reduce((a, b) => a + b, 0)
    timeBetweenAvg = (sum / timeArray.length).toFixed(3)
    
}

function bpmFinder(){
    bpm = (60/timeBetweenAvg)
    console.log(Math.round(bpm))
}


const button = document.querySelector("button")
button.addEventListener("click",() => {
    differenceInTime();
    averageTimeBetween();
    bpmFinder();
    if (timeArray.length > 4){
        console.log("TEST")
        timeArray.shift(1)
    }
    console.log(timeArray)
})

