import React from "react";
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={476}
    height={124}
    viewBox='0 0 476 124'
    backgroundColor='#000000'
    foregroundColor='#ecebeb'
    {...props}
  >
    <Rect x='19' y='94' rx='3' ry='3' width='99' height='5' />
    <Rect x='19' y='111' rx='3' ry='3' width='56' height='3' />
    <Rect x='21' y='1' rx='0' ry='0' width='92' height='87' />
  </ContentLoader>
);

export default MyLoader;
