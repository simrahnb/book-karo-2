import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Sidebar />
        <div className="pages">
          <Routes>
            <Route 
              path="/"
              element={<Dashboard />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
