const BASE_URL = 
   "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr =  document.querySelector(".from select");
const toCurr =   document.querySelector(".to select"); 
const msg =  document.querySelector(".msg");


const countryList = {
  AED: "AE", // United Arab Emirates
  AFN: "AF", // Afghanistan
  XCD: "AG", // Antigua and Barbuda
  ALL: "AL", // Albania
  AMD: "AM", // Armenia
  ANG: "AN", // Netherlands Antilles (historical)
  AOA: "AO", // Angola
  ARS: "AR", // Argentina
  AUD: "AU", // Australia
  AZN: "AZ", // Azerbaijan
  BAM: "BA", // Bosnia and Herzegovina
  BBD: "BB", // Barbados
  BDT: "BD", // Bangladesh
  XOF: "BE", // West African CFA franc (Benin)
  BGN: "BG", // Bulgaria
  BHD: "BH", // Bahrain
  BIF: "BI", // Burundi
  BMD: "BM", // Bermuda
  BND: "BN", // Brunei
  BOB: "BO", // Bolivia
  BRL: "BR", // Brazil
  BSD: "BS", // Bahamas
  BTN: "BT", // Bhutan
  BWP: "BW", // Botswana
  BYN: "BY", // Belarus
  BZD: "BZ", // Belize
  CAD: "CA", // Canada
  CDF: "CD", // Democratic Republic of Congo
  CHF: "CH", // Switzerland
  CLP: "CL", // Chile
  CNY: "CN", // China
  COP: "CO", // Colombia
  CRC: "CR", // Costa Rica
  CUP: "CU", // Cuba
  CVE: "CV", // Cape Verde
  CZK: "CZ", // Czech Republic
  DJF: "DJ", // Djibouti
  DKK: "DK", // Denmark
  DOP: "DO", // Dominican Republic
  DZD: "DZ", // Algeria
  EGP: "EG", // Egypt
  ERN: "ER", // Eritrea
  ETB: "ET", // Ethiopia
  EUR: "EU", // European Union
  FJD: "FJ", // Fiji
  FKP: "FK", // Falkland Islands
  FOK: "FO", // Faroe Islands
  GBP: "GB", // United Kingdom
  GEL: "GE", // Georgia
  GGP: "GG", // Guernsey
  GHS: "GH", // Ghana
  GIP: "GI", // Gibraltar
  GMD: "GM", // Gambia
  GNF: "GN", // Guinea
  GTQ: "GT", // Guatemala
  GYD: "GY", // Guyana
  HKD: "HK", // Hong Kong
  HNL: "HN", // Honduras
  HRK: "HR", // Croatia
  HTG: "HT", // Haiti
  HUF: "HU", // Hungary
  IDR: "ID", // Indonesia
  ILS: "IL", // Israel
  IMP: "IM", // Isle of Man
  INR: "IN", // India
  IQD: "IQ", // Iraq
  IRR: "IR", // Iran
  ISK: "IS", // Iceland
  JEP: "JE", // Jersey
  JMD: "JM", // Jamaica
  JOD: "JO", // Jordan
  JPY: "JP", // Japan
  KES: "KE", // Kenya
  KGS: "KG", // Kyrgyzstan
  KHR: "KH", // Cambodia
  KID: "KI", // Kiribati
  KMF: "KM", // Comoros
  KRW: "KR", // South Korea
  KWD: "KW", // Kuwait
  KYD: "KY", // Cayman Islands
  KZT: "KZ", // Kazakhstan
  LAK: "LA", // Laos
  LBP: "LB", // Lebanon
  LKR: "LK", // Sri Lanka
  LRD: "LR", // Liberia
  LSL: "LS", // Lesotho
  LYD: "LY", // Libya
  MAD: "MA", // Morocco
  MDL: "MD", // Moldova
  MGA: "MG", // Madagascar
  MKD: "MK", // North Macedonia
  MMK: "MM", // Myanmar
  MNT: "MN", // Mongolia
  MOP: "MO", // Macau
  MRU: "MR", // Mauritania
  MUR: "MU", // Mauritius
  MVR: "MV", // Maldives
  MWK: "MW", // Malawi
  MXN: "MX", // Mexico
  MYR: "MY", // Malaysia
  MZN: "MZ", // Mozambique
  NAD: "NA", // Namibia
  NGN: "NG", // Nigeria
  NIO: "NI", // Nicaragua
  NOK: "NO", // Norway
  NPR: "NP", // Nepal
  NZD: "NZ", // New Zealand
  OMR: "OM", // Oman
  PAB: "PA", // Panama
  PEN: "PE", // Peru
  PGK: "PG", // Papua New Guinea
  PHP: "PH", // Philippines
  PKR: "PK", // Pakistan
  PLN: "PL", // Poland
  PYG: "PY", // Paraguay
  QAR: "QA", // Qatar
  RON: "RO", // Romania
  RSD: "RS", // Serbia
  RUB: "RU", // Russia
  RWF: "RW", // Rwanda
  SAR: "SA", // Saudi Arabia
  SBD: "SB", // Solomon Islands
  SCR: "SC", // Seychelles
  SDG: "SD", // Sudan
  SEK: "SE", // Sweden
  SGD: "SG", // Singapore
  SHP: "SH", // Saint Helena
  SLL: "SL", // Sierra Leone
  SOS: "SO", // Somalia
  SRD: "SR", // Suriname
  SSP: "SS", // South Sudan
  STN: "ST", // São Tomé and Príncipe
  SYP: "SY", // Syria
  SZL: "SZ", // Eswatini
  THB: "TH", // Thailand
  TJS: "TJ", // Tajikistan
  TMT: "TM", // Turkmenistan
  TND: "TN", // Tunisia
  TOP: "TO", // Tonga
  TRY: "TR", // Turkey
  TTD: "TT", // Trinidad and Tobago
  TVD: "TV", // Tuvalu
  TWD: "TW", // Taiwan
  TZS: "TZ", // Tanzania
  UAH: "UA", // Ukraine
  UGX: "UG", // Uganda
  USD: "US", // United States
  UYU: "UY", // Uruguay
  UZS: "UZ", // Uzbekistan
  VES: "VE", // Venezuela
  VND: "VN", // Vietnam
  VUV: "VU", // Vanuatu
  WST: "WS", // Samoa
  XAF: "CM", // Central African CFA franc (Cameroon)
  XCD: "AG", // East Caribbean Dollar (Antigua & Barbuda)
  XPF: "PF", // CFP Franc (French Polynesia)
  YER: "YE", // Yemen
  ZAR: "ZA", // South Africa
  ZMW: "ZM", // Zambia
  ZWL: "ZW"  // Zimbabwe
};

for(let select of dropdowns){

 for (currCode  in countryList){
  let newOption = document.createElement("option");
  newOption.innerText = currCode;
  newOption.value = currCode;
  if(select.name === "from" && currCode === "USD"){
    newOption.selected = "selected";
  }else if(select.name === "to" && currCode === "INR"){
    newOption.selected = "selected";
  }
  select.append(newOption);
} 
 select.addEventListener("change" , (evt) => {
    updateFlag(evt.target);
 })

}

const updateFlag = (element) => {
     let currCode = element.value;
     let countryCode = countryList[currCode];
     let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`;
     let img = element.parentElement.querySelector("img");
     img.src = newSrc;
    
};      

btn.addEventListener("click" ,  async(evt) => {
     evt.preventDefault();
     let amount = document.querySelector(".amount input");
     let amtval = amount.value;
     if(amtval === "" || amtval <1){
        amtval = 1;
        amount.value = "1";
     }
    //  const URL = `${BASE_URL}/${fromCurr.toLowerCase}.json`;
    //  let response = await fetch(URL);
    //  let data = await response.json();
    //  let rate = data[toCurr.value.toLowerCase()];
     let finalAmount = amtval * 81.22;

     msg.innerText = `${amtval}${fromCurr.value} = ${finalAmount}${toCurr.value}`; 
});