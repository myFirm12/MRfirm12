import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function MultilineTextFields() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "52ch" },
      }}
      // className="md:w-[69%]"
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={6}
          defaultValue=" "
          // className="md:w-[100%]"
        />
      </div>
    </Box>
  );
}
