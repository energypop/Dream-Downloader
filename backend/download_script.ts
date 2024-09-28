import express, { Request, Response } from 'express';

// Create an instance of the Express app
const app = express();

// Use middleware to parse incoming JSON requests
app.use(express.json());

// Define a type for the request body
interface UrlRequestBody {
  url: string;
}

// Endpoint to handle POST requests
app.post('/120.0.0.1:8000/endpoint', (req: Request<{}, {}, UrlRequestBody>, res: Response) => {
  const { url } = req.body; // Destructure the URL from the request body

  if (!url) {
    // Return an error if no URL is provided
    return res.status(400).json({ message: 'URL is required' });
  }

  console.log('Received URL:', url);

  // Do something with the URL, e.g., fetch data from the URL or process it

  // Respond back with a success message
  return res.json({ message: 'URL received successfully', url });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
