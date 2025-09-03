import React from 'react';
import { Collapse, Typography } from 'antd';

const { Panel } = Collapse;
const { Title } = Typography;

const FAQ = () => {
    const faqs = [
        { question: "What is the sofa set design in Pakistan?", answer: "There are various sofa set designs available in Pakistan, ranging from traditional to modern styles." },
        { question: "What is the price range for a dining table set at DreamDecor?", answer: "The price range for dining table sets at DreamDecor varies depending on the material and design." },
        { question: "What is the latest dining table design at DreamDecor?", answer: "The latest dining table designs at DreamDecor include minimalist and contemporary styles." },
        { question: "Does DreamDecor offer L-shaped sofa designs?", answer: "Yes, DreamDecor offers a variety of L-shaped sofa designs to fit different living room layouts." },
        { question: "What is the best quality furniture store in Pakistan?", answer: "DreamDecor is considered one of the best quality furniture stores in Pakistan due to its high-quality materials and craftsmanship." },
        { question: "What is the bed design in Pakistan?", answer: "Bed designs in Pakistan include traditional wooden beds, modern platform beds, and upholstered beds." },
        { question: "What is your policy for damaged or defective items?", answer: "If you receive a damaged or defective item, please contact us immediately for a replacement or refund." },
        { question: "Can I return or exchange my furniture order?", answer: "Yes, you can return or exchange your furniture order within 14 days of delivery, provided it is in its original condition." },
    ];

    return (
        <div style={{ padding: '20px', backgroundColor: '#fff7f2', borderRadius: '10px', marginTop: '20px' }}>
            <Title level={2} style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center' }}>FAQs</Title>
            <Collapse accordion expandIconPosition="end" style={{ backgroundColor: '#fff7f2', borderColor: '#fff7f2' }}>
                {faqs.map((faq, index) => (
                    <Panel header={faq.question} key={index} style={{ backgroundColor: '#fff7f2', borderBottom: '1px solid #d9d9d9' }}>
                        <p>{faq.answer}</p>
                    </Panel>
                ))}
            </Collapse>
        </div>
    );
};

export default FAQ;
