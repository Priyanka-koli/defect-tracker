import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Grid, Typography, Paper, Button } from "@mui/material";
import { getDefectsByIdFromApi, editDefectById } from "../../service/api";
const INITIAL_VALUES = {
  id: "",
  defect_number: "",
  defect_title: "",
  defect_status: "",
  defect_priority: "",
  defect_created: "",
};
const EditDefects = () => {
  const [defects, setDefects] = useState(INITIAL_VALUES);
  const Navigate = useNavigate();
  const { id } = useParams();

  const getDefectsById = async () => {
    let { data } = await getDefectsByIdFromApi(id);
    setDefects(data);
  };

  useEffect(() => {
    getDefectsById();
  }, []);

  const onChangeHandler = (event) => {
    setDefects({ ...defects, [event.target.name]: event.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await editDefectById(defects, id);
    Navigate("/");
  };

  return (
    <React.Fragment>
      <Grid sx={{ align: "center" }}>
        <Paper sx={{ padding: "30px 20px", width: "50%", margin: "30px auto" }}>
          <Grid sx={{ align: "center" }}>
            <Typography variant="h4"> Edit defects</Typography>
          </Grid>
          <form onSubmit={submitHandler}>
            <TextField
              fullWidth
              id="defect-title"
              label="Defect Title"
              variant="filled"
              helperText="Please enter defect title"
              margin="normal"
              onChange={onChangeHandler}
              name="defect_title"
              value={defects.defect_title}
            />
            <TextField
              fullWidth
              id="defect-status"
              label="Defect Status"
              variant="filled"
              helperText="Please enter defect status"
              margin="normal"
              onChange={onChangeHandler}
              name="defect_status"
              value={defects.defect_status}
            />
            <TextField
              fullWidth
              id="defect-priority"
              label="Defect Priority"
              variant="filled"
              helperText="Please enter defect priority"
              margin="normal"
              onChange={onChangeHandler}
              name="defect_priority"
              value={defects.defect_priority}
            />

            <Button variant="contained" type="submit" sx={{ color: "primary" }}>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

export default EditDefects;
