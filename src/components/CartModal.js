import React from "react";

const CartModal = ({ show, handleClose, handleProceed }) => {
    if (!show) return null;

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
            }}
        >
            <div
                style={{
                    backgroundColor: "#fff",
                    padding: "20px",
                    borderRadius: "8px",
                    maxWidth: "500px",
                    width: "100%",
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: "10px",
                    }}
                >
                    <h2 style={{ margin: 0 }}>Cash On Delivery</h2>
                    <button
                        onClick={handleClose}
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            fontSize: "1.5rem",
                            cursor: "pointer",
                        }}
                    >
                        &times;
                    </button>
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <p>
                        To confirm your order with cash on delivery, please note that we
                        require a 40% advance payment when you visit the shop. If you don't
                        visit within a week, your order will be canceled.
                    </p>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <button
                        style={{
                            backgroundColor: "#6c757d",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginRight: "10px",
                        }}
                        onClick={handleProceed}
                    >
                        Proceed with COD
                    </button>
                    <button
                        style={{
                            backgroundColor: "#dc3545",
                            color: "#fff",
                            border: "none",
                            padding: "10px 20px",
                            borderRadius: "4px",
                            cursor: "pointer",
                        }}
                        onClick={handleClose}
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartModal;
