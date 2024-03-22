import ProgresBar from "../ProgresBar";

const SettingsFeed = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Give Feedback</h1>
      <p className="my-4 text-sm text-gray-500">Our product depends on customer feedback to improve the overall experience!</p>
      <div>
        <h1 className="text-xl font-semibold my-6">How likely would you recommend us to a friend or colleague?</h1>
        <div className="w-full">
          <ProgresBar/>
        </div>
        <div>
          <h1 className="text-xl font-semibold my-6">Tell us in words</h1>
          <textarea className="border hover:border-gray-300 w-full p-3 rounded outline-none" rows="4" cols="5" placeholder="I really enjoy..."/>
        </div>
      </div>
    </div>
  );
};

export default SettingsFeed;
