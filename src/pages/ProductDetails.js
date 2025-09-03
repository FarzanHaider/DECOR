import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout.js";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom"; // Importing useNavigate
import { useCart } from "../Context/cart.js";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const params = useParams();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Initializing navigate function

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/get-product/${params.slug}`
      );
      setProducts(data?.products);
      getSimilarProduct(data?.products._id, data?.products.category._id);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="container" style={{ marginTop: "50px" }}>
          <div className="row">
            <div className="col-md-4">
              <img
                src={`http://localhost:5000/api/v1/product/product-photo/${products._id}`}
                alt={products.name}
                style={{
                  height: "450px",
                  width: "100%",
                  objectFit: "cover",
                  borderRadius: "10px",
                  marginBottom: "20px",
                }}
              />
            </div>
            <div
              className="col-md-6"
              style={{
                color: "rgb(51, 51, 51)",
                paddingLeft: "80px", // Shifted further right
              }}
            >
              <h1 style={{ marginBottom: "20px" }}>Product Details</h1>
              <h4 style={{ marginBottom: "15px" }}>
                <strong>Name:</strong>{products.name}
              </h4>
              <p
                style={{
                  marginBottom: "15px",
                  fontSize: "20px",
                }}
              >
                <strong>Description:</strong> {products.description}
              </p>
              <p
                style={{
                  marginBottom: "15px",
                  fontSize: "20px", // Larger font size
                }}
              >
                <strong>Price:</strong> Rs {products.price}
              </p>
              <p
                style={{
                  marginBottom: "15px",
                  fontSize: "20px", // Larger font size
                }}
              >
                <strong>Category:</strong> {products?.category?.name}
              </p>

              <button
                className="btn"
                style={{
                  padding: "12px 25px",
                  fontSize: "16px",
                  borderRadius: "25px", // More rounded for a modern look
                  background: "linear-gradient(90deg, #00A88E, #007ACC)", // New gradient for appeal
                  color: "#fff",
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adding shadow for depth
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "linear-gradient(90deg, #007ACC, #00A88E)"; // Hover effect
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "linear-gradient(90deg, #00A88E, #007ACC)";
                }}
                onClick={() => {
                  setCart([...cart, products]);
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([...cart, products])
                  );
                  toast.success("Item Added to Cart");
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mt-5">
        <h2 style={{ marginBottom: "30px" }}>Similar Products</h2>
        <div className="row">
          {relatedProducts.length < 1 ? (
            <p className="text-center">No Similar Products Found</p>
          ) : (
            relatedProducts.map((p) => (
              <div
                className="col-md-3" // Reduced width for a compact look
                key={p._id}
                onClick={() => navigate(`/product/${p.slug}`)} // Navigate to product details on click
                style={{
                  cursor: "pointer",
                }}
              >
                <div
                  className="card"
                  style={{
                    width: "100%",
                    marginBottom: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    transition: "transform 0.2s ease-in-out", // Add hover effect
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)"; // Slight zoom on hover
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)"; // Reset zoom
                  }}
                >
                  <img
                    src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`}
                    alt={p.name}
                    style={{
                      height: "250px",
                      objectFit: "cover",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                  />
                  <div className="card-body" style={{ padding: "15px" }}>
                    <h5 style={{ fontSize: "18px" }}>{p.name}</h5> {/* Increased size */}
                    <p style={{ fontSize: "16px" }}>{p.description}</p> {/* Increased size */}
                    <p style={{ fontSize: "16px" }}>Rs {p.price}</p> {/* Increased size */}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
