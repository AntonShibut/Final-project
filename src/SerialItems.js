import React from "react";


export default function Serial({title, image}) {
    return (
        <div className="Film_TopLine Film_Main ">
            <img src={"https://image.tmdb.org/t/p/w200/"+image} alt = {title}></img>
        </div>
    )
}