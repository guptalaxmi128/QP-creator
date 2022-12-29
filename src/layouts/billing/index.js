/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import { useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import { Box, Paper, Typography, Container, Button } from "@material-ui/core";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

import JoditEditor from "jodit-react";

// Material Dashboard 2 React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

function Billing() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  return (
    <DashboardLayout>
      <DashboardNavbar absolute isMini />
      <MDBox mt={8}>
        <Paper
          component={Box}
          // mt={8}
          p={3}
          sx={{
            width: "60vw",
            height: "800px",
            // textAlign: "center",
            // margin: " 0 auto",
            borderRadius: "40px",
          }}
        >
          <Container>
            <Grid container spacing={4} justifyContent="space-evenly">
              <Grid item md={2}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>For Class</b>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "120px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>For Term</b>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "120px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Select Subject</b>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "120px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Select Chapter</b>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item md={2}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Difficulty Level</b>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "120px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Maximum Marks</b>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "120px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Select Type</b>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "120px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={2}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>CBQ</b>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "120px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={4}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Question Language</b>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "200px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item md={3}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Question Type</b>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Format</b>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
              <Grid item md={6}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Write the Question</b>
                  </Typography>
                </Box>

                <Box
                  sx={{
                    width: "300px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <Box>
                    <FormControl fullWidth>
                      <InputLabel id="No Of Q">No Of Q</InputLabel>
                      <Select
                        variant="outlined"
                        size="small"
                        label="No Of Q"
                        id="No Of Q"
                        // onChange={handleChange}
                      >
                        <MenuItem selected>Select No</MenuItem>
                        <MenuItem value="1">Ten</MenuItem>
                        <MenuItem value="2">Twenty</MenuItem>
                        <MenuItem value="3">Thirty</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item md={3}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Option 1</b>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Normal"
                        labelPlacement="start"
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>

              <Grid item md={3}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Option 2</b>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Normal"
                        labelPlacement="start"
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Option 3</b>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Normal"
                        labelPlacement="start"
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>
              <Grid item md={3}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Option 4</b>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "150px",
                    height: "40px",
                    borderRadius: "25px",
                    // textAlign: "left",
                    border: "2px solid whitesmoke",
                  }}
                >
                  <FormControl component="fieldset">
                    <FormGroup aria-label="position" row>
                      <FormControlLabel
                        value="start"
                        control={<Checkbox />}
                        label="Normal"
                        labelPlacement="start"
                      />
                    </FormGroup>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>

            <Grid mt={5}>
              <Grid item md={6}>
                <Box mt={2} textAlign="left">
                  <Typography variant="caption" align="left">
                    <b>Solution Hint</b>
                  </Typography>
                </Box>

                <Box sx={{ width: "650px", height: "200px", borderRadius: "40px" }}>
                  <JoditEditor
                    ref={editor}
                    value={content}
                    onChange={(newContent) => setContent(newContent)}
                  />
                </Box>
              </Grid>
            </Grid>
          </Container>
          <Box mt={5} ml={2}>
            <Button variant="contained">Save Section</Button>
          </Box>
        </Paper>
      </MDBox>
    </DashboardLayout>
  );
}

export default Billing;
