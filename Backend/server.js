import express from 'express';
import mongoose from 'mongoose';
import User from './userModel.js';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const { connect, connection } = mongoose;

const app = express();
const port = process.env.PORT || 5000;

// Replace 'your-database-uri' with the actual MongoDB database URI
const mongoURI =
  'mongodb+srv://anveshsalagre:Anvesh2003@cluster0.xp16htx.mongodb.net/Users?retryWrites=true&w=majority';

connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});


let customers=[
  "Nishiket","Nishiket@64"
]

console.log(customers[0])

// app.use(express.json());
app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, './login.html'));
});

app.post('/register', async (req, res) => {
  const { email, name } = req.body;

  try {
    const user = new User({ email, name });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



app.post('/login', async (req, res) => {
  // const { username, password } = req.body;
  const  username = req.body;
  console.log(req.body)
  

  try {
    // const user = await User.findOne({ username });
    if(username==customers[0]){
      res.status(200).json({ message: 'Login successful' });
      res.sendFile(path.join(__dirname, 'build', 'index.html'))
 


    }
    else {
      return res.status(401).json({ error: 'User not found' });
    }
    // if (!user) {
    //   return res.status(401).json({ error: 'User not found' });
    // }

    // if (user.password === password) {
    //   res.status(200).json({ message: 'Login successful' });
    // } else {
    //   res.status(401).json({ error: 'Incorrect password' });
    // }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});

process.on('SIGINT', () => {
  connection.close(() => {
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  });
});
