const { DataSource } = require('apollo-datasource');

class MajorExportAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllMajorExports() {
    const majorExports = await this.store.MajorExport.findAll();
    return majorExports ? majorExports : null;
  }

  async getMajorExportById({ majorExportId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const majorExport = await this.store.MajorExport.findByPk(id);
    return majorExport ? majorExport : null;
  }
}

module.exports = MajorExportAPI;
