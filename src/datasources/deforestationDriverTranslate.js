const { DataSource } = require('apollo-datasource');

class DeforestationDriverTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllDeforestationDriverTranslates() {
    const deforestationDriverTranslates = await this.store.DeforestationDriverTranslate.findAll();
    return deforestationDriverTranslates ? deforestationDriverTranslates : null;
  }

  async getDeforestationDriverTranslateById({ deforestationDriverTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const deforestationDriverTranslate = await this.store.DeforestationDriverTranslate.findByPk(id);
    return deforestationDriverTranslate ? deforestationDriverTranslate : null;
  }

  async getDeforestationDriverTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const deforestationDriverTranslate = await this.store.DeforestationDriverTranslate.findOne({
      where: {
        deforestation_driver_id: id,
        languageCode: code,
      }
    });
    return deforestationDriverTranslate ? deforestationDriverTranslate : null;
  }
}

module.exports = DeforestationDriverTranslateAPI;
