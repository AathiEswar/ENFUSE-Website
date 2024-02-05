'use client'

import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
  AspectRatio 
} from '@chakra-ui/react'

export default function SplitScreen() {
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
              }}>
              ENFUSE
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              Presentation
            </Text>{' '}
          </Heading>

          <AspectRatio maxW='560px' ratio={1}>
          <iframe
            title='ENFUSE'
            src='https://www.youtube.com/embed/LI6rnv4ExoE?si=Tzi3m-hdjlqtkgGy'
            allowFullScreen
          />
          
          
        </AspectRatio>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          Mr. S. Ramalingam, President of Enfuse gave a speech on the topic ” Sustainable Development – Green GDP AND Regenerative Economy” at the Waterloo Institute of Sustainable Energy(WISE), University of Waterloo, Canada. The presentation in its entirety can be viewed below.
          </Text>
         
        </Stack>
        
      </Flex>
    

     
    </Stack>
       

        
        
  
    

     

        <AspectRatio maxW='560px' ratio={1}>
        <iframe id="s_pdf_frame" src="//docs.google.com/gview?embedded=true&amp;url=http://enfuse.org/wp-content/uploads/2017/03/ENFUSE-Presentation-3.ppt" frameborder="0"></iframe>
          
        </AspectRatio>
        </>
  )
}
