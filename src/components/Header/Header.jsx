import React from "react";
import { Link } from "react-router-dom";
import { FiUser } from "react-icons/fi";
import { IoIosHeartEmpty, IoIosCart } from "react-icons/io";
import "./Header.scss";

function Header() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <header className="header">
      {/* Топ бар */}
      <div className="top-bar">
        <div className="container">
          {/* <div className="top-left">
            
          
          </div> */}
          <div className="top-right">
            <Link to="/favorites">Закладки</Link>
            <Link to="/delivery">Доставка и оплата</Link>
            <Link to="/contacts">Контакты</Link>
            {user?.role !== "client" ? (
              <Link to="/log-in">
                <FiUser /> Вход
              </Link>
            ) : (
              <span>Привет, {user.name}</span>
            )}
            <Link to="/register">Регистрация</Link>
          </div>
        </div>
      </div>

      {/* Мейн хедер */}
      <div className="main-header">
        <div className="container main-row">
          {/* Логотип */}
          <Link className="logo" to="/">
            <img src="/logo.png" alt="Logo" />
          </Link>

          {/* Поиск */}
          <div className="search">
            <select>
              <option>Поиск по категориям</option>
              <option>Цветы</option>
              <option>Подарки</option>
              <option>Сладости</option>
            </select>
            <input type="text" placeholder="Поиск по товарам..." />
          </div>

          {/* Контакты и иконки */}
          <div className="header-right">
            <div className="socials">
              <a href="#"><i className="fa fa-instagram"></i></a>
              <a href="#"><i className="fa fa-telegram"></i></a>
              <a href="#"><i className="fa fa-facebook"></i></a>
            </div>
            <img src={FiUser} alt="" />
            <div className="phone">+38 (067) 829 30 30</div>
            <div className="icons">
              <Link to="/wishlist"><IoIosHeartEmpty /></Link>
              <Link to="/cart" className="cart">
                <IoIosCart /> <span className="price">₴ 1520</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Навигация */}
      <nav className="nav-bar">
        <div className="container">
          <Link to="/catalog">Каталог товаров</Link>
          <Link to="/forum">Форум</Link>
          <Link to="/otzyv">Отзывы</Link>
          <Link to="/akcii">Акции</Link>
          <Link to="/news">Новости</Link>
          <div className="dropdown">
            <span>Информация ▾</span>
            <div className="dropdown-menu">
              <Link to="/about">О компании</Link>
              <Link to="/contacts">Контакты</Link>
              <Link to="/delivery">Доставка</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
