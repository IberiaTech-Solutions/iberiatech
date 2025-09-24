# IberiaTech Solutions - Business Website

A modern, bilingual business website built with Next.js 14, React, and Tailwind CSS. Designed to serve both US and Spanish markets with seamless language switching.

## Features

- 🌍 **Bilingual Support**: Full English/Spanish translation system
- 📱 **Mobile-First Design**: Responsive design optimized for all devices
- ⚡ **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- 🎨 **Beautiful UI**: Professional design with smooth animations
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📧 **Contact Form**: Functional contact form with validation
- 🔍 **SEO Optimized**: Meta tags and structured data for search engines

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Icons**: React Icons (Feather Icons)
- **Theme**: next-themes for dark/light mode
- **Language**: Custom i18n implementation

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd iberiatech-solutions
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx          # Home page
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── HeroSection.tsx    # Hero section
│   ├── AboutSection.tsx   # About section
│   ├── ServicesSection.tsx # Services section
│   ├── PricingSection.tsx # Pricing section
│   ├── PortfolioSection.tsx # Portfolio section
│   ├── ContactSection.tsx # Contact section
│   ├── LanguageProvider.tsx # i18n context
│   └── ThemeProvider.tsx  # Theme context
├── public/                # Static assets
├── tailwind.config.js    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## Customization

### Adding New Translations

1. Open `components/LanguageProvider.tsx`
2. Add new translation keys to the `translations` object
3. Use the `t()` function in components to access translations

### Modifying Content

- **Services**: Edit `components/ServicesSection.tsx`
- **Pricing**: Edit `components/PricingSection.tsx`
- **Portfolio**: Edit `components/PortfolioSection.tsx`
- **Contact Info**: Edit `components/ContactSection.tsx` and `components/Footer.tsx`

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component-specific styles: Use Tailwind classes in components

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

1. Build the project:
```bash
npm run build
```

2. Deploy the `.next` folder to your hosting platform

## Business Information

**IberiaTech Solutions**
- **Email**: luis.lozoya.tech@gmail.com
- **Phone**: (864) 365-7897
- **Location**: Charleston, SC
- **Founded**: 2024

## Services Offered

- Web Development (React, Next.js, TypeScript)
- Mobile-First Design
- Bilingual Websites (English/Spanish)
- Security & Authentication
- Performance Optimization
- Ongoing Support & Maintenance

## Pricing Packages

- **Starter**: $2,500 - Perfect for small businesses
- **Business**: $5,000 - Ideal for growing businesses
- **Enterprise**: Custom pricing - Tailored solutions

## License

This project is proprietary software owned by IberiaTech Solutions.

## Support

For technical support or business inquiries, contact:
- Email: luis.lozoya.tech@gmail.com
- Phone: (864) 365-7897
