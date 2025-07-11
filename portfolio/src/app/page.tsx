"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdBuild } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { MdFolderOpen } from "react-icons/md";
import { MdEmojiEvents } from "react-icons/md";
import { MdMail } from "react-icons/md";

export default function Home() {
  const year = new Date().getFullYear();
  return (
    <div className="relative flex flex-col items-center min-h-screen w-full overflow-hidden bg-black text-white px-4">
      {/* Marban-style Hero Background */}
      <div className="hero-bg">
        <div className="hero-bg-gradient" />
        <div className="hero-bg-blur blue" />
        <div className="hero-bg-blur pink" />
        <div className="hero-bg-blur purple" />
      </div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[90vh] w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content flex flex-col items-center gap-8"
        >
          <div className="rounded-full overflow-hidden border-4 border-white/10 shadow-2xl w-56 h-56 bg-zinc-900">
            <Image
              src="/nikhil.jpg"
              alt="Nikhil Balamurugan"
              width={224}
              height={224}
              priority
            />
          </div>
          <h1 className="text-6xl sm:text-7xl font-extrabold text-center tracking-tight leading-tight drop-shadow-xl">Nikhil Balamurugan</h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl sm:text-3xl text-center max-w-2xl font-medium text-zinc-200 drop-shadow"
          >
            <span className="inline-block animate-fadein">AI/ML Enthusiast • Open Source Contributor • Hackathon Finalist</span>
          </motion.p>
          <div className="flex gap-6 mt-2">
            <a href="https://www.linkedin.com/in/nikhilb21/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors text-3xl">
              <FaLinkedin />
            </a>
            <a href="https://github.com/Nikhil210206" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-400 transition-colors text-3xl">
              <FaGithub />
            </a>
          </div>
        </motion.div>
      </section>
      {/* Card-style sections will follow below */}
      {/* Skills Section - Card Style */}
      <section className="w-full max-w-2xl flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-10 shadow-2xl mb-12 w-full border border-zinc-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <MdBuild className="text-3xl text-blue-400" />
            <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2 text-lg text-zinc-200">Languages</h3>
              <p className="text-zinc-400">Python, C, C++, Java, Typescript, JavaScript, SQL</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg text-zinc-200">Tools/Frameworks</h3>
              <p className="text-zinc-400">TensorFlow, PyTorch, OpenCV, Mediapipe, PyAudio, API, React.js, Node.js, Flask, HTML, CSS, Numpy, Generative AI, Git, Github, Ui/UX, Visual Studio, Data Analysis, JSON, Linux, Tailwind</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg text-zinc-200">Technologies</h3>
              <p className="text-zinc-400">Data Structures, Algorithms</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-lg text-zinc-200">Soft Skills</h3>
              <p className="text-zinc-400">Adaptability, Collaboration, Effective Communication, Time Management</p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Experience Section - Card Style */}
      <section className="w-full max-w-2xl flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-10 shadow-2xl mb-12 w-full border border-zinc-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <MdWork className="text-3xl text-green-400" />
            <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-semibold text-lg text-zinc-200">Google Developers Group on campus SRM</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Technical Team Member</span>
                <span>May 2025 - Present</span>
              </div>
              <p className="text-zinc-400 mt-1">Developed a QR code scanner for event check-in for managing events.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-zinc-200">Computer Society of India, SRM</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Team Member</span>
                <span>Feb 2025 - Present</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-zinc-200">Social Winter of Code 5.0</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Open Source Contributor</span>
                <span>Jan 2025 - March 2025</span>
              </div>
              <p className="text-zinc-400 mt-1">Contributed to real world open source projects and made it to the top 100 contributors.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-zinc-200">Aaruush, SRM</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Student Volunteer</span>
                <span>Aug 2024 - Feb 2025</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Education Section - Card Style */}
      <section className="w-full max-w-2xl flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-10 shadow-2xl mb-12 w-full border border-zinc-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <MdSchool className="text-3xl text-yellow-400" />
            <h2 className="text-3xl font-bold tracking-tight">Education</h2>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="font-semibold text-lg text-zinc-200">SRM Institute of Science & Technology, Kattankulathur</h3>
              <div className="flex flex-col sm:flex-row sm:justify-between text-zinc-400 text-sm mb-1">
                <span>Bachelors of Technology in Computer Science and Engineering</span>
                <span>Aug 2024 - Present</span>
              </div>
              <p className="text-zinc-400 mt-1">CGPA: 9.09</p>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Projects Section - Card Style */}
      <section className="w-full max-w-2xl flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-10 shadow-2xl mb-12 w-full border border-zinc-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <MdFolderOpen className="text-3xl text-purple-400" />
            <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          </div>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-semibold text-lg text-zinc-200">Guard AI <span className='text-zinc-400 text-sm'>(Jan 2025 - Mar 2025)</span></h3>
              <ul className="list-disc list-inside text-zinc-400 ml-4 mt-1">
                <li>Developed a real-time AI-based remote proctoring system that ensures secure, fair online assessments. It tracks website activity, detects speaking, and monitors user focus during exams, generating detailed session reports.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-zinc-200">QR Event Check-in <span className='text-zinc-400 text-sm'>(Apr 2025 - May 2025)</span></h3>
              <ul className="list-disc list-inside text-zinc-400 ml-4 mt-1">
                <li>Developed a QR-based event check-in system with backend and frontend application designed to manage college event check-ins using QR codes.</li>
                <li>Users can register for events, receive a unique QR code, and check in on the event day. Admins can manage events, view attendees, and export attendee data.</li>
                <li>User Features: register using name, email, student ID, and password. Login with JWT-based authentication.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-zinc-200">Fit You <span className='text-zinc-400 text-sm'>(Oct 2024 - Dec 2024)</span></h3>
              <ul className="list-disc list-inside text-zinc-400 ml-4 mt-1">
                <li>Designed and Developed Fit You which redefines fitness with AI-driven personalized plans for workouts and diets. Empowering fitness journey with technology and expertise; it adapts to your goals and lifestyle.</li>
                <li>Get meal recommendations tailored to your dietary preferences, including a mix of Indian vegetarian and non-vegetarian options.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </section>
      {/* Achievements & Certificates Section - Card Style */}
      <section className="w-full max-w-2xl flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-10 shadow-2xl mb-12 w-full border border-zinc-700"
        >
          <div className="flex items-center gap-3 mb-6">
            <MdEmojiEvents className="text-3xl text-orange-400" />
            <h2 className="text-3xl font-bold tracking-tight">Achievements & Certificates</h2>
          </div>
          <ol className="list-decimal list-inside text-zinc-400 space-y-2 ml-4 text-base">
            <li>Completed NPTEL in Object Oriented Programming with 75% Silver Badge</li>
            <li>Top 25% in Build with India Hackathon By Google</li>
            <li>Top 100 in Social Winter of Code 5.0 open source contribution</li>
            <li>Finalist in IIT Madras Embedded programming challenge</li>
            <li>Finalist in IIT Madras Shastra Programming contest</li>
            <li>Finalist in IIT Madras Clash of Codes Contest</li>
            <li>The only First year team to qualify for the Finals of Quantathon 2.0 24 hours Hackathon.</li>
            <li>Participated in TechXcelerate BITS Pilani Hyd Hackathon</li>
            <li>Participated in MOZOHack 6.0 24 Hours Hackathon and got in Top 20 Teams out of 750+ Teams.</li>
          </ol>
        </motion.div>
      </section>
      {/* Contact / Footer Section - Card Style */}
      <footer className="w-full max-w-2xl mx-auto mb-8 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-2xl p-8 shadow-2xl w-full border border-zinc-700 flex flex-col items-center gap-3"
        >
          <div className="flex items-center gap-3 mb-2">
            <MdMail className="text-2xl text-pink-400" />
            <h2 className="text-2xl font-bold tracking-tight">Contact</h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-2">
            <a href="mailto:nikhilbalamurugan@gmail.com" className="hover:underline text-zinc-300">nikhilbalamurugan@gmail.com</a>
            <a href="https://www.linkedin.com/in/nikhilb21/" target="_blank" rel="noopener noreferrer" className="hover:underline text-zinc-300">LinkedIn</a>
            <a href="https://github.com/Nikhil210206" target="_blank" rel="noopener noreferrer" className="hover:underline text-zinc-300">GitHub</a>
          </div>
          <p className="text-zinc-500 text-xs mt-2">© {year} Nikhil Balamurugan. All rights reserved.</p>
        </motion.div>
      </footer>
    </div>
  );
}
