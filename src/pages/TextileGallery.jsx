import { SideMenu } from "../components/SideMenu";
import { useState } from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import ImageMagTextiles from "../components/ImageMagTextiles";

function TextileGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");

  function handleClick(e) {
    setSelectedImg(e.target.src);
    setSelectedTitle(e.target.id);
    setIsOpen(true);
  }

  return (
    <>
      <div className="flex justify-around gap-8">
        <SideMenu />
        <div className="flex flex-col gap-10 items-center">
          <h1 className="pt-16 text-md sm:text-2xl md:text-3xl font-bold">
            Textiles
          </h1>
          <div className="flex justify-center pt-5">
            <div className="-mr-10 sm:-mr-20 z-10 bg-opacity-80 bg-white rounded p-2 flex flex-col gap-3">
              <p className="max-w-56 text-sm sm:text-md md:text-lg">
                Until I called her name, She had been No more than a mere
                gesture. When I called her name, She came to me And became a
                flower.
              </p>
              <p> - “The Flower”</p>
              <p>by Chun Su Kim</p>
            </div>
            <img
              loading="lazy"
              className="png zoom h-3/4"
              src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/favicon-removebg-preview.png"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Shadow"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/shadow-removebg-preview.png?updatedAt=1738393639195"
              />
              <p>
                <strong>Title:</strong> Shadow
              </p>
              <Dialog
                open={isOpen}
                onClose={() => setIsOpen(false)}
                className="relative z-20"
              >
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                  <DialogPanel className="max-w-screen space-y-4 border bg-white p-12">
                    <DialogTitle className="font-bold flex justify-between">
                      <p>
                        <strong>Title:</strong> {selectedTitle}
                      </p>
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
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Shadow 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Shadow_2-removebg-preview.png?updatedAt=1738393639123"
              />
              <p>
                <strong>Title:</strong> Shadow 2
              </p>
            </div>
          </div>
          <p className="max-w-96">
            My work is about the practice of appreciating, meditating and
            painting the everyday. I enjoy flowers for their obvious beauty,
            fragility and splendour. They are also very expressive of our inner
            feelings and psychological state. For me, flowers represent both the
            world outside and the world inside. Flowers are not only significant
            in themselves, but also empty of meaning at the same time, because
            they are common in everyday life and because they have been too
            popular in art as a subject matter for centuries. I choose flowers
            for this paradoxical reason. Flowers are really something and they
            are really nothing at the same time.
          </p>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Awaken"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Awaken-removebg-preview.png?updatedAt=1738393642353"
              />
              <p>
                <strong>Title:</strong> Awaken
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Awaken 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Awaken_2-removebg-preview.png?updatedAt=1738393642335"
              />
              <p>
                <strong>Title:</strong> Awaken 2
              </p>
            </div>
          </div>
          <p className="max-w-96">
            Flowers in my work are small, scattered and fragmented. I often
            arranged them in a grid with an individual background. I paint
            flowers on fabric and they are often hand-sewn together, creating a
            quilt-like surface structure that is comforting, peaceful, balanced
            and harmonious. I work intuitively and I work on different projects
            simultaneously, so that I can have more freedom, spontaneity and
            flexibility when creating my artworks. My flowers are colourful,
            sensitive, sincere, sometimes shy and sometimes playful. For me,
            creating art is about the practice of everyday living. Living with
            art is about appreciating the poetics of life.
          </p>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Shadows"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Shadows.jpg?updatedAt=1738393639177"
              />
              <p>
                <strong>Title:</strong> Shadows
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Shadows 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Shadows%202.jpg?updatedAt=1738393639204"
              />
              <p>
                <strong>Title:</strong> Shadows 2
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="A Girl"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/A_Girl-removebg-preview.png?updatedAt=1738393642104"
              />
              <p>
                <strong>Title:</strong> A Girl
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="A Girl 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/A_Girl_2-removebg-preview.png?updatedAt=1738393642363"
              />
              <p>
                <strong>Title:</strong> A Girl 2
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="A Vision of January"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/A_Vision_of_January-removebg-preview.png?updatedAt=1738393645144"
              />
              <p>
                <strong>Title:</strong> A Vision of January
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="A Vision of June"
                className="zoom object-contain rounded-sm"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/A_Vision_of_June-removebg-preview.png"
              />
              <p>
                <strong>Title:</strong> A Vision of June
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="A Vision of July"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/A_Vision_of_July-removebg-preview.png"
              />
              <p>
                <strong>Title:</strong> A Vision of July
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Gloomy Day"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Gloomy_Day-removebg-preview.png"
              />
              <p>
                <strong>Title:</strong> Gloomy Day
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Day & Night"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Day___Night-removebg-preview.png?updatedAt=1738393642223"
              />
              <p>
                <strong>Title:</strong> Day & Night
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Early in the Morning"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Early_in_the_Morning-removebg-preview.png?updatedAt=1738393639130"
              />
              <p>
                <strong>Title:</strong> Early in the Morning
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Moon Light"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Moon_Light-removebg-preview.png?updatedAt=1738393645160"
              />
              <p>
                <strong>Title:</strong> Moon Light
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Moon Light 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Moon_Light_2-removebg-preview.png?updatedAt=1738393642371"
              />
              <p>
                <strong>Title:</strong> Moon Light 2
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Flower Shadows"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Flower_Shadows-removebg-preview.png?updatedAt=1738393639127"
              />
              <p>
                <strong>Title:</strong> Flower Shadows
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Three Flowers"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Three_Flowers-removebg-preview.png?updatedAt=1738393642378"
              />
              <p>
                <strong>Title:</strong> Three Flowers
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Flower"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Flower-removebg-preview.png?updatedAt=1738393642417"
              />
              <p>
                <strong>Title:</strong> Flower
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Flower 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Flower_2-removebg-preview.png?updatedAt=1738393644996"
              />
              <p>
                <strong>Title:</strong> Flower 2
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Rainy Day"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Rainy_Day-removebg-preview.png?updatedAt=1738393639216"
              />
              <p>
                <strong>Title:</strong> Rainy Day
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Rainy Day 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Rainy_day_2-removebg-preview.png?updatedAt=1738393639143"
              />
              <p>
                <strong>Title:</strong> Rainy Day 2
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="A Child's Mind"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/The_Child_s_Mind-removebg-preview.png"
              />
              <p>
                <strong>Title:</strong> A Child's Mind
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="A Child's Mind 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/The_Child_s_Mind_2-removebg-preview.png"
              />
              <p>
                <strong>Title:</strong> A Child's Mind 2
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="A Child's Mind 3"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/The_Child_s_Mind_3-removebg-preview.png"
              />
              <p>
                <strong>Title:</strong> A Child's Mind 3
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Flower Box"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Flower_Box-removebg-preview.png?updatedAt=1738393645126"
              />
              <p>
                <strong>Title:</strong> Flower Box
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-10 items-center justify-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Long Shadows"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Long_Shadows-removebg-preview.png?updatedAt=1738393642351"
              />
              <p>
                <strong>Title:</strong> Long Shadows
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Garden Nap"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Garden_Nap-removebg-preview.png?updatedAt=1738393642282"
              />
              <p>
                <strong>Title:</strong> Garden Nap
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Four Flowers"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Flowers_2-removebg-preview.png?updatedAt=1738393645277"
              />
              <p>
                <strong>Title:</strong> Four Flowers
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Nine Flowers"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Flowers-removebg-preview.png?updatedAt=1738393648022"
              />
              <p>
                <strong>Title:</strong> Nine Flowers
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Birds"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Birds-removebg-preview.png?updatedAt=1738393648115"
              />
              <p>
                <strong>Title:</strong> Birds
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Birds 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Birds_2-removebg-preview.png?updatedAt=1738393645171"
              />
              <p>
                <strong>Title:</strong> Birds 2
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="The Garden in the Night"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/The_Garden_in_the_Night-removebg-preview.png?updatedAt=1738393645008"
              />
              <p>
                <strong>Title:</strong> The Garden in the Night
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Wishing for"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Wishing_for-removebg-preview.png?updatedAt=1738393639136"
              />
              <p>
                <strong>Title:</strong> Wishing for
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="Circle of Life"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/Circle_of_Life-removebg-preview.png?updatedAt=1738393645287"
              />
              <p>
                <strong>Title:</strong> Circle of Life
              </p>
            </div>
            <div className="p-5">
              <img
                onClick={handleClick}
                loading="lazy"
                id="The Garden in the Night 2"
                className="png zoom object-contain rounded-sm pb-5"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/Textiles/The_Garden_in_the_Night_2-removebg-preview.png?updatedAt=1738393645294"
              />
              <p>
                <strong>Title:</strong> The Garden in the Night 2
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextileGallery;
