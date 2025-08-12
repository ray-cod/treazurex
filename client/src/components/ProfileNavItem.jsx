import React from 'react'

const ProfileNavItem = ({ label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`px-3 py-2 rounded-lg text-sm cursor-pointer ${
        active
          ? "bg-gray-400 dark:bg-gray-700 font-semibold"
          : "hover:bg-gray-400 dark:hover:bg-gray-700"
      }`}
    >
      {label}
    </div>
  );
};

export default ProfileNavItem