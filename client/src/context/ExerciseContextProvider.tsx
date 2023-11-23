// React Imports
import React, { createContext, useReducer, Dispatch } from "react"

// // Reducer Function
import { Action, exerciseReducer } from "./reducers/exercisesReducer"

// Interface | model
import { ExerciseModel } from "../model/model"

interface ExerciseContextType {
  exercises: ExerciseModel[];
  dispatch: Dispatch<Action>
}

// Create Context
export const ExerciseContext = createContext<ExerciseContextType | null>(null)

// Context Provider
export const ExerciseContextProvider = ({ children }: { children:React.ReactNode }) => {
  const [state, dispatch] = useReducer(exerciseReducer , {
    exercises: null,
  }) 

  return (
    <ExerciseContext.Provider value={{...state, dispatch}}>
      { children }
    </ExerciseContext.Provider>
  )
}

export default ExerciseContext