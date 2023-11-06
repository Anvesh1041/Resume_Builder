import {
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useResume } from "../../Context";
import ImageUpload from "../ImageUploadButton/ImageUpload.component";

const About = () => {
  const { about, setAbout } = useResume();

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setAbout({ ...about, [name]: value });
  // };
  // Function to validate an email address using a simple regex pattern.
  const isValidEmail = (email) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailPattern.test(email);
  };

  // Function to validate a LinkedIn URL.
  const isValidLinkedInURL = (url) => {
    // Regular expression to validate LinkedIn URLs. This is a simple example.
    // You can customize it based on your specific validation requirements.
    const linkedInPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-z0-9-]+\/?$/i;
    return linkedInPattern.test(url);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
  
    if (name === "email") {
      // For the email field, validate the input
      if (!isValidEmail(value)) {
        e.preventDefault(); // Prevent the input from being reflected in the textbox
        return; // Invalid email input, do not update the state
      }
    }  else if (name === "phone") {
      // Remove any non-numeric characters
      let validInput = value.replace(/[^0-9+]/g, "");
  
      if (validInput.startsWith("+")) {
        validInput = "+" + validInput.substring(1).replace("+", ""); // Remove any other plus signs
        // Limit to 13 characters (including the plus sign)
        validInput = validInput.substring(0, 13);
      } else {
        validInput = validInput.substring(0, 10); // Limit to 10 characters
      }
  
      e.target.value = validInput;
  
      // Set the updated value in the state
      // setAbout({ ...about, [name]: validInput });
    } else if (name === "linkedin") {
      // For the LinkedIn field, validate the input
      if (!isValidLinkedInURL(value)) {
        e.preventDefault(); // Prevent the input from being reflected in the textbox
        return; // Invalid LinkedIn URL, do not update the state
      }
    }
    setAbout({ ...about, [name]: updatedValue });
  };
  



  return (
    <>
      <Stack spacing={4} mb={2}>
        {about.picture ? (
          <Button
            onClick={() => {
              setAbout({ ...about, picture: "" });
            }}
            colorScheme="red"
            variant="outline"
          >
            Remove Image
          </Button>
        ) : (
          <ImageUpload />
        )}

        <HStack spacing={6}>
          <FormControl>
            <FormLabel htmlFor="name">Full Name</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="name"
              id="name"
              type="text"
              variant="filled"
              placeholder="Full Name"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="role">Role</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="role"
              id="role"
              type="text"
              variant="filled"
              placeholder="Role"
            />
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="email"
              id="email"
              type="email"
              variant="filled"
              placeholder="Email"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="phone"
              id="phone"
              type="tel"
              variant="filled"
              placeholder="Phone"
            />
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl>
            <FormLabel htmlFor="address">Address</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="address"
              id="address"
              type="text"
              variant="filled"
              placeholder="Address"
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="linkedin">LinkedIn</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="linkedin"
              id="linkedin"
              type="url"
              variant="filled"
              placeholder="https://linkedin.com"
            />
          </FormControl>
        </HStack>
      </Stack>
    </>
  );
};

export default About;
