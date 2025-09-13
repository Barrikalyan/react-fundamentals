function Profile(){
      const name = "kalyan babu"
  const age = 20
  const isStudent = true
    return (
        <>
        <h1>
        hello {name}
      </h1>
      <h1>My age is: {age}</h1>
      <h1>{ isStudent === true ? "yes he is a student" : "no he is not student"}</h1>
        <p>i'm a profile</p>
        </>
    )
}
export default Profile;