import { PricingData } from './pricingConstants'

const PricingCard = () => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl flex-1">
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

const PricingTable = () => {
  return (
    <div className="flex flex-col bg-base-200 rounded-lg shadow-md p-6 mx-4 w-full justify-center">
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-medium mb-4">Pricing Table</h2>
        <p className="text-gray-600 text-sm mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-row gap-4 flex-wrap">
        {PricingData.map((_pricing, index) => (
          <PricingCard key={index} />
        ))}
      </div>
    </div>
  )
}

export { PricingTable }
