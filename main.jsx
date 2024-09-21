import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
/*import MyFunctions from './functions/MyFunctions.jsx';
import MyDataTypes from './methods/MyDataTypes.jsx';
import MyFetchPost from './functions/MyFetchPost.jsx';
import MyFetchPut from './functions/MyFetchPut.jsx';
import MyFetchBlob from './functions/MyFetchBLOB.jsx';
import MyObjects from './methods/MyObjects.jsx';
import {Contador} from './components/Contador.jsx'; 
import {ContadorHook} from './components/ContadorHook.jsx';
import {Login} from "./components/Login.jsx"; */

import { Usuarios } from "./components/Usuarios.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
   {/* <App /> */} 
   {/*<MyFunctions/>*/} 
   {/*<MyDataTypes/>*/}
   {/*<MyFetchPost/>*/}
   {/*<MyFetchPut/>*/}
   {/*<MyFetchBlob/>*/}
   {/*<MyObjects/>*/}
   {/*<Contador/>*/}
   {/*<ContadorHook/>*/}
   {/*<Login/>*/}
   <Usuarios/>
  </StrictMode>,
)
