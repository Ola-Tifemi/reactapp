import React, { useState } from "react";
import './Invento_Compo/invento.css' //how to import a css file 
import Header from "./Invento_Compo/Header";
import Form from "./Invento_Compo/Form";
import Content from "./Invento_Compo/Content";
import Footer from "./Invento_Compo/Footer";

const Invento = () =>{
    const [mode,setMode] = useState('light')
    const handleMode = ()=>{
        if(mode == "light"){
            setMode('dark');
        }else{
            setMode('light');
        }
    }
    return(
        <div className={mode}>
        <div className="container ">
            <div className="row">
                <div className="col">
                    <Header mode={mode} handleMode={handleMode}/>
                    <Form/>
                    <Content/>
                    <Footer/>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Invento