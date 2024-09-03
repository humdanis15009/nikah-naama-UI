import About from "./components/About";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Header from "./components/Header";
import Process from "./components/Process";
import Register from "./components/Register";
import Reviews from "./components/Reviews";
import Why from "./components/Why";

function App() {
  return (
    <>
      <div className="flex relative">
        <img
          src="../public/images/background.jpg"
          className="h-screen w-full"
          alt="background"
        />
        <Header />
        <Register />
      </div>
      <About />
      <div className=" w-full bg-pink-50">
        <Process />
      </div>
      <Reviews />
      <GetStarted />
      <Why />
      <Footer />
    </>
  );
}

export default App;
