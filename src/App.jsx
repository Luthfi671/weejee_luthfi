import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/mainlayout";
import Home from "./page/home";
// import Heading from './landing_page/heading';


function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        {/* <Route path="heading" element={<Heading />} /> */}
      </Route>
    </Routes>
  );
}

export default App;