# 🩸 Blood Bank Management System

A comprehensive full-stack Blood Bank Management System built with React 18, TypeScript, Vite, Tailwind CSS, and Supabase.

## ✨ Features

### 🔐 User Management & Authentication
- Role-based registration (Donor, Hospital, Blood Bank Organization, Admin)
- Email + Password authentication with OTP verification
- JWT session management
- Password reset flow
- Multi-device login support
- Auto-logout on inactivity
- Profile management with photo upload

### 🩸 Donor Management
- Complete donor profiles with medical information
- Blood group and Rh factor tracking
- Eligibility check system (90-day rule)
- Automated eligibility reminders
- Donation history tracking
- Achievement badge system
- Downloadable certificates

### 📦 Blood Inventory Management
- Add blood units with complete tracking
- Component type management (Whole, RBC, WBC, Plasma, Platelets)
- Comprehensive testing results
- Automated expiry management
- Storage location tracking
- Stock dashboard with color-coded alerts
- Barcode support

### 🏥 Blood Request Management
- Hospital request creation with urgency levels
- Approval workflow system
- Automated stock reservation
- Real-time notifications
- Fulfillment tracking

### 📅 Campaign Management
- Blood donation event creation
- Online donor registration
- Check-in workflow
- Campaign analytics
- Success rate tracking

### 📊 Role-Based Dashboards
- **Admin**: Complete system oversight
- **Hospital**: Request management
- **Donor**: Personal donation tracking
- **Organization**: Campaign and inventory management

### 📧 Notifications & Alerts
- Email alerts for all critical events
- Low stock warnings
- Expiry alerts
- Request status updates

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **Zustand** - State management
- **React Query** - Server state
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **Lucide React** - Icons

### Backend
- **Supabase** - Backend as a Service
  - PostgreSQL Database
  - Authentication
  - Storage
  - Edge Functions
  - Row Level Security (RLS)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GovindJangid75/blood-bank-management-system.git
cd blood-bank-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Configure your Supabase credentials in `.env`:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

5. Set up the Supabase database:
   - Run the SQL migration files in `supabase/migrations/`
   - Deploy Edge Functions from `supabase/functions/`

6. Start the development server:
```bash
npm run dev
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── auth/          # Authentication components
│   ├── dashboard/     # Dashboard components
│   ├── donor/         # Donor management
│   ├── inventory/     # Blood inventory
│   ├── requests/      # Request management
│   ├── campaigns/     # Campaign management
│   └── ui/            # Common UI components
├── pages/             # Page components
├── lib/               # Utilities and configurations
│   ├── supabase.ts    # Supabase client
│   └── utils.ts       # Helper functions
├── store/             # Zustand store
├── types/             # TypeScript types
├── hooks/             # Custom React hooks
└── App.tsx            # Main app component

supabase/
├── migrations/        # Database migrations
├── functions/         # Edge functions
└── config.toml        # Supabase configuration
```

## 🔒 Security Features

- Row Level Security (RLS) policies
- Role-based access control (RBAC)
- JWT authentication
- Secure password hashing
- Input validation and sanitization
- Protected API routes

## 📱 Deployment

### Frontend (Vercel)
```bash
npm run build
# Deploy to Vercel
```

### Backend (Supabase)
- Database and Auth are automatically managed
- Deploy Edge Functions via Supabase CLI

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Govind Jangid**
- GitHub: [@GovindJangid75](https://github.com/GovindJangid75)
- Portfolio: [govind-jangid.vercel.app](https://govind-jangid.vercel.app)

## 🙏 Acknowledgments

- Supabase for the amazing backend platform
- React and Vite teams for excellent developer experience
- Tailwind CSS for beautiful styling utilities
