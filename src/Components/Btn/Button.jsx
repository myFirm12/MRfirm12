import Fab from "@mui/material/Fab";

function Buttons({ NameBtn, width, onClick }) {
  return (
    <>
      <Fab
        variant="extended"
        sx={{ height: "8vh", width: `${width}` }}
        size="large"
        onClick={onClick}
        style={{
          background: "blue",
        }}
      >
        {NameBtn}
      </Fab>
    </>
  );
}

export default Buttons;
