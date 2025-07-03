import { Input } from "../components/Input"

export function SignIn() {
  return (
    <form className="flex w-full flex-col gap-4">
      <Input required legend="Email" type="email" placeholder="seu@email.com" />
      <Input required legend="Senha" type="password" placeholder="senha" />
    </form>
  )
}
