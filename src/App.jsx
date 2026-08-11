import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Saved from './pages/Saved'
import View from './pages/View'
import Info from './pages/Info'
import Download from './pages/Download'
import Pnf from './pages/Pnf'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path='/resume-details' element={<Info/>} />
        <Route path='/all-resumes' element={<Saved/>} />
        <Route path='/resumes/:id' element={<View/>} />
        <Route path='/downloads' element={<Download/>} />
        <Route path='/*' element={<Pnf/>} />
      </Routes>
      <Footer/>
      <ToastContainer position='top-right' theme='colores' autoClose={3000}  />
    </>
  )
}

export default App