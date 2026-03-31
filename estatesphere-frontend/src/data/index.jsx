import { default as BuildingRectsIcon } from '../assets/svg/common/BuildingRectsIcon';
import { default as HouseCheckIcon } from '../assets/svg/common/HouseCheckIcon';
import { default as HouseVariantIcon } from '../assets/svg/common/HouseVariantIcon';
import { default as WindowGridIcon } from '../assets/svg/common/WindowGridIcon';
import { default as UsersIcon } from '../assets/svg/Features/UsersIcon';
import { default as ChatIcon } from '../assets/svg/Features/ChatIcon';
import { default as SecurePaymentIcon } from '../assets/svg/Features/SecurePaymentIcon';
import { default as AnalyticsIcon } from '../assets/svg/Features/AnalyticsIcon';
import { default as CalendarBookingIcon } from '../assets/svg/Features/CalendarBookingIcon';
import { default as BellAlertIcon } from '../assets/svg/Features/BellAlertIcon';

// Dashboard Icons
import { default as CreditCardIcon } from '../assets/svg/resident/CreditCardIcon';
import { default as AlertCircleIcon } from '../assets/svg/resident/AlertCircleIcon';
import { default as ResUsersIcon } from '../assets/svg/resident/UsersIcon';
import { default as MegaphoneIcon } from '../assets/svg/resident/MegaphoneIcon';
import { default as SocietyIcon } from '../assets/svg/superAdmin/SocietyIcon';
import { default as ActiveResidentsIcon } from '../assets/svg/superAdmin/ActiveResidentsIcon';
import { default as TicketIcon } from '../assets/svg/superAdmin/TicketIcon';
import { default as RevenueIcon } from '../assets/svg/superAdmin/RevenueIcon';

// Client Icons
import { default as HeartIcon } from '../assets/svg/client/HeartIcon';
import { default as CalendarIcon } from '../assets/svg/client/CalendarIcon';
import { default as TagIcon } from '../assets/svg/client/TagIcon';
import { default as MailIcon } from '../assets/svg/client/MailIcon';

// Dealer Icons
import { default as BuildingIcon } from '../assets/svg/dealer/BuildingIcon';
import { default as UserPlusIcon } from '../assets/svg/dealer/UserPlusIcon';
import { default as CheckBadgeIcon } from '../assets/svg/dealer/CheckBadgeIcon';
import { default as DollarIcon } from '../assets/svg/dealer/DollarIcon';
import { default as PhoneCallIcon } from '../assets/svg/dealer/PhoneCallIcon';
import { default as FlagIcon } from '../assets/svg/dealer/FlagIcon';

export const clientStats = [
  { icon: <HeartIcon />, iconBg: "bg-indigo-50", iconColor: "text-indigo-600", label: "Saved Homes", value: "12" },
  { icon: <CalendarIcon />, iconBg: "bg-purple-50", iconColor: "text-purple-600", label: "Upcoming Tours", value: "3" },
  { icon: <TagIcon />, iconBg: "bg-teal-50", iconColor: "text-teal-600", label: "Active Offers", value: "2" },
  { icon: <MailIcon />, iconBg: "bg-orange-50", iconColor: "text-orange-600", label: "Total Inquiries", value: "24" },
];

export const residentStats = [
  { icon: <CreditCardIcon />, iconBg: "bg-linear-to-br from-indigo-500 to-indigo-600", label: "Current Dues", value: "$1,200", badge: "DUE IN 5 DAYS", badgeCls: "bg-amber-50 text-amber-600 border border-amber-100", shadow: "shadow-indigo-100" },
  { icon: <AlertCircleIcon />, iconBg: "bg-linear-to-br from-orange-500 to-orange-600", label: "Active Issues", value: "2", badge: "PENDING", badgeCls: "bg-rose-50 text-rose-600 border border-rose-100", shadow: "shadow-orange-100" },
  { icon: <ResUsersIcon />, iconBg: "bg-linear-to-br from-blue-500 to-blue-600", label: "Today's Visitors", value: "4", badge: null, shadow: "shadow-blue-100" },
  { icon: <MegaphoneIcon />, iconBg: "bg-linear-to-br from-purple-500 to-purple-600", label: "New Notices", value: "3", badge: "NEW", badgeCls: "bg-indigo-50 text-indigo-600 border border-indigo-100", shadow: "shadow-purple-100" },
];

export const societyOwnerStats = [
  { icon: <CreditCardIcon />, iconBg: "bg-linear-to-br from-indigo-500 to-indigo-600", label: "Monthly Collections", value: "$45,200", badge: "85% PAID", badgeCls: "bg-emerald-50 text-emerald-600 border border-emerald-100", shadow: "shadow-indigo-100" },
  { icon: <AlertCircleIcon />, iconBg: "bg-linear-to-br from-orange-500 to-orange-600", label: "Open Complaints", value: "12", badge: "HIGH PRIO", badgeCls: "bg-rose-50 text-rose-600 border border-rose-100", shadow: "shadow-orange-100" },
  { icon: <ResUsersIcon />, iconBg: "bg-linear-to-br from-blue-500 to-blue-600", label: "Total Residents", value: "240", badge: null, shadow: "shadow-blue-100" },
  { icon: <MegaphoneIcon />, iconBg: "bg-linear-to-br from-purple-500 to-purple-600", label: "Active Notices", value: "5", badge: null, shadow: "shadow-purple-100" },
];

export const adminStats = [
  { icon: <SocietyIcon />, iconBg: "bg-linear-to-br from-indigo-500 to-indigo-600", label: "Total Societies", value: "124", change: "+12%", up: true, shadow: "shadow-indigo-100" },
  { icon: <ActiveResidentsIcon />, iconBg: "bg-linear-to-br from-blue-500 to-blue-600", label: "Active Residents", value: "12,840", change: "+8%", up: true, shadow: "shadow-blue-100" },
  { icon: <TicketIcon />, iconBg: "bg-linear-to-br from-rose-500 to-rose-600", label: "Pending Issues", value: "42", change: "-4%", up: false, shadow: "shadow-rose-100" },
  { icon: <RevenueIcon />, iconBg: "bg-linear-to-br from-purple-500 to-purple-600", label: "Monthly Revenue", value: "$45,200", change: "+21%", up: true, shadow: "shadow-purple-100" },
];

export const clientNavItems = [
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>, label: "Dashboard", route: "/Client" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>, label: "Saved Properties", route: "/SavedProperties" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>, label: "Tour Requests", route: "/TourRequests" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>, label: "My Offers", route: "/MyOffers" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>, label: "Messages", route: "/Messages" },
];

export const residentNavItems = [
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>, label: "Dashboard", route: "/Resident" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22V12h6v10M9 7h1M14 7h1" /></svg>, label: "My Property", route: "/MyProperty" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>, label: "Maintenance", route: "/Maintenance" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>, label: "Complaints", route: "/ComplaintsManagement" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>, label: "Visitors", route: "/Visitors" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>, label: "Payments", route: "/Payments" },
];

export const dealerNavItems = [
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>, label: "Dashboard", route: "/Dealer" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>, label: "My Listings", route: "/MyListings" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="17" y1="11" x2="23" y2="11" /></svg>, label: "Leads", route: "/Leads" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>, label: "Client Meetings", route: "/Meetings" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>, label: "Earnings", route: "/Earnings" },
];

export const societyOwnerNavItems = [
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>, label: "Dashboard", route: "/SocietyOwner" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22V12h6v10M9 7h1M14 7h1" /></svg>, label: "My Property", route: "/MyProperty" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>, label: "Maintenance", route: "/Maintenance" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>, label: "Complaints", route: "/ComplaintsManagement" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>, label: "Visitors", route: "/Visitors" },
  { icon: <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>, label: "Payments", route: "/Payments" },
];

export const adminNavItems = [
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>, label: "Dashboard", route: "/SuperAdmin" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="9" height="14" rx="1" /><rect x="13" y="3" width="9" height="18" rx="1" /></svg>, label: "Societies", route: "/Societies" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="2" width="16" height="20" rx="1" /><path d="M9 22V12h6v10M9 7h1M14 7h1" /></svg>, label: "Properties", route: "/AddPropertyBasic" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>, label: "User Management", route: "/UserManagement" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" /></svg>, label: "Complaints", badge: "12", route: "/ComplaintsManagement" },
  { icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="2" /><line x1="2" y1="10" x2="22" y2="10" /></svg>, label: "Messages", route: "/Messages" },
];

export const navbarLinks = [
  {
    label: "Products",
    dropdown: [
      { label: "Property Management", route: "#" },
      { label: "Billing & Payments", route: "#" },
      { label: "Community Portal", route: "#" },
      { label: "Analytics Dashboard", route: "#" },
    ]
  },
  {
    label: "Solutions",
    dropdown: [
      { label: "For Residents", route: "#" },
      { label: "For Property Managers", route: "#" },
      { label: "For Developers", route: "#" },
      { label: "For Enterprises", route: "#" },
    ]
  },
  { label: "Pricing", route: "#" },
  { label: "About", route: "#" },
];

export const footerLinks = {
  product: [
    { label: "Features", route: "#" },
    { label: "Integrations", route: "#" },
    { label: "Changelog", route: "#" },
    { label: "Pricing", route: "#" },
  ],
  resources: [
    { label: "Documentation", route: "#" },
    { label: "Help Center", route: "#" },
    { label: "Blog", route: "#" },
    { label: "Community", route: "#" },
  ],
  company: [
    { label: "About Us", route: "#" },
    { label: "Careers", route: "#" },
    { label: "Press", route: "#" },
    { label: "Contact", route: "#" },
  ],
  legal: [
    { label: "Privacy Policy", route: "#" },
    { label: "Terms of Service", route: "#" },
    { label: "Cookie Policy", route: "#" },
  ]
};

export const clientNearbyAmenities = [
  { name: "Metro Station", dist: "0.3 mi" },
  { name: "Whole Foods", dist: "0.5 mi" },
  { name: "City Park", dist: "0.7 mi" },
  { name: "Elementary School", dist: "1.1 mi" },
];

export const propertyAmenitiesList = [
  { label: "Fitness Center", checked: false },
  { label: "Swimming Pool", checked: true },
  { label: "Private Parking", checked: true },
  { label: "24/7 Security", checked: true },
  { label: "High-speed Wifi", checked: false },
  { label: "Air Conditioning", checked: true },
  { label: "Balcony", checked: false },
  { label: "Pet Friendly", checked: false },
];

export const addPropertySteps = [
  { id: 1, label: "Basic Info" },
  { id: 2, label: "Media" },
  { id: 3, label: "Pricing" },
  { id: 4, label: "Review" },
];

export const reviewPropertyAmenities = [
  "High-speed Fiber Internet",
  "Smart Home Hub Integration",
  "Private Balcony with City View",
  "Central Heating & A/C"
];

export const reviewLocationDetails = [
  { l: "Walk Score: 94 (Walker's Paradise)", i: "🚶" },
  { l: "0.3 miles to Transit Station", i: "🚆" },
  { l: "Near Central Park District", i: "🌳" },
  { l: "Top-rated School Zone", i: "🎓" },
];

export const propertyTypes = [
  "Select type",
  "Residential",
  "Commercial",
  "Industrial"
];

export const addPropertyUploadedFiles = [
  { id: 1, type: "image", src: "https://images.unsplash.com/photo-1600585154340-be6191dae10c?auto=format&fit=crop&q=80&w=200", isPrimary: true },
  { id: 2, type: "image", src: "https://images.unsplash.com/photo-1600607687940-4e3650239e1e?auto=format&fit=crop&q=80&w=200", isPrimary: false },
  { id: 3, type: "video", src: "https://images.unsplash.com/photo-1556911220-e15224bbaf40?auto=format&fit=crop&q=80&w=200", isPrimary: false },
];

export const signupRoles = [
  { value: "resident", label: "Resident" },
  { value: "owner", label: "Society Owner" },
  { value: "admin", label: "Admin" },
];

export const mockComplaints = [
  { id: "#CMP-1042", subject: "Elevator B-2 Malfunction", category: "Mechanical Failure", priority: "High Priority", user: "Sarah Jenkins", date: "Oct 24, 2023 09:15 AM", status: "Pending" },
  { id: "#CMP-1041", subject: "Leaking Pipe in Master Bath", category: "Plumbing", priority: "Medium Priority", user: "Robert Wilson", date: "Oct 23, 2023 04:20 PM", status: "In Progress" },
  { id: "#CMP-1039", subject: "Trash Collection Schedule", category: "Sanitation", priority: "Low Priority", user: "Emily Davis", date: "Oct 22, 2023 11:45 AM", status: "Resolved" },
  { id: "#CMP-1038", subject: "Lobby Lighting Flickering", category: "Electrical", priority: "Medium Priority", user: "Michael Chen", date: "Oct 21, 2023 02:30 PM", status: "Resolved" },
  { id: "#CMP-1037", subject: "Noise Complaint Unit 4B", category: "Policy Violation", priority: "High Priority", user: "Olivia Thompson", date: "Oct 20, 2023 10:10 PM", status: "Pending" },
];

export const mockUsers = [
  { id: 1, name: "Sarah Miller", email: "sarah.m@example.com", role: "Super Admin", avatar: "SM", joined: "Oct 24, 2023", status: "Active" },
  { id: 2, name: "James Wilson", email: "j.wilson@propertymgmt.com", role: "Owner", avatar: "JW", joined: "Nov 12, 2023", status: "Active" },
  { id: 3, name: "Emily Chen", email: "emily.c@horizonapt.com", role: "Resident", avatar: "EC", joined: "Jan 05, 2024", status: "Active" },
  { id: 4, name: "Robert Taylor", email: "r.taylor@brokerage.net", role: "Dealer", avatar: "RT", joined: "Feb 14, 2024", status: "Inactive" },
  { id: 5, name: "Marcus Gray", email: "marcus@invest-corp.com", role: "Client", avatar: "MG", joined: "Mar 01, 2024", status: "Active" },
];

export const activityHistory = [
  {
    user: "Robert Wilson",
    role: "Admin",
    action: "Changed status from Open to In Progress.",
    comment: "Dispatching plumbers immediately to check Unit 5B. Resident in 4B has been notified.",
    time: "2 hours ago",
    isLast: false
  },
  {
    user: "System Notification",
    role: "Auto",
    action: "Complaint CMP-1024 was assigned to Maintenance Team A.",
    time: "4 hours ago",
    isLast: false
  },
  {
    user: "Sarah Jenkins",
    role: "Resident",
    action: "Complaint submitted via EstateSphere Mobile App.",
    date: "Oct 24, 10:45 AM",
    isLast: true
  }
];

export const userManagementStats = [
  {
    title: "Total Platform Users",
    value: "1,240",
    iconContent: "👥",
    trend: "up",
    trendValue: "+12%",
    color: "bg-indigo-500",
  },
  {
    title: "Verified Society Owners",
    value: "342",
    iconContent: "🏰",
    trend: "up",
    trendValue: "LEGIT",
    color: "bg-purple-500",
  },
  {
    title: "Active Tenants",
    value: "816",
    iconContent: "🏠",
    trend: "up",
    trendValue: "STABLE",
    color: "bg-emerald-500",
  },
  {
    title: "Pending Verifications",
    value: "18",
    iconContent: "🛡️",
    trend: "down",
    trendValue: "URGENT",
    color: "bg-amber-500",
  },
];

export const complaintsManagementStats = [
  { title: "TOTAL TICKETS", value: "128", icon: "🎫", bg: "bg-indigo-50", color: "text-indigo-600" },
  { title: "PENDING", value: "42", icon: "⏳", bg: "bg-amber-50", color: "text-amber-600" },
  { title: "IN PROGRESS", value: "18", icon: "⚙️", bg: "bg-blue-50", color: "text-blue-600" },
  { title: "RESOLVED", value: "68", icon: "✅", bg: "bg-emerald-50", color: "text-emerald-600" },
];

export const messageChats = [
  { name: "Sarah Jenkins", role: "TENANT", message: "The leak in 4B is getting...", time: "12:45 PM", unread: 2, active: true, color: "bg-indigo-500" },
  { name: "Marco Rossi", role: "STAFF", message: "I'll check the boiler rooms today.", time: "Yesterday", unread: 0, color: "bg-purple-500" },
  { name: "East Wing Residents", role: "GROUP", message: "Reminder: Roof party at 7PM!", time: "Aug 22", unread: 0, color: "bg-emerald-500" },
  { name: "Elena Vance", role: "OWNER", message: "Contract sent for Unit 12C.", time: "Aug 21", unread: 0, color: "bg-rose-500" },
];

export const dashboardMockupChartData = [
  [45, 30], [65, 40], [55, 35], [85, 50],
  [70, 45], [80, 55], [75, 48]
];

export const dashboardMockupActivities = [1, 2, 3]; // Used for demonstration mapping

export const socialProviders = [
  { name: "Google", provider: "google" },
  { name: "Apple", provider: "apple" }
];

export const residentQuickActions = [
  {
    title: "Maintenance Request",
    desc: "Report issues in your unit or common areas for quick resolution.",
    btnText: "Raise Request",
    theme: "dark", // or 'light'
    iconType: "wrench"
  },
  {
    title: "Pre-Approve a Guest",
    desc: "Notify security about expected visitors to ensure seamless entry.",
    btnText: "Add Guest",
    theme: "light",
    iconType: "car"
  }
];

export const societyOwnerQuickActions = [
  {
    title: "Maintenance Overview",
    desc: "View all open work orders and staff performance metrics.",
    btnText: "Open Console",
    theme: "dark",
    iconType: "wrench"
  },
  {
    title: "Visitor Analytics",
    desc: "Track visitor flow trends and security logs for the past 30 days.",
    btnText: "View Reports",
    theme: "light",
    iconType: "car"
  }
];

export const chatMessages = [
  { type: 'incoming', content: "Hi! I wanted to report that the kitchen sink faucet in Unit 4B started leaking quite heavily this morning. It's making quite a mess under the cabinet.", time: "12:38 PM", user: "Sarah Jenkins", color: "bg-indigo-500" },
  { type: 'outgoing', content: "Hello Sarah, I'm sorry to hear that. I'll dispatch Marco from maintenance immediately. Will someone be home in the next 30 minutes to let him in?", time: "12:42 PM", status: "read" },
  { type: 'incoming', content: "Yes, I'm working from home today. Please send him over as soon as possible. Thank you!", time: "12:45 PM", user: "Sarah Jenkins", color: "bg-indigo-500" },
];

export const complaintMainInfoSteps = [
  { label: "Submitted", active: true, done: true },
  { label: "In Progress", active: true, done: false },
  { label: "Resolving", active: false, done: false },
  { label: "Closed", active: false, done: false },
];
export const features = [
  {
    icon: <UsersIcon />,
    title: 'Role-Based Access',
    description: 'Granular permissions for residents, owners, and admins. Ensure everyone has the right level of access to sensitive data.',
    color: 'indigo',
    gradient: 'from-indigo-600 to-indigo-700'
  },
  {
    icon: <ChatIcon />,
    title: 'Real-Time Chat',
    description: 'Instant communication between society members and management. Resolve issues faster with integrated messaging.',
    color: 'cyan',
    gradient: 'from-cyan-600 to-cyan-700'
  },
  {
    icon: <SecurePaymentIcon />,
    title: 'Secure Payments',
    description: 'Automated maintenance collection and encrypted transactions. Easy digital payment history tracking.',
    color: 'emerald',
    gradient: 'from-emerald-600 to-emerald-700'
  },
  {
    icon: <AnalyticsIcon />,
    title: 'Insightful Analytics',
    description: 'Visualize your estate\'s performance with comprehensive reports on occupancy, finances, and maintenance.',
    color: 'violet',
    gradient: 'from-violet-600 to-violet-700'
  },
  {
    icon: <CalendarBookingIcon />,
    title: 'Amenity Booking',
    description: 'Streamlined scheduling for community halls, gyms, and shared spaces with automated conflict resolution.',
    color: 'amber',
    gradient: 'from-amber-600 to-amber-700'
  },
  {
    icon: <BellAlertIcon />,
    title: 'Smart Alerts',
    description: 'Push notifications and SMS alerts for urgent notices, package arrivals, and community announcements.',
    color: 'pink',
    gradient: 'from-pink-600 to-pink-700'
  }
];

export const plans = [
  {
    name: 'Resident',
    description: 'For individual unit management',
    price: { monthly: 0, yearly: 0 },
    features: [
      'Resident Dashboard',
      'Pay Maintenance Online',
      'Community Forum Access',
      'Basic Support'
    ],
    cta: 'Start Free',
    popular: false,
    color: 'slate'
  },
  {
    name: 'Owner',
    description: 'For property owners with multiple tenants',
    price: { monthly: 29, yearly: 290 },
    features: [
      'Import Tracking & CRM',
      'Automated Billing & Invoices',
      'Maintenance Ticket Manager',
      'Basic Analytics Reports',
      'Email & SMS Support'
    ],
    cta: 'Upgrade Now',
    popular: true,
    color: 'indigo'
  },
  {
    name: 'Enterprise',
    description: 'For large-scale societies and builders',
    price: { monthly: 99, yearly: 990 },
    features: [
      'Unlimited Society Units',
      'Advanced Financial Reports',
      'Advanced Payroll Access',
      'Secure API Integrations',
      '24/7 Priority Coverage'
    ],
    cta: 'Contact Sales',
    popular: false,
    color: 'purple'
  }
];

export const trustedSocieties = [
  {
    name: "Skyline Towers",
    icon: <BuildingRectsIcon />,
  },
  {
    name: "UrbanLoft",
    icon: <HouseCheckIcon />,
  },
  {
    name: "The Gardens",
    icon: <HouseVariantIcon />,
  },
  {
    name: "Vista Heights",
    icon: <WindowGridIcon />,
  },
];

export const clientNegotiations = [
  { property: "Greenview Villa", color: "bg-indigo-600", asking: "$1.2M", offer: "$1.08M", counter: "$1.15M", status: "COUNTERED", statusCls: "bg-orange-50 text-orange-600", action: "Review" },
  { property: "Skyline Apt 4B", color: "bg-teal-600", asking: "$4,500/mo", offer: "$4,200/mo", counter: "—", status: "PENDING", statusCls: "bg-amber-50 text-amber-700", action: "View" },
];

export const adminRecentActivities = [
  {
    icon: "🏢",
    iconBg: "bg-indigo-50",
    action: "New Society Added",
    society: "Green Valley",
    admin: { name: "Ahmad Ali", avatar: "https://i.pravatar.cc/32?img=5" },
    timestamp: "Today, 02:45 PM",
    status: "COMPLETED",
    statusClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  },
  {
    icon: "⚠️",
    iconBg: "bg-amber-50",
    action: "Complaint Escalated",
    society: "Sunrise Heights",
    admin: { name: "Maryam Khan", avatar: "https://i.pravatar.cc/32?img=6" },
    timestamp: "Today, 01:20 PM",
    status: "IN REVIEW",
    statusClass: "bg-amber-50 text-amber-600 border border-amber-100",
  },
  {
    icon: "💰",
    iconBg: "bg-emerald-50",
    action: "Subscription Renewed",
    society: "Palm Residences",
    admin: { name: "Bilal Ahmed", avatar: "https://i.pravatar.cc/32?img=7" },
    timestamp: "Today, 11:00 AM",
    status: "COMPLETED",
    statusClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
  },
];

export const adminAnalyticsData = {
  months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  actual: [18000, 27000, 22000, 38000, 43000, 47000],
  targets: [20000, 25000, 21000, 32000, 40000, 42000],
  maxVal: 50000,
};

export const adminSupportDistribution = [
  { label: "Maintenance", pct: 45, color: "bg-indigo-600 shadow-indigo-100" },
  { label: "Security", pct: 28, color: "bg-blue-500 shadow-blue-100" },
  { label: "Billing", pct: 17, color: "bg-purple-600 shadow-purple-100" },
  { label: "Others", pct: 10, color: "bg-slate-300" },
];

export const residentPayments = [
  { id: "TXN-1024", type: "Maintenance Fee", date: "Jun 1, 2025", amount: "$850.00" },
  { id: "TXN-1023", type: "Parking Slot B2", date: "May 28, 2025", amount: "$120.00" },
  { id: "TXN-1021", type: "Water Bill", date: "May 15, 2025", amount: "$65.50" },
];

export const residentFeed = [
  { initials: "MA", color: "bg-blue-500 text-white", name: "Management", time: "2h ago", desc: "Water supply will be interrupted on June 18 from 10am–2pm for maintenance." },
  { initials: "SC", color: "bg-purple-500 text-white", name: "Society Committee", time: "Yesterday", desc: "Annual General Meeting scheduled for June 25 at 6:00 PM in the clubhouse." },
  { initials: "SG", color: "bg-amber-500 text-white", name: "Security Guard", time: "2d ago", desc: "New visitor pre-approval process is now live. Please update your guest lists." },
];

export const societyOwnerCollections = [
  { id: "TXN-2045", resident: "Zainab Bibi", unit: "A-102", type: "Maintenace", amount: "$850.00", status: "Paid" },
  { id: "TXN-2044", resident: "Usman Sheikh", unit: "B-405", type: "Amenities", amount: "$150.00", status: "Paid" },
  { id: "TXN-2041", resident: "Hina Pervez", unit: "C-201", type: "Maintenace", amount: "$850.00", status: "Paid" },
];

export const societyOwnerNotices = [
  { initials: "S-A", color: "bg-blue-500 text-white", name: "Society Admin", time: "1h ago", desc: "Painting of Block B external walls starting next Monday. Please keep windows closed." },
  { initials: "SEC", color: "bg-red-500 text-white", name: "Security Head", time: "4h ago", desc: "Security camera upgrade in the parking area is complete. Coverage is now 100%." },
  { initials: "SC", color: "bg-amber-500 text-white", name: "Committee", time: "Yesterday", desc: "New garbage segregation rules apply from tomorrow. Green for organic only." },
];

export const dealerStats = [
  { icon: <BuildingIcon />, label: "Active Listings", value: "24", change: "+4", status: "up" },
  { icon: <UserPlusIcon />, label: "New Leads", value: "156", change: "+12%", status: "up" },
  { icon: <CheckBadgeIcon />, label: "Sold/Leased", value: "8", change: "0", status: "stable" },
  { icon: <DollarIcon />, label: "Monthly Commission", value: "$12.4k", change: "+18%", status: "up" },
];

export const dealerLeadsSummary = {
  days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  inbound: [45, 60, 40, 75, 50, 65, 80],
  email: [20, 35, 25, 40, 30, 45, 50],
};

export const dealerRecentInquiries = [
  { client: "Fatima Zahra", email: "fatima.z@example.com", avatar: "FZ", avatarCls: "bg-purple-600", property: "Silverwood Estates", source: "Phone", type: "Buyer", status: "HOT", statusCls: "bg-red-50 text-red-600", time: "10 mins ago" },
  { client: "Hamza Siddiqui", email: "hamza.s@example.com", avatar: "HS", avatarCls: "bg-indigo-600", property: "Sunset Boulevard", source: "Email", type: "Renter", status: "NEW", statusCls: "bg-emerald-50 text-emerald-600", time: "1 hr ago" },
  { client: "Ayesha Malik", email: "ayesha.m@example.com", avatar: "AM", avatarCls: "bg-teal-600", property: "Lakeview Condo", source: "Email", type: "Buyer", status: "IN PROGRESS", statusCls: "bg-amber-50 text-amber-700", time: "3 hrs ago" },
];

export const dealerUpcomingMeetings = [
  { month: "JUN", day: "15", name: "Saad Rafique", detail: "Viewing – Silverwood Estates", rescheduled: false, color: "bg-indigo-600" },
  { month: "JUN", day: "16", name: "Sana Javed", detail: "Contract Review – Downtown Apt", rescheduled: true, color: "bg-slate-400" },
  { month: "JUN", day: "19", name: "Imran Abbas", detail: "Listing Appraisal – Valley View", rescheduled: false, color: "bg-indigo-600" },
];

export const clientRecommendedProperties = [
  { badge: "FOR SALE", badgeCls: "bg-indigo-600", img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&q=80", title: "Greenview Villa", loc: "Beverly Hills, CA", beds: 4, baths: 3, sqft: "2,400", price: "$1.2M", priceCls: "text-indigo-600" },
  { badge: "FOR RENT", badgeCls: "bg-emerald-600", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80", title: "Skyline Apartment", loc: "Manhattan, NY", beds: 2, baths: 2, sqft: "1,100", price: "$4,500/mo", priceCls: "text-emerald-600" },
  { badge: "FOR SALE", badgeCls: "bg-indigo-600", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80", title: "Palm Estate", loc: "Miami Beach, FL", beds: 5, baths: 4, sqft: "3,100", price: "$2.8M", priceCls: "text-indigo-600" },
  { badge: "FOR RENT", badgeCls: "bg-emerald-600", img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=400&q=80", title: "Oak Terrace", loc: "Austin, TX", beds: 3, baths: 2, sqft: "1,800", price: "$2,900/mo", priceCls: "text-emerald-600" },
];

export const clientUpcomingTours = [
  { month: "JUN", day: "14", title: "Greenview Villa", time: "10:00 AM – 11:30 AM", agent: "Khadija Shah", agentColor: "bg-indigo-600" },
  { month: "JUN", day: "17", title: "Skyline Apt #4B", time: "2:00 PM – 3:00 PM", agent: "Fahad Mustafa", agentColor: "bg-teal-600" },
];