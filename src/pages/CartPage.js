import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import { BsCart } from "react-icons/bs";
import Layout from "../components/Layout/Layout.js";
import { useCart } from "../Context/cart.js";
import { useAuth } from "../Context/auth.js";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import CartModal from "../components/CartModal.js";

const CartPage = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useCart();
    const [auth] = useAuth();
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const totalPrice = () => {
        try {
            let total = 0;
            cart?.map((item) => {
                total = total + item.price;
            });
            return total.toLocaleString("en-PK", {
                style: "currency",
                currency: "PKR",
            });
        } catch (error) {
            console.log(error);
        }
    };

    const removeCartItem = (pid) => {
        try {
            let myCart = [...cart];
            let index = myCart.findIndex((item) => item._id === pid);
            myCart.splice(index, 1);
            setCart(myCart);
            localStorage.setItem("cart", JSON.stringify(myCart));
        } catch (error) {
            console.log(error);
        }
    };

    // Handle Cash on Delivery with cart check
    const handleCashOnDeliveryClick = () => {
        if (cart.length === 0) {
            toast.error("Please select an item before proceeding!");
        } else {
            setShowModal(true); // Open the modal if items are in the cart
        }
    };

    const handleCashOnDelivery = async () => {
        setLoading(true);
        try {
            const { data } = await axios.post("http://localhost:5000/api/v1/product/cashondelivery/payment", {
                cart,
                paymentMethod: 'COD',
            });
            setLoading(false);
            localStorage.removeItem("cart");
            setCart([]);
            toast.success("Order placed using Cash on Delivery");
            navigate("/user/orders");
        } catch (error) {
            console.error('Error in COD payment:', error);
            setLoading(false);
        }
    };

    const buttonStyle = {
        padding: "12px 25px",
        fontSize: "16px",
        borderRadius: "25px",
        background: "linear-gradient(90deg, #00A88E, #007ACC)",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "background 0.3s ease",
        marginTop: "10px"
    };

    const buttonHoverStyle = {
        background: "linear-gradient(90deg, #007ACC, #00A88E)",
    };

    return (
        <>
            <Layout>
                <CartModal
                    show={showModal}
                    handleClose={() => setShowModal(false)}
                    handleProceed={handleCashOnDelivery}
                />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center  p-2 mb-1 mt-3">
                                {`Heyy ${auth?.token && auth?.user?.name}`}
                            </h1>
                            <h4 className="text-center">
                                {cart?.length
                                    ? `You Have ${cart.length} items in your Cart ${auth?.token ? "" : "Please Login to Checkout"}`
                                    : "Your Cart is Empty"}
                            </h4>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 p-0 m-0">
                                {cart?.map((p) => (
                                    <div className="row mb-2 p-3 card flex-row" key={p._id}>
                                        <div className="col-md-4">
                                            <img
                                                src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`}
                                                className="card-img-top"
                                                alt={p.name}
                                                width="90%"
                                                height={"90px"}
                                            />
                                        </div>
                                        <div className="col-md-7">
                                            <h3>{p.name}</h3>
                                            <h5>{p.description.substring(0, 30)}</h5>
                                            <h5>Price : {p.price}</h5>
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => removeCartItem(p._id)}
                                                style={{
                                                    padding: "12px 25px",
                                                    fontSize: "16px",
                                                    borderRadius: "25px",
                                                    background: "linear-gradient(90deg, #FF4C4C, #E93D3D)",
                                                    color: "#fff",
                                                    border: "none",
                                                    cursor: "pointer",
                                                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                                                    transition: "background 0.3s ease, box-shadow 0.3s ease",
                                                    margin: "10px",
                                                }}
                                                onMouseEnter={(e) => {
                                                    e.target.style.background = "linear-gradient(90deg, #E93D3D, #FF4C4C)";
                                                    e.target.style.boxShadow = "0 6px 8px rgba(0, 0, 0, 0.3)";
                                                }}
                                                onMouseLeave={(e) => {
                                                    e.target.style.background = "linear-gradient(90deg, #FF4C4C, #E93D3D)";
                                                    e.target.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)";
                                                }}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="col-md-5 p-4 m-0 text-center">
                                <h2>Cart Summary</h2>
                                <h6>Total | Checkout | Payment</h6>
                                <hr />
                                <h4>Total : {totalPrice()}</h4>
                                {auth?.user?.address ? (
                                    <>
                                        <div className="mb-3">
                                            <h4>Current Address</h4>
                                            <h5>{auth?.user?.address}</h5>
                                            <button
                                                className="btn"
                                                style={buttonStyle}
                                                onMouseEnter={(e) => e.target.style.background = buttonHoverStyle.background}
                                                onMouseLeave={(e) => e.target.style.background = "linear-gradient(90deg, #00A88E, #007ACC)"}
                                                onClick={() => navigate("/user/profile")}
                                            >
                                                Update Address
                                            </button>
                                        </div>
                                    </>
                                ) : (
                                    <div className="mb-3">
                                        {auth?.token ? (
                                            <button className="btn btn-outline-warning" onClick={() => navigate("/user/profile")}>Update Address</button>
                                        ) : (
                                            <button
                                                className="btn"
                                                style={buttonStyle}
                                                onMouseEnter={(e) => e.target.style.background = buttonHoverStyle.background}
                                                onMouseLeave={(e) => e.target.style.background = "linear-gradient(90deg, #00A88E, #007ACC)"}
                                                onClick={() => navigate("/#login", { state: "/cart" })}
                                            >
                                                Please Login to Checkout
                                            </button>
                                        )}
                                    </div>
                                )}
                                <div className="mt-2">
                                    <button
                                        className="btn"
                                        style={buttonStyle}
                                        onMouseEnter={(e) => e.target.style.background = buttonHoverStyle.background}
                                        onMouseLeave={(e) => e.target.style.background = "linear-gradient(90deg, #00A88E, #007ACC)"}
                                        onClick={handleCashOnDeliveryClick} // Use the cart check function
                                        disabled={!auth?.token || loading} // Disable if not logged in or loading
                                    >
                                        Pay with Cash on Delivery
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default CartPage;
