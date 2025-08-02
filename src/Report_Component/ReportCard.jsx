const ReportCard = ({ students }) => {
  if (!students || students.length === 0) return <p>No data available.</p>;

  // Extract student info from the first record
  const { name, roll_no } = students[0];

  // Define the keys to display in the table
  const tableKeys = ["exam", "physics", "chemistry", "maths", "biology", "total_marks", "grade", "rank"];

  return (
    <div className="container mt-4">
      <div className="card shadow border-0 mb-5">
        <div className="card-body">
          <h2 className="card-title text-center text-primary mb-4">Report Card</h2>

          {/* Student Info */}
          <ul className="list-group list-group-flush mb-4">
            <li className="list-group-item"><strong>Name:</strong> {name}</li>
            <li className="list-group-item"><strong>Roll No:</strong> {roll_no}</li>
          </ul>

          {/* Exam Table */}
          <div className="table-responsive">
            <table className="table table-bordered text-center">
              <thead className="table-primary">
                <tr>
                  {tableKeys.map((key, idx) => (
                    <th key={idx} style={{ textTransform: "capitalize" }}>
                      {key.replace("_", " ")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {students.map((exam, index) => (
                  <tr key={index}>
                    {tableKeys.map((key, idx) => (
                      <td key={idx}>{exam[key]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
