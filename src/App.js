import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import React from "react";
import {BrowserRouter,Switch,Route,Link, Routes} from "react-router-dom";
import Post from "./components/post/Post";
function App() {
  const user=false;
  return (
    <BrowserRouter>
    <TopBar/>
    <Routes>
      <Route>
        <Route index element={<Home />} />
        <Route path="/register" element={user ? <Home/> :<Register />} />
        <Route path="/login" element={user ? <Home/> :<Login />} />
        <Route path="/write" element={user ? <Write/> :<Register />} />
        <Route path="/setting" element={user ? <Setting/> :<Register />} />
        {/* <Route path="/about" element={user ? <About/> :<Register />} /> */}
        {/* <Route path="/contact" element={user ? <Contact/> :<Register />} /> */}
        <Route path="/post/:postId" element={<Single />} />
      </Route>
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
