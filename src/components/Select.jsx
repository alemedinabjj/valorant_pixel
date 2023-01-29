export function SelectUsage() {
  return (
    <div className="mb-10 max-w-[200px] ml-auto">
      <label
        htmlFor="location"
        className="block text-sm font-medium text-gray-900"
      >
        Ordernar por
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm "
        defaultValue=""
      >
        <option>Selecione</option>
        <option>Mais visualizados</option>
        <option>Mais antigos</option>
        <option>Mais novos</option>
      </select>
    </div>
  );
}
