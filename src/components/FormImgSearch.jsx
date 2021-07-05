import React from "react";
import PropTypes from "prop-types";

const FormImgSearch = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <div className="w-100">
          <label>
            Buscar:{" "}
            <input
              className="w-100"
              name="inputText"
              type="text"
              class="form-form-control-lg"
            />
          </label>
          <button type="submit" className="btn btn-outline-info m-2">
            <span className="material-icons">search</span>
          </button>
        </div>
      </div>
    </form>
  );
};

FormImgSearch.propTypes = {
  handleSubmit: PropTypes.func,
};

export default FormImgSearch;
