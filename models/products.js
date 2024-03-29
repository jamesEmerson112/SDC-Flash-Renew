const db = require('../Database');

module.exports = {
  get: async () => {
    const queryStr = `SELECT * FROM public."Product" ORDER BY id ASC LIMIT 10`;
    return db.query(queryStr);
  },

  getProduct: async (id) => {
    const queryStr = `SELECT * FROM public."Product" WHERE id = $1`;
    return db.query(queryStr, [id]);
  },
  getProductStylesAndPhotos: async (productId) => {
    const queryStr = `
      SELECT json_agg(
        json_build_object(
          'style_id', id,
          'name', name,
          'original_price', original_price,
          'sale_price', sale_price,
          'default?', default_style,
          'photos', (
            SELECT json_agg(
              json_build_object(
                'thumbnail_url', thumbnail_url,
                'url', url
              )
            ) FROM public."Photos" WHERE styleid = public."Styles".id
          ),
          'skus', (
            SELECT json_object_agg(
              id::varchar(255), json_build_object(
                'quantity', quantity,
                'size', size
              )
            ) FROM public."Skus" WHERE styleid = public."Styles".id
          )
        )
      ) AS results
      FROM public."Styles"
      WHERE productid = $1
    `;
    return db.query(queryStr, [productId]);
  },


  getProductPhotos: async (styleId) => {
    const queryStr = `SELECT
    "thumbnail_url",
    "url"
    FROM public."Photos"
    WHERE styleid = $1`;
    return db.query(queryStr, [styleId]);
  },

  getProductRelated: async (productId) => {
    const queryStr = `SELECT
    related_product_id
    FROM public."Related"
    WHERE current_product_id = $1`;
    return db.query(queryStr, [productId]);
  },
};
