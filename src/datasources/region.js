const { DataSource } = require('apollo-datasource');

class RegionAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  initialize(config) {
    this.context = config.context;

  }

  async getRegionById({ regionId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const region = await this.store.Region.findByPk(id);
    return region ? region : null;
  }

  async getRegionByName({ name: nameArg } = {}) {
    const name = nameArg;
    if (!name) return null;

    const region = await this.store.Region.findOne({ where: { name } });
    return region ? region : null;
  }
}

module.exports = RegionAPI;
