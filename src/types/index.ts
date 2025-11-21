export type UserRole = 'admin' | 'donor' | 'hospital' | 'organization';

export type UserStatus = 'active' | 'inactive' | 'suspended';

export type BloodGroup = 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';

export type ComponentType = 'Whole' | 'RBC' | 'WBC' | 'Plasma' | 'Platelets';

export type BloodUnitStatus = 
  | 'Collected'
  | 'Test Pending'
  | 'Safe to Use'
  | 'Infected'
  | 'Reserved'
  | 'Used'
  | 'Expired';

export type RequestStatus = 
  | 'Pending'
  | 'In Review'
  | 'Approved'
  | 'Rejected'
  | 'Fulfilled';

export type UrgencyLevel = 'Low' | 'Medium' | 'High' | 'Critical';

export type DonorEligibilityStatus = 'eligible' | 'not_eligible';

export type BadgeType = 
  | 'First Donation'
  | 'Hero Badge'
  | 'Super Saver'
  | 'Gold Donor';

export interface User {
  id: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  full_name: string;
  phone: string;
  profile_picture?: string;
  created_at: string;
  updated_at: string;
}

export interface DonorProfile {
  id: string;
  user_id: string;
  blood_group: BloodGroup;
  weight: number;
  blood_pressure: string;
  medical_conditions?: string;
  last_donation_date?: string;
  total_donations: number;
  eligibility_status: DonorEligibilityStatus;
  next_eligible_date?: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  created_at: string;
  updated_at: string;
}

export interface BloodUnit {
  id: string;
  blood_group: BloodGroup;
  component_type: ComponentType;
  volume_ml: number;
  donor_id?: string;
  collection_date: string;
  expiry_date: string;
  status: BloodUnitStatus;
  test_hiv: boolean;
  test_hbv: boolean;
  test_hcv: boolean;
  test_malaria: boolean;
  test_syphilis: boolean;
  storage_location?: string;
  bag_number?: string;
  barcode?: string;
  organization_id: string;
  created_at: string;
  updated_at: string;
}

export interface BloodRequest {
  id: string;
  hospital_id: string;
  blood_group: BloodGroup;
  component_type: ComponentType;
  quantity: number;
  urgency_level: UrgencyLevel;
  status: RequestStatus;
  patient_name: string;
  patient_age: number;
  patient_diagnosis: string;
  doctor_name: string;
  doctor_contact: string;
  rejection_reason?: string;
  approved_by?: string;
  fulfilled_by?: string;
  created_at: string;
  updated_at: string;
}

export interface Campaign {
  id: string;
  organization_id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  city: string;
  target_donors: number;
  target_blood_groups?: BloodGroup[];
  registered_donors: number;
  attended_donors: number;
  blood_collected: number;
  status: 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled';
  created_at: string;
  updated_at: string;
}

export interface CampaignRegistration {
  id: string;
  campaign_id: string;
  donor_id: string;
  registration_date: string;
  attended: boolean;
  blood_donated: boolean;
  screening_result?: 'Pass' | 'Fail';
  created_at: string;
}

export interface DonationHistory {
  id: string;
  donor_id: string;
  donation_date: string;
  location: string;
  campaign_id?: string;
  component_type: ComponentType;
  volume_ml: number;
  blood_unit_id?: string;
  created_at: string;
}

export interface Badge {
  id: string;
  donor_id: string;
  badge_type: BadgeType;
  earned_date: string;
  created_at: string;
}

export interface Notification {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  created_at: string;
}

export interface StockLevel {
  blood_group: BloodGroup;
  component_type: ComponentType;
  available_units: number;
  reserved_units: number;
  total_volume_ml: number;
  status: 'Sufficient' | 'Low' | 'Critical';
}