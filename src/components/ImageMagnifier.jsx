import { useState } from "react";

const ImageMagnifier = ({
  src,
  className,
  width,
  height,
  alt,
  magnifierHeight = 300,
  magnifierWidth = 300,
  zoomLevel = 2,
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [[x, y], setXY] = useState([0, 0]);

  const mouseEnter = (e) => {
    const el = e.currentTarget;

    const { width, height } = el.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  };

  const mouseLeave = (e) => {
    e.preventDefault();
    setShowMagnifier(false);
  };

  const mouseMove = (e) => {
    const el = e.currentTarget;
    const { top, left } = el.getBoundingClientRect();

    const x = e.pageX - left - window.scrollX;
    const y = e.pageY - top - window.scrollY;

    setXY([x, y]);
  };

  return (
    <div className="relative inline-block left-16 sm:left-44">
      <img
        src={src}
        className={className}
        width={width}
        height={height}
        alt={alt}
        onMouseEnter={(e) => mouseEnter(e)}
        onMouseLeave={(e) => mouseLeave(e)}
        onMouseMove={(e) => mouseMove(e)}
      />
      <div
        style={{
          display: showMagnifier ? "" : "none",
          position: "absolute",
          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          opacity: "1",
          border: "1px solid lightgrey",
          backgroundColor: "white",
          borderRadius: "5px",
          backgroundImage: `url('${src}')`,
          backgroundRepeat: "no-repeat",
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          backgroundSize: `${imgWidth * zoomLevel}px ${
            imgHeight * zoomLevel
          }px`,
          backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
          backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
