import React, { useState } from "react";
import pesoLogo from "../assets/peso-logo.png";
import joblistBanner from "../assets/joblist.jpg";
import { FiList } from "react-icons/fi";

const Joblist = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedJobType, setSelectedJobType] = useState([]);
  const [filterTags, setFilterTags] = useState([]);

  const jobs = [
    {
      companyLogo: pesoLogo,
      companyName: "Company Inc",
      jobTitle: "Shop Manager",
      location: "New York Cubao",
      category: "Retail",
      jobType: "Full Time",
      tags: ["Creative", "Full Time"],
      salary: "10000-15000",
      deadline: "21st Sep, 2023",
    },
    {
      companyLogo: pesoLogo,
      companyName: "Company Inc",
      jobTitle: "Creative Designer",
      location: "Mexico Pampanga",
      category: "Design",
      jobType: "Contract",
      tags: ["Creative", "Designer"],
      salary: "25000-35000",
      deadline: "27th Sep, 2023",
    },
    {
      companyLogo: pesoLogo,
      companyName: "Company Inc",
      jobTitle: "Janitor",
      location: "Fairview Quezon City",
      category: "Maintenance",
      jobType: "Part Time",
      tags: ["Creative", "Designer"],
      salary: "25000-35000",
      deadline: "27th Sep, 2023",
    },
  ];

  const handleCategoryChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
  };

  const filteredJobs = jobs.filter((job) => {
    return (
      (searchTerm === "" ||
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCategories.length === 0 || selectedCategories.includes(job.category)) &&
      (selectedJobType.length === 0 || selectedJobType.includes(job.jobType)) &&
      (filterTags.length === 0 || filterTags.every((tag) => job.tags.includes(tag)))
    );
  });

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
        <div className="lg:w-1/4 w-full p-4 bg-gray-100 rounded-lg mb-6 lg:mb-0">
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

          {/* Category Filter */}
          <div className="mb-6">
            <h2 className="font-semibold text-base mb-2">Category</h2>
            <div className="flex flex-col space-y-2">
              {["Retail", "Design", "Maintenance"].map((category, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => handleCategoryChange(category)}
                  />
                  <span>{category}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Job Type Filter */}
          <div className="mb-6">
            <h2 className="font-semibold text-base mb-2">Job Type</h2>
            <div className="flex flex-col space-y-2">
              {["Full Time", "Part Time", "Contract", "Internship"].map(
                (type, index) => (
                  <label key={index} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={selectedJobType.includes(type)}
                      onChange={() =>
                        setSelectedJobType((prev) =>
                          prev.includes(type)
                            ? prev.filter((t) => t !== type)
                            : [...prev, type]
                        )
                      }
                    />
                    <span>{type}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Tags Filter */}
          <div className="mb-6">
            <h2 className="font-semibold text-base mb-2">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {["Web Design", "Squarespace", "Layout Design", "Web Development", "React", "Full Stack"].map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-sm rounded-full ${
                    filterTags.includes(tag)
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

          {/* Clear Filters Button */}
          <button
            className="w-full py-3 bg-blue text-white font-bold rounded-lg hover:bg-green-500"
            onClick={() => {
              setSearchTerm("");
              setSelectedCategories([]);
              setSelectedJobType([]);
              setFilterTags([]);
            }}
          >
            Clear Filters
          </button>
        </div>

        {/* Job Listings */}
        <div className="lg:w-3/4 w-full sm:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center bg-white py-4 px-2 lg:px-6 border-b border-gray-200">
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
              <button className="p-2 rounded hover:bg-gray-100 border">
                <FiList className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>

          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-4 bg-white shadow rounded-lg mb-4"
            >
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
                <button className="bg-blue text-white px-4 py-2 rounded-lg hover:bg-darkblue">
                  Apply Now
                </button>
                <p className="text-gray-500">
                  Deadline:{" "}
                  <span className="font-bold">{job.deadline}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Joblist;
