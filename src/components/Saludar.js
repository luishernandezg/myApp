import React from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";

export default function Saludar(props) {
  //   const { firstname = "Luis", lastname = "Hernadnez" } = props;
  const { firstname, lastname } = props;

//   console.log(props);
  return (
    <Text>
      Hola {firstname} {lastname}
    </Text>
  );
}

// Saludar.defaultProps = {
//   firstname: "Luis",
//   lastname: "Hernadnez",
// };

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};
