import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <img src="/images/home-icon.svg" alt="home" />
          <span>Home</span>
        </a>
        <a>
          <img src="/images/search-icon.svg" alt="search" />
          <span>Search</span>
        </a>
        <a>
          <img src="/images/watchlist-icon.svg" alt="watchlist" />
          <span>WatchList</span>
        </a>

        <a>
          <img src="/images/original-icon.svg" alt="original" />
          <span>Original</span>
        </a>
        <a>
          <img src="/images/movie-icon.svg" alt="movie" />
          <span>Movie</span>
        </a>
        <a>
          <img src="/images/series-icon.svg" alt="series" />
          <span>Series</span>
        </a>
      </NavMenu>
      <UserImg src="https://bazaarvietnam.vn/wp-content/uploads/2021/10/lisa-blackpink-mac-cosmetics-collection-12-2021-4.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  overflow-x: hidden;
`;

const Logo = styled.img`
  width: 80px;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      text-transform: uppercase;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        background-color: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        opacity: 1;
        transform: scale(1);
        transition: all 0.2s ease-in-out;
      }
    }
  }
  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`;
const UserImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
