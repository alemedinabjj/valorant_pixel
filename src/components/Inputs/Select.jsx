export function Select({ data, setGetGameId }) {
  const options = data?.map((item) => {
    return {
      primaryValue: "Select Game",
      value: item.id,
      label: item.name,
    };
  });

  return (
    <select
      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm "
      onChange={(e) => setGetGameId(e.target.value)}
      defaultValue=""
    >
      <option value="" disabled>
        Select Game
      </option>
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
