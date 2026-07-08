// The three bodies of work, presented as narrative chapters.
const IK = "https://ik.imagekit.io/lonisk96/Miuh%20Yang";

export const homeChapters = [
  {
    num: "02",
    kicker: "The Memorial",
    title: "3,227,082 Stitches",
    countLabel: "Stitches",
    to: "/korean-war",
    image: `${IK}/banner1.png`,
    fit: "contain",
    shadow: true,
    count: 3227082,
    story:
      "Twenty-three nations sent their people to South Korea. For every one who served, a single stitch, 3,227,082 in all, sewn into a garment for each country. A work of gratitude and of grief, and a reminder that we are woven together like threads in a garment, both strong and fragile.",
  },
  {
    num: "03",
    kicker: "The Shroud",
    title: "A Passage, in Cloth",
    to: "/shroud",
    image: `${IK}/Shrouds/20190902-LMH-1987.jpg?updatedAt=1738387544640`,
    fit: "contain",
    shadow: true,
    effect: "veil",
    scrollWords: true,
    story:
      "A burial shroud made for her father. Here grief becomes something closer to love. Mortality held not as an ending, but as a passage toward an enduring connection.",
  },
  {
    num: "04",
    kicker: "Floral & Textile",
    title: "The Poetics of the Everyday",
    stitchWord: "Everyday",
    to: "/textile",
    image: `${IK}/banner3.png`,
    fit: "contain",
    shadow: true,
    story:
      "Hand-sewn floral fragments arranged in quilt-like grids. The ordinary made luminous through the meditative act of stitching, a search for harmony and balance in the texture of daily life.",
  },
];

export const homeImages = {
  hero: `${IK}/Korean%20War/KoreaFront.png`,
  artist: `${IK}/artist.jpg`,
  artistDetail: `${IK}/about2.jpeg`,
};
