import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return <div className={s.nav}>
        <div className={s.navContent}>
            <button className={s.button}>
                <div className={s.linkName}>
                    <NavLink className={({isActive}) => isActive ? s.activeLink: s.item}to={'/counter'} >Counter</NavLink>
                </div>
            </button>
            <button className={s.button}>
                <div className={s.linkName}>
                    <NavLink className={({isActive}) => isActive ? s.activeLink: s.item} to={'/stopwatch'} >Stopwatch</NavLink>
                </div>
            </button>
            <button className={s.button}>
                <div className={s.linkName}>
                    <NavLink className={({isActive}) => isActive ? s.activeLink: s.item} to={'/clickbox'} >ClickBox</NavLink>
                </div>
            </button>
        </div>
    </div>
}

export default Navbar;