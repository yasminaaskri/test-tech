import React, { useState, useEffect } from 'react';
import './AdminCourses.css'

const AdminCourses = () => {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState('');

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/courses');
      if (!response.ok) {
        throw new Error('Failed to fetch courses');
      }
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };
  const createCourse = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          price,
          image,
        }),
        
      });
      if (!response.ok) {
        throw new Error('Failed to create course');
      }
      const data = await response.json();
      setCourses([...courses, data]);
      setTitle('');
      setDescription('');
      setPrice('');
      setImage('');
    } catch (error) {
      console.error('Error creating course:', error);
    }
  };
  
  const editCourse = (id) => {
    const course = courses.find((c) => c._id === id);
    setTitle(course.title);
    setDescription(course.description);
    setPrice(course.price);
    setImage(course.image);
    setEditingId(id);
    setEditing(true);
  };
  
  const updateCourse = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/courses/${editingId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          price,
          image,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to update course');
      }
      const data = await response.json();
      setCourses(
        courses.map((c) =>
          c._id === data._id ? data : c
        )
      );
      setTitle('');
      setDescription('');
      setPrice('');
      setImage('');
      setEditing(false);
      setEditingId('');
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };
  
  const deleteCourse = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/courses/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete course');
      }
      setCourses(courses.filter((c) => c._id !== id));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };
  

  return (
    <div className="AdminCourses"> {/* Apply class name here */}
      <h1>Admin Dashboard</h1>
      <form className='form1' onSubmit={editing ? updateCourse : createCourse}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button type="submit">
          {editing ? 'Update Course' : 'Create Course'}
        </button>
      </form>
      <ul className='list'>
        {courses.map((course) => (
          <li key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>{course.price}</p>
            <img src={`http://localhost:3000/images/${course.image}`} alt={course.title} />
            <button onClick={() => editCourse(course._id)}>Edit</button>
            <button onClick={() => deleteCourse(course._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};



export default AdminCourses;  

/*<div>
      <h1>Admin Dashboard</h1>
      <form onSubmit={editing ? updateCourse : createCourse}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <label>
          Image:
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button type="submit">
          {editing ? 'Update Course' : 'Create Course'}
        </button>
      </form>
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <p>{course.price}</p>
            <img src={`http://localhost:3000/images/${course.image}`} alt={course.title} />
            <button onClick={() => editCourse(course._id)}>Edit</button>
            <button onClick={() => deleteCourse(course._id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div> */