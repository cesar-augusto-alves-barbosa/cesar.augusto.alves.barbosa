import React from 'react';
import * as Icons from 'react-icons/fa';
import Image from 'next/image'

const Skill = ({name, icon, iconW, iconH }) => {
  return (
    <div className="skill">
        <Image width={iconW} height={iconH} src={icon} alt={`${name} logo`} className="skill_icon" />
        <span>{name}</span>
    </div>
  );
};

export default Skill;