import db from '../../db.json' with { type: 'json' };

class CustomerRepository {

    static  findAll() {
        const customers = db.customer
        return customers
    }

}

export default CustomerRepository;