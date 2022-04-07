import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="SigninPage" element={<SigninPage />} />
        <Route path="SignupPage" element={<SignupPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
