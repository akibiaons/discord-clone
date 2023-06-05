import React from "react";
import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
      <img src="../gracie-rocks-logo.png" alt="rock logo" /> {/* Got the image to finally work and it fits in the sidebar */}
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'tooltip ' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);
