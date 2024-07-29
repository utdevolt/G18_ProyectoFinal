import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getEmailInput,
  getPasswordInput,
} from "../../app/slices/formInputSlice";
import { LoginStructure, RegisterStructure, CloseButton } from "../index";

export default function ModalUser(props) {
  const dispatch = useDispatch();

  var [modalType, setModalType] = useState("login");

  const change2Register = () => {
    dispatch(getEmailInput(""));
    dispatch(getPasswordInput(""));
    return setModalType("register");
  };
  const change2Login = () => {
    dispatch(getEmailInput(""));
    dispatch(getPasswordInput(""));
    return setModalType("login");
  };

  return (
    // {/* MODAL */}
    <div
      id="modal"
      className={`relative z-10 w-full ${
        props.modalStatus === "open" ? "" : "hidden"
      }`}
    >
      {/* Background oscuro del modal */}
      <div className="fixed inset-0 bg-black/70"></div>

      {/* Cuerpo del modal */}
      <div className="fixed inset-0 w-full p-6 flex justify-center items-center rounded-md">
        <LoginStructure
          modalType={modalType}
          change2Login={change2Login}
          change2Register={change2Register}
          // values={values}
          //
        />

        <RegisterStructure
          modalType={modalType}
          change2Login={change2Login}
          change2Register={change2Register}
        />

        {/* Botón cerrar */}
        <CloseButton closeUserModal={props.closeUserModal} />
      </div>
    </div>
  );
}
