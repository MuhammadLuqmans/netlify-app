import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeV6 from "./pages/HomeV6";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeV6 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
