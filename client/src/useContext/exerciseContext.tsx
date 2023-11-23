import { useContext } from "react"
import { ExerciseContext } from "../context/ExerciseContextProvider"

export const UseExerciseContext = () => {
    const context = useContext(ExerciseContext)

    if(!context){
        throw new Error("must be inside context provider")
    }

    return context
}