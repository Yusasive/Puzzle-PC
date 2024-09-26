import React from 'react';

const PerfectFitSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-24">
      <div className="container mx-auto text-center lg:text-left">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-satoshi font-bold text-gray-900 mb-10">
          Perfect fit for every team
        </h2>
        
        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-satoshi font-bold text-gray-900 mb-4">
              Product Teams
            </h3>
            <p className="text-gray-600 font-work_sans mb-4">
              Streamline your workflows and bring your team's work into one place. Build better products faster with ClickUp.
            </p>
            <a
              href="https://www.youtube.com/watch?v=XXXXX" // replace XXXXX with actual video ID
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Watch Video
            </a>
          </div>

          {/* Second Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-satoshi font-bold text-gray-900 mb-4">
              Marketing Teams
            </h3>
            <p className="text-gray-600 font-work_sans mb-4">
              Collaborate on campaigns, content, and creative tasks. Drive your marketing efforts efficiently using ClickUp.
            </p>
            <a
              href="https://www.youtube.com/watch?v=XXXXX" // replace XXXXX with actual video ID
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Watch Video
            </a>
          </div>

          {/* Third Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-satoshi font-bold text-gray-900 mb-4">
              Engineering Teams
            </h3>
            <p className="text-gray-600 font-work_sans mb-4">
              Manage sprints, track bugs, and collaborate across departments. Empower your engineering team with ClickUp.
            </p>
            <a
              href="https://www.youtube.com/watch?v=XXXXX" // replace XXXXX with actual video ID
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Watch Video
            </a>
          </div>

          {/* Fourth Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-satoshi font-bold text-gray-900 mb-4">
              Operations Teams
            </h3>
            <p className="text-gray-600 font-work_sans mb-4">
              Track and manage complex processes and workflows in one place. Simplify your operations with ClickUp.
            </p>
            <a
              href="https://www.youtube.com/watch?v=XXXXX" // replace XXXXX with actual video ID
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Watch Video
            </a>
          </div>

          {/* Fifth Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-satoshi font-bold text-gray-900 mb-4">
              Sales Teams
            </h3>
            <p className="text-gray-600 font-work_sans mb-4">
              Keep your sales pipeline organized and collaborate on sales initiatives. Optimize your sales workflow with ClickUp.
            </p>
            <a
              href="https://www.youtube.com/watch?v=XXXXX" // replace XXXXX with actual video ID
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Watch Video
            </a>
          </div>

          {/* Sixth Card */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-satoshi font-bold text-gray-900 mb-4">
              HR Teams
            </h3>
            <p className="text-gray-600 font-work_sans mb-4">
              Manage recruitment, onboarding, and employee engagement with ease. Enhance your HR processes using ClickUp.
            </p>
            <a
              href="https://www.youtube.com/watch?v=XXXXX" // replace XXXXX with actual video ID
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-600 hover:text-purple-800 underline"
            >
              Watch Video
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerfectFitSection;
