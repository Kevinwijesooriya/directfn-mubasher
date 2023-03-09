import React from "react";
import { TextField, MenuItem, Stack, Typography } from "@mui/material";

const countries = [
  {
    code: "+1",
    label: "United States",
  },
  {
    code: "+44",
    label: "United Kingdom",
  },
  {
    code: "+33",
    label: "France",
  },
  {
    code: "+81",
    label: "Japan",
  },
];

export default function PhoneInput(language) {
  const [country, setCountry] = React.useState(countries[0]);
  const [number, setNumber] = React.useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
  };

  return (
    <Stack
      spacing={4}
      direction={"row"}
      justifyContent="space-between"
      alignItems="center"
    >
      <Typography variant="subtitle2" sx={{ width: "120px" }}>
        {language === "en" ? "Mobile Number" : "Mobile Number"}
      </Typography>
      <TextField
        select
        label="Country"
        value={country}
        onChange={handleCountryChange}
        variant="outlined"
        sx={{ width: "200px" }}
      >
        {countries.map((option) => (
          <MenuItem noWrap key={option.code} value={option}>
            {option.label} ({option.code})
          </MenuItem>
        ))}
      </TextField>
      <TextField
        label="Phone Number"
        value={number}
        onChange={handleNumberChange}
        variant="outlined"
        type="number"
        sx={{ mt: 2 }}
      />
    </Stack>
  );
}
