import { Navigate, useLocation } from "react-router"
import OkSvg from "../assets/ok.svg"

export function Confirm() {
  const location = useLocation()

  if (!location.state?.fromSubmit) {
    return <Navigate to="/" />
  }

  return (
    <div className="bg-gray-500 lg:w-[512px] rounded-xl flex flex-col items-center justify-center p-10 gap-6 shadow-2xl">
      <h1 className="font-bold text-2xl text-center text-green-100">
        Solicitação Enviada!
      </h1>
      <img src={OkSvg} alt="Confirmed" className="w-28" />
      <p className="text-sm text-gray-200 text-center">
        Agora é apenas aguardar! Sua solicitação será analisada e, em breve, o
        setor financeiro irá entrar em contato com você.
      </p>
      <a
        href="/"
        className="w-full p-3 text-center bg-green-100 rounded-lg text-white hover:bg-green-200 transition ease-in-out"
      >
        Nova solicitação
      </a>
    </div>
  )
}
