import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({children})=>{
    const [products , setProducts] = useState([]); // for new products 
    //a function that receives products title and qty and save it in the 
    // product state : spread operator
        function addProduct(proTitle,proQty){
            setProducts([...products, {
                id:Date.now(),
                title:proTitle,
                qty:proQty
            }]);
        }

    //a function that takes the Id a product and delete the product with the
    //  product state : filter helper function (.filter())
    function deleteProduct(id){
        let filteredProduct = products.filter((pro)=>{
            return pro.id != id;
        });
        setProducts(filteredProduct);
    }

    return <ProductContext.Provider value={{addProduct,deleteProduct,products}}>
        {children}
    </ProductContext.Provider>
}
