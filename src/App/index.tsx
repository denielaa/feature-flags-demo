import './styles.css'

import { FlagProvider } from '@unleash/proxy-client-react'

// import { PricingTableBoolean } from '~/shared/components/PricingTable'
import { PricingTableUserId } from '~/shared/components/PricingTable/PricingTableUserId'
import { config as UnleashConfig } from '~/shared/configs/unleash'

function App() {
  return (
    <FlagProvider config={UnleashConfig}>
      <div className="flex justify-center mt-10">
        {/* <PricingTableBoolean /> */}

        <PricingTableUserId />
      </div>
    </FlagProvider>
  )
}

export default App
