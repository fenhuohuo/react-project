// import Header from './components/Header.js'
import React,{Suspense} from "react"
import { BrowserRouter,Routes, Route,Navigate }   from 'react-router-dom'
import Login from "../src/view/Login/index.js"
import Table from "../src/view/TableDriver/index.js"
import Equipment from "../src/view/Equipment/index.js"

function App() {
  return (
    <Suspense fallback={<div>路由加载中...</div>}>
      <BrowserRouter>

      <Routes>
      <Route path="/" element={<Table />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tabledriver" element={<Table />} />
        <Route path="/*" element={<Equipment/>} />
      </Routes>
      </BrowserRouter>
       
    </Suspense>
   



  );
}

export default App;