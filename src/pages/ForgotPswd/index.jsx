export default function ForgotPswd() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center bg-bgreen">
      <div className="w-1/2 h-3/4 rounded-2xl bg-white">
        <div className="w-full h-1/5 flex items-center justify-center bg-byellow">
          <h1 className="text-poppins font-bold text-[20px]">
            OLVIDASTE TU CONTRASEÑA? NOSOTROS TE AYUDAMOS
          </h1>
        </div>

        <form
          action=""
          className="w-full h-4/5 flex flex-col p-10 justify-between items-center"
        >
          <div className="w-full h-1/5">
            <input
              type="email"
              placeholder="Ingrese su correo"
              className="w-full h-full rounded-lg outline-none bg-peach p-5 text-black"
            />
          </div>

          <p className="mb-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, blanditiis ad dolore eius obcaecati quibusdam qui!
            Fugiat vitae voluptas aliquid natus perspiciatis quibusdam
            temporibus incidunt recusandae esse, omnis nobis atque!
          </p>

          <div>
            <button className="bg-bblue rounded-xl p-4">
              Enviar Correo de recuperación
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
