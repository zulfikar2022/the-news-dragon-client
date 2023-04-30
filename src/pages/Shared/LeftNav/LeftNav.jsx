// eslint-disable-next-line no-unused-vars
import React from "react";
import "./LeftNav.css";
import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="mt-4">
      <h5>All Categories</h5>
      <div className="ms-3">
        {categories.map((category) => (
          <p key={category.id}>
            <NavLink
             to={`/category/${category.id}`}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              {category.name}
            </NavLink>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
