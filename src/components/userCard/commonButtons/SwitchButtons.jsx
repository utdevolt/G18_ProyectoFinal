import { useSelector } from "react-redux";

export default function SwitchButtons(props){

  const swButtonsColor = useSelector((state)=>state.swButtonsColor.color)
  const modBordersColor = useSelector((state)=>state.modBordersColor.color)

  const handleLoginButtonEffects = (modalType) => {
    return (modalType==="login")
    ? "hover:border-4 hover:duration-150".concat(swButtonsColor,modBordersColor)
    : "bg-white text-gray-300 hover:border-4 hover:text-black hover:text-xl hover:duration-150".concat(modBordersColor);
  }

  const handleRegisterButtonEffects = (modalType) => {
    return (modalType==="register")
    ? swButtonsColor.concat(" hover:border-4 hover:duration-150 ",modBordersColor)
    : "bg-white text-gray-300 hover:border-4 hover:text-black hover:text-xl hover:duration-150".concat(modBordersColor);
  }

  return(
    <section id="switchButtons" className="h-[15%] flex items-center w-full">
        <button className={`w-1/2 h-[80%] flex justify-center items-center rounded-l-xl
                            ${handleLoginButtonEffects(props.modalType)}`}
                onClick={props.change2Login}>
          Iniciar Sesión
        </button>

        <button className={`w-1/2 h-[80%] flex justify-center items-center rounded-r-xl
                            ${handleRegisterButtonEffects(props.modalType)}`}
                onClick={props.change2Register}>
          Quiero unirme!
        </button>
    </section>
  );
}