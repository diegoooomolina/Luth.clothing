import { useEffect, useState } from "react";
import ItemList from './itemList.jsx'
import pedirProductos from './pedirProductos.js'
import { useParams } from "react-router-dom"


export const Cards = () => {    
    
    const [productos, setProductos] = useState([]);
    const categoria = useParams().categoria;

    useEffect(() => {
        pedirProductos()
        .then((res) => {
            if (categoria){
                setProductos( res.filter((prod) => prod.categoria === categoria) );
            }else{
                setProductos(res);
                
            }
        })
    }, [categoria])


    
    

    return (
        <div className="content-product">
            <ItemList productos={productos}/>
        </div>
    )
};

