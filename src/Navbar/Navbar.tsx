import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return <div className={s.nav}>
        <div className={s.navContent}>
            <div>
                <NavLink className={({isActive}) => isActive ? s.activeLink: s.item}to={'/counter'} >Counter</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.activeLink: s.item} to={'/stopwatch'} >Stopwatch</NavLink>
            </div>
            <div>
                <NavLink className={({isActive}) => isActive ? s.activeLink: s.item} to={'/clickbox'} >ClickBox</NavLink>
            </div>
        </div>
    </div>
}

export default Navbar;