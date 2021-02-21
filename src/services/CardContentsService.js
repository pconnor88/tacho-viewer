const ExtendedSerialNumber = [
  {title: "Serial Number", type: "int", length:4},
  {title: "Month Year", type: "bcd", length: 2},
  {title: "Type", type: "octet", length:1},
  {title: "Manufacturer Code", type: "int", length: 1},
]

const AssemblerID = [
{title: "Country Code", type: "string", length: 2},
{title: "Module Embedder", type: "bcd", length: 2},
{title: "Manufacturer Information", type: "octet", length: 1}
]

const HolderName = [
  {title: "Holder Surname", type: "name", length: 36},
  {title: "Holder First Name", type: "name", length: 36}
]

const CardIdentification = [
  {title: "Card Issuing Member State", type: "nation", length: 1},
  {title: "Card Number", type: "string", length:16},
  {title: "Card Issuing Authority Name", type: "name", length: 36},
  {title: "Card Issue Date", type: "datetime", length: 4},
  {title: "Card Validity Begin", type: "datetime", length: 4},
  {title: "Card Expiry Date", type: "datetime", length: 4}
]

const DriverCardHolderIdentification = [
  {title: "Card Holder Name", type: HolderName},
  {title: "Card Holder Birth Date", type: "date", length:4},
  {title: "Card Holder Preferred Language", type: "string", length: 2}
]

const CardDrivingLicenceInformation = [
  {title: "Driving Licence Issuing Authority", type: "name", length: 36},
  {title: "Driving Licence Issuing Nation", type: "nation", length: 1},
  {title: "Driving Licence Number", type: "string", length: 16},
]

const VehicleRegistrationIdentification = [
  {title: "Vehicle Registration Nation", type: "nation", length: 1},
  {title: "Vehicle Registration Number", type: "name", length: 17},
]

const CardCurrentUse = [
  {title: "Session Open Time", type: "datetime", length: 4},
  {title: "Session Open Vehicle", type: VehicleRegistrationIdentification},
]

const FullCardNumber = [
  {title: "Card Type", type: "int", length: 1},
  {title: "Card Issuing Member State", type: "nation", length: 1},
  {title: "Card Number", type: "string", length: 16}
]

const CardControlActivityDataRecord = [
  {title: "Control Type", type: "octet", length: 1},
  {title: "Control Time", type: "datetime", length: 4},
  {title: "Control Card Number", type: FullCardNumber},
  {title: "Control Vehicle Registration", type: VehicleRegistrationIdentification},
  {title: "Control Download Period Begin", type: "datetime", length: 4},
  {title: "Control Download Period End", type: "datetime", length: 4},
]

const CardEventData = [
  {title: "Event Type", type: "octet", length: 1},
  {title: "Event Begin Time", type: "datetime", length: 4},
  {title: "Event End Time", type: "datetime", length: 4},
  {title: "Event Vehicle Registration", type: VehicleRegistrationIdentification},
];

export const CardContentsData = [
  {"id": "0002", "title": "ICC", "values": [
    {title: "Clock Stop", type: "octet", length:1},
    {title: "Card Extended Serial Number", type: ExtendedSerialNumber},
    {title: "Card Approval Number", type: "string", length: 8},
    {title: "Card Personaliser ID", type: "int", length: 1},
    {title: "Embedder IC Assembler ID", type: AssemblerID},
    {title: "IC Identifier", type: "octet", length:2}
  ]},  
  {"id": "0005", "title": "IC", "values": [
    {title: "IC Serial Number", type: "octet", length: 4},
    {title: "IC Manufacturing Reference", type: "octet", length: 4}
  ]},  
  {"id": "0501", "title": "Application Identification", "values": [
    {title: "Type of Tachograph Card ID", type: "int", length: 1},
    {title: "Card Strucutre Version", type: "octet", length: 2},
    {title: "No. of Events Per Type", type: "int", length: 1},
    {title: "No. of Faults Per Type", type: "int", length: 1},
    {title: "Activity Structure Length", type: "int", length: 2},
    {title: "No. of Card Vehicle Records", type: "int", length: 2},
    {title: "No. of Card Place Records", type: "int", length: 1}
  ]},  
  {"id": "c100", "title": "Card Certificate", "values": []},  
  {"id": "c108", "title": "CA Certificate", "values": []},  
  {"id": "0520", "title": "Identification", "values": [
    {title: "Card Identification", type: CardIdentification},
    {title: "Card Strucutre Version", type: DriverCardHolderIdentification},
  ]},  
  {"id": "050e", "title": "Card Download", "values": []},  
  {"id": "0521", "title": "Driver Licence Info", "values": [
    {title: "Card Driving Licence Information", type: CardDrivingLicenceInformation},
  ]},  
  {"id": "0502", "title": "Events Data", "repeater": true, "values": [
    {title: "Card Event Data", type: CardEventData}
  ]},  
  {"id": "0503", "title": "Faults Data", "values": []},  
  {"id": "0504", "title": "Driver Activity Data", "values": []},  
  {"id": "0505", "title": "Vehicles Used", "values": []},  
  {"id": "0506", "title": "Places", "values": []},  
  {"id": "0507", "title": "Current Usage", "values": [
    {title: "Card Current Usage", type: CardCurrentUse}
  ]},  
  {"id": "0508", "title": "Control Activity Data", "values": [
    {title: "Card Control Activity Data", type: CardControlActivityDataRecord}
  ]},  
  {"id": "0522", "title": "Specific Conditions", "values": []} 
];

