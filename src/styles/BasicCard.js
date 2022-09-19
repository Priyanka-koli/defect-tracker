import { styled } from "@mui/material/styles";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material/";

export const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "93%",
  margin: "20px auto",
  borderRadius: "0",
  borderLeft: "3px solid #00BFFF",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  marginBottom: "4px",
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  padding: "10px",
  "&:last-child": {
    padding: "10px",
  },
}));
