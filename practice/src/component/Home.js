import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <ul>
            <li >
                <Link to="/stopwatch">Stop Watch</Link>
            </li>
            <li >
                <Link to="/toDo">To Do</Link>
            </li>
            <li >
                <Link to="/progressbar">ProgressBar</Link>
            </li>
            <li >
                <Link to="/animation">Animation</Link>
            </li>
            <li >
                <Link to="/whack-a-mole">Whack-A-Mole</Link>
            </li>
            <li >
                <Link to="/debouncing">using Debouncing</Link>
            </li>
            <li >
                <Link to="/throttling">using Throttling</Link>
            </li>
            <li >
                <Link to="/calculator">Calculator</Link>
            </li>
        </ul>
    );
}

export default Home;