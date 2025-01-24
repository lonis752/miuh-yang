import { SideMenu } from "../components/SideMenu";

function About() {
  return (
    <>
      <div className="flex justify-around gap-8">
        <SideMenu />
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col gap-2 justify-center items-center mt-10">
            <div className="flex flex-col items-center">
              <div className="pb-6">
                <h1 className="text-md sm:text-2xl md:text-3xl font-bold">
                  Artist Statement
                </h1>
                <h4 className="text-sm sm:text-lg md:text-xl">Miuh Yang</h4>
              </div>
              <div className="flex items-center gap-5">
                <div className="-mr-24 z-10 bg-opacity-80 bg-white rounded p-2">
                  <p className="max-w-56">
                    Until I called her name, She had been No more than a mere
                    gesture. When I called her name, She came to me And became a
                    flower.
                  </p>
                  <p className="max-w-60"> - “The Flower” by Chun Su Kim</p>
                </div>
                <img className="png" src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/favicon-removebg-preview.png" />
              </div>
              <div className="flex items-center p-10">
                <img className="hidden md:block" src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/about3.png" />
                <p className="max-w-md md:-ml-24 z-0 bg-white rounded-xs p-2 bg-opacity-50">
                  My work is about the practice of appreciating, meditating and
                  painting the everyday. I enjoy flowers for their obvious
                  beauty, fragility and splendour. They are also very expressive
                  of our inner feelings and psychological state. For me, flowers
                  represent both the world outside and the world inside. Flowers
                  are not only significant in themselves, but also empty of
                  meaning at the same time, because they are common in everyday
                  life and because they have been too popular in art as a
                  subject matter for centuries. I choose flowers for this
                  paradoxical reason. Flowers are really something and they are
                  really nothing at the same time.
                </p>
              </div>
              <div className="flex items-center p-10">
                <p className="max-w-md md:-mr-36 z-0 bg-opacity-95 bg-white rounded p-2">
                  Flowers in my work are small, scattered and fragmented. I
                  often arranged them in a grid with an individual background. I
                  paint flowers on fabric and they are often hand-sewn together,
                  creating a quilt-like surface structure that is comforting,
                  peaceful, balanced and harmonious. I work intuitively and I
                  work on different projects simultaneously, so that I can have
                  more freedom, spontaneity and flexibility when creating my
                  artworks. My flowers are colourful, sensitive, sincere,
                  sometimes shy and sometimes playful. For me, creating art is
                  about the practice of everyday living. Living with art is
                  about appreciating the poetics of life.
                </p>
                <img
                  className="shadow-lg shadow-gray-500 hidden md:block rounded-xs"
                  width={300}
                  src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/about2.jpg"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 max-w-lg">
              <p className="max-w-lg border-t p-10 pb-20">
                * Me-Hyang Yang is a Korean-Canadian Artist living and working
                in Vancouver, Canada. She was graduated from Hong Ik University
                in Korea (BFA in Fabric Arts) in 1992. Since immigrating to
                Canada in 2005, she has been producing paintings and quilts that
                reflect both the Eastern and Western cultural influences and
                philosophy. Her first solo show was held at Gana Art Centre,
                Korea in 2004.
              </p>
              <img
                className="max-w-56 rounded"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/artist.jpg?updatedAt=1737663368820"
              />
              <h1 className="text-md sm:text-lg md:text-xl font-bold pt-5">Curriculum Vitae</h1>
              <ul className="pb-20 flex flex-col gap-3">
                <li>2015. 5 Moduart selective joined Art fair Vancouver</li>
                <li>2015. 3 Four person Art exhibition at Potter's Gallery</li>
                <li>2005-2013 Korean artist annual group exhibition</li>
                <li>2006. 9 Duet art exhibition at Art Beatus Gallery</li>
                <li>2005. 12 Winter group exhibition at Art Beatus Gallery</li>
                <li>2005. 5 Solo exhibition at Covan art Gallery</li>
                <li>2004. 7 The 1st solo exhibition at Gana art centre</li>
                <li>1993-2000 My decorating space designer/ owner</li>
                <li>1993. 9 FIDM - Diploma in fashion design</li>
                <li>
                  1992. 2 Hong IK university Bachelor's degree in fabric arts
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
