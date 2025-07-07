import { BrowserRouter, Route } from "react-router"
import { AuthRoutes } from "./Authroutes"
import { EmployeeRoutes } from "./EmployeeRoutes"
import { ManagerRoutes } from "./ManagerRoutes"

export function Routes() {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      <ManagerRoutes />
    </BrowserRouter>
  )
}
