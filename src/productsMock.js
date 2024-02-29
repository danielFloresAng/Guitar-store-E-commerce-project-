export let products = [
  {
    id: 1,
    title: "ES-335",
    price: 1600,
    description: "Semi-hollow guitar by gibson with two boutique humbuckers",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1707711944/2E1A8859_5000x_zz4tdg.jpg",
    stock: 4,
    category: "Semi-hollow",
  },
  {
    id: 2,
    title: "SRV Stratocaster",
    price: 1200,
    description: "Stratocaster Stevie Ray Vaughan signature guitar with 3 single coils noiseless pick-ups",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1709184203/strat_srv_wdkq15.jpg",
    stock: 4,
    category: "Solid",
  },
  {
    id: 3,
    title: "Telecaster",
    price: 1200,
    description: "Fender telecaster guitars two single coils pick-ups",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1709184610/telecaster_ievibw.jpg",
    stock: 6,
    category: "Solid",
  },
  {
    id: 4,
    title: "Taylor GS Mini-e",
    price: 650,
    description: "Taylor acoustic guitar",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1709184205/taylor-gs-mini-e_z1isck.jpg",
    stock: 5,
    category: "Acoustic",
  },
  {
    id: 5,
    title: "PRS Blue",
    price: 1000,
    description: "PRS guitar with two mini-humbuckers pick-ups",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1709184207/zxcrop__lk4ypx.webp",
    stock: 6,
    category: "Solid",
  },
  {
    id: 6,
    title: "PRS Starla",
    price: 1400,
    description: "PRS guitar, two humbuckers setup pick-ups",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1709184201/PRS_SE-Starla_S_yooasy.jpg",
    stock: 3,
    category: "Solid",
  },
  {
    id: 7,
    title: "PRS Foil",
    price: 1700,
    description: "PRS semi-hollow guitar with two humbuckers",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1709184199/prs_semi_hollow_wydzvc.jpg",
    stock: 2,
    category: "Semi-hollow",
  },
  {
    id: 8,
    title: "Taylor GS Sapele",
    price: 900,
    description: "Taylor mini acoustic guitar",
    img: "https://res.cloudinary.com/dbj0rnpwz/image/upload/v1709184195/6Taylor-GS-Mini-Sapele_rmluvv.jpg",
    stock: 6,
    category: "Acoustic",
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
