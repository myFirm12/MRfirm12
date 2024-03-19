import { TextField } from "@mui/material";
import React from "react";

export const CustomTextField = ({
  value,
  onchange,
  placeholder,
  type,
  autoFocus,
  onFocus,
  error,
  helperText,
  inputProps,
  width,
  className,
}) => {
  return (
    // <div style={{ width: "60%", display: "flex", alignItems: "center" }}>
    <TextField
      variant="outlined"
      value={value}
      onChange={onchange}
      onFocus={onFocus}
      placeholder={placeholder}
      type={type}
      autoFocus={autoFocus}
      error={error}
      helperText={helperText}
      inputProps={inputProps}
      sx={{ width: `${width}`, color: "white" }}
      className={className}
    />
    // </div>
  );
};
