import { useSelector, useDispatch } from "react-redux";
/*import {
  getEmailInput,
  getPasswordInput,
  getPassword2Input,
  getNameInput,
  getLastnameInput,
} from "../../../../app/slices/formInputSlice";*/
import { useState } from "react";

export default function RegisterFields() {
  const footButtonColor = useSelector((state) => state.footButtonColor.color);
  const modBordersColor = useSelector((state) => state.modBordersColor.color);

  const handleButtonClass = () => {
    return "w-full h-3/5 rounded-xl hover:border-4 hover:duration-200 hover:text-xl".concat(
      footButtonColor,
      modBordersColor
    );
  };

  const [formData, setFormData] = useState({
    //propiedades
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    password: "",
  });

  // actualizar el estado de formData
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  /// Capturar los datos en el submit
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // lógica para enviar datos de registro
    console.log("Datos de registro:", formData);

    try {
      // Envía una solicitud POST al endpoint de registro usando fetch
      const response = await fetch("https://g18-backend.onrender.com/api/v1/register/", {
        method: "POST",
        // Especifica que tipo de datos voy a enviar mi servidor
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Error en el registro");
      }

      const data = await response.json();
      console.log("Datos de registro:", data);
      alert("Registro exitoso");
    } catch (error) {
      console.error("Error en el registro:", error);
    }
  };

  return (
    <form
      id="registerFields"
      onSubmit={handleFormSubmit}
      className="w-full h-[85%] flex flex-col justify-center gap-2 items-center rounded-xl"
    >
      <section className="w-full h-[70%] flex flex-col justify-center items-center gap-4 rounded-xl bg-lavender">
        <div
          id="emailRegisterField"
          className="w-full h-1/5 flex border-4 rounded-xl"
        >
          <i className="fa-solid fa-user w-[10%] h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>
          <input
            type="text"
            name="username"
            placeholder="username"
            className="w-full h-full p-[3%] rounded-r-lg outline-none"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div
          id="pswdFieldRegister"
          className="h-1/5 w-full flex border-4 rounded-xl"
        >
          <i className="fa-solid fa-key w-[10%] h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            className="w-full h-full p-[3%] rounded-r-lg outline-none"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div
          id="emailRegisterField"
          className="w-full h-1/5 flex border-4 rounded-xl"
        >
          <i className="fa-solid fa-at w-[10%] h-[100%] flex justify-center items-center rounded-l-[8px] border-r-4"></i>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full h-full p-[3%] rounded-r-lg outline-none"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div id="nameField" className="w-full h-1/5 flex justify-between">
          <div className="w-[49%] h-full flex border-4 rounded-xl">
            <i className="fa-solid fa-user w-[23%] h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>
            <input
              type="text"
              name="first_name"
              placeholder="Nombre(s)"
              className="w-full h-full p-[3%] rounded-r-lg outline-none"
              value={formData.first_name}
              onChange={handleChange}
            />
          </div>

          <div className="w-[49%] h-full flex border-4 rounded-xl">
            <i className="fa-solid fa-user w-1/5 h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>
            <input
              type="text"
              name="last_name"
              placeholder="Apellidos"
              className="w-full h-full p-[3%] rounded-r-lg outline-none"
              value={formData.last_name}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* <div
          id="confirmPswdField"
          className="h-1/5 w-full flex border-4 rounded-xl"
        >
          <i className="fa-solid fa-lock w-[10%] h-full flex justify-center items-center rounded-l-[8px] border-r-4"></i>
          <input
            type="password"
            name="confirmPswd"
            placeholder="Confirmar Contraseña"
            className="w-full h-full p-[3%] rounded-r-lg outline-none"
            value={registerPassword2}
            onChange={handleRegisterPassword2Data}
          />
        </div> */}
      </section>

      <section id="submitAllRegister" className="w-full h-[25%] font-bold">
        <div className="h-2/5 text-sm">
          <input type="checkbox" name="acceptTermsCheckbox" className="mx-1" />
          <span>Acepto las </span>
          <a
            href="https://g18-proyecto-final.vercel.app/terms_and_conditions"
            target="_blank"
            className="underline hover:text-indigo-600"
          >
            Condiciones de servicio y Política de privacidad
          </a>
        </div>
        <button type="submit" className={handleButtonClass()}>
          REGISTRARME
        </button>
      </section>
    </form>
  );
}

// Se cambió for por htmlFor en los labels de cada formulario
