const products = {
  1: {
    name: "produto 1",
    description: "produto 100% maple",
    images: [
      "https://cdn.shopify.com/s/files/1/0427/9513/9234/products/ShapeAprilSkateboardFijiYutoHorigome_1800x1800.png?v=1652907030",
      "https://cdn.shopify.com/s/files/1/0427/9513/9234/products/ShapeAprilSkateboardFijiYutoHorigome_1800x1800.png?v=1652907030",
      "https://cdn.shopify.com/s/files/1/0427/9513/9234/products/ShapeAprilSkateboardFijiYutoHorigome_1800x1800.png?v=1652907030",
    ],
    price: 300.0,
    promo_price: 250.0,
    percent: 15,
    categories: [1],
  },
  2: {
    name: "produto 2",
    description: "produto 100% maple 000",
    images: [
      "https://cdn.shopify.com/s/files/1/0427/9513/9234/products/ShapeAprilSkateboardFijiYutoHorigome_1800x1800.png?v=1652907030",
      "https://images-americanas.b2w.io/produtos/5807792601/imagens/shape-april-maple-yuto-horigome-8-0/5807792678_4_large.jpg",
      "https://images-americanas.b2w.io/produtos/5807792601/imagens/shape-april-maple-yuto-horigome-8-0/5807792678_2_large.jpg",
    ],
    price: 300.0,
    // promo_price: 250.0,
    percent: 15,
    categories: [2, 3],
  },
  3: {
    name: "produto 3",
    description: "produto 100% maple",
    images: [
      "https://cdn.shopify.com/s/files/1/0427/9513/9234/products/ShapeAprilSkateboardFijiYutoHorigome_1800x1800.png?v=1652907030",
      "https://cdn.shopify.com/s/files/1/0427/9513/9234/products/ShapeAprilSkateboardFijiYutoHorigome_1800x1800.png?v=1652907030",
      "https://cdn.shopify.com/s/files/1/0427/9513/9234/products/ShapeAprilSkateboardFijiYutoHorigome_1800x1800.png?v=1652907030",
    ],
    price: 300.0,
    promo_price: 250.0,
    percent: 15,
    categories: [3],
  },
};

const categories = {
  1: { name: "deck 8.0" },
  2: { name: "deck 8.25" },
  3: { name: "deck 8.5" },
};

module.exports = {
  products,
  categories,
};
