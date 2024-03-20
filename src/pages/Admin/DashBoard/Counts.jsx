import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import { UsersRound } from "lucide-react";

function Counts() {
  return (
    <div className="flex flex-col w-full items-start justify-start">
      <div className="w-full">
        <CardContainer className="inter-var w-full">
          <CardBody className="w-full bg-gradient-to-r  from-[#8884d8] to-[#82ca9d] p-6 rounded-xl text-white shadow-lg h-fit border-2 border-purple-500 ">
            <CardItem className="w-full" translateZ="30">
              <div className="flex flex-col w-full gap-x-4">
                <div className="flex flex-row w-full justify-between pr-5">
                  <p className="font-medium text-xl">Total Students</p>
                  <UsersRound size={70} className="opacity-70" />
                </div>
                <p className="text-4xl font-semibold">234</p>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
      <div className="flex flex-row items-center gap-6">
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-r from-[#8884d8] to-[#82ca9d] mt-6 p-6 rounded-xl text-white shadow-lg h-fit border-2 border-purple-500 ">
            <CardItem translateZ="30">
              <div className="flex flex-col gap-4">
                <p className="font-medium text-xl">Fees Partial</p>
                {/* <ReceiptIndianRupee size={35} /> */}
                <p className="text-3xl font-bold text-red-500 bordered-text">
                  45
                </p>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
        <CardContainer className="inter-var">
          <CardBody className="bg-gradient-to-r  from-[#82ca9d] to-[#8884d8] mt-6 p-6 rounded-xl text-white shadow-lg h-fit border-2 border-purple-500 ">
            <CardItem translateZ="30">
              <div className="flex flex-col gap-4">
                <p className="font-medium text-xl">Fees Pending</p>
                {/* <ReceiptIndianRupee size={35} /> */}
                <p className="text-3xl font-bold text-red-500 bordered-text">
                  45
                </p>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}

export default Counts;
