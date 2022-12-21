import React, { useState } from "react";
import PropTypes from "prop-types";
import { Card, CardImg } from "reactstrap";

import ModalComp from "./ModalComp";

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className="row justify-content-center mt-3">
      <Card
        onClick={() => setShow(true)}
        style={{
          cursor: "pointer",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s",
        }}
      >
        <CardImg className="Img"
          top
          width="20px"
          style={{
            height: "20px",
          }}
          src={require("../assets/icon/add.png")}
          alt="Card image cap"
        />
      </Card>
      {show && (
        <ModalComp
          isOpen={show}
          toggle={toggleShow}
          handleAdd={handleAdd}
          style={{
            backgroundColor: "white",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            borderRadius: "6px",
          }}
        >
          <div
            className="modal-header"
            style={{
              borderBottom: "none",
              padding: "24px",
            }}
          >
            ...
          </div>
          <div
            className="modal-body"
            style={{
              padding: "24px",
            }}
          >
            ...
          </div>
          <div
            className="modal-footer"
            style={{
              borderTop: "none",
              padding: "8px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            ...
          </div>
        </ModalComp>
      )}
    </div>
  );
};
AddMovie.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default AddMovie;
