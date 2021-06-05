import React from "react";
import Banner from "./banner.jsx";
import Nav from "./nav.jsx";
import Category from "./category.jsx";
import {Switch, Route} from "react-router-dom"
import axios from "axios";
import Bintang from "../../Images/navbar/Vector.png";
import Popup from "reactjs-popup";

function Content(props) {
    const [populer, setPopuler] = React.useState([])
    const [angka, setAngka] = React.useState(0)
    const getPopuler = async() => {
        try{
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/all`;
            const response = await axios.get(url);
            console.log(response);
            setPopuler(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getPopuler();
    }, []);

    const [gambar,setGambar] = React.useState([])
    const [jumlah,setJumlah] = React.useState([])
    const [harga,setHarga] = React.useState([])
    const [nama,setNama] = React.useState([])
    
    const getData = (gambars,jumlahs,hargas,namas)=>{
        setGambar(gambars)
        setJumlah(jumlahs)
        setHarga(hargas)
        setNama(namas)
    }
    
    props.getData(gambar,jumlah,harga,nama)

    return(
        <React.Fragment>
            <header className="h-1/4 w-full pr-10 pt-3"><Banner/></header>
            <nav className="h-3/10 w-full pr-10"><Nav/></nav>
            <section className="h-5/10 w-full">
                <Switch>
                    <Route path={`/category/:id`} getData={getData}>
                        <Category/>
                    </Route>
                    <Route path="/">
                        <div className="flex items-center justify-between">
                            <h1 className="text-3xl font-extrabold">Populer</h1>
                        </div>
                        <div className="mt-5 flex w-full items-center relative justify-between">
                            <ul className="flex flex-wrap w-full items-center justify-between overflow-auto">
                                {populer.map((dt, index)=> (
                                    <li key={index} className="w-1/4 shadow-2xl bg-white rounded-xl h-62 p-2 m-5">
                                        <Popup trigger={
                                            <div className="rounded-full relative p-1">
                                                <p className="absolute bg-white shadow-2xl rounded-full mt-24 p-1 ml-3">{dt.waktu}</p>
                                                <img src={dt.image} alt={dt.image} className="rounded-2xl w-full h-36"/>
                                                <p className="font-extrabold text-lg">{dt.name}</p>
                                            </div>
                                        } modal>
                                        {close => (
                                            <div style={{width:'450px'}}className="bg-white p-4 shadow-xl w-full rounded-2xl font-poppins">
                                                <img src={dt.image} className="rounded-xl w-full h-36" alt={dt.image} />
                                                <div className="flex justify-between mt-3 p-3">
                                                    <p className="font-extrabold text-2xl">{dt.name}</p>
                                                    <p className="font-extrabold text-2xl">Rp. {dt.harga}</p>
                                                </div>
                                                <div className="flex">
                                                    <div className="rounded-full ml-3 border-black">
                                                        <p>{dt.waktu}</p>
                                                    </div>
                                                    <div className="rounded-full ml-5 flex border-black">
                                                        <img src={Bintang} alt={Bintang} className="h-5 font-bold mr-2"/>
                                                        <p className="font-bold">{dt.rating}</p>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between mt-3 p-3">
                                                    <p className="text-md text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
                                                        Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
                                                        delectus doloremque, explicabo tempore dicta adipisci fugit amet dignissimos?
                                                    </p>
                                                </div>
                                                <div className="font-extrabold p-3 flex text-md">
                                                    Stok:
                                                    <input className="w- text-center font-semibold text-md outline-none items-center" value={dt.jumlah}/>
                                                </div>
                                                <div className="flex justify-between  ml-3 ">
                                                    <div className="custom-number-input h-10 w-32">
                                                        <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                                                            <button disabled={dt.pesan === 0} onClick={ () =>{
                                                                    dt.jumlah++
                                                                    setAngka(dt.pesan--)
                                                                }
                                                            } className=" bg-gray-100 text-gray-600 h-full w-20">
                                                                <span className="m-auto text-2xl font-thin">−</span>
                                                            </button>
                                                            <input className="text-center w-full bg-gray-300 font-semibold text-md flex items-center text-gray-700  outline-none" value={dt.pesan}/>
                                                            <button disabled={dt.jumlah === 0} onClick={ () => {
                                                                    dt.jumlah--
                                                                    setAngka(dt.pesan++)
                                                                }
                                                            } className="bg-yellow-100 text-gray-600 h-full w-20">
                                                                <span className="m-auto text-2xl font-thin">+</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <button className="bg-yellow-400 rounded-lg p-1 items-center" onClick={() => {
                                                        setGambar(dt.image)
                                                        setHarga(dt.harga)
                                                        setJumlah(dt.jumlah)
                                                        setNama(dt.name)
                                                    }}>
                                                        <p className="text-xl font-bold text-center">Tambah Pesanan</p>
                                                    </button>
                                                </div>
                                                {/* <a className="close" onClick={close}>
                                                &times;
                                                </a> */}
                                            </div>
                                            )}
                                        </Popup>
                                        <div className="flex bg-white rounded-xl">
                                            <img src={Bintang} alt={Bintang} className="h-5 font-bold mr-3"/>
                                            <p className="font-bold">{dt.rating}</p>
                                            <p className="ml-20 font-bold">Rp. {dt.harga}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Route>
                </Switch>
            </section>
        </React.Fragment>
    )
}

export default Content
