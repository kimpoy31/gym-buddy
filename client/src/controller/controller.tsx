import { Navigate } from "react-router-dom";
import api from "../services/api";
import { UseExerciseContext } from "../useContext/exerciseContext";

export const addData = async( { request } : { request: Request }) => {
    const { dispatch } = UseExerciseContext()
    const data = await request.formData();
  
    const submission = {
      title: data.get("title"),
      weight: data.get("weight"),
      reps: data.get("reps"),
    }
  
    try{

      const data = await api.post( "/" , submission )
      dispatch({type:"ADD_DATA", payload:data.data })
      return <Navigate to="/" />

    } catch {

      console.log("Submission unsuccessful")

    }
  
   
}