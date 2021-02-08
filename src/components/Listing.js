import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  title: {
    color: "grey",
    fontWeight: "bold",
  },
});

function createData(name, description, hours, address) {
  return { name, description, hours, address };
}

const rows = [
  createData(
    "All Good Things",
    "Gift Shop, A curated stationery & gift store to write home about in Dallas, Texas.",
    "11AM - 6PM",
    "336 W Davis St, Dallas, TX 75208"
  ),
  createData(
    "Pita's Planters",
    "Florist, are a small locally owned business, located in Dallas, TX. Our goal is to create unique handcrafted concrete planters, and to spread love and joy",
    "10AM - 5PM",
    "1011 S Pearl Expy, Dallas, TX 75201"
  ),
];

const Listing = (props) => {
  const classes = useStyles();

  return (
    <Container>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title}>Name</TableCell>
            <TableCell className={classes.title}>Description</TableCell>
            <TableCell className={classes.title}>Hours</TableCell>
            <TableCell className={classes.title} align="right">
              Address
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.hours}</TableCell>
              <TableCell align="right">{row.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
};

export default Listing;
