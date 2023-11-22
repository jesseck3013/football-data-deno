export const API_BASE_URL = "https://api.football-data.org";

export const API_VERSION = "/v4";
export const AREA = `${API_VERSION}/areas`;
export const COMPETITION = `${API_VERSION}/competitions`;
export const MATCH = `${API_VERSION}/matches`;
export const TEAM = `${API_VERSION}/teams`;
export const PERSON = `${API_VERSION}/persons`;

export const leagues = [
  {
    "Competition_Id": 2006,
    "League_Code": "QCAF",
    "Caption": "WC Qualification CAF",
    "Country_Continent": "Africa",
  },
  {
    "Competition_Id": 2024,
    "League_Code": "ASL",
    "Caption": "Liga Profesional",
    "Country_Continent": "Argentina",
  },
  {
    "Competition_Id": 2147,
    "League_Code": "QAFC",
    "Caption": "WC Qualification AFC",
    "Country_Continent": "Asia",
  },
  {
    "Competition_Id": 2008,
    "League_Code": "AAL",
    "Caption": "A League",
    "Country_Continent": "Australia",
  },
  {
    "Competition_Id": 2022,
    "League_Code": "APL",
    "Caption": "Playoffs 1/2",
    "Country_Continent": "Austria",
  },
  {
    "Competition_Id": 2012,
    "League_Code": "ABL",
    "Caption": "Bundesliga",
    "Country_Continent": "Austria",
  },
  {
    "Competition_Id": 2032,
    "League_Code": "BJPP",
    "Caption": "Playoffs",
    "Country_Continent": "Belgium",
  },
  {
    "Competition_Id": 2009,
    "League_Code": "BJL",
    "Caption": "Jupiler Pro League",
    "Country_Continent": "Belgium",
  },
  {
    "Competition_Id": 2029,
    "League_Code": "BSB",
    "Caption": "Campeonato Brasileiro Série B",
    "Country_Continent": "Brazil",
  },
  {
    "Competition_Id": 2013,
    "League_Code": "BSA",
    "Caption": "Campeonato Brasileiro Série A",
    "Country_Continent": "Brazil",
  },
  {
    "Competition_Id": 2048,
    "League_Code": "CPD",
    "Caption": "Primera División",
    "Country_Continent": "Chile",
  },
  {
    "Competition_Id": 2044,
    "League_Code": "CSL",
    "Caption": "Chinese Super League",
    "Country_Continent": "China PR",
  },
  {
    "Competition_Id": 2045,
    "League_Code": "CLP",
    "Caption": "Liga Postobón",
    "Country_Continent": "Colombia",
  },
  {
    "Competition_Id": 2047,
    "League_Code": "PRVA",
    "Caption": "Prva Liga",
    "Country_Continent": "Croatia",
  },
  {
    "Competition_Id": 2141,
    "League_Code": "DELP",
    "Caption": "Euro League - Playoff",
    "Country_Continent": "Denmark",
  },
  {
    "Competition_Id": 2050,
    "League_Code": "DSU",
    "Caption": "Superliga",
    "Country_Continent": "Denmark",
  },
  {
    "Competition_Id": 2016,
    "League_Code": "ELC",
    "Caption": "Championship",
    "Country_Continent": "England",
  },
  {
    "Competition_Id": 2021,
    "League_Code": "PL",
    "Caption": "Premier League",
    "Country_Continent": "England",
  },
  {
    "Competition_Id": 2139,
    "League_Code": "FLC",
    "Caption": "Football League Cup",
    "Country_Continent": "England",
  },
  {
    "Competition_Id": 2030,
    "League_Code": "EL1",
    "Caption": "League One",
    "Country_Continent": "England",
  },
  {
    "Competition_Id": 2053,
    "League_Code": "ENL",
    "Caption": "National League",
    "Country_Continent": "England",
  },
  {
    "Competition_Id": 2054,
    "League_Code": "EL2",
    "Caption": "League Two",
    "Country_Continent": "England",
  },
  {
    "Competition_Id": 2055,
    "League_Code": "FAC",
    "Caption": "FA Cup",
    "Country_Continent": "England",
  },
  {
    "Competition_Id": 2056,
    "League_Code": "COM",
    "Caption": "FA Community Shield",
    "Country_Continent": "England",
  },
  {
    "Competition_Id": 2018,
    "League_Code": "EC",
    "Caption": "European Championship",
    "Country_Continent": "Europe",
  },
  {
    "Competition_Id": 2146,
    "League_Code": "EL",
    "Caption": "UEFA Europa League",
    "Country_Continent": "Europe",
  },
  {
    "Competition_Id": 2154,
    "League_Code": "UCL",
    "Caption": "UEFA Conference League",
    "Country_Continent": "Europe",
  },
  {
    "Competition_Id": 2001,
    "League_Code": "CL",
    "Caption": "UEFA Champions League",
    "Country_Continent": "Europe",
  },
  {
    "Competition_Id": 2157,
    "League_Code": "ESC",
    "Caption": "Supercup",
    "Country_Continent": "Europe",
  },
  {
    "Competition_Id": 2007,
    "League_Code": "QUFA",
    "Caption": "WC Qualification UEFA",
    "Country_Continent": "Europe",
  },
  {
    "Competition_Id": 2031,
    "League_Code": "VEI",
    "Caption": "Veikkausliiga",
    "Country_Continent": "Finland",
  },
  {
    "Competition_Id": 2142,
    "League_Code": "FL2",
    "Caption": "Ligue 2",
    "Country_Continent": "France",
  },
  {
    "Competition_Id": 2143,
    "League_Code": "FPL",
    "Caption": "Playoffs 1/2",
    "Country_Continent": "France",
  },
  {
    "Competition_Id": 2015,
    "League_Code": "FL1",
    "Caption": "Ligue 1",
    "Country_Continent": "France",
  },
  {
    "Competition_Id": 2129,
    "League_Code": "REG",
    "Caption": "Regionalliga",
    "Country_Continent": "Germany",
  },
  {
    "Competition_Id": 2134,
    "League_Code": "GSC",
    "Caption": "DFL Super Cup",
    "Country_Continent": "Germany",
  },
  {
    "Competition_Id": 2140,
    "League_Code": "BL3",
    "Caption": "3. Bundesliga",
    "Country_Continent": "Germany",
  },
  {
    "Competition_Id": 2156,
    "League_Code": "BLREL",
    "Caption": "Relegation",
    "Country_Continent": "Germany",
  },
  {
    "Competition_Id": 2002,
    "League_Code": "BL1",
    "Caption": "Bundesliga",
    "Country_Continent": "Germany",
  },
  {
    "Competition_Id": 2004,
    "League_Code": "BL2",
    "Caption": "2. Bundesliga",
    "Country_Continent": "Germany",
  },
  {
    "Competition_Id": 2011,
    "League_Code": "DFB",
    "Caption": "DFB-Pokal",
    "Country_Continent": "Germany",
  },
  {
    "Competition_Id": 2132,
    "League_Code": "GSL",
    "Caption": "Super League",
    "Country_Continent": "Greece",
  },
  {
    "Competition_Id": 2128,
    "League_Code": "HNB",
    "Caption": "NB I",
    "Country_Continent": "Hungary",
  },
  {
    "Competition_Id": 2125,
    "League_Code": "ILH",
    "Caption": "Ligat ha’Al",
    "Country_Continent": "Israel",
  },
  {
    "Competition_Id": 2019,
    "League_Code": "SA",
    "Caption": "Serie A",
    "Country_Continent": "Italy",
  },
  {
    "Competition_Id": 2121,
    "League_Code": "SB",
    "Caption": "Serie B",
    "Country_Continent": "Italy",
  },
  {
    "Competition_Id": 2122,
    "League_Code": "CIT",
    "Caption": "Coppa Italia",
    "Country_Continent": "Italy",
  },
  {
    "Competition_Id": 2123,
    "League_Code": "ISC",
    "Caption": "Serie C",
    "Country_Continent": "Italy",
  },
  {
    "Competition_Id": 2158,
    "League_Code": "IPL",
    "Caption": "Playoffs 1/2",
    "Country_Continent": "Italy",
  },
  {
    "Competition_Id": 2119,
    "League_Code": "JJL",
    "Caption": "J. League",
    "Country_Continent": "Japan",
  },
  {
    "Competition_Id": 2113,
    "League_Code": "LMX",
    "Caption": "Liga MX",
    "Country_Continent": "Mexico",
  },
  {
    "Competition_Id": 2109,
    "League_Code": "KNV",
    "Caption": "KNVB Beker",
    "Country_Continent": "Netherlands",
  },
  {
    "Competition_Id": 2003,
    "League_Code": "DED",
    "Caption": "Eredivisie",
    "Country_Continent": "Netherlands",
  },
  {
    "Competition_Id": 2005,
    "League_Code": "DJL",
    "Caption": "Eerste Divisie",
    "Country_Continent": "Netherlands",
  },
  {
    "Competition_Id": 2106,
    "League_Code": "TIP",
    "Caption": "Tippeligaen",
    "Country_Continent": "Norway",
  },
  {
    "Competition_Id": 2103,
    "League_Code": "QOFC",
    "Caption": "WC Qualification OFC",
    "Country_Continent": "Oceania",
  },
  {
    "Competition_Id": 2101,
    "League_Code": "PPD",
    "Caption": "Primera División",
    "Country_Continent": "Peru",
  },
  {
    "Competition_Id": 2017,
    "League_Code": "PPL",
    "Caption": "Primeira Liga",
    "Country_Continent": "Portugal",
  },
  {
    "Competition_Id": 2094,
    "League_Code": "RL1",
    "Caption": "Liga I",
    "Country_Continent": "Romania",
  },
  {
    "Competition_Id": 2137,
    "League_Code": "RFPL",
    "Caption": "RFPL",
    "Country_Continent": "Russia",
  },
  {
    "Competition_Id": 2084,
    "League_Code": "SPL",
    "Caption": "Premier League",
    "Country_Continent": "Scotland",
  },
  {
    "Competition_Id": 2152,
    "League_Code": "CLI",
    "Caption": "Copa Libertadores",
    "Country_Continent": "South America",
  },
  {
    "Competition_Id": 2080,
    "League_Code": "CA",
    "Caption": "Copa America",
    "Country_Continent": "South America",
  },
  {
    "Competition_Id": 2082,
    "League_Code": "QCBL",
    "Caption": "WC Qualification CONMEBOL",
    "Country_Continent": "South America",
  },
  {
    "Competition_Id": 2077,
    "League_Code": "SD",
    "Caption": "Segunda División",
    "Country_Continent": "Spain",
  },
  {
    "Competition_Id": 2079,
    "League_Code": "CDR",
    "Caption": "Copa del Rey",
    "Country_Continent": "Spain",
  },
  {
    "Competition_Id": 2014,
    "League_Code": "PD",
    "Caption": "Primera Division",
    "Country_Continent": "Spain",
  },
  {
    "Competition_Id": 2073,
    "League_Code": "ALL",
    "Caption": "Allsvenskan",
    "Country_Continent": "Sweden",
  },
  {
    "Competition_Id": 2072,
    "League_Code": "SSL",
    "Caption": "Super League",
    "Country_Continent": "Switzerland",
  },
  {
    "Competition_Id": 2070,
    "League_Code": "TSL",
    "Caption": "Süper Lig",
    "Country_Continent": "Turkey",
  },
  {
    "Competition_Id": 2064,
    "League_Code": "UPL",
    "Caption": "Premier Liha",
    "Country_Continent": "Ukraine",
  },
  {
    "Competition_Id": 2145,
    "League_Code": "MLS",
    "Caption": "MLS",
    "Country_Continent": "United States",
  },
  {
    "Competition_Id": 2148,
    "League_Code": "SUCU",
    "Caption": "Supercopa Uruguaya",
    "Country_Continent": "Uruguay",
  },
  {
    "Competition_Id": 2153,
    "League_Code": "OLY",
    "Caption": "Summer Olympics",
    "Country_Continent": "World",
  },
  {
    "Competition_Id": 2000,
    "League_Code": "WC",
    "Caption": "FIFA World Cup",
    "Country_Continent": "World",
  },
  {
    "Competition_Id": 2155,
    "League_Code": "QCCF",
    "Caption": "WC Qualification CONCACAF",
    "Country_Continent": "World",
  },
];