import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Textarea, Select, Text } from '@chakra-ui/react'
import { useResume } from '../../Context';
import { v4 as uuidv4 } from 'uuid';
import { MdDelete } from 'react-icons/md';
import React, { useState } from 'react'; // Import useState from 'react'


const Projects = () => {
    const { projects, setProjects } = useResume();

    // Step 1: Define the URL error state and setUrlError function
    const [urlError, setUrlError] = useState(''); // Initialize with an empty string

    const addMore = () => {
        setProjects([...projects, projects]);
    }

    // Step 2: Validate the URL and update the URL error state
    const validateUrl = (url) => {
        const urlPattern = /^(https?|ftp):\/\/(www\.)?[^\s/$.?#].*$/i;
        return urlPattern.test(url);
    };

    const handleChange = (e, id) => {
        // ...
        const { name, value } = e.target;
        let updatedValue = value;

        if (name === 'url') {
            if (!validateUrl(value)) {
                // Step 2: Update the URL error state with an error message
                setUrlError('Invalid URL format');
            } else {
                // Step 2: Clear the URL error state if the URL is valid
                setUrlError('');
            }
        }

        // Continue with updating the state if the URL is valid
        const updatedProject = projects.map((project) => (
            project.id === id ? Object.assign(project, { id: uuidv4(), [name]: value }) : project
        ));

        setProjects(updatedProject);
    }

    const deleteProject = (id) => {
        setProjects(projects.filter((elem) => elem.id !== id))
    }

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {
                    projects.map((project, index) => (
                        <AccordionItem key={index}>
                            <h2>
                                <AccordionButton>
                                    <Box flex='1' textAlign='left'>
                                        <Text fontWeight={'medium'}>{project.name ? project.name : "Project Name"}</Text>
                                    </Box>
                                    <AccordionIcon />
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4}>

                                <VStack spacing={3} alignItems={'flex-end'}>
                                    <Input value={project.name} onChange={(e) => handleChange(e, project.id)} name='name' id='name' type='text' variant='filled' placeholder='Project Name' />

                                    <Input
                                        value={project.url}
                                        onChange={(e) => handleChange(e, project.id)}
                                        onBlur={(e) => {
                                            handleChange(e, project.id)
                                            setUrlError('')
                                        }}
                                        name='url'
                                        id='url'
                                        type='url'
                                        variant='filled'
                                        placeholder='Project URL'
                                    />
                                    {urlError && (
                                        <Text color="red.500" fontSize="sm">
                                            {urlError}
                                        </Text>
                                    )}

                                    <Textarea value={project.description} onChange={(e) => handleChange(e, project.id)} name='description' id='description' variant='filled' placeholder='Description...' />

                                    <Button rightIcon={<MdDelete />} onClick={() => deleteProject(project.id)} colorScheme={'red'}>Delete</Button>
                                </VStack>

                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
            </Accordion>

            {
                projects.length < 4 && (
                    <Button colorScheme={'purple'} my={5} onClick={addMore}>Add More</Button>
                )
            }
        </>
    )
}

export default Projects
