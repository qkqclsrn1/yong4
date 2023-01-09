import {
  Text,
  Flex,
  Box,
  Tabs,
  TabList,
  Tab,
  Image,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HiOutlineStar } from "react-icons/hi";

export default function GameTabs({ imgsrc, name }) {
  return (
    <>
      <Flex mx={300} mt={300}>
        <Box border="4px" borderColor="white" w="180px" h="180px" mr={20}>
          <Image src={imgsrc} w="100%" h="100%"></Image>
        </Box>
        <Text as="b" fontSize="5xl">
          {name}
        </Text>
        <Icon
          as={HiOutlineStar}
          boxSize="45px"
          justifyContent="center"
          alignItems="center"
          ml="20px"
          mt="17px"
        />
      </Flex>
      <Flex mx={300} mt={40}>
        <Tabs h={100} variant="soft-rounded" colorScheme="green">
          <TabList mb="3em">
            <Tab
              h="60px"
              fontSize="30px"
              _selected={{ color: "black", bg: "#F7FF58" }}
            >
              <Link to="/OdForOs">ABOUT THIS GAME</Link>
            </Tab>

            <Tab
              h="60px"
              fontSize="30px"
              _selected={{ color: "black", bg: "#F7FF58" }}
            >
              <Link to="/OdForOs/gamenft">NFT</Link>
            </Tab>

            <Tab
              h="60px"
              fontSize="30px"
              _selected={{ color: "black", bg: "#F7FF58" }}
            >
              <Link to="/OdForOs/forum">FORUM</Link>
            </Tab>
          </TabList>
        </Tabs>
      </Flex>
    </>
  );
}
