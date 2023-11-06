import { IconButton } from '@chakra-ui/react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import {
    Stack,
    Flex,
    Heading,
    Spacer,
    HStack,
    Text,
    Button,
    useMediaQuery,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
// import Login from './Login';

const handleContactClick = () => {
    // Replace 'email@example.com' with your desired email address
    const email = 'resumebuilder-contact@gmail.com';
    const subject = 'About the Resume_Builder Website'; // You can set a subject if you want

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`;

    window.location.href = mailtoLink;
};


const Navbar = ({ onTemplateChange, selectedTemplate }) => {
    const [isMobile] = useMediaQuery("(max-width: 600px)");

    const handleTemplateChange = (template) => {
        onTemplateChange(template); // Notify the parent component of the template change
    };

    return (
        <Stack p={5} bg={'gray.50'} as='header'>
            <Flex w='full' alignItems={'center'}>
                <Heading
                    as='h3'
                    ml={{ base: 0, sm: 8 }}
                    size={isMobile ? 'md' : 'lg'}
                    fontWeight={'thin'}
                    color='green.500'
                    fontFamily="Pacifico"
                >
                    Resume Builder
                </Heading>
                <Spacer />
                {isMobile ? (
                    <IconButton
                        aria-label='Toggle navigation'
                        icon={<FaInstagram />}
                        mr={{ base: 0, sm: 8 }}
                        variant='ghost'
                    />
                ) : (
                    <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' fontFamily='Poppins'>
                        <Text as='a' href='#' fontSize='lg'>
                            Home
                        </Text>
                        {/* <Link to='/login' > */}
                        {/* <Text as='a' href='/login' fontSize='lg'>
                            Login
                        </Text> */}
                        {/* </Link> */}
                        <Menu>
                            <MenuButton as={Button} fontSize='lg' colorScheme='green'>
                                Choose Template
                            </MenuButton>
                            <MenuList>
                                <MenuItem
                                    onClick={() => handleTemplateChange('default')}
                                >
                                    Template 1
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleTemplateChange('alternate')}
                                >
                                    Template 2
                                </MenuItem>
                                <MenuItem
                                    onClick={() => handleTemplateChange('template3')} // Added support for the third template
                                >
                                    Template 3
                                </MenuItem>
                            </MenuList>
                        </Menu>
                        {/* <Text as='a' href='#' fontSize='lg'>
                            About
                </Text>*/}
                        <button
                            onClick={handleContactClick}
                            style={{ fontWeight: 'bold' }}
                        >
                            Contact
                        </button>
                    </HStack>
                )}
            </Flex>
        </Stack>
    );
};

export default Navbar;
