import React from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";

function Nav(params) {
    const [category, setCategory] = React.useState([])
    const getCategory = async() => {
        try{
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/category/all`;
            const response = await axios.get(url);
            console.log(response);
            setCategory(response.data.data);
        } catch (error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getCategory();
    }, []);

    return(
        <React.Fragment>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-extrabold">Kategori</h1>
                <button style={{background: "#FB6D3A"}} className="text-xs rounded-xl text-white px-3 py-2">Lebih Lengkap</button>
            </div>
            <div className="mt-5 flex w-full items-center relative justify-between">
                <ul className="flex-nowrap flex w-full items-center justify-between overflow-auto">
                    {category.map((dt, index)=> (
                        <li key={index} className={`flex-none ${category.length === 3 ? 'w-1/4' : 'w-2/10'} h-32 relative m-5`}>
                            <img src={dt.img} alt={dt.img} className="rounded-xl w-full h-32"/>
                            <NavLink to={`/category/${dt.id}`}>
                                <p style={{background:'rgba(1,1,1,0.5)'}} className="absolute z-10 rounded-xl h-full flex items-center justify-center top-0 botton-0 left-0 right-0 text-2xl  text-white font-bold">{dt.name}</p>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default Nav