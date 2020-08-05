import React from "react";
import FilterLink from '../contains/FilterLink'

const Footer = ()=>{
    return (
        <div>
            <FilterLink filter="SHOW_ALL">SHOW_ALL</FilterLink>
            <FilterLink filter="SHOW_COMPLETED">SHOW_COMPLETED</FilterLink>
            <FilterLink filter="SHOW_ACTIVE">SHOW_ACTIVE</FilterLink>
        </div>
    )
}
export default Footer
