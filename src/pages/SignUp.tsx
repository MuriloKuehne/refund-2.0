import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react"

export function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(name, email, password, passwordConfirm)
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4 ">
      <Input
        required
        legend="Nome"
        type="name"
        placeholder="Seu nome"
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        required
        legend="Email"
        type="email"
        placeholder="seu@email.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        required
        legend="Senha"
        type="password"
        placeholder="senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        required
        legend="Confirme a senha"
        type="passwordConfirm"
        placeholder="Confirme a senha"
        onChange={(e) => setPasswordConfirm(e.target.value)}
      />
      <Button type="submit" isLoading={isLoading}>
        Cadastrar
      </Button>

      <a
        href="/"
        className="text-sm font-semibold text-gray-100 mt-3 mb-4  text-center  hover:text-green-800 transition ease-in"
      >
        Já tenho conta
      </a>
    </form>
  )
}
