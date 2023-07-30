import React, { useState } from "react";
import { ParentContainer, Circle } from "../styles/styledComponents/Container";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import AccountBalanceRoundedIcon from "@mui/icons-material/AccountBalanceRounded";
import BorderColorRoundedIcon from "@mui/icons-material/BorderColorRounded";
import BoltRoundedIcon from "@mui/icons-material/BoltRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import DirectionsWalkRoundedIcon from "@mui/icons-material/DirectionsWalkRounded";
import FingerprintRoundedIcon from "@mui/icons-material/FingerprintRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";

const SinCos = () => {
  const [icons, setIcons] = useState([
    AddCircleOutlineRoundedIcon,
    AccountBalanceRoundedIcon,
    BorderColorRoundedIcon,
    BoltRoundedIcon,
    CallRoundedIcon,
    DirectionsWalkRoundedIcon,
    FingerprintRoundedIcon,
    HeadsetMicRoundedIcon,
  ]);
  const renderCircles = () => {
    const circles = [];
    for (let i = 0; i < icons?.length; i++) {
        let Icon = icons[i]
      const key = `circle_${i}`;
      circles.push(<Circle key={key}><Icon /></Circle>);
    }
    return circles;
  };
  return <ParentContainer>{renderCircles()}</ParentContainer>;
};

export default SinCos;
