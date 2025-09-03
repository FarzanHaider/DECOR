import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
const Footer = () => {
  return (
    <div style={{ backgroundColor: '#fff7f2', padding: '40px 20px 0 20px', borderTop: '1px solid #d9d9d9', position: 'relative', bottom: '0', width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', textAlign: 'left' }}>
        <div style={{ flex: '1', minWidth: '200px', marginBottom: '20px' }}>
          <h3 style={{ color: '#333333' }}>CONTACT INFO</h3>
          <p>Liberty Market, Gulberg III, Lahore</p>
          <p>+92 316 4435826 / +92 326 4287085 </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}><FacebookOutlined /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}><InstagramOutlined /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}><LinkedinOutlined /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}><TwitterOutlined /></a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" style={{ color: '#333' }}><WhatsAppOutlined /></a>
          </div>
        </div>
        <Col xs={24} sm={12} md={8} style={{ marginBottom: '20px' }}>
          <h3 style={{ color: '#333333', marginBottom: '10px' }}>INFORMATION AREA</h3>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <Link to="/shipping-policy" style={{ color: '#333', textDecoration: 'none' }}>
              Shipping policy
            </Link>
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <Link to="/privacy-policy" style={{ color: '#333', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <Link to="/refund-policy" style={{ color: '#333', textDecoration: 'none' }}>
              Refund Policy
            </Link>
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <Link to="/terms-of-use" style={{ color: '#333', textDecoration: 'none' }}>
              Terms of Use
            </Link>
          </p>
          <p style={{ margin: '5px 0', fontSize: '16px' }}>
            <Link to="/contact" style={{ color: '#333', textDecoration: 'none' }}>
              Contact Us
            </Link>
          </p>
        </Col>

      </div>
      <div style={{ textAlign: 'center', color: '#333', padding: '10px 0' }}>
        <p style={{ margin: '0', fontSize: "25px" }}>All Rights Reserved &copy; DreamDecor</p>
      </div>
    </div>
  );
};

export default Footer;
