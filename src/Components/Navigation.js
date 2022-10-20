import React from 'react';
import "./navigation.css";
import { GiCat, GiCirclingFish } from "react-icons/gi";
import { FaDog } from "react-icons/fa"
import { FcHome } from "react-icons/fc"



export default class Navigation extends React.Component {

  render() {
    return (

      <div >

        <nav className="menu">

          <ol>
            <li className="menu-item"><a href="/"> <FcHome color='white' size="40px" />  Anasayfa</a></li>
            <li className="menu-item">
              <a href="/kopek"> <FaDog color='white' size="35px" /> Köpek</a>
              <ol className="sub-menu">
                <li className="menu-item"><a href="/kopekMama/" > Kopek Mama </a></li>
                <li className="menu-item"><a href="/kopekTasima"> Kopek Taşıma</a></li>
                <li className="menu-item"><a href="/kopekAksesuar">Kopek Aksesuar</a></li>
              </ol>
            </li>
            <li className="menu-item">
              <a href="/kedi"> <GiCat color='white' size="35px" /> Kedi</a>
              <ol className="sub-menu">
                <li className="menu-item"><a href="/kediMama"> Kedi Mama</a></li>
                <li className="menu-item"><a href="/kediTasima"> Kedi Taşıma</a></li>
                <li className="menu-item"><a href="/kediAksesuar">Kedi Aksesuar</a></li>
              </ol>
            </li>
            <li className="menu-item">
              <a href="/balik"> <GiCirclingFish color='white' size="35px" />Balık</a>
              <ol className="sub-menu">
                <li className="menu-item"><a href="/balikMama"> Balik Mama</a></li>
                <li className="menu-item"><a href="/balikTasima"> Balik Taşıma</a></li>
                <li className="menu-item"><a href="/balikAksesuar">Balik Aksesuar</a></li>
              </ol>
            </li>
            <li className="menu-item"><a href="/iletisim">İletisim</a></li>
            <li  className="menu-item"><a href="/fotograf" > Fotoğraf Arama</a></li>
            <li  className="menu-item"><a href="/blog" >Blog</a></li>
            

            <li className="menu-item"><a href="/uyeOl" >ÜYE OL </a></li>
            {/* <li className="menu-item"><a href="/girisYap" >GİRİŞ YAP</a></li> */}
          </ol>
         
        </nav>
     

      </div>
    );
  }
}