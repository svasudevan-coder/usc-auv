import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Import your components
import AboutUs from './AboutUs';
import EBoard from './EBoard';
import AUV from './AUV';
import Join from './Join';

const Home = () => {
  const scrollToInfo = () => {
    document.getElementById('info1').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full h-screen flex items-start justify-center">
      <div className="w-full h-5/6 flex flex-col items-center justify-center relative">
        <h1 className="text-4xl font-bold">USC AUV</h1>
        <p className="text-lg mt-4">Autonomous Underwater Vehicle</p>
        <button
          onClick={scrollToInfo}
          className="absolute bottom-8 cursor-pointer animate-bounce text-4xl"
          aria-label="Scroll to info section"
        >
          ↓
        </button>
      </div>
    </div>
  );
};

const Info1 = () => {
  return (
    <>
      <div id="info1" className="w-5/6 mx-auto">
        {/* Section 1 */}
        <div className="flex gap-4 items-center pb-24">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-6">Who We Are</h1>
            <p className="mb-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec lectus ultrices, malesuada velit quis, sagittis velit. Nullam hendrerit massa sed ante ultrices porta. Maecenas lobortis scelerisque odio, ut condimentum orci consectetur quis.
            </p>
            <Link
              to="/eboard"
              className="bg-[#990000] text-white px-6 py-3 rounded hover:bg-[#800000] transition-colors font-semibold inline-block"
            >
              Meet the Team
            </Link>
          </div>
          <div className="w-1/2">
            <img
              src="/api/placeholder/600/400"
              alt="USC AUV Team"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex gap-4 items-center pb-24">
          <div className="w-1/2">
            <img
              src="/api/placeholder/600/400"
              alt="team photo"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-6">What we do</h1>
            <p className="mb-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec lectus ultrices, malesuada velit quis, sagittis velit. Nullam hendrerit massa sed ante ultrices porta. Maecenas lobortis scelerisque odio, ut condimentum orci consectetur quis.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex gap-4 items-center pb-24">
          <div className="w-1/2">
            <h1 className="text-3xl font-bold mb-6">Our AUV</h1>
            <p className="mb-8 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec lectus ultrices, malesuada velit quis, sagittis velit. Nullam hendrerit massa sed ante ultrices porta. Maecenas lobortis scelerisque odio, ut condimentum orci consectetur quis.
            </p>
            <Link
              to="/about"
              className="bg-[#990000] text-white px-6 py-3 rounded hover:bg-[#800000] transition-colors font-semibold inline-block"
            >
              Learn More
            </Link>
          </div>
          <div className="w-1/2">
            <img
              src="/api/placeholder/600/400"
              alt="Our USC AUV"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <hr className="w-[85%] mx-auto border-b border-b-2 border-black mb-8" />
    </>
  );
};

const Info2 = () => {
  return (
    <div className="flex flex-col items-center px-4">
      <h1 className="text-3xl font-bold mb-6">Watch our RoboSub 2024 Competition Video!</h1>
      <div className="w-full max-w-4xl aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="RoboSub 2024 Competition Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <hr className="w-[85%] mx-auto border-b border-b-2 border-black mt-8 mb-8" />
    </div>
  );
};

const Info3 = () => {
  return (
    <div className="w-full px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center text-center p-4">
          <h1 className="text-3xl font-bold mb-6">Sub Team 1</h1>
          <p className="text-gray-700">description</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <h1 className="text-3xl font-bold mb-6">Sub Team 2</h1>
          <p className="text-gray-700">description</p>
        </div>

        <div className="flex flex-col items-center text-center p-4">
          <h1 className="text-3xl font-bold mb-6">Sub Team 3</h1>
          <p className="text-gray-700">description</p>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <Home />
      <Info1 />
      <Info2 />
      <Info3 />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between">
        {/* Navigation */}
        <nav className="bg-[#990000] text-white h-16 flex items-center sticky top-0 z-50">
          <div className="w-5/6 mx-auto">
            <ul className="flex justify-end space-x-6 text-lg font-bold">
              <li>
                <Link
                  to="/"
                  className="hover:underline  hover:decoration-2"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:underline hover:decoration-2"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/auv"
                  className="hover:underline  hover:decoration-2"
                >
                  AUV
                </Link>
              </li>
              <li>
                <Link
                  to="/eboard"
                  className="hover:underline hover:decoration-2"
                >
                  E-Board
                </Link>
              </li>
              <li>
                <Link
                  to="/join"
                  className="hover:underline  hover:decoration-2"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        {/* Route Components */}
        <div className="w-full">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/eboard" element={<EBoard />} />
            <Route path="/auv" element={<AUV />} />
            <Route path="/join" element={<Join />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-[#990000] text-white h-16 flex items-center">
          <div className="w-5/6 mx-auto">
            <p className=" text-sm">USC AUV</p>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
