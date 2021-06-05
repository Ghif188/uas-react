import React from 'react'
import Header from '../Header/header'
import Content from '../Content/index'
import Sidebar from '../Content/sidebar'
function Layout() {
    const [gambar,setGambar] = React.useState([])
    const [harga,setHarga] = React.useState([])
    const [jumlah,setJumlah] = React.useState([])
    const [nama,setNama] = React.useState([])
    const getData = (gambars,hargas,jumlahs,namas)=>{
        setGambar(gambars)
        setHarga(hargas)
        setJumlah(jumlahs)
        setNama(namas)
    }
    return (
        <React.Fragment>
            <div className="h-screen w-screen pl-12 font-poppins">
                <header className="h-1/10 w-full flex items-center">
                    <Header/>
                </header>
                <main className="h-9/10 w-full flex">
                    <section className="w-10/12 h-full">
                        <Content getData={getData}/>
                    </section>
                    <section className="w-2/12 h-full" style={{background: 'rgba(252, 252, 252, 0.9)'}}><Sidebar gambar={gambar} harga={harga} jumlah={jumlah} nama={nama}/></section>
                </main>
            </div>
        </React.Fragment>
    )
}

export default Layout