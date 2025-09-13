import { useState } from 'react';
import './App.css'
function App() {
    const [count,setCount]=useState(0);
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [formdata,setForm]=useState({
        email:"",
        password:"",
    })
    const handleEmail=(event)=>{
setEmail(event.target.value)

    }
    
    const handlePassword=(event)=>{
setPassword(event.target.value)
        
    }
    const handleCount=()=>{
        setCount((prev)=>prev+1);
        console.log(count)
    }

const handleclick=(name)=>{
    console.log("you clicked the button");
    alert("you clicked me"+name);

}
const handlesubmit = (event) => {
  event.preventDefault();
  alert(`email: ${formdata.email} \npassword: ${formdata.password}\nYou logged in`);
};

const handlechange=(event)=>{
    // console.log(event.target.name);
    // console.log(event.target.value);
    setForm({
        ...formdata,
        [event.target.name]:event.target.value
    })
    
}
const but={
    color:"red",
   border:"none",
    padding:"10px",
    margin:"20px",
    backgroundcolor:"white",
    boxshadow:"3px 4px 5px black",
}

  return (
     <form action=""onSubmit={handlesubmit}>
    <div className='flex'>
        <h1>{count}</h1>
        <button onClick={handleCount}>Icrement</button>
        <input type="email" placeholder='type your email' name="email" onChange={handlechange} />
        <input type="password" placeholder='type your password' name="password" onChange={handlechange} /> 
 {/* <button style={but} onClick={ ()=>alert("submitted")}> click me</button>  */}
 <button type='submit'> login</button> 
    </div>
     </form>
  );
}

export default App;
