import React from 'react'
import styled from 'styled-components'
import '../index.css'
import '../dashboard.css'

export default function Header() {
    return (
        <>
            <div className="header">
                <div>
                    <img id="logo" src="./static/logo_used_in_header.svg" alt="" />
                </div>
                <ul className="navbar">
                    <li className='menuItems'> DASHBOARD</li>
                    <li className='menuItems'> CONTENT</li>
                    <li className='menuItems'> USERS</li>
                    <li className='menuItems'> REPOSRTS</li>
                    <li className='menuItems'> ADMIN</li>
                    <li>
                        <img className="alertsImg" src="./static/alerts.svg" alt="" />
                    </li>
                    <li>
                        <img className="announcementsImg" src="./static/announcements.svg" alt="" />
                    </li>
                    <li>
                        <img className="accountImg" src="./static/account_circle.svg" alt="" />
                    </li>
                    <li className='hemburger'>
                        <img src="./static/hamburger.svg"  />
                    </li>
                </ul>
            </div>
        </>
    )
}
