import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
const Count = () =>{
    const {products} = useContext(ProductContext)
    return(
        <button type="button" className="btn btn-primary">
                    Count <span className="badge  mine">{products.length}</span>
                </button>
    )
}

export default Count