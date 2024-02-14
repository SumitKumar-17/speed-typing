import { useCallback, useEffect, useRef, useState } from "react";

const useCountDownTimer=(seconds:number)=>{
    const [timeLeft,setTimeLeft]=useState(seconds);
    const intervalRef=useRef<NodeJS.Timer |null>(null);


    const startCountdown=useCallback(()=>{
        console.log("starting the countdown...");

        intervalRef.current=setInterval(()=>{
            setTimeLeft((timeLeft)=>timeLeft-1);
        },1000);
    },[setTimeLeft]);


    const resetCountdown=useCallback(()=>{
        console.log("Resetting countdown...");

        if(intervalRef.current){
            clearInterval(intervalRef.current);
        }

        setTimeLeft(seconds);

    },[seconds]);

    //when the condition reaches 0 .clear the countdown interval

    useEffect(()=>{
        if(!timeLeft &&intervalRef.current){
            console.log("clearint the timer...");

            clearInterval(intervalRef.current);
        }
    },[timeLeft,intervalRef]);
    
    return {timeLeft,startCountdown,resetCountdown};
}

export default useCountDownTimer;