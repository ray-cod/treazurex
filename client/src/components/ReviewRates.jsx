import { FaStar } from "react-icons/fa";

const ReviewRates = () => {
  return (
    <div id="reviews-rates" className="flex items-center gap-10 mb-6">
      <div className="flex flex-col items-center gap-2">
        <h4 className="font-bold text-3xl">5.0</h4>
        <div className="flex items-center gap-1">
          <FaStar className="text-amber-500" />
          <FaStar className="text-amber-500" />
          <FaStar className="text-amber-500" />
          <FaStar className="text-amber-500" />
          <FaStar className="text-amber-500" />
        </div>
        <p className="text-gray-400">124 reviews</p>
      </div>
      <ul className="w-full md:w-1/2">
        <li className="flex items-center gap-4 mb-2">
          <span>5</span>
          <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
            <div className="bg-green-600 h-2.5 rounded-full w-[80%]"></div>
          </div>
          <span>80%</span>
        </li>
        <li className="flex items-center gap-4 mb-2">
          <span>4</span>
          <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
            <div className="bg-green-600 h-2.5 rounded-full w-[50%]"></div>
          </div>
          <span>50%</span>
        </li>
        <li className="flex items-center gap-4 mb-2">
          <span>3</span>
          <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
            <div className="bg-green-600 h-2.5 rounded-full w-[20%]"></div>
          </div>
          <span>20%</span>
        </li>
        <li className="flex items-center gap-4 mb-2">
          <span>2</span>
          <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
            <div className="bg-green-600 h-2.5 rounded-full w-[0%]"></div>
          </div>
          <span>00%</span>
        </li>
        <li className="flex items-center gap-4 mb-2">
          <span>1</span>
          <div className="w-full bg-blue-200 h-2.5 overflow-hidden rounded-full">
            <div className="bg-green-600 h-2.5 rounded-full w-[30%]"></div>
          </div>
          <span>30%</span>
        </li>
      </ul>
    </div>
  );
}

export default ReviewRates