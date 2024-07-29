import { useState,useEffect } from "react";
import Category from "../../components/Filters/Category";
import { Link } from "react-router-dom";


export default function PostProducts() {
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [categorias,setCategorias ] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null);
  const [img_url, setImage] = useState(null); 

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Guarda el archivo seleccionado como un objeto File
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SentData = new FormData();
    //"" estas son las etiquetas del backend (models)
    SentData.append("nombre", nombre);
    SentData.append("precio", precio);
    SentData.append("descripcion", descripcion);
    SentData.append("categoria", categoriaSeleccionada); //almacena categoria (ignorar el nombre)
  
  
    SentData.append("img_url", img_url); 

    try {
      const response = await fetch("https://g18-backend.onrender.com/api/v1/productos/", {
        method: "POST",
        body: SentData,
      });

      if (response.ok) {
        console.log("Producto registrado con éxito");
        alert("registro existoso")
        setNombre("")
        setPrecio("")
        setDescripcion("")
        setImage("")
      } else {
        console.error("Error al registrar el producto");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    async function getCategories() {
      const response = await fetch("https://g18-backend.onrender.com/api/v1/categorias/");
      const data = await response.json();
      setCategorias(data);
    }
    getCategories();
  }, []);

  return (
    <>
      <header className="bg-gray-500 mx-auto max-w-6xl rounded mt-10" >
        <div className="mx-auto max-w-6xl py-6">
          <h1 className="text-4xl font-extrabold text-white text-center ">
            Administrador de Productos
          </h1>
        </div>
      </header>

      <main className="mt-10 mx-auto max-w-6xl p-10 bg-white shadow rounded-xl">
        <div className="flex flex-row items-center justify-between text-center">
          <h2 className="text-3xl font-bold text-black ">Registrar producto</h2>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-col gap-3 mt-2">
            <label htmlFor="nombre" className="text-2xl">
              Nombre del producto:
            </label>
            <input
              id="nombre"
              name="nombre"
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Nombre del producto"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label htmlFor="precio" className="text-2xl">
              Precio:
            </label>
            <input
              id="precio"
              name="precio"
              type="text"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              placeholder="Precio del producto"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label htmlFor="precio" className="text-2xl">
              Descripcion:
            </label>
            <input
              id="descripcion"
              name="descripcion"
              type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              placeholder="Descripcion del producto"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              Subir archivo
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              id="image"
              type="file"
              onChange={handleFileChange} // Maneja el cambio del archivo
            />
            <label htmlFor="categoria" className="text-2xl">
              Categoría:
            </label>
            <select
              id="categoria"
              name="categoria"
              value={categoriaSeleccionada || ""}
              onChange={(e) => setCategoriaSeleccionada(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value="">Selecciona una categoría</option>
              {categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.nombre}
                </option>
              ))}
            </select>

          </div>
          <button
            type="submit"
            className="mt-10 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Registrar
          </button>
        </form>
      </main>

      <Link to="/listproducts">
      <div className="mt-4 flex justify-center p-4 bg-white shadow rounded-xl">
        <button className="mt-4  bg-gray-300 hover:bg-purpuple-700 text-black font-bold py-5 px-7 rounded text-center items-center ">
            ver lista de productos
        </button>
      </div>
       </Link>
    </>
  );
}