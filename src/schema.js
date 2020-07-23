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
    regionByName(name: String!): Region
    # nations: [Nation!]!
    nation(id: ID!): Nation
    nationByName(name: String!): Nation
    partnershipJurisdictions: [Jurisdiction!]!
    jurisdiction(id: ID!): Jurisdiction
    jurisdictionByName(nationName: String!, jurisdictionName: String!): Jurisdiction
    languages: [Language!]!
    language(code: String!): Language
    citations: [Citation!]!
    citation(id: ID!): Citation
    contacts: [Contact!]!
    contact(id: ID!): Contact
    partnerships: [Partnership!]!
    partnership(id: ID!): Partnership
    partnershipTranslates: [PartnershipTranslate!]!
    partnershipTranslate(code: String!): PartnershipTranslate
    initiativeStatuses: [InitiativeStatus!]!
    initiativeStatus(id: ID!): InitiativeStatus
    initiativeStatusTranslates: [InitiativeStatusTranslate!]!
    initiativeStatusTranslate(code: String!): InitiativeStatusTranslate
    initiativeTypes: [InitiativeType!]!
    initiativeType(id: ID!): InitiativeType
    initiativeTypeTranslates: [InitiativeTypeTranslate!]!
    initiativeTypeTranslate(code: String!): InitiativeTypeTranslate
    institutionalFrameworks: [InstitutionalFramework!]!
    institutionalFramework(id: ID!): InstitutionalFramework
    institutionalFrameworkTranslates: [InstitutionalFrameworkTranslate!]!
    institutionalFrameworkTranslate(code: String!): InstitutionalFrameworkTranslate
    laws: [Law!]!
    law(id: ID!): Law
    lawTranslates: [LawTranslate!]!
    lawTranslate(code: String!): LawTranslate
    safeguards: [Safeguard!]!
    safeguard(id: ID!): Safeguard
    safeguardTranslates: [SafeguardTranslate!]!
    safeguardTranslate(code: String!): SafeguardTranslate
    zoningSpatialPlans: [ZoningSpatialPlan!]!
    zoningSpatialPlan(id: ID!): ZoningSpatialPlan
    zoningSpatialPlanTranslates: [ZoningSpatialPlanTranslate!]!
    zoningSpatialPlanTranslate(code: String!): ZoningSpatialPlanTranslate
    lawPolicyStrategys: [LawPolicyStrategy!]!
    lawPolicyStrategy(id: ID!): LawPolicyStrategy
    lawPolicyStrategyTranslates: [LawPolicyStrategyTranslate!]!
    lawPolicyStrategyTranslate(code: String!): LawPolicyStrategyTranslate
    vegetationCategorys: [VegetationCategory!]!
    vegetationCategory(id: ID!): VegetationCategory
    vegetationComponents: [VegetationComponent!]!
    vegetationComponent(id: ID!): VegetationComponent
    forestManagements: [ForestManagement!]!
    forestManagement(id: ID!): ForestManagement
    deforestationRates: [DeforestationRate!]!
    deforestationRate(id: ID!): DeforestationRate
    socialGroupCategorys: [SocialGroupCategory!]!
    socialGroupCategory(id: ID!): SocialGroupCategory
    socialGroupComponents: [SocialGroupComponent!]!
    socialGroupComponent(id: ID!): SocialGroupComponent
    urbanVsRurals: [UrbanVsRural!]!
    urbanVsRural(id: ID!): UrbanVsRural
    gdpCategorys: [GdpCategory!]!
    gdpCategory(id: ID!): GdpCategory
    gdpComponents: [GdpComponent!]!
    gdpComponent(id: ID!): GdpComponent
    valueNationals: [ValueNational!]!
    valueNational(id: ID!): ValueNational
    valueJurisdictionals: [ValueJurisdictional!]!
    valueJurisdictional(id: ID!): ValueJurisdictional
    valueGlobals: [ValueGlobal!]!
    valueGlobal(id: ID!): ValueGlobal
    majorExports: [MajorExport!]!
    majorExport(id: ID!): MajorExport
    # commoditys: [Commodity!]!
    # commodity(id: ID!): Commodity
    # slrtScores: [SlrtScore!]!
    # slrtScore(id: ID!): SlrtScore
    organizations: [Organization!]!
    organization(id: ID!): Organization
    organizationTranslates: [OrganizationTranslate!]!
    organizationTranslate(code: String!): OrganizationTranslate
    # fundingSources: [Organization!]!
    # fundingSource(id: ID!): Organization
    # fundingSourceTranslates: [OrganizationTranslate!]!
    # fundingSourceTranslate(code: String!): OrganizationTranslate
    contentNationals: [ContentNational!]!
    contentNational(id: ID!): ContentNational
    contentNationalTranslates: [ContentNationalTranslate!]!
    contentNationalTranslate(code: String!): ContentNationalTranslate
    contentJurisdictionals: [ContentJurisdictional!]!
    contentJurisdictional(id: ID!): ContentJurisdictional
    contentJurisdictionalTranslates: [ContentJurisdictionalTranslate!]!
    contentJurisdictionalTranslate(code: String!): ContentJurisdictionalTranslate
    vegetationCategoryTranslates: [VegetationCategoryTranslate!]!
    vegetationCategoryTranslate(id: ID!): VegetationCategoryTranslate
    socialGroupCategoryTranslates: [SocialGroupCategoryTranslate!]!
    socialGroupCategoryTranslate(id: ID!): SocialGroupCategoryTranslate
    gdpCategoryTranslates: [GdpCategoryTranslate!]!
    gdpCategoryTranslate(code: String!): GdpCategoryTranslate
    # commodityTranslates: [CommodityTranslate!]!
    # commodityTranslate(id: ID!): CommodityTranslate
    majorExportTranslates: [MajorExportTranslate!]!
    majorExportTranslate(id: ID!): MajorExportTranslate
    lawTags: [LawTag!]!
    lawTag(id: ID!): LawTag
    lawTagTranslates: [LawTagTranslate!]!
    lawTagTranslate(code: String!): LawTagTranslate
    deforestationDrivers: [DeforestationDriver!]!
    deforestationDriver(id: ID!): DeforestationDriver
    deforestationDriverTranslates: [DeforestationDriverTranslate!]!
    deforestationDriverTranslate(id: ID!): DeforestationDriverTranslate
  }

  type Region {
    id: ID!
    name: String!
    coatOfArmsUrl: String!
    flagUrl: String!
    deforestationRates: [DeforestationRate!]
    urbanVsRural: UrbanVsRural
    majorExports: [MajorExport!]!
    gdpComponents: [GdpComponent]!
    socialGroupComponents: [SocialGroupComponent]!
    laws: [Law!]!
  }

  type Nation {
    id: ID!
    name: String!
    coatOfArmsUrl: String!
    flagUrl: String!
    region: Region!
    jurisdictions: [Jurisdiction!]!
    contacts: [Contact!]!
    contentNational: ContentNational!
    deforestationTrend: ValueNational
    gdp: ValueNational
    humanDevelopmentIndex: ValueNational
    landArea: ValueNational
    perCapitaIncome: ValueNational
    percentForested: ValueNational
    population: ValueNational
    partnerships: [Partnership!]!
  }

  type Jurisdiction {
    id: ID!
    name: String
    coatOfArmsUrl: String!
    flagUrl: String!
    region: Region!
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
    forestManagement: ForestManagement
    gdp: ValueJurisdictional
    humanDevelopmentIndex: ValueJurisdictional
    landArea: ValueJurisdictional
    originalForestArea: ValueJurisdictional
    perCapitaIncome: ValueJurisdictional
    population: ValueJurisdictional
    potentialAnnualCO2Avoided: ValueJurisdictional
    safeguard: Safeguard
    zoningSpatialPlan: ZoningSpatialPlan
    lawPolicyStrategy: LawPolicyStrategy
    vegetationComponents: [VegetationComponent]!
    deforestationDrivers: [DeforestationDriver!]
    institutionalFrameworks: [InstitutionalFramework!]!
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
    filename: String!
    url: String!
  }

  type Contact {
    id: ID!
    firstName: String!
    lastName: String
    companyTitle: String
    email: String
    contactType: String!
    nation: Nation!
    jurisdiction: Jurisdiction!
  }

  type Partnership {
    id: ID!
    nation: Nation!
    fundingAmount: Float
    fundingCurrency: String
    partnershipJurisdictions: [Jurisdiction]
    organizations: [Organization!]!
    # fundingSources: [Organization!]!
    initiativeStatus: InitiativeStatus
    initiativeTypes: [InitiativeType!]
    partnershipTranslate(code: String!): PartnershipTranslate!
    url: String
  }


  type PartnershipTranslate {
    id: ID!
    languageCode: String!
    partnership: Partnership!
    description: String
    initiativeStatusDetails: String
    name: String
  }


  type Organization {
    id: ID!
    organizationTranslate(code: String!): OrganizationTranslate!
    nameShort: String
    url: String
  }


  type OrganizationTranslate {
    id: ID!
    languageCode: String!
    organization: Organization!
    nameLong: String!
  }


  type InitiativeStatus {
    id: ID!
    initiativeStatusTranslate(code: String!): InitiativeStatusTranslate!
  }


  type InitiativeStatusTranslate {
    id: ID!
    languageCode: String!
    InitiativeStatus: InitiativeStatus!
    name: String
  }


  type InitiativeType {
    id: ID!
    initiativeTypeTranslate(code: String!): InitiativeTypeTranslate!
  }


  type InitiativeTypeTranslate {
    id: ID!
    languageCode: String!
    InitiativeType: InitiativeType!
    name: String!
  }


  type InstitutionalFramework {
    id: ID!
    nameShort: String
    politicalScope: String!
    url: String
    institutionalFrameworkTranslate(code: String!): InstitutionalFrameworkTranslate!
    institutionalFrameworkTranslates: [InstitutionalFrameworkTranslate!]!
    jurisdiction: Jurisdiction!
  }


  type InstitutionalFrameworkTranslate {
    id: ID!
    languageCode: String!
    nameLong: String!
    description: String
  }


  type Law {
    id: ID!
    lawNumber: String
    pubDate: String
    citations: [Citation!]
    region: Region!
    lawTranslate(code: String!): LawTranslate!
    lawTags: [LawTag!]!
  }


  type LawTranslate {
    id: ID!
    languageCode: String!
    # law: Law!
    lawType: String!
    name: String!
    summary: String
  }


  type Safeguard {
    id: ID!
    jurisdiction: Jurisdiction!
    safeguardTranslate(code: String!): SafeguardTranslate
    safeguardTranslates: [SafeguardTranslate!]!
  }


  type SafeguardTranslate {
    id: ID!
    languageCode: String!
    description: String
    # safeguard: Safeguard!
  }


  type ZoningSpatialPlan {
    id: ID!
    jurisdiction: Jurisdiction!
    zoningSpatialPlanTranslate(code: String!): ZoningSpatialPlanTranslate
    zoningSpatialPlanTranslates: [ZoningSpatialPlanTranslate!]!
  }


  type ZoningSpatialPlanTranslate {
    id: ID!
    languageCode: String!
    description: String
    # zoningSpatialPlan: ZoningSpatialPlan!
  }

  type LawPolicyStrategy {
    id: ID!
    jurisdiction: Jurisdiction!
    lawPolicyStrategyTranslate(code: String!): LawPolicyStrategyTranslate
    lawPolicyStrategyTranslates: [LawPolicyStrategyTranslate!]!
  }

  type LawPolicyStrategyTranslate {
    id: ID!
    languageCode: String!
    description: String
    # lawPolicyStrategy: LawPolicyStrategy!
  }

  type ForestManagement {
    id: ID!
    protected: Float!
    unprotected: Float!
    jurisdiction: Jurisdiction!
  }
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

  # TODO: Change citation_id back to citation!
  # TODO: Change citation type back to Citation!
  type UrbanVsRural {
    id: ID!
    urbanPopulation: Float!
    ruralPopulation: Float!
    citation_id: String
    region: Region!
  }

  type VegetationCategory {
    id: ID!
    vegetationCategoryTranslate(code: String!): VegetationCategoryTranslate!
  }

  # TODO: Change citation_id back to citation!
  # TODO: Change citation type back to Citation!
  type VegetationComponent {
    id: ID!
    amount: Float
    percent: Float
    jurisdiction: Jurisdiction!
    vegetationCategory: VegetationCategory!
    citation_id: String
  }

  type SocialGroupCategory {
    id: ID!
    socialGroupCategoryTranslate(code: String!): SocialGroupCategoryTranslate
  }

  # TODO: Change citation_id back to citation!
  # TODO: Change citation type back to Citation!
  type SocialGroupComponent {
    id: ID!
    amount: Float
    percent: Float
    region: Region!
    socialGroupCategory: SocialGroupCategory!
    citation_id: String
  }

  type GdpCategory {
    id: ID!
    gdpCategoryTranslate(code: String!): GdpCategoryTranslate!
  }

  # TODO: Change citation_id back to citation!
  # TODO: Change citation type back to Citation!
  type GdpComponent {
    id: ID!
    amount: Float
    percent: Float!
    region: Region!
    gdpCategory: GdpCategory!
    citation_id: String
  }

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
  type MajorExport {
    id: ID!
    faIconClass: String!
    majorExportTranslate(code: String!): MajorExportTranslate!
    region: Region!
  }
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


  type ContentNationalTranslate {
    id: ID!
    languageCode: String!
    contentNationalId: ID!
    lawsText: String
    institutionsText: String
    policiesPlansText: String
  }

  type ContentNational {
    id: ID!
    nation: Nation!
    contentNationalTranslate(code: String!): ContentNationalTranslate!
    contentNationalTranslates: [ContentNationalTranslate!]!
  }

  type ContentJurisdictionalTranslate {
    id: ID!
    languageCode: String!
    description: String
    driversOfDeforestation: String
    forestMonitoringMeasurementSystems: String
    contentJurisdictional: ContentJurisdictional!
  }

  type ContentJurisdictional {
    id: ID!
    jurisdiction: Jurisdiction!
    contentJurisdictionalTranslate(code: String!): ContentJurisdictionalTranslate!
    contentJurisdictionalTranslates: [ContentJurisdictionalTranslate!]!
  }

  type VegetationCategoryTranslate {
    id: ID!
    languageCode: String!
    name: String!
    # vegetationCategory: VegetationCategory!
  }

  type SocialGroupCategoryTranslate {
    id: ID!
    languageCode: String!
    name: String
    # socialGroupCategory: SocialGroupCategory!
  }

  type GdpCategoryTranslate {
    id: ID!
    languageCode: String!
    name: String!
    # gdpCategory: GdpCategory!
  }


  # type CommodityTranslate {
  #   id: ID!
  #   languageCode: String!
  #   commodity: Commodity!
  #   commodityType: String!
  # }
  #
  #
  type MajorExportTranslate {
    id: ID!
    languageCode: String!
    name: String!
    majorExport: MajorExport!
  }


  type LawTag {
    id: ID!
    lawTagTranslate(code: String!): LawTagTranslate
  }


  type LawTagTranslate {
    id: ID!
    languageCode: String!
    # lawTag: LawTag!
    tagName: String!
  }

  type DeforestationDriver {
    id: ID!
    faIconClass: String!
    deforestationDriverTranslate(code: String!): DeforestationDriverTranslate!
    deforestationDriverTranslates: [DeforestationDriverTranslate!]!
    jurisdiction: Jurisdiction!
  }

  type DeforestationDriverTranslate {
    id: ID!
    languageCode: String!
    name: String!
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
