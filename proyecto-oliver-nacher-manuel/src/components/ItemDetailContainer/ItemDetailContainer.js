

import { useState, useEffect } from "react";
import {prod} from "../prod";
import { useParams } from "react-router-dom";
import ItemDetail from './ItemDetai'
function ItemDetailContainer({  }) {
  const [produ, setProd] = useState({});
  const {idProd} = useParams();
 
  useEffect(() => {
   
    prod.then((respuesta) => setProd(respuesta.find((item)=> item.id === parseInt(idProd))));
  }, []);

  return (
    <>
      
    <ItemDetail prod={produ}/>

    </>
  );
}

export default ItemDetailContainer;