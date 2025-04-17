

const Product = ({pro,sn,deleteProduct})=>{
    
    return(
        <tr key={pro.id}>
        <td>{sn}</td>
        <td>{pro.title}</td>
        <td>{pro.qty}</td>
        <td><button className="btn btn-danger btn-sm" onClick={()=>{deleteProduct(pro.id)}}>Delete</button></td>
        </tr>
      )
}

export default Product