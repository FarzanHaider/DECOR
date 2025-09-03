import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const PrivacyPolicy = () => {
    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '40px', minHeight: '100vh', textAlign: 'center' }}>
            <Typography>
                <Title level={2} style={{ color: '#333' }}>Privacy Policy</Title>
                <Divider style={{ borderColor: '#ff6600' }} />
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    At DreamDecor, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines our practices regarding the collection, use, and protection of your information.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Information We Collect</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    We collect personal information that you provide to us, such as your name, address, email address, and phone number. We also collect payment information when you make a purchase, but we do not store this information on our servers.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>How We Use Your Information</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    We use the information we collect to process your orders, communicate with you about your purchases, and improve our services. We may also use your information to send you promotional materials and updates about our products and services.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>How We Protect Your Information</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. We use secure servers and encryption to safeguard your information.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Sharing Your Information</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    We do not share your personal information with third parties without your consent, except as required by law or to provide the services you have requested. We may share your information with service providers who assist us in operating our website and conducting our business.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Your Rights</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    You have the right to access, update, and delete your personal information. If you would like to exercise these rights, please contact us at <a href="mailto:support@dreamdecor.com" style={{ color: '#ff6600' }}>support@dreamdecor.com</a>.
                </Paragraph>
            </Typography>
        </div>
    );
};

export default PrivacyPolicy;
