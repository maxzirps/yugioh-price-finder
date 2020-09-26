import Head from "next/head";
import { Center, Heading, Flex, Button, Box, Text, Image } from "@chakra-ui/core";
import Tesseract from "tesseract.js";
import { useState } from "react";

const extractId = () => {
  Tesseract.recognize(
    "https://tesseract.projectnaptha.com/img/eng_bw.png",
    "eng",
    { logger: (m) => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log(text);
  });
};

export default function Home() {
  const [cardImg, setCardImg] = useState<string>();
  const [cardId, setCardId] = useState<Number>();

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setCardImg(URL.createObjectURL(img))
    }
  };

  return (
    <div>
      <Head>
        <title>Yugioh Price Finder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Center w="100vw" p="3rem">
          <Flex direction="column">
            <Box p="4">
              <Heading>Yugioh Price Finder</Heading>
            </Box>
            {/* <Spacer/> */}
            <Box p="4">
              <Center>
                <label htmlFor="cardImg">Select the file:</label>
                <input
                  type="file"
                  id="cardImg"
                  name="cardImg"
                  accept="image/png, image/jpeg"
                  onChange={onImageChange}
                />
              </Center>
            </Box>
            <Box p="4" boxSize="sm">
              <Center>
              <Image src="https://bit.ly/sage-adebayo" alt="Segun Adebayo" />
              </Center>
            </Box>
            <Box p="4">
              <Center>
                <Button
                  colorScheme="blue"
                  isDisabled={cardImg === undefined}
                  onClick={() => console.log(cardImg)}
                >
                  Find price
                </Button>
              </Center>
            </Box>
            <Box p="4">
              <Center>
                <Text>{cardId}</Text>
              </Center>
            </Box>
          </Flex>
        </Center>
      </main>

      <footer></footer>
    </div>
  );
}
