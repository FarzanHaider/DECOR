import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const TermsOfUse = () => {
    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '40px', minHeight: '100vh', textAlign: 'center' }}>
            <Typography>
                <Title level={2} style={{ color: '#333' }}>Terms of Use</Title>
                <Divider style={{ borderColor: '#ff6600' }} />
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    Welcome to DreamDecor. By using our website, you agree to comply with and be bound by the following terms and conditions of use, which together with our privacy policy govern DreamDecor's relationship with you in relation to this website.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Use of the Website</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    The content of the pages of this website is for your general information and use only. It is subject to change without notice. Unauthorized use of this website may give rise to a claim for damages and/or be a criminal offense.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Intellectual Property</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance, and graphics. Reproduction is prohibited other than in accordance with the copyright notice, which forms part of these terms and conditions.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Limitation of Liability</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    DreamDecor will not be liable for any damages arising from the use of this website. This limitation of liability applies to direct, indirect, consequential, special, punitive, and other damages you may suffer.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Governing Law</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    Your use of this website and any dispute arising out of such use of the website is subject to the laws of Pakistan.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Changes to These Terms</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    DreamDecor reserves the right to change these terms at any time. We will notify you of any changes by posting the new terms on this page.
                </Paragraph>
            </Typography>
        </div>
    );
};

export default TermsOfUse;
