'use client'
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
  } from '@chakra-ui/react'
  import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";


  const Feature = ({ text, icon, iconBg }) => {
	return (
	  <Stack direction={'row'} align={'center'}>
		<Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
		  {icon}
		</Flex>
		<Text fontWeight={600} className='text-white'>{text}</Text>
	  </Stack>
	)
  }
  
export default function Home() {
	return (<>
		<section className='lg:h-screen'>
		<Stack direction={{ base: 'column', md: 'row' }}>
      <Flex  p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
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
            </Text> */}
           {' '}
            <Text color={'blue.400'} as={'span'}>
              ENFUSE
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}> ENFUSE is committed for continued awareness on efficient energy management and conducts focused conferences,seminars,workshops and training programs in different regions of the country every year,where,professionals and experts in various disciplines from all over the country and abroad,deliberate,interact and share their knowledge and experiences, for the benefit of various stakeholders.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button rounded={'full'}>Our Current Projects</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={
            '/oil.jpg'
          }
		  borderRadius={"20px"}
        />
      </Flex>
    </Stack>
		</section>

		  <section className='lg:h-screen'>
		  <Container maxW={'5xl'} py={12}>
	
	<Stack direction={{ base: 'column-reverse', md: 'row' }} spacing={10}>
	<Flex>
	
		<Image
		  rounded={'md'}
		  alt={'feature image'}
		  src={
			"/harness.jpg"
			}
		  objectFit={'cover'}
		  opacity={"0.9"}
		  borderRadius={"20px"}

	
		/>
	  </Flex>
	  <Stack spacing={4}>
		
		<Heading className='text-blue-500'>Harnessing Natural Resources</Heading>
		<Text color={'gray.500'} fontSize={'lg'}>
		ENFUSE seeks to maximze the effectiveness of energy and fuel usage, particularly in the industrial sector, and thus contribute to Nation's industrial development by playing the role of catalyst and advisor.
		</Text>
		<Stack
		  spacing={4}
		  divider={
			<StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
		  }>
		  <Feature
			icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
			iconBg={useColorModeValue('yellow.100', 'yellow.900')}
			text={'Oil and Gas'}
		  />
		  <Feature
			icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
			iconBg={useColorModeValue('green.100', 'green.900')}
			text={'Renewable Energy'}
		  />
		  <Feature
			icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
			iconBg={useColorModeValue('purple.100', 'purple.900')}
			text={'Energy Efficiency'}
		  />
		</Stack>
	  </Stack>
	  
	</Stack>
  </Container>
		  </section>
	

		  <section className='lg:h-screen'>
		  <Flex
      w={'full'}
      h={'100vh'}
	  blur={"0.5"}
      backgroundImage={
        'url(/thermalplant.jpg)'
		
      }
	  
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
	  className='backdrop-blur-sm'
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
		align={'center'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
		<Text
            color={'blue.500'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '5xl' })}>
			OUR OBJECTIVE
          </Text>
          <Text
            color={"gray.300"}
            fontWeight={400}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '1xl', md: '3xl' })}>
            ENFUSE is committed for continued awareness on efficient energy management and conducts focused conferences,seminars,workshops and training programs in different regions of the country every year
          </Text>
          <Stack direction={'row'}>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
		  </section>




		<section className='h-screen'>
		
		</section>
		</>
	);
}
