import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
import RenderProducts from "../../components/RenderProducts";

//Public Key
initMercadoPago("TEST-d06edb11-cc31-48ed-acf7-0e8007c6c1e7");

export default function PayProducts () {



  return(
    <main className="w-full h-full m-auto border-4 border-black">
      <section className="p-6">
        <h1 className="text-center text-2xl font-bold">
          Integrando MercadoPago
        </h1>
        <Wallet initialization={{preferenceId:'1146510377-7ce92a1d-61a2-482c-9586-6d02740b0888'}}/>

      </section>
      <section>
        <RenderProducts />
      </section>

    </main>
  );
}


