const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
  # type Query {
  #   launches: [Launch]!
  #   launch(id: ID!): Launch
  #   # Queries for the current user
  #   me: User
  # }

  type Query {
    # regions: [Region!]!
    region(id: ID!): Region
    # nations: [Nation!]!
    nation(id: ID!): Nation
    # jurisdictions: [Jurisdiction!]!
    jurisdiction(id: ID!): Jurisdiction
    jurisdictionByName(name: String!): Jurisdiction
    languages: [Language!]!
    language(code: String!): Language
    citations: [Citation!]!
    citation(id: ID!): Citation
    contacts: [Contact!]!
    contact(id: ID!): Contact
    # partnerships: [Partnership!]!
    # partnership(id: ID!): Partnership
    # partnershipTranslates: [PartnershipTranslate!]!
    # partnershipTranslate(id: ID!): PartnershipTranslate
    # institutionalFrameworks: [InstitutionalFramework!]!
    # institutionalFramework(id: ID!): InstitutionalFramework
    # institutionalFrameworkTranslates: [InstitutionalFrameworkTranslate!]!
    # institutionalFrameworkTranslate(id: ID!): InstitutionalFrameworkTranslate
    laws: [Law!]!
    law(id: ID!): Law
    lawTranslates: [LawTranslate!]!
    lawTranslate(id: ID!): LawTranslate
    # safeguards: [Safeguard!]!
    # safeguard(id: ID!): Safeguard
    # safeguardTranslates: [SafeguardTranslate!]!
    # safeguardTranslate(id: ID!): SafeguardTranslate
    # zoningSpatialPlans: [ZoningSpatialPlan!]!
    # zoningSpatialPlan(id: ID!): ZoningSpatialPlan
    # zoningSpatialPlanTranslates: [ZoningSpatialPlanTranslate!]!
    # zoningSpatialPlanTranslate(id: ID!): ZoningSpatialPlanTranslate
    # vegetations: [Vegetation!]!
    # vegetation(id: ID!): Vegetation
    # forestManagements: [ForestManagement!]!
    # forestManagement(id: ID!): ForestManagement
    deforestationRates: [DeforestationRate!]!
    deforestationRate(id: ID!): DeforestationRate
    # socialGroups: [SocialGroup!]!
    # socialGroup(id: ID!): SocialGroup
    urbanVsRurals: [UrbanVsRural!]!
    urbanVsRural(id: ID!): UrbanVsRural!
    # urbanVsRural(id: ID!): UrbanVsRural
    # gdpCategorys: [GdpCategory!]!
    # gdpCategory(id: ID!): GdpCategory
    valueNationals: [ValueNational!]!
    valueNational(id: ID!): ValueNational
    valueJurisdictionals: [ValueJurisdictional!]!
    valueJurisdictional(id: ID!): ValueJurisdictional
    valueGlobals: [ValueGlobal!]!
    valueGlobal(id: ID!): ValueGlobal
    # majorExports: [MajorExport!]!
    # majorExport(id: ID!): MajorExport
    # commoditys: [Commodity!]!
    # commodity(id: ID!): Commodity
    # slrtScores: [SlrtScore!]!
    # slrtScore(id: ID!): SlrtScore
    # organizations: [Organization!]!
    # organization(id: ID!): Organization
    # organizationTranslates: [OrganizationTranslate!]!
    # organizationTranslate(id: ID!): OrganizationTranslate
    # contentNationals: [ContentNational!]!
    # contentNational(id: ID!): ContentNational
    # contentNationalTranslates: [ContentNationalTranslate!]!
    # contentNationalTranslate(id: ID!): ContentNationalTranslate
    contentJurisdictionals: [ContentJurisdictional!]!
    contentJurisdictional(id: ID!): ContentJurisdictional
    contentJurisdictionalTranslates: [ContentJurisdictionalTranslate!]!
    contentJurisdictionalTranslate(code: String!): ContentJurisdictionalTranslate
    # vegetationTranslates: [VegetationTranslate!]!
    # vegetationTranslate(id: ID!): VegetationTranslate
    # socialGroupTranslates: [SocialGroupTranslate!]!
    # socialGroupTranslate(id: ID!): SocialGroupTranslate
    # gdpCategoryTranslates: [GdpCategoryTranslate!]!
    # gdpCategoryTranslate(id: ID!): GdpCategoryTranslate
    # commodityTranslates: [CommodityTranslate!]!
    # commodityTranslate(id: ID!): CommodityTranslate
    # exportTranslates: [ExportTranslate!]!
    # exportTranslate(id: ID!): ExportTranslate
    lawTags: [LawTag!]!
    lawTag(id: ID!): LawTag
    lawTagTranslates: [LawTagTranslate!]!
    lawTagTranslate(id: ID!): LawTagTranslate
  }

  type Region {
    id: ID!
    name: String!
    deforestationRates: [DeforestationRate!]
    urbanVsRural: UrbanVsRural!
  }

  type Nation {
    id: ID!
    name: String!
    jurisdictions: [Jurisdiction!]!
    contacts: [Contact!]!
    deforestationTrend: ValueNational
    gdp: ValueNational
    humanDevelopmentIndex: ValueNational
    landArea: ValueNational
    perCapitaIncome: ValueNational
    percentForested: ValueNational
    population: ValueNational
  }

  type Jurisdiction {
    id: ID!
    name: String!
    nation: Nation!
    contacts: [Contact!]!
    contentJurisdictional: ContentJurisdictional!
    valueJurisdictional: ValueJurisdictional!
    valueJurisdictionals: [ValueJurisdictional!]!
    deforestationReferenceRate: ValueJurisdictional
    deforestationTrend: ValueJurisdictional
    deforestationReductionGoal: ValueJurisdictional
    forestArea: ValueJurisdictional
    forestCarbon: ValueJurisdictional
    gdp: ValueJurisdictional
    humanDevelopmentIndex: ValueJurisdictional
    landArea: ValueJurisdictional
    originalForestArea: ValueJurisdictional
    perCapitaIncome: ValueJurisdictional
    population: ValueJurisdictional
    potentialAnnualCO2Avoided: ValueJurisdictional
    # carbonDeforestationRate: Statistic!
  }

  type Statistic {
    amount: Int!
    units: String!
    citation: Citation!
    jurisdiction: Jurisdiction!
  }

  type Language {
    code: String!
    name: String!
  }

  type Citation {
    id: ID!
    title: String!
    url: String!
  }

  type Contact {
    id: ID!
    firstName: String!
    lastName: String
    companyTitle: String
    email: String
    nation: Nation!
    jurisdiction: Jurisdiction!
  }

  # type Partnership {
  #   id: ID!
  #   nation: Nation!
  #   fundingAmount: Float!
  #   fundingCurrency: String!
  #   fundingSourceShort: String!
  #   initiativeStatus: String!
  #   url: String!
  # }
  #
  #
  # type PartnershipTranslate {
  #   id: ID!
  #   languageCode: String!
  #   partnership: Partnership!
  #   description: String!
  #   fundingSourceLong: String!
  #   initiativeStatusDetails: Int!
  #   initiativeType: String!
  #   name: String!
  #   partnersType: SQL.DATE
  # }
  #
  #
  # type InstitutionalFramework {
  #   id: ID!
  #   nameShort: String!
  #   citation: Citation!
  #   region: Region!
  # }
  #
  #
  # type InstitutionalFrameworkTranslate {
  #   id: ID!
  #   languageCode: String!
  #   institutionalFramework: InstitutionalFramework!
  #   nameLong: String!
  #   description: String!
  # }
  #
  #
  type Law {
    id: ID!
    lawNumber: Int!
    pubDate: String!
    summary: String!
    citation: Citation!
    region: Region!
  }


  type LawTranslate {
    id: ID!
    languageCode: String!
    law: Law!
    lawType: String!
    name: String!
  }
  #
  #
  # type Safeguard {
  #   id: ID!
  #   jurisdiction: Jurisdiction!
  # }
  #
  #
  # type SafeguardTranslate {
  #   id: ID!
  #   languageCode: String!
  #   safeguard: Safeguard!
  #   description: String!
  # }
  #
  #
  # type ZoningSpatialPlan {
  #   id: ID!
  #   jurisdiction: Jurisdiction!
  # }
  #
  #
  # type ZoningSpatialPlanTranslate {
  #   id: ID!
  #   languageCode: String!
  #   zoningSpatialPlan: ZoningSpatialPlan!
  #   description: String!
  # }
  #
  #
  # type Vegetation {
  #   id: ID!
  #   amount: Float!
  # }
  #
  #
  # type ForestManagement {
  #   id: ID!
  #   protected: Float!
  #   unprotected: Float!
  #   jurisdiction: Jurisdiction!
  # }
  #
  #
  # TODO: Change citation_id back to citation!
  # TODO: Change citation type back to Citation!
  type DeforestationRate {
    id: ID!
    amount: Float!
    year: Int!
    units: String!
    citation_id: String
    region: Region!
  }
  #
  #
  # type SocialGroup {
  #   id: ID!
  #   amount: Float!
  # }
  #
  #
  # TODO: Change citation_id back to citation!
  # TODO: Change citation type back to Citation!
  type UrbanVsRural {
    id: ID!
    urbanPopulation: Float!
    ruralPopulation: Float!
    citation_id: String
    region: Region!
  }
  #
  #
  # type GdpCategory {
  #   id: ID!
  #   amount: Float!
  # }
  #
  #

  # TODO: Change citation_id back to citation!
  # TODO: Change citation type back to Citation!
  type ValueNational {
    id: ID!
    name: String!
    amount: Float!
    units: String
    year: String
    citation_id: String
    nation: Nation!
  }


  # TODO: Change citation_id back to citation!
  # TODO: Change citation type back to Citation!
  type ValueJurisdictional {
    id: ID!
    name: String!
    amount: Float!
    units: String
    year: String
    citation_id: String
    jurisdiction: Jurisdiction!
  }
  #
  #
  # TODO: Change citation_id back to citation!
  # TODO: Change citation type back to Citation!
  type ValueGlobal {
    id: ID!
    name: String!
    amount: Float!
    units: String
    year: String
    citation_id: String
  }
  #
  #
  # type MajorExport {
  #   id: ID!
  # }
  #
  #
  # type Commodity {
  #   id: ID!
  # }
  #
  #
  # type SlrtScore {
  #   id: ID!
  #   inventoryOfLandRights: Int!
  #   clarityOfLandTenure: Int!
  #   protectionBiodiversityEcosystem: Int!
  #   citation: Citation!
  #   jurisdiction: Jurisdiction!
  # }
  #
  #
  # type Organization {
  #   id: ID!
  #   nameShort: String!
  #   url: String!
  # }
  #
  #
  # type OrganizationTranslate {
  #   id: ID!
  #   languageCode: String!
  #   organization: Organization!
  #   nameLong: String!
  # }
  #
  #
  # type ContentNational {
  #   id: ID!
  #   nation: Nation!
  # }
  #
  #
  # type ContentNationalTranslate {
  #   id: ID!
  #   languageCode: String!
  #   contentNational: ContentNational!
  #   lawsText: String!
  #   institutionsText: String!
  #   policiesPlansText: String!
  # }
  #
  #
  # TODO: Should content_jurisdictional_id be Int! or ID! ???
  type ContentJurisdictionalTranslate {
    id: ID!
    languageCode: String!
    contentJurisdictionalId: ID!
    description: String
    driversOfDeforestation: String
    forestMonitoringMeasurementSystems: String
    # TODO: DO WE NEED THIS?
    contentJurisdictional: ContentJurisdictional!
  }

  type ContentJurisdictional {
    id: ID!
    jurisdiction: Jurisdiction!
    # TODO: DO WE NEED THIS?
    contentJurisdictionalTranslate(code: String!): ContentJurisdictionalTranslate!
    contentJurisdictionalTranslates: [ContentJurisdictionalTranslate!]!
  }

  #
  #
  # type VegetationTranslate {
  #   id: ID!
  #   languageCode: String!
  #   vegetation: Vegetation!
  #   vegetationType: String!
  # }
  #
  #
  # type SocialGroupTranslate {
  #   id: ID!
  #   languageCode: String!
  #   socialGroup: SocialGroup!
  #   socialGroupType: String!
  # }
  #
  #
  # type GdpCategoryTranslate {
  #   id: ID!
  #   languageCode: String!
  #   gdp: Gdp!
  #   gdpCategory: String!
  # }
  #
  #
  # type CommodityTranslate {
  #   id: ID!
  #   languageCode: String!
  #   commodity: Commodity!
  #   commodityType: String!
  # }
  #
  #
  # type MajorExportTranslate {
  #   id: ID!
  #   languageCode: String!
  #   majorExport: MajorExport!
  #   majorExportType: String!
  # }
  #
  #
  type LawTag {
    id: ID!
  }


  type LawTagTranslate {
    id: ID!
    languageCode: String!
    lawTag: LawTag!
    tagName: String!
  }



  # type Launch {
  #   id: ID!
  #   site: String
  #   mission: Mission
  #   rocket: Rocket
  #   isBooked: Boolean!
  # }
  #
  # type Rocket {
  #   id: ID!
  #   name: String
  #   type: String
  # }
  #
  # type User {
  #   id: ID!
  #   email: String!
  #   trips: [Launch]!
  # }
  #
  # type Mission {
  #   name: String
  #   missionPatch(size: PatchSize): String
  # }
  #
  # enum PatchSize {
  #   SMALL
  #   LARGE
  # }
  #
  # type Mutation {
  #   # if false, booking trips failed -- check errors
  #   bookTrips(launchIds: [ID]!): TripUpdateResponse!
  #
  #   # if false, cancellation failed -- check errors
  #   cancelTrip(launchId: ID!): TripUpdateResponse!
  #
  #   login(email: String): String # login token
  # }
  #
  # type TripUpdateResponse {
  #   success: Boolean!
  #   message: String
  #   launches: [Launch]
  # }
`;

module.exports = typeDefs;
