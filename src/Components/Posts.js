
function Posts({name,email,children}) {
  return (
    <>
    <div style={
        {
        margin:"20px",
        border:"3px solid #1d9bf0",
        textAlign:"center",
      
        }}>
      <h3>{name}</h3>
      <hr style={{width:"95%"}}></hr>
      <h6 style={{color:"gray"}}>{email}</h6>
      {children}
    </div>
   
    </>  
  )
}

export default Posts
