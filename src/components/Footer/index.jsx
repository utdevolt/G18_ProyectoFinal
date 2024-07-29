import visa from '../../assets/visa.png';
import paypal from '../../assets/paypal.png';
import mastercard from '../../assets/mastercard.png';
import express from '../../assets/americanexpress.png';

export default function Footer() {
  return (
    <>
      <footer className="bg-[#fff] text-center lg:text-left">
        <div className="flex items-center justify-center p-6 border-b-2 border-sky-100 lg:justify-between">
          <div className="hidden lg:block">
            <span>Conéctate con nosotros en las redes sociales:</span>
          </div>

          <hr className=""></hr>

          <div className="flex justify-end gap-8">
            <a className="w-[45px] h-[45px] border bg-transparent text-blue border-blue rounded-full text-center py-2.5 hover:bg-blue hover:text-[#212529]" href="#">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a className="w-[45px] h-[45px] border bg-transparent text-blue border-blue rounded-full text-center py-2.5 hover:bg-blue hover:text-[#212529]" href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="w-[45px] h-[45px] border bg-transparent text-blue border-blue rounded-full text-center py-2.5 hover:bg-blue hover:text-[#212529]" href="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a className="w-[45px] h-[45px] border bg-transparent text-blue border-blue rounded-full text-center py-2.5 hover:bg-blue hover:text-[#212529]" href="#">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <h6 className="mb-4 flex items-center justify-center text-4xl font-bold text-pink uppercase md:justify-start">
                WAWITAS
              </h6>
              <p className="md:pr-7 text-sm">
                Wawitas es la tienda especializada en artículos para bebés más
                linda de Lima, llena de productos de la mejor calidad de las
                marcas más reconocidas en un ambiente cálido y acogedor.
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
                Contact
              </h6>
              <p className="mb-4 flex items-center justify-center md:justify-start text-sm">
                <i className="text-pink mr-2 fa-solid fa-location-dot"></i>
                C C. Open Plaza
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start text-sm">
                <i className=" text-pink mr-2 fa-solid fa-envelope"></i>
                hola@wawitas.com
              </p>
              <p className="mb-4 flex items-center justify-center md:justify-start text-sm">
                <i className="text-pink mr-2 fa-solid fa-phone"></i>
                + 01 234 567 89
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
                WAWITAS
              </h6>
              <p className="mb-4 text-sm">
                <a href="#!">Nosotros</a>
              </p>
              <p className="mb-4 text-sm">
                <a href="#!">Tiendas</a>
              </p>
              <p className="mb-4 text-sm">
                <a href="#!">Contáctanos</a>
              </p>
            </div>

            <div>
              <h6 className="mb-4 flex justify-center font-bold uppercase md:justify-start">
                ATENCIÓN AL USUARIO
              </h6>
              <p className="mb-4 text-sm">
                <a href="#!">Términos de condiciones</a>
              </p>
              <p className="mb-4 text-sm">
                <a href="#!">Cambios y devoluciones</a>
              </p>
              <p className="mb-4 text-sm">
                <a href="#!">Política de privacidad</a>
              </p>
              <p className="mb-4 text-sm">
                <a href="#!">Política de envío</a>
              </p>
            </div>
          </div>
        </div>

        <div className="md:flex items-center justify-between p-6 text-center">
          <p>© 2024 Copyright:
            <span className="font-semibold text-blue"> WAWITAS</span>
          </p>
          <div className="mt-5 flex justify-center md:mt-0">
            <img className="w-14 h-9" src={visa} alt="Tarjeta de crédito Visa" />
            <img className="w-14 h-9 ml-4" src={mastercard} alt="Tarjeta de crédito Mastercard" />
            <img className="w-14 h-9 ml-4" src={paypal} alt="Tarjeta de crédito Paypal" />
            <img className="w-14 h-9 ml-4" src={express} alt="Tarjeta de crédito AmericanExpress" />
          </div>
        </div>
      </footer>
    </>
  );
}