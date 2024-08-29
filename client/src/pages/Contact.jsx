import React, { useState } from 'react';
import { Textarea, Button } from 'flowbite-react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  const [message, setMessage] = useState('');

  const handleSendEmail = () => {
    const subject = encodeURIComponent('Contact from Your Blog');
    const body = encodeURIComponent(message);
    const mailtoLink = `mailto:prashantagrawal@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-gray-600 mt-2">We'd love to hear from you! Feel free to send us a message.</p>
      </div>
      <div className="w-full max-w-lg">
        <Textarea
          id="message"
          placeholder="Write your message here..."
          rows={10}
          className="mb-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button gradientDuoTone='purpleToPink' onClick={handleSendEmail} className="w-full">
          Send via Gmail
        </Button>
      </div>
      <div className="flex justify-center mt-8 space-x-4">
        <a href="https://www.linkedin.com/in/prashant-agrawal-aa7a55253/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} className="text-purple-400 hover:text-blue-800" />
        </a>
        <a href="https://github.com/PrashantAgrawal2107" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} className="text-purple-400 hover:text-gray-900" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;