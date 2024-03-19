import React from "react";
import MyButton from "../../components/MyButton";
import { FiPlus } from "react-icons/fi";
import { MdOutlineModeEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Button = () => {
  return (
    <div className="mt-16 mx-auto h-full">
      <h3 className="h3 font-semibold border-b border-gray-300 pb-10">
        Button ✨
      </h3>
      <div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Appearences</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center">
            <MyButton
              text="Primary"
              backgroundColor="main-color"
              customColor="white"
              size="medium"
            />
            <MyButton text="Secondary" customColor="logo" size="medium" />
            <MyButton text="Tertiary" size="medium" />
            <MyButton
              text="Danger"
              backgroundColor="bg-danger"
              customColor="white"
              size="medium"
            />
            <MyButton text="Danger" customColor="danger" size="medium" />
            <MyButton
              text="Success"
              backgroundColor="bg-success"
              customColor="white"
              size="medium"
            />
            <MyButton text="Success" customColor="success" size="medium" />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">States</h3>
          <div className="mt-5 flex gap-x-3">
            <MyButton
              text="Disabled"
              backgroundColor="gray-300"
              customColor="gray-400"
              size="medium"
            />
            <MyButton
              icon={<AiOutlineLoading3Quarters className="loading-icon"/>}
              text="Loading"
              backgroundColor="gray-300"
              customColor="gray-400"
              size="medium"
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Sizes</h3>
          <div className="mt-5 flex gap-x-3 items-center">
            <MyButton
              text="Button"
              backgroundColor="main-color"
              customColor="white"
              size="xs"
            />
            <MyButton
              text="Button"
              backgroundColor="main-color"
              customColor="white"
              size="small"
            />
            <MyButton
              text="Button"
              backgroundColor="main-color"
              customColor="white"
              size="medium"
            />
            <MyButton
              text="Button"
              backgroundColor="main-color"
              customColor="white"
              size="large"
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Buttons with an Icon</h3>
          <div className="mt-5 flex gap-x-3 items-center">
            <MyButton
              text="Add Event"
              icon={<FiPlus size={18} />}
              backgroundColor="main-color"
              customColor="white"
              size="medium"
            />
            <MyButton
              text="Edit Content"
              icon={<MdOutlineModeEdit size={18} />}
              size="medium"
            />
            <MyButton
              text="Dalete"
              icon={<RiDeleteBinLine size={18} />}
              customColor="danger"
              size="medium"
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Icon Buttons</h3>
          <div className="mt-5 flex gap-x-3 items-center">
            <MyButton
              icon={<FiPlus size={18} />}
              customColor="gray-500"
              size="medium"
            />
            <MyButton
              icon={<MdOutlineModeEdit size={18} />}
              customColor="danger"
              size="medium"
            />
            <MyButton
              icon={<RiDeleteBinLine size={18} />}
              customColor="logo"
              size="medium"
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Button Groups</h3>
          <div className="flex">
            <div group className="my-8">
              <MyButton
                group
                customColor="white"
                backgroundColor="main-color"
                text="Weekly"
                size="medium"
                className
              />
              <MyButton
                group
                customColor="white"
                backgroundColor="main-color"
                text="Monthly"
                size="medium"
              />
              <MyButton
                group
                customColor="white"
                backgroundColor="main-color"
                text="Yearly"
                size="medium"
              />
            </div>
            <div group className="my-8 ml-3">
              <MyButton group customColor="logo" text="Weekly" size="medium" />
              <MyButton group text="Monthly" size="medium" />
              <MyButton group text="Yearly" size="medium" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
