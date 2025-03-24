import React from 'react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="bg-gray-900 p-6 rounded-lg shadow-md">
          <p className="mb-6">
            Have questions about CAD 3.0? We're here to help! Please reach out to us using the information below.
          </p>
          
          <div className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Email</h2>
              <p className="text-red-400">info@cad3.example.com</p>
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-2">Social Media</h2>
              <p>
                Follow us on social media for the latest updates and announcements.
              </p>
              <div className="flex space-x-4 mt-2">
                <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300">Twitter</a>
                <a href="https://instagram.com" className="text-pink-400 hover:text-pink-300">Instagram</a>
                <a href="https://linkedin.com" className="text-blue-500 hover:text-blue-400">LinkedIn</a>
                <a href="https://discord.com" className="text-purple-400 hover:text-purple-300">Discord</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 