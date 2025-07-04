import { Input } from "../components/Input"
import { Button } from "../components/Button"
import { useState } from "react"

export function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log(email, password)
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
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
      <Button type="submit" isLoading={isLoading}>
        Entrar
      </Button>
    </form>
  )
}
