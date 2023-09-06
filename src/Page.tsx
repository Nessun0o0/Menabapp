import React from "react";
import "./Page.css"

function Page({title, content, className}) {
    return (
        <div className={"A4 " + className}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

export default Page