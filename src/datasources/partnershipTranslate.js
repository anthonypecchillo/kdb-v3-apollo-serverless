const { DataSource } = require('apollo-datasource');

class PartnershipTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllPartnershipTranslates() {
    const partnershipTranslates = await this.store.PartnershipTranslate.findAll();
    return partnershipTranslates ? partnershipTranslates : null;
  }

  async getPartnershipTranslateById({ partnershipTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const partnershipTranslate = await this.store.PartnershipTranslate.findByPk(id);
    return partnershipTranslate ? partnershipTranslate : null;
  }

  async getPartnershipTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    let partnershipTranslate = await this.store.PartnershipTranslate.findOne({
      where: {
        partnership_id: id,
        languageCode: code,
      }
    });

    // If there is no record for the language requested, default to English.
    if (!partnershipTranslate) {
      partnershipTranslate = await this.store.PartnershipTranslate.findOne({
        where: {
          partnership_id: id,
          languageCode: 'en',
        }
      });
    }
    return partnershipTranslate ? partnershipTranslate : null;
  }
}

module.exports = PartnershipTranslateAPI;
