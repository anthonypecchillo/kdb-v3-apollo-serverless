const { DataSource } = require('apollo-datasource');

class ZoningSpatialPlanAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllZoningSpatialPlans() {
    const zoningSpatialPlans = await this.store.ZoningSpatialPlan.findAll();
    return zoningSpatialPlans ? zoningSpatialPlans : null;
  }

  async getZoningSpatialPlanById({ zoningSpatialPlanId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const zoningSpatialPlan = await this.store.ZoningSpatialPlan.findByPk(id);
    return zoningSpatialPlan ? zoningSpatialPlan : null;
  }
}

module.exports = ZoningSpatialPlanAPI;
