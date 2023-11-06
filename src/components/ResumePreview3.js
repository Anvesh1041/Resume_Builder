import React from 'react';
import {
  Box,
  Heading,
  Text,
  HStack,
  VStack,
  Wrap,
  Tag,
  TagLabel,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { useResume } from "../Context";
import { MdMailOutline, MdPhone, MdLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";


const ResumePreview = () => {
  const { theme, about, educationList, skills, workList, projects, printElem } = useResume();

  const imgStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginBottom: "20px",
  };

  const dividerWidth = "70%"; // Adjust the width as needed

  return (
    <div ref={printElem}>
      <Box
        bg="white"
        w="full"
        rounded="md"
        shadow="lg"
        p={4}
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="center"
      >
        <Flex gap="25px">

          {about.picture && (
            <img
              style={imgStyle}
              src={about.picture}
              alt="avatar"
            />
          )}

          <Flex justifyContent="center" flexFlow={'column'} >
            <Heading as="h1" size="xl">
              {about.name ? about.name : ""}
            </Heading>
            <Text color="gray.500" fontSize="lg" ml={2}>
              {about.role ? about.role : ""}
            </Text>
          </Flex>

        </Flex>
        <HStack mt={2}>
          <MdMailOutline color={theme} />
          <Text>{about.email ? about.email : ""}</Text>
          <MdPhone color={theme} />
          <Text>{about.phone ? about.phone : ""}</Text>
          <FaLinkedinIn color={theme} />
          {/* {about.linkedin && ( */}
            <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          {/* )} */}
          <MdLocationOn color={theme} />
          <Text>{about.address ? about.address : ""}</Text>
        </HStack>


        <Heading as="h2" size="lg" mt={4}>
          Education
        </Heading>
        <Divider borderColor="black" w={dividerWidth} borderWidth="3px" borderRadius={20} />

        {educationList.map((education, index) => (
          <VStack key={index} alignItems="flex-start" spacing={1} mt={2}>
            <Text color={theme} fontSize={20}>
              {education.degree ? education.degree : ""}
            </Text>
            <Text fontSize="sm">
              {education.school ? education.school : ""}
            </Text>
            <Text fontSize="xs" fontStyle="italic">
              {education.startYr ? education.startYr : 20} - {education.endYr ? education.endYr : 20}
            </Text>
            <Text>
              {education.grade ? education.grade : ""}
            </Text>
          </VStack>
        ))}


        <Heading as="h2" size="lg" mt={4}>
          Work Experience
        </Heading>
        <Divider borderColor="black" w={dividerWidth} borderWidth="3px" borderRadius={20} />

        {workList.map((work, index) => (
          <VStack key={index} alignItems="flex-start" spacing={1} mt={2}>
            <Text color={theme} fontSize={20}>
              {work.position ? work.position : ""}
            </Text>
            <Text fontSize="sm">
              {work.company ? work.company : ""} - {work.type ? work.type : ""}
            </Text>
            <Text fontSize="xs" fontStyle="italic">
              {work.startDate ? work.startDate : ""} - {work.endDate ? work.endDate : "Present"}
            </Text>
            <Text fontSize="sm" as="p">
              {work.description ? work.description : ""}
            </Text>
          </VStack>
        ))}


        <Heading as="h2" size="lg" mt={4}>
          Skills
        </Heading>
        <Divider borderColor="black" w={dividerWidth} borderWidth="3px" borderRadius={20} />

        <Wrap mt={4} spacing={2}>
          {skills.map((skill, index) => (
            <Tag
              size="md"
              borderRadius="md"
              variant="solid"
              bg={theme.replace("400", "500")}
              key={index}
            >
              <TagLabel>{skill.name}</TagLabel>
            </Tag>
          ))}
        </Wrap>


        <Heading as="h2" size="lg" mt={4}>
          Projects
        </Heading>
        <Divider borderColor="black" w={dividerWidth} borderWidth="3px" borderRadius={20} />

        {projects.map((project, index) => (
          <VStack key={index} alignItems="flex-start" spacing={1} mt={2}>
            <Text color={theme} fontSize={20}>
              {project.name ? project.name : ""}
            </Text>
            <a href={project.url}>
            <BiLinkExternal />
            </a>
            <Text fontSize="sm" as="p">
              {project.description ? project.description : ""}
            </Text>
          </VStack>
        ))}
      </Box>
    </div>
  );
};

export default ResumePreview;
