import React from 'react'

const ItemDetail = ({prod}) => {
  return (
    
    <div className="card card-detalle ">
        
   <div><img src={prod.img} className="imgProd"/></div> 
   <div className="title">
    <h4 className="nombreProducto">{prod.title}</h4>
    </div>
   <div className="containerDescription">
    <p className="precioProd">{prod.price}</p>
    <button type="button" className="btn btn-secondary btn-sm col-6 mx-5">Comprar</button>
   </div>
    </div>
  )
}

export default ItemDetail