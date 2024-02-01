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

// Import axios for data fetching
import axios from 'axios';

export const revalidate = 0;

export default function Page({ params }) {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'wpcXDxMtnnJ3rpeYcPdQgVNjb1Z4x3MRrFYT'; // Replace with your actual API key
      const apiUrl = 'https://enfuseapp.microcms.io/api/v1/blogs/'+params.slugs;

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
    };

    fetchData();
  }, []);

  return (
    <Container maxW={'7xl'} p="12">
      {content && (
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
                color={useColorModeValue('white.700', 'white.200')}
                fontSize="lg"
                dangerouslySetInnerHTML={{ __html: content.content }}
                className='text-white'
              />
              
            </Box>
          </Box>
          
        </>
      )}
    </Container>
  );
}
