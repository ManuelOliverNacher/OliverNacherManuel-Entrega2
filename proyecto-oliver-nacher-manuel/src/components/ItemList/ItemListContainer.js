import React, { useEffect, useState } from "react"
import { prod } from "../prod"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom";



const ItemListContainer = () =>{
    const [Productos, setProductos] = useState([])
    const[loading,setLoading]= useState(true)
    const {idCategory} = useParams()

    function getItemsCategory(categoryURL){

        return new Promise((resolve,reject) =>{

            setTimeout(()=>{
    
                let productosFiltrados = Productos.filter(prod=>prod.category === categoryURL)
    
                resolve(productosFiltrados)
                reject(prod)
    
            },2000)
    
        })
        
        }

        function getItems () {

            return new Promise ((resolve, reject) => {
        
            setTimeout (() => {
        
              resolve(prod);
        
            } , 2000 );
        
          });
        
        }

        async function getData() {
            setLoading(true)
            let res = await getItems()
            setProductos(idCategory?res.filter(prod => prod.category === idCategory):res)
            setLoading(false)
        }

        useEffect(()=>{

            getData()
    
        },[idCategory])

    return(
        <div>
            {
                loading
                ?
             <h3 className="cargando">Cargando Productos...</h3>   
             :
             <div>
                <h4 className="titulo-prods">Nuestros Productos</h4>
                <div className="lista  row col-12">
                    <ItemList Prod = {Productos}/>

                </div>
             </div>
            }
        </div>
    )
}




export default ItemListContainer