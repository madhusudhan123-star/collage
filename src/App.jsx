import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
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
import  Request  from './pages/Request';
import CA_inter from './pages/courses/ca/cainter/CA_inter';
import Contact from './pages/Contact';
import Enroll from './pages/Enroll';
import Meccec from './pages/courses/Meccec';
import Degree from './pages/courses/Degree';
import ACCA from './pages/courses/ACCA';
import CA_found from './pages/courses/ca/cafound/CA_found';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/courses/cafinal" element={<CA_final />} />
            <Route path="/courses/cainter" element={<CA_inter />} />
            <Route path="/courses/cafoundation" element={<CA_found />} />
            <Route path="/request" element={<Request />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/courses/mec" element={<Meccec />} />
            <Route path="/courses/degree" element={<Degree />} />
            <Route path="/courses/acca" element={<ACCA />} />

            {/* <Route path="/blogs" element={<Blogs />} />
            <Route path="/life" element={<Life />} />
            <Route path="/rankers" element={<Rankers />} />
            <Route path="/test-series" element={<Test />} /> */}
            {/* <Route path="/ca-final" element={<CA_final />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
