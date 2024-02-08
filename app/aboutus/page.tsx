
'use client'
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import { title } from "@/components/primitives";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
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
	Avatar,
	SimpleGrid,
	chakra,
} from '@chakra-ui/react'
import React from "react";
import { users } from "./data";
import { Card, CardBody, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination, getKeyValue } from "@nextui-org/react";
export default function AboutPage() {
	const Feature = ({ text, icon, iconBg }: { text: string, icon: React.ReactNode, iconBg: string }) => {
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
	const rowsPerPage = 7;

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

	const testimonials = [
		{
			name: 'Er. Jeyaram',
			role: 'Joint Secretary',
			content:
				'He is a master in Environmental Engineering from College of Engg Guindy Anna University Chennai, graduated in 1994 with distinction and got University medal on merit. He has more than 24 years of experience in the field of design / consulting / tendering / project management of water/wastewater treatment plants, /reuse/ recycling of waste (solid /liquid/gaseous), conservation of water and Energy',
			avatar:
				'/account.png',
		},
		{
			name: 'Dr.A.Peer Fathima',
			role: 'Member',
			content:
				"Dr.A.Peer Fathima has obtained her B.E degree in Electrical & amp; Electronics Engineering from Madurai Kamaraj University in the year 1990, M.E degree in High voltage Engineering from Anna University, Chennai, and M.S degree in Electronics &amp; Control from BITS Pilani in the year 1995. She received her Ph.D degree from Anna university, Chennai in the year 2008",
			avatar:
				'/account.png',
		},
		{
			name: 'ER.R.RAJUPANDI ',
			role: 'Chairman – Power Generation Sector',
			content:
				"ER.R.RAJUPANDI Obtained Bachelors degree in Electrical Engineering from Madras University, studiedIn PSG College of Technology, Coimbatore in the year 1968. Post graduate in Power System got the degree from Madurai Kamaraj University in the year 1988.My Thesis on “Economical Scheduling of Generators” was awarded as an exceptional work by the university.",
			avatar:
				'/account.png',
		},
		{
			name: 'Sujatha (Mukundan) Srinivasan',
			role: 'Director at Servals Automation Pvt Ltd',
			content:
				'Sujatha (Mukundan) Srinivasan is a Director at Servals Automation Pvt Ltd, a social enterprise, engaged in creating Sustainable Cooking Solutions for Developing Countries. Founded in 2002 by Mr. P. Mukundan, Servals has been doing pioneering work in the field of rural cooking energy solutions. Sujatha, after a successful stint of a decade with The Gallup Organisation (in India and US), has been associated with the growth of the organization from the R&amp;D stage of the product, through the cycle of commercialization, market leadership and continuous market creation and R&amp;D improvements.',
			avatar:
				'/account.png',
		},
	]

	const backgrounds = [
		`url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
		`url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
	]

	interface TestimonialCardProps {
		name: string
		role: string
		content: string
		avatar: string
		index: number
	}

	function TestimonialCard(props: TestimonialCardProps) {
		const { name, role, content, avatar, index } = props
		return (
			<Flex
				boxShadow={'lg'}
				maxW={'640px'}
				direction={{ base: 'column-reverse', md: 'row' }}
				width={'full'}
				rounded={'xl'}
				p={10}
				justifyContent={'space-between'}
				position={'relative'}
				bg={'rgb(30 41 59)'}
				_after={{
					content: '""',
					position: 'absolute',
					height: '21px',
					width: '29px',
					left: '35px',
					top: '-10px',
					backgroundSize: 'cover',
					backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
				}}
				_before={{
					content: '""',
					position: 'absolute',
					zIndex: '-1',
					height: 'full',
					maxW: '640px',
					width: 'full',
					filter: 'blur(40px)',
					transform: 'scale(0.98)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					top: 0,
					left: 0,
					backgroundImage: backgrounds[index % 4],
				}}>
				<Flex direction={'column'} textAlign={'left'} justifyContent={'space-between'}>
					<chakra.p fontFamily={'Inter'} fontWeight={'medium'} color={'white'} fontSize={'15px'} pb={4}>
						{content}
					</chakra.p>
					<chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} color={'white'} fontSize={14}>
						{name}
						<chakra.span fontFamily={'Inter'} fontWeight={'medium'} color={'white'}>
							{' '}
							- {role}
						</chakra.span>
					</chakra.p>
				</Flex>
				<Avatar
					src={avatar}
					height={'[40%]'}
					width={'[40%]'}
					alignSelf={'center'}
					m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
				/>
			</Flex>
		)
	}

	return (
		<div className="flex w-[100%] flex-col justify-center items-center min-h-[100vh]">
		<Tabs position="relative" isFitted variant="unstyled">
	<TabList className='max-w-screen ' >
		<Tab className='text-white' fontSize={"smaller"} >President </Tab>
		<Tab className='text-white ' fontSize={"smaller"} >History</Tab>
		
		<Tab className='text-white  ' fontSize={"smaller"} >Achievements</Tab>
		<Tab className='text-white invisible md:visible' fontSize={"smaller"} >Team</Tab>
	</TabList>
	<TabIndicator
		mt="-1.5px"
		height="2px"
		bg="blue.500"
		borderRadius="1px"	
	/>
	<TabPanels>
		<TabPanel>
		<section className="min-h-screen">
						<Container maxW={'5xl'} py={12}>

							<Stack direction={{ base: 'column', md: 'row' }} spacing={10} className='flex flex-col  items-center'>


								<Image
									rounded={'md'}
									w={{ base: "[30%]" }}
									alt={'feature image'}
									src={
										"/ramENFUSE	.png"
									}
									objectFit={'contain'}


								/>

								<Stack spacing={4} className='w-[80%]'>

									<Heading className='text-blue-500  text-center md:text-start'>The President</Heading>
									<Text color={'gray.500'} fontSize={'lg'}>
										Shri S.Ramalingam is the former Chairman & Managing Director of Chennai Petroleum Corporation Ltd (CPCL), formerly Madras Refinries Ltd(MRL) a major Public Sector organisation with two Oil Refineries with the capacity of 10 million MTPA. Mr. Ramalingam is also former Chairman, National Aromatics and petrochemicals Corporation Ltd. (AROCHEM) – a joint sector Petrochemical project to manufacture PTA and Xylene and Indian Limited (IAL) – a joint venture company with Multi National Company, Chevron Chemical Corporation, USA to manufacture Lubricating Oil Additives.</Text>

								</Stack>

							</Stack>
						</Container>
					</section>
		</TabPanel>
		<TabPanel>
		<section className="min-h-screen max-w-screen" >
						<Container maxW={'5xl'} py={12}>

							<Stack direction={{ base: 'column', md: 'row' }} spacing={10} className='flex flex-col  items-center'>


								<Image
									rounded={'md'}
									w={{ base: "300px" }}
									alt={'feature image'}
									src={
										"/history.png"
									}
									objectFit={'contain'}
									opacity={"1"}
									borderRadius={"20px"}


								/>

								<Stack spacing={4} className=''>

									<Heading className='text-blue-500  text-center md:text-start'>History of ENFUSE</Heading>
									<Text color={'gray.500'} fontSize={'lg'} >
										Way back in 1948 a conference of Steam users and boiler inspectors was held in Madras under the initiation of then Government of Madras, Shri.M Bhakthavatsalam, the then Hon. Minister of Public Works inaugurated the conference. As a fall-out of this Conference, The Madras Provincial Steam Users’ Association was formedand was so registered. The Association was formed on the lines of Manchester Steam Users’Association with the objective of assisting boiler owners and users for solving their technical problems. In 1953 the constitution and Rules of the Association were amended to include the newly constituted states of Andhra,Mysore,Tanvancore and Cochin.The name was changed to ‘South Indian Steam & Fuel Users’ Association’. In January 1965, the name was again changed to ‘Steam & Fuel Users’ Association of India’ in order to bring into its fold, not only steam users, but also all types of fuel using industries. From 1977, the Association has not only concerned itself with matters pertaining to steam and fuel use, but also several others forms of energy, such as electricity, compressed air, renewable sources etc., In order therefore, to reflect its role, scope and range of interests more accurately, in January 1990, the Association has been renamed as the “Energy and Fuel Users’Association of India”.

									</Text>

								</Stack>

							</Stack>
						</Container>
					</section>

		</TabPanel>
		<TabPanel>
			<section>
			<Flex
						textAlign={'center'}
						pt={10}
						justifyContent={'center'}
						direction={'column'}
						width={'full'}
						overflow={'hidden'}>
						<Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
							<chakra.h3
								fontFamily={'Work Sans'}
								fontWeight={'bold'}
								fontSize={20}
								textTransform={'uppercase'}
								color={'purple.400'}>
								ACHIEVEMENTS
							</chakra.h3>
							<chakra.h1
								py={5}
								fontSize={48}
								fontFamily={'Work Sans'}
								fontWeight={'bold'}
								color={'white'}>
								Our ground breaking achievments include.
							</chakra.h1>

						</Box>
						<SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'20'} mt={16} mb={16}>
							{testimonials.map((cardInfo, index) => (
								<TestimonialCard key={index} {...cardInfo} index={index} />
							))}
						</SimpleGrid>
						<Box>

						</Box>
					</Flex>
			</section>
		</TabPanel>
		<TabPanel>
		<section className="min-h-screen invisible md:visible">
						<Container maxW={'4xl'} className="sm:w-3/4">

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
									wrapper: "min-h-[100px]",
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
		</TabPanel>
		
	</TabPanels>
</Tabs>
		</div>

	);
}


{/* <Tabs position="relative" variant="unstyled">
	<TabList>
		<Tab>President </Tab>
		<Tab>History</Tab>
		<Tab>Leadership Team</Tab>
		<Tab>Achiever</Tab>
	</TabList>
	<TabIndicator
		mt="-1.5px"
		height="2px"
		bg="blue.500"
		borderRadius="1px"
	/>
	<TabPanels>
		<TabPanel>
		<section className="min-h-screen">
						<Container maxW={'5xl'} py={12}>

							<Stack direction={{ base: 'column', md: 'row' }} spacing={10} className='flex flex-col  items-center'>


								<Image
									rounded={'md'}
									w={{ base: "[30%]" }}
									alt={'feature image'}
									src={
										"/ramENFUSE	.png"
									}
									objectFit={'contain'}


								/>

								<Stack spacing={4} className='w-[60%]'>

									<Heading className='text-blue-500  text-center md:text-start'>The President</Heading>
									<Text color={'gray.500'} fontSize={'lg'}>
										Shri S.Ramalingam is the former Chairman & Managing Director of Chennai Petroleum Corporation Ltd (CPCL), formerly Madras Refinries Ltd(MRL) a major Public Sector organisation with two Oil Refineries with the capacity of 10 million MTPA. Mr. Ramalingam is also former Chairman, National Aromatics and petrochemicals Corporation Ltd. (AROCHEM) – a joint sector Petrochemical project to manufacture PTA and Xylene and Indian Limited (IAL) – a joint venture company with Multi National Company, Chevron Chemical Corporation, USA to manufacture Lubricating Oil Additives.</Text>

								</Stack>

							</Stack>
						</Container>
					</section>
		</TabPanel>
		<TabPanel>
		<section className="min-h-screen max-w-screen" >
						<Container maxW={'5xl'} py={12}>

							<Stack direction={{ base: 'column', md: 'row' }} spacing={10} className='flex flex-col  items-center'>


								<Image
									rounded={'md'}
									w={{ base: "300px" }}
									alt={'feature image'}
									src={
										"/history.png"
									}
									objectFit={'contain'}
									opacity={"1"}
									borderRadius={"20px"}


								/>

								<Stack spacing={4} className=''>

									<Heading className='text-blue-500  text-center md:text-start'>History of ENFUSE</Heading>
									<Text color={'gray.500'} fontSize={'lg'} >
										Way back in 1948 a conference of Steam users and boiler inspectors was held in Madras under the initiation of then Government of Madras, Shri.M Bhakthavatsalam, the then Hon. Minister of Public Works inaugurated the conference. As a fall-out of this Conference, The Madras Provincial Steam Users’ Association was formedand was so registered. The Association was formed on the lines of Manchester Steam Users’Association with the objective of assisting boiler owners and users for solving their technical problems. In 1953 the constitution and Rules of the Association were amended to include the newly constituted states of Andhra,Mysore,Tanvancore and Cochin.The name was changed to ‘South Indian Steam & Fuel Users’ Association’. In January 1965, the name was again changed to ‘Steam & Fuel Users’ Association of India’ in order to bring into its fold, not only steam users, but also all types of fuel using industries. From 1977, the Association has not only concerned itself with matters pertaining to steam and fuel use, but also several others forms of energy, such as electricity, compressed air, renewable sources etc., In order therefore, to reflect its role, scope and range of interests more accurately, in January 1990, the Association has been renamed as the “Energy and Fuel Users’Association of India”.

									</Text>

								</Stack>

							</Stack>
						</Container>
					</section>

		</TabPanel>
		<TabPanel>
		<section className="min-h-screen ">
						<Container maxW={'4xl'} className="sm:w-3/4">

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
		</TabPanel>
		<TabPanel>
			<section>
			<Flex
						textAlign={'center'}
						pt={10}
						justifyContent={'center'}
						direction={'column'}
						width={'full'}
						overflow={'hidden'}>
						<Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
							<chakra.h3
								fontFamily={'Work Sans'}
								fontWeight={'bold'}
								fontSize={20}
								textTransform={'uppercase'}
								color={'purple.400'}>
								ACHIEVEMENTS
							</chakra.h3>
							<chakra.h1
								py={5}
								fontSize={48}
								fontFamily={'Work Sans'}
								fontWeight={'bold'}
								color={'white'}>
								Our ground breaking achievments include.
							</chakra.h1>

						</Box>
						<SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'20'} mt={16} mb={16} mx={'auto'}>
							{testimonials.map((cardInfo, index) => (
								<TestimonialCard key={index} {...cardInfo} index={index} />
							))}
						</SimpleGrid>
						<Box>

						</Box>
					</Flex>
			</section>
		</TabPanel>
	</TabPanels>
</Tabs> */}