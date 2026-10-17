export default function Timer() {

    let seconds = 0;

    setTimeout(() => {
        seconds ++;
        console.log(seconds);
        
    },1000)


    return (
        <>
        <h1>Timer</h1>
        <p>{seconds} seconds</p>
        </>
    );
}