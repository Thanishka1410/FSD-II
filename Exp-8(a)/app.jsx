
function App() {

  const students = ['Ravi', 'Sita', 'Arun', 'Ram'];

  return (
    <div>
      <h1>Student List</h1>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
