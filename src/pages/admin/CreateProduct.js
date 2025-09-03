import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout.js";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const CreateProduct = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [shipping, setShipping] = useState(""); 
    const [photo, setPhoto] = useState("");

  
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/v1/category/get-category");
            if (data?.success) setCategories(data?.category);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in getting Category");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

   
    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData();
            productData.append("name", name);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("quantity", quantity);
            productData.append("photo", photo);
            productData.append("category", category);
            productData.append("shipping", shipping); 
            const { data } = await axios.post("http://localhost:5000/api/v1/product/create-product", productData);
            if (data.success) {
                toast.success("Product Created Successfully");
                navigate("/");
            } else {
                toast.error(data.message || "Failed to create product");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    const handleInputChange = (setter) => (e) => {
        const value = e.target.value;
        if (!isNaN(value)) {
            setter(value);
        }
    };

    return (
        <Layout title={"DashBoard - Create Product"}>
            <Toaster position="top-right" />
            <div className="admin-dashboard m-3 p-3">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Create Product</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="m-3 w-75 ml-7">
                            <Select
                                bordered={false}
                                placeholder="Select a Category"
                                size="large"
                                className="form-select mb-3"
                                onChange={(value) => setCategory(value)}
                            >
                                {categories?.map((c) => (
                                    <Option key={c._id} value={c._id}>
                                        {c.name}
                                    </Option>
                                ))}
                            </Select>
                            <div className="mb-3">
                                <label className="btn btn-outline-secondary col-md-12">
                                    {photo ? photo.name : "Upload Photo"}
                                    <input
                                        type="file"
                                        name="photo"
                                        accept="image/*"
                                        onChange={(e) => setPhoto(e.target.files[0])}
                                        hidden
                                    />
                                </label>
                            </div>
                            <div className="mb-3">
                                {photo && (
                                    <div className="text-center">
                                        <img
                                            src={URL.createObjectURL(photo)}
                                            alt="product_photo"
                                            height={"200px"}
                                            className="img img-responsive"
                                        />
                                    </div>
                                )}
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={name}
                                    placeholder="Write a Name"
                                    className="form-control"
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    type="text"
                                    value={description}
                                    placeholder="Write a Description"
                                    className="form-control"
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={price}
                                    placeholder="Write a Price"
                                    className="form-control"
                                    onChange={handleInputChange(setPrice)}
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    value={quantity}
                                    placeholder="Write a Quantity"
                                    className="form-control"
                                    onChange={handleInputChange(setQuantity)}
                                />
                            </div>
                            <div className="mb-3">
                                <Select
                                    bordered={false}
                                    placeholder="Select Shipping Method"
                                    size="large"
                                    className="form-select mb-3"
                                    onChange={(value) => setShipping(value)}
                                >
                                    <Option value="0">No</Option>
                                    <Option value="1">Yes</Option>
                                </Select>
                            </div>
                            <div className="mb-3">
                                <button className="btn btn-primary" style={{ width: '200px' }} onClick={handleCreate}>CREATE PRODUCT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default CreateProduct;
