import { Outlet } from "react-router"
import { Header } from "./Header"

export function AppLayout() {
  return (
    <div className="w-dvw h-dvh bg-gray-400 flex flex-col items-center text-gray-100">
      <main className="p-3  md:auto ">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}
