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
import Button from "@mui/material/Button";
import DialogBox from "./Dialog";

function Table1() {
  const [projectDetails, setProjectDetails] = React.useState([]);
  const [numberOfChar, setNumberOfChar] = React.useState("");
  const [filteredData, setFilteredData] = React.useState( []);
  const [Data, setData] = React.useState({});
  const [open, setOpen] = React.useState(false);

  console.log(projectDetails);

  const requestSearch = (searched) => {
    setFilteredData(
      projectDetails.filter((item) =>
        item.name.toLowerCase().includes(searched.toLowerCase())
      )
    );
  };

  function getNumber(projectDetails) {
    let num = 0;
    if (filteredData?.length > 0) {
      for (let i = 0; i < filteredData.length; i++) {
        if (filteredData[i].mal_id) num++;
      }
    } else {
      for (let i = 0; i < projectDetails?.length; i++) {
        if (projectDetails[i].mal_id) num++;
      }
    }
    setNumberOfChar(num);
  }

  React.useEffect(() => {
    getNumber();
  }, [ ]);
   

  React.useEffect(() => {
    fetch(
      `https://api.jikan.moe/v4/characters?page=1&limit=35&order_by=favorites&sort=desc`
    )
      .then((results) => results.json())
      .then((data) => {
        setProjectDetails(data.data);
      });
  }, []);

  const handleClickOpen = (data ) => {
    setOpen(true);
    setData(data)
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
     <DialogBox open={open}   handleClose={handleClose} Data={Data} />
      <Card sx={{ margin: "20px" }}>
       
        <TableContainer component={Paper}>
          <Box>
            <TextField
              sx={{ width: "20%", margin: "8px" }}
              id="outlined-basic"
              label="Search..."
              variant="outlined"
              onChange={(e) => requestSearch(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                ),
              }}
            ></TextField>
          </Box>
          <div className="float">
            <Typography
              sx={{ flex: "1 1 100%", padding: "20px" }}
              variant="h6"
              id="tableTitle"
              padding="5px"
            >
              Total {numberOfChar} matching anime charectores found
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
                <TableCell>Anime Image</TableCell>
                <TableCell>Anime Name</TableCell>

                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(filteredData.length > 0 ? filteredData : projectDetails).map((data) => (
                <TableRow key={data.mal_id}>
                  <TableCell>
                    <img
                      width={40}
                      height={50}
                      src={data.images.jpg.image_url}
                    />
                  </TableCell>
                  <TableCell>
                    {data.name}
                    {data.nicknames.map((dt) => {
                      <Button variant="outlined" size="small">
                        {dt}
                      </Button>;
                    })}
                  </TableCell>
                  <TableCell>
                    <ArrowForwardIcon onClick={() =>  {handleClickOpen(data)}} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}

export default Table1;
