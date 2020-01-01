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
  });

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
  });

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
    title: {
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
    fundingAmount: {
      type: SQL.DECIMAL,
      field: 'funding_amount',
      // allowNull: false,
    },
    fundingCurrency: {
      type: SQL.STRING(16),
      field: 'funding_amount',
      // allowNull: false,
    },
    fundingSourceShort: {
      type: SQL.STRING(16),
      field: 'funding_source_short',
      // allowNull: false,
    },
    initiativeStatus: {
      type: SQL.STRING(64),
      field: 'initiative_status',
      // allowNull: false,
    },
    url: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
  });


  const PartnershipTranslate = db.define('partnership_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    partnership_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    funding_source_long: {
      type: SQL.STRING(255),
      // allowNull: false,
    },
    initiative_status_details: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    initiative_type: {
      type: SQL.STRING(128),
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(255),
      // allowNull: false,
    },
    partners_type: {
      type: SQL.DATE,
      // allowNull: false,
    },
  });


  const InstitutionalFramework = db.define('institutional_framework', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name_short: {
      type: SQL.STRING(16),
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


  const InstitutionalFrameworkTranslate = db.define('institutional_framework_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    institutional_framework_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    name_long: {
      type: SQL.STRING(255),
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
  });


  const Law = db.define('law', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    law_number: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    pub_date: {
      type: SQL.DATE,
      // allowNull: false,
    },
    summary: {
      type: SQL.TEXT,
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


  const LawTranslate = db.define('law_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    law_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    law_type: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
    name: {
      type: SQL.STRING(255),
      // allowNull: false,
    },
  });


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


  const SafeguardTranslate = db.define('safeguard_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    safeguard_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
  });


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


  const ZoningSpatialPlanTranslate = db.define('zoning_spatial_plan_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    zoning_spatial_plan_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
  });


  const Vegetation = db.define('vegetation', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
  });


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


  const SocialGroup = db.define('social_group', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
  });


  const UrbanVsRural = db.define('urban_vs_rural', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    urban_population: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
    rural_population: {
      type: SQL.DECIMAL,
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


  const GdpCategory = db.define('gdp_category', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    amount: {
      type: SQL.DECIMAL,
      // allowNull: false,
    },
  });


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
      type: SQL.INTEGER,
      // allowNull: false,
    },
    nation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });


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
      type: SQL.INTEGER,
      // allowNull: false,
    },
    jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });


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
      type: SQL.INTEGER,
      // allowNull: false,
    },
  });


  const MajorExport = db.define('major_export', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
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
    name_short: {
      type: SQL.STRING(16),
      // allowNull: false,
    },
    url: {
      type: SQL.STRING(2083),
      // allowNull: false,
    },
  });


  const OrganizationTranslate = db.define('organization_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    organization_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    name_long: {
      type: SQL.STRING(255),
      // allowNull: false,
    },
  });


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


  const ContentNationalTranslate = db.define('content_national_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    content_national_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    laws_text: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    institutions_text: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    policies_plans_text: {
      type: SQL.TEXT,
      // allowNull: false,
    },
  });


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


  const ContentJurisdictionalTranslate = db.define('content_jurisdictional_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    content_jurisdiction_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    description: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    drivers_of_deforestation: {
      type: SQL.TEXT,
      // allowNull: false,
    },
    forest_monitoring_measurement_systems: {
      type: SQL.TEXT,
      // allowNull: false,
    },
  });


  const VegetationTranslate = db.define('vegetation_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    vegetation_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    vegetation_type: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });


  const SocialGroupTranslate = db.define('social_group_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    social_group_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    social_group_type: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });


  const GdpCategoryTranslate = db.define('gdp_category_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    gdp_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    gdp_category: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });


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
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    major_export_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    major_export_type: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });


  const LawTag = db.define('law_tag', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  });


  const LawTagTranslate = db.define('law_tag_translate', {
    id: {
      type: SQL.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    language_code: {
      type: SQL.CHAR(2),
      // allowNull: false,
    },
    law_tag_id: {
      type: SQL.INTEGER,
      // allowNull: false,
    },
    tag_name: {
      type: SQL.STRING(64),
      // allowNull: false,
    },
  });

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
    Vegetation,
    ForestManagement,
    DeforestationRate,
    SocialGroup,
    UrbanVsRural,
    GdpCategory,
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
    VegetationTranslate,
    SocialGroupTranslate,
    GdpCategoryTranslate,
    CommodityTranslate,
    MajorExportTranslate,
    LawTag,
    LawTagTranslate,
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
