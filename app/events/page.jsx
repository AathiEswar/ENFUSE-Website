'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import '../load.css';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Button,
  Card,
  Skeleton,
 Flex, VStack, useBreakpointValue 
} from '@chakra-ui/react';
import axios from 'axios';
import Link from 'next/link'



// Actual content component
const ContentComponent = () => {
  return <div>This is the content that has loaded!</div>;
};

const BlogPostWithImage = () => {
  const [contents, setContents] = useState([]);
const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'wpcXDxMtnnJ3rpeYcPdQgVNjb1Z4x3MRrFYT';
      const apiUrl = 'https://enfuseapp.microcms.io/api/v1/events/';

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
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contents]);



  return (
    <Stack  direction={{ base: 'row', md: 'col' }} py={"6"} className='flex flex-row flex-wrap justify-center items-center w-screen '>
      {loading ? (
        Array.from({ length: 5 }).map((_, index) => (
          <Card className="w-[200px] space-y-5 p-4" radius="lg" key ={index}>
          <Skeleton className="rounded-lg">
            <div className="h-24 rounded-lg bg-default-300"></div>
          </Skeleton>
          <div className="space-y-3">
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-4/5 rounded-lg">
              <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
            </Skeleton>
            <Skeleton className="w-2/5 rounded-lg">  
              <div className="h-3 w-2/5 rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </Card>
        ))
      ) : (contents.map((content) => (
        <Box 
          key={content.id}
          maxW={'350px'}
          w={'full'}
          bg='white'
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden '}
          className='m-5'

        >
          <Box h={'210px'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
            <Image src={content.eyecatch?.url || '/book.jpg'} fill alt="Example" />
          </Box>
          <Stack>
            {content.category && (
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
              >
                {content.category.name}
              </Text>
            )}
            <Heading
              color='gray.700'
              fontSize={'xl'}
              fontFamily={'body'}
            >
              {content.title}
            </Heading>
            
          <Button
            mt={10}
            w={'max-content'}
            bg={'green.400'}
            color={'white'}
            rounded={'xl'}
            boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            _hover={{
              bg: 'green.500',
            }}
            _focus={{
              bg: 'green.500',
            }}>
              <Link href={'/events/slugs?blogid='+content.id}> Know more</Link>
        
          </Button>

        
          </Stack>
          <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
            <Avatar src={content.eyecatch?.url || '/book.jpg'} />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text fontWeight={600}>{content.category?.name}</Text>
              <Text color={'gray.500'}>
                {new Date(content.publishedAt).toLocaleDateString()} · {content.content?.length || 3}min read
              </Text>
            </Stack>
          </Stack>
        </Box>
      )))}
    </Stack>
  );
}
// Loading component
const Loading = () => {
  // return <div className="loading-spinner"></div>;
  return (
    <section className='h-screen w-screen flex justify-center items-center'>
    <div className='loader'>
       <div className="loading-spinner"></div>
       <img src='/enfuse.png'></img>
    </div>
    </section>
  )
};

const MainComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   
    setTimeout(() => {
      setIsLoading(false); 
    }, 1000);
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