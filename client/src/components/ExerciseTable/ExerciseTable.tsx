// React imports
import { useEffect } from "react";

// Css / style import
import styles from "./ExerciseTable.module.css"

// api
import api from "../../services/api";
import { UseExerciseContext } from "../../useContext/exerciseContext";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const ExerciseTable = () => {
  const { exercises , dispatch } = UseExerciseContext()

  useEffect(() => {
    const fetchExercises = async() => {
      try{
    
        const data = await api.get("/")
        dispatch({type:"GET_ALL_DATA", payload:data.data })
    
      } catch {
    
        console.log("Fetch unsuccessful")
    
      }
    }

    fetchExercises()
  },[dispatch])

  const handleDelete = async(_id: string) => {  

      try{

      const response = await api.delete("/" + _id)
      if (response.status === 200) {
        // Deletion successful
        dispatch({type: "DELETE_DATA", payload: response.data})

      } else {
          // Handle other status codes if needed
          console.log("Delete not successful. Status code: ", response.status);
      }

    } catch {

        console.log("delete not successful")

    }
    
  }

  return (
    <div className={styles.exerciseTable}>
        {exercises?.map(exercise => 
          <ExerciseCard 
            key={exercise._id} 
            _id={exercise._id}
            title={exercise.title} 
            weight={exercise.weight} 
            reps={exercise.reps} 
            handleDelete={handleDelete}
          />
        )}
    </div>
  )
}

export default ExerciseTable