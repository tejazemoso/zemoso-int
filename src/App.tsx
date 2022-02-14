import * as React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import "./App.css";
import Header from "./header/header";
import Footer from "./footer/footer";
import Body from "./body/body";
import Entrepreneur from "./Entrepreneurship/Entrepreneur";
import BookPage from "./Book/MediaControlCard";
import { Container } from "@mui/material";


export default function App() {
  return <Router>
    <Container>
    <Header />
    <Routes>
      <Route path='/' element={<Body/>}/>
      <Route path='/Entrepreneurship' element={<Entrepreneur/>}/>
      <Route path='/book' element={<BookPage/>}/>
    </Routes>
    </Container>
    <Container> <Footer /></Container>
  </Router>
}
