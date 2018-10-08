import React from "react";
import "./SearchBar.css";
const SearchBar = props => {
  return (
    <div className="searchbar">
      <div className="logos">
        <img
          className="logo"
          src="https://i1.wp.com/www.vectorico.com/wp-content/uploads/2018/02/Instagram-Logo.png?resize=300%2C300"
          alt="instagram logo"
        />
        <img
          className="logo-instagram"
          src="data:image/png;base64,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"
          alt="instagram"
        />
      </div>

      <input placeholder="Search" />
      <div className="sprites">
        <i class="far fa-compass" />
        <i class="far fa-heart" />
        <i class="far fa-user" />
      </div>
    </div>
  );
};

export default SearchBar;