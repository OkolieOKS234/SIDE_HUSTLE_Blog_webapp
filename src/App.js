import React from "react"
import { Footer } from "./components/footer/Footer"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Login } from "./pages/login/Login"
import { Regsiter } from "./pages/login/Regsiter"
import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import { DetailsPages } from "./pages/details/DetailsPages"
import { Account } from "./pages/account/Account"
import { Create } from "./components/create/Create"
import {About} from "./pages/about/About";
import { Single } from "./components/single/Single"

  const App = () => {
  return(
<BrowserRouter>
<Header/>
<Routes>
<Route index element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="blog/:id" element={<Single />} />
<Route path="/create" element={<Create />} />
<Route path="/details" element={<DetailsPages />} />
<Route path="/about" element={<About />} />
<Route path="/login" element={<Login/>} />
<Route path="/register" element={<Regsiter />} />
</Routes>
</BrowserRouter>
  
    )}
export default App;



{/* <Route index element={<Home />} />
<Route path="/home" element={<Home />} />
<Route path="blog/:id" element={<Single />} />
<Route path="/create" element={<Create />} />
<Route path="/details" element={<DetailsPages />} />
<Route path="/about" element={<About />} />
<Route path="/login" element={<Account />} />
<Route path="/register" element={<Regsiter />} /> */}
  {/* <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} /> */}