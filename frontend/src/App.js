import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import ExperienceDetails from './pages/ExperienceDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="flex">
           <aside class="h-screen sticky top-0">
            <Sidebar />
            </aside>   
        <div className="pages">
          <Routes>
            <Route 
              path="/dashboard"
              element={<Dashboard />}
            />
            <Route
              path="/experiences"
              element={<ExperienceDetails />}
            />
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
