import { useState } from 'react';
import axios from 'axios';

const backendUrl = import.meta.env.VITE_API_URL || 'http://localhost:3000';

function UploadPage() {
    const [file, setFile] = useState(null);
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return alert('Please select an Excel file.');

        const formData = new FormData();
        formData.append('excel', file);

        try {
            const res = await axios.post(`${backendUrl}/upload/excel`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setResponse(res.data);
        } catch (error) {
            console.error(error);
            setResponse({ error: error.response?.data?.error || 'Upload failed' });
        }
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h3 className="mb-4">Upload Excel File</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input
                                type="file"
                                accept=".xlsx"
                                className="form-control"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-100">
                            Upload to Supabase
                        </button>
                    </form>

                    {response && (
                        <div className="alert alert-info mt-4" role="alert">
                            <h5 className="alert-heading">Server Response</h5>
                            <pre className="mb-0">{JSON.stringify(response, null, 2)}</pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default UploadPage;
