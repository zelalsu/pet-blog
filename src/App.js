
import './App.css';
import DashBoard from './Components/DashBoard';
import Kopek from "./Components/Header/Kopek"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Kedi from './Components/Header/Kedi';
import Balik from './Components/Header/Balik';
import İletisim from './Components/Header/İletisim';
import AppFoto from './Components/Fotograflar/AppFoto'
import AnimalList from './Components/NavigationItem/AnimalList';
import UyeOl from './Components/Login/UyeOl';
import Blog from './Components/Blog/Blog';
import BlogPage from './Components/Blog/BlogPage';
import {Admin} from './Components/Admin/Admin';


export default class App extends Component {

  render() {
    return (
      <div style={{ height: " 100px" }}>
        <BrowserRouter>
          <Routes>
            <Route path='/admin' element={<Admin/>}/>
            <Route exact  path='/' element={<DashBoard />} />
            <Route exact path='/kopek' element={<Kopek />} />
            <Route exact path='/kopekTasima' element={< AnimalList ItemId="8" />} />
            <Route exact path='/kopekMama' element={< AnimalList ItemId="6" />} />
            <Route exact path='/kopekAksesuar' element={< AnimalList ItemId="7" />} />

            <Route exact path='/kediMama' element={< AnimalList ItemId="1" />} />
            <Route exact path='/kediAksesuar' element={< AnimalList ItemId="2" />} />
            <Route exact path='/kediTasima' element={< AnimalList ItemId="3" />} />

            <Route exact path='/balikMama' element={< AnimalList ItemId="9" />} />
            <Route exact path='/balikAksesuar' element={< AnimalList ItemId="10" />} />
            <Route exact path='/balikTasima' element={< AnimalList ItemId="11" />} />

            <Route exact path='/kedi' element={<Kedi />} />
            <Route exact path='/balik' element={<Balik />} />
            <Route exact path='/iletisim' element={<İletisim />} />
            <Route exact path='/fotograf' element={<AppFoto />} ></Route>
            <Route exact path='/blog' element={<Blog />} />
            <Route exact path='/blogPage' element={<BlogPage  />} />
            <Route exact path='/uyeOl' element={<UyeOl />} />
            

          </Routes></BrowserRouter>
      </div>
    )
  }
}
