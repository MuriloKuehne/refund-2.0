import { Outlet } from "react-router"
import logosvg from "../assets/logo.svg"

export function AuthLayout() {
  return (
    <div className="w-dvw h-dvh bg-gray-400 flex flex-col justify-center items-center text-gray-100 ">
      <main className="bg-gray-500 p-8 rounded-md flex items-center flex-col md:min-w-[462px] shadow-2xl">
        <img src={logosvg} alt="Refund Logo" />
        <Outlet />
      </main>
    </div>
  )
}
