import React from "react";
import OpenOrClosed from "./OpenOrClosed";
import Offer from "./Offer";

const Details = ({name, category, location, status, offer}) => (
  <>
    <div className="res-name">{name}</div>
    <div className="res-category">{category.join(", ")}</div>
    <div className="res-location">{location}</div>
    <OpenOrClosed status={status} />
    <Offer offerText={offer} />
  </>
);

export default Details;
