import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import SyllabusList from "./components/SyllabusList";
import SubjectDetail from "./components/SubjectDetail";
import HeaderDetail from "./components/HeaderDetail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route
          path="/login"
          element={
            <div>
              <Header />
              <Login />
            </div>
          }
        />

        <Route
          path="/syllabus"
          element={
            <div>
              <Header />
              <SyllabusList />
            </div>
          }
        />
        <Route
          path="/subject/:id"
          element={
            <div>
              <HeaderDetail />
              <SubjectDetail />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
