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

const rowsEN = [
  createData("TDWL", "Pro 11", "15/1/2023", "15/7/2023"),
  createData("TDWL", "Pro 11", "15/1/2023", "15/7/2023"),
  createData("TDWL", "Pro 11", "15/1/2023", "15/7/2023"),
  createData("TDWL", "Pro 11", "15/1/2023", "15/7/2023"),
];
const rowsAR = [
  createData("تداول", "برو 11 لايت", "15/1/2023", "15/7/2023"),
  createData("خليجي", "برو 11 ستاندرد", "15/1/2023", "15/7/2023"),
  createData("تداول", "برو 11 بريميوم", "15/1/2023", "15/7/2023"),
  createData("تداول", "برو 11 لايت", "15/1/2023", "15/7/2023"),
];

export default function PreviousSubscriptionsTable(props) {
  const { language } = props;
  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    if (language === "en") {
      setRows(rowsEN);
    } else if (language === "ar") {
      setRows(rowsAR);
    }
  }, [language]);
  return (
    <TableContainer
      component={Paper}
      sx={{ border: 2, borderColor: "#0c6fb5" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ borderBottom: 1 }}>
            <TableCell align="center">
              {language === "en" ? "Market" : "السوق"}
            </TableCell>
            <TableCell align="center">
              {language === "en" ? "Package" : "نوع الاشتراك"}
            </TableCell>
            <TableCell align="center">
              {language === "en" ? "Sub Start" : "تاريخ بداية الاشتراك"}
            </TableCell>
            <TableCell align="center">
              {language === "en" ? "Sub End" : "تاريخ نهاية الاشتراك"}
            </TableCell>
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
