import "./App.css";

import { Header, Slider, Hod, DepInfo, Footer, NewsSlider } from "./containers";
import { Navbar } from "./components";

function App() {
  return (
    <div>
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Hod />
      <Slider />
      <DepInfo />
      <NewsSlider/>
      <Footer />
    </div>
  );
}

export default App;
