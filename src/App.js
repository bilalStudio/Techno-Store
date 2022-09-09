import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import About from "./screen/home";
import Container from "./common/Container";
import Home from "./screen/home";

/*import Blog from "./screen/Blog";
import Resume from "./screen/Resume";
import Contact from "./screen/Contact";
import Portfolio from "./screen/Portfolio";
import Blog_Details from "./screen/Blog_Details";*/
function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>}/>

          {/* <Route path='blog' element={<Blog/>} />
          <Route path="resume" element={<Resume/>} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="blog_details" element={<Blog_Details />} /> */}
        </Routes>
      </BrowserRouter>

  );
}

export default App;
