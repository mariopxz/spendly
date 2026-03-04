const StatsCard = ({ card }) => {
  const { titleCard, valueCard, percentage } = card;

  return (
    <div className="w-full max-w-xl rounded-lg bg-white shadow-md m-4">
      <div className="p-6">
        <div className="flex items-center">
          <div className="ml-4 text-lg leading-6 font-medium text-gray-900">
            <p className="mt-1 text-sm text-gray-500 uppercase">{titleCard}</p>
            <p className="text-2xl font-bold">{valueCard}€</p>
            <p className="mt-2 text-sm text-gray-500">
              {percentage > 0 ? (<span className="text-green-500">↑ {percentage}%</span>) : (
                <span className="text-red-500">↓ {Math.abs(percentage)}%</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
