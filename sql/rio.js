const rio = {
  getMenu: function () {
    return `
  SELECT
    goods.id,
    goods.name,
    goods.category,
    goods.image,
    goods.stock,
    json_agg( 
        CASE
            WHEN modifiers.name IS NOT NULL
            THEN json_build_object('name', modifiers.name, 'price', modifiers.price)
            ELSE NULL
        END
    ) AS modifiers,
    (
        SELECT 
            json_agg(json_build_object('title', sizes.title, 'price', sizes.price, 'discount_price', sizes.discount_price))
        FROM sizes
        WHERE sizes.goods_id = goods.id
    ) AS sizes
FROM
    goods
LEFT JOIN
    goods_modifiers ON goods.id = goods_modifiers.goods_id
LEFT JOIN
    modifiers ON modifiers.id = goods_modifiers.modifiers_id
WHERE
    goods.stock = true
GROUP BY
    goods.id
ORDER BY
        goods.id ASC;`;
  },

  changeStock: function (id) {
    return `UPDATE goods SET stock = NOT stock WHERE id = ${id}`;
  },

  getGoodsNames: function () {
    return `SELECT id, name, stock from goods ORDER BY id ASC`;
  },
};

export default rio;
