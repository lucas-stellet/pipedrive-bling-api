const bling = require('../orders/services')
const { convertDate } = require('../../../helpers/convertData')
const Sale = require('./models')

const getTodaySales = (orders, today) => {
  orders = orders.map(order => {
    const { pedido: { totalvenda, data } } = order
    return { totalvenda, data }
  })

  const todayAmount = orders.reduce((acc, order) => {
    if (order.data === today) {
      acc.amount = +acc.amount + +order.totalvenda
    }
    return acc
  }, { amount: '', date: today })

  console.log(todayAmount)

  return todayAmount
}

const saveTodayAmount = async (todaySales) => {
  console.log(todaySales)
  const amountRegistered = await Sale.findOne({
    date: todaySales.date
  })

  if (amountRegistered) {
    const { _id } = amountRegistered
    await Sale.findByIdAndUpdate(
      _id,
      { amount: todaySales.amount === '' ? 0 : todaySales.amount, data: convertDate(new Date(), 'YYYY-MM-DD') },
      {
        new: true
      }
    )
  } else {
    Sale.create({
      amount: todaySales.amount, date: todaySales.date
    })
  }

  const todayAmount = await Sale.findOne({
    date: todaySales.date
  })

  return { vendasDoDia: todayAmount.amount, data: convertDate(new Date(), 'DD/MM/YYYY - HH:MM') }
}

module.exports = {
  async getSales (req, res) {
    const { pedidos: orders } = await bling.getOrders()

    const today = convertDate(new Date(), 'YYYY-MM-DD')

    const todaySales = getTodaySales(orders, today)

    const todaySalesAmount = await saveTodayAmount(todaySales)

    return res.json(todaySalesAmount)
  }
}
