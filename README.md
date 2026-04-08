# IberiaTech Solutions - Business Website

A modern, bilingual business website built with Next.js 14, React, and Tailwind CSS. Designed to serve both US and Spanish markets with seamless language switching and AI-powered features.

![IberiaTech Solutions](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Features

- 🌍 **Bilingual Support**: Full English/Spanish translation system with seamless language switching
- 📱 **Mobile-First Design**: Responsive design optimized for all devices
- ⚡ **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- 🎨 **Beautiful UI**: Professional design with smooth animations using Framer Motion
- 🌙 **Dark Mode**: Toggle between light and dark themes
- 📧 **Contact Form**: Functional contact form with mailto integration
- 🔍 **SEO Optimized**: Meta tags and structured data for search engines
- 🤖 **AI-Powered Features**: Highlighting AI capabilities and integrations
- 🚀 **Performance**: Optimized for speed and Core Web Vitals
- 🎯 **Business Focused**: Designed for small and medium businesses

## 🛠 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

### Features & Integrations
- **next-themes** - Dark/light mode support
- **React Icons** - Feather icons for UI elements
- **Custom i18n** - Internationalization system
- **Responsive Design** - Mobile-first approach
- **SEO Optimization** - Meta tags and structured data

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Javierlozo/iberiatech.git
   cd iberiatech
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
iberiatech/
├── app/                          # Next.js 14 app directory
│   ├── globals.css              # Global styles and Tailwind directives
│   ├── layout.tsx               # Root layout with providers
│   └── page.tsx                 # Home page orchestrating all sections
├── components/                   # React components
│   ├── Header.tsx               # Navigation header with language/theme toggles
│   ├── Footer.tsx                # Site footer with contact info
│   ├── HeroSection.tsx          # Hero section with CTA buttons
│   ├── AboutSection.tsx          # About section with stats and testimonials
│   ├── ServicesSection.tsx       # Services showcase
│   ├── WhyChooseUsSection.tsx    # Why choose us section
│   ├── TrustedBySection.tsx      # Client logos section
│   ├── PricingSection.tsx        # Pricing packages
│   ├── PortfolioSection.tsx      # Portfolio showcase
│   ├── ContactSection.tsx        # Contact form and info
│   ├── LanguageProvider.tsx      # i18n context and translations
│   └── ThemeProvider.tsx         # Theme context
├── public/                       # Static assets
│   ├── favicon.svg              # Site favicon
│   └── images/                  # Image assets
├── tailwind.config.js           # Tailwind configuration
├── next.config.js               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies and scripts
```

## 🎨 Customization

### Adding New Translations

1. Open `components/LanguageProvider.tsx`
2. Add new translation keys to the `translations` object:
   ```typescript
   en: {
     'new.key': 'English text',
     // ...
   },
   es: {
     'new.key': 'Texto en español',
     // ...
   }
   ```
3. Use the `t()` function in components:
   ```typescript
   const { t } = useLanguage()
   return <h1>{t('new.key')}</h1>
   ```

### Modifying Content

- **Services**: Edit `components/ServicesSection.tsx`
- **Pricing**: Edit `components/PricingSection.tsx`
- **Portfolio**: Edit `components/PortfolioSection.tsx`
- **Contact Info**: Edit `components/ContactSection.tsx` and `components/Footer.tsx`
- **About**: Edit `components/AboutSection.tsx`

### Styling

- **Global styles**: `app/globals.css`
- **Tailwind config**: `tailwind.config.js`
- **Component styles**: Use Tailwind classes in components
- **Custom classes**: Defined in `globals.css` (e.g., `btn-primary`, `section-padding`)

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically with zero configuration

### Other Platforms

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Deploy the `.next` folder** to your hosting platform:
   - Netlify
   - AWS Amplify
   - DigitalOcean App Platform
   - Any static hosting service

## 💼 Business Information

### IberiaTech Solutions LLC

- **Email**: luis@iberiatechsolutions.com
- **Phone**: (864) 365-7897
- **Location**: Charleston, SC, USA
- **Founded**: 2024
- **LinkedIn**: [linkedin.com/company/iberiatech](https://linkedin.com/company/iberiatech)

### Services Offered

- **Web Development**: React, Next.js, TypeScript, Scalable Architecture
- **Mobile-First Design**: Touch-friendly interfaces optimized for all devices
- **Bilingual Websites**: English & Spanish with cultural adaptation
- **Security & Authentication**: Enterprise-grade security measures
- **SEO & Performance**: Search optimization and speed optimization
- **AI-Powered Features**: Chatbots, virtual assistants, intelligent search
- **Ongoing Support**: Long-term maintenance and technical support

### Monthly Plans (no big upfront cost)

| Plan | Price | Description |
|------|-------|-------------|
| **Starter** | $149/mo | Up to 4 pages, basic SEO, hosting & domain included, monthly maintenance, English & Spanish |
| **Business** | $249/mo | Up to 7 pages + blog, advanced SEO + Analytics, monthly content updates, priority support |
| **Custom** | $449/mo+ | eCommerce, booking, portals, apps. Full SEO, ongoing development, same-day support |

All plans include design, development, hosting, domain, and maintenance. 12-month commitment.

## 🌐 Live Demo

Visit the live website: [iberiatech.com](https://iberiatech.com) (when deployed)

## 📱 Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x600/002F71/FFFFFF?text=IberiaTech+Solutions+Desktop)

### Mobile View
![Mobile View](https://via.placeholder.com/400x600/002F71/FFFFFF?text=IberiaTech+Solutions+Mobile)

## 🤝 Contributing

This is a proprietary project owned by IberiaTech Solutions LLC. For business inquiries or collaboration opportunities, please contact:

- **Email**: luis@iberiatechsolutions.com
- **Phone**: (864) 365-7897

## 📄 License

This project is proprietary software owned by IberiaTech Solutions LLC. All rights reserved.

## 🆘 Support

For technical support or business inquiries:

- **Email**: luis@iberiatechsolutions.com
- **Phone**: (864) 365-7897
- **Business Hours**: Monday - Friday, 9 AM - 6 PM EST

## 🔗 Links

- **Website**: [iberiatech.com](https://iberiatech.com)
- **LinkedIn**: [linkedin.com/company/iberiatech](https://linkedin.com/company/iberiatech)
- **GitHub**: [github.com/Javierlozo/iberiatech](https://github.com/Javierlozo/iberiatech)
- **Portfolio**: [luislozoya.com](https://luislozoya.com)

---

**Built with ❤️ by IberiaTech Solutions** - Empowering businesses with innovative tech solutions for a digital future.