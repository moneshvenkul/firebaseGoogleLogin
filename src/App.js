import { BrowserRouter as Router } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/navbar";
import { UserAuthContextProvider } from "./context/UserAuthContext";


function App() {
  
  return (
    <>
    <Navbar/>
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
        <Router>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
            </Routes>
          </UserAuthContextProvider>
          </Router>
        </Col>
      </Row>
    </Container>
  </>
  );
}

export default App;