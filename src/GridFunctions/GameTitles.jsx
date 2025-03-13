import React from "react";
import { FcComments } from "react-icons/fc";

export default function GameTitles({ gameTitles }) {
    return (
        <div className="button-container">
            <button className="game-title-memory">
                <FcComments onClick={() => gameTitles('memorization')} size={50} />
            </button>
        </div>
    );
}