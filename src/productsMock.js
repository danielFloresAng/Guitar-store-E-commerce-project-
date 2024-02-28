export let products = [
  {
    id: 1,
    title: "ES-335",
    price: 1600,
    description: "Semi-hollow guitar",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1707711944/2E1A8859_5000x_zz4tdg.jpg",
    stock: 12,
    category: "Semi-hollow",
  },
  {
    id: 2,
    title: "strat",
    price: 1200,
    description: "solid guitar",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1707711898/CZ559626-3_5000x_i2s0hn.jpg",
    stock: 4,
    category: "Solid",
  },
  {
    id: 3,
    title: "Telecaster",
    price: 1200,
    description: "solid guitar telecaster",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1707712279/fender_american_standard_telecaster_am_std_tele_sunburst_maple_neck_electric_guitar_0113202700_frontbody_mo0wbt.jpg",
    stock: 9,
    category: "Solid",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    if (products.length > 0) {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    } else {
      reject(console.log("No se encontraron los productos"));
    }
  });
};

export const getProduct = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (products.length > 0) {
        const product = products.find(
          (productObject) => productObject.id === productId
        );

        if (product) {
          resolve(product);
        } else {
          reject("Producto no encontrado");
        }
      } else {
        reject("Productos no encontrados");
      }
    }, 1000);
  });
};
