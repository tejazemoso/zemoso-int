import * as React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Body from "./body/body";
import Entrepreneur from "./Entrepreneurship/Entrepreneurship";
import BookPage from "./Book/book";


export default function App() {
  return<div style={{position:'sticky'}}>
   
  <Router>
  <Header />
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/Entrepreneurship' element={<Entrepreneur/>}/>
      <Route path='/book' element={<BookPage/>}/>
    </Routes>
    <Footer />
  </Router>
  
  </div>
}
