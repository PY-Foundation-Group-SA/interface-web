import React from 'react';

import { Flex, Heading, Image, Link, Text } from '@chakra-ui/core';

import InputWithIcon from '../../components/input/InputWithIcon';
import SolidButton from '../../components/button/SolidButton';

const LeftContainer: React.FunctionComponent = ({ children }) => (
    <Flex direction='column' flexGrow={1} alignItems='center' justifyContent='center' marginLeft={ { xs: 8, sm: 24, md: 16 } } marginRight={ { xs: 8, sm: 24, md: 0 } }>
        { children }
    </Flex>
);

const HeaderTextGroup = () => (
    <>
        <Heading color='petcode.blue.400' fontSize={ { xs: '5xl', sm: '6xl', md: '5xl', lg: '6xl' } } textAlign='center'>
            Welcome to the PetCode Network!
        </Heading>
        <Text color='petcode.neutral.600' fontSize={ { xs: 'xl', lg: '3xl' } } fontWeight='thin' textAlign='center' lineHeight='shorter'>
            Sign up to create your pet profile, your personal profile, and more!
        </Text>
    </>
);

const RegistrationForm = () => (
    <Flex direction='column' alignItems='center' width={ { xs: '90%', sm: '80%', md: '100%', lg: '70%' } } marginY={8}>
        <InputWithIcon
            iconName='hashtag'
            inputGroupProps={ { width: '100%', marginY: 2 } }
            inputProps={ { placeholder: 'Petcode Tag Number' } }
        />
        <SolidButton variantColor='petcode.blue' marginY={3}> 
            <Text fontSize='xl' fontWeight='thin' textTransform='uppercase'>Sign Up</Text>
        </SolidButton>
        <Text color='petcode.neutral.500' fontSize='lg'>
            Already have an account?{ ' ' }
            <Link color='petcode.blue.400'>
                Sign In
            </Link>
        </Text>
        <Text color='petcode.yellow' fontSize='lg' marginTop={3}>
            <Link>
                Need Help?
            </Link>
        </Text>
    </Flex>
);

const RegistrationPage = () => (
    <Flex direction='row' height='100%'>
        <LeftContainer>
            <HeaderTextGroup/>
            <RegistrationForm/>
        </LeftContainer>
        <Flex
            display={ { xs: 'none', md: 'flex' } } justifyContent='flex-end'
            direction='column' flexBasis='553px'
        >
            <Image alt='Dog with tongue out' src='/media/dog-with-tongue-out.png'/>
        </Flex>
    </Flex>
);

export default RegistrationPage;
