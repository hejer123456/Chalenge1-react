import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Posts from './Components/Posts';
import Side from './Components/Side';



function App() {
  return (
    <>
      <Header />

      <div style={{ display:"flex",justifyContent:"center",width:"100%"}}>
        <div style={{width:"70%",display:"flex",justifyContent:"center",}}>
          <div style={{width:"30%"}}>
          <Posts />
          <Posts/>
          <Posts />
          <Posts />
          <Posts />
          </div>
        </div>
      <div style={{width:"20%"}}>
        <div >
        <Side />
        </div>
     
      </div>
                 
       
        
      </div>
     
    </>
  );
}

export default App;
