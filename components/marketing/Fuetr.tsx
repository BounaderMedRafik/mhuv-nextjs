import React from "react";

const fuet = [
  {
    title: "المؤسسة العامة للرعاية السكنية تعلن عن افتتاح توزيعات جديدة",
    pic: "/photo2.png",
  },
  {
    title: "فرصة جديدة لامتلاك منزل: بدء توزيعات سكنية في الجزائر",
    pic: "/photo3.png",
  },
  {
    title: "البشرى لمنتظري السكن: توزيعات سكنية",
    pic: "/photo4.png",
  },
];

const Fuetr = () => {
  return (
    <div className=" border-t border-black/20">
      <div className="wrapper flex items-center gap-2 py-32">
        {fuet.map((item, i) => (
          <div className=" max-w-lg p-5 border border-black/50 rounded-lg flex flex-col gap-10 py-10">
            <div className="text-4xl font-black text-center">{item.title}</div>
            <div>
              <img src={item.pic} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fuetr;
