import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Books from './pages/Books';
import Life from './pages/Life';
import Rankers from './pages/Rankers';
import { Test } from './pages/test_series/Test';
import CA_final from './pages/courses/ca/cafinal/CA_final';
import Footer from './components/Footer';
import Faq from './pages/Faq';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/courses/cafinal" element={<CA_final />} />
            {/* <Route path="/blogs" element={<Blogs />} /> */}
            {/* <Route path="/books" element={<Books />} /> */}
            {/* <Route path="/life" element={<Life />} /> */}
            {/* <Route path="/rankers" element={<Rankers />} /> */}
            {/* <Route path="/test-series" element={<Test />} /> */}
            {/* <Route path="/ca-final" element={<CA_final />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
