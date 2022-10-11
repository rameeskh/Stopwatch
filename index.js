const stopwatch=document.getElementById("time")

const playbtn=document.getElementById("playbtn")
const pausebtn=document.getElementById("pausebtn")
const resetbtn=document.getElementById("resetbtn")


let startTime;
let elapsedTime=0;
let stopWatchInterval;

const updateTime=(elapsedTime)=>{
    let hh=elapsedTime/3600000
    let hrs=Math.floor(hh)

    let mm=(hh-hrs)*60
    let mins=Math.floor(mm)

    let ss=(mm-mins)*60
    let secs=Math.floor(ss)

    let ms=(ss-secs)*1000;
    let millisec=Math.floor(ms);

    stopwatch.innerText=`${hrs.toString()}:${mins.toString()}:${secs.toString()}:${millisec.toString()}`

}

const startstopwatch=()=>{
    startTime=Date.now()-elapsedTime;

    playbtn.style.display="none"
    pausebtn.style.display="block"
    stopWatchInterval=setInterval(()=>{
        elapsedTime=Date.now()-startTime

        updateTime(elapsedTime);
    },1)
    
};


const stopstopwatch=()=>{
    clearInterval(stopWatchInterval);
    playbtn.style.display="block"
    pausebtn.style.display="none"
}

const resetstopwatch=()=>{
    clearInterval(stopWatchInterval);
    stopwatch.innerText="00:00:00:000"
    elapsedTime=0;
    playbtn.style.display="block"
    pausebtn.style.display="none"
}


playbtn.addEventListener('click',startstopwatch)

pausebtn.addEventListener('click',stopstopwatch)
resetbtn.addEventListener('click',resetstopwatch)