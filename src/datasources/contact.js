const { DataSource } = require('apollo-datasource');

class ContactAPI extends DataSource {
  constructor({ store }) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  async getAllContacts() {
    const contacts = await this.store.Contact.findAll();
    return contacts ? contacts : null;
  }

  async getContactById({ contactId: idArg } = {}) {
    const id = idArg;
    if (!id) return null;

    const contact = await this.store.Contact.findByPk(id);
    return contact ? contact : null;
  }
}

module.exports = ContactAPI;
