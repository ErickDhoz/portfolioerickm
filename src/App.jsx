import { Route, Routes } from "react-router-dom"
import Hi from "./component/Hi"
import NavBar from "./component/NavBar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Skills from "./pages/Skills"



function App() {
  

  return (
    <>
    <NavBar/>
    <div className="bg-white w-full h-screen"> 
    <Routes>
      <Route path="/" element={<Hi/>}/> 
      <Route path="about" element={<About/>}/> 
      <Route path="skills" element={<Skills/>}/> 
      <Route path="projects" element={<Projects/>}/>
      <Route path="contact" element={<Contact/>}/>
    </Routes>
       
    </div>
    </>
  )
}

export default App
