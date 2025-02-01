import { SideMenu } from "../components/SideMenu";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import ImageMagTextiles from "../components/ImageMagTextiles";

function ShroudGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");

  function handleClick(e) {
    setSelectedImg(e.target.src);
    setIsOpen(true);
  }
  return (
    <>
      <div className="flex justify-around gap-8">
        <SideMenu />
        <div className="p-5 pt-10 flex flex-col items-center gap-5">
          <h1 className="pb-16 text-md sm:text-2xl md:text-3xl font-bold">
            Shroud Work
          </h1>
          <p className="max-w-96 pb-16">
            Death can creep up on you suddenly. While a thousand thoughts crowd
            on my mind, he changed into a new cloth, a shroud and now he is
            ready to walk on the eternal journey. When I faced him I had so much
            regret flooded into my mind. I was his most beloved daughter and he
            was always supportive for my career as a textile designer. Why? Why
            did I not make his cloth?
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190902-LMH-1987.jpg?updatedAt=1738387544640"
              />
              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-20"
              >
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                  <DialogPanel className="max-w-screen space-y-4 border bg-white p-12">
                    <DialogTitle className="font-bold flex justify-end">
                      <button
                        className="text-red-700"
                        onClick={() => setIsOpen(false)}
                      >
                        Close
                      </button>
                    </DialogTitle>
                    <div className="flex flex-col gap-5 items-center">
                      <ImageMagTextiles
                        loading="lazy"
                        className="png object-contain rounded-sm"
                        src={selectedImg}
                      />
                    </div>
                  </DialogPanel>
                </div>
              </Dialog>
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190902-LMH-1988.jpg?updatedAt=1738387541838"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2160.jpg?updatedAt=1738387547405"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p><strong>To My Father</strong></p>
              <iframe
                width="420"
                height="300"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/to%20Father.mp4?updatedAt=1738394303544"
              ></iframe>
            </div>
          </div>
          <p className="max-w-96 pt-10 pb-10">
            Before I faced him, I thought I would be in so much grief and pain,
            but he looked so peaceful. His face immediately melted away my
            fears. I found myself at peace of mind. A Shroud he was wearing, a
            symbol of death looked to me as if he dressed up for his wedding
            ceremony. Now I decided to make him a new cloth. A cloth that will
            be buried with him and take him to the eternal journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2153.jpg?updatedAt=1738387547562"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2155.jpg?updatedAt=1738387544704"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190902-LMH-2017.jpg?updatedAt=1738387544668"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190902-LMH-2011.jpg?updatedAt=1738387547454"
              />
            </div>
          </div>
          <p><strong>Ryu Gwan-Sun</strong></p>
          <iframe
            width="420"
            height="300"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/Ryu%20long.mp4?updatedAt=1738394305742"
          ></iframe>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190902-LMH-1997.jpg?updatedAt=1738387541514"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190902-LMH-1990.jpg?updatedAt=1738387541504"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2129.jpg?updatedAt=1738387547556"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2132.jpg?updatedAt=1738387544777"
              />
            </div>
          </div>
          <p><strong>Ryu Gwan-Sun</strong></p>
          <iframe
            width="420"
            height="300"
            src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/Ryu%20short.mp4?updatedAt=1738394305462"
          ></iframe>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2111.jpg?updatedAt=1738387555606"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2108.jpg?updatedAt=1738387552601"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4076.jpg?updatedAt=1738387558313"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4093.jpg?updatedAt=1738387555414"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4194.jpg?updatedAt=1738387552612"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4196.jpg?updatedAt=1738387552739"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4176.jpg?updatedAt=1738387550012"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4183.jpg?updatedAt=1738387555373"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4158.jpg?updatedAt=1738387558300"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4142.jpg?updatedAt=1738387558184"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4120.jpg?updatedAt=1738387549933"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4125.jpg?updatedAt=1738387555637"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4085.jpg?updatedAt=1738387555450"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4116.jpg?updatedAt=1738387555422"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4204.jpg?updatedAt=1738387541491"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20191026-LMH-4212.jpg?updatedAt=1738387541502"
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2148.jpg?updatedAt=1738387544735"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2147.jpg?updatedAt=1738387549759"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2146.jpg?updatedAt=1738387549913"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2130.jpg?updatedAt=1738387552626"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190909-LMH-2192.jpg?updatedAt=1738387552641"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190909-LMH-2183.jpg?updatedAt=1738387544767"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190909-LMH-2180.jpg?updatedAt=1738387547483"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190909-LMH-2184.jpg?updatedAt=1738387549920"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190909-LMH-2181.jpg?updatedAt=1738387544720"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190909-LMH-2174.jpg?updatedAt=1738387558294"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190909-LMH-2170.jpg?updatedAt=1738387558204"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190909-LMH-2171.jpg?updatedAt=1738387555710"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190909-LMH-2172.jpg?updatedAt=1738387555511"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2134.jpg?updatedAt=1738387552608"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2137.jpg?updatedAt=1738387552629"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2138.jpg?updatedAt=1738387552745"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2127.jpg?updatedAt=1738387549695"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2123.jpg?updatedAt=1738387544661"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2126.jpg?updatedAt=1738387549688"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2165.jpg?updatedAt=1738387547420"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2166.jpg?updatedAt=1738387547446"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2162.jpg?updatedAt=1738387547548"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2140.jpg?updatedAt=1738387547317"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/20190906-LMH-2142.jpg?updatedAt=1738387549944"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/KakaoTalk_Photo_2020-07-02-10-47-35.jpg?updatedAt=1738387544761"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/KakaoTalk_Photo_2020-07-02-10-48-53.jpg?updatedAt=1738387541520"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/KakaoTalk_Photo_2020-07-02-10-51-16.jpg?updatedAt=1738387541514"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/KakaoTalk_Photo_2020-07-02-10-50-52.jpg?updatedAt=1738387541805"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 pt-5 items-center">
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/KakaoTalk_Photo_2020-07-02-10-50-28.jpg?updatedAt=1738387541830"
              />
            </div>
            <div>
              <img
                onClick={handleClick}
                className="png object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Shrouds/KakaoTalk_Photo_2020-07-02-10-49-24.jpg?updatedAt=1738387547413"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShroudGallery;
