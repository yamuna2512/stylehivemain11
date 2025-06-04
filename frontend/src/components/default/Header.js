import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/images/HIVETechwear.svg';
import { getUser } from '../../reducks/users/selectors';
import CartLink from './CartLink';
import Search from './Search';
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';
import SignUpLink from './SignUpLink';

export default function Header({ totalCart, setSearch = null, setPage = null }) {
  const location = useLocation();
  const { pathname } = location;

  const selector = useSelector((state) => state);
  const user = getUser(selector);
  const token = user?.token;

  const isSignIn = pathname === "/sign-in";
  const isSignUp = pathname === "/sign-up";

  return (
    <header className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="HIVETechwear" />
      </Link>

      <input id="menu__toggle" type="checkbox" />
      <label className="menu__btn" htmlFor="menu__toggle">
        <span></span>
      </label>

      <ul className="menu__box">
        {isSignIn ? (
          <SignUpLink />
        ) : isSignUp ? (
          <SignInLink />
        ) : token ? (
          <>
            {setSearch && setPage && (
              <Search setSearch={setSearch} setPage={setPage} />
            )}
            <CartLink totalCart={totalCart} />
            <SignOutLink />
          </>
        ) : (
          <>
            <SignInLink />
            <SignUpLink />
          </>
        )}
      </ul>
    </header>
  );
}
