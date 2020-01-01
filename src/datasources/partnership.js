const { DataSource } = require('apollo-datasource');

class PartnershipAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllPartnerships() {
    const partnerships = await this.store.Partnership.findAll();
    return partnerships ? partnerships : null;
  }

  async getPartnershipById({ partnershipId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const partnership = await this.store.Partnership.findByPk(id);
    return partnership ? partnership : null;
  }
}

module.exports = PartnershipAPI;
