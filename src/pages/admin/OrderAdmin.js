import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout.js";
import axios from "axios";
import { useAuth } from "../../Context/auth.js";
import moment from "moment";
import { Select } from "antd";

const { Option } = Select;

const OrderAdmin = () => {
    const [status, setStatus] = useState([
        "Not Process",
        "Processing",
        "Shipped",
        "Delivered",
        "Cancel",
        "COD",
    ]);
    const [orders, setOrders] = useState([]);
    const [auth] = useAuth();

    const getOrders = async () => {
        try {
            const { data } = await axios.get(
                "http://localhost:5000/api/v1/auth/all-orders"
            );
            setOrders(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (auth?.token) getOrders();
    }, [auth?.token]);

    const handleChange = async (orderId, value) => {
        try {
            await axios.put(
                `http://localhost:5000/api/v1/auth/order-status/${orderId}`,
                {
                    status: value,
                }
            );
            getOrders();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout title={"All Orders Data"}>
            <div className="admin-dashboard m-3 p-3">
                <div className="row">
                    <h1 className="text-center">All Orders</h1>
                    {orders?.map((o, i) => {
                        return (
                            <div className="border shadow" key={i}>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Buyer</th>
                                            <th scope="col">Date</th>
                                            <th scope="col">Payment Method</th>
                                            <th scope="col">Quantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>
                                                <Select
                                                    style={{ minWidth: "150px" }} // Set minimum width for the dropdown
                                                    bordered={false}
                                                    onChange={(value) => handleChange(o._id, value)}
                                                    defaultValue={o?.status}
                                                >
                                                    {status.map((s, idx) => (
                                                        <Option key={idx} value={s}>
                                                            {s}
                                                        </Option>
                                                    ))}
                                                </Select>
                                            </td>
                                            <td>{o?.buyer?.name}</td>
                                            <td>{moment(o?.createAt).fromNow()}</td>
                                            <td>
                                                {o?.payments && o.payments.success
                                                    ? "Success"
                                                    : "COD"} {/* Fixed logic to always show COD if payment is not successful */}
                                            </td>
                                            <td>{o?.products?.length}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="container">
                                    {o?.products?.map((p, i) => (
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
                                            <div className="col-md-8">
                                                <h3>{p.name}</h3>
                                                <h5>{p.description.substring(0, 30)}</h5>
                                                <h5>Price : {p.price}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default OrderAdmin;
