import {
  Heading,
  Stack,
  SimpleGrid,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
import OtherdeedForOthersideAbout1 from "../../asset/OtherdeedForOtherside/Otherdeed_for_Otherside_about_1.png";
import OtherdeedForOthersideAbout2 from "../../asset/OtherdeedForOtherside/Otherdeed_for_Otherside_about_2.png";
import OtherdeedForOthersideAbout3 from "../../asset/OtherdeedForOtherside/Otherdeed_for_Otherside_about_3.png";

import gameDetails from "../../mock/gamedata";

function Introduction() {
  
  
  const gameDetail = gameDetails.filter((lab) => lab.id === 1);
  console.log(gameDetail);

  return (
    <Flex h={"100vh"} mx={300} mt={30} justify={"center"}>
      <SimpleGrid columns={2} spacing={10}>
        <Stack spacing={4}>
          <Heading fontSize={50}> {gameDetail.head1} </Heading>
          <Text fontSize={20}>{gameDetail.content1}</Text>
        </Stack>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={OtherdeedForOthersideAbout1}
          objectFit={"cover"}
        />
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={OtherdeedForOthersideAbout2}
          objectFit={"cover"}
        />
        <Stack spacing={4}>
          <Heading fontSize={50}> {gameDetail.head2} </Heading>
          <Text fontSize={20}>{gameDetail.content2}</Text>
        </Stack>
        <Stack spacing={4}>
          <Heading fontSize={50}> {gameDetail.head3} </Heading>
          <Text fontSize={20}>{gameDetail.content3}</Text>
        </Stack>
        <Image
          rounded={"md"}
          alt={"feature image"}
          src={OtherdeedForOthersideAbout3}
          objectFit={"cover"}
        />
        <div className="header">

        </div>
      </SimpleGrid>
    </Flex>
  );
}

export default Introduction;
