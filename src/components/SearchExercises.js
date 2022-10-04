import React from "react";
import { useState } from "react";
import { Box, Stack, TextField, Button, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../util/fetchData";
import { useEffect } from "react";
import HorizontalScrollBar from "./HorizontalScrollBar";

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search, setSearch] = useState("");
  
  const [bodyParts,setBodyParts] = useState([])

  useEffect(() => {
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchBodyParts();
  }, [])
  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter(
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
    ;
  };
  return (
    <Stack alignItems="center" mt="40px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        ></TextField>
        <Button
          onClick={handleSearch}
          variant="contained"
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "173px", xs: "80px" },
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative',width:'100%',p:'20px'}}>
          <HorizontalScrollBar data={bodyParts} bodyParts={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
