import MemGalleryComp from "../components/MemGallleryComp";
import { usePageMeta } from "../lib/usePageMeta";

function MemGallery() {
  usePageMeta(
    "3,227,082 Stitches | Miuh Yang",
    "A textile memorial to the fallen of the Korean War, one stitch for each of 3,227,082 service members from 23 nations."
  );
  return <MemGalleryComp />;
}

export default MemGallery;
