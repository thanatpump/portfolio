import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { motion, useScroll, useTransform } from 'framer-motion';

const App = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.header 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden"
        style={{ opacity, scale }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Background" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-center md:text-left"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl font-bold mb-4"
              >
                Hello, I'm
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Thanat Thincheelong</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl mb-8 text-gray-200"
              >
                A hardworking and motivated developer with experience in Full-Stack Development and Game Development. I am always open to learning new things, and I am a fast learner.
              </motion.p>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-purple-600 transition-all shadow-lg hover:shadow-xl"
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Profile Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="w-64 h-64 mx-auto md:mx-0 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img 
                  src="/images/profile.jpg" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.header>

      {/* Skills & Technologies Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Skills & Technologies
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Programming Languages */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Programming</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• PHP</li>
                <li>• JavaScript</li>
                <li>• C#</li>
                <li>• Python</li>
                <li>• Swift</li>
              </ul>
            </motion.div>

            {/* Web Development */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-green-600">Web Dev</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• HTML/CSS</li>
                <li>• Laravel</li>
                <li>• SQL</li>
                <li>• MySQL</li>
                <li>• React</li>
              </ul>
            </motion.div>

            {/* Game Development */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Game Dev</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Unity</li>
                <li>• Godot</li>
                <li>• GD Script</li>
                <li>• Game Design</li>
                <li>• Game Mechanics</li>
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-orange-600">Tools</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Visual Studio</li>
                <li>• GitHub</li>
                <li>• PowerBI</li>
                <li>• Xcode</li>
                <li>• MySQL</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Work Experience
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Portfolio Website */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
                <p className="text-gray-600 mb-4">Personal Project</p>
                <p className="text-sm text-gray-500 mb-4">March 2024</p>
                <p className="text-gray-600 mb-4">Modern portfolio website built with React and Laravel, featuring animations and responsive design</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Tailwind CSS</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Framer Motion</span>
                </div>
              </div>
            </motion.div>

            {/* Chaiyaphum Hospital */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Full-Stack Developer</h3>
                <p className="text-gray-600 mb-4">Chaiyaphum Hospital</p>
                <p className="text-sm text-gray-500 mb-4">Feb 2025 - Present</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">PHP</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Laravel</span>
                  <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">SQL</span>
                </div>
              </div>
            </motion.div>

            {/* DKCode */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Programmer</h3>
                <p className="text-gray-600 mb-4">DKCode Co, Ltd</p>
                <p className="text-sm text-gray-500 mb-4">Nov 2024 - Feb 2025</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">SQL</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Low-Code</span>
                </div>
              </div>
            </motion.div>

            {/* Soft Kingdom */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Game Developer</h3>
                <p className="text-gray-600 mb-4">Soft Kingdom Co, Ltd</p>
                <p className="text-sm text-gray-500 mb-4">May 2023 - Sep 2023</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">C#</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Unity</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Game Design</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Education
          </motion.h2>
          <div className="max-w-3xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-2">Bachelor's Degree in Information Technology</h3>
              <p className="text-gray-600 mb-4">Khon Kaen University</p>
              <p className="text-sm text-gray-500">2017 - 2021</p>
              <div className="mt-6">
                <h4 className="font-semibold mb-2">Certifications</h4>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <p className="text-gray-600">Advanced iOS Development with Swift</p>
                    <p className="text-sm text-gray-500">BornToDev Academy</p>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-600">Basic iOS Development with Swift</p>
                    <p className="text-sm text-gray-500">BornToDev Academy</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Contact
          </motion.h2>
          <div className="max-w-2xl mx-auto">
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <label className="block text-gray-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-32"></textarea>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gray-900 text-white py-12"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <p>Email: thanat.tcl@kkumail.com</p>
              <p>Phone: 095-654-8405</p>
              <p>Location: 333/395 The Base Condo Mittraphap Khonkaen</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Languages</h3>
              <ul className="space-y-2">
                <li>• English</li>
                <li>• Thai</li>
              </ul>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 pt-8 border-t border-gray-800 text-center"
          >
            <p>&copy; 2024 Thanat Thincheelong. All rights reserved.</p>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

