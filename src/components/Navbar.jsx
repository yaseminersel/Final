import React from 'react';
import './Navbar.css'; 
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-green">
      <div className="container">
        <a className="navbar-brand" href="#">
        <img src="/public/Logo1.png" alt="" width="150" height="50" 
        className="d-inline-block align-text-top"/>
      </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <NavLink className="nav-link" to= "/" >Ana Sayfa</NavLink>
            <NavLink className="nav-link" to= "/kesfet" >Akıllı Şehir</NavLink>
            <NavLink className="nav-link" to= "/GeziRotalari" >Gezi Rotaları</NavLink>
            
            <NavLink className="nav-link" to= "/Parklar" >Park ve Bahçeler</NavLink>
            <NavLink className="nav-link" to= "/EczaneHastane" >Eczaneler</NavLink>

          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
