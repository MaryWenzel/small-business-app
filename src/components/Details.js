import React from "react";
import { Container, Paper } from "@material-ui/core";
import Map from "../containers/Map";
import { useParams } from "react-router-dom";

const Item = (props) => {
  const id = useParams();
  const listing = props.listings.find(
    (listing) => listing.id === parseInt(id.id)
  );

  return (
    <Container maxWidth="sm">
      <Paper style={{ height: "200px", width: "500px", marginBottom: "10px" }}>
        <h2>{listing.name}</h2>
        <h3>{listing.address}</h3>
        <h3>{listing.hours}</h3>
        <p>{listing.description}</p>
      </Paper>
      <Map />
    </Container>
  );
};

export default Item;
