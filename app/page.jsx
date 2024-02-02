"use client";
import ReactTypingEffect from "react-typing-effect";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  Container,
  SimpleGrid,
  VStack,
  StackDivider,
  Icon,
  useColorModeValue,
  Box,
  chakra,
  Stat,
  StatLabel,
  StatNumber,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { useEffect, useLayoutEffect, useRef } from "react";
import { easeIn, easeInOut } from "framer-motion";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        w={8}
        h={8}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Text fontWeight={600} className="text-white">
        {text}
      </Text>
    </Stack>
  );
};

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("white", "white")}
      rounded={"lg"}
      className="text-white hover:text-black hover:bg-gray-300 hover:scale-105 duration-500"
    >
      <StatLabel
        fontWeight={"bold"}
        isTruncated
        // textColor={"white"}
        fontSize={"2xl"}
      >
        {title}
      </StatLabel>
      <StatNumber fontSize={"medium"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}


export default function Home() {






 
  const image = useRef(null);
  const text1 = useRef(null);
  const text2 = useRef(null);
  const text3 = useRef(null);

  const image2 = useRef(null);
  const text21 = useRef(null);
  const text22 = useRef(null);
  const text23 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
      const page1Image = gsap.timeline();
      const page1Text = gsap.timeline();
      const page2Image = gsap.timeline();
      const page2Text = gsap.timeline();
      page1Image
        .from(image.current, 
          {
            opacity:0.1,
             x: 800,  
           
          })
        .to(image.current, { 
          delay :0.1,
          opacity:1,
           x: 0, 
           duration: 1,
           ease : "power2.inOut",
         
        })

        page1Text
        .from(text1.current , {
          opacity:0.1,
          x : -600,
        })
        .to(text1.current , {
          delay : 0.1,
            x:0,
            duration : 0.5,
            ease : "power2.inOut", opacity:1,
        })  
        .from(text2.current , {
          x : -600, opacity:0.1,
        })
        .to(text2.current , {
          delay : 0.1,
            x:0,
            duration : 0.2,
            ease : "power2.inOut", opacity:1,
        }) 
        .from(text3.current , {
          x : -600, opacity:0.1,
        })
        .to(text3.current , {
            x:0,
            duration : 0.2,
            ease : "power2.inOut", opacity:1,
        }) 

        


  }, []);
  return (
    <>
      <section className="lg:h-screen w-screen" >
        <Stack direction={{ base: "column", md: "row" }}>
          <Flex p={8} flex={1} align={"center"} justify={"center"}>
            <Stack spacing={6} w={"full"} maxW={"lg"}>
              <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }} ref={text1}  >
                {/* <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'blue.400',
                zIndex: -1,
              }}>
              Freelance
            </Text> */}{" "}
                <Text color={"blue.400"} as={"span"}>
                  <ReactTypingEffect
                    text={["ENFUSE", "ENERGY LEADER"]}
                    typingDelay={400}
                    eraseDelay={2000}   
                  />
                </Text>{" "}
              </Heading>
              <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"} ref={text2} >
                {" "}
                ENFUSE is committed for continued awareness on efficient energy
                management and conducts focused conferences,seminars,workshops
                and training programs in different regions of the country every
                year,where,professionals and experts in various disciplines from
                all over the country and abroad,deliberate,interact and share
                their knowledge and experiences, for the benefit of various
                stakeholders.
              </Text>
              <Stack direction={{ base: "column", md: "row" }} spacing={4}>
                <Button rounded={"full"} ref={text3}>Our Current Projects</Button>
              </Stack>
            </Stack>
          </Flex>
          <Flex flex={1}>
            <Image
              alt={"Login Image"}
              objectFit={"contain"}
              src={"/oil.jpg"}
              borderRadius={"20px"}
              ref={image}
            />
          </Flex>
        </Stack>
      </section>

      <section className="lg:h-screen w-screen" >
        <Container maxW={"5xl"} py={12}>
          <Stack direction={{ base: "column-reverse", md: "row" }} spacing={10}>
            <Flex>
              <Image
                rounded={"md"}
                alt={"feature image"}
                src={"/harness.jpg"}
                objectFit={"cover"}
                opacity={"0.9"}
                borderRadius={"20px"}
                ref={image2}
              />
            </Flex>
            <Stack spacing={4}>
              <Heading className="text-blue-500">Our Commitment</Heading>
              <Text color={"gray.500"} fontSize={"lg"}>
                ENFUSE seeks to maximze the effectiveness of energy and fuel
                usage, particularly in the industrial sector, and thus
                contribute to Nation's industrial development by playing the
                role of catalyst and advisor.
              </Text>
              <Stack
                spacing={4}
                divider={
                  <StackDivider
                    borderColor={useColorModeValue("gray.100", "gray.700")}
                  />
                }
              >
                <Feature
                  icon={
                    <Icon
                      as={IoAnalyticsSharp}
                      color={"yellow.500"}
                      w={5}
                      h={5}
                    />
                  }
                  iconBg={useColorModeValue("yellow.100", "yellow.900")}
                  text={"Oil and Gas"}
                />
                <Feature
                  icon={
                    <Icon as={IoLogoBitcoin} color={"green.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("green.100", "green.900")}
                  text={"Renewable Energy"}
                />
                <Feature
                  icon={
                    <Icon as={IoSearchSharp} color={"purple.500"} w={5} h={5} />
                  }
                  iconBg={useColorModeValue("purple.100", "purple.900")}
                  text={"Energy Efficiency"}
                />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </section>

      <section className="lg:h-screen w-screen">
        <Flex
          w={"full"}
          h={"100vh"}
          blur={"0.5"}
          backgroundImage={"url(/thermalplant.jpg)"}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
        >
          <VStack
            className="backdrop-blur-sm"
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            align={"center"}
          >
            <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
              <Text
                color={"blue.500"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
              >
                OUR OBJECTIVE
              </Text>
              <Text
                color={"gray.300"}
                fontWeight={400}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "1xl", md: "3xl" })}
              >
                ENFUSE is committed for continued awareness on efficient energy
                management and conducts focused conferences,seminars,workshops
                and training programs in different regions of the country every
                year
              </Text>
              <Stack direction={"row"}></Stack>
            </Stack>
          </VStack>
        </Flex>
      </section>

      {/* test */}
      <section className="h-screen flex items-center w-screen">
        <Flex
          w={"full"}
          h={"50vh"}
          // backgroundImage={
          //   'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
          // }
          // backgroundSize={'cover'}
          // backgroundPosition={'center center'}
          backgroundColor={"blue.300"}
          className="flex justify-center"
        >
          <VStack
            className="relative"
            w={"full"}
            justify={"center"}
            alignItems={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r,red.300, blue.300)"}
          >
            <Text
              textColor={"white"}
              opacity={0.1}
              fontSize={"30vw"}
              className="absolute pb-16 "
            >
              VISION
            </Text>
            <Stack maxW={"4xl"} align={"flex-start"} spacing={6}>
              <Text
                color={"gray.100"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
              >
                Achieving Energy Security and Energy Independence by the year
                2030. The Energy & Fuel Users’ Association of India would
                Develop networking with Governmental bodies. Multilateral
                agencies and Institutes, research institutions national and
                international, to achieve these objectives.
              </Text>
              <Stack direction={"row"}>
                <Button
                  bg={"blue.400"}
                  rounded={"full"}
                  color={"white"}
                  _hover={{ bg: "blue.500" }}
                >
                  Know More About Us
                </Button>
                {/* <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Know More About Us
            </Button> */}
              </Stack>
            </Stack>
          </VStack>
        </Flex>
      </section>

      <section className="min-h-screen w-screen">
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={"center"}
            fontSize={{ md: "7xl", base: "5xl" }}
            letterSpacing={"1rem"}
            py={10}
            fontWeight={"bold"}
            textColor={"white"}
          >
            OUR MISSION
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
            <StatsCard
              title={"VOLUNTEERING"}
              stat={
                "A voluntary & non profit organisation seeking to maximise	the effectiveness of energy management in the country"
              }
            />
            <StatsCard
              title={"HARMONISING"}
              stat={
                "integrated outlook harmonising energy management and environment management"
              }
            />
            <StatsCard
              title={"SHARING"}
              stat={
                "Spreading the message of energy conservation and   sustainable development with industry and general public"
              }
            />
            <StatsCard
              title={"CATALYSING"}
              stat={
                "Playing a catalysing and advisory role for sustainable industrial development"
              }
            />
          </SimpleGrid>
        </Box>
      </section>
    </>
  );
}
