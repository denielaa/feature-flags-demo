import { useFlag, useUnleashContext } from '@unleash/proxy-client-react'
import { useEffect } from 'react'

import { PricingBasic } from './PricingBasic'
import { PricingEnterprise } from './PricingEnterprise'
import { PricingPro } from './PricingPro'

const userId = 'user-123'

const PricingTableUserId = () => {
  const isEnterpriseEnabled = useFlag('pricing.enterprise')
  const unleashContext = useUnleashContext()

  useEffect(() => {
    unleashContext({ userId: userId })
  }, [userId])

  return (
    <div className="flex flex-col bg-base-200 rounded-lg p-6 mx-4 justify-center max-w-7xl">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl font-medium mb-4">Pricing Table</h2>
        <p className="text-gray-600 text-sm mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex flex-row gap-5 flex-wrap">
        <PricingBasic />
        <PricingPro />

        {isEnterpriseEnabled && <PricingEnterprise />}
      </div>
    </div>
  )
}

export { PricingTableUserId }
