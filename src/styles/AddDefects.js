import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";

export const StyledContainerBox = styled(Box)(({ theme }) => ({
  display: "flex",

  justifyContent: "space-around",
  flexDirection: "row",
}));

export const StyledChildBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#F8F8F8",
  flexBasis: "220px",
  maxWidth: "220px",
}));

export const StyledBoxHeading = styled(Typography)(({ theme }) => ({
  backgroundColor: "#ffffff",
  fontSize: "16px",
  letterSpacing: "1px",
}));

export const StyledVerticalBox = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: "10px",
  borderTop: "1.5px solid #808080",
}));
