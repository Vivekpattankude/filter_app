import React from "react";
import {
  Typography,
  TableContainer,
  TableHead,
  TextField,
  Box,
  IconButton,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import TableCell from "@mui/material/TableCell";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Card from "@mui/material/Card";
import SearchIcon from "@mui/icons-material/Search";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { LineAxisOutlined } from "@mui/icons-material";

function Table1() {
  const [projectDetails, setProjectDetails] = React.useState([]);
  const [name, setName] = React.useState("name");

  console.log(projectDetails);

  const function1 = () => {
    setName("change");
  };

  React.useEffect(() => {
    fetch(
      `https://api.jikan.moe/v4/characters?page=1&limit=5&order_by=favorites&sort=desc`
    )
      .then((results) => results.json())
      .then((data) => {
        setProjectDetails(data.data);
      });
  }, []);

  return (
    <Card sx={{ margin: "10px" }}>
      <TableContainer component={Paper}>
        <Box>
          <TextField
            sx={{ width: "20%", margin: "8px" }}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <IconButton>
                  <SearchIcon />
                </IconButton>
              ),
            }}
          >
            {" "}
          </TextField>
        </Box>
        <div className="float">
          <Typography
            sx={{ flex: "1 1 100%", padding: "20px" }}
            variant="h6"
            id="tableTitle"
            padding="5px"
          >
            Total 50 matching anime charectores found
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
              <TableCell>Anime img</TableCell>
              <TableCell>Anime Name</TableCell>

              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectDetails.map((data) => (
              <TableRow key={data.mal_id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{name}</TableCell>
                <TableCell>
                  {" "}
                  <ArrowForwardIcon onClick={function1} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}

export default Table1;
