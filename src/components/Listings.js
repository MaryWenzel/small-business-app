import React, { useEffect, useState } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";
import cookie from "cookie";

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  console.log("looking up cookies");
  return cookies["loggedIn"] ? true : false;
};

const Listings = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    checkAuth() ? setLoggedIn(true) : setLoggedIn(false);
  }, []);

  return (
    <Container
      maxWidth="md"
      className="car-container"
      style={{ marginTop: "50px" }}
    >
      {console.log("listings", props.listings)}

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {loggedIn ? <TableCell>Delete</TableCell> : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.listings.map((listing, idx) => (
            <TableRow key={idx}>
              <TableCell>
                <Link
                  to={`/details/${listing.id}`}
                  style={{ textDecoration: "none" }}
                >
                  {listing["name"]}
                </Link>
              </TableCell>
              <TableCell>{listing["description"]}</TableCell>
              <TableCell>{listing["hours"]}</TableCell>
              <TableCell>{listing["address"]}</TableCell>
              {loggedIn ? (
                <TableCell>
                  <DeleteIcon onClick={() => props.removeListing(idx)} />
                </TableCell>
              ) : null}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listings;
