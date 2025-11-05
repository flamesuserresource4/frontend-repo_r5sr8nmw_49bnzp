import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth bg-[#1D2B3C] selection:bg-[#FFC107] selection:text-[#1D2B3C]">
      <Header />
      <main>
        <Hero />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
