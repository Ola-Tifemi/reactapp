import React from "react";
import Title from "./Title";
import Count from "./Count";
const Header = ({mode,handleMode}) =>{

    return(
        // <!-- header section begins -->
        <div className="row header">
            <div className="col  text-center">
                <div className="d-flex  justify-content-between ">
                <Title textValue="Product Inventory"/>
                <div>
                    {
                        mode == "light"? <button className="btn btn-dark" onClick={handleMode}>DarkMode</button>:
                          <button className="btn btn-light" onClick={handleMode}>LightMode</button>
                    }
                </div>
                </div>
                
                <Count/>
            </div>
        </div>
        // <!-- header section ends -->
    )
}

export default Header