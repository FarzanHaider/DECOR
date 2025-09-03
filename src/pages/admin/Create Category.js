import React, { useEffect, useState } from "react";
import Layout from "./../../components/Layout/Layout.js";
import toast from "react-hot-toast";
import axios from "axios";
import CategoryForm from "../../components/Form/CategoryForm.js";
import Modal from "antd/es/modal/Modal.js";

const CreateCategory = () => {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("");

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("http://localhost:5000/api/v1/category/create-category", {
                name
            });
            if (data?.success) {
                toast.success(`${name} is Created`);
                getAllCategory();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in Input Form");
        }
    };

    // Get All Categories
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("http://localhost:5000/api/v1/category/get-category");
            if (data?.success)
                setCategories(data?.category);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in getting Category");
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    // Handle Update Category
    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`http://localhost:5000/api/v1/category/update-category/${selected._id}`, { name: updatedName });
            if (data.success) {
                toast.success(`${updatedName} is updated`);
                setSelected(null);
                setUpdatedName("");
                setVisible(false);
                getAllCategory();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    // Handle Delete Category
    const handleDelete = async (categoryId) => {
        try {
            const { data } = await axios.delete(`http://localhost:5000/api/v1/category/delete-category/${categoryId}`);
            if (data.success) {
                toast.success(`Category is deleted`);
                getAllCategory();
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            toast.error("Something went wrong");
        }
    };

    return (
        <Layout title={"Dashboard - Create Category"}>
            <div className="container m-3 p-3">
                <h1>Manage Category</h1>
                <div className="p-3" style={{ maxWidth: '600px' }}>
                    <CategoryForm
                        handleSubmit={handleSubmit}
                        value={name}
                        setValue={setName}
                    />
                </div>
                <div style={{ width: '100%' }}>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" style={{ width: '70%' }}>Name</th>
                                <th scope="col" style={{ width: '30%' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {categories.map((c) => (
                                <tr key={c._id}>
                                    <td>{c.name}</td>
                                    <td style={{ display: 'flex', gap: '5px' }}>
                                        <button
                                            className="btn btn-primary"
                                            style={{ width: '120px' }}
                                            onClick={() => {
                                                setVisible(true);
                                                setUpdatedName(c.name);
                                                setSelected(c);
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            style={{ width: '120px' }}
                                            onClick={() => handleDelete(c._id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Modal
                    onCancel={() => setVisible(false)}
                    footer={null}
                    visible={visible}
                >
                    <CategoryForm
                        value={updatedName}
                        setValue={setUpdatedName}
                        handleSubmit={handleUpdate}
                    />
                </Modal>
            </div>
        </Layout>
    );
};

export default CreateCategory;
