import FirstSection from "../../components/MainSection/FirstMainSection";
import SecondSection from "../../components/MainSection/SecondMainSection";
import FourthMainSection from "../../components/MainSection/FourthMainSection";
import MainDashCalendar from "../../components/Calendar/MainDashCalendar";
import TableComponent from "../../components/Tables/Table";

const Analytics = () => {
  return (
    <div className="mt-14 mx-auto">
      <div className="flex flex-wrap gap-y-3 justify-between mb-8">
        <h3 className="h3 font-semibold">Analytics ✨</h3>
        <div className="main-content border border-gray-200 py-[8px] px-2 min-w-64 rounded-md hover:border-gray-400 cursor-pointer">
            <MainDashCalendar />
          </div>
      </div>
      <div>
        <FirstSection />
        <SecondSection />
        <FourthMainSection />
        <TableComponent/>
      </div>
    </div>
  );
};

export default Analytics;
