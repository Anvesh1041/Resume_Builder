import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <Stack
      spacing={3}
      align="center"
      justify="center"
      direction="column"
      width="100%"
      maxWidth="400px"
      m="auto"
      mt={8}
    >
      <Box p={5} boxShadow="base" rounded="lg">
        <form onSubmit={handleLogin}>
          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="teal" mt={4}>
            Login
          </Button>
        </form>
      </Box>
    </Stack>
  );
};

export default Login;
