// Página que muestra los términos y condiciones del registro en Wawitas
import logo from "../../assets/logo.png";

export default function TermsConditions() {
  return (
    <div className="w-full h-screen flex flex-col p-10 justify-center items-center bg-bgreen">
      <div className="w-4/5 h-full rounded-2xl bg-white p-10">
        <div className="w-full h-[10%] flex items-center justify-center bg-byellow rounded-xl">
          <h1 className="text-poppins font-bold text-[15px]">
            ANTES DE REGISTRARTE, ASEGÚRATE DE CONOCER NUESTRA POLÍTICA DE
            SERVICIO
          </h1>
        </div>

        <form
          action=""
          className="w-full h-full flex flex-col p-10 justify-between items-center"
        >
          <div className="w-full h-[80%]">
            <p>
              Esta página web es propiedad y está operado por Corporación Wawitas S.A.C. 
              Estos Términos establecen los lineamientos
              y condiciones bajo los cuales puedes usar nuestra página web y
              nuestros servicios. Esta página web ofrece a los visitantes
              en las que podrán revisar las novedades en ropa y accesorios para 
              niños y bebes. Al acceder o usar la
              página web, aceptas haber leído, entendido y aceptado estar sujeto
              a estos Términos: INFORMACIÓN RELEVANTE En algunos casos, para
              adquirir un producto, será necesario el registro por parte del
              usuario, con ingreso de datos personales fidedignos y definición
              de una contraseña. El usuario puede elegir y cambiar la clave para
              su acceso de administración de la cuenta en cualquier momento, en
              caso de que se haya registrado y que sea necesario para el uso de
              alguno de nuestros servicios. Wawitas S.A.C. no
              asume la responsabilidad en caso de que entregue dicha clave a
              terceros. Todas las transacciones que se lleven a cabo por medio
              de este sitio web, están sujetas a un proceso de confirmación y
              verificación, el cual podría incluir la validación de la forma de
              pago, validación de la factura (en caso de existir) y el
              cumplimiento de las condiciones requeridas por el medio de pago
              seleccionado. En algunos casos puede que se requiera una
              verificación por medio de correo electrónico. Los precios de los
              servicios ofrecidos en esta web son válidos solamente en las
              suscripciones realizadas en este sitio web. LICENCIA Wawitas a través de su sitio web concede una licencia para que
              los usuarios utilicen los servicios que son vendidos en este sitio
              web de acuerdo a los Términos y Condiciones que se describen en
              este documento.
            </p>
          </div>

          <div className="flex justify-center w-full h-[30%]">
            <a href="g18-proyecto-final.vercel.app">
              <img className="h-full" src={logo} />
            </a>
          </div>

        </form>
      </div>
    </div>
  );
}
