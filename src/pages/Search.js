import React from "react";
import Layout from ".././components/Layout/Layout.js";
import { useSearch } from "../Context/Search.js";
import { Card, Button, Tooltip } from "antd";
import { EyeOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useCart } from "../Context/cart.js";

const Search = () => {
    const [values] = useSearch();
    const navigate = useNavigate();
    const [cart, setCart] = useCart();

    // Function to handle "Add to Cart"
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        toast.success("Item Added to Cart");
    };

    return (
        <Layout title={"Search Results - DreamDecor"}>
            <div className="container">
                <div className="text-center">
                    <h1>Search Results</h1>
                    <h6>
                        {values?.results.length < 1
                            ? "No Products Found"
                            : `Found ${values?.results.length}`}
                    </h6>
                    <div className="d-flex flex-wrap mt-4" style={{ justifyContent: 'center' }}>
                        {values?.results.map((p) => (
                            <Card
                                hoverable
                                key={p._id}
                                style={{
                                    width: '300px',
                                    margin: '20px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease',
                                }}
                                cover={<img src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`} alt={p.name} style={{ height: '250px', objectFit: 'cover' }} />}
                                actions={[
                                    <Tooltip title="View Details">
                                        <Button
                                            type="link"
                                            icon={<EyeOutlined />}
                                            onClick={() => navigate(`/product/${p.slug}`)}
                                        />
                                    </Tooltip>,
                                    <Tooltip title="Add to Cart">
                                        <Button
                                            type="link"
                                            icon={<ShoppingCartOutlined />}
                                            onClick={() => handleAddToCart(p)}
                                        />
                                    </Tooltip>
                                ]}
                            >
                                <Card.Meta
                                    title={<h5 style={{ fontSize: '18px', fontWeight: 'bold' }}>{p.name}</h5>}
                                    description={
                                        <>
                                            <p style={{ fontSize: '14px', color: '#777' }}>{p.description.substring(0, 50)}...</p>
                                            <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff0000' }}>Rs {p.price}</p>
                                        </>
                                    }
                                />
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Search;
