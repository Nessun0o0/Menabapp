import React from "react";
import "./Page.css"

function Page({title, content}) {
    return (
        <div className="A4">
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Page