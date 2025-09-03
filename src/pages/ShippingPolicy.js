import React from 'react';
import { Typography, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const ShippingPolicy = () => {
    return (
        <div style={{ backgroundColor: '#f0f0f0', padding: '40px', minHeight: '100vh', textAlign: 'center' }}>
            <Typography>
                <Title level={2} style={{ color: '#333' }}>Shipping Policy</Title>
                <Divider style={{ borderColor: '#ff6600' }} />
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    At DreamDecor, we are committed to delivering your orders in a timely manner. This Shipping Policy outlines the terms and conditions related to the delivery of our products.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Order Processing</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    All orders are processed within 2-3 business days. Orders are not shipped or delivered on weekends or holidays. If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery. If there will be a significant delay in the shipment of your order, we will contact you via email or telephone.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Shipping Rates & Delivery Estimates</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    Shipping charges for your order will be calculated and displayed at checkout. Delivery times may vary depending on your location. Here are our standard delivery estimates:
                </Paragraph>
                <ul style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto', color: '#333' }}>
                    <li>Local (within city): 1-2 business days</li>
                    <li>Regional (within province): 2-4 business days</li>
                    <li>National (across country): 5-7 business days</li>
                </ul>
                <Title level={3} style={{ color: '#ff6600' }}>Delivery Confirmation & Order Tracking</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    You will receive a shipment confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>Damages</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    DreamDecor is not liable for any products damaged or lost during shipping. If you received your order damaged, please contact the shipment carrier to file a claim. Please save all packaging materials and damaged goods before filing a claim.
                </Paragraph>
                <Title level={3} style={{ color: '#ff6600' }}>International Shipping Policy</Title>
                <Paragraph style={{ textAlign: 'left', maxWidth: '800px', margin: 'auto' }}>
                    Currently, we do not ship outside Pakistan.
                </Paragraph>
            </Typography>
        </div>
    );
};

export default ShippingPolicy;
