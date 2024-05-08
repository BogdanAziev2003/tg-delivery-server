const icecream = {
  getMenu: function () {
    return `SELECT * FROM goods WHERE stock = 'true' ORDER BY id `
  },

  getStock: function () {
    return `SELECT id, name, stock FROM goods ORDER BY id`
  },
}

export default icecream