import React, { useState } from "react";
import Arrow1 from "../../data/svg/arrow1.svg";
import MyInput from "../../components/MyInput";
import SwitchButton from "../../components/SwitchButton";
import MyButton from "../../components/MyButton";
import { useImageContext } from "../../contexts/ImageContext";

const SettingsAccount = () => {
  const [inputValue, setInputValue] = useState("amin@acmeinc.com");
  const { setImage } = useImageContext();
  const [imageFile, setImageFile] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFile(file); 
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    const fileInput = document.getElementById("upload");
    if (fileInput) {
      fileInput.click();
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSwitchChange = (isChecked) => {
    console.log("Switch is checked:", isChecked);
  };

  return (
    <>
      <h1 className="text-xl font-bold">My Account</h1>
      <div className="mt-5">
        <div className="flex gap-x-3 items-center">
          <div className="w-16 h-16 rounded-full bg-sidepanel">
            <div className="flex items-center gap-x-5">
              <img
                className="p-4"
                src={imageFile ? URL.createObjectURL(imageFile) : Arrow1}
                alt={imageFile ? "user-profile" : "arrow"}
              />
              <MyButton
                backgroundColor="main-color"
                customColor="white"
                size="xs"
                text="Change"
                onClick={handleButtonClick}
              />
            </div>
            <input
              type="file"
              id="upload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>
        </div>
        <div className="mt-5 flex-wrap">
          <h1 className="text-lg">Buisness Profile</h1>
          <p className="text-xs text-gray-400 mt-1">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit.
          </p>
          <div className="mt-10 flex gap-x-3">
            <MyInput
              size="small"
              upLabel="Buisness Name"
              placeHolder="Acme Inc."
            />
            <MyInput
              size="small"
              upLabel="Buisness ID"
              placeHolder="Kz4tSEqtUmA"
            />
            <MyInput size="small" upLabel="Location" placeHolder="London, UK" />
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-lg">Email</h1>
          <p className="text-xs text-gray-400 mt-1">
            Excepteur sint occaecat cupidatat non proident sunt in culpa qui
            officia.
          </p>
          <div className="mt-3 flex items-center gap-x-3 w-[290px]">
            <MyInput size="small" placeHolder={inputValue} />
            <span className="mt-1">
              <MyButton size="medium" text="Change" customColor="logo" />
            </span>
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-lg">Password</h1>
          <p className="text-xs text-gray-400 mt-1">
            You can set a permanent password if you don't want to use temporary
            login codes.
          </p>
          <div className="mt-2">
            <MyButton size="small" customColor="logo" text="Set New Password" />
          </div>
        </div>
        <div className="mt-5">
          <h1 className="text-lg">Smart Sync update for Mac</h1>
          <p className="text-xs text-gray-400 mt-1">
            With this update, online-only files will no longer appear to take up
            hard drive space.
          </p>
          <div className="mt-4">
            <SwitchButton onChange={handleSwitchChange} checked={true} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SettingsAccount;
