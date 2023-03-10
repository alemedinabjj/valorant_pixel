export function NamePage({ label }) {
  return (
    <div className="relative mb-10">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-center">
        <span className="bg-base px-3 text-lg font-medium text-gray-900">
          {label}
        </span>
      </div>
    </div>
  );
}
