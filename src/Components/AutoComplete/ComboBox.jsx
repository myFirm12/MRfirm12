import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox({
  label,
  first,
  second,
  third,
  fourth,
  width,
  styl,
}) {
  // Define the options array with labels based on props
  const options = [
    { label: first },
    { label: second },
    { label: third },
    { label: fourth },
  ];

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      sx={{ width: `${width}` }}
      className={styl}
      renderInput={(params) => (
        <TextField {...params} sx={{ fontSize: "15px" }} label={label} />
      )}
      getOptionLabel={(option) => option.label}
    />
  );
}
