import express from 'express';
import cors from 'cors';
import products from './Utils/products.mjs';
import singleProduct from './Utils/singleProduct.mjs';

const app = express();
const port = process.env.PORT || 5000;


// Enable CORS for all origins (adjust for your specific needs)
app.use(cors());

// Route to get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const productId = req.params.id;
    const product = singleProduct.find(p => p.id === productId);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});