
// import './App.css'
// import { HashRouter, Routes, Route } from 'react-router-dom'
// import Home from './assets/pages/Home'
// import Login from './assets/pages/Login'
// import List from './assets/pages/List'
// import ProductDetail from './assets/pages/ProductDetail'


// function App() {
  

//   return (
//    <HashRouter>
//     <Routes>  
//          <Route path="/"  element= {<Home/>} />
//          <Route path="/login"  element= {<Login/>} />
//          <Route path="/list"  element= {<List/>} />
//          <Route path="/news/:id"  element= {<ProductDetail/>} />

//     </Routes>

//    </HashRouter>
//   )
// }

// export default App


import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Purchases from './pages/Purchases'
import ProductDetail from './pages/ProductDetail'
import AppNav from './components/AppNav'
import { Container } from 'react-bootstrap'
import Loader from './components/Loader'
import { useSelector } from 'react-redux'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {


  /*
    REACT ROUTER DOM
    Necesito Router, Routes, Route
  */
  /*
    REDUX
    -> Crear carpeta store
    -> index.jsx -> representa el store
    ->Sustituir el codigo en el main.jsx
  */

 const isLoading = useSelector(state => state.isLoading)


  return (
    <HashRouter>   
      <AppNav/>
      <Container>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
          <Route element={<ProtectedRoutes/>}>
           <Route path='/purchases' element={<Purchases/>}/>
          </Route>
        </Routes>
      </Container>
       {isLoading && <Loader/> }
    </HashRouter>
  )
}

export default App
