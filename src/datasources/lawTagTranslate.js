const { DataSource } = require('apollo-datasource');

class LawTagTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllLawTagTranslates() {
    const lawTagTranslates = await this.store.LawTagTranslate.findAll();
    return lawTagTranslates ? lawTagTranslates : null;
  }

  async getLawTagTranslateById({ lawTagTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const lawTagTranslate = await this.store.LawTagTranslate.findByPk(id);
    return lawTagTranslate ? lawTagTranslate : null;
  }

  async getLawTagTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const lawTagTranslate = await this.store.LawTagTranslate.findOne({
      where: {
        lawTagId: id,
        languageCode: code,
      }
    });
    return lawTagTranslate ? lawTagTranslate : null;
  }
}

module.exports = LawTagTranslateAPI;
