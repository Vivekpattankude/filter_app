import React from "react";
import {
  Typography,
  TableContainer,
  TableHead,
   
  TextField,
  Box,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Card from "@mui/material/Card";
// import SearchIcon from '@mui/icons-material/Search';

function Table1() {
  const [projectDetails, setProjectDetails] = React.useState([]);
  const [projectStatus, setProjectStatus] = React.useState("");

  console.log(projectDetails);
  const [options, setOptions] = React.useState({
    project_status: { choices: [] },
  });

  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
 
  }, []);

   
 
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 80,
      },
    },
  };

 
  return (
    <Card sx={{ margin:"10px" }}>
      <TableContainer component={Paper}>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
     
    </Box>
        <div
          className="float"
          style={{ display: "flex", height: "fitContent" }}
        >
          <Typography
          sx={{ flex: '1 1 100%', padding: "20px" }}
            variant="h5"
            id="tableTitle"
            padding="5px"
          >
            Projects waiting for approval
          </Typography>
        </div>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                "& .MuiTableCell-root": {
                  fontWeight: 600,
                },
              }}
              style={{ backgroundColor: "#e0e0e0" }}
            >
              <TableCell sx={{ fontSize: "14px" }}>Project Name</TableCell>
              <TableCell sx={{ fontSize: "14px" }}>Project ID</TableCell>
              <TableCell sx={{ fontSize: "14px" }}>Project Scop</TableCell>
              <TableCell sx={{ fontSize: "14px" }}>
                HardWare Requirement
              </TableCell>
              <TableCell sx={{ fontSize: "14px" }}>Resource type</TableCell>
              
              <TableCell sx={{ fontSize: "14px" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           
              <TableRow>
               
                <TableCell sx={{ fontSize: "16px" }}>
                  jbdfb
                </TableCell>
               
                
              </TableRow>
             
           
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Table1;
