const { DataSource } = require('apollo-datasource');

class MajorExportTranslateAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllMajorExportTranslates() {
    const majorExportTranslates = await this.store.MajorExportTranslate.findAll();
    return majorExportTranslates ? majorExportTranslates : null;
  }

  async getMajorExportTranslateById({ majorExportTranslateId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const majorExportTranslate = await this.store.MajorExportTranslate.findByPk(id);
    return majorExportTranslate ? majorExportTranslate : null;
  }

  async getMajorExportTranslateByCode({ id: idArg, languageCode: codeArg } = {}) {
    const code = codeArg;
    const id = idArg;
    if (!code || !id) return null;

    const majorExportTranslate = await this.store.MajorExportTranslate.findOne({
      where: {
        major_export_id: id,
        languageCode: code,
      }
    });
    return majorExportTranslate ? majorExportTranslate : null;
  }
}

module.exports = MajorExportTranslateAPI;
