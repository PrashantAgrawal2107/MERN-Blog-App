import React from 'react';
import { Card, Button, Avatar } from 'flowbite-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto p-6 flex-grow">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-gray-500 mt-2">Your journey to insightful content begins here.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="w-full">
            <h2 className="text-2xl font-semibold mb-2">Who We Are</h2>
            <p className="text-gray-500">
              Welcome to Prince's Blog, a space where ideas come alive. We're a team of passionate writers, thinkers, and creators dedicated to bringing you fresh perspectives on topics that matter. Our mission is to inspire, inform, and entertain our readers through high-quality content.
            </p>
          </Card>
          <Card className="w-full">
            <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
            <p className="text-gray-500">
              We believe in the power of words to change the world. Our vision is to create a platform that fosters meaningful discussions, ignites creativity, and encourages learning. Whether you're here for the latest trends, deep dives into complex topics, or just to find a bit of inspiration, we're glad to have you with us.
            </p>
          </Card>
          <Card className="w-full">
            <h2 className="text-2xl font-semibold mb-2">Meet the Team</h2>
            <div className="flex items-center">
              <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s" alt="Team Member" rounded={true} />
              <div className="ml-4">
                <h3 className="font-bold">Prashant Agrawal</h3>
                <p className="text-gray-500">Editor-in-Chief</p>
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Avatar img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOuxrvcNMfGLh73uKP1QqYpKoCB0JLXiBMvA&s" alt="Team Member" rounded={true} />
              <div className="ml-4">
                <h3 className="font-bold">Prashant Agrawal</h3>
                <p className="text-gray-500">Lead Writer</p>
              </div>
            </div>
            {/* Add more team members as needed */}
          </Card>
          <Card className="w-full">
            <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
            <p className="text-gray-500">
              We're always looking for new voices to join our community. If you're passionate about writing and want to contribute to our blog, we'd love to hear from you.
            </p>
            <Link to='/contact' className="mt-4">
              <div className='flex justify-center'>
                <Button gradientDuoTone='purpleToPink'>Contact Us</Button>
              </div>
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;


