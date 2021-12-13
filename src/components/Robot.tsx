import React from "react";
import style from './Robot.module.css'

interface RobotProps {
  id: number;
  name: string;
  email: string;
}

const Robot: React.FC<RobotProps> = ({ id, name, email }) => {
  return (
    <li className={style.cardContainer}>
      <img src={`https://robohash.org/${id}`}/>
      <h2>{name}</h2>
      <p>{email}</p>
    </li>
  );
};

export default Robot;
