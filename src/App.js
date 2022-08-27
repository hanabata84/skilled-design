import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import heroImg from './assets/hero-img.png'

function App() {
  return (
    <div className="App">
      <div className="h-full bg-gradient-to-b from-white to-[#EFF1FE] flex flex-col items-center">
        <div className="xl:w-[1112px] md:w-[849px] w-[388px]">
          <img className='hidden md:block absolute top-0 xl:right-[-250px] md:right-[-340px] 2xl:right-[-10px]' src={heroImg} alt="/" />
          <Navbar />
          <Hero />
          <Cards />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
