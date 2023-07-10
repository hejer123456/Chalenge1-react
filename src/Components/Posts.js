
function Posts(name,email) {
  return (
    <>
    <div style={
        {
        margin:"20px",
        border:"3px solid #1d9bf0",
        textAlign:"center",
      
        }}>
      <h3>This is the post title</h3>
      <hr style={{width:"95%"}}></hr>
      <h6 style={{color:"gray"}}>This is the post body</h6>
    </div>
   
    </>  
  )
}

export default Posts
