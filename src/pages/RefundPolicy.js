import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const RefundPolicy = () => {
    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '40px', minHeight: '100vh', textAlign: 'center' }}>
            <Typography>
                <Title level={2} style={{ color: '#333' }}>Refund Policy</Title>
                <Divider style={{ borderColor: '#ff6600' }} />
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    At DreamDecor, we strive to provide quality products that meet your expectations. If you are not entirely satisfied with your purchase, we're here to help.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Returns</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    You have 3 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging. Your item needs to have the receipt or proof of purchase.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Refunds</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your credit card (or original method of payment). You will receive the credit within a certain amount of days, depending on your card issuer's policies.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Shipping</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Contact Us</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    If you have any questions on how to return your item to us, contact us at <a href="mailto:support@dreamdecor.com" style={{ color: '#ff6600' }}>support@dreamdecor.com</a>.
                </Paragraph>
            </Typography>
        </div>
    );
};

export default RefundPolicy;
