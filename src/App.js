

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import AdminCourses from './AdminCourses';

function App() {
  return (
    <div><Router>
    <Routes>
    <Route path="/" element={<LandingPage/>} />
      <Route path="/admin" element={<AdminCourses/>} />
    
      
     
    </Routes>
  </Router></div>
  );
}

export default App;
