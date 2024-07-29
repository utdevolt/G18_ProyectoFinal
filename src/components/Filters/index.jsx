import { useState, useEffect } from 'react';
import useGetProduct from "../../hooks/useGetProduct";
import Category from "./Category";
import SortBy from "./SortBy";
import Cards from "../Cards";

export default function Filters(props) {
  const { products } = useGetProduct();
  console.log(products)
  const [category, setCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(products); // Estado para los productos filtrados
  const [sortedProducts, setSortedProducts] = useState(products); // Estado para los productos ordenados

  useEffect(() => {
    // Filtrar productos según la categoría seleccionada
    const filtered = category === 'All' ? products : products.filter(product => product.categoria.nombre === category);
    setFilteredProducts(filtered);
  }, [category, products]);

  useEffect(() => {
    // Cuando cambia el ordenamiento, actualiza los productos ordenados
    setSortedProducts(filteredProducts);
  }, [filteredProducts]);

  // Obtener todas las categorías disponibles
  const allCategories = ['All', ...Array.from(new Set(products.map(product => product.categoria.nombre)))];

  const filterCategory = (category) => {
    setCategory(category);
  }

  const handleSortingChange = (sorted) => {
    setSortedProducts(sorted);
  };

  return (
    <>
      <div className="p-6 md:flex justify-between items-center">
        <div>
          <h3 className="text-md text-pink mb-2">Categorías:</h3>
          <div className="flex jus gap-2 lg:gap-5">
            <Category
              categories={allCategories}
              filterCategory={filterCategory}
            />
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <SortBy
            products={filteredProducts}
            handleSortingChange={handleSortingChange}
          />
        </div>
      </div>

      <Cards
        products={sortedProducts}
        onAddProduct={props.onAddProduct}/>
    </>
  );
}
