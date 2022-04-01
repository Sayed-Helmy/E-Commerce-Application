import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="expenses" element={<SigninPage />} />
          <Route path="invoices" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
      ,
    </Layout>
  );
}

export default App;
