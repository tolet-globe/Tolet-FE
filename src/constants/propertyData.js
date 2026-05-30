export const cityOptions = ["Lucknow", "Ayodhya", "Vellore", "Kota"];
export const spaceTypeOptions = ["Residential", "Commercial"];
export const allOptions = ["House", "Flat", "PG", "Office", "Shop", "Warehouse"];

export const cityLocalityData = {
  Lucknow: {
    localities: [
      "Kamta",
      "Nishatganj",
      "Hazratganj",
      "Gomti Nagar",
      "Sushant Golf City",
      "Khargapur",
      "Chinhat",
      "Indira Nagar",
      "Aliganj",
      "Vinay Khand",
      "Patrakar Puran",
      "Awadh Vihar Colony",
      "Sunder Nagar",
      "Amity University",
      "Ismail Ganj",
      "Rajajipuram",
    ],
    pincodes: [
      "226028", "226001", "226001", "226010", "226030", "226010", "226028", 
      "226016", "226024", "226010", "226010", "226015", "226005", "226010", 
      "226010", "226010"
    ],
  },
  Ayodhya: {
    localities: ["Bakhtiarpur", "Bhadohi"],
    pincodes: ["224121", "224122"],
  },
  Vellore: {
    localities: ["Vellore Cantonment", "Gandhi Nagar", "Vellore East", "Vellore West"],
    pincodes: ["632001", "632002", "632003", "632004"],
  },
  Kota: {
    localities: ["Kota Cantonment", "Kota East", "Kota West", "Kota Central"],
    pincodes: ["324001", "324002", "324003", "324004"],
  },
};

export const cityCoordinates = {
  Lucknow: { lat: 26.8467, lng: 80.9462 },
  Ayodhya: { lat: 26.7922, lng: 82.1998 },
  Vellore: { lat: 12.9165, lng: 79.1325 },
  Kota: { lat: 25.2138, lng: 75.8648 },
};

export const localityCoordinates = {
  Lucknow: {
    Kamta: { lat: 26.8868, lng: 81.0586 },
    Nishatganj: { lat: 26.87, lng: 80.95 },
    Hazratganj: { lat: 26.85, lng: 80.95 },
    "Gomti Nagar": { lat: 26.85, lng: 81.0 },
    "Sushant Golf City": { lat: 26.78, lng: 81.02 },
    Khargapur: { lat: 26.83, lng: 81.03 },
    Chinhat: { lat: 26.88, lng: 81.05 },
    "Indira Nagar": { lat: 26.87, lng: 81.0 },
    Aliganj: { lat: 26.88, lng: 80.94 },
    "Vinay Khand": { lat: 26.85, lng: 81.0 },
    "Patrakar Puram": { lat: 26.85, lng: 81.0 },
    "Awadh Vihar Colony": { lat: 26.78, lng: 81.02 },
    "Sunder Nagar": { lat: 26.87, lng: 80.95 },
    "Amity University": { lat: 26.78, lng: 81.02 },
    "Ismail Ganj": { lat: 26.85, lng: 80.95 },
    Rajajipuram: { lat: 26.85, lng: 80.9 },
  },
  Ayodhya: {
    Bakhtiarpur: { lat: 26.7922, lng: 82.1998 },
    Bhadohi: { lat: 26.785, lng: 82.21 },
  },
  Vellore: {
    "Vellore Cantonment": { lat: 12.9461, lng: 79.1789 },
    "Gandhi Nagar": { lat: 12.9547, lng: 79.1407 },
    "Vellore East": { lat: 12.9349, lng: 79.1469 },
    "Vellore West": { lat: 12.9349, lng: 79.1469 },
  },
  Kota: {
    "Kota Cantonment": { lat: 25.18, lng: 75.85 },
    "Kota East": { lat: 25.18, lng: 75.87 },
    "Kota West": { lat: 25.18, lng: 75.83 },
    "Kota Central": { lat: 25.18, lng: 75.85 },
  },
};

export const preferenceOptions = [
  { value: "Bachelors", label: "Bachelors" },
  { value: "Family", label: "Family" },
  { value: "Both", label: "Both" },
];

export const genderOptions = [
  { value: "Boys", label: "Boys" },
  { value: "Girls", label: "Girls" },
  { value: "Both", label: "Both" },
];

export const furnishedOptions = [
  { value: "Not Furnished", label: "Not Furnished" },
  { value: "Semi Furnished", label: "Semi Furnished" },
  { value: "Fully Furnished", label: "Fully Furnished" },
];

export const bhkOptions = [
  { value: "1", label: "1 BHK" },
  { value: "2", label: "2 BHK" },
  { value: "3", label: "3 BHK" },
  { value: "4", label: "4 BHK" },
  { value: "5", label: "5 BHK" },
];

export const washroomOptions = [
  { value: "Indian", label: "Indian" },
  { value: "Western", label: "Western" },
  { value: "Both", label: "Both" },
];

export const ownerLocationOptions = [
  { value: "Lives in same property", label: "Lives in same property" },
  { value: "Lives in different property", label: "Lives in different property" },
  { value: "Lives in different city", label: "Lives in different city" },
];

export const appliancesOptions = [
  { value: "Refrigerator", label: "Refrigerator" },
  { value: "Washing Machine", label: "Washing Machine" },
  { value: "Air Conditioner", label: "Air Conditioner" },
  { value: "Geyser", label: "Geyser" },
  { value: "Microwave", label: "Microwave" },
  { value: "Water Purifier", label: "Water Purifier" },
  { value: "TV", label: "TV" },
  { value: "Inverter", label: "Inverter" },
];

export const amenitiesOptions = [
  { value: "Lift", label: "Lift" },
  { value: "Parking", label: "Parking" },
  { value: "Power Backup", label: "Power Backup" },
  { value: "Swimming Pool", label: "Swimming Pool" },
  { value: "Gardern", label: "Gardern" },
  { value: "Gym", label: "Gym" },
  { value: "Security Guard", label: "Security Guard" },
  { value: "Wi-Fi", label: "Wi-Fi" },
];
