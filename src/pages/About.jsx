import { SideMenu } from "../components/SideMenu";

function About() {
  return (
    <>
      <div className="flex justify-around gap-8">
        <SideMenu />
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex flex-col gap-2 justify-center items-center mt-10">
            <div className="flex flex-col items-center justify-center">
              <div className="pb-6">
                <h1 className="text-md sm:text-2xl md:text-3xl font-bold">
                  Artist Statement
                </h1>
                <h4 className="text-sm sm:text-lg md:text-xl">Miuh Yang</h4>
              </div>
              <div className="flex items-center p-10">
                <p className="max-w-md z-0 bg-white rounded-xs p-2 bg-opacity-50">
                  Miuh Yang is an artist whose work delves into themes of
                  memory, connection, and the human condition. Drawing
                  inspiration from the everyday, Miuh creates art that bridges
                  the personal and the universal, exploring concepts such as
                  beauty, fragility, and the passage of time. Their practice
                  centers on the meditative process of crafting, celebrating the
                  poetics of life and the intricate relationships that bind us
                  together.
                </p>
              </div>
              <div className="flex items-center p-5">
                <img
                  loading="lazy"
                  className="png"
                  src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/favicon-removebg-preview.png"
                />
                <p className="max-w-md md:-ml-24 z-0 bg-white rounded p-2 bg-opacity-90">
                  Flowers often serve as a recurring motif in her early work,
                  representing the paradox of being both ordinary and
                  extraordinary. Through small, fragmented, and hand-sewn floral
                  compositions arranged in quilt-like grids, Miuh Yang crafts
                  surfaces that try to capture harmony and balance. For the
                  artist, the act of stitching is not just a creative expression
                  but a way of appreciating the subtleties of daily life.
                </p>
              </div>
              <div className="flex items-center p-5">
                <p className="max-w-md -mr-16 md:-mr-36 z-0 bg-opacity-95 bg-white rounded p-2">
                  In their installation “3,227,082 Stitches,” Miuh Yang reflects
                  on collective memory and gratitude, honouring the sacrifices
                  of the 3,227,082 military personnel from 23 nations who aided
                  South Korea during the Korean War. By incorporating
                  traditional fabrics and garments from each country, the work
                  weaves personal and cultural narratives into a profound homage
                  to peace and resilience.
                </p>
                <img
                  loading="lazy"
                  className="shadow-lg shadow-gray-500 rounded"
                  width={300}
                  src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/about2.jpeg"
                />
              </div>
            </div>
            <div className="flex items-center p-10">
              <img
                loading="lazy"
                className="hidden md:block w-1/3 ml-40 rounded shadow-lg shadow-gray-500"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/about1.jpg"
              />
              <p className="max-w-md md:-ml-40 z-0 bg-white rounded p-2 bg-opacity-80">
                Another aspect of her practice is their exploration of mortality
                and the rituals of departure, culminating from her reflective
                piece on creating a burial shroud for their father. This deeply
                personal work transforms grief into an expression of love and
                transcendence, framing death as a passage to eternal connection.
              </p>
            </div>
            <div className="flex items-center p-5 border-b-2">
              <p className="max-w-md z-0 bg-white rounded-xs p-2 bg-opacity-50">
                Whether through floral studies, burial garments, or meditations
                on mortality, Miuh Yang’s work invites viewers to contemplate
                the interconnected threads of life, history, and human
                experience. Their art stands as a testament to healing,
                gratitude, and the enduring wish for peace and understanding in
                a fragile yet beautiful world.
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 max-w-lg">
              <h1 className="text-md sm:text-lg md:text-xl font-bold pt-10">
                Artist Bio
              </h1>
              <img
                loading="lazy"
                className="max-w-56 rounded"
                src="https://ik.imagekit.io/lonisk96/Miuh%20Yang/artist.jpg?updatedAt=1737663368820"
              />
              <p className="max-w-lg p-10">
                Miuh Yang is a Korean-Canadian Artist living and working
                in Vancouver, Canada. She was graduated from Hong Ik University
                in Korea (BFA in Fabric Arts) in 1992. Since immigrating to
                Canada in 2005, she has been producing paintings and quilts that
                reflect both the Eastern and Western cultural influences and
                philosophy. Her first solo show was held at Gana Art Centre,
                Korea in 2004.
              </p>

              <ul className="pb-20 flex flex-col gap-3">
                <li>
                  <strong>2019</strong> The 3rd Exhibition at Duru Artspace in
                  Korea
                </li>
                <li>
                  <strong>2018-2019</strong> Park Art Salon participant
                </li>
                <li>
                  <strong>2015-2016</strong> Moduart Selective Joined Art Fair
                  Vancouver
                </li>
                <li>
                  <strong>2015</strong> Four Artist Art Exhibition at Potter
                  Gallery
                </li>
                <li>
                  <strong>2012</strong> 3rd Solo Exhibition at Joe’s Galley in
                  Vancouver
                </li>
                <li>
                  <strong>2007</strong> 2nd Solo Exhibition at Covan Art in
                  Vancouver
                </li>
                <li>
                  <strong>2006</strong> Duet Art Exhibition at Art Beatus
                  Gallery
                </li>
                <li>
                  <strong>2005-2015</strong> Annual Group Exhibition of the
                  Korean Art Association
                </li>
                <li>
                  <strong>2005</strong> Winter Group Exhibition at Art Beatus
                  Gallery
                </li>
                <li>
                  <strong>2005</strong> Solo Exhibition at Covan Art Gallery
                </li>
                <li>
                  <strong>2004</strong> 1st Solo Exhibition at Gana Art Centre
                </li>
                <li>
                  <strong>1993-2000</strong> My Decorating Space Designer/Owner
                </li>
                <li>
                  <strong>1993</strong> FIDM - Diploma in fashion design
                </li>
                <li>
                  <strong>1992</strong> Hong Ik University - Bachelor's degree
                  in fabric arts
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
