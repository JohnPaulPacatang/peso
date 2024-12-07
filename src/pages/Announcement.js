import React from "react";
import announcement1 from "../assets/announcement1.png";
import announcement2 from "../assets/announcement2.png";
import announcement3 from "../assets/announcement3.png";

const Announcement = () => {
  return (
    <div className="bg-gray-100 pt-32 lg:px-32 md:px-32 px-8 pb-12">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Announcement 1 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <img
                src={announcement1}
                alt="Mega Job Fair"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <p className="text-sm text-gray-500 text-right">December 6, 2024</p>
              <h1 className="text-3xl font-bold pt-4 text-darkblue mb-4">MEGA JOB FAIR</h1>
              <p className="text-gray-700 mb-4">
                To our fellow citizens who are looking for jobs, I warmly invite you to attend our upcoming Mega Job Fairs in the city:
              </p>
              <ul className="text-gray-700 mb-4 space-y-2">
                <li>
                  <strong className="text-darkblue">SM Caloocan:</strong> December 17, 2024, 9:00am – 4:00pm
                  (3rd Floor, SM Caloocan, Bagumbong, Caloocan City – North)
                </li>
                <li>
                  <strong className="text-darkblue">SM Grand Central:</strong> October 11, 2024, 9:00am – 4:00pm 
                  (5th Floor, SM Grand Central, Monumento, Caloocan City – South)
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Thousands of job vacancies are waiting for you. Many thanks to our Caloocan Public Employment Service Office (PESO) and our partner companies and agencies.
              </p>
              <p className="text-gray-700 mb-4">
                Mga Batang Kankaloo, kindly bring your resumes and valid ID.
              </p>
              <p className="text-darkblue font-semibold">#AksyonAtMalasakit</p>
            </div>
          </div>
        </div>

        {/* Announcement 2 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <img
                src={announcement2}
                alt="Event Announcement 2"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <p className="text-sm text-gray-500 text-right">November 20, 2024</p>
              <h1 className="text-3xl font-bold pt-4 text-darkblue mb-4">EVENT ANNOUNCEMENT</h1>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec felis in odio aliquet vehicula sit amet a nulla.
              </p>
              <ul className="text-gray-700 mb-4 space-y-2">
                <li>
                  <strong className="text-darkblue">Location 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  <strong className="text-darkblue">Location 2:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet lacus vel justo dapibus varius.
              </p>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-darkblue font-semibold">#LoremIpsumEvent</p>
            </div>
          </div>
        </div>

        {/* Announcement 3 */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-4">
              <img
                src={announcement3}
                alt="Event Announcement 3"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="md:w-1/2 p-6">
              <p className="text-sm text-gray-500 text-right">October 5, 2024</p>
              <h1 className="text-3xl font-bold pt-4 text-darkblue mb-4">ANOTHER EVENT</h1>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris suscipit elit nec urna malesuada, vel pellentesque ligula cursus.
              </p>
              <ul className="text-gray-700 mb-4 space-y-2">
                <li>
                  <strong className="text-darkblue">Venue 1:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  <strong className="text-darkblue">Venue 2:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer id erat euismod, sollicitudin mi in, laoreet augue.
              </p>
              <p className="text-gray-700 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="text-darkblue font-semibold">#AnotherEventTag</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Announcement;