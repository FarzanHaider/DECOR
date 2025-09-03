import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Table, Spin, Alert } from 'antd';
import Layout from "../../components/Layout/Layout.js";



const UserData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/auth/users`);
        if (data?.error) {
          setError(data.error);
        } else {
          setUsers(data.users);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <span style={{ color: '#333' }}>{text}</span>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: text => <span style={{ color: '#333' }}>{text}</span>,
    },
    {
      title: 'Phone',
      dataIndex: 'phoneno',
      key: 'phoneno',
      render: text => <span style={{ color: 'rgb(51, 51, 51)' }}>{text}</span>,
    },
    {
      title: 'address',
      dataIndex: 'address',
      key: 'address',
      render: text => <span style={{ color: 'rgb(51, 51, 51)' }}>{text}</span>,
    },
  ];

  return (
    <Layout title={"DreamDecor - All Users"}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1 style={{ fontSize: '2em', fontWeight: 'bold', color: '#333' }}>All Users</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {loading ? (
          <Spin size="large" />
        ) : error ? (
          <Alert message="Error" description={error} type="error" showIcon />
        ) : (
          <Table
            dataSource={users}
            columns={columns}
            rowKey="_id"
            style={{ width: '100%', maxWidth: '1200px' }}
          />
        )}
      </div>

    </Layout>
  );
};

export default UserData;
