//import logo from './logo.svg';
import './App.css';
import {First} from './components/first'
import Effect from './components/effect';
import {useState} from 'react'
import Profile from './components/profile';
import About from './components/about';
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import './Appcontext'
import { AppContext } from './Appcontext';
import {Firebase } from '/home/ananda/Documents/desk/samreact/nft-app/src/firbase/config.js'

function App() {
  const [state,setState]=useState('false')
  const history= useNavigate();
  let component
  if(state==='about'){
    component=       <About/>

  }
  if(state==='profile'){
    component= <Profile/>
  }
  
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <First></First> */}

      {/* <button onClick={()=>setState('about')}> about</button>
<button onClick={()=>setState('profile')}>profile</button> */}

      
     {/* {component} */}
     
     
   
     {/* <Link to='/about'>{<About/>}</Link>
      <Link to ='/profile'>{<Profile/>}</Link> */}
      {/* <button onClick={()=>history('/about')}>About</button>
      <button onClick={()=>history('/profile')}>profile</button>
       <AppContext.Provider value={{data:state}} >
       
       <Routes>

               <Route element={<About/>} path='/about'></Route>
               <Route element={<Profile data={state}></Profile>} path='/profile'>
                
               </Route>
               {/* <Route render={()=><h1>Hello</h1>} path='/hello'></Route> */}
                
         
         {/* </Routes>    */}

         {/* </AppContext.Provider> */}

       

       <button onClick={()=>{
         Firebase.firestore().collection('products').get().then(snapshot=>{
           snapshot.forEach((obj) => {
             console.log(obj.data)
             
           });
         })
            
       }} >CLick</button>
 











    </div>
  );
}

export default App;
