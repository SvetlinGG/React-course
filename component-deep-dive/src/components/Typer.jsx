export default function Typer() {

    const keyDownHandler = (event) => {
        console.log(event.key);
        
    }


    return (
        <section tabIndex={0} onKeyDown={keyDownHandler}>
            <h1>Typer</h1>
            <p>Pressed Key</p>

            <strong>A</strong>
        </section>
    );
}