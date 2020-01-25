import React from 'react'
import {Link} from 'react-router-dom'
import '../css/menubar.css'
import HamburgerButton from './HamburgerButton'

interface Props {
setSearch:any
toggleSideDrawer:any
}

const Menubar: React.FC<Props> = (props) => {
    const handleChange = (e: any) => {
        e.preventDefault()
        props.setSearch(e.target.value)
    }
    const clearFilterInput=()=>{
      const doc=document.getElementById('filterinput') as HTMLInputElement
      if(doc){
        props.setSearch('')
        doc.value=''
      }
    }
    
    return (<div >
        <header className='menubar'>
            <nav className='menubar_navigation'>
                <HamburgerButton className='hamburgerMenu' onClick={props.toggleSideDrawer}></HamburgerButton>
                <Link onClick={clearFilterInput} className='logo' to='/'>Countries</Link>
                <Link onClick={clearFilterInput} className='menuLinkItem' to='/Africa'>Africa</Link>
                <Link onClick={clearFilterInput} className='menuLinkItem' to='/Europe'>Europe</Link>
                <Link onClick={clearFilterInput} className='menuLinkItem' to='/Americas'>Americas</Link>
                <Link onClick={clearFilterInput} className='menuLinkItem' to='/Asia'>Asia</Link>
                <Link onClick={clearFilterInput} className='menuLinkItem' to='/Oceania'>Oceania</Link>

                <Link onClick={clearFilterInput} className='menuLinkItem' to='/All'>All</Link>
                <input id='filterinput' placeholder='filter by name' onChange={handleChange}></input>
            </nav>
        </header>
        
    </div>)
}

  export default Menubar