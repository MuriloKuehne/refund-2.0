type Props = React.ComponentProps<"select"> & {
  legend?: string
}

export function Select({ legend, children, ...rest }: Props) {
  return (
    <fieldset className=" flex flex-1 max-h-20 text-gray-200 focus-within:text-green-100">
      {legend && (
        <legend className="uppercase text-xxs  mb-2 text-inherit">
          {legend}
        </legend>
      )}

      <select
        className="w-full h-12 rounded-lg px-4 text-sm text-gray-100 bg-transparent placeholder:italic outline-none focus:border-2 focus:border-green-100 border-2 border-gray-300 placeholder:text-gray-300"
        {...rest}
        value=""
      >
        <option value="" disabled hidden>
          Selecione
        </option>

        {children}
      </select>
    </fieldset>
  )
}
