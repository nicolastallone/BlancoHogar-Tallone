import React from "react";
import { Center, Box, Image } from "@chakra-ui/react";
import Logo from "../assets/logobh.png"

const Bienvenido = () => {
  return (
    <div>
      <Center>
        <Box boxSize="xxl">
          <Image
            src={Logo}
            alt="logo"
          />
        </Box>
      </Center>
    </div>
  );
};

export default Bienvenido;
