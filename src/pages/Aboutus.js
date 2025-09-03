import React from "react";
import Layout from "./../components/Layout/Layout.js";

const AboutUs = () => {
    return (
        <Layout>
            {/* Main Heading Section */}
            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "40vh",
                    textAlign: "center",
                    fontFamily: "'Poppins', sans-serif", // Stylish font
                }}
            >
                <h1 style={{ fontSize: "48px", fontWeight: "bold", color: "#333" }}>
                    About Us
                </h1>
                <p
                    style={{
                        fontSize: "18px",
                        color: "#555",
                        maxWidth: "800px",
                        marginTop: "20px",
                        lineHeight: "1.6",
                    }}
                >
                    Welcome to Dream Decor, your go-to destination for premium furniture
                    that transforms your home into a place of elegance and comfort. We
                    bring carefully selected furniture pieces to complement your unique
                    style and home environment.
                </p>
            </section>

            {/* Who We Are Section */}
            <section
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "auto",
                    padding: "50px 0",
                    backgroundColor: "#f8f9fa",
                    textAlign: "center",
                    fontFamily: "'Poppins', sans-serif", // Stylish font continues
                }}
            >
                <h2 style={{ fontSize: "36px", fontWeight: "bold", color: "#333" }}>
                    Who We Are
                </h2>
                <p
                    style={{
                        fontSize: "18px",
                        color: "#555",
                        maxWidth: "800px",
                        marginTop: "20px",
                        lineHeight: "1.8",
                    }}
                >
                    Dream Decor is a homegrown brand with a passion for crafting stylish,
                    comfortable, and affordable furniture. We specialize in creating
                    beautiful living spaces, whether you’re looking for the perfect sofa
                    for your living room, a cozy bed for your bedroom, or a chic dressing
                    table to complete your decor. Our mission is to provide you with
                    timeless pieces that elevate your home, while ensuring quality,
                    sustainability, and innovation in everything we do.
                </p>
                <p
                    style={{
                        fontSize: "18px",
                        color: "#555",
                        maxWidth: "800px",
                        marginTop: "10px",
                        lineHeight: "1.8",
                    }}
                >
                    At Dream Decor, we believe that your home should reflect your
                    personality. That’s why we are dedicated to offering a range of
                    furniture pieces that suit every style and budget, helping you create
                    the home you’ve always dreamed of.
                </p>
            </section>

            {/* Decorative Element Section */}
            <section
                style={{
                    display: "flex",
                    justifyContent: "center",
                    padding: "50px 0",
                }}
            >
                {/* Using a new decorative icon */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2593/2593497.png" // New elegant icon related to home decor
                        alt="Decorative Icon"
                        style={{
                            width: "180px", // Larger icon size
                            height: "180px",
                            marginBottom: "20px",
                        }}
                    />
                    <p
                        style={{
                            fontFamily: "'Poppins', sans-serif",
                            fontSize: "20px", // Larger font size for the text
                            color: "#777",
                            textAlign: "center",
                            marginTop: "10px",
                        }}
                    >
                        Your dream decor, made with care and creativity.
                    </p>
                </div>
            </section>
        </Layout>
    );
};

export default AboutUs;
