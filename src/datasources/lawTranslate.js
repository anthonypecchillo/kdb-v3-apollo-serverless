const { DataSource } = require('apollo-datasource');

class LawTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllLawTranslates() {
    const lawTranslates = await this.store.LawTranslate.findAll();
    return lawTranslates ? lawTranslates : null;
  }

  async getLawTranslateById({ lawTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const lawTranslate = await this.store.LawTranslate.findByPk(id);
    return lawTranslate ? lawTranslate : null;
  }

  async getLawTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    let lawTranslate = await this.store.LawTranslate.findOne({
      where: {
        law_id: id,
        languageCode: code,
      }
    });

    // If there is no record for the language requested, default to English.
    if (!lawTranslate) {
      lawTranslate = await this.store.LawTranslate.findOne({
        where: {
          law_id: id,
          languageCode: 'en',
        }
      });
    }
    return lawTranslate ? lawTranslate : null;
  }
}

module.exports = LawTranslateAPI;
