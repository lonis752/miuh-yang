import { useState } from "react";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import ImageMagnifier from "./ImageMagnifier";

function MemGalleryComp() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedDesc, setSelectedDesc] = useState("");

  function handleClick(e) {
    setSelectedImg(e.target.src);
    setSelectedTitle(e.target.id);
    setSelectedSize(e.target.sizes);
    setSelectedDesc(e.target.alt);
    setIsOpen(true);
  }

  return (
    <div className="p-10 flex flex-col gap-10">
      <h1 className="text-lg sm:text-3xl md:text-3xl font-bold">
        3,227,082 Stitches
      </h1>
      <p className="border-b p-10">
        Title of Art Installation: “3,227,082 Stitches” This art installation
        showcases a body of textile work that memorializes the twenty- three
        countries that aided South Korea during the Korean War from 1950-53.
        Each of these countries sent military forces, sanctioned by the United
        Nations, to end the violence in South Korea. The goal of my work is to
        honour the sacrifices of the military men and women during this painful
        period of me.
      </p>

      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Korea</strong>
          </p>
          <p>
            <strong>Title:</strong> 1,269,349
          </p>
          <p>
            <strong>Size:</strong> 165 X 196cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            loading="lazy"
            id="1,269,349"
            sizes="165 X 196cm"
            alt="Korea (Front)"
            className="png zoom object-contain rounded-sm w-2/4"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/KoreaFront.png"
          />
          <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-20"
          >
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
              <DialogPanel className="max-w-screen space-y-4 border bg-white p-12">
                <DialogTitle className="font-bold">
                  <strong>Title:</strong> {selectedTitle}
                </DialogTitle>
                <Description>
                  <strong>{selectedDesc}</strong>
                </Description>
                <div className="flex flex-col gap-5 items-center">
                  <ImageMagnifier
                    loading="lazy"
                    className="png object-contain rounded-sm w-2/4"
                    src={selectedImg}
                  />
                  <p>
                    <strong>Size:</strong> {selectedSize}
                  </p>
                </div>
                <div className="flex gap-4">
                  <button onClick={() => setIsOpen(false)}>Close</button>
                </div>
              </DialogPanel>
            </div>
          </Dialog>
          <img
            onClick={handleClick}
            id="1,269,349"
            sizes="165 X 196cm"
            alt="Korea (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-2/4"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Korea%20Back.png"
          />
        </div>
      </div>
      <p className="border-t pt-10">
        Each country is represented by a garment that expresses the stories,
        experiences and culture of their nation. Some garments also incorporate
        traditional fabrics, like tablecloths and scarves, as a reference to the
        homes and loved ones they left behind. Each stitch represents and
        commemorates each military individual who participated during this
        endeavour. Thus, the number of stitches range from 100 to 1,789,000
        depending on the country. The total number of individuals is 3,227, 082.
        This work was created as an expression of gratitude, healing and hope.
        Despite continuing conflicts around the world today, we all share a
        fundamental wish for peace, understanding and connection. We are woven
        together, like threads in a garment, both strong and fragile, in this
        warp and we of life.
      </p>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="1,269,349"
            sizes="165 X 196cm"
            alt="USA (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/US%20front.png"
          />
          <img
            onClick={handleClick}
            id="1,269,349"
            sizes="165 X 196cm"
            alt="USA (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/US%20back.png"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>United States of America</strong>
          </p>
          <p>
            <strong>Title:</strong> 1,789,000
          </p>
          <p>
            <strong>Size:</strong> 152 X 200cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>United Kingdom</strong>
          </p>
          <p>
            <strong>Title:</strong> 56,000
          </p>
          <p>
            <strong>Size:</strong> 160 X 192cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="56,000"
            sizes="160 X 192cm"
            alt="UK (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/UK%20front.png?updatedAt=1737936821596"
          />
          <img
            onClick={handleClick}
            id="56,000"
            sizes="160 X 192cm"
            alt="UK (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/UK%20BAck.png?updatedAt=1737936821586"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="17,164"
            sizes="112 X 196cm"
            alt="Australia (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Australia%20Front.png?updatedAt=1737936810502"
          />
          <img
            onClick={handleClick}
            id="17,164"
            sizes="112 X 196cm"
            alt="Australia (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Australia%20BAck.png?updatedAt=1737936810510"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Australia</strong>
          </p>
          <p>
            <strong>Title:</strong> 17,164
          </p>
          <p>
            <strong>Size:</strong> 112 X 196cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Netherlands</strong>
          </p>
          <p>
            <strong>Title:</strong> 5,322
          </p>
          <p>
            <strong>Size:</strong> 120 X 172cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="5,322"
            sizes="120 X 172cm"
            alt="Netherlands (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Netherland%20Front.png?updatedAt=1737936817068"
          />
          <img
            onClick={handleClick}
            id="5,322"
            sizes="120 X 172cm"
            alt="Netherlands (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Netherland%20Back.png?updatedAt=1737936816918"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="26,791"
            sizes="132 X 180cm"
            alt="Canada (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Canada%20Front.png?updatedAt=1737936810559"
          />
          <img
            onClick={handleClick}
            id="26,791"
            sizes="132 X 180cm"
            alt="Canada (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Canada%20Back.png?updatedAt=1737936810576"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Canada</strong>
          </p>
          <p>
            <strong>Title:</strong> 26,791
          </p>
          <p>
            <strong>Size:</strong> 132 X 180cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>New Zealand</strong>
          </p>
          <p>
            <strong>Title:</strong> 3,794
          </p>
          <p>
            <strong>Size:</strong> 142 X 156cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="3,794"
            sizes="142 X 156cm"
            alt="New Zealand (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/New%20Zealand%20Front.png?updatedAt=1737936817470"
          />
          <img
            onClick={handleClick}
            id="3,794"
            sizes="142 X 156cm"
            alt="New Zealand (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/New%20Zealand%20back.png?updatedAt=1737936816744"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="3,421"
            sizes="124 X 184cm"
            alt="France (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/France%20Front.png?updatedAt=1737936813775"
          />
          <img
            onClick={handleClick}
            id="3,421"
            sizes="124 X 184cm"
            alt="France (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/France%20Back.png?updatedAt=1737936813737"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>France</strong>
          </p>
          <p>
            <strong>Title:</strong> 3,421
          </p>
          <p>
            <strong>Size:</strong> 124 X 184cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Philippines</strong>
          </p>
          <p>
            <strong>Title:</strong> 7,420
          </p>
          <p>
            <strong>Size:</strong> 112 X 170cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="7,420"
            sizes="112 X 170cm"
            alt="Philippines (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Philippines%20Front.png?updatedAt=1737937504876"
          />
          <img
            onClick={handleClick}
            id="7,420"
            sizes="112 X 170cm"
            alt="Philippines (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Philippines%20Back.png?updatedAt=1737937531733"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="1,124"
            sizes="112 X 160cm"
            alt="Sweden (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Sweden%20Front.png?updatedAt=1737936819860"
          />
          <img
            onClick={handleClick}
            id="1,124"
            sizes="112 X 160cm"
            alt="Sweden (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Sweden%20Back.png?updatedAt=1737936818668"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Sweden</strong>
          </p>
          <p>
            <strong>Title:</strong> 1,124
          </p>
          <p>
            <strong>Size:</strong> 112 X 160cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Türkiye</strong>
          </p>
          <p>
            <strong>Title:</strong> 21,212
          </p>
          <p>
            <strong>Size:</strong> 128 X 184cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="21,212"
            sizes="128 X 184cm"
            alt="Türkiye (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Turkiye%20front.png?updatedAt=1737936820460"
          />
          <img
            onClick={handleClick}
            id="21,212"
            sizes="128 X 184cm"
            alt="Türkiye (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Turkiye%20Back.png?updatedAt=1737936820280"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="6,326"
            sizes="118 X 164cm"
            alt="Thailand (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Thailand%20Front.png?updatedAt=1737936820266"
          />
          <img
            onClick={handleClick}
            id="6,326"
            sizes="118 X 164cm"
            alt="Thailand (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Thailand%20Back.png?updatedAt=1737936820124"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Thailand</strong>
          </p>
          <p>
            <strong>Title:</strong> 6,326
          </p>
          <p>
            <strong>Size:</strong> 118 X 164cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Republic of South Africa</strong>
          </p>
          <p>
            <strong>Title:</strong> 826
          </p>
          <p>
            <strong>Size:</strong> 132 X 152cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="826"
            sizes="132 X 152cm"
            alt="Republic of South Africa (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/South%20Africa%20Front.png?updatedAt=1737936818781"
          />
          <img
            onClick={handleClick}
            id="826"
            sizes="132 X 152cm"
            alt="Republic of South Africa (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/South%20Africa%20Back.png?updatedAt=1737936818973"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="627"
            sizes="112 X 144cm"
            alt="India (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/India%20Front.png?updatedAt=1737936815053"
          />
          <img
            onClick={handleClick}
            id="627"
            sizes="112 X 144cm"
            alt="India (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/India%20Back.png?updatedAt=1737936813923"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>India</strong>
          </p>
          <p>
            <strong>Title:</strong> 627
          </p>
          <p>
            <strong>Size:</strong> 112 X 144cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Greece</strong>
          </p>
          <p>
            <strong>Title:</strong> 4,992
          </p>
          <p>
            <strong>Size:</strong> 120 X 152cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="4,992"
            sizes="120 X 152cm"
            alt="Greece (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Greece%20Front.png?updatedAt=1737936815310"
          />
          <img
            onClick={handleClick}
            id="4,992"
            sizes="120 X 152cm"
            alt="Greece (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Greece%20Back.png?updatedAt=1737936813781"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="3,498"
            sizes="110 X 153cm"
            alt="Belgium (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Belgium%20Front.png?updatedAt=1737936810567"
          />
          <img
            onClick={handleClick}
            id="3,498"
            sizes="110 X 153cm"
            alt="Belgium (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Belgium%20Back.png?updatedAt=1737936810577"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Belgium</strong>
          </p>
          <p>
            <strong>Title:</strong> 3,498
          </p>
          <p>
            <strong>Size:</strong> 110 X 153cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Luxembourg</strong>
          </p>
          <p>
            <strong>Title:</strong> 100
          </p>
          <p>
            <strong>Size:</strong> 101 X 153cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="100"
            sizes="101 X 153cm"
            alt="Luxembourg (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Luxembourg%20Front.png?updatedAt=1737936816737"
          />
          <img
            onClick={handleClick}
            id="100"
            sizes="101 X 153cm"
            alt="Luxembourg (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Luxembourg%20Back.png?updatedAt=1737936816310"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="630"
            sizes="176 X 144cm"
            alt="Denmark (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Denmark%20Front.png?updatedAt=1737936810538"
          />
          <img
            onClick={handleClick}
            id="630"
            sizes="176 X 144cm"
            alt="Denmark (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Denmark%20Back.png?updatedAt=1737936810512"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Denmark</strong>
          </p>
          <p>
            <strong>Title:</strong> 630
          </p>
          <p>
            <strong>Size:</strong> 176 X 144cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Ethiopia</strong>
          </p>
          <p>
            <strong>Title:</strong> 3,518
          </p>
          <p>
            <strong>Size:</strong> 108 X 200cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="3,518"
            sizes="108 X 200cm"
            alt="Ethiopia (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Ethiopia%20Front.png?updatedAt=1737936813727"
          />
          <img
            onClick={handleClick}
            id="3,518"
            sizes="108 X 200cm"
            alt="Ethiopia (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Ethiopia%20Back.png?updatedAt=1737936813339"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="1,789,000"
            sizes="152 X 200cm"
            alt="Columbia (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Columbia%20Front.png?updatedAt=1737936810526"
          />
          <img
            onClick={handleClick}
            id="5,100"
            sizes="132 X 166cm"
            alt="Columbia (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Columbia%20Back.png?updatedAt=1737936810516"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Columbia</strong>
          </p>
          <p>
            <strong>Title:</strong> 5,100
          </p>
          <p>
            <strong>Size:</strong> 132 X 166cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Norway</strong>
          </p>
          <p>
            <strong>Title:</strong> 623
          </p>
          <p>
            <strong>Size:</strong> 160 X 160cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="623"
            sizes="160 X 160cm"
            alt="Norway (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/3"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Norway%20Front.png?updatedAt=1737936817499"
          />
          <img
            onClick={handleClick}
            id="623"
            sizes="160 X 160cm"
            alt="Norway (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Norway%20Back.png?updatedAt=1737936817606"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="128"
            sizes="80 X 176cm"
            alt="Italy (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Italy%20front.png?updatedAt=1737936816662"
          />
          <img
            onClick={handleClick}
            id="128"
            sizes="80 X 176cm"
            alt="Italy (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/Italy%20Back.png?updatedAt=1737936816670"
          />
        </div>
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Italy</strong>
          </p>
          <p>
            <strong>Title:</strong> 128
          </p>
          <p>
            <strong>Size:</strong> 80 X 176cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
      </div>

      <div className="flex flex-col-reverse sm:flex-row sm:pt-16 gap-5 sm:gap-10 justify-center border-t">
        <div className="flex flex-col justify-end min-w-36">
          <p>
            <strong>Germany</strong>
          </p>
          <p>
            <strong>Title:</strong> 117
          </p>
          <p>
            <strong>Size:</strong> 112 X 144cm
          </p>
          <p>
            <strong>Media:</strong> Fabric, Yarn
          </p>
        </div>
        <div className="flex gap-16 p-5 pr-16">
          <img
            onClick={handleClick}
            id="117"
            sizes="112 X 144cm"
            alt="Germany (Front)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/germany%20front.png?updatedAt=1737936814986"
          />
          <img
            onClick={handleClick}
            id="117"
            sizes="112 X 144cm"
            alt="Germany (Back)"
            loading="lazy"
            className="png zoom object-contain rounded-sm w-1/2"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Korean%20War/germany%20back.png?updatedAt=1737936813929"
          />
        </div>
      </div>
    </div>
  );
}

export default MemGalleryComp;
