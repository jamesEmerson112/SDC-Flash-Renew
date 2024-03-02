// import models here
const models = require('../models');

module.exports = {
  // Handles requests to get a list of all products
  get: async (req, res) => {
    try {
      // Fetch product data using the model
      const result = await models.products.get();
      // Directly assign the rows property of the result to data, default to an empty object if rows is undefined
      const data = result.rows || {};

      // Send a 200 OK response with the product data
      res.status(200).json(data);
    } catch (e) {
      // On error, send a 400 Bad Request response with the error message
      res.status(400).json({err: e.message});
    }
  },


  // Handles requests to get details of a specific product by ID
  getProduct: async (req, res) => {
    const { id } = req.params; // Destructure the product ID from the request parameters
    try {
      // Fetch specific product data using the model
      const result = await models.products.getProduct(id);
      // Directly use the rows property of the result, default to an empty object if rows is not defined
      const data = result.rows || {};
      // Send a 200 OK response with the product data
      res.status(200).json(data);
    } catch (e) {
      // On error, send a 400 Bad Request response with the error message
      res.status(400).json({ err: e.message });
    }
  },


  // Handles requests to get styles and photos for a specific product
  getProductStylesAndPhotos: async (req, res) => {
    const {product_id} = req.params; // Destructure the product ID from the request parameters
    try {
      // Fetch styles and photos for the specific product using the model
      const result = await models.products.getProductStylesAndPhotos(product_id);
      // Construct the response data, including the product_id and the first row of the result, or default to an empty object
      const data = {'product_id': product_id, ...result.rows[0]} || {};
      res.status(200).json(data);
    } catch (e) {
      // On error, send a 400 Bad Request response with the error message
      res.status(400).json({err: e.stack});
    }
  },

  // Handles requests to get related product IDs for a specific product
  getProductRelated: async (req, res) => {
    const {product_id} = req.params; // Destructure the product ID from the request parameters
    try {
      // Fetch related product IDs using the model
      const result = await models.products.getProductRelated(product_id);
      // Check if result.rows is defined, otherwise default to an empty array
      const rows = result.rows || [];

      // Transform the data into an array of related product IDs
      const relatedProductIds = rows.map(relatedProduct => relatedProduct.related_product_id).filter(id => id !== null && id !== undefined);

      // Sort the array of related product IDs to maintain a consistent order
      const sortedRelatedProductIds = relatedProductIds.sort();

      // Send a 200 OK response with the array of sorted related product IDs
      res.status(200).json(sortedRelatedProductIds);
    } catch (e) {
      // On error, send a 400 Bad Request response with the error message
      res.status(400).json({err: e.stack});
    }
  },
};
