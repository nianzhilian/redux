import React from "react";

const Link = (props) => {
    console.log(props)
    return (
    <button disabled={props.active} onClick={(e)=>{e.preventDefault();props.onClick()}} style={{marginRight:'10px'}}>{props.children}</button>
    );
};

export default Link;
