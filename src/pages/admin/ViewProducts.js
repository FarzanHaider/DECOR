import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import toast from "react-hot-toast";
import axios from "axios";
import { Link } from "react-router-dom";

const ViewProducts = () => {
    const [Products, setProducts] = useState([]);
    const [hoveredProduct, setHoveredProduct] = useState(null);

   
    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/v1/product/get-product");
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

   
    useEffect(() => {
        getAllProducts();
    }, []);

    const containerStyle = {
        padding: "0 20px",
    };

    const productGridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
    };

    const cardStyle = {
        width: "100%",
        boxSizing: "border-box",
        overflow: "hidden",
    };

    const cardImgTopStyle = (isHovered) => ({
        width: "100%",
        height: "200px",
        objectFit: "cover",
        transition: "transform 0.3s ease-in-out",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
    });

    const productLinkStyle = {
        textDecoration: "none",
        color: "inherit",
    };

    return (
        <Layout>
            <div style={containerStyle}>
                <h1 className="text-center">All Product List</h1>
                <div style={productGridStyle}>
                    {Products?.map((p) => (
                        <Link
                            key={p._id}
                            to={`/update/update-product/${p.slug}`}
                            style={productLinkStyle}
                        >
                            <div
                                className="card m-3"
                                style={cardStyle}
                                onMouseEnter={() => setHoveredProduct(p._id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                            >
                                <img
                                    src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`}
                                    style={cardImgTopStyle(hoveredProduct === p._id)}
                                    alt={p.name}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{p.name}</h5>
                                    <p className="card-text">{p.description}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default ViewProducts;
