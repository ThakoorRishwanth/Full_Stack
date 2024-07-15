
import { Route, Routes } from 'react-router-dom'
import './App.css'
import { BookList } from './components/BookList'
import { BookDetails } from './components/BookDetails'
import { OrderList } from './components/OrderList'
import { Login } from './components/Login'
import { Register } from './components/Register'
import { Navbar } from './pages/Navbar'
import { Home } from './pages/Home'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/lists' element={<BookList/>}/>
        <Route path='books/:id' element={<BookDetails/>}/>
        <Route path='/orders' element={<OrderList/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element = {<Register/>}/>

    </Routes>
    </>
  )
}

export default App
