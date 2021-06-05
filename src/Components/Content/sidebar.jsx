import React from "react";
import Mobil from "../../Images/navbar/mobil.png"

function Sidebar(props) {

    let data = [
        {
            Image: props.gambar,
            Harga: props.harga,
            Jumlah: props.jumlah,
            Nama: props.nama,
        }
    ]

    console.log(data)
    return (
        <React.Fragment>
            <div className="pt-3 fixed pl-5 pr-5">
                <p className="text-3xl">Pesanan Saya</p>
                <div className="bg-blue-500 rounded-xl text-white mt-12 p-3">
                    <p>Mr. Ghifari</p>
                    <p className="text-xl font-bold mt-8">Rp. 15.000.000</p>
                    <p className="mt-8">8 9 0 1 * * * * * * 5 6 7 2</p>
                </div>
                <div>
                    {data.map((dt, i) => (
                        dt.Harga * dt.Jumlah === 0 ? "" : <li key={i} className="flex items-center justify-between w-full h-24 relative">
                            <img className="rounded-xl w-2/12 h-8 " src={dt.Image} alt={dt.Image} />
                            <div className="flex">
                                Rp. {dt.Jumlah}
                            </div>
                            <div className="font-bold">{props.nama}</div>
                            <div>
                                {dt.Harga * dt.Jumlah}
                            </div>
                        </li>
                    ))}
                </div>
                <div className="flex justify-between mt-10">
                    <img src={Mobil} className="w-1/10 h-2/10 mt-2" alt={Mobil} />
                    <p>jl. citra indah</p>
                    <p className="text-gray-400">gratis</p>
                </div>
                <div className="flex justify-between items-center mt-20">
                    <p className="font-bold">Total:</p>
                    <p className="text-3xl">Rp. 0</p>
                </div>
                <div className="bg-yellow-400 rounded-2xl items-center mt-12 p-3">
                    <p className="text-xl font-bold text-center">Pesan &gt;</p>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sidebar