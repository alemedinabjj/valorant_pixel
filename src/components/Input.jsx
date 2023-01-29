export function InputUsage({ label, name, type, placeholder, onChange }) {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={name}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
