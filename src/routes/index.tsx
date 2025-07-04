import { BrowserRouter, Route } from "react-router"
import { AuthRoutes } from "./Authroutes"
import { EmployeeRoutes } from "./EmployeeRoutes"

export function Routes() {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      <EmployeeRoutes />
    </BrowserRouter>
  )
}
