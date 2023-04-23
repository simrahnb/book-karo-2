import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import ExperienceDetails from './pages/ExperienceDetails';
import BookingDetails from './pages/BookingDetails';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { useAuthContext } from './hooks/useAuthContext';

function App() {
  const { user } = useAuthContext() // to check if we have user or not

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
            <Route
              path="/bookings"
              element={<BookingDetails />}
            />
            <Route
              path="/login"
              element={<Login />}
            />
            <Route
              path="/signup"
              element={<Signup />}
            />
            
          </Routes>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
