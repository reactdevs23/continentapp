import React from "react";
import { Stage, Layer, Image, RegularPolygon } from "react-konva";

const HexagonImage = ({ src, size }) => {
  const radius = size / 2;
  const cornerRadius = radius * 0.25;
  const height = radius * Math.sqrt(3);
  const width = 2 * radius;
  const x = radius;
  const y = radius;

  return (
    <Stage width={width} height={height}>
      <Layer>
        <RegularPolygon
          sides={6}
          radius={radius}
          cornerRadius={cornerRadius}
          x={x}
          y={y}
        >
          <Image image={src} width={size} height={size} />
        </RegularPolygon>
      </Layer>
    </Stage>
  );
};

export default HexagonImage;
