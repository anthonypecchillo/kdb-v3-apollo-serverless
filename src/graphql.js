const { ApolloServer } = require('apollo-server');
// const { ApolloServer } = require('apollo-server-lambda');
const typeDefs = require('./schema');
const { createStore } = require('./utils');
const resolvers = require('./resolvers');

// const LaunchAPI = require('./datasources/launch');
// const UserAPI = require('./datasources/user');
const RegionAPI = require('./datasources/region');
const NationAPI = require('./datasources/nation');
const JurisdictionAPI = require('./datasources/jurisdiction');
const LanguageAPI = require('./datasources/language');
const CitationAPI = require('./datasources/citation');
const ContactAPI = require('./datasources/contact');
const PartnershipAPI = require('./datasources/partnership');
// const PartnershipTranslateAPI = require('./datasources/partnershipTranslate');
const InstitutionalFrameworkAPI = require('./datasources/institutionalFramework');
// const InstitutionalFrameworkTranslateAPI = require('./datasources/institutionalFrameworkTranslate');
const LawAPI = require('./datasources/law');
// const LawTranslateAPI = require('./datasources/lawTranslate');
const SafeguardAPI = require('./datasources/safeguard');
// const SafeguardTranslateAPI = require('./datasources/safeguardTranslate');
const ZoningSpatialPlanAPI = require('./datasources/zoningSpatialPlan');
// const ZoningSpatialPlanTranslateAPI = require('./datasources/zoningSpatialPlanTranslate');
const VegetationAPI = require('./datasources/vegetation');
const ForestManagementAPI = require('./datasources/forestManagement');
const DeforestationRateAPI = require('./datasources/deforestationRate');
const SocialGroupAPI = require('./datasources/socialGroup');
const UrbanVsRuralAPI = require('./datasources/urbanVsRural');
const GdpCategoryAPI = require('./datasources/gdpCategory');
const ValueNationalAPI = require('./datasources/valueNational');
const ValueJurisdictionalAPI = require('./datasources/valueJurisdictional');
const ValueGlobalAPI = require('./datasources/valueGlobal');
const MajorExportAPI = require('./datasources/majorExport');
const CommodityAPI = require('./datasources/commodity');
const SlrtScoreAPI = require('./datasources/slrtScore');
const OrganizationAPI = require('./datasources/organization');
// const OrganizationTranslateAPI = require('./datasources/organizationTranslate');
const ContentNationalAPI = require('./datasources/contentNational');
const ContentNationalTranslateAPI = require('./datasources/contentNationalTranslate');
const ContentJurisdictionalAPI = require('./datasources/contentJurisdictional');
const ContentJurisdictionalTranslateAPI = require('./datasources/contentJurisdictionalTranslate');
// const VegetationTranslateAPI = require('./datasources/vegetationTranslate');
// const SocialGroupTranslateAPI = require('./datasources/socialGroupTranslate');
// const GdpCategoryTranslateAPI = require('./datasources/gdpCategoryTranslate');
// const CommodityTranslateAPI = require('./datasources/commodityTranslate');
// const ExportTranslateAPI = require('./datasources/exportTranslate');
const LawTagAPI = require('./datasources/lawTag');
const LawTagTranslateAPI = require('./datasources/lawTagTranslate');

const store = createStore();
console.log('store is: ', store);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    // launchAPI: new LaunchAPI(),
    // userAPI: new UserAPI({ store }),
    regionAPI: new RegionAPI({ store }),
    nationAPI: new NationAPI({ store }),
    jurisdictionAPI: new JurisdictionAPI({ store }),
    languageAPI: new LanguageAPI({ store }),
    citationAPI: new CitationAPI({ store }),
    contactAPI: new ContactAPI({ store }),
    partnershipAPI: new PartnershipAPI({ store }),
    // partnershipTranslateAPI: new PartnershipTranslateAPI({ store }),
    institutionalFrameworkAPI: new InstitutionalFrameworkAPI({ store }),
    // institutionalFrameworkTranslateAPI: new InstitutionalFrameworkTranslateAPI({ store }),
    lawAPI: new LawAPI({ store }),
    // lawTranslateAPI: new LawTranslateAPI({ store }),
    safeguardAPI: new SafeguardAPI({ store }),
    // safeguardTranslateAPI: new SafeguardTranslateAPI({ store }),
    zoningSpatialPlanAPI: new ZoningSpatialPlanAPI({ store }),
    // zoningSpatialPlanTranslateAPI: new ZoningSpatialPlanTranslateAPI({ store }),
    vegetationAPI: new VegetationAPI({ store }),
    forestManagementAPI: new ForestManagementAPI({ store }),
    deforestationRateAPI: new DeforestationRateAPI({ store }),
    socialGroupAPI: new SocialGroupAPI({ store }),
    urbanVsRuralAPI: new UrbanVsRuralAPI({ store }),
    gdpCategoryAPI: new GdpCategoryAPI({ store }),
    valueNationalAPI: new ValueNationalAPI({ store }),
    valueJurisdictionalAPI: new ValueJurisdictionalAPI({ store }),
    valueGlobalAPI: new ValueGlobalAPI({ store }),
    majorExportAPI: new MajorExportAPI({ store }),
    commodityAPI: new CommodityAPI({ store }),
    slrtScoreAPI: new SlrtScoreAPI({ store }),
    organizationAPI: new OrganizationAPI({ store }),
    // organizationTranslateAPI: new OrganizationTranslateAPI({ store }),
    contentNationalAPI: new ContentNationalAPI({ store }),
    contentNationalTranslateAPI: new ContentNationalTranslateAPI({ store }),
    contentJurisdictionalAPI: new ContentJurisdictionalAPI({ store }),
    contentJurisdictionalTranslateAPI: new ContentJurisdictionalTranslateAPI({ store }),
    // vegetationTranslateAPI: new VegetationTranslateAPI({ store }),
    // socialGroupTranslateAPI: new SocialGroupTranslateAPI({ store }),
    // gdpCategoryTranslateAPI: new GdpCategoryTranslateAPI({ store }),
    // commodityTranslateAPI: new CommodityTranslateAPI({ store }),
    // exportTranslateAPI: new ExportTranslateAPI({ store }),
    lawTagAPI: new LawTagAPI({ store }),
    lawTagTranslateAPI: new LawTagTranslateAPI({ store }),
  })
});

// exports.graphqlHandler = server.createHandler();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
