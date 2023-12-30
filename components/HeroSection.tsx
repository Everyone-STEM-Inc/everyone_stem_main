import Head from "next/head"
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react"

export default function CallToActionWithAnnotation() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
             Learn STEM<br />
            <Text as={"span"} color={"green.400"}>
              for FREE!
            </Text>
          </Heading>
          <Text color={"gray.500"}>
            Everyone STEM is a 501(c)3 non-profit that is dedicated to helping and nurturing students that are in need. We do this through our free courses offerings powered by our volunteers!
          </Text>
          <Stack
            direction={"column"}
            spacing={3}
            align={"center"}
            alignSelf={"center"}
            position={"relative"}
          >
            <Button
              colorScheme={"green"}
              bg={"green.400"}
              rounded={"full"}
              px={6}
              _hover={{
                bg: "green.500",
              }}
              onClick={() => window.location.href = 'https://class.everyonestem.org'}

            >
              Get Started
            </Button>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}