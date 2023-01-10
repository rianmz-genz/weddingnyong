import React, {FC} from "react";

const Profile: FC<ProfileProps> = ({
    imageSrc,
    name,
    gmail,
    username
}) => {
  return (
    <div className="w-11/12 h-fit py-2 px-3 rounded-full shadow-[0px_0px_3px_rgba(0,0,0,0.25)] flex items-center">
      <div className="relative w-fit h-full rounded-full">
        <img
          src={imageSrc}
          width={50}
          height={50}
          alt="profile"
        />
        <span className="w-2 h-2 bg-[#00FA19] block absolute right-1 bottom-1 rounded-full"></span>
      </div>
      <div className="flex flex-col justify-center items-start ml-3">
        <h1 className="font-semibold">{name}</h1>
        <p className="text-sm">{username ? username : gmail}</p>
      </div>
    </div>
  );
};

export default Profile;
