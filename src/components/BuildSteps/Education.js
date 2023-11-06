import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, FormControl, FormLabel, HStack, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useResume } from '../../Context';

const Education = () => {
    const { educationList, setEducationList } = useResume();

    const addMore = () => {
        setEducationList([...educationList, educationList]);
    }

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const updatedEducation = educationList.map((edu, i) => (
            index === i ? Object.assign(edu, { [name]: value }) : edu
        ));

        setEducationList(updatedEducation);
    }

    const handleStartYearBlur = (index) => {
        const education = educationList[index];
        if (education.startYr < 1950) {
            const updatedEducation = educationList.map((edu, i) => (
                index === i ? Object.assign(edu, { startYr: 1950 }) : edu
            ));
            setEducationList(updatedEducation);
        } else if (education.startYr > 2023) {
            const updatedEducation = educationList.map((edu, i) => (
                index === i ? Object.assign(edu, { startYr: 2023 }) : edu
            ));
            setEducationList(updatedEducation);
        }
    }

    const handleEndYearBlur = (index) => {
        const education = educationList[index];
        if (education.endYr < education.startYr) {
            const updatedEducation = educationList.map((edu, i) => (
                index === i ? Object.assign(edu, { endYr: education.startYr }) : edu
            ));
            setEducationList(updatedEducation);
        } else if (education.endYr > 2050) {
            const updatedEducation = educationList.map((edu, i) => (
                index === i ? Object.assign(edu, { endYr: 2050 }) : edu
            ));
            setEducationList(updatedEducation);
        }
    }

    return (
        <>
            <Accordion allowToggle defaultIndex={[0]}>
                {educationList.map((education, index) => (
                    <AccordionItem key={index}>
                        <h2>
                            <AccordionButton>
                                <Box flex='1' textAlign='left'>
                                    <Text fontWeight={'medium'}>{education.degree ? education.degree : "Degree"}</Text>
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>

                            <VStack spacing={4}>
                                <Input onChange={(e) => handleChange(e, index)} name='degree' type='text' variant='filled' placeholder='Degree' />
                                <Input onChange={(e) => handleChange(e, index)} name='school' type='text' variant='filled' placeholder='School' />
                            </VStack>

                            <HStack spacing={4} mt={4}>
                                <FormControl>
                                    <FormLabel htmlFor='startyr'>Start Year</FormLabel>
                                    <NumberInput min={1950} max={2023} onBlur={() => handleStartYearBlur(index)} defaultValue={education.startYr || 1950} onChange={(valueString) => handleChange({ target: { name: 'startYr', value: valueString } }, index)}>
                                        <NumberInputField />
                                    </NumberInput>
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='endyr'>End Year</FormLabel>
                                    <NumberInput min={education.startYr || 1950} max={2030} onBlur={() => handleEndYearBlur(index)} defaultValue={education.endYr || 2030} onChange={(valueString) => handleChange({ target: { name: 'endYr', value: valueString } }, index)}>
                                        <NumberInputField />
                                    </NumberInput>
                                </FormControl>

                                <FormControl>
                                    <FormLabel htmlFor='grade'>Grade</FormLabel>
                                    <Input onChange={(e) => handleChange(e, index)} name='grade' type='text' variant='filled' placeholder='Grade' />
                                </FormControl>
                            </HStack>
                        </AccordionPanel>
                    </AccordionItem>
                ))}
            </Accordion>

            {educationList.length < 2 && (
                <Button colorScheme={'purple'} my={5} onClick={addMore}>Add More</Button>
            )}
        </>
    )
}


export default Education
