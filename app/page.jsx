"use client";
import ReactTypingEffect from "react-typing-effect";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
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
} from "@chakra-ui/react";

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from "react-icons/io5";
import { useLayoutEffect, useRef } from "react";

import Lenis from "@studio-freight/lenis";

const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"} className="page2-icons">
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
      className="text-white hover:text-black hover:bg-gray-300 hover:scale-105 duration-700 [clip-path:polygon(-2%_-2%,100%_-2%,100%_50%,-2%_50%)]  hover:[clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
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
  const image2 = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const page1Image = gsap.timeline();
  
    page1Image
      .from(image.current, {
        opacity: 0,
        x: 800,
      })
      .to(image.current, {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.inOut",
      });

    const page1Text = gsap.timeline();
    page1Text
      .from(".page1text", {
        x: 400,
        opacity: 0,
        stagger: 0.5,
      })
      .to(".page1text", {
        x: 0,
        opacity: 1,
      });

      const page2Image = gsap.timeline({
        scrollTrigger: {
          trigger: image2.current,
          start: "top center",
          end: "80% center",
          scrub: true,
          // markers : true,
          // toggleActions : "play reverse play reverse"
        },
      });
    

    page2Image
      .from(image2.current, {
        opacity: 0,
        x: -200,
      
        duration: 0.5,
      })
      .to(image2.current, {
        delay: 0.5,
        opacity: 1,
  
        x: 0,
      });
      const page2Text = gsap.timeline({
        scrollTrigger: {
          trigger: image2.current,
  
          start: "top center",
          end: "80% center",
          scrub: true,
          // markers : true,
          // toggleActions : "play reverse play reverse"
        },
      });

    page2Text
      .from(".scroll-in", {
        opacity: 0,
        x: 200,
      
        duration: 0.5,
      
      })
      .to(".scroll-in", {
        opacity: 1,
        x: 0,
      
     
      });

      const page2Icons = gsap.timeline({
        scrollTrigger: {
          trigger : image2.current,
          start: "10% center",
          end: "60% center",
          // markers : true,
          scrub : true,
          toggleActions : "play reverse play reverse"
          
        }
      });
      page2Icons
            .from(".page2-icons" , {
              x : 300,
              stagger : 0.5,
              opacity : 0,
             
            })
            .to(".page2-icons" , {
              x : 0,
              opacity : 1,
            })

    const page3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        start: "center center",
        end: "120% center",
        scrub: 1,
        //  markers: true,
        pin: true,
        // toggleActions : "play reverse play reverse"
      },
    });
    page3
      .from(".page3", {
        opacity: 0,
        webkitClipPath: "inset(37%)",
        clipPath: "inset(37%)",
      })
      .to(".page3", {
        opacity: 1,
        webkitClipPath: "inset(0)",
        clipPath: "inset(0)",
      })

    const races = document.querySelector(".panel-wrapper");
    console.log(races.offsetWidth);

    function getScrollAmount() {
      let racesWidth = races.scrollWidth;
      return -(racesWidth - window.innerWidth);
    }

    const tween = gsap.to(races, {
      x: getScrollAmount,
      duration: 3,
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".scroll-wrapper",
      start: "top",
      end: () => `+=${getScrollAmount() * -1.5} 50%`,
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true,
      //markers: true
    });

    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <>
      <section className="min-h-screen w-screen">
        <Flex
          w={"full"}
          h={"100vh"}
          opacity={"0.9"}
          backgroundImage={"url(/oil.jpg)"}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
          borderBottomRadius ={"5%"}
        >
          <Stack direction={{ base: "column", md: "row" }} w={"full"}>
            <Flex p={8} flex={1} align={"top"} justify={"end"}>
              <Stack spacing={6} w={"full"} maxW={"lg"}>
                <Heading
                  className="page1text text-transparent  bg-clip-text bg-gradient-to-r from-red-500 to-blue-500"
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  bgColor={"linear(to-r,red.300,blue.300)"}
                >
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
                  <Text as={"span"}>
                    <ReactTypingEffect
                      text={["ENFUSE"]}
                      typingDelay={400}
                      eraseDelay={2000}
                    />
                  </Text>{" "}
                </Heading>
                <Text
                  fontSize={{ base: "md", lg: "lg" }}
                  color={"gray.00"}
                  className="page1text"
                >
                  {" "}
                  ENFUSE is committed for continued awareness on efficient
                  energy management and conducts focused
                  conferences,seminars,workshops and training programs in
                  different regions of the country every
                  year,where,professionals and experts in various disciplines
                  from all over the country and abroad,deliberate,interact and
                  share their knowledge and experiences, for the benefit of
                  various stakeholders.
                </Text>
                <Stack
                  direction={{ base: "column", md: "row" }}
                  spacing={4}
                  className="page1text"
                >
                  <button className="p-4 text-white text-lg font-bold rounded-2xl bg-gradient-to-r from-red-500 to-blue-500 ">
                    Our Current Projects
                  </button>
                </Stack>
              </Stack>
            </Flex>
          </Stack>
        </Flex>
      </section>

      

      <section className="lg:h-screen w-screen flex justify-center items-center">
        <Container maxW={"5xl"} py={12}>
          <Stack direction={{ base: "column", md: "row" }} spacing={20}>
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
            <Stack spacing={4} className="scroll-in" >
              <Heading className="text-blue-500">
                Our Commitment
              </Heading>
              <Text color={"gray.500"} fontSize={"lg"} className="">
                ENFUSE seeks to maximze the effectiveness of energy and fuel
                usage, particularly in the industrial sector, and thus
                contribute to Nation&apos;s industrial development by playing the
                role of catalyst and advisor.
              </Text>
              <Stack
                className=""
                spacing={4}
                divider={
                  <StackDivider
                    borderColor="gray.100"
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

      <section className="min-h-screen w-screen">
        <div className="h-screen w-screen absolute flex justify-center items-center">
          <Text
            // color={"blue.500"}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: "6xl", md: "8xl" })}
            align={"center"}
            alignSelf={"center"}
            className="text-transparent  bg-clip-text bg-gradient-to-r from-red-500 to-blue-500 page3-heading"
          >
            OUR OBJECTIVE
          </Text>
          </div>

        <Flex
          w={"full"}
          h={"100vh"}
          backgroundImage={"url(/background/windmill.jpg)"}
          backgroundSize={"cover"}
          backgroundPosition={"center center"}
          className="page3"
         
        >
          <VStack
            w={"full"}
            justify={"center"}
            px={useBreakpointValue({ base: 4, md: 8 })}
            bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
            align={"center"}
            paddingTop={"50px"}
            className=" backdrop-blur-sm"
          >
            <Stack  align={"flex-start"} spacing={6}>
              <Text
                color={"white"}
              
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "1xl", md: "3xl" })}
                align={"center"}
              >
                The primary objective would be to reduce energy intensity in the
                economy.Also in the agenda is to implement policy framework
                provided by BEE in southern region and provide direction to
                national energy conservation and efficiency efforts and programs
                year
              </Text>

      
            </Stack>
          </VStack>
        </Flex>
      </section>

      {
        /* <section className="h-screen flex items-center w-screen">
        <Flex
          w={"full"}
          h={"50vh"} */
        //backgroundImage={
        //   'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
        // }
        // backgroundSize={'cover'}
        // backgroundPosition={'center center'}
        //     backgroundColor={"blue.300"}
        //     className="flex justify-center"
        //   >
        //     <VStack
        //       className="relative"
        //       w={"full"}
        //       justify={"center"}
        //       alignItems={"center"}
        //       px={useBreakpointValue({ base: 4, md: 8 })}
        //       bgGradient={"linear(to-r,red.300, blue.300)"}
        //     >
        //       <Text
        //         textColor={"white"}
        //         opacity={0.1}
        //         fontSize={"30vw"}
        //         className="absolute pb-16 "
        //       >
        //         VISION
        //       </Text>
        //       <Stack maxW={"4xl"} align={"flex-start"} spacing={6}>
        //         <Text
        //           color={"gray.100"}
        //           fontWeight={700}
        //           lineHeight={1.2}
        //           fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
        //         >
        //           Achieving Energy Security and Energy Independence by the year
        //           2030. The Energy & Fuel Users’ Association of India would
        //           Develop networking with Governmental bodies. Multilateral
        //           agencies and Institutes, research institutions national and
        //           international, to achieve these objectives.
        //         </Text>
        //         <Stack direction={"row"}>
        //           <Button
        //             bg={"blue.400"}
        //             rounded={"full"}
        //             color={"white"}
        //             _hover={{ bg: "blue.500" }}
        //           >
        //             Know More About Us
        //           </Button>
        //           {/* <Button
        //         bg={'whiteAlpha.300'}
        //         rounded={'full'}
        //         color={'white'}
        //         _hover={{ bg: 'whiteAlpha.500' }}>
        //         Know More About Us
        //       </Button> */}
        //         </Stack>
        //       </Stack>
        //     </VStack>
        //   </Flex>
        // </section>
      }

      <section className="h-fit w-fit bg-gradient-to-r from-red-500 to-blue-500 ">
        <div className="scroll-wrapper overflow-x-hidden ">
          <div className="panel-wrapper w-screen flex flex-nowrap ">
            <Text
              textColor={"white"}
              opacity={0.1}
              fontSize={"30vw"}
              className="panel shrink-0"
            >
              VISION
            </Text>

            <Box className="panel h-screen w-screen ">
              <Text
                color={"gray.100"}
                fontWeight={700}
                lineHeight={1.2}
                fontSize={useBreakpointValue({ base: "md", md: "3xl" })}
                className="panel h-screen w-screen shrink-0  flex justify-center items-center p-[10%] "
              >
                Achieving Energy Security and Energy Independence by the year
                2030. The Energy & Fuel Users’ Association of India would
                Develop networking with Governmental bodies. Multilateral
                agencies and Institutes, research institutions national and
                international, to achieve these objectives.
              </Text>
            </Box>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-screen">
        <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={"center"}
            fontSize={{ md: "7xl", base: "5xl" }}
            // letterSpacing={"1rem"}
            py={10}
            fontWeight={"bold"}
            textColor={"white"}
          >
            OUR MISSION
          </chakra.h1>
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 20 }}
          >
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
