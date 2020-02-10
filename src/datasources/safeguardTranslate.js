const { DataSource } = require('apollo-datasource');

class SafeguardTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllSafeguardTranslates() {
    const safeguardTranslates = await this.store.SafeguardTranslate.findAll();
    return safeguardTranslates ? safeguardTranslates : null;
  }

  async getSafeguardTranslateById({ safeguardTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const safeguardTranslate = await this.store.SafeguardTranslate.findByPk(id);
    return safeguardTranslate ? safeguardTranslate : null;
  }

  async getSafeguardTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const safeguardTranslate = await this.store.SafeguardTranslate.findOne({
      where: {
        safeguard_id: id,
        languageCode: code,
      }
    });
    return safeguardTranslate ? safeguardTranslate : null;
  }
}

module.exports = SafeguardTranslateAPI;
