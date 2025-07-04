import { BrowserRouter, Route } from "react-router"
import { AuthRoutes } from "./Authroutes"

export function Routes() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  )
}
