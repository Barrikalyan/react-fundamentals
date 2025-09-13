import Profile from './Profile.jsx'
import ProductCard from './ProductCard.jsx'
function App() {
   const productname = "Iphone"
    const price = 70000
    const isAvailabe = false
  return (
    <>
      
        
          <ProductCard  receivedname={productname}  price={price} isAvailabe={isAvailabe} />
    </>
  );
}

export default App;
