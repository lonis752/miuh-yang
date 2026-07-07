import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import ImageMagnifier from "./ImageMagnifier";
import GalleryPiece from "./GalleryPiece";
import { ik } from "../lib/imagekit";
import {
  koreanWarPieces,
  installationTitle,
  installationText,
} from "../data/koreanWarPieces";

function MemGalleryComp() {
  const [active, setActive] = useState(null); // { piece, side } | null

  const open = (piece, side) => setActive({ piece, side });
  const close = () => setActive(null);

  return (
    <div className="p-10 flex flex-col gap-10">
      <h1 className="text-lg sm:text-3xl md:text-3xl font-bold">
        {installationTitle}
      </h1>
      <p className="border-b p-10">{installationText[0]}</p>

      {koreanWarPieces.map((piece, i) => (
        <div key={piece.country} className="flex flex-col gap-10">
          <GalleryPiece piece={piece} index={i} onOpen={open} />
          {i === 0 && <p className="border-t pt-10">{installationText[1]}</p>}
        </div>
      ))}

      <Dialog open={active !== null} onClose={close} className="relative z-20">
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-screen space-y-4 border bg-white p-12">
            {active && (
              <>
                <DialogTitle className="font-bold flex justify-between gap-8">
                  <span>
                    <strong>{active.piece.country}</strong> ({active.side})
                  </span>
                  <button className="text-red-700" onClick={close}>
                    Close
                  </button>
                </DialogTitle>
                <div className="flex flex-col gap-5 items-center">
                  <ImageMagnifier
                    className="png object-contain rounded-sm w-2/4"
                    alt={`${active.piece.country} memorial garment, ${active.side}`}
                    src={ik(active.piece[active.side], { w: 1200 })}
                  />
                  <p>
                    <strong>Stitches:</strong> {active.piece.stitches}
                  </p>
                  <p>
                    <strong>Size:</strong> {active.piece.size}
                  </p>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

export default MemGalleryComp;
