import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(market, packageName, subStart, subEnd) {
  return { market, packageName, subStart, subEnd };
}

const rows = [createData("TDWL", "Pro 11", "15/1/2023", "15/7/2023")];

export default function CurrentSubscriptionsTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{ border: 2, borderColor: "#0c6fb5", marginBottom: 2 }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Market</TableCell>
            <TableCell align="center">Package</TableCell>
            <TableCell align="center">Sub Start</TableCell>
            <TableCell align="center">Sub End</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
                {row.market}
              </TableCell>
              <TableCell align="center">{row.packageName}</TableCell>
              <TableCell align="center">{row.subStart}</TableCell>
              <TableCell align="center">{row.subEnd}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
