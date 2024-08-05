import * as React from "react";
import { Box } from "@mui/material";
import Bannerimg from "../../../Assest/Images/Banner.png";
import useWidth from "../../../helper/widthCalculate";

function Banner() {
  const width = useWidth();
  return (
    <Box
      component="img"
      src={Bannerimg}
      id="/"
      sx={{
        height: ["xs", "sm"].includes(width) ? "200px" : "400px",
        width: "100%",
      }}
    />
  );
}
export default Banner;
