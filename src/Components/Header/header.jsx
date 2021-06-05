import React from "react"
import Logo from '../../Images/header/logo.png'
import Hati from '../../Images/header/Vector (1).png'
import Kotak from '../../Images/header/Vector.png'
import Profile from '../../Images/header/profile.png'
import Bulet from '../../Images/header/Ellipse 3.png'

function Header() {
    return(
        <React.Fragment>
            <section className="w-5/6 flex items-center">
                <div className="w-1/3">
                    <img src={Logo} alt={Logo}/>
                </div>
                <div className="w-2/3 mr-10 relative">
                    <svg class="w-6 h-6 absolute top-3 left-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input className="w-full text-lg px-10 py-3 rounded-3xl bg-gray-100 font-poppins" placeholder="Cari Makan ? Disini...." type="text" />
                </div>
            </section>
            <section style={{background: 'rgba(252, 252, 252, 0.9)'}} className="w-1/6 h-full pl-10 pr-5 flex items-center justify-between ">
                <div>
                    <img className="w-1/2" src={Kotak} alt={Kotak}/>
                </div>
                <div>
                    <img className="w-1/2" src={Hati} alt={Hati}/>
                </div>
                <div>
                    <img className="w-1/2" src={Bulet} alt={Bulet}/>
                </div>
                <div>
                    <img className="w-1/2" src={Profile} alt={Profile}/>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Header