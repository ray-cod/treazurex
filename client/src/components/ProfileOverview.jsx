import { Box, Clock, Heart, TrendingUp } from "lucide-react";
import SummaryCard from "./SummaryCard";

const ProfileOverview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <SummaryCard
        title="Lifetime orders"
        value="24"
        note="This month"
        icon={<Box />}
        iconColor="text-blue-500"
      />
      <SummaryCard
        title="Items saved"
        value="8"
        note="2 recent"
        icon={<Heart />}
        iconColor="text-yellow-500"
      />
      <SummaryCard
        title="Last order"
        value="3 days"
        note="Delivered"
        icon={<Clock />}
        iconColor="text-green-500"
      />
      <SummaryCard
        title="Premium member"
        value="2022"
        note="2 years"
        icon={<TrendingUp />}
        iconColor="text-yellow-500"
      />
    </div>
  );
};

export default ProfileOverview;
