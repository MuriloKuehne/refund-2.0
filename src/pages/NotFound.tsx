export function NotFound() {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center bg-gray-400">
      <div className="flex flex-col">
        <h1 className="text-gray-100 font-semibold text-2xl mb-10">
          Essa página não existe
        </h1>
        <a
          className="font-semibold text-center text-green-100 hover:text-green-200 transition ease-linear"
          href="/"
        >
          Voltar ao Início
        </a>
      </div>
    </div>
  )
}
