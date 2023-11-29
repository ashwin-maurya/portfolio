import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideNav from "./components/common/SideNav";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <>
      <section className="relative maxcontainer flex min-h-screen justify-center  max-lg:flex-row dark:bg-[#1b1b1b]">
        <SideNav />
        <div className="w-[75%] max-lg:w-[100%]  ">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </div>
      </section>
    </>
  );
}

export default App;
