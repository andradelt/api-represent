import db from '../../db.json' with { type: 'json' };

class FactoryRepository {

    static  findAll() {
        const factories = db.factory
        return factories
    }

}

export default FactoryRepository;