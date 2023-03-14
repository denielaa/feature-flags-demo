import { FC } from 'react'

import { IPricing, PricingData } from './pricingConstants'
import { getRandomPict } from './pricingUtils'

interface PricingCardProps {
  pricing: IPricing
}

const PricingCard: FC<PricingCardProps> = ({ pricing }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-2xl flex-1 hover:shadow-none">
      <figure>
        <img src={getRandomPict()} className="rounded-t-xl" alt="picsum" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {pricing.title}
          {pricing.isNew && <div className="badge badge-success">NEW</div>}
        </h2>
        <p>{pricing.description}</p>

        {pricing.features && (
          <ul className="list-disc list-inside">
            {pricing.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-col my-6">
          <p className="text-gray-800 font-medium mb-2">Price:</p>
          <p className="text-3xl font-semibold mb-2">${pricing.price}/month</p>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

const PricingTable = () => {
  return (
    <div className="flex flex-col bg-base-200 rounded-lg p-6 mx-4 justify-center max-w-7xl">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-medium mb-4">Pricing Table</h2>
        <p className="text-gray-600 text-sm mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-row gap-5 flex-wrap">
        {PricingData.map((pricing, index) => (
          <PricingCard pricing={pricing} key={index} />
        ))}
      </div>
    </div>
  )
}

export { PricingTable }
