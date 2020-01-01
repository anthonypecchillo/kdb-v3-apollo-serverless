const { DataSource } = require('apollo-datasource');

class SlrtScoreAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllSlrtScores() {
    const slrtScores = await this.store.SlrtScore.findAll();
    return slrtScores ? slrtScores : null;
  }

  async getSlrtScoreById({ slrtScoreId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const slrtScore = await this.store.SlrtScore.findByPk(id);
    return slrtScore ? slrtScore : null;
  }
}

module.exports = SlrtScoreAPI;
