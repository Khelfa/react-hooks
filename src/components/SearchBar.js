import React from "react";
import PropTypes from "prop-types";
import { Input } from "reactstrap";

import Rate from "../components/Rate";

const SearchBar = ({ handleSearch, setRatingSearch, ratingSearch }) => {
  return (
    <div className="row m-2" style={{ display: "flex", alignItems: "center" }}>
      <div className="col-md-8">
        <Input
          type="text"
          placeholder="enter the title you search..."
          onChange={handleSearch}
          style={{
            border: "none",
            borderBottom: "2px solid #ccc",
            fontSize: "20px",
            padding: "8px",
          }}
        />
      </div>
      <div className="col-md-4">
        <Rate
          className="star-rating"
          starIndex={setRatingSearch}
          rating={ratingSearch}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
