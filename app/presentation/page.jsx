'use client'

import {
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  useBreakpointValue,
  AspectRatio,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { Card, Skeleton } from '@nextui-org/react';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();
import { Box } from '@chakra-ui/react'
export default function SplitScreen() {
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate an asynchronous task, e.g., fetching data or loading an iframe
        // In a real-world scenario, you might replace this with actual data fetching logic
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Once the task is completed, set loading to false
        setLoading(false);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []); // The empty dependency array ensures the effect runs only once

  const nextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };
  const prePage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber - 1);
  };
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                className='text-white'
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}
              >
                ENFUSE
              </Text>
              <br />{' '}
              <Text color={'blue.400'} as={'span'}>
                Presentation
              </Text>{' '}
            </Heading>

            <>
              <AspectRatio maxW='560px' ratio={1}>
                <iframe
                  title='ENFUSE'
                  src='https://www.youtube.com/embed/LI6rnv4ExoE?si=Tzi3m-hdjlqtkgGy'
                  allowFullScreen
                />
              </AspectRatio>
              <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
                Mr. S. Ramalingam, President of Enfuse, gave a speech on the topic &quot; Sustainable Development &ldquo; Green GDP AND Regenerative Economy&quot; at the Waterloo Institute of Sustainable Energy , University of Waterloo, Canada. The presentation in its entirety can be viewed below.
              </Text>
            </>
          </Stack>
        </Flex>
      </Stack>

      {loading ? (
        <Card className='w-[200px] space-y-5 p-4' radius='lg'>
          <Skeleton className='rounded-lg'>
            <div className='h-24 rounded-lg bg-default-300'></div>
          </Skeleton>
          <div className='space-y-3'>
            <Skeleton className='w-3/5 rounded-lg'>
              <div className='h-3 w-3/5 rounded-lg bg-default-200'></div>
            </Skeleton>
            <Skeleton className='w-4/5 rounded-lg'>
              <div className='h-3 w-4/5 rounded-lg bg-default-200'></div>
            </Skeleton>
          </div>
        </Card>
      ) : (
        <Box>
            <div className="w-[200px] space-y-5 p-4">
              <Document file='/enfuse-ppt.pdf' onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber}     renderAnnotationLayer={false} 
  renderTextLayer={false} />
              </Document>
              <div className='grid gap-4 grid-cols-2'> 
              <Button  onClick={prePage} disabled={pageNumber >= numPages}>
                Prev Page
              </Button>
              <Button  onClick={nextPage} disabled={pageNumber >= numPages}>
                Next Page
              </Button>
             </div>
             
              <br />
              <br />
                </div>
            </Box>
          )}
        </>
  );
}