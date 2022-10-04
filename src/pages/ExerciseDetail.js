import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions, youtubeOptions } from "../util/fetchData";
import ExerciseVideos from "../components/ExerciseVideos";
import Detail from "../components/Detail";
import SimilarExercises from "../components/SimilarExercises";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

const ExerciseDetails = () => {
  const [exerciseDetail, setexerciseDetail] = useState({});
  const [youtubeVideos, setyoutubeVideos] = useState({});
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeVideoUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );
      setexerciseDetail(exerciseData);
      const youtubeData = await fetchData(
        `${youtubeVideoUrl}/search?query=${exerciseData.name}`,
        youtubeOptions
      );
      setyoutubeVideos(youtubeData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetail.target}`,
        exerciseOptions
      );
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equimentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/equipment/${exerciseDetail.equipment}`,
        exerciseOptions
      );
      setEquipmentExercises(equimentExercisesData);
    };
    fetchExerciseData();
  }, [id]);
  if (!exerciseDetail) return <div>No Data</div>;
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos youtubeVideos={youtubeVideos} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetails;
