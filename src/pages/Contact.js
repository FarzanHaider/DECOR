import React from 'react';
import { Typography, Divider } from 'antd';
import { MailOutlined, InstagramOutlined, FacebookOutlined, PhoneOutlined, WhatsAppOutlined } from '@ant-design/icons';
import Footer from "../components/Layout/Footer"
import Header from "../components/Layout/Header"
const { Title, Paragraph } = Typography;


const Contact = () => {
    return (
        <>
            <Header style={{ marginTop: '50px' }} />
            <div style={{
                backgroundColor: '#f8f8f8',
                padding: '60px',
                minHeight: '100vh',
                backgroundImage: 'url("https://example.com/your-furniture-bg.jpg"), url("https://example.com/pattern-bg.png")',
                backgroundSize: 'cover, auto',
                backgroundPosition: 'center, left top',
                backgroundRepeat: 'no-repeat, repeat',
                textAlign: 'center',

            }}>

                <div style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    padding: '50px',
                    borderRadius: '15px',
                    maxWidth: '1100px',
                    height: "600px",
                    margin: 'auto',
                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    marginBottom: "20px" 
                }}>
                    <Title level={2} style={{ color: '#333', fontSize: '40px', marginBottom: '10px' }}>Let's Get in Touch!</Title>
                    <Divider style={{ borderColor: '#ff6600' }} />
                    <Paragraph style={{ fontSize: '18px', color: '#555', marginBottom: '20px' }}>
                        We’re here to help you with your furniture needs. Feel free to contact us through any of the following channels:
                    </Paragraph>

                
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', flexWrap: 'wrap', gap: '30px' }}>
                       
                        <style>
                            {`
                            .contact-link {
                                font-size: 28px; 
                                color: #333; 
                                display: flex; 
                                alignItems: 'center'; 
                                textDecoration: 'none'; 
                                transition: transform 0.3s ease-in-out;
                            }
                            .contact-link:hover {
                                transform: scale(1.1);
                            }
                        `}
                        </style>
            
                        <a href="mailto:khadija6300@gmail.com" className="contact-link">
                            <MailOutlined style={{ fontSize: '35px', marginRight: '15px', color: '#ff6600' }} />
                            Email Us
                        </a>

             
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <InstagramOutlined style={{ fontSize: '35px', marginRight: '15px', color: '#C13584' }} />
                            Instagram
                        </a>

         
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <FacebookOutlined style={{ fontSize: '35px', marginRight: '15px', color: '#1877F2' }} />
                            Facebook
                        </a>

              
                        <a href="https://wa.me/03076203172" target="_blank" rel="noopener noreferrer" className="contact-link">
                            <WhatsAppOutlined style={{ fontSize: '35px', marginRight: '15px', color: '#25D366' }} />
                            WhatsApp
                        </a>

                     
                
                    </div>

                 
       <Paragraph style={{ fontSize: '16px', color: '#777', marginTop: '20px' }}>
                        We look forward to hearing from you. Whether you need help selecting the perfect piece of furniture or have any other questions, we're just a click away.
                    </Paragraph>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Contact;
