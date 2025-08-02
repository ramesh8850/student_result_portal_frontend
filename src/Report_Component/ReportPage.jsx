import { useState } from 'react';
import { supabase } from '../supabaseClient.js';
import ReportCard from './ReportCard';

function ReportPage() {
    const [rollNo, setRollNo] = useState('');
    const [student, setStudent] = useState(null);
    const [error, setError] = useState(null);

    const fetchStudent = async () => {
        const { data, error } = await supabase
            .from('student_results')
            .select('*')
            .eq('roll_no', Number(rollNo))

        if (error) {
            setError(`Student not found ${error.message}`);
            setStudent(null);
        } else {
            setError(null);
            setStudent(data);
        }
    };

    console.log('Current studenr result:', student);

    return (
        <div className="container d-flex flex-column align-items-center justify-content-center min-vh-100 py-5">
            <h1 className="mb-4 text-primary">Student Report Portal</h1>

            <div className="mb-4 d-flex gap-2">
                <input
                    type="number"
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    placeholder="Enter Roll No"
                    className="form-control"
                    style={{ maxWidth: '200px' }}
                />
                <button
                    onClick={fetchStudent}
                    className="btn btn-primary"
                >
                    Get Report
                </button>
            </div>

            {error && <p className="text-danger">{error}</p>}
            {student && <ReportCard students={student} />}
        </div>
    );
}

export default ReportPage;
