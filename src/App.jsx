import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import History from "./pages/History";

import Favorites from "./pages/Favorites";

import Wardrobe from "./pages/Wardrobe";

import Login from "./pages/Login";

import Signup from "./pages/Signup";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={

            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>

          }
        />

        <Route
          path="/wardrobe"
          element={

            <ProtectedRoute>

              <Wardrobe />

            </ProtectedRoute>

          }
        />
        <Route
          path="/history"
          element={

            <ProtectedRoute>

              <History />

            </ProtectedRoute>

          }
        />  

        <Route
          path="/favorites"
          element={

            <ProtectedRoute>

              <Favorites />

            </ProtectedRoute>

          }
        />

        <Route
          path="*"
          element={
            <Navigate to="/login" />
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;
