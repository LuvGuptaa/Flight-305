import { Text } from "@react-three/drei";

export const TextSection = ({ title, subTitle, ...props }) => {
  return (
    <group {...props}>
      {!!title && (
        <Text
          color="white"
          anchorX={"left"}
          anchorY="bottom"
          fontSize={0.52}
          maxWidth={2.5}
          lineHeight={1}
          font={"./fonts/DMSerifDisplay-Regular.ttf"}
        >
          {title}
        </Text>
      )}
      <Text
        color="white"
        anchorX={"left"}
        anchorY="top"
        position-y={-0.66}
        fontSize={0.22}
        maxWidth={2.5}
        font={"./fonts/Inter-Regular.ttf"}
      >
        {subTitle}
      </Text>
    </group>
  );
};
