import React from 'react'
import { Link, NavLink } from "react-router-dom";
import './TabMenu.css'
export default function TabMenu() {
    return (
        <ul className="content__tabs">
            <li className="content__tab">
                <NavLink to="/users" className="content__tab-link">
                    <span className="fa fa-user"></span>
                    کاربران
                </NavLink>
            </li>
            <li className="content__tab">
                <NavLink to="/infos" className="content__tab-link">
                    <span className="fa fa-book"></span>
                    اطلاعات
                </NavLink>
            </li>
            <li className="content__tab">
                <NavLink to="/courses" className="content__tab-link">
                    <span className="fa fa-store"></span>
                    دوره‌ها
                </NavLink>
            </li>

            <li className="content__tab">
                <NavLink to="/articles" className="content__tab-link">
                    <span className="fa fa-newspaper"></span>
                    وبلاگ
                </NavLink>
            </li>
        </ul>
    )
}
