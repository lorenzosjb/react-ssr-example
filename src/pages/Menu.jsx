import React from "react";
import { Link, Outlet } from "react-router-dom";

export function Menu() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/About">About</Link></li>
                    <li><Link to="/Articles">Articles</Link></li>
                </ul>
            </nav>

            <hr/>

            <Outlet />
        </>
    );
}