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
          <Posts name="hajer" email="hajer@gmail.com"/>
          <Posts name="asma" email="asma@gmail.com"/>
          <Posts name="hela" email="hela@gmail.com"/>
          <Posts name="Content">
          
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur perferendis quis aliquid facilis, animi sit ea aut numquam, ad accusamus ipsam mollitia iure suscipit deleniti maiores cumque quidem unde. Ad.</p>   
          </Posts>
         <Posts name="emojie">
          😂😉😁🐱
         </Posts>
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
