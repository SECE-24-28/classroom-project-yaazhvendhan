import { useEffect, useState } from 'react'
import { addCourses, deleteCourses, getCourses, updateCourses } from './api/CourseApi'

function App() {
  const [courses, setCourses] = useState([])
  const [title, setTitle] = useState("")
  const [duration, setDuration] = useState("")
  const [editId, setEditId] = useState(null)

  const fetchCourse = async () => {
    const res = await getCourses()
    setCourses(res.data)
  }

  useEffect(() => {
    fetchCourse()
  }, [])

  // 🔹 ADD or UPDATE (single form logic)
  const handleSubmit = async (e) => {
    e.preventDefault()

    const course = { title, duration }

    if (editId) {
      // UPDATE
      await updateCourses(editId, course)
      setEditId(null)
    } else {
      // ADD
      const res = await addCourses(course)
      setCourses(prev => [...prev, res.data])
    }

    setTitle("")
    setDuration("")
    fetchCourse()
  }

  const handleDelete = async (id) => {
    await deleteCourses(id)
    fetchCourse()
    alert("Course deleted successfully")
  }

  const handleEdit = (course) => {
    setTitle(course.title)
    setDuration(course.duration)
    setEditId(course._id)
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

        <button type="submit">
          {editId ? "Update" : "Add"}
        </button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Course Title</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {courses.map(course => (
            <tr key={course._id}>
              <td>{course.title}</td>
              <td>{course.duration}</td>
              <td>
                <button type="button" onClick={() => handleEdit(course)}>
                  Edit
                </button>
                <button type="button" onClick={() => handleDelete(course._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
