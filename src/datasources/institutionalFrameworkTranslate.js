const { DataSource } = require('apollo-datasource');

class InstitutionalFrameworkTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllInstitutionalFrameworkTranslates() {
    const institutionalFrameworkTranslates = await this.store.InstitutionalFrameworkTranslate.findAll();
    return institutionalFrameworkTranslates ? institutionalFrameworkTranslates : null;
  }

  async getInstitutionalFrameworkTranslateById({ institutionalFrameworkTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const institutionalFrameworkTranslate = await this.store.InstitutionalFrameworkTranslate.findByPk(id);
    return institutionalFrameworkTranslate ? institutionalFrameworkTranslate : null;
  }

  async getInstitutionalFrameworkTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const institutionalFrameworkTranslate = await this.store.InstitutionalFrameworkTranslate.findOne({
      where: {
        institutional_framework_id: id,
        languageCode: code,
      }
    });
    return institutionalFrameworkTranslate ? institutionalFrameworkTranslate : null;
  }
}

module.exports = InstitutionalFrameworkTranslateAPI;
