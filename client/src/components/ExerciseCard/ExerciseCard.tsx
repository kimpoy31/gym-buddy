// CSS | styling
import styles from "./ExerciseCard.module.css"

// Icons
import { AiFillDelete } from "react-icons/ai";

interface Props{
    _id: string ,
    title: string, 
    weight: number, 
    reps: number,
    handleDelete: (val: string) => void;
}

const ExerciseCard = ({_id, title, weight, reps, handleDelete} : Props) => {
  return (
    <>
        <div className={styles.exerciseCard}>
            <div className={styles.exerciseTitle}>
            <h2>{title}</h2>
                <div className={styles.buttons} >
                    <div className={styles.icon} onClick={() => handleDelete(_id)}>
                        <AiFillDelete size={24} />
                    </div>     
                </div>
            </div>
            <p>Weight (kg): <strong>{weight}</strong></p>
            <p>Reps: <strong>{reps}</strong></p>
        </div>
    </>

  )
}

export default ExerciseCard