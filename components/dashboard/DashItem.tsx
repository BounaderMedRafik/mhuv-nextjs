import React from "react";

const DashItem = ({
  pic,
  name,
  email,
  phone,
}: {
  pic: string;
  name: string;
  email: string;
  phone: string;
}) => {
  return (
    <div className=" max-w-3xl p-2 border border-black/50 rounded-md flex items-center justify-between">
      <div className="h-full w-[30%] overflow-hidden rounded-md">
        <img
          className=" w-full  h-full object-cover object-center "
          src={pic}
        />
      </div>
      <div>
        <div>
          <div className="font-semibold text-2xl">
            الاسم : <span className=" font-black text-green-500">{name}</span>
          </div>
          <div className="font-semibold text-2xl ">
            الايمايل :{" "}
            <span className="font-black text-green-500">{email}</span>
          </div>
          <div className="font-black text-2xl ">
            الهاتف : <span className="text-green-500">{phone}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashItem;
