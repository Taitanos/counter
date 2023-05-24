import React from "react";
import s from "./Navbar.module.css"
import {NavLink} from "react-router-dom";

function Navbar() {
    return <div className={s.nav}>
        <div className={s.navContent}>
            <div className={s.item}>
                <NavLink to={'/counter'} className={s.activeLink}>Counter</NavLink>
            </div>
        </div>
    </div>
}

export default Navbar;