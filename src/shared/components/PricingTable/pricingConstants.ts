interface IPricing {
  title: string
  description: string
  features: string[]
  price: number
}

const BasicPricing: IPricing = {
  title: 'Basic',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  features: ['10 GB Storage', '5 Users', '10 Domains', 'Basic Support'],
  price: 9.99,
}

const ProPricing: IPricing = {
  title: 'Pro',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  features: ['100 GB Storage', '10 Users', '100 Domains', 'Pro Support'],
  price: 19.99,
}

// const EnterprisePricing: IPricing = {
//   title: 'Enterprise',
//   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   features: ['Unlimited Storage', 'Unlimited Users', 'Unlimited Domains', 'Enterprise Support'],
//   price: 29.99,
// }

const PricingData = [BasicPricing, ProPricing]
// if (process.env.ENABLE_ENTERPRISE_PRICING) {
//   PricingData.push(EnterprisePricing)
// }

export { PricingData }
