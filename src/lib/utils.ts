import { type ClassValue, clsx } from 'clsx';
import { addDays, differenceInDays, format, parseISO } from 'date-fns';
import { BloodGroup, ComponentType } from '../types';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatDate(date: string | Date): string {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'MMM dd, yyyy');
}

export function formatDateTime(date: string | Date): string {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'MMM dd, yyyy HH:mm');
}

export function formatTime(date: string | Date): string {
  if (!date) return '';
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  return format(dateObj, 'HH:mm');
}

export function calculateNextEligibleDate(lastDonationDate: string): string {
  const lastDate = parseISO(lastDonationDate);
  return addDays(lastDate, 90).toISOString();
}

export function getDaysUntilEligible(nextEligibleDate: string): number {
  const nextDate = parseISO(nextEligibleDate);
  const today = new Date();
  return differenceInDays(nextDate, today);
}

export function isEligibleToDonate(nextEligibleDate: string | null): boolean {
  if (!nextEligibleDate) return true;
  return getDaysUntilEligible(nextEligibleDate) <= 0;
}

export function getExpiryDate(componentType: ComponentType, collectionDate: string): string {
  const collection = parseISO(collectionDate);
  let daysValid = 35; // Default for Whole blood

  switch (componentType) {
    case 'RBC':
      daysValid = 42;
      break;
    case 'Plasma':
      daysValid = 365;
      break;
    case 'Platelets':
      daysValid = 5;
      break;
    case 'WBC':
      daysValid = 24 / 24; // 24 hours = 1 day
      break;
    case 'Whole':
    default:
      daysValid = 35;
      break;
  }

  return addDays(collection, daysValid).toISOString();
}

export function getStockStatus(availableUnits: number, componentType: ComponentType): 'Sufficient' | 'Low' | 'Critical' {
  // Define thresholds based on component type
  const thresholds = {
    Platelets: { critical: 5, low: 10 },
    WBC: { critical: 3, low: 6 },
    Plasma: { critical: 10, low: 20 },
    RBC: { critical: 15, low: 30 },
    Whole: { critical: 15, low: 30 },
  };

  const threshold = thresholds[componentType];

  if (availableUnits <= threshold.critical) return 'Critical';
  if (availableUnits <= threshold.low) return 'Low';
  return 'Sufficient';
}

export function getBadgeForDonations(totalDonations: number): string | null {
  if (totalDonations >= 25) return 'Gold Donor';
  if (totalDonations >= 10) return 'Super Saver';
  if (totalDonations >= 5) return 'Hero Badge';
  if (totalDonations >= 1) return 'First Donation';
  return null;
}

export function validateBloodPressure(bp: string): boolean {
  const bpRegex = /^\d{2,3}\/\d{2,3}$/;
  return bpRegex.test(bp);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^[6-9]\d{9}$/; // Indian phone number
  return phoneRegex.test(phone);
}

export function validatePincode(pincode: string): boolean {
  const pincodeRegex = /^[1-9]\d{5}$/; // Indian pincode
  return pincodeRegex.test(pincode);
}

export const bloodGroups: BloodGroup[] = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

export const componentTypes: ComponentType[] = ['Whole', 'RBC', 'WBC', 'Plasma', 'Platelets'];

export function getBloodGroupColor(bloodGroup: BloodGroup): string {
  const colors: Record<BloodGroup, string> = {
    'A+': 'bg-red-100 text-red-800',
    'A-': 'bg-red-200 text-red-900',
    'B+': 'bg-blue-100 text-blue-800',
    'B-': 'bg-blue-200 text-blue-900',
    'AB+': 'bg-purple-100 text-purple-800',
    'AB-': 'bg-purple-200 text-purple-900',
    'O+': 'bg-green-100 text-green-800',
    'O-': 'bg-green-200 text-green-900',
  };
  return colors[bloodGroup];
}

export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    // Blood unit statuses
    'Collected': 'bg-blue-100 text-blue-800',
    'Test Pending': 'bg-yellow-100 text-yellow-800',
    'Safe to Use': 'bg-green-100 text-green-800',
    'Infected': 'bg-red-100 text-red-800',
    'Reserved': 'bg-orange-100 text-orange-800',
    'Used': 'bg-gray-100 text-gray-800',
    'Expired': 'bg-red-200 text-red-900',
    // Request statuses
    'Pending': 'bg-yellow-100 text-yellow-800',
    'In Review': 'bg-blue-100 text-blue-800',
    'Approved': 'bg-green-100 text-green-800',
    'Rejected': 'bg-red-100 text-red-800',
    'Fulfilled': 'bg-gray-100 text-gray-800',
    // Stock statuses
    'Sufficient': 'bg-green-100 text-green-800',
    'Low': 'bg-yellow-100 text-yellow-800',
    'Critical': 'bg-red-100 text-red-800',
    // User statuses
    'active': 'bg-green-100 text-green-800',
    'inactive': 'bg-gray-100 text-gray-800',
    'suspended': 'bg-red-100 text-red-800',
    // Eligibility
    'eligible': 'bg-green-100 text-green-800',
    'not_eligible': 'bg-red-100 text-red-800',
  };
  return statusColors[status] || 'bg-gray-100 text-gray-800';
}

export function getUrgencyColor(urgency: string): string {
  const urgencyColors: Record<string, string> = {
    'Low': 'bg-blue-100 text-blue-800',
    'Medium': 'bg-yellow-100 text-yellow-800',
    'High': 'bg-orange-100 text-orange-800',
    'Critical': 'bg-red-100 text-red-800',
  };
  return urgencyColors[urgency] || 'bg-gray-100 text-gray-800';
}