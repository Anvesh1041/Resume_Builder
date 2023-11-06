import React, { useState } from 'react';
import Navbar from './Layouts/Navbar'; // Import the Navbar component
import {
    Box,
    Container,
    Stack,
    Vstack,
    Text,
    HStack,
    Heading,
    Button,
} from '@chakra-ui/react';
import Builder from './Builder';
import ResumePreview from './ResumePreview'; // Import the default ResumePreview
import ResumePreview2 from './ResumePreview2'; // Import the alternate ResumePreview
import ResumePreview3 from './ResumePreview3'; // Import the template 3 ResumePreview
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import Header from "./Layouts/Header";
import Login from './Login';

const Main = () => {
    const { printElem } = useResume();
    const [selectedTemplate, setSelectedTemplate] = useState('default');

    const handlePrint = useReactToPrint({
        content: () => printElem.current,
    });

    const handleTemplateChange = (template) => {
        setSelectedTemplate(template);
    };

    return (
        <div>

            <Navbar onTemplateChange={handleTemplateChange} selectedTemplate={selectedTemplate} />
            {/* <Login/> */}
            <Header/>
            <Container
                bg={'gray.50'}
                minW={'full'}
                py={10}
                id='builder'
            >
                <Heading as='h4' size='lg' textAlign={'center'} color={'gray.700'} style={{ fontFamily: 'Poppins' }} fontWeight={'medium'}>Builder Dashboard</Heading>
                <Container maxW={'7xl'} px={8} my={3}>
                    <Stack justifyContent={'space-between'} pt={4} direction={{ base: 'column', sm: 'row' }}>
                        <ThemeSelect />
                        <Button rightIcon={<MdOutlineFileDownload />} onClick={handlePrint} colorScheme={'purple'}>Download</Button>
                    </Stack>
                </Container>
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    gap={4}
                    mx={{ base: 2, md: 12 }}
                    my={8}
                    alignItems={'flex-start'}
                    justifyContent={'space-between'}
                >
                    <Builder />
                    {selectedTemplate === 'default' ? (
                        <ResumePreview />
                    ) : selectedTemplate === 'alternate' ? (
                        <ResumePreview2 />
                    ) : (
                        selectedTemplate === 'template3' ? (
                            <ResumePreview3 />
                        ) : (
                            null
                        )
                    )}
                </Stack>
            </Container>
        </div>
    );
}

export default Main;
