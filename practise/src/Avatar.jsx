import './Avatar.css'
function Avatar(props){
    const card={
         height: "auto",
    width: "auto",
    border: "2px solid blue",
    borderradius: "20px",
    textalign: "center",
    padding: "20px",
    margin: "10px",
    transition: "0.5 ease-in-out",
    cursor: "pointer",   
    }
    return(
        <>
        <div style={card}>
            <img src={props.pic} alt="" />
            <h1 className="name">{props.name}</h1><br />
            <h2 className="details">{props.branch}</h2>
            <h2 className="details">{props.rollno}</h2><br />
            <h2 className="details">{props.bg}</h2><br />
            <h2 className="details">{props.dob}</h2>
        </div>
        </>
    )
}
export default Avatar;