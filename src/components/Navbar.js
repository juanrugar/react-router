import React from 'react';

const Navbar = () => {
    return (
        <nav className='ui raised very padded text container segment' 
            style={{marginTop: '80px'}} 
        ><a className='ui teal inverted segment'>Irene</a>    
        <div className='ui header'>
            <button className='ui button '><a href='/'>Home</a></button>
            <button className='ui button '><a href='/about'>About</a></button>
            <button className='ui button '><a href='/contact'>Contact</a></button>
        </div>
        </nav>
    )
}

export default Navbar;