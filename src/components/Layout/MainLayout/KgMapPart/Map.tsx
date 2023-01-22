import React, { FC } from "react";

//DEFAULT REGION IMPORTS
import TalasSVG from "./Assets/KGZ1121Talas.svg";
import OshSVG from "./Assets/KGZ1122Osh.svg";
import DAbadSVG from "./Assets/KGZ1120D-Abad.svg";
import BatkenSVG from "./Assets/KGZ1119Batken.svg";
import NarynSVG from "./Assets/KGZ1118Naryn.svg";
import ChuiSVG from "./Assets/KGZ1116Chui.svg";
import IKSVG from "./Assets/KGZ1117IK.svg";

//CUSTOM RED-REGIONS IMPORTS
import REDTalasSVG from "./Assets/RedRegions/KGZ1121RedTalas.svg";
import REDOshSVG from "./Assets/RedRegions/KGZ1122RedOsh.svg";
import REDDAbadSVG from "./Assets/RedRegions/KGZ1120RedD-Abad.svg";
import REDBatkenSVG from "./Assets/RedRegions/KGZ1119RedBatken.svg";
import REDNarynSVG from "./Assets/RedRegions/KGZ1118RedNaryn.svg";
import REDChuiSVG from "./Assets/RedRegions/KGZ1116RedChui.svg";
import REDIkSVG from "./Assets/RedRegions/KGZ1117RedIK.svg";

//ЕЩЕ НЕ ДОРАБОТАННО!.

function Map() {
  return (
    <div className="">
      <div className="flex justify-center   relative  min-w-max    items-center   ">
        <div className=" flex relative left-14  ">
          <div className=" relative  top-1">
            <img
              src={TalasSVG}
              className="    transition-all cursor-pointer relative left-6 top-REDTalasSpacing hover  "
            />

            <img
              src={DAbadSVG}
              className=" transition-all cursor-pointer hover  relative top-1 -left-7  "
            />
            <div className="flex   relative -left-REDOshAndBatkenDivSpacing bottom-REDOshAndBatkenDivSpacingBottom">
              <img
                src={BatkenSVG}
                className="  transition-all cursor-pointer   relative left-leftSpacing top-8 hover:scale-105"
              />
              <img
                src={OshSVG}
                className="   transition-all cursor-pointer hover:scale-105 "
              />
            </div>
          </div>

          <div className=" relative right-rightSpacing  bottom-5">
            <img
              src={ChuiSVG}
              className="  relative  -left-1 hover transition-all cursor-pointer"
            />
            <img
              src={NarynSVG}
              className="   relative left-12 bottom-16  hover:scale-105  transition-all cursor-pointer"
            />
            <img
              src={IKSVG}
              className="  relative bottom-BottomSpacing left-LeftIKSpacing hover:scale-105 transition-all cursor-pointer"
            />
          </div>
        </div>

        <div className=" flex   absolute z-50   right-28  ">
          <div className=" relative  top-1">
            <img
              src={REDTalasSVG}
              className=" opacity-0 hover:opacity-100   transition-all cursor-pointer relative left-6 top-REDTalasSpacing : "
            />

            <img
              src={REDDAbadSVG}
              className=" opacity-0 hover:opacity-100 transition-all cursor-pointer hover  relative top-1 -left-7  "
            />
            <div className="flex   relative -left-REDOshAndBatkenDivSpacing bottom-REDOshAndBatkenDivSpacingBottom">
              <img
                src={REDBatkenSVG}
                className=" opacity-0 hover:opacity-100  transition-all cursor-pointer   relative left-leftSpacing top-8 "
              />
              <img
                src={REDOshSVG}
                className=" opacity-0 hover:opacity-100  transition-all cursor-pointer "
              />
            </div>
          </div>

          <div className="relative right-rightSpacing  bottom-5">
            <img
              src={REDChuiSVG}
              className=" opacity-0 hover:opacity-100 relative  -left-1 hover transition-all cursor-pointer  "
            />
            <img
              src={REDNarynSVG}
              className=" opacity-0 hover:opacity-100 relative left-12 bottom-16  hover  transition-all cursor-pointer "
            />
            <img
              src={REDIkSVG}
              className=" opacity-0 hover:opacity-100  relative bottom-BottomSpacing left-LeftIKSpacing hover transition-all cursor-pointer "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
