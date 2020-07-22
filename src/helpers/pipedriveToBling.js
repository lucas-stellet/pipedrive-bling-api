const { getDealsProducts } = require('../api/components/deals/services/index')

exports.serializeDeals = (deals) => {
  const formattedDeals = deals.map((deal) => {
    return {
      id: deal.id,
      client: {
        name: deal.person_id.name,
        email: deal.person_id.email[0].value,
        phone: deal.person_id.phone[0].value
      }
    }
  })

  return formattedDeals
}

exports.saveProductsOnDeals = async (deals) => {
  const dealsIds = deals.map(deal => deal.id)

  for (let i = 0; i < dealsIds.length; i++) {
    const { data } = await getDealsProducts(dealsIds[i])
    data.forEach(item => {
      deals[i] = {
        ...deals[i],
        items: {
          id: item.id,
          description: item.name,
          quantity: item.quantity,
          unity_value: item.item_price
        }
      }
    })
  }

  return deals
}
