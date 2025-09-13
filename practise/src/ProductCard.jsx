function ProductCard(variable) {

 
    return (
        <>
            <h1>Product Name is :{variable.productname}</h1>
            <h2>Product Price is :{variable.price} </h2>
            <h3>{variable.isAvailabe ? "Yes the product is available": "Out of stock"}</h3>
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