import './App.css';
import React from 'react';
import Layout from "./Components/Layout"
import Slider1 from "./Components/Slider1"
import AboutUs from "./Components/AboutUs"
import AddBook from './Components/AddBook';
import NoPage from './Components/NoPage';

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";


function App() {    
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Slider1 />} />
                    <Route path="about" element={<AboutUs />} />
                    <Route path="addbook" element={<AddBook />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
            
        </>
    );
}

export default App;