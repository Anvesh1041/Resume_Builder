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

const ResumePreview = () => {
  const { theme, about, educationList, skills, workList, projects, printElem } = useResume();

  const imgStyle = {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    // marginLeft: "32%",
  };

  const dividerWidth = "80%"; // Adjust the width as needed

  return (
    <>
      <div ref={printElem}
        style={{
                // textAlign:"center",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
              }}
      >
        <Box 

          // width="590px!important"
          bg="white"
          w="full"
          rounded="md"
          shadow="md"
          overflow="hidden"
          minH="100vh"
          p={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        // ref={ref}
        >
          {about.picture && (
            <img
              style={imgStyle}
              src={about.picture}
              alt="avatar"
            />
          )}

          <Heading as="h1" size="xl" mt={2} textAlign="center">
            {about.name ? about.name : ""}
          </Heading>

          <Text color="gray.500" textAlign="center">
            {about.role ? about.role : ""}
          </Text>

          <HStack spacing={4} my={2} alignItems="center">
            <HStack spacing={1}>
              <MdMailOutline />
              <Text>{about.email ? about.email : ""}</Text>
            </HStack>
            <HStack spacing={1}>
              <MdPhone />
              <Text>{about.phone ? about.phone : ""}</Text>
            </HStack>
            <HStack spacing={1}>
              <FaLinkedinIn />
              <a href={about.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </HStack>
            <HStack spacing={1}>
              <MdLocationOn />
              <Text>{about.address ? about.address : ""}</Text>
            </HStack>
          </HStack>

          {/* <Divider bg={theme} w={dividerWidth} borderWidth="3px" /> */}

          <Heading as="h2" size="lg" textAlign="center" mt={4}>
            Education
          </Heading>
          <Divider borderColor={theme} w={dividerWidth} borderWidth="3px" mt={3} />

          {educationList.map((education, index) => {
            const { degree, school, startYr, endYr, grade } = education;

            return (
              <VStack key={index} alignItems="center" spacing={1} mt={2}>
                <Text fontWeight="medium">
                  {degree ? degree : ""}
                </Text>
                <Text fontSize="sm">
                  {school ? school : ""}
                </Text>
                <Text fontSize="xs" fontStyle="italic">
                  {startYr ? startYr : 20} - {endYr ? endYr : 20}
                </Text>
                <Text>{grade ? grade : ""}</Text>
              </VStack>
            );
          })}

          <Heading as="h2" size="lg" textAlign="center" mt={4}>
            Work Experience
          </Heading>
          <Divider borderColor={theme} w={dividerWidth} borderWidth="3px" mt={3} />

          {workList.map((work, index) => {
            const {
              position,
              type,
              company,
              startDate,
              endDate,
              description: desc,
            } = work;

            return (
              <VStack key={index} alignItems="center" spacing={1} mt={2}>
                <Text fontWeight="medium">
                  {position ? position : ""}
                </Text>
                <Text fontSize="sm">
                  {company ? company : ""} - {type ? type : ""}
                </Text>
                <Text fontSize="xs" fontStyle="italic">
                  {startDate ? startDate : ""} - {endDate ? endDate : ""}
                </Text>
                <Text fontSize="sm" as="p">
                  {desc ? desc : ""}
                </Text>
              </VStack>
            );
          })}

          <Heading as="h2" size="lg" textAlign="center" mt={4}>
            Skills
          </Heading>
          <Divider borderColor={theme} w={dividerWidth} borderWidth="3px" mt={3} mb={5} />

          <Wrap mt={2} maxWidth={80} justifyContent="center">
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

          <Heading as="h2" size="lg" textAlign="center" mt={4}>
            Projects
          </Heading>
          <Divider borderColor={theme} w={dividerWidth} borderWidth="3px" mt={3} />

          {projects.map((project, index) => {
            const { name, url, description: desc } = project;

            return (
              <VStack key={index} alignItems="center" spacing={1} mt={2}>
                <h3><u><a href={url} target="_blank" rel="noopener noreferrer" >
                  {name ? name : ""}
                </a></u></h3>
                <Text fontSize="sm" as="p" flexWrap={'wrap'}>
                  {desc ? desc : ""}
                </Text>
              </VStack>
            );
          })}
        </Box>
      </div>
    </>
  );
};

export default ResumePreview;
