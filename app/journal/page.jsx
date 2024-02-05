'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  Img,
  Flex,
  HStack,
} from '@chakra-ui/react';

import { BsArrowUpRight, BsHeartFill, BsHeart } from 'react-icons/bs'
import axios from 'axios';
import Link from 'next/link';
import '../load.css';

const Loading = () => {
  return <div className="loading-spinner"></div>;
};

const BlogPostWithImage = () => {
  const [contents, setContents] = useState([]);
  const [liked, setLiked] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'wpcXDxMtnnJ3rpeYcPdQgVNjb1Z4x3MRrFYT';
      const apiUrl = 'https://enfuseapp.microcms.io/api/v1/journal/';

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'X-MICROCMS-API-KEY': apiKey,
          },
        });

        setContents(response.data.contents);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, [contents]);

  console.log(contents);

  return (
    <Stack  direction={{ base: 'row', md: 'row' }} py={"6"} className='flex flex-row flex-wrap justify-center '>
      {contents.map((content) => (
     <Box
     w="xs"
     rounded={'sm'}
     my={5}
     mx={[0, 5]}
     overflow={'hidden'}
     bg="white"
     border={'1px'}
     borderColor="black"
     boxShadow={useColorModeValue('6px 6px 0 black', '6px 6px 0 cyan')}>
     <Box h={'200px'} borderBottom={'1px'} borderColor="black">
       <Img
         src={
           'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
         }
         roundedTop={'sm'}
         objectFit="cover"
         h="full"
         w="full"
         alt={'Blog Image'}
       />
     </Box>
     <Box p={4}>
       <Box bg="black" display={'inline-block'} px={2} py={1} color="white" mb={2}>
         <Text fontSize={'xs'} fontWeight="medium">
           {content.authors}
         </Text>
       </Box>
       <Heading color={'black'} fontSize={'2xl'} noOfLines={1}>
         {content.title}
       </Heading>
       <Text color={'gray.500'} noOfLines={2}>
         I{content.details}
       </Text>
     </Box>
     <HStack borderTop={'1px'} color="black">
       <Flex
         p={4}
         alignItems="center"
         justifyContent={'space-between'}
         roundedBottom={'sm'}
         cursor={'pointer'}
         w="full">
         <Link fontSize={'md'} fontWeight={'semibold'} href={content.fileurl}>
           View
         </Link>
       </Flex>

     </HStack>
   </Box>
      ))}
    </Stack>
  );
}

const MainComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 5000); 
  }, []); 

  return (
    <div>
      {isLoading ? (
        <Loading /> 
      ) : (
        <BlogPostWithImage />
      )}
    </div>
  );
};

export default MainComponent;