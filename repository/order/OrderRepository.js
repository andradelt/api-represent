import db from '../../db.json' with { type: 'json' };

class OrderRepository {

    static findAll() {
        const orders = db.order
        return orders
    }

}

export default OrderRepository;