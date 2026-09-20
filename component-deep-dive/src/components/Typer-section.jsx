import Typer from "./Typer";

export default function TyperSection() {

    const pauseHandler = () => {

    }


    return (

        <section>
            <h1>Typer</h1>
            <Typer />
            <button onClick={pauseHandler}>Pause</button>
        </section>
    );
}