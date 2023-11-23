import { Dispatch, FormEvent, useState } from "react"
import styles from "./ExerciseForm.module.css"
import { UseExerciseContext } from "../../useContext/exerciseContext"
import api from "../../services/api"
import { Action } from "../../context/reducers/exercisesReducer"

const addData = async(
  e:FormEvent<HTMLFormElement>,
  title:string, weight:number | undefined,
  reps: number | undefined,
  setTitle: (val:string) => void,
  setWeight: (val:number|undefined) => void,
  setReps: (val:number|undefined) => void,
  dispatch: Dispatch<Action>
  ) => {
  e.preventDefault()
  
  const dataForm = { title, weight, reps }

  try{

    const data = await api.post( "/" , dataForm )
    dispatch({type:"ADD_DATA", payload:data.data })
    setTitle("")
    setWeight(undefined)
    setReps(undefined)

  } catch {

    console.log("Submission unsuccessful")

  }

}

const ExerciseForm = () => {
  const [title, setTitle] = useState<string>("")
  const [weight, setWeight] = useState<number | undefined>(undefined)
  const [reps, setReps] = useState<number | undefined>(undefined)
  const { dispatch } = UseExerciseContext()

  return (
    <form className={styles.form} onSubmit={(e) => addData(e, title, weight, reps,setTitle, setWeight, setReps, dispatch)}>
        <label>Exercise Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" required/>
        <label>Load ( in KG )</label>
        <input value={weight || ''} onChange={(e) => setWeight(parseFloat(e.target.value))} type="number" required/>
        <label>Number of Reps</label>
        <input value={reps || ''} onChange={(e) => setReps(parseFloat(e.target.value))} type="number" required/>
        <button>Add</button>
    </form>
  )
}


export default ExerciseForm