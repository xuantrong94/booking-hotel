import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";


import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index path="" element={<Home />} />
          <Route path="rooms" element={<Rooms />}>
            <Route path=":roomId" element={<SingleRooms />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
