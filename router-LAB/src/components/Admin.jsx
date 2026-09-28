import { Outlet } from "react-router";

export default function Admin() {
    return (
        <>
        <h1>Admin</h1>

        <Outlet />

        <footer>End of admin</footer>
        </>
    );
}