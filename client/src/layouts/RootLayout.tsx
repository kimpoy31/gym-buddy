// Components
import Navbar from "../components/Navbar/Navbar"
import ExerciseForm from "../components/Form/ExerciseForm"
import ExerciseTable from "../components/ExerciseTable/ExerciseTable"

const RootLayout = () => {
  return (
    <div className="rootLayout">
        <header className="navbar">
            <Navbar />
        </header>

        <main>
          <div className="table">
            <ExerciseTable />
          </div>
            
          <div className="form">
            <ExerciseForm />
          </div>
        </main>
    </div>
  )
}

export default RootLayout