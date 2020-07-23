const { DataSource } = require('apollo-datasource');

class InitiativeTypeTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllInitiativeTypeTranslates() {
    const initiativeTypeTranslates = await this.store.InitiativeTypeTranslate.findAll();
    return initiativeTypeTranslates ? initiativeTypeTranslates : null;
  }

  async getInitiativeTypeTranslateById({ initiativeTypeTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const initiativeTypeTranslate = await this.store.InitiativeTypeTranslate.findByPk(id);
    return initiativeTypeTranslate ? initiativeTypeTranslate : null;
  }

  async getInitiativeTypeTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const initiativeTypeTranslate = await this.store.InitiativeTypeTranslate.findOne({
      where: {
        initiativeTypeId: id,
        languageCode: code,
      }
    });
    return initiativeTypeTranslate ? initiativeTypeTranslate : null;
  }
}

module.exports = InitiativeTypeTranslateAPI;
