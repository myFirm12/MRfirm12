import { AccountCircle, Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

export const CustomSearchField = ({
  value,
  onchange,
  placeholder,
  type,
  autoFocus,
  onFocus,
  error,
  helperText,
  sx,
}) => {
  return (
    // <div style={{ width: "60%", display: "flex", alignItems: "center" }}>
    <TextField
      variant="standard"
      value={value}
      onChange={onchange}
      onFocus={onFocus}
      placeholder={placeholder}
      type={type}
      autoFocus={autoFocus}
      error={error}
      helperText={helperText}
      className="md:w-[30vw] sm:w-[90vw]"
      //   inputProps={inputProps}
      // sx={{ width: "30vw" }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="end">
            <Search />
          </InputAdornment>
        ),
      }}
    />
    // </div>
  );
};
