import React, { useState } from 'react';
import '../../index.css';
import { FaUser } from "react-icons/fa";
import { useAuth } from "../../Context/auth";
import useCategory from "../../Hooks/useCategory";
import toast from "react-hot-toast";
import { NavLink } from 'react-router-dom';


const Navbar = ({ onLoginRegisterClick }) => {
    const [auth, setAuth] = useAuth();
    const categories = useCategory(); 
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleLogOut = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logout Successfully");
    }

    const navStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
    };

    const ulStyle = {
        display: 'flex',
        listStyle: 'none',
        margin: '0',
        padding: '0',
    };

    const liStyle = {
        margin: '0 10px',
        position: 'relative',
        marginLeft: "5px"
    };

    const dropdownMenuStyle = {
        display: dropdownVisible ? 'block' : 'none',
        position: 'absolute',
        top: '100%',
        left: '0',
        zIndex: '1000',
        float: 'left',
        minWidth: '10rem',
        padding: '.5rem 0',
        margin: '.125rem 0 0',
        fontSize: '1rem',
        color: '#212529',
        textAlign: 'left',
        listStyle: 'none',
        backgroundColor: '#fff',
        backgroundClip: 'padding-box',
        border: '1px solid rgba(0,0,0,.15)',
        borderRadius: '.25rem',
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
        <nav className="navbar"
            style={{ fontSize: "23px" , margin:"5px" }}>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li
                    style={liStyle}
                    className="nav-item dropdown"
                    onMouseEnter={() => setDropdownVisible(true)}
                    onMouseLeave={() => setDropdownVisible(false)}
                >
                    <NavLink
                        className="nav-link dropdown-toggle"
                        to="#"
                        role="button"
                        aria-expanded="false"
                    >
                        Categories
                    </NavLink>
                    <ul style={dropdownMenuStyle} className="dropdown-menu">
                        <li>
                            <NavLink className="dropdown-item" to="/categories">
                                All Categories
                            </NavLink>
                        </li>
                        {categories?.map(c => (
                            <li key={c._id}>
                                <NavLink className="dropdown-item" to={`/category/${c.slug}`}>
                                    {c.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </li>
                <li><NavLink to="/about">About Us</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
                {auth?.user ? (
                    <li className="nav-item dropdown">
                        <NavLink
                            className="nav-link dropdown-toggle"
                            to="#"
                            id="userDropdown"
                            role="button"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {auth.user.name}
                        </NavLink>
                        <div className="dropdown-menu" aria-labelledby="userDropdown">
                            <NavLink
                                onClick={handleLogOut}
                                to="/"
                                className="dropdown-item"
                            >
                                Logout
                            </NavLink>
                        </div>
                    </li>
                ) : (
                    <li>
                        <a href="#login" onClick={onLoginRegisterClick}>
                            <FaUser /> Login or Register
                        </a>
                    </li>
                )}
            </ul>





        </nav>
    );
}

export default Navbar;
