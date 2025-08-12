import React from 'react'

const SummaryCard = ({ title, value, note, icon, iconColor }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-900 p-6 rounded-xl shadow border-gray-800 max-md:flex max-md:flex-col max-md:items-center max-md:justify-center transition-transform duration-200 ease-in-out hover:-translate-y-0.5">
      {icon && <div className={`text-2xl mb-1 ${iconColor}`}>{icon}</div>}
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{title}</div>
      {note && (
        <div className="text-[11px] text-gray-600 dark:text-gray-400 mt-1">
          {note}
        </div>
      )}
    </div>
  );
};

export default SummaryCard