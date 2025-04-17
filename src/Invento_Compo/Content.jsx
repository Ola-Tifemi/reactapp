import React from "react";
import Title from "./Title";
import Products from "./Products";
const Content = () =>{
    return(
        <div className="row products text-center">
            <div className="col-md-6 offset-md-3">
                <Title textValue={"Product Inventory"}/>
            </div>
            <div className="col-md-8 offset-md-2">
                <Products/>
            </div>
        </div>
    )
}

export default Content