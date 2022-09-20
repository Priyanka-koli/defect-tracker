import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Avatar,
  TextField,
  Grid,
  Typography,
  Paper,
  Button,
} from "@mui/material";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import { getDefectsByIdFromApi, editDefectById } from "../../service/api";
const INITIAL_VALUES = {
  id: "",
  defect_number: "",
  defect_title: "",
  defect_status: "",
  defect_priority: "",
  defcet_created: "",
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
            <Avatar sx={{ backgroundColor: "primary", align: "center" }}>
              <CurrencyExchangeIcon sx={{ fontSize: "Medium" }} />
            </Avatar>
            <Typography variant="h4"> Edit Expenses</Typography>
            <Typography variant="caption">
              Please fill this form to add your expenses
            </Typography>
          </Grid>
          <form onSubmit={submitHandler}>
            <TextField
              fullWidth
              id="expense-title"
              label="Expense Title"
              variant="filled"
              helperText="Please enter expense title"
              margin="normal"
              onChange={onChangeHandler}
              name="defect_title"
              value={defects.defect_title}
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
