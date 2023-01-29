export function Card() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src="https://i.pravatar.cc/300"
            alt=""
          />
        </div>
        <div className="ml-4">
          <div className="text-sm font-medium text-gray-900">Juse</div>
          <div className="text-sm text-gray-500">Teste</div>
        </div>
      </div>
      <div className="mt-6">
        <p className="text-sm text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          amet labore.
        </p>
      </div>
    </div>
  );
}
