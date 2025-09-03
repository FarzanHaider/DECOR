import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout.js";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const CategoryProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        if (params?.slug) getProductsByCat();
    }, [params?.slug]);

    const getProductsByCat = async () => {
        try {
            const { data } = await axios.get(
                `http://localhost:5000/api/v1/product/product-category/${params.slug}`
            );
            setProducts(data?.products);
            setCategory(data?.category);
            setLoading(false); // Stop loading after fetching data
        } catch (error) {
            console.log(error);
            setLoading(false); // Stop loading on error
        }
    };

    return (
        <Layout>
            <div className="container mt-3">
                <h3 className="text-center">Category - {category?.name}</h3>
                <h2 className="text-center">{products?.length} Result(s) Found</h2>

                {loading ? (
                    <div className="text-center">
                        <p>Loading products...</p> {/* Loader while fetching */}
                    </div>
                ) : (
                    <div className="row">
                        <div className="col-md-9 offset-1">
                            <div className="d-flex flex-wrap">
                                {products?.map((p) => (
                                    <div
                                        className="card m-3"
                                        style={{
                                            width: "18rem",
                                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                                            borderRadius: "10px",
                                            transition: "transform 0.2s ease-in-out",
                                        }}
                                        key={p._id}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = "scale(1.05)";
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                    >
                                        <img
                                            src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`}
                                            className="card-img-top"
                                            alt={p.name}
                                            style={{
                                                height: "250px",
                                                objectFit: "cover",
                                                borderTopLeftRadius: "10px",
                                                borderTopRightRadius: "10px",
                                            }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{p.name}</h5>
                                            <p className="card-text">
                                                {p.description.substring(0, 30)}...
                                            </p>
                                            <p className="card-text">Rs {p.price}</p>
                                            <button
                                                className="btn"
                                                style={{
                                                    padding: "12px 22px",
                                                    fontSize: "17px",
                                                    borderRadius: "25px",
                                                    background: "linear-gradient(90deg, #00A88E, #007ACC)",
                                                    color: "#fff",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                    transition: "background 0.3s ease",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    marginLeft: "40px"
                                                   

                                                }}
                                                onClick={() => navigate(`/product/${p.slug}`)}
                                            >
                                                View Details
                                            </button>
                                            {/* <button
                                                className="btn"
                                                style={{
                                                    padding: "10px 20px",
                                                    fontSize: "14px",
                                                    borderRadius: "25px",
                                                    background: "linear-gradient(90deg, #00A88E, #007ACC)",
                                                    color: "#fff",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                                                    transition: "background 0.3s ease",
                                                }}
                                                onClick={() => {
                                                    // Add to cart logic
                                                    let cart = JSON.parse(localStorage.getItem("cart")) || [];
                                                    cart.push(p);
                                                    localStorage.setItem("cart", JSON.stringify(cart));
                                                    toast.success("Item Added to Cart");
                                                }}
                                            >
                                                ADD TO CART
                                            </button> */}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default CategoryProduct;
