import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeftCircle } from "lucide-react";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 px-5">
      <div className="text-center">

        {/* 404 Text */}
        <h1 className="text-7xl font-extrabold text-red-600 mb-4">404</h1>

        <h2 className="text-3xl font-semibold mb-2">Page Not Found</h2>

        <p className="text-gray-600 mb-8">
          Oops! The page you are looking for doesn’t exist.
        </p>

        {/* Back Button */}
        <Link
          to="/home"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl shadow-lg transition-all"
        >
          <ArrowLeftCircle size={22} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
