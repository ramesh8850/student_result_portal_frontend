import { Routes, Route, Navigate } from 'react-router-dom';
import Upload_Page from './components/Upload_Page';
import ReportPage from './Report_Component/ReportPage'; // 🆕 Import

function App() {
  return (
    <div className="bg-light min-vh-100">
      <Routes>
        <Route path="/" element={<Upload_Page />} />
        <Route path="/report" element={<ReportPage />} /> {/* 🆕 Route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
