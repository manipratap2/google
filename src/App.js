import "./App.css";

import Footer from "./components/pages/Footer";
import MainBody from "./components/pages/MainBody";
import MainNav from "./components/pages/MainNav";

function App() {
  return (
    <div className="App">
      <MainNav />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
