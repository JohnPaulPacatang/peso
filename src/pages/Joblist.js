import React, { useState } from "react";
// import pesoLogo from "../assets/peso-logo.png";
import logo1 from "../assets/svgexport-38.png";
import joblistBanner from "../assets/joblist.jpg";

const Joblist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "IT Support Specialist",
      location: "Makati City",
      category: "IT",
      jobType: "Full Time",
      tags: ["Technical", "Full Time"],
      salary: "30000-40000",
      deadline: "10th Oct, 2023",
      description: "As an IT Support Specialist, you will be responsible for troubleshooting and resolving technical issues, ensuring the smooth operation of company systems, and providing technical assistance to employees. Your role will involve diagnosing hardware and software problems, maintaining IT infrastructure, and optimizing system performance."
    },
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "Sales Associate",
      location: "Alabang",
      category: "Sales",
      jobType: "Part Time",
      tags: ["Sales", "Part Time"],
      salary: "15000-20000",
      deadline: "5th Nov, 2023",
      description: "As a Sales Associate, you will engage with customers to promote and sell products, provide excellent customer service, and achieve sales targets. Your responsibilities will include handling customer inquiries, managing transactions, and maintaining a positive shopping experience."
    },
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "Operations Manager",
      location: "Pasig City",
      category: "Management",
      jobType: "Full Time",
      tags: ["Management", "Full Time"],
      salary: "50000-60000",
      deadline: "15th Oct, 2023",
      description: "The Operations Manager will oversee daily operations, manage resources, and ensure organizational efficiency. Your role includes setting operational goals, implementing policies, and improving processes to meet company objectives."
    },
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "Data Analyst",
      location: "Taguig City",
      category: "Data Science",
      jobType: "Contract",
      tags: ["Data", "Analyst"],
      salary: "40000-55000",
      deadline: "20th Oct, 2023",
      description: "As a Data Analyst, you will analyze data to provide actionable insights, create reports, and assist in strategic decision-making. Your work will include data cleaning, visualization, and collaborating with teams to interpret trends and metrics."
    },
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "Marketing Executive",
      location: "Davao City",
      category: "Marketing",
      jobType: "Full Time",
      tags: ["Marketing", "Executive"],
      salary: "30000-45000",
      deadline: "2nd Nov, 2023",
      description: "The Marketing Executive will develop and implement marketing strategies, manage campaigns, and create engaging content to promote the brand and drive business growth. You will analyze market trends and monitor the effectiveness of campaigns."
    },
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "Customer Service Representative",
      location: "Cebu City",
      category: "Customer Service",
      jobType: "Part Time",
      tags: ["Customer Service", "Part Time"],
      salary: "18000-25000",
      deadline: "25th Oct, 2023",
      description: "As a Customer Service Representative, you will provide support to customers by answering inquiries, resolving issues, and ensuring a positive customer experience. Your role involves communication via phone, email, or chat platforms."
    },
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "Financial Analyst",
      location: "Manila",
      category: "Finance",
      jobType: "Full Time",
      tags: ["Finance", "Analyst"],
      salary: "40000-50000",
      deadline: "30th Oct, 2023",
      description: "The Financial Analyst will evaluate financial data, create forecasts, and assist in investment decisions. You will work closely with management to develop strategies, analyze budgets, and monitor financial performance."
    },
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "HR Specialist",
      location: "Quezon City",
      category: "Human Resources",
      jobType: "Full Time",
      tags: ["HR", "Full Time"],
      salary: "35000-45000",
      deadline: "5th Nov, 2023",
      description: "As an HR Specialist, you will manage recruitment, employee relations, and compliance with labor laws. Your role includes developing HR policies, conducting training, and fostering a positive work environment."
    },
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "Project Manager",
      location: "Ortigas",
      category: "Project Management",
      jobType: "Contract",
      tags: ["Management", "Project"],
      salary: "60000-80000",
      deadline: "10th Nov, 2023",
      description: "The Project Manager will lead and manage projects from initiation to completion. Responsibilities include planning, scheduling, resource allocation, and ensuring project goals are met within scope and budget."
    },
    {
      companyLogo: logo1,
      companyName: "Company Inc",
      jobTitle: "Graphic Designer",
      location: "Baguio City",
      category: "Design",
      jobType: "Full Time",
      tags: ["Creative", "Designer"],
      salary: "22000-30000",
      deadline: "28th Oct, 2023",
      description: "As a Graphic Designer, you will create visual concepts and designs for marketing materials, websites, and branding. Your work will involve using design software to produce high-quality graphics that align with company goals."
    }
  ];

  const handleJobTypeChange = (type) => {
    setSelectedJobType((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const applyFilters = () => {
    const filteredJobs = jobs.filter((job) => {
      const jobMonth = new Date(job.deadline).toLocaleString('default', { month: 'long' });

      return (
        (searchTerm === "" ||
          job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.companyName.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (selectedJobType.length === 0 || selectedJobType.includes(job.jobType)) &&
        (filterTags.length === 0 || filterTags.every((tag) => job.tags.includes(tag))) &&
        (selectedMonth === "" || jobMonth === selectedMonth)
      );
    });
    return filteredJobs;
  };

  const filteredJobs = applyFilters();

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
  };

  return (
    <div>
      <div
        className="text-center py-28 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${joblistBanner})` }}
      >
        <div className="mx-auto max-w-4xl py-12 mt-20 px-6 rounded-lg bg-white/70 backdrop-blur-md">
          <h1 className="text-darkblue font-extrabold text-2xl sm:text-3xl md:text-4xl">
            Available Jobs for You
          </h1>
          <p className="text-gray-600 text-base sm:text-lg pt-2">
            Browse our available positions and find the perfect job to match
            your skills and interests.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row py-16 lg:px-32 px-6">
        {/* Filter Component */}
        <div className="lg:w-1/4 w-full p-4 bg-gray-100 rounded-lg mb-6 lg:mb-0 h-full">
          <h2 className="font-bold text-lg mb-4">Search Filter</h2>

          {/* Search Bar */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Search by job title or company"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Job Type Filter */}
          <div className="mb-6">
            <h2 className="font-semibold text-base mb-2">Job Type</h2>
            <div className="flex flex-col space-y-2">
              {["Full Time", "Part Time", "Contract", "Internship"].map((type, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedJobType.includes(type)}
                    onChange={() => handleJobTypeChange(type)}
                  />
                  <span>{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div className="mb-6">
            <h2 className="font-semibold text-base mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {["Web Design", "Squarespace", "Layout Design", "Web Development", "React", "Full Stack"].map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full ${filterTags.includes(tag)
                    ? "bg-orange text-white"
                    : "bg-gray-200 text-gray-800"
                    }`}
                  onClick={() =>
                    setFilterTags((prev) =>
                      prev.includes(tag)
                        ? prev.filter((t) => t !== tag)
                        : [...prev, tag]
                    )
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Month Filter */}
          <div className="mb-6">
            <h2 className="font-semibold text-base mb-2">Month</h2>
            <select
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
            >
              <option value="">All Months</option>
              {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
                <option key={index} value={month}>{month}</option>
              ))}
            </select>
          </div>

          <button
            className="w-full py-3 bg-blue text-white font-bold rounded-lg hover:bg-darkblue"
            onClick={() => applyFilters()}
          >
            Apply Filters
          </button>
        </div>

        {/* Job Listings */}
        <div className="lg:w-3/4 w-full sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white py-4 px-2 lg:px-6">
            <div className="text-gray-700 text-lg font-medium">
              All <span className="font-bold text-black">{filteredJobs.length}</span>{" "}
              jobs found
            </div>
            <div className="flex items-center space-x-4 mt-4 sm:mt-0">
              <div className="flex items-center text-gray-700">
                <span className="mr-2">Sort:</span>
                <select
                  className="bg-gray-100 border border-gray-300 text-sm text-gray-700 rounded p-2 focus:outline-none focus:ring focus:ring-blue-500"
                  defaultValue="Latest"
                >
                  <option value="Latest">Latest</option>
                  <option value="Oldest">Oldest</option>
                  <option value="Relevance">Relevance</option>
                </select>
              </div>
            </div>
          </div>

          {filteredJobs.map((job, index) => (
            <div key={index} className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 bg-white shadow-md rounded-lg mb-4 transition-transform transform hover:-translate-y-1 hover:scale-10 hover:shadow-lg duration-300 ease-out">
              <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                <img
                  src={job.companyLogo}
                  alt={`${job.companyName} logo`}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-blue font-semibold">{job.companyName}</h3>
                  <h2 className="text-xl font-bold">{job.jobTitle}</h2>
                  <p className="text-gray-500">{job.location}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-orange text-white rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-2">💰 {job.salary}</p>
                </div>
              </div>

              <div className="flex flex-col items-start lg:items-end space-y-2 mt-4 lg:mt-0">
                <button className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-darkblue" onClick={() => handleApplyNow(job)}>
                  Apply Now
                </button>
                <p className="text-gray-500">
                  Deadline:{" "}
                  <span className="font-bold">{job.deadline}</span>
                </p>
              </div>
            </div>
          ))}

{modalOpen && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 overflow-auto">
    <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-4xl transform transition-transform duration-300 ease-in-out hover:scale-105">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
        <h2 className="text-3xl font-semibold text-gray-800">{selectedJob?.jobTitle}</h2>
        <button
          className="text-gray-500 hover:text-red-600 transition duration-200 transform scale-110"
          onClick={handleCloseModal}
        >
          ✖
        </button>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        
        <div className="flex-1">
          <p className="text-gray-600">
            <strong>Company:</strong> {selectedJob?.companyName}
          </p>
          <p className="text-gray-600">
            <strong>Location:</strong> {selectedJob?.location}
          </p>
          <p className="text-gray-600">
            <strong>Category:</strong> {selectedJob?.category}
          </p>
          <p className="text-gray-600">
            <strong>Job Type:</strong> {selectedJob?.jobType}
          </p>
          <p className="text-gray-600">
            <strong>Salary:</strong> {selectedJob?.salary}
          </p>
          <p className="text-gray-600">
            <strong>Deadline:</strong> {selectedJob?.deadline}
          </p>
        </div>
        <img
          src={selectedJob?.companyLogo}
          alt={`${selectedJob?.companyName} logo`}
          className="h-28"
        />
      </div>
      <div className="mt-4">
        <p className="text-gray-600">
          <strong>Description:</strong> {selectedJob?.description}
        </p>
      </div>
      <div className="mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea
            placeholder="Your Message"
            className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          ></textarea>
        </div>
        <label className="block mb-2 text-sm font-medium text-gray-700">Upload your CV/Resume (PDF)</label>
        <input
          type="file"
          accept=".pdf"
          className="w-full py-2 px-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out"
        />
      </div>
      <div className="flex justify-between items-center mt-6">
        <button
          className="py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-100 transition duration-150"
          onClick={handleCloseModal}
        >
          Cancel
        </button>
        <button className="py-2 px-4 bg-blue text-white rounded-lg hover:bg-darkblue transition duration-150">
          Submit Application
        </button>
      </div>
    </div>
  </div>
)}


        </div>
      </div>
    </div>
  );
};

export default Joblist;
