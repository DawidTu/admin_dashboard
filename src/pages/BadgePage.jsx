import React from "react";
import Badge from "../components/Badge";
import lightning from "../data/svg/lightning.svg";

const BadgePage = () => {
  return (
    <div className="mt-14 mx-auto h-screen">
      <div className="border-b pb-10">
        <h3 className="h3 font-semibold">Badge ✨</h3>
      </div>
      <div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Basic Small</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center">
            <Badge
              backgroundColor="indigo"
              textColor="indigo"
              textSize="xs"
              value="Working on"
            />
            <Badge
              backgroundColor="blue"
              textColor="blue"
              textSize="xs"
              value="Exciting news"
            />
            <Badge
              backgroundColor="green"
              textColor="green"
              textSize="xs"
              value="Product"
            />
            <Badge
              backgroundColor="yellow"
              textColor="yellow"
              textSize="xs"
              value="Announcement"
            />
            <Badge
              backgroundColor="orange"
              textColor="orange"
              textSize="xs"
              value="Big Fix"
            />
            <Badge
              backgroundColor="purple"
              textColor="purple"
              textSize="xs"
              value="Customer Stories"
            />
            <Badge
              backgroundColor="gray"
              textColor="gray"
              textSize="xs"
              value="All Stories"
            />
            <Badge
              backgroundColor="black"
              textColor="white"
              textSize="xs"
              value="All Stories"
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Basic Large</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center">
            <Badge
              backgroundColor="indigo"
              textColor="indigo"
              textSize="md"
              value="Working on"
            />
            <Badge
              backgroundColor="blue"
              textColor="blue"
              textSize="md"
              value="Exciting news"
            />
            <Badge
              backgroundColor="green"
              textColor="green"
              textSize="md"
              value="Product"
            />
            <Badge
              backgroundColor="yellow"
              textColor="yellow"
              textSize="md"
              value="Announcement"
            />
            <Badge
              backgroundColor="orange"
              textColor="orange"
              textSize="md"
              value="Big Fix"
            />
            <Badge
              backgroundColor="purple"
              textColor="purple"
              textSize="md"
              value="Customer Stories"
            />
            <Badge
              backgroundColor="gray"
              textColor="gray"
              textSize="md"
              value="All Stories"
            />
            <Badge
              backgroundColor="black"
              textColor="white"
              textSize="md"
              value="All Stories"
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Basic with Icon</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center">
            <Badge
              icon={<img className="h-6" src={lightning} alt="" />}
              backgroundColor="black"
              textColor="white"
              textSize="xs"
              value="Special Offer"
            />
            <Badge
              icon={<img className="h-6" src={lightning} alt="" />}
              backgroundColor="black"
              textColor="white"
              textSize="sm"
              value="Special Offer"
            />
          </div>
        </div>
        <div className="my-8">
          <h3 className="font-semibold text-2xl">Basic for Charts</h3>
          <div className="mt-5 flex flex-wrap gap-y-3 gap-x-3 items-center">
            <Badge
              backgroundColor="green"
              textColor="green"
              textSize="xs"
              value="+29%"
            />
            <Badge
              backgroundColor="yellow"
              textColor="white"
              textSize="sm"
              value="-14%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BadgePage;
