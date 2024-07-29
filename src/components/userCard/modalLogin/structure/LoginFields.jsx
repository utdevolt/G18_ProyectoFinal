import { useSelector, useDispatch } from "react-redux";
/*import {
  getEmailInput,
  getPasswordInput,
} from "../../../../app/slices/formInputSlice";*/
import { useState } from "react";

export default function LoginFields() {
  const footButtonColor = useSelector((state) => state.footButtonColor.color);
  const modBordersColor = useSelector((state) => state.modBordersColor.color);

  const handleButtonClass = () => {
    return "w-full h-3/5 rounded-xl hover:border-4 hover:duration-200 hover:text-xl".concat(
      footButtonColor,
      modBordersColor
    );
  };

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /// Capturar los datos en el submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Lógica para enviar datos de inicio de sesión
    console.log("Datos de registro:", formData);

    try {
      // Envía una solicitud POST al endpoint de registro usando fetch
      const response = await fetch("https://g18-backend.onrender.com/api/token/", {
        method: "POST",
        // Especifica que tipo de datos voy a enviar mi servidor
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error al logearte");
      }

      const data = await response.json();
      console.log("Datos de registro:", data);
      alert("TE LOGRASTE LOGEAR");
      localStorage.setItem("accessToken", data.access);

    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      id="loginFields"
      className="w-full h-[85%] flex flex-col justify-center gap-2 items-center rounded-xl"
    >
      <section className="w-full h-[70%] flex flex-col justify-center items-center gap-5 rounded-xl bg-lavender">
        <div
          id="emailLoginField"
          className="w-full h-1/5 flex border-4 rounded-xl"
        >
          <i className="fa-solid fa-at w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="username"
            className="w-full h-full p-[3%] rounded-r-lg outline-none"
          />
        </div>

        <div
          id="pswdFieldLogin"
          className="w-full h-1/5 flex border-4 rounded-xl"
        >
          <i className="fa-solid fa-key w-[10%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Contraseña"
            className="w-full h-full p-[3%] rounded-r-lg outline-none"
          />
        </div>
      </section>

      <section id="submitAllLogin" className="w-full h-[25%] font-bold">
        <div className="h-2/5 flex justify-between px-2 text-sm">
          <div>
            <input type="checkbox" name="rememberCheckbox" className="mx-1" />
            <span>Recordar</span>
          </div>

          <a
            href="https://g18-proyecto-final.vercel.app/forgot_my_password"
            target="_blank"
            className="hover:text-indigo-600 hover:underline mx-1"
          >
            Olvidé mi contraseña
          </a>
        </div>

        <button type="submit" className={handleButtonClass()}>
          INGRESAR
        </button>
      </section>
    </form>
  );
}
