import { useEffect, useState } from 'react'
import { addCourses, getCourses } from './api/CourseApi'

function App() {
  const [courses, setCourses] = useState([])
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("")

  const fetchCourse = async () => {
    const res = await getCourses()
    setCourses(res.data)
  }

  useEffect(() => {
    fetchCourse()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    const course = { title, duration }
    const res = await addCourses(course)

    //  append the newly created course
    setCourses(prevCourses => [...prevCourses, res.data])

    setTitle("")
    setDuration("")
  }

  return (
    <>
      <form className="frm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {courses.map(course => (
          <li key={course._id}>
            {course.title} - {course.duration}
          </li>
        ))}
      </ul>
    </>
  )
}

export default App
