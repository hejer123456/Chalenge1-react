
import './Btn.css'
function Btn({name,children}) {
  return (
    <div >
      <button className="btnStyle"> 
      {name}
      <div>{children}</div>
      </button>
    </div>
  )
}

export default Btn
