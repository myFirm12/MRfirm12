import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

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
        <Box sx={{ p: 3 }}>
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className="md:w-[90%] sm:w-[100%] ">
      <Box sx={{ borderBottom: 0, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="TIER1" {...a11yProps(0)} />
          <Tab label="TIER2" {...a11yProps(1)} />
          {/* <Tab label="TIER5" {...a11yProps(2)} />
          <Tab label="UK SETTLEMENT" {...a11yProps(3)} />
          <Tab label="IMMIGRATION APPEALS" {...a11yProps(4)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3em" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
            <li>Tier 1 Investor visa</li>
            <li>Tier 1 Global Talent visa</li>
            <li>Innovator visa</li>
            <li>Start-up visa</li>
          </ul>
          <div>
            <div>For Businesses</div>
            <button style={{ width: "25vw", height: "8vh" }}>
              UK SPONSOR LICENSE FOR EMPLOYER
            </button>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            <li>Sponsor License Application</li>
            <li>Allocation of Certificate of Sponsorship</li>
            <li>Compliance Services</li>
            <li>UK visa sponsorship management</li>
            <li>Overseas recruitment</li>
            <li>Immigration Audit</li>
            <li>Sponsorship License renewal</li>
            <li>Home Office civil penalties notice</li>
            <li>Suspension and Revocation</li>
            <li>Dedicated ongoing support</li>
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3em" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
            <li>Skilled Worker visa</li>
            <li>Tier 2 Intra-company Transfer visa</li>
            <li>Tier 2 Minister of Religion visa</li>
            <li>Tier 2 Sportsperson visaUK Ancestry visa</li>
            <li>Domestic Workers visa</li>
            <li>Representative of an Overseas Business visa</li>
          </ul>
          <div>
            <div>For Businesses</div>
            <button style={{ width: "25vw", height: "8vh" }}>
              UK SPONSOR LICENSE FOR EMPLOYER
            </button>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            <li>Sponsor License Application</li>
            <li>Allocation of Certificate of Sponsorship</li>
            <li>Compliance Services</li>
            <li>UK visa sponsorship management</li>
            <li>Overseas recruitment</li>
            <li>Immigration Audit</li>
            <li>Sponsorship License renewal</li>
            <li>Home Office civil penalties notice</li>
            <li>Suspension and Revocation</li>
            <li>Dedicated ongoing support</li>
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3em" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
            <li>Tier 5 Charity Worker visa</li>
            <li>Tier 5 Creative and Sporting visa</li>
            <li>Tier 5 Religious Workers</li>
            <li>Tier 5 Government Authorized Exchange visa</li>
            <li>Tier 5 Youth Mobility Scheme</li>
            <li>Tier 5 Seasonal Worker visa</li>
            <li>Tier 5 International Worker visa</li>
          </ul>
          <div>
            <div>For Businesses</div>
            <button style={{ width: "25vw", height: "8vh" }}>
              UK SPONSOR LICENSE FOR EMPLOYER
            </button>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            <li>Sponsor License Application</li>
            <li>Allocation of Certificate of Sponsorship</li>
            <li>Compliance Services</li>
            <li>UK visa sponsorship management</li>
            <li>Overseas recruitment</li>
            <li>Immigration Audit</li>
            <li>Sponsorship License renewal</li>
            <li>Home Office civil penalties notice</li>
            <li>Suspension and Revocation</li>
            <li>Dedicated ongoing support</li>
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3em" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
            <li>Indefinite Leave to Remain</li>
            <li>UK Citizenship UK residence card</li>
            <li>EU Settlement Scheme</li>
            <li>Settlement route for Turkish Worker or Businessperson</li>
          </ul>
          <div>
            <div>For Businesses</div>
            <button style={{ width: "25vw", height: "8vh" }}>
              UK SPONSOR LICENSE FOR EMPLOYER
            </button>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            <li>Sponsor License Application</li>
            <li>Allocation of Certificate of Sponsorship</li>
            <li>Compliance Services</li>
            <li>UK visa sponsorship management</li>
            <li>Overseas recruitment</li>
            <li>Immigration Audit</li>
            <li>Sponsorship License renewal</li>
            <li>Home Office civil penalties notice</li>
            <li>Suspension and Revocation</li>
            <li>Dedicated ongoing support</li>
          </ul>
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <div style={{ display: "flex", flexDirection: "column", gap: "3em" }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".3em" }}>
            <li>Make an appeal or request a review</li>
            <li>Immigration status problems</li>
          </ul>
          <div>
            <div>For Businesses</div>
            <button style={{ width: "25vw", height: "8vh" }}>
              UK SPONSOR LICENSE FOR EMPLOYER
            </button>
          </div>
          <ul style={{ display: "flex", flexDirection: "column", gap: ".5em" }}>
            <li>Sponsor License Application</li>
            <li>Allocation of Certificate of Sponsorship</li>
            <li>Compliance Services</li>
            <li>UK visa sponsorship management</li>
            <li>Overseas recruitment</li>
            <li>Immigration Audit</li>
            <li>Sponsorship License renewal</li>
            <li>Home Office civil penalties notice</li>
            <li>Suspension and Revocation</li>
            <li>Dedicated ongoing support</li>
          </ul>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
