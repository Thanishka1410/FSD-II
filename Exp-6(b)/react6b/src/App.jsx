
import './App.css';
import './App.scss';

function App() {

  const students = [
    { id: 1, name: 'Ravi', age: 21 },
    { id: 2, name: 'Sita', age: 20 },
    { id: 3, name: 'Arun', age: 22 }
  ];

  return (
    <div className="container">
      <h1>Student Details</h1>

      {students.map((student) => (
        <div className="student" key={student.id}>
          <h2>{student.name}</h2>
          <p>Age: {student.age}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
