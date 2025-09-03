import React from "react";
import { useSearch } from "../../Context/Search";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`http://localhost:5000/api/v1/product/search/${values.keyword}`);
      setValues({ ...values, results: data });
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '29px 0',
        height: "40px",
        width: '500px',
        marginRight: "10px",
      }}
    >
      <form
        className="d-flex"
        role="search"
        onSubmit={handleSubmit}
        style={{ flex: 2, marginLeft: '10px' }} 
      >
        <input
          className="form-control search-form"
          type="text"
          placeholder="Find some class of Furniture"
          aria-label="Search"
          value={values.keyword}
          onChange={(e) => setValues({ ...values, keyword: e.target.value })}
          style={{
            flex: 1,
            fontSize: '15px',
            padding: '15px',
            borderRadius: '4px 0 0 4px',
            marginRight: 0,
            width: "50px"
          }}
        />
        <button
          className="btn"
          type="submit"
          style={{
            cursor: 'pointer',
            fontSize: '16px',
            color: 'white',
            backgroundColor: '#3a1910',
            padding: '15px',
            borderRadius: '0 4px 4px 0',
          }}
        >
          <CiSearch />
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
