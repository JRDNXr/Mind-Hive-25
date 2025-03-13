import { useState, useEffect } from "react";
import Grid from "./GridLayout.jsx";
import Titles from "./GameTitles.jsx";

import './styles/app.css'

export default function App() {
    return (
        <div className="app-container">
            <Grid />
            <Titles />
        </div>
    );
}