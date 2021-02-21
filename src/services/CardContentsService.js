const ExtendedSerialNumber = [
  {title: "Serial Number", type: "int", length:1},
  {title: "Month Year", type: "bcd", length: 2},
  {title: "Type", type: "octet", length:1},
  {title: "Manufacturer Code", type: "int", length: 1},
]

const AssemblerID = [
{title: "Country Code", type: "string", length: 2},
{title: "Module Embedder", type: "bcd", length: 2},
{title: "Manufacturer Information", type: "octet", length: 1},
]

export const CardContentsData = [
  {"id": "0002", "title": "ICC", "values": [
    {title: "Clock Stop", type: "octet", length:1},
    {title: "Card Extended Serial Number", type: ExtendedSerialNumber},
    {title: "Card Approval Number", type: "string", length: 8},
    {title: "Card Personaliser ID", type: "int", length: 1},
    {title: "Embedder IC Assembler ID", type: AssemblerID},
    {title: "IC Identifier", type: "octet", length:2}
  ]},  
  {"id": "0005", "title": "IC"},  
  {"id": "0501", "title": "Application Identification"},  
  {"id": "c100", "title": "Card Certificate"},  
  {"id": "c108", "title": "CA Certificate"},  
  {"id": "0520", "title": "Identification"},  
  {"id": "050e", "title": "Card Download"},  
  {"id": "0521", "title": "Driver Licence Info"},  
  {"id": "0502", "title": "Events Data"},  
  {"id": "0503", "title": "Faults Data"},  
  {"id": "0504", "title": "Driver Activity Data"},  
  {"id": "0505", "title": "Vehicles Used"},  
  {"id": "0506", "title": "Places"},  
  {"id": "0507", "title": "Current Usage"},  
  {"id": "0508", "title": "Control Activity Data"},  
  {"id": "0522", "title": "Specific Conditions"} 
];

