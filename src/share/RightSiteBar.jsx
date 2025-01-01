import LinkRightSite from "./rightSiteComponents/LinkRightSite";
import Qzone from "./rightSiteComponents/Qzone";
import RightSiteLogin from "./rightSiteComponents/RightSiteLogin";


const RightSiteBar = () => {
  return (
    <div className="p-4 space-y-6">
      <RightSiteLogin></RightSiteLogin>
      <LinkRightSite></LinkRightSite>
      <Qzone></Qzone>
    </div>
  );
};

export default RightSiteBar;
