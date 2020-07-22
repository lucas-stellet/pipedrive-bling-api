const { getDealsProducts } = require('../api/components/deals/services/index')
const { convertDate, convertToXML } = require('../helpers/convertData')

exports.serializeDeals = (deals) => {
  const formattedDeals = deals.map((deal) => {
    return {
      data: convertDate(deal.add_time),
      id: deal.id,
      cliente: {
        nome: deal.person_id.name,
        email: deal.person_id.email[0].value,
        fone: deal.person_id.phone[0].value
      }
    }
  })

  return formattedDeals
}

exports.saveProductsOnDeals = async (deals) => {
  const dealsIds = deals.map(deal => deal.id)

  for (let i = 0; i < dealsIds.length; i++) {
    const { data } = await getDealsProducts(dealsIds[i])
    const items = data.map(item => {
      return {
        item: {
          codigo: item.id,
          descricao: item.name,
          qtde: item.quantity,
          vlr_unit: item.item_price
        }
      }
    })

    deals[i] = {
      pedido: {
        ...deals[i],
        itens: items
      }
    }
  }

  return deals
}

exports.convertToBlingOrder = (deal) => {
  return convertToXML(deal)
}
