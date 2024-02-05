
'use client'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { title } from "@/components/primitives";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  StackDivider,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
} from '@chakra-ui/react'
import React from "react";
import {users} from "./data";
import {Tabs, Tab, Card, CardBody,Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue} from "@nextui-org/react";
export default function AboutPage() {
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
	  const [page, setPage] = React.useState(1);
  const rowsPerPage = 10;

  const pages = Math.ceil(users.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return users.slice(start, end);
  }, [page, users]);
const PlayIcon = createIcon({
	displayName: 'PlayIcon',
	viewBox: '0 0 58 58',
	d: 'M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z',
  })
  
//   const Blob = (props: IconProps) => {
// 	return (
// 	  <Icon
// 		width={'100%'}
// 		viewBox="0 0 578 440"
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 		{...props}>
// 		<path
// 		  fillRule="evenodd"
// 		  clipRule="evenodd"
// 		  d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
// 		  fill="currentColor"
// 		/>
// 	  </Icon>
// 	)
//   }
	return (
		<>
		<div className="flex w-full flex-col justify-center  ">
      <Tabs aria-label="Options">
        <Tab key="president" title="President">
		<section className="min-h-screen">
			<Container maxW={'5xl'} py={12}>
	
	<Stack direction={{ base: 'column', md: 'row' }} spacing={10} className='flex flex-col  items-center'>
	
	
		<Image
		  rounded={'md'}
		 	w={{base:"300px"}}
		  alt={'feature image'}
		  src={
			"/ramENFUSE	.png"
			}
		  objectFit={'contain'}
		  opacity={"1"}
		  borderRadius={"20px"}

	
		/>
	  
	  <Stack spacing={4} className=''>
		
		<Heading className='text-blue-500  text-center md:text-start'>The President</Heading>
		<Text color={'gray.500'} fontSize={'lg'}>
		Shri S.Ramalingam is the former Chairman & Managing Director of Chennai Petroleum Corporation Ltd (CPCL), formerly Madras Refinries Ltd(MRL) a major Public Sector organisation with two Oil Refineries with the capacity of 10 million MTPA. Mr. Ramalingam is also former Chairman, National Aromatics and petrochemicals Corporation Ltd. (AROCHEM) – a joint sector Petrochemical project to manufacture PTA and Xylene and Indian Limited (IAL) – a joint venture company with Multi National Company, Chevron Chemical Corporation, USA to manufacture Lubricating Oil Additives.</Text>
		
	  </Stack>
	  
	</Stack>
  </Container>
	</section>

        </Tab>
        <Tab key="history" title="History">
   
 
		  <section className="min-h-screen">
			<Container maxW={'5xl'} py={12}>
	
	<Stack direction={{ base: 'column', md: 'row' }} spacing={10} className='flex flex-col  items-center'>
	
	
		<Image
		  rounded={'md'}
		 	w={{base:"300px"}}
		  alt={'feature image'}
		  src={
			"/history.jpg"
			}
		  objectFit={'contain'}
		  opacity={"1"}
		  borderRadius={"20px"}

	
		/>
	  
	  <Stack spacing={4} className=''>
		
		<Heading className='text-blue-500  text-center md:text-start'>History of Enfuse</Heading>
		<Text color={'gray.500'} fontSize={'lg'}>
		Way back in 1948 a conference of Steam users and boiler inspectors was held in Madras under the initiation of then Government of Madras, Shri.M Bhakthavatsalam, the then Hon. Minister of Public Works inaugurated the conference. As a fall-out of this Conference, The Madras Provincial Steam Users’ Association was formedand was so registered. The Association was formed on the lines of Manchester Steam Users’Association with the objective of assisting boiler owners and users for solving their technical problems. In 1953 the constitution and Rules of the Association were amended to include the newly constituted states of Andhra,Mysore,Tanvancore and Cochin.The name was changed to ‘South Indian Steam & Fuel Users’ Association’. In January 1965, the name was again changed to ‘Steam & Fuel Users’ Association of India’ in order to bring into its fold, not only steam users, but also all types of fuel using industries. From 1977, the Association has not only concerned itself with matters pertaining to steam and fuel use, but also several others forms of energy, such as electricity, compressed air, renewable sources etc., In order therefore, to reflect its role, scope and range of interests more accurately, in January 1990, the Association has been renamed as the “Energy and Fuel Users’Association of India”.
		
		</Text>
		
	  </Stack>
	  
	</Stack>
  </Container>
	</section>


        </Tab>
		<Tab key="leadership-team" title="Leadership Team">
		<section className="min-h-screen">
			<Container maxW={'3xl'} py={12} minWidth={'2xl'}>
	
		<Table 
      aria-label="Example table with client side pagination"
      bottomContent={
        <div className="flex w-full justify-center">
          <Pagination
            isCompact
            showControls
            showShadow
            color="secondary"
            page={page}
            total={pages}
            onChange={(page) => setPage(page)}
          />
        </div>
      }
	  classNames={{
        wrapper: "min-h-[222px]",
      }}
    >
      <TableHeader>
        <TableColumn key="name">NAME</TableColumn>
		<TableColumn key="address">ADDRESS</TableColumn>
        <TableColumn key="role">ROLE</TableColumn>
        <TableColumn key="email">EMAIL</TableColumn>
		<TableColumn key="phonenumber">PHONE NO</TableColumn>
      </TableHeader>
      <TableBody items={items}>
        {(item) => (
          <TableRow key={item.name}>
            {(columnKey) => <TableCell className='text-white'>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
	  </Container>
	</section>
        </Tab>
        <Tab key="office-bearers" title="Office Bearers">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>  
        </Tab>
      </Tabs>
    </div>  
			
		</>
	);
}
