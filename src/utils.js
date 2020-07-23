const SQL = require('sequelize');

module.exports.paginateResults = ({
  after: cursor,
  pageSize = 20,
  results,
  // can pass in a function to calculate an item's cursor
  getCursor = () => null,
}) => {
  if (pageSize < 1) return [];

  if (!cursor) return results.slice(0, pageSize);
  const cursorIndex = results.findIndex(item => {
    // if an item has a `cursor` on it, use that, otherwise try to generate one
    let itemCursor = item.cursor ? item.cursor : getCursor(item);

    // if there's still not a cursor, return false by default
    return itemCursor ? cursor === itemCursor : false;
  });

  return cursorIndex >= 0
    ? cursorIndex === results.length - 1 // don't let us overflow
      ? []
      : results.slice(
          cursorIndex + 1,
          Math.min(results.length, cursorIndex + 1 + pageSize),
        )
    : results.slice(0, pageSize);
};

module.exports.createStore = () => {
  const Op = SQL.Op;
  const operatorsAliases = {
    $in: Op.in,
  };

  const db = new SQL('gcftaskforce', '', '', {
    operatorsAliases,
    // logging: false,
    host: 'localhost',
    dialect: 'postgres',
    define: {
      freezeTableName: true,
      timestamps: false,
      underscored: true,
    },
  });


  const Region = db.define('region', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    coatOfArmsUrl: {
      type: SQL.STRING(2083),
      field: 'coat_of_arms_url',
      // allowNull: false,
    },
    flagUrl: {
      type: SQL.STRING(2083),
      field: 'flag_url',
      // allowNull: false,
    },
  });

  const Nation = db.define('nation', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    coatOfArmsUrl: {
      type: SQL.STRING(2083),
      field: 'coat_of_arms_url',
      // allowNull: false,
    },
    flagUrl: {
      type: SQL.STRING(2083),
      field: 'flag_url',
      // allowNull: false,
    },
  });

  Region.hasOne(Nation);
  Nation.belongsTo(Region);

  const Jurisdiction = db.define('jurisdiction', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    coatOfArmsUrl: {
      type: SQL.STRING(2083),
      field: 'coat_of_arms_url',
      // allowNull: false,
    },
    flagUrl: {
      type: SQL.STRING(2083),
      field: 'flag_url',
      // allowNull: false,
    },
  });

  Region.hasOne(Jurisdiction);
  Jurisdiction.belongsTo(Region);

  Nation.hasMany(Jurisdiction);
  Jurisdiction.belongsTo(Nation);

  const Language = db.define('language', {
    code: {
      type: SQL.CHAR(2),
      primaryKey: true,
      autoIncrement: false
    },
    name: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
  });

  const Citation = db.define('citation', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    filename: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
    url: {
      type: SQL.STRING(2083),
      // allowNull: false,
    }
  });

  const Contact = db.define('contact', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: SQL.STRING(64),
      field: 'first_name',
      // allowNull: false,
    },
    lastName: {
      type: SQL.STRING(64),
      field: 'last_name',
      // allowNull: false,
    },
    companyTitle: {
      type: SQL.STRING(128),
      field: 'company_title',
      // allowNull: false,
    },
    email: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    contactType: {
      type: SQL.STRING(16),
      field: 'contact_type',
      // allowNull: false,
    },
  });

  Nation.hasMany(Contact);
  Contact.belongsTo(Nation);

  Jurisdiction.hasMany(Contact);
  Contact.belongsTo(Jurisdiction);


  const Partnership = db.define('partnership', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    fundingAmount: {
      type: SQL.DECIMAL,
      field: 'funding_amount',
      // allowNull: false,
    },
    fundingCurrency: {
      type: SQL.STRING(16),
      field: 'funding_currency',
      // allowNull: false,
    },
    initiative_status_id: {
      type: SQL.INTEGER,
      // allowNull: false,
      field: 'initiative_status_id',
    },
    url: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
  });

  Nation.hasMany(Partnership);
  Partnership.belongsTo(Nation);

  Jurisdiction.belongsToMany(Partnership, {
    through: 'jurisdiction_partnership',
    as: 'partnershipJurisdictions',
    foreignKey: 'jurisdiction_id',
    otherKey: 'partnership_id'
  });

  Partnership.belongsToMany(Jurisdiction, {
    through: 'jurisdiction_partnership',
    as: 'partnershipJurisdictions',
    foreignKey: 'partnership_id',
    otherKey: 'jurisdiction_id'
  });

  // InitiativeType.belongsToMany(Partnership, {
  //   through: 'initiative_type_partnership',
  //   as: 'partnerships',
  //   foreignKey: 'initiative_type_id',
  //   otherKey: 'partnership_id'
  // });
  //
  // Partnership.belongsToMany(InitiativeType, {
  //   through: 'initiative_type_partnership',
  //   as: 'initiativeTypes',
  //   foreignKey: 'partnership_id',
  //   otherKey: 'initiative_type_id'
  // });

  const PartnershipTranslate = db.define('partnership_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      // allowNull: false,
      field: 'language_code',
    },
    partnership_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    initiative_status_details: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(511),
      // allowNull: false,
    },
  });

  Partnership.hasMany(PartnershipTranslate);
  PartnershipTranslate.belongsTo(Partnership);

  const InitiativeStatus = db.define('initiative_status', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  const InitiativeStatusTranslate = db.define('initiative_status_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    initiativeStatusId: {
      type: SQL.INTEGER,
      field: 'initiative_status_id',
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(255),
      field: 'name',
      // allowNull: false,
    },
  });

  InitiativeStatus.hasMany(InitiativeStatusTranslate);
  InitiativeStatusTranslate.belongsTo(InitiativeStatus);

  const InitiativeType = db.define('initiative_type', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  InitiativeType.belongsToMany(Partnership, {
    through: 'partnership_initiative_type',
    as: 'partnerships',
    foreignKey: 'initiative_type_id',
    otherKey: 'partnership_id'
  });

  Partnership.belongsToMany(InitiativeType, {
    through: 'partnership_initiative_type',
    as: 'initiativeTypes',
    foreignKey: 'partnership_id',
    otherKey: 'initiative_type_id'
  });

  const InitiativeTypeTranslate = db.define('initiative_type_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    initiativeTypeId: {
      type: SQL.INTEGER,
      field: 'initiative_type_id',
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(255),
      field: 'name',
      // allowNull: false,
    },
  });

  InitiativeType.hasMany(InitiativeTypeTranslate);
  InitiativeTypeTranslate.belongsTo(InitiativeType);


  const InstitutionalFramework = db.define('institutional_framework', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameShort: {
      type: SQL.STRING(32),
      field: 'name_short',
      // allowNull: false,
    },
    politicalScope: {
      type: SQL.STRING(12),
      field: 'political_scope',
      // allowNull: false,
    },
    url: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasMany(InstitutionalFramework);
  InstitutionalFramework.belongsTo(Jurisdiction);

  const InstitutionalFrameworkTranslate = db.define('institutional_framework_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    nameLong: {
      type: SQL.STRING(1023),
      field: 'name_long'
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    institutional_framework_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  InstitutionalFramework.hasMany(InstitutionalFrameworkTranslate);
  InstitutionalFrameworkTranslate.belongsTo(InstitutionalFramework);

  const Law = db.define('law', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    lawNumber: {
      type: SQL.STRING(128),
      field: 'law_number',
      // allowNull: false,
    },
    pubDate: {
      type: SQL.DATE,
      field: 'pub_date',
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Region.hasMany(Law);
  Law.belongsTo(Region);

  Law.belongsToMany(Citation, {
    through: 'citation_law',
    as: 'citations',
    foreignKey: 'law_id',
    otherKey: 'citation_id'
  });

  Citation.belongsToMany(Law, {
    through: 'citation_law',
    as: 'laws',
    foreignKey: 'citation_id',
    otherKey: 'law_id'
  });

  const LawTranslate = db.define('law_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    law_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    lawType: {
      type: SQL.STRING(64),
      field: 'law_type',
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
    summary: {
      type: SQL.TEXT,
      // allowNull: false,
    },
  });

  Law.hasMany(LawTranslate);
  LawTranslate.belongsTo(Law);

  const Safeguard = db.define('safeguard', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(Safeguard);
  Safeguard.belongsTo(Jurisdiction);

  const SafeguardTranslate = db.define('safeguard_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    safeguard_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Safeguard.hasMany(SafeguardTranslate);
  SafeguardTranslate.belongsTo(Safeguard);

  const ZoningSpatialPlan = db.define('zoning_spatial_plan', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(ZoningSpatialPlan);
  ZoningSpatialPlan.belongsTo(Jurisdiction);

  const ZoningSpatialPlanTranslate = db.define('zoning_spatial_plan_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    zoning_spatial_plan_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  ZoningSpatialPlan.hasMany(ZoningSpatialPlanTranslate);
  ZoningSpatialPlanTranslate.belongsTo(ZoningSpatialPlan);

  const LawPolicyStrategy = db.define('law_policy_strategy', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(LawPolicyStrategy);
  LawPolicyStrategy.belongsTo(Jurisdiction);

  const LawPolicyStrategyTranslate = db.define('law_policy_strategy_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    law_policy_strategy_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  LawPolicyStrategy.hasMany(LawPolicyStrategyTranslate);
  LawPolicyStrategyTranslate.belongsTo(LawPolicyStrategy);

  const ForestManagement = db.define('forest_management', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    protected: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    unprotected: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(ForestManagement);
  ForestManagement.belongsTo(Jurisdiction);


  const DeforestationRate = db.define('deforestation_rate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    units: {
      type: SQL.CHAR(8),
      // allowNull: false,
    },
    year: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    citation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Region.hasMany(DeforestationRate);
  DeforestationRate.belongsTo(Region);


  const UrbanVsRural = db.define('urban_vs_rural', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    urbanPopulation: {
      type: SQL.DECIMAL,
      field: 'urban_population',
      // allowNull: false,
    },
    ruralPopulation: {
      type: SQL.DECIMAL,
      field: 'rural_population',
      // allowNull: false,
    },
    citation_id: {
      type: SQL.STRING(2083),  // TODO: Revert this back to Integer later
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Region.hasOne(UrbanVsRural);
  UrbanVsRural.belongsTo(Region);

  const VegetationCategory = db.define('vegetation_category', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  const VegetationComponent = db.define('vegetation_component', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    percent: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    vegetation_category_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    citation_id: {
      type: SQL.STRING(2083),  // TODO: Revert this back to Integer later
      // allowNull: false,
    },
  });

  Jurisdiction.hasMany(VegetationComponent);
  VegetationComponent.belongsTo(Jurisdiction);

  VegetationCategory.hasMany(VegetationComponent);
  VegetationComponent.belongsTo(VegetationCategory);

  const SocialGroupCategory = db.define('social_group_category', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  const SocialGroupComponent = db.define('social_group_component', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    percent: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    social_group_category_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    citation_id: {
      type: SQL.STRING(2083),  // TODO: Revert this back to Integer later
      // allowNull: false,
    },
  });

  Region.hasMany(SocialGroupComponent);
  SocialGroupComponent.belongsTo(Region);

  SocialGroupCategory.hasMany(SocialGroupComponent);
  SocialGroupComponent.belongsTo(SocialGroupCategory);

  const GdpCategory = db.define('gdp_category', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  const GdpComponent = db.define('gdp_component', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    percent: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    region_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    gdp_category_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    citation_id: {
      type: SQL.STRING(2083),  // TODO: Revert this back to Integer later
      // allowNull: false,
    },
  });

  Region.hasMany(GdpComponent);
  GdpComponent.belongsTo(Region);

  GdpCategory.hasMany(GdpComponent);
  GdpComponent.belongsTo(GdpCategory);

  const ValueNational = db.define('value_national', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    units: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    year: {
      type: SQL.STRING(12),
      // allowNull: false,
    },
    citation_id: {
      // type: SQL.INTEGER,
      type: SQL.STRING(2083),   // TODO: Revert this back to Integer later
      // allowNull: false,
    },
    nation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Nation.hasMany(ValueNational);
  ValueNational.belongsTo(Nation);


  const ValueJurisdictional = db.define('value_jurisdictional', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    units: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    year: {
      type: SQL.STRING(12),
      // allowNull: false,
    },
    citation_id: {
      // type: SQL.INTEGER,
      type: SQL.STRING(2083),   // TODO: Revert this back to Integer later
      // allowNull: false,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasMany(ValueJurisdictional);
  ValueJurisdictional.belongsTo(Jurisdiction);


  const ValueGlobal = db.define('value_global', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    units: {
      type: SQL.STRING(32),
      // allowNull: false,
    },
    year: {
      type: SQL.STRING(12),
      // allowNull: false,
    },
    citation_id: {
      type: SQL.STRING(2083),   // TODO: Revert this back to Integer later
      // allowNull: false,
    },
  });

  // ValueGlobal.hasOne(Citation);
  // Citatiton.BelongsTo(ValueGlobal);


  const MajorExport = db.define('major_export', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    faIconClass: {
      type: SQL.STRING(64),
      field: 'fa_icon_class'
      // allowNull: false,
    },
  });

  Region.belongsToMany(MajorExport, {
    through: 'region_major_export',
    as: 'majorExports',
    foreignKey: 'region_id',
    otherKey: 'major_export_id'
  });

  MajorExport.belongsToMany(Region, {
    through: 'region_major_export',
    as: 'regions',
    foreignKey: 'major_export_id',
    otherKey: 'region_id'
  });

  const Commodity = db.define('commodity', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });


  const SlrtScore = db.define('slrt_score', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    inventory_of_land_rights: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    clarity_of_land_tenure: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    protection_biodiversity_ecosystem: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    citation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });


  const Organization = db.define('organization', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nameShort: {
      type: SQL.STRING(32),
      // allowNull: false,
      field: 'name_short'
    },
    url: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
  });

  Organization.belongsToMany(Partnership, {
    through: 'organization_partnership',
    as: 'partnerships',
    foreignKey: 'organization_id',
    otherKey: 'partnership_id'
  });

  Partnership.belongsToMany(Organization, {
    through: 'organization_partnership',
    as: 'organizations',
    foreignKey: 'partnership_id',
    otherKey: 'organization_id'
  });

  // Organization.belongsToMany(Partnership, {
  //   through: 'funding_source_partnership',
  //   as: 'partnerships',
  //   foreignKey: 'funding_source_id',
  //   otherKey: 'partnership_id'
  // });
  //
  // Partnership.belongsToMany(Organization, {
  //   through: 'funding_source_partnership',
  //   as: 'fundingSources',
  //   foreignKey: 'partnership_id',
  //   otherKey: 'funding_source_id'
  // });


  const OrganizationTranslate = db.define('organization_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      // allowNull: false,
      field: 'language_code',
    },
    organization_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    nameLong: {
      type: SQL.STRING(255),
      // allowNull: false,
      field: 'name_long',
    },
  });

  Organization.hasMany(OrganizationTranslate);
  OrganizationTranslate.belongsTo(Organization);


  const ContentNational = db.define('content_national', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Nation.hasOne(ContentNational);
  ContentNational.belongsTo(Nation);


  const ContentNationalTranslate = db.define('content_national_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    contentNationalId: {
      type: SQL.INTEGER,
      field: 'content_national_id',
      // allowNull: false,
    },
    lawsText: {
      type: SQL.TEXT,
      field: 'laws_text'
      // allowNull: false,
    },
    institutionsText: {
      type: SQL.TEXT,
      field: 'institutions_text'
      // allowNull: false,
    },
    policiesPlansText: {
      type: SQL.TEXT,
      field: 'policies_plans_text'
      // allowNull: false,
    },
  });

  ContentNational.hasMany(ContentNationalTranslate);
  ContentNationalTranslate.belongsTo(ContentNational);


  const ContentJurisdictional = db.define('content_jurisdictional', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  Jurisdiction.hasOne(ContentJurisdictional);
  ContentJurisdictional.belongsTo(Jurisdiction);


  const ContentJurisdictionalTranslate = db.define('content_jurisdictional_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    contentJurisdictionalId: {
      type: SQL.INTEGER,
      field: 'content_jurisdictional_id',
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    driversOfDeforestation: {
      type: SQL.TEXT,
      field: 'drivers_of_deforestation',
      // allowNull: false,
    },
    forestMonitoringMeasurementSystems: {
      type: SQL.TEXT,
      field: 'forest_monitoring_measurement_systems',
      // allowNull: false,
    },
  });

  ContentJurisdictional.hasMany(ContentJurisdictionalTranslate);
  ContentJurisdictionalTranslate.belongsTo(ContentJurisdictional);

  // TODO: Do we need these relationships?
  // Language.hasMany(ContentJurisdictionalTranslate);
  // ContentJurisdictionalTranslate.belongsTo(Language);


  const VegetationCategoryTranslate = db.define('vegetation_category_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    vegetation_category_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });

  VegetationCategory.hasMany(VegetationCategoryTranslate);
  VegetationCategoryTranslate.belongsTo(VegetationCategory);

  const SocialGroupCategoryTranslate = db.define('social_group_category_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    social_group_category_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });

  SocialGroupCategory.hasMany(SocialGroupCategoryTranslate);
  SocialGroupCategoryTranslate.belongsTo(SocialGroupCategory);

  const GdpCategoryTranslate = db.define('gdp_category_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    gdp_category_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });

  GdpCategory.hasMany(GdpCategoryTranslate);
  GdpCategoryTranslate.belongsTo(GdpCategory);


  const CommodityTranslate = db.define('commodity_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    commodity_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    commodity_type: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });


  const MajorExportTranslate = db.define('major_export_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });

  MajorExport.hasMany(MajorExportTranslate);
  MajorExportTranslate.belongsTo(MajorExport);


  const LawTag = db.define('law_tag', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });

  LawTag.belongsToMany(Law, {
    through: 'law_tag_law',
    as: 'laws',
    foreignKey: 'law_tag_id',
    otherKey: 'law_id'
  });

  Law.belongsToMany(LawTag, {
    through: 'law_tag_law',
    as: 'lawTags',
    foreignKey: 'law_id',
    otherKey: 'law_tag_id'
  });


  const LawTagTranslate = db.define('law_tag_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    lawTagId: {
      type: SQL.INTEGER,
      field: 'law_tag_id',
      // allowNull: false,
    },
    tagName: {
      type: SQL.STRING(64),
      field: 'tag_name',
      // allowNull: false,
    },
  });

  LawTag.hasMany(LawTagTranslate);
  LawTagTranslate.belongsTo(LawTag);

  const DeforestationDriver = db.define('deforestation_driver', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    faIconClass: {
      type: SQL.STRING(64),
      field: 'fa_icon_class'
      // allowNull: false,
    },
  });

  Jurisdiction.belongsToMany(DeforestationDriver, {
    through: 'jurisdiction_deforestation_driver',
    as: 'deforestationDrivers',
    foreignKey: 'jurisdiction_id',
    otherKey: 'deforestation_driver_id'
  });

  DeforestationDriver.belongsToMany(Jurisdiction, {
    through: 'jurisdiction_deforestation_driver',
    as: 'jurisdictions',
    foreignKey: 'deforestation_driver_id',
    otherKey: 'jurisdiction_id'
  });

  const DeforestationDriverTranslate = db.define('deforestation_driver_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    languageCode: {
      type: SQL.CHAR(2),
      field: 'language_code',
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });

  DeforestationDriver.hasMany(DeforestationDriverTranslate);
  DeforestationDriverTranslate.belongsTo(DeforestationDriver);

  return {
    Region,
    Nation,
    Jurisdiction,
    Language,
    Citation,
    Contact,
    Partnership,
    PartnershipTranslate,
    InstitutionalFramework,
    InstitutionalFrameworkTranslate,
    Law,
    LawTranslate,
    Safeguard,
    SafeguardTranslate,
    ZoningSpatialPlan,
    ZoningSpatialPlanTranslate,
    LawPolicyStrategy,
    LawPolicyStrategyTranslate,
    VegetationCategory,
    VegetationComponent,
    ForestManagement,
    DeforestationRate,
    SocialGroupCategory,
    SocialGroupComponent,
    UrbanVsRural,
    GdpCategory,
    GdpComponent,
    ValueNational,
    ValueJurisdictional,
    ValueGlobal,
    MajorExport,
    Commodity,
    SlrtScore,
    Organization,
    OrganizationTranslate,
    ContentNational,
    ContentNationalTranslate,
    ContentJurisdictional,
    ContentJurisdictionalTranslate,
    VegetationCategoryTranslate,
    SocialGroupCategoryTranslate,
    GdpCategoryTranslate,
    CommodityTranslate,
    MajorExportTranslate,
    LawTag,
    LawTagTranslate,
    DeforestationDriver,
    DeforestationDriverTranslate,
    InitiativeStatus,
    InitiativeStatusTranslate,
    InitiativeType,
    InitiativeTypeTranslate,
  };
};


// db
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });


    // const users = db.define('user', {
    //   id: {
    //     type: SQL.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    //   },
    //   createdAt: SQL.DATE,
    //   updatedAt: SQL.DATE,
    //   email: SQL.STRING,
    //   token: SQL.STRING,
    // });

  // const users = db.define('user', {
  //   id: {
  //     type: SQL.INTEGER,
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  //   createdAt: SQL.DATE,
  //   updatedAt: SQL.DATE,
  //   email: SQL.STRING,
  //   token: SQL.STRING,
  // });
  //
  // const trips = db.define('trip', {
  //   id: {
  //     type: SQL.INTEGER,
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },
  //   createdAt: SQL.DATE,
  //   updatedAt: SQL.DATE,
  //   launchId: SQL.INTEGER,
  //   userId: SQL.INTEGER,
  // });
  //
  // return { users, trips };
