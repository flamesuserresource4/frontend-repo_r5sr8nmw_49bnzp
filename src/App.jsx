import Header from './components/Header';
import Hero from './components/Hero';
import Showcase from './components/Showcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="scroll-smooth bg-slate-900 selection:bg-amber-200 selection:text-slate-900">
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
