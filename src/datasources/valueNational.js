const { DataSource } = require('apollo-datasource');

class ValueNationalAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllValueNationals() {
    const valueNationals = await this.store.ValueNational.findAll();
    return valueNationals ? valueNationals : null;
  }

  async getValueNationalById({ valueNationalId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueNational = await this.store.ValueNational.findByPk(id);
    return valueNational ? valueNational : null;
  }

  async getDeforestationTrend({ nationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueNational = await this.store.ValueNational.findOne({
      where: {
        nation_id: id,
        name: 'Deforestation Trend',
      }
    });
    return valueNational ? valueNational : null;
  }

  async getGDP({ nationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueNational = await this.store.ValueNational.findOne({
      where: {
        nation_id: id,
        name: 'GDP',
      }
    });
    return valueNational ? valueNational : null;
  }

  async getHumanDevelopmentIndex({ nationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueNational = await this.store.ValueNational.findOne({
      where: {
        nation_id: id,
        name: 'Human Development Index',
      }
    });
    return valueNational ? valueNational : null;
  }

  async getLandArea({ nationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueNational = await this.store.ValueNational.findOne({
      where: {
        nation_id: id,
        name: 'Land Area',
      }
    });
    return valueNational ? valueNational : null;
  }

  async getPerCapitaIncome({ nationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueNational = await this.store.ValueNational.findOne({
      where: {
        nation_id: id,
        name: 'Per Capita Income',
      }
    });
    return valueNational ? valueNational : null;
  }

  async getPercentForested({ nationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueNational = await this.store.ValueNational.findOne({
      where: {
        nation_id: id,
        name: 'Percent Forested',
      }
    });
    return valueNational ? valueNational : null;
  }

  async getPopulation({ nationId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const valueNational = await this.store.ValueNational.findOne({
      where: {
        nation_id: id,
        name: 'Population',
      }
    });
    return valueNational ? valueNational : null;
  }
}

module.exports = ValueNationalAPI;
