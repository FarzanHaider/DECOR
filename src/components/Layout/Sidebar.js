import React, { useState } from 'react';
import { FaBars, FaShoppingCart, FaTags, FaWarehouse, FaChartLine, FaChevronDown, FaChevronUp, FaTimes, FaBoxOpen, FaClipboardList, FaUsers, FaUser, FaUserCircle } from "react-icons/fa"; // Import icons
import { Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../Context/auth';

const { Text } = Typography;

const Sidebar = () => {
  const [auth] = useAuth();
  const userRole = auth.user?.role || 0;
  console.log("User Role:", userRole);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [salesOpen, setSalesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [categoriesOpen, setCategoriesOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  const toggleSales = () => {
    setSalesOpen(!salesOpen);
  };

  const toggleProducts = () => {
    setProductsOpen(!productsOpen);
  };

  const toggleCategories = () => {
    setCategoriesOpen(!categoriesOpen);
  };

  const toggleOrders = () => {
    setOrdersOpen(!ordersOpen);
  };

  const toggleUsers = () => { 
    setUsersOpen(!usersOpen);
  };

  const sidebarStyle = {
    width: '250px',
    height: '100%',
    backgroundColor: '#fff',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: '0',
    left: drawerVisible ? '0' : '-250px',
    transition: 'left 0.3s',
    zIndex: 1000,
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    fontSize: "35px" 
  };

  const closeButtonStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10px',
    marginBottom: '8px',
    marginTop: "10px"
  };

  const menuItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '25px 25px',
    cursor: 'pointer',
    fontSize: '22px',
  };

  const menuItemHoverStyle = {
    backgroundColor: '#f0f0f0',
  };

  const iconStyle = {
    marginRight: '15px',
   
  };

  const submenuStyle = {
    paddingLeft: '20px',
    display: 'block',
  };

  const submenuItemStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
  };

  const separatorStyle = {
    height: '1px',
    backgroundColor: '#e0e0e0',
    margin: '10px 0',
  };

  return (
    <>
      <a href="#sidebar" onClick={toggleDrawer} style={{ padding: '5px 10px', color: "black" }}>
        <FaBars style={{ fontSize: '28px', marginRight:"-15px" }} /> {/* Sidebar Icon */}
      </a>
      <div style={sidebarStyle}>
        <div style={closeButtonStyle}>
          <Text style={{ fontSize: '18px', marginLeft: '10px', marginTop: "10px" }}>View Menu</Text>
          <FaTimes onClick={toggleDrawer} style={{ fontSize: '20px', cursor: 'pointer', marginLeft: 'auto', marginTop: "10px" }} />
        </div>

       
        {userRole === 1 && (
          <>
            <div style={separatorStyle}></div>
            <div
              style={menuItemStyle}
              onClick={toggleProducts}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              <FaBoxOpen style={iconStyle} />
              <Text style={{ fontSize: '18px' }}>Products</Text>
              {productsOpen ? (
                <FaChevronUp style={{ marginLeft: 'auto', fontSize: '15px' }} />
              ) : (
                <FaChevronDown style={{ marginLeft: 'auto', fontSize: '15px' }} />
              )}
            </div>
            {productsOpen && (
              <div style={submenuStyle}>
                <NavLink
                  to="/create-product"
                  className="list-group-item list-group-item-action"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={submenuItemStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
                  >
                    <Text style={{ fontSize: '18px' }}> . Add Product</Text>
                  </div>
                </NavLink>
                <NavLink
                  to="/products"
                  className="list-group-item list-group-item-action"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={submenuItemStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
                  >
                    <Text style={{ fontSize: '18px' }}> . View Products</Text>
                  </div>
                </NavLink>
              </div>
            )}
            <div style={separatorStyle}></div>
            <div
              style={menuItemStyle}
              onClick={toggleCategories}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              <FaTags style={iconStyle} />
              <Text style={{ fontSize: '18px' }}>Categories</Text>
              {categoriesOpen ? (
                <FaChevronUp style={{ marginLeft: 'auto', fontSize: '15px' }} />
              ) : (
                <FaChevronDown style={{ marginLeft: 'auto', fontSize: '15px' }} />
              )}
            </div>
            {categoriesOpen && (
              <div style={submenuStyle}>
                <NavLink
                  to="/create-category"
                  className="list-group-item list-group-item-action"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={submenuItemStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
                  >
                    <Text style={{ fontSize: '18px' }}> . Add Category</Text>
                  </div>
                </NavLink>
                <div
                  style={submenuItemStyle}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
                >
                  <Text style={{ fontSize: '18px' }}> . View Category</Text>
                </div>
              </div>
            )}
          </>
        )}

        <div style={separatorStyle}></div>
        <div
          style={menuItemStyle}
          onClick={toggleOrders}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
        >
          <FaClipboardList style={iconStyle} />
          <Text style={{ fontSize: '18px' }}>Orders</Text> {/* Adjusted font size */}
          {ordersOpen ? <FaChevronUp style={{ marginLeft: 'auto', fontSize: "15px" }} /> : <FaChevronDown style={{ marginLeft: 'auto', fontSize: "15px" }} />}
        </div>
        {ordersOpen && (
          <div style={submenuStyle}>
          
            {userRole === 0 && (
              <NavLink
                to="/user/orders"
                style={submenuItemStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                <Text style={{ fontSize: '18px' }}> . View Orders</Text>
              </NavLink>
            )}
         
            {userRole === 1 && (
              <NavLink
                to="/admin/orders"
                style={submenuItemStyle}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
                onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
              >
                <Text style={{ fontSize: '18px' }}> . Manage Orders</Text>
              </NavLink>
            )}
          </div>
        )}

        {userRole === 1 && (
          <>
            <div style={separatorStyle}></div>
            <div
              style={menuItemStyle}
              onClick={toggleUsers}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              <FaUsers style={iconStyle} />
              <Text style={{ fontSize: '18px' }}>Manage Users</Text>
              {usersOpen ? <FaChevronUp style={{ marginLeft: 'auto', fontSize: "15px" }} /> : <FaChevronDown style={{ marginLeft: 'auto', fontSize: "15px" }} />}
            </div>
            {usersOpen && (
              <div style={submenuStyle}>
                <NavLink
                  to="/users"
                  className="list-group-item list-group-item-action"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={submenuItemStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
                  >
                    <Text style={{ fontSize: '18px' }}> . View Users</Text>
                  </div>
                </NavLink>
              </div>
            )}
          </>
        )}
     
        {userRole === 0 && (
          <>
            <div style={separatorStyle}></div>
            <div
              style={menuItemStyle}
              onClick={toggleUsers}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
            >
              <FaUserCircle style={iconStyle} />
              <Text style={{ fontSize: '18px' }}>Profile</Text>
              {usersOpen ? <FaChevronUp style={{ marginLeft: 'auto', fontSize: "15px" }} /> : <FaChevronDown style={{ marginLeft: 'auto', fontSize: "15px" }} />}
            </div>
            {usersOpen && (
              <div style={submenuStyle}>
                <NavLink
                  to="/user/profile"
                  className="list-group-item list-group-item-action"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={submenuItemStyle}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = menuItemHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = ''}
                  >
                    <Text style={{ fontSize: '18px' }}> . Update Profile</Text>
                  </div>
                </NavLink>
              </div>
            )}
          </>
        )}

      </div>
    </>
  );
};

export default Sidebar;
