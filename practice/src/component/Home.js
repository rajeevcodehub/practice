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
        </ul>
    );
}

export default Home;