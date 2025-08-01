import OrderRepository from "../../repository/order/OrderRepository.js"
class OrderController {
   static getOrders() {
        const orders = OrderRepository.findAll()
        return orders
    }
}

export default OrderController