import { FaRegClipboard, FaRegQuestionCircle, FaUserAlt, FaGraduationCap } from 'react-icons/fa';

const HowItWorks = () => {
    return (
        <div className="bg-gray-100 py-16 px-8 lg:px-48">
            <div className="text-center mb-12">
                <h2 className="text-blue text-sm font-bold uppercase">Our Work Process</h2>
                <h3 className="text-3xl font-bold text-gray-800 mt-2">How it Works?</h3>
            </div>
            <div className="flex justify-center items-start space-x-12">
                {/* Step 1 */}
                <div className="text-center max-w-sm">
                    <div className="flex justify-center items-center w-16 h-16 bg-blue rounded-full mx-auto">
                        <FaRegClipboard className="text-white text-3xl" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mt-4">Register Your Account</h4>
                    <p className="text-sm text-gray-500 mt-2">
                        You need to create an account to find your best-preferred job.
                    </p>
                </div>

                {/* Step 2 */}
                <div className="text-center max-w-sm">
                    <div className="flex justify-center items-center w-16 h-16 bg-blue rounded-full mx-auto">
                        <FaRegQuestionCircle className="text-white text-3xl" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mt-4">We Here to Help You</h4>
                    <p className="text-sm text-gray-500 mt-2">
                        You need to create an account to find your best-preferred job.
                    </p>
                </div>

                {/* Step 3 */}
                <div className="text-center max-w-sm">
                    <div className="flex justify-center items-center w-16 h-16 bg-blue rounded-full mx-auto">
                        <FaUserAlt className="text-white text-3xl" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mt-4">Complete Your Profile</h4>
                    <p className="text-sm text-gray-500 mt-2">
                        You need to create an account to find your best-preferred job.
                    </p>
                </div>

                {/* Step 4 */}
                <div className="text-center max-w-sm">
                    <div className="flex justify-center items-center w-16 h-16 bg-blue rounded-full mx-auto">
                        <FaGraduationCap className="text-white text-3xl" />
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mt-4">Apply Job or Hire</h4>
                    <p className="text-sm text-gray-500 mt-2">
                        You need to create an account to find your best-preferred job.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
