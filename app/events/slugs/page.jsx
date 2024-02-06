// Import necessary Chakra UI components and React hooks
"use client"
import { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  VStack,
  
} from '@chakra-ui/react';
import {Card, Skeleton} from "@nextui-org/react";
import { useSearchParams } from 'next/navigation'
// Import axios for data fetching
import axios from 'axios';

export const revalidate = 0;

export default function Page() {
  const searchParams = useSearchParams()
 
  const search = searchParams.get('blogid')
  const [content, setContent] = useState(null);
const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'wpcXDxMtnnJ3rpeYcPdQgVNjb1Z4x3MRrFYT'; // Replace with your actual API key
      const apiUrl = 'https://enfuseapp.microcms.io/api/v1/events/'+search;

      try {
        const response = await axios.get(apiUrl, {
          headers: {
            'X-MICROCMS-API-KEY': apiKey,
          },
        });

        setContent(response.data); // Assuming you want the first item in the contents array
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxW={'7xl'} p="12">
      {loading ? (        <Card className="w-[200px] space-y-5 p-4" radius="lg">
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
          </div>
        </Card>)

    :(
      content && (
        <>
          <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between">

            <Box
              display="flex"
              flex="1"
              flexDirection="column"
              justifyContent="center"
              marginTop={{ base: '3', sm: '0' }}>
              <HStack spacing="2" marginTop="2">
                {content.category && (
                  <Tag size={'md'} variant="solid" colorScheme="orange">
                    {"Updated at: "+content.category.updatedAt}
                  </Tag>
                )}
              </HStack>
              <Heading marginTop="1">
                <Text textDecoration="none"  className='text-white' _hover={{ textDecoration: 'none' }}>
                  {content.title}
                </Text>
              </Heading>
              <Text
                as="div"
                marginTop="2"
                color="white"
                fontSize="lg"
                dangerouslySetInnerHTML={{ __html: content.content }}
                className='text-white'
              />
              
            </Box>
          </Box>
          
        </>
      ))}
    </Container>
  );
}
