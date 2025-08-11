import './App.css';

// React Router Declarative mode
import { BrowserRouter as Router, Routes, Route } from 'react-router';

import PublicPage from './components/PublicPage';

// Main App component with routing configuration
function App() {
  return (
    <Router>
      <Routes>
        {/* Public route accessible to all users */}
        <Route path='/' element={<PublicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
