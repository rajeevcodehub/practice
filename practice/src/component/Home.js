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
        </ul>
    );
}

export default Home;