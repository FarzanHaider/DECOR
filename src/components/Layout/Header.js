import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { BsCart } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { useCart } from '../../Context/cart';
import SearchInput from '../Form/SearchInput';
import { useAuth } from '../../Context/auth';
const Header = ({ onLoginRegisterClick }) => {
  const [cart] = useCart();
  const [auth] = useAuth();
  const userRole = auth.user?.role || 0;
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '15px 25px',
    height: '95px',
    backgroundColor: 'white',
    whiteSpace: 'nowrap',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#333',
  };

  const cartStyle = {
    position: 'relative',
    marginLeft: '20px',
    color: '#000',
    fontSize: '25px',
    textDecoration: 'none',
  };
  const iconStyle = {
    position: 'relative',
    marginRight: '17px',
    color: '#000',
    fontSize: '28px',
    textDecoration: 'none',
  };
  const badgeStyle = {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '50%',
    width: '20px',
    height: '20px',
    lineHeight: '20px',
    textAlign: 'center',
    fontSize: '12px',
  };

  return (
    <header style={headerStyle} className="header">
      <div style={logoStyle}>DreamDecor</div>
      <Navbar onLoginRegisterClick={onLoginRegisterClick} />
      <SearchInput />

      {/* Move the cart icon after the search bar */}
      {userRole !== 1 && (
        <NavLink to="/cart" style={iconStyle} className="cart-icon">
          <BsCart />
          <span style={badgeStyle}>{cart?.length ? cart?.length : '0'}</span>
        </NavLink>
      )}


      <Sidebar style={{ height: '95px', fontSize: '55px' }} />
    </header>
  );
}

export default Header;
