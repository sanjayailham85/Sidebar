import React from 'react';
import { IoIosPlanet } from 'react-icons/io';
import {
  FiAnchor,
  FiBell,
  FiBox,
  FiCloudLightning,
  FiCompass,
} from 'react-icons/fi';
import { AiOutlineSetting } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex-1 flex-col bg-slate-600/60 text-white shadow-md">
      <div className="mt-16">
        <SideBarIcon icon={<IoIosPlanet size="32  " />} />
        <SideBarIcon icon={<FiAnchor size="25" />} />
        <SideBarIcon icon={<FiBell size="25" />} />
        <SideBarIcon icon={<FiBox size="25" />} />
        <SideBarIcon icon={<FiCloudLightning size="25" />} />
        <SideBarIcon icon={<FiCompass size="25" />} />
        <SideBarIcon icon={<AiOutlineSetting size="25" />} />
      </div>
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'hi' }) => (
  <div className="sidebar-icon group mt-5">
    {icon}
    <span className="sidebar-text group-hover:scale-100">{text}</span>
  </div>
);
export default Sidebar;
