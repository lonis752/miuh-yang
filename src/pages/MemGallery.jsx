import MemGalleryComp from "../components/MemGallleryComp";
import { SideMenu } from "../components/SideMenu";

function MemGallery() {
  return (
    <>
      <div className="flex justify-around md:gap-8">
        <SideMenu />
        <div><MemGalleryComp /></div>
        
      </div>
    </>
  );
}

export default MemGallery;
