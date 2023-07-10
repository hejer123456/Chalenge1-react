import Btn from "./Btn"
function Side() {
  return (
    <>
    
    <div style={
        { border:"3px solid #1d9bf0",
          margin:"25px"
       }}>
           <Btn name="nature">
           <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" style={{width:"100px"}}></img>
           </Btn>
          <Btn name="games">
          <img src="https://media.wired.com/photos/62feb60bcea7c0581e825cb0/16:9/w_2400,h_1350,c_limit/Fate-of-Game-Preservation-Games-GettyImages-1170073827.jpg" style={{width:"100px"}}></img>
           </Btn>
           <Btn name="emoji">
            😊😂😄😏🙄
           </Btn>
           <Btn name="content">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse veritatis ex sed quisquam quae distinctio expedita recusandae eaque officiis quas omnis, soluta inventore necessitatibus quidem repudiandae! Libero, dolores maxime. Iusto.</p>
           </Btn>

          
        </div>


    
    </>
    
  )
}

export default Side
