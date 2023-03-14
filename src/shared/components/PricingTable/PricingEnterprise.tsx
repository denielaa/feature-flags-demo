import { useVariant } from '@unleash/proxy-client-react'

import { getRandomPict } from './pricingUtils'

const PricingEnterprise = () => {
  const isImageEnabled = useVariant('pricing.enterprise')

  return (
    <div className="card w-96 bg-base-100 shadow-2xl flex-1 hover:shadow-none">
      {isImageEnabled.name === 'WithImage' && (
        <figure>
          <img src={getRandomPict()} className="rounded-t-xl" alt="picsum" />
        </figure>
      )}
      <div className="card-body">
        <h2 className="card-title">
          Enterprise
          <div className="badge badge-success">NEW</div>
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

        <ul className="list-disc list-inside">
          <li>Unlimited Storage</li>
          <li>Unlimited Users</li>
          <li>Unlimited Domains</li>
          <li>Enterprise Support</li>
        </ul>

        <div className="flex flex-col my-6">
          <p className="text-gray-800 font-medium mb-2">Price:</p>
          <p className="text-3xl font-semibold mb-2">$29.99/month</p>
        </div>

        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export { PricingEnterprise }
