import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Checker from "../Checker/Checker";
import { TextField } from "@mui/material";
import MultilineTextFields from "../CustomTextField/MultilineTextFields";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0, fontSize: 1 }} className="md:pt-[5px] sm:pt-[1px]">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function GetAQ() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="md:w-[80%] sm:w-[100%]">
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="md:text-20px sm:text-[10px]"
        >
          {/* <Tab
            className="md:text-20px sm:text-[10px]"
            label="Purchase"
            {...a11yProps(0)}
          /> */}
          {/* <Tab
            className="md:text-20px sm:text-[10px]"
            label="Sale"
            {...a11yProps(1)}
          />
          <Tab
            className="md:text-20px sm:text-[10px]"
            label="Re-Mortage"
            {...a11yProps(2)}
          /> */}
          <Tab
            className="md:text-20px sm:text-[10px]"
            label="Sale & Purchase"
            {...a11yProps(3)}
          />
          {/* <Tab label="IMMIGRATION APPEALS" {...a11yProps(4)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="md:flex md:flex-col md:gap-[1em]  sm:flex sm:flex-col sm:gap-[1em]">
          <ul style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
            <li>Fields marked with an * are required</li>
          </ul>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Transaction type *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Residential (Individual)"} />
              <Checker item={"Residential (Limited Company)"} />
              <Checker item={"Commercial"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Purchase Price *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Property location *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"England"} />
              <Checker item={"Wales"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Tenure *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Transaction details</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"New Build"} />
              <Checker item={"Shared Ownership"} />
              <Checker item={"Right to Buy"} />
              <Checker item={"Help to Buy ISA/ Life Time ISA"} />
              <Checker item={"Gifted Deposite"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Additional questions *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"First Time Buyer"} />
              <Checker item={"Buy-To-Let"} />
              <Checker item={"Second home"} />
              <Checker item={"None of the above"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Will you be getting a new mortgage? *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Yes"} />
              <Checker item={"No, This is a cash purchase"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Number of Buyers *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Your Name *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Email id *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Telephone Number</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>How did you hear about us? *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Internet"} />
              <Checker item={"Google Search"} />
              <Checker item={"Friends/Family"} />
              <Checker item={"Referred by someone"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>TPlease provide us with the name of the referee (If any).</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Additional information (if any)</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              {/* <MultilineTextFields /> */}
            </div>
          </div>
          <button style={{ width: "15vw", height: "8vh" }}>Submit</button>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div style={{ display: "flex", flexDirection: "column", gap: "4em" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
            <li>Fields marked with an * are required</li>
          </ul>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Sale Price *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Tenure *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Number of sellers *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Do you have a mortgage on the property? *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Yes"} />
              <Checker item={"No"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Your Name *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Email id *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Telephone Number</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>How did you hear about us? *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Internet"} />
              <Checker item={"Google Search"} />
              <Checker item={"Friends/Family"} />
              <Checker item={"Referred by someone"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Please provide us with the name of the referee (If any).</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Additional information (if any)</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              {/* <MultilineTextFields /> */}
            </div>
          </div>
          <button style={{ width: "15vw", height: "8vh" }}>Submit</button>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3em" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
            <li>Fields marked with an * are required</li>
          </ul>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Transaction type *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Individual"} />
              <Checker item={"Limited Company"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Re-mortgage amount *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Tenure *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Name of the new lender, if known *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Is a Transfer of Equity involved in this transaction? *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Yes"} />
              <Checker item={"No"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Your Name *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Email id *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Telephone Number</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>How did you hear about us? *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Internet"} />
              <Checker item={"Google Search"} />
              <Checker item={"Friends/Family"} />
              <Checker item={"Referred by someone"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Please provide us with the name of the referee (If any).</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Additional information (if any)</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              {/* <MultilineTextFields /> */}
            </div>
          </div>
          <button style={{ width: "15vw", height: "8vh" }}>Submit</button>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div style={{ display: "flex", flexDirection: "column", gap: ".1em" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
            <li>Fields marked with an * are required</li>
          </ul>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Purchase Price *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Property location *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"England"} />
              <Checker item={"Wales"} />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Number of Buyers *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Transaction details</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"New Build"} />
              <Checker item={"Shared Ownership"} />
              <Checker item={"Right to Buy"} />
              <Checker item={"Help to Buy ISA/ Life Time ISA"} />
              <Checker item={"Gifted Deposite"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Additional questions *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Second home"} />
              <Checker item={"Replacing main residence"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>
              Do you own any other property apart from the property you are
              selling? *
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Yes"} />
              <Checker item={"No"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Will you be getting a new mortgage? *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Yes"} />
              <Checker item={"No, this is a cash purchase"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Sale Price *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Tenure (sale) *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Number of Sellers *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Your Name *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Email id *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Email id *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Telephone Number</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>How did you hear about us? *</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <Checker item={"Internet"} />
              <Checker item={"Google Search"} />
              <Checker item={"Friends/Family"} />
              <Checker item={"Referred by someone"} />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Please provide us with the name of the referee (If any).</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              <TextField />
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
            <div>Additional information (if any)</div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: ".5em" }}
            >
              {/* <MultilineTextFields /> */}
            </div>
          </div>
          <button style={{ width: "15vw", height: "8vh" }}>Submit</button>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
