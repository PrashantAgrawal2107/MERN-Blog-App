import React from 'react';
import CallToAction from '../components/CallToAction';

export default function Projects() {
  const projects = [
    {
      title: 'Real Estate App',
      description: 'A full-stack MERN application where users can list properties for sale or rent.',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual image URL
      techStack: ['React', 'Node.js', 'MongoDB', 'Express'],
      liveLink: 'https://mern-estate-app-pk.onrender.com/', // Replace with the live project URL
      sourceCode: 'https://github.com/PrashantAgrawal2107/MERN-Estate-App', // Replace with the source code URL
    },
    {
      title: 'E-Commerce App',
      description: 'A social media platform built using React.js and Firebase.',
      imageUrl: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=800', // Replace with actual image URL
      techStack: ['React.js', 'Firebase', 'Redux'],
      liveLink: 'https://tangerine-gingersnap-3c8b63.netlify.app/', // Replace with the live project URL
      sourceCode: 'https://github.com/PrashantAgrawal2107/BUSYBUY---1', // Replace with the source code URL
    },
    // Add more projects as needed
  ];

  return (
    <div className='min-h-screen max-w-4xl mx-auto p-6 flex flex-col items-center'>
      <h1 className='text-4xl font-bold mb-6'>Projects</h1>
      <p className='text-md text-gray-600 mb-10 text-center'>
        Explore some of the fun and engaging projects I've built while learning and mastering web technologies!
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        {projects.map((project, index) => (
          <div key={index} className='w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[350px] transition-all shadow-md hover:scale-105'>
            <img src={project.imageUrl} alt={project.title} className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h2 className='text-2xl font-semibold mb-2'>{project.title}</h2>
              <p className='text-gray-600 mb-4'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mb-4'>
                {project.techStack.map((tech, techIndex) => (
                  <span key={techIndex} className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex justify-between'>
              <a href={project.liveLink} target='_blank' rel='noopener noreferrer' className='bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition transform hover:scale-105'>
                  View Project
                </a>
                <a href={project.sourceCode} target='_blank' rel='noopener noreferrer' className='bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-2 rounded-md shadow-md hover:shadow-lg transition transform hover:scale-105'>
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CallToAction />
    </div>
  );
}
