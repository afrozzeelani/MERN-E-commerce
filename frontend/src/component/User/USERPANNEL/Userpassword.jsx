import React from "react";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

const Userpassword = () => {
  return (
    <>
      <form action="">
        <h5>Change Password</h5>
        <Grid item xs={12}>
          <label className="fw-bold my-3">Old Password <sup className="text-danger">*</sup></label>
          <TextField
            required
            fullWidth
            name="password"
            label="Old Password"
            type="Password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <label className="fw-bold my-3">New Password <sup className="text-danger">*</sup></label>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="New Password"
            type="Password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <label className="fw-bold my-3">Confirm Password <sup className="text-danger">*</sup></label>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Confirm Password"
            type="Password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <input
              className=" btn-danger btn my-3 w-100"
              type="submit"
              value="Change Password"
            />
      </form>
    </>
  );
};

export default Userpassword;
