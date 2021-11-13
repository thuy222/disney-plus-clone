import React, { useEffect } from "react";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
        navigate("/");
      }
    });
  }, []);

  const signIn = () => {
    auth.signInWithPopup(provider).then((result) => {
      let user = result.user;
      dispatch(
        setUserLogin({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        })
      );
      navigate("/");
    });
  };

  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut());
      navigate("/login");
    });
  };

  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      {!userName ? (
        <Login onClick={signIn}>Login</Login>
      ) : (
        <>
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
          <UserImg
            onClick={signOut}
            src="https://bazaarvietnam.vn/wp-content/uploads/2021/10/lisa-blackpink-mac-cosmetics-collection-12-2021-4.jpg"
          />
        </>
      )}
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
  padding: 0 calc(3.5vw + 5px);
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

const Login = styled.button`
  border: 1px solid #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: white;
  background-color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    background-color: #f9f9f9;
    color: black;
    border-color: transparent;
  }
`;
