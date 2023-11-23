// Model
import { ExerciseModel } from "../../model/model"

// Interface | Models
interface State {
  exercises: ExerciseModel[]
}

export interface Action {
  type: "GET_ALL_DATA" | "ADD_DATA" | "DELETE_DATA",
  payload: ExerciseModel,
}

// Reducer Function
export const exerciseReducer = ( state: State , action:Action) => {
    const { type } = action;
      
    switch(type){
      case "GET_ALL_DATA" : {
        return {
            exercises: action.payload
        }
      }
      case "ADD_DATA" : {
        return {
            exercises: [action.payload, ...state.exercises ]
        }
      }
      case "DELETE_DATA" : {
        return {
            exercises: state.exercises.filter(exercise => exercise._id !== action.payload._id)
        }
      }
      default : {
        return state
      }
    }
}