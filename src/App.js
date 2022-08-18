import Welcome from "./../src/pages/Welcome";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div className="bg-background h-screen bg-cover">
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/info/home" element={<Welcome />} />
          {/* <Route path="invoices" element={<Invoices />} /> */}
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
