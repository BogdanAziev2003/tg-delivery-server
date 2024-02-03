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
                WHEN modifiers.name IS NOT NULL THEN json_build_object('name', modifiers.name, 'price', modifiers.price)
                ELSE NULL
            END
        ) AS modifiers,
        (
            SELECT 
                json_agg(json_build_object('title', sizes.title, 'price', sizes.price, 'discount_price', sizes.discount_price))
            FROM sizes
            WHERE sizes.goods_id = goods.id
        ) AS sizes,
        
        
        json_agg(json_build_object( 'name', changes.name, 'items', ( 
            CASE
                WHEN changes.name IS NOT NULL THEN (
                    SELECT  json_agg(
                        json_build_object(
                            'name', changes_items.name, 'price', changes_items.price, 'selected', changes_items.selected
                        )
                    )
                    FROM changes_items
                    WHERE changes_items.changes_id = changes.id
                )
                ELSE NULL
            END
        ))) 
        
        AS changes
    
        
        
    FROM
        goods
    LEFT JOIN
        goods_changes ON goods.id = goods_changes.goods_id
    LEFT JOIN 
        changes ON changes.id = goods_changes.changes_id
    LEFT JOIN
        goods_modifiers ON goods.id = goods_modifiers.goods_id
    LEFT JOIN
        modifiers ON modifiers.id = goods_modifiers.modifiers_id
    GROUP BY
        goods.id
    ORDER BY
        goods.id ASC;
    `;
    },

    changeStock: function (id) {
        return `UPDATE goods SET stock = NOT stock WHERE id = ${id}`;
    },

    getGoodsNames: function () {
        return `SELECT id, name, stock from goods ORDER BY id ASC`;
    },

    createOrder: function (username, tgId, time, price) {
        return `insert into orders (username, tg_id, time, price) values (${username}, ${tgId}, ${time}, ${price})`;
    },
};

export default rio;
