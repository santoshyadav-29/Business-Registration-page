# BusinessFlow - Business Registration Platform
 I have used clean code and tried to copy the replica of the figma file while adding some changes by myself. This page consist of a registration page, a Dummy OPT generation section and a business registration page. Live at 
 [vercel](http://localhost:3000)



## Tech Stack

- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Toast Notifications**: Sonner

## Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/santoshyadav-29/Business-Registration-page
cd businessflow
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
businessflow/
├── app/                    # Next.js 13 app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── register/          # Registration flow pages
├── components/            # Reusable UI components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
└── assets/               # Static assets
```

## Key Features Breakdown

### Registration Flow
1. **Location Selection**: Choose your business region
2. **Email Verification**: Secure 6-digit code verification
3. **Business Details**: Comprehensive business information form
4. **Document Upload**: Support for incorporation certificates and company logos

### UI Components
- Custom animated location cards
- Interactive verification input
- Progress stepper for registration flow
- Responsive form layouts
- Toast notifications




## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)