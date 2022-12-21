import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle, CardImg, CardBody, CardText } from "reactstrap";

import Rate from "./Rate";

const MovieCard = ({ movie: { title, posterUrl, description, rate } }) => {
  return (
    <div className="col-4 mt-2">
      <Card
        style={{
          height: "500px",
          cursor: "pointer",
          boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
          transition: "all 0.3s",
          backgroundImage: "linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)",
        }}
      >
        <CardTitle>
          <div className="row justify-content-center mt-2">
            <h4>{title}</h4>
          </div>
        </CardTitle>
        <CardImg
          top
          width="200px"
          style={{ height: "200px" }}
          src={posterUrl}
          alt="Card image cap"
        />
        <CardBody>
          <div className="row">
            <CardText>{description}</CardText>
          </div>
          <div className="row">
            <Rate rating={rate} />
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
