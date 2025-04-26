import React from "react";
import ReactDOM from "react-dom/client";
import {FirstApp} from "./FisrtApp.jsx";
import "./styles.css"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp title={"Hola, soy Heiner"} message={"Welcome!"} />
    </React.StrictMode>
);