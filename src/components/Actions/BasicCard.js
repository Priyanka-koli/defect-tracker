import * as React from "react";
import { Card, CardContent, Typography, Avatar } from "@mui/material/";

function stringAvatar(name) {
  return {
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}

export default function BasicCard(props) {
  const {
    defect_number,
    avtar_string,
    defect_title,
    defect_status,
    defect_priority,
    defect_created,
  } = props;

  return (
    <Card sx={{ maxWidth: 275, marginBottom: "20px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Defect no: {defect_number}
        </Typography>
        <Avatar
          {...stringAvatar(String(avtar_string))}
          sx={{ bgcolor: "pink" }}
        ></Avatar>
        {avtar_string}
        <Typography variant="h5" component="div">
          {defect_title}
        </Typography>

        <Typography variant="body2">
          Status:
          {defect_status}
          <br /> <br />
          Priority:
          {defect_priority}
          <br />
          <br />
          Created on:
          {defect_created}
        </Typography>
      </CardContent>
      {/*      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
