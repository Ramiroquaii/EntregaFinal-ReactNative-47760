import { createSlice } from "@reduxjs/toolkit";
//import { categories } from "../../data/categories";
//import { products } from "../../data/products";
import { db } from "../../firebase/firebase_auth"
import { ref, get } from 'firebase/database';

const obtenerProductos = () => {
  const productosRef = ref(db, 'products');

  get(productosRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        // La consulta fue exitosa, snapshot contiene los datos de los productos
        const productosData = snapshot.val();
        console.log('Productos:', productosData);
        return productosData;
      } else {
        console.log('No se encontraron productos.');
        return "Products: [{}]";
      }
    })
    .catch((error) => {
      console.error('Error al obtener productos:', error);
    });
};

const obtenerCategorias = () => {
  const categoriasRef = ref(db, 'products');

  get(categoriasRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        // La consulta fue exitosa, snapshot contiene los datos de los productos
        const categoriasData = snapshot.val();
        console.log('Productos:', categoriasData);
        return categoriasData;
      } else {
        console.log('No se encontraron productos.');
        return "Categories: [{}]";
      }
    })
    .catch((error) => {
      console.error('Error al obtener productos:', error);
    });
};

const prd = obtenerProductos();
const cat = obtenerCategorias();

const homeSlice = createSlice({
  name: "home",
  initialState: {
    allCategories: cat, //categories,
    allProducts: prd, //products,
    categorySelected: "",
    productsFilterByCategory: [],
    productSelected: {},
  },
  reducers: {
    setCategory: (state, action) => {
      state.categorySelected = action.payload;

      state.productsFilterByCategory = state.allProducts.filter(
        (el) => el.category === state.categorySelected
      );
    },

    setProductSelected: (state, action) => {
      state.productSelected = action.payload;
    },
  },
});

export const { setCategory, setProductSelected } = homeSlice.actions;

export default homeSlice.reducer;
