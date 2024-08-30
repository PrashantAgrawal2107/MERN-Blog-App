import React from 'react';
import { Card, Accordion } from 'flowbite-react';

const PolicyPage = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Policies & Legal</h1>
        <p className="text-gray-600 mt-2">Please read our Privacy Policy and Terms & Conditions carefully.</p>
      </div>

      <div className="grid grid-cols-1 gap-10">

        {/* Privacy Policy Section */}
        <Card className="bg-indigo-50 shadow-md border-none p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-800">Privacy Policy</h2>
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title className="text-indigo-800 hover:text-indigo-900">
                Information Collection
              </Accordion.Title>
              <Accordion.Content className="text-gray-700">
                We collect personal information when you use our services or communicate with us. This includes your name, email address, and any other details provided.
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-indigo-800 hover:text-indigo-900">
                Use of Information
              </Accordion.Title>
              <Accordion.Content className="text-gray-700">
                Your information is used to provide, maintain, and improve our services. We also use it for customer support, research, and communication purposes.
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-indigo-800 hover:text-indigo-900">
                Data Protection
              </Accordion.Title>
              <Accordion.Content className="text-gray-700">
                We implement advanced security measures to protect your personal data from unauthorized access, alteration, or disclosure.
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-indigo-800 hover:text-indigo-900">
                Cookies
              </Accordion.Title>
              <Accordion.Content className="text-gray-700">
                Our website uses cookies to enhance user experience and analyze site usage. You can disable cookies through your browser settings.
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </Card>

        {/* Terms and Conditions Section */}
        <Card className="bg-indigo-50 shadow-md border-none p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-indigo-800">Terms and Conditions</h2>
          <Accordion collapseAll>
            <Accordion.Panel>
              <Accordion.Title className="text-indigo-800 hover:text-indigo-900">
                Account Responsibilities
              </Accordion.Title>
              <Accordion.Content className="text-gray-700">
                Users are responsible for maintaining the confidentiality of their account information. You must notify us immediately if you suspect any unauthorized use of your account.
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-indigo-800 hover:text-indigo-900">
                Prohibited Activities
              </Accordion.Title>
              <Accordion.Content className="text-gray-700">
                You agree not to engage in activities that harm our website, services, or users, including hacking, spreading malware, or other malicious behavior.
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-indigo-800 hover:text-indigo-900">
                Content Ownership
              </Accordion.Title>
              <Accordion.Content className="text-gray-700">
                All content provided on this site is owned by us or our licensors and is protected by intellectual property laws. You may not use this content without our permission.
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-indigo-800 hover:text-indigo-900">
                Changes to Terms
              </Accordion.Title>
              <Accordion.Content className="text-gray-700">
                We reserve the right to update these terms at any time. Continued use of our services implies acceptance of the new terms. 
              </Accordion.Content>
            </Accordion.Panel>
            <Accordion.Panel>
              <Accordion.Title className="text-indigo-800 hover:text-indigo-900">
                Governing Law
              </Accordion.Title>
              <Accordion.Content className="text-gray-700">
                These terms are governed by and construed in accordance with the laws of our jurisdiction. Any disputes will be resolved in accordance with these laws.
              </Accordion.Content>
            </Accordion.Panel>
          </Accordion>
        </Card>
      </div>
    </div>
  );
};

export default PolicyPage;


