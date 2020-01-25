import React from 'react'
import '../css/sideDrawer.css'
import { Link } from 'react-router-dom' 

interface Props {
    sideDrawerOpen:boolean
}

const SideDrawer: React.FC<Props> = (props) => {
    let cname = props.sideDrawerOpen ? 'sidedrawer open' : 'sidedrawer'
    return (
        <nav className={cname}>
            <ul>
                <li><Link  to="/Africa">Africa </Link></li>
                <li><Link  to="/Europe">Europe </Link></li>
                <li><Link  to="/Americas">Americas </Link></li>
                <li><Link  to="/Asia">Asia </Link></li>
                <li><Link  to="/All">All </Link></li>
            </ul>
        </nav>
    )
}
export default SideDrawer