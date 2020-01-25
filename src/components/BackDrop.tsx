import React from 'react'
import '../css/BackDrop.css'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    sideDrawerOpen:any
    toggleSideDrawer:any
}

const BackDrop:React.FC<Props> = (props) => {
    let cname = props.sideDrawerOpen ? 'backdrop open' : 'backdrop'
return (<div onClick={props.toggleSideDrawer} className={cname}></div>) 
}
export default BackDrop