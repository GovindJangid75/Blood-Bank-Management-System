export const BLOOD_GROUPS = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] as const;

export const COMPONENT_TYPES = ['Whole', 'RBC', 'WBC', 'Plasma', 'Platelets'] as const;

export const USER_ROLES = ['admin', 'donor', 'hospital', 'organization'] as const;

export const URGENCY_LEVELS = ['Low', 'Medium', 'High', 'Critical'] as const;

export const BLOOD_UNIT_STATUSES = [
  'Collected',
  'Test Pending',
  'Safe to Use',
  'Infected',
  'Reserved',
  'Used',
  'Expired',
] as const;

export const REQUEST_STATUSES = [
  'Pending',
  'In Review',
  'Approved',
  'Rejected',
  'Fulfilled',
] as const;

export const BADGE_TYPES = [
  'First Donation',
  'Hero Badge',
  'Super Saver',
  'Gold Donor',
] as const;

export const MINIMUM_WEIGHT_KG = 50;
export const MINIMUM_DONATION_INTERVAL_DAYS = 90;
export const EXPIRY_WARNING_DAYS = 3;

export const COMPONENT_EXPIRY_DAYS = {
  Whole: 35,
  RBC: 42,
  Plasma: 365,
  Platelets: 5,
  WBC: 1, // 24 hours
} as const;

export const STOCK_THRESHOLDS = {
  Platelets: { critical: 5, low: 10 },
  WBC: { critical: 3, low: 6 },
  Plasma: { critical: 10, low: 20 },
  RBC: { critical: 15, low: 30 },
  Whole: { critical: 15, low: 30 },
} as const;

export const DONATION_BADGES = [
  { name: 'First Donation', donations: 1, icon: '🩸' },
  { name: 'Hero Badge', donations: 5, icon: '🦸' },
  { name: 'Super Saver', donations: 10, icon: '⭐' },
  { name: 'Gold Donor', donations: 25, icon: '🏆' },
] as const;

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
] as const;