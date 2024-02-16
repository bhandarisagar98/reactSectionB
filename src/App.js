import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleBlog from "./pages/SingleBlog";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/admin/Home";
import Create from "./pages/admin/Create";

function App() {
  const [data, setData] = useState([]);
  const fetchBlog = async () => {
    const res = await axios.get(
      "https://65cdc8f5c715428e8b3f0df3.mockapi.io/blog"
    );
    setData(res.data);
  };

  useEffect(() => {
    fetchBlog();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1 style={{ margin: "10px auto", textAlign: "center" }}>
                Blogs
              </h1>
              <hr />
              <div
                style={{
                  padding: "20px",
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 20,
                }}
              >
                {data.map((row) => {
                  return <Card key={row.id} row={row} />;
                })}
              </div>
            </>
          }
        />
        <Route path="/:id" element={<SingleBlog />} />

        <Route path="/dashboard/" element={<Dashboard />}>
          <Route path="" element={<Home />} />
          <Route path="create" element={<Create />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
