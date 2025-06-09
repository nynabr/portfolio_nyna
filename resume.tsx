import Image from "next/image"

export default function Resume() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl">
      {/* Header Section */}
      <div className="bg-slate-700 text-white p-8 relative">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-5xl font-bold mb-2">NAYANA B R</h1>
            <p className="text-xl text-gray-300">Computer Science Engineer</p>
          </div>
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white">
            <Image
              src="/nayana-photo.jpg"
              alt="Profile Photo"
              width={128}
              height={128}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Career Objective */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-center">Career Objective</h2>
          <div className="bg-white text-gray-800 p-6 rounded">
            <p className="text-justify leading-relaxed">
              To harness my technical skills and passion for problem-solving to create impactful, user-centered
              technology solutions. I aim to continually expand my knowledge and adapt to emerging trends, contributing
              meaningfully to projects that push the boundaries of innovation. Ultimately, I aspire to make a lasting,
              positive difference in the tech industry by fostering both personal and professional growth.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Left Column */}
        <div className="bg-slate-700 text-white p-8">
          {/* Education */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Education</h2>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Bachelor of Engineering in Computer Science</h3>
                <span className="text-sm">2026</span>
              </div>
              <p className="text-gray-300 text-sm">Malnad College Of Engineering, Hassan</p>
              <p className="text-gray-300 text-sm">CGPA: 8.90</p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Higher Secondary Education (12th Grade)</h3>
                <span className="text-sm">2022</span>
              </div>
              <p className="text-gray-300 text-sm">Topper's Pre University College, Holenarasipura</p>
              <p className="text-gray-300 text-sm">Percentage: 93.7%</p>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold">Secondary Education (10th Grade)</h3>
                <span className="text-sm">2020</span>
              </div>
              <p className="text-gray-300 text-sm">Morarji Desai Residential School, Haradanahalli</p>
              <p className="text-gray-300 text-sm">Percentage: 88.32%</p>
            </div>
          </div>

          {/* Personal Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6">Personal Skills</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Communication Skills
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Teamwork
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Adaptability
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Problem Solving
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Time Management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Leadership Skills
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Initiative
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                Positive Attitude
              </li>
            </ul>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>

            <div className="mb-4">
              <h3 className="font-semibold mb-1">Automated Dual-Action Floor Sanitization System</h3>
              <p className="text-gray-300 text-sm mb-2">2022</p>
              <p className="text-gray-300 text-sm">
                Provides efficient and thorough floor care while ensuring hygiene and cleanliness with minimal effort
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-1">IoT-Enabled Visitor Counter System Using Arduino</h3>
              <p className="text-gray-300 text-sm mb-2">2024</p>
              <p className="text-gray-300 text-sm">
                Arduino-Based Real-Time Visitor Tracking And Management System using Wokwi Simulator
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-1">MCE Faculty Docs Management System</h3>
              <p className="text-gray-300 text-sm mb-2">2025</p>
              <p className="text-gray-300 text-sm">
                Developed a responsive faculty document management website using React, Tailwind CSS, JavaScript, and
                Vite
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-gray-100 p-8">
          {/* Contact */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-700">CONTACT</h2>

            <div className="mb-4">
              <h3 className="font-semibold text-slate-700 mb-1">📱 Phone</h3>
              <p className="text-gray-600">6364258268</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-slate-700 mb-1">✉️ Email</h3>
              <p className="text-gray-600">peritebr@gmail.com</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-slate-700 mb-1">🌐 LinkedIn</h3>
              <p className="text-gray-600 text-sm">www.linkedin.com/in/perite-br-976b8027</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-slate-700 mb-1">📍 Address</h3>
              <p className="text-gray-600">Beeranahalli, Holenarasipura(T), Hassan</p>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-700">Technical Skills</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <span className="text-gray-700">Programming: C, C++, Python, HTML, CSS</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <span className="text-gray-700">Operating Systems: Windows, Ubuntu, Linux</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <span className="text-gray-700">Tools: PyCharm, MySQL, Visual Studio Code</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <span className="text-gray-700">Web Technologies: React, JavaScript, Tailwind CSS</span>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-700">Certifications</h2>

            <div className="mb-4">
              <h3 className="font-semibold text-slate-700">Soft Skill Development</h3>
              <p className="text-gray-600 text-sm">NPTEL - Elite Certificate (March 2025)</p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold text-slate-700">Human Computer Interaction</h3>
              <p className="text-gray-600 text-sm">NPTEL - Elite with Silver (April 2025)</p>
            </div>
          </div>

          {/* Academic Achievements */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-slate-700">Academic Achievements</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <span className="text-gray-700">Acted as Class Monitor in school</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <span className="text-gray-700">Awarded 'Awesome Attitude and Swagger'</span>
              </li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-slate-700">Languages</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <span className="text-gray-700">English</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <span className="text-gray-700">Kannada</span>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-slate-700 rounded-full mr-3"></span>
                <span className="text-gray-700">Hindi</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
