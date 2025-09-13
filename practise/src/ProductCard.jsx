import './Product.css'
function ProductCard(variable) {

 
    return (
        <>
        <div className='container'>
            <p className="title">Product Name is :{variable.productname}</p><br />
            <p className="price">Product Price is :{variable.price} </p><br />
        {variable.isAvailabe ? <h1 className='stock1'>In Stock</h1>: <h1 className='stock2'>Out Of Stock   </h1>}
                  </div>


                  </>
    )
}

// function ProductCard({receivedname,price,isAvailabe}) {

 
//     return (
//         <>
//             <h1>Product Name is :{receivedname}</h1>
//             <h2>Product Price is :{price} </h2>
//             <h3>{isAvailabe ? "Yes the product is available": "Out of stock"}</h3>
//         </>
//     )
// }
export default ProductCard; 