import Profile from './Profile.jsx'
import ProductCard from './ProductCard.jsx'
import './App.css'
import Avatar  from './Avatar.jsx'
function App() {
   const productname = "Iphone"
    const price = 70000
    const isAvailabe = true

    const productname2 = "Ipad"
    const price2 = 17000
    const isAvailabe2 = true

    const productname3 = "Mac Air Book"
    const price3 = 200000
    const isAvailabe3 = false
    const name="B.KALYAN"
    const brach ="Course: BTech (CSE)"
    const rollno="Roll No: 24VV5A0567"
    const bg="Blood Group: O+"
    const dob="DOB:18/02/2005"
    const pic="./spidy.jpg"

        const name2="Super Man"
    const brach2 ="Course: BTech (MECH)"
    const rollno2="Roll No: 24VV5A0568"
    const bg2="Blood Group: O-"
    const dob2="DOB:18/04/1997"
        const pic2="./superman.jpg"

        const name3="BAT Man"
    const brach3 ="Course: BTech (EEE)"
    const rollno3="Roll No: 24VV5A0569"
    const bg3="Blood Group: AB-"
    const dob3="DOB:28/03/1995"
        const pic3="./batman.jpg"

        const name4="Iron Man"
    const brach4 ="Course: BTech (ECE)"
    const rollno4="Roll No: 24VV5A0570"
    const bg4="Blood Group: B+"
    const dob4="DOB:8/08/1996"
        const pic4="./ironman.jpg"

  return (
    <div className='flex'>
      
{/*         
          <ProductCard  productname={productname}  price={price} isAvailabe={isAvailabe} />
          <ProductCard  productname={productname2}  price={price2} isAvailabe={isAvailabe2} />
          <ProductCard  productname={productname3}  price={price2} isAvailabe={isAvailabe3} /> */}
          <Avatar pic={pic}name={name} brach={brach} rollno={rollno} bg={bg} dob={dob} />
          <Avatar pic={pic2} name={name2} brach={brach2} rollno={rollno2} bg={bg2} dob={dob2} />
          <Avatar pic={pic3} name={name3} brach={brach3} rollno={rollno3} bg={bg3} dob={dob3} />
          <Avatar pic={pic4} name={name4} brach={brach4} rollno={rollno4} bg={bg4} dob={dob4} />
    </div>
  );
}

export default App;
