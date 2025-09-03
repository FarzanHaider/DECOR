import React, { useState, useEffect } from 'react';
import { Card, Checkbox, Radio, Button, Tooltip } from 'antd';
import { EyeOutlined, ShoppingCartOutlined, FilterOutlined } from '@ant-design/icons';
import axios from 'axios';
import Header from '../components/Layout/Header';
import Footer from '../components/Layout/Footer';
import LoginRegister from './Auth/LoginRegister';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/auth';
import FAQ from "../components/Layout/FAQ";
import toast from 'react-hot-toast';
import { Prices } from '../components/Prices';
import { useCart } from "../Context/cart.js";

const HomePage = () => {
    const navigate = useNavigate();
    const [showFilters, setShowFilters] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
    const [cartModalTimeout, setCartModalTimeout] = useState(null);

    const [auth] = useAuth();
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [checked, setChecked] = useState([]);
    const [radio, setRadio] = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [cart, setCart] = useCart();

    useEffect(() => {
        getAllCategory();
        getTotal();
        getAllProducts();
    }, []);

    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/v1/category/get-category");
            if (data?.success) setCategories(data?.category);
        } catch (error) {
            console.log(error);
        }
    };

    const handleLoginRegisterClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleAddToCart = (product) => {
        setCart([...cart, product]);
        setIsCartModalOpen(true);


        if (cartModalTimeout) {
            clearTimeout(cartModalTimeout);
        }


        const timeout = setTimeout(() => {
            setIsCartModalOpen(false);
        }, 3000);
        setCartModalTimeout(timeout);
        toast.success("Item Added to Cart");
    };

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`http://localhost:5000/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts(data.products);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const getTotal = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/v1/product/product-count");
            setTotal(data?.total);
        } catch (error) {
            console.log(error);
        }
    };

    const loadMore = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get(`http://localhost:5000/api/v1/product/product-list/${page}`);
            setLoading(false);
            setProducts([...products, ...data?.products]);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    const handleFilter = (value, id) => {
        let all = [...checked];
        if (value) {
            all.push(id);
        } else {
            all = all.filter(c => c !== id);
        }
        setChecked(all);
    };

    useEffect(() => {
        if (!checked.length || !radio.length) getAllProducts();
    }, [checked.length, radio.length]);

    useEffect(() => {
        if (checked.length || radio.length) filterProduct();
    }, [checked, radio]);

    const filterProduct = async () => {
        try {
            const { data } = await axios.post("http://localhost:5000/api/v1/product/product-filters", { checked, radio });
            setProducts(data?.products);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            const filterVisibility = window.innerWidth > 768;
            setShowFilters(filterVisibility);
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on mount

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="homepage" style={{ maxWidth: '1500px', margin: '0 auto', marginTop: "-20px", overflowX: 'hidden', position: 'relative' }}>
            <Header onLoginRegisterClick={handleLoginRegisterClick} />
            <div
                className="main-content"
                style={{
                    filter: isModalOpen ? 'blur(5px)' : 'none',
                    transition: 'filter 0.3s ease',
                }}
            >
                <div className="hero-section" style={{ position: 'relative', marginBottom: '20px' }}>
                    <video
                        className="Banner-video"
                        style={{ width: '100%', height: 'auto', marginTop: "-20px" }}
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/images/Banner.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="row" style={{ display: 'flex', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '-100px' }}>
                        <Tooltip title={showFilters ? "Hide Filters" : "Show Filters"}>
                            <Button
                                icon={<FilterOutlined style={{ fontSize: '24px', color: '#4CAF50' }} />}
                                onClick={() => setShowFilters(!showFilters)}
                                style={{
                                    display: 'inline-block',
                                    padding: '6px',
                                    marginRight: '300px',
                                    height: "40px",
                                    width: "45px"
                                }}
                            />
                        </Tooltip>
                    </div>

                    {/* Conditionally render filters based on showFilters state */}
                    {showFilters && (
                        <div className="col-md-3" style={{ width: '100%', maxWidth: '300px', marginBottom: '20px' }}>
                            <h2 className="text-center">Filter By Category</h2>
                            <div className="Filter">
                                {categories?.map((c) => (
                                    <div key={c._id}>
                                        <Checkbox onChange={(e) => handleFilter(e.target.checked, c._id)}>{c.name}</Checkbox>
                                    </div>
                                ))}
                                
                            </div>
                            <h2 className="text-center mt-4">Filter By Price</h2>
                            <div className="Filter">
                                <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                                    {Prices?.map((p) => (
                                        <div key={p._id}>
                                            <Radio value={p.array}>{p.name}</Radio>
                                        </div>
                                    ))}
                                </Radio.Group>
                            </div>
                            <div className="Filter">
                                <button
                                    className="btn btn-danger m-4"
                                    onClick={() => window.location.reload()}
                                    style={{ backgroundColor: 'rgb(51, 51, 51)', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px' }}
                                >
                                    RESET FILTERS
                                </button>
                            </div>
                        </div>
                    )}
    
                    <div className="col-md-9" style={{ flexGrow: 1 }}>
                        <h1 className="text-center">All Products</h1>
                        <div className="row" style={{ display: 'flex',  gap: '16px',  justifyItems: 'start' , gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            {products?.map((p) => (
                                <Card
                                    hoverable
                                    style={{
                                        width: '100%',
                                        maxWidth: '23%',
                                        margin: '1% 0',
                                        boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
                                        transition: '0.3s',
                                        borderRadius: '5px',
                                    }}
                                    cover={<img alt={p.name} src={`http://localhost:5000/api/v1/product/product-photo/${p._id}`} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
                                    actions={[
                                        <Tooltip title="View Detail">
                                            <Button type="link" icon={<EyeOutlined />} onClick={() => navigate(`/product/${p.slug}`)} />
                                        </Tooltip>,


                                        <Tooltip title="Add to Cart">
                                            <Button
                                                type="link"
                                                icon={<ShoppingCartOutlined onClick={() => handleAddToCart(p)} />}
                                                onClick={() => {
                                                    setCart([...cart, p]);
                                                    setIsCartModalOpen(true);
                                                    toast.success("Item Added to Cart");
                                                }}
                                            />
                                        </Tooltip>
                                    ]}
                                    key={p._id}

                                >
                                    <Card.Meta
                                        title={<h5 style={{ fontSize: '18px', fontWeight: 'bold' }}>{p.name}</h5>}
                                        description={
                                            <>
                                                <p style={{ fontSize: '14px', color: '#777' }}>{p.description.substring(0, 30)}...</p>
                                                <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#ff0000', margin: '0' }}>Rs {p.price}</p>
                                            </>
                                        }
                                    />
                                </Card>
                            ))}
                        </div>
                        {isCartModalOpen && (
                            <div className="cart-modal" style={{
                                position: 'fixed',
                                color: "white",
                                top: '50%', // Center vertically
                                left: '54%',
                                transform: 'translate(-50%, -50%)', // Adjust to center the modal
                                width: '800px',
                                backgroundColor: 'rgb(58, 25, 16)',
                                padding: '-2px',
                                borderRadius: '5px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                zIndex: '1000',
                                whiteSpace: "nowrap",
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <button
                                    onClick={() => setIsCartModalOpen(false)}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        border: 'none',
                                        background: 'transparent',
                                        fontSize: '20px',
                                        cursor: 'pointer',
                                    }}
                                >
                                    &times;
                                </button>
                                <p style={{ marginTop: "40px", fontSize: "15px" }}>Your item is successfully added to the cart. Check your cart for details or explore more items.</p>
                                <Button style={{ color: "white", fontWeight: "bold", fontSize: "18px" }}
                                    type="link"
                                    onClick={() => {
                                        navigate('/cart');
                                        setIsCartModalOpen(false);
                                    }}
                                >
                                    View Cart
                                </Button>
                            </div>
                        )}

                        <div className="m-2 p-3" style={{ textAlign: 'center' }}>
                            {products && products.length < total && (
                                <button
                                    className="btn btn-warning"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setPage(page + 1);
                                        loadMore();
                                    }}
                                    style={{
                                        backgroundColor: 'rgb(51, 51, 51)',  // Dark background
                                        color: 'white',                      // White text color
                                        padding: '12px 30px',                // More padding for better spacing
                                        border: 'none',                      // Remove border
                                        borderRadius: '30px',                // Circular rounded edges for a modern look
                                        fontSize: '16px',                    // Slightly larger font for readability
                                        cursor: 'pointer',                   // Change cursor on hover
                                        marginRight: '1500px',                 // More margin from the right side
                                        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Add a subtle shadow for depth
                                        transition: 'all 0.3s ease',
                                        whiteSpace: "nowrap"      // Smooth transition for hover effects
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#343434';  // Darker grey on hover
                                        e.currentTarget.style.transform = 'scale(1.05)';    // Slight scaling on hover
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgb(51, 51, 51)';  // Revert color
                                        e.currentTarget.style.transform = 'scale(1)';              // Revert scaling
                                    }}
                                >
                                    {loading ? "Loading ..." : "Load More"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {isModalOpen && <LoginRegister onClose={handleCloseModal} />}
            <FAQ />
            <Footer />
        </div >
    );
};

export default HomePage;
