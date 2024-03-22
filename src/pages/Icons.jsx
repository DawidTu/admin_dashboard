import Badge from "../components/Badge";
import MyButton from "../components/MyButton";

const Icons = () => {
  return (
    <div className="mt-14 mx-auto h-screen">
      <div className="border-b pb-10">
        <h3 className="h3 font-semibold">Icons ✨</h3>
      </div>
      <p className="mt-8 text-sm text-gray-500">
        If you need more icons than what we currently support in Mosaic, check
        out these great packs 👇
      </p>
      <div className="mt-7 mb-5 ">
        <div className="flex gap-x-4">
          <h4 className="text-2xl font-semibold">Nucleo</h4>
          <Badge
            value="Recommended"
            backgroundColor="indigo-200"
            textColor="indigo-600"
            textSize="xs"
          />
        </div>
        <div className="bg-[#1e2833] mt-7 flex flex-col xl:flex-row justify-between px-5 py-8 rounded-sm items-center">
          <p className="text-gray-400 text-center xl:text-left">
            99% of the icons used in Mosaic come from Nucleo; a huge library of
            3K+ vector icons!
          </p>
          <div className="flex mt-3 gap-x-3">
            <MyButton
              backgroundColor="main-color"
              customColor="white"
              size="small"
              text="Buy Nucleo"
            />
            <MyButton
              customColor="white"
              backgroundColor="gray-400"
              size="small"
              text="Download free pack"
            />
          </div>
        </div>
      </div>
      <div className="mt-7 mb-5 ">
        <div className="flex gap-x-4">
          <h4 className="text-2xl font-semibold">Tabler Icons</h4>
          <Badge
            value="Free Alternative"
            backgroundColor="[#D1FAE5]"
            textColor="green-600"
            textSize="xs"
          />
        </div>
        <div className="bg-[#1e2833] mt-7 flex flex-col xl:flex-row justify-between px-5 py-8 rounded-sm items-center">
          <p className="text-gray-400 text-center xl:text-left">
            A set of 1250+ icons that are visually consistent with the style
            used in Mosaic!
          </p>
          <div className="mt-3 xl:mt-0">
            <MyButton
              backgroundColor="main-color"
              customColor="white"
              size="small"
              text="Download Tabler Icons"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Icons;
