import React from "react";
import CartWidget from "./CartWidget";
import { Container, Button, ButtonGroup, Box, Menu, MenuButton, MenuList, MenuItem, Flex, Spacer, Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <>
        <Flex minWidth='max-content' alignItems='center' gap='2'>
            <Box p='2'>
                <Heading size='md'>Blanco Hogar</Heading>
            </Box>
        <Spacer />
        <Breadcrumb separator='-'>
            <BreadcrumbItem>
                <BreadcrumbLink href='#'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
            <Menu>
                <MenuButton>
                    Productos
                </MenuButton>
                <MenuList>
                    <MenuItem>Sabanas</MenuItem>
                    <MenuItem>Acolchados</MenuItem>
                    <MenuItem>Toallas</MenuItem>
                </MenuList>
                </Menu>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        <Spacer />
        <ButtonGroup gap='2'>
            <Button colorScheme='teal'>Crear Cuenta</Button>
            <Button colorScheme='teal'>Ingresar</Button>
            <CartWidget/>
        </ButtonGroup>
        </Flex>


    </>
  );
};

export default NavBar;
