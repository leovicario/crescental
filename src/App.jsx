import * as React from "react";
import Home from './pages/Home.jsx'

import {BrowserRouter, useNavigate, Routes, Route} from 'react-router-dom';
import {NextUIProvider} from "@nextui-org/react";



const App = () => {

  const navigate = useNavigate()

  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </NextUIProvider>
   
  );
}

export default App;