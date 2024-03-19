import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "51%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  // height: "80vh",
  display: "flex",
  flexdirection: "row",
};

export default function BasicModal({
  view,
  content,
  names,
  director,
  image,
  content2,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>{view}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={style}
          className="md:h-[80vh] md:w-[100%] md:overflow-hidden sm:overflow-y-scroll sm:h-[100vh] sm:w-[97%]"
        >
          <Typography
            // style={{ overflowY:"scroll" }}
            className="md:flex md:flex-col md:basis-[100%]  sm:flex sm:flex-col sm:basis-[100%]"
          >
            <Typography
              className="md:flex md:flex-row md:basis-[10%] md:justify-end  sm:flex sm:flex-row sm:basis-[10%] sm:justify-end"
              style={
                {
                  // display: "flex",
                  // flexDirection: "row",
                  // flex: ".1",
                  // justifyContent: "end",
                }
              }
            >
              <div onClick={handleClose}>
                <IconButton>
                  <Close />
                </IconButton>
              </div>
            </Typography>
            <Typography
              className="md:flex md:flex-row md:basis-[90%]   sm:flex sm:flex-col sm:basis-[90%]"
              // style={{ display: "flex", flexDirection: "row", flex: ".9" }}
            >
              <Typography
                id="modal-modal-title"
                // variant="h6"
                // component="h2"
                className="md:basis-[50%] md:flex md:justify-center md:items-center   sm:basis-[50%] sm:flex sm:justify-center sm:items-center"
                style={
                  {
                    //   background: "red",
                    // flex: ".5",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }
                }
              >
                <div
                  className="md:w-[30vw] md:h-[50vh] md:flex md:justify-center md:items-center  sm:w-[80vw] sm:h-[40vh] sm:flex sm:justify-center sm:items-center"
                  style={{
                    // width: "30vw",
                    // height: "50vh",
                    background: "rgb(74,66,185)",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }}
                >
                  <div
                    className="md:w-[28vw] md:h-[42vh] md:absolute md:ml-[14%]   sm:w-[78vw] sm:h-[32vh] sm:absolute sm:ml-[10%]"
                    style={{
                      // width: "28vw",
                      // height: "42vh",
                      background: "green",
                      // position: "absolute",
                      // marginLeft: "14%",
                      backgroundImage: `url(${image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  ></div>
                </div>
              </Typography>
              <Typography
                id="modal-modal-description"
                className="md:basis-[50%] md:flex-col md:pl-[3%] md:flex md:justify-center md:items-center     sm:basis-[50%] sm:flex-col sm:pl-[0%] sm:flex sm:justify-center sm:items-center"
                style={
                  {
                    //   background: "blue",
                    // flex: ".5",
                    // display: "flex",
                    // flexDirection: "column",
                    // justifyContent: "center",
                    // alignItems: "center",
                    // paddingLeft: "3%",
                  }
                }
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1em",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: ".5em",
                    }}
                  >
                    <div style={{ fontSize: "20px", fontWeight: "bolder" }}>
                      {names}
                    </div>
                    <div>
                      {director}
                      <Divider
                        sx={{
                          background: "peru",
                          width: "30px",
                          height: ".5vh",
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    {content} <br />
                    {content2}{" "}
                  </div>
                </div>
              </Typography>
            </Typography>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
