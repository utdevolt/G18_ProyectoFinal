// Componente que almacena todas las rutas del proyecto

import { BrowserRouter,Routes,Route } from "react-router-dom";
import { HomePage, TermsConditions, ForgotPswd, PostProducts, ListProducts,EditProducts } from "../pages";

export default function RouterApp(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/terms_and_conditions" element={<TermsConditions/>}/>
        <Route path="/forgot_my_password" element={<ForgotPswd/>}/>
        <Route path="/postproducts" element={<PostProducts/>}/>
        <Route path="/listProducts" element={<ListProducts/>}/>
        <Route path="/editProducts" element={<EditProducts/>}/>
      </Routes>
    </BrowserRouter>
  );
}
