const { DataSource } = require('apollo-datasource');

class LawPolicyStrategyAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllLawPolicyStrategys() {
    const lawPolicyStrategys = await this.store.LawPolicyStrategy.findAll();
    return lawPolicyStrategys ? lawPolicyStrategys : null;
  }

  async getLawPolicyStrategyById({ lawPolicyStrategyId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const lawPolicyStrategy = await this.store.LawPolicyStrategy.findByPk(id);
    return lawPolicyStrategy ? lawPolicyStrategy : null;
  }
}

module.exports = LawPolicyStrategyAPI;
