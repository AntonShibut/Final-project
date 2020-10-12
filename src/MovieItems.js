import React from "react";

export default function Film({title, image}) {
    return (
        <div className="Film">
            <img src={"https://image.tmdb.org/t/p/w200/"+image} alt = {title}></img>
        </div>
    )
}