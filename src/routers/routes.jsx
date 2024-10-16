import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Butacasselect, Home, Reservapage } from "../index"

export function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/reservapage" element={<Reservapage/> } />
        <Route path="/pagebutacas" element={<Butacasselect/> } />
      </Routes>
    </BrowserRouter>
  );
}
