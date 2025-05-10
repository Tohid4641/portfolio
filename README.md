# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth animations, and a dynamic contact form.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with a clean, modern UI
- **Dark/Light Mode**: System preference detection with manual toggle
- **Smooth Animations**: Using Framer Motion for engaging transitions
- **Dynamic Projects**: Showcase your work with image carousels
- **Contact Form**: Integrated with EmailJS for seamless communication
- **Performance Optimized**: Fast loading times and smooth scrolling
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS for consistent styling

## 🛠️ Tech Stack

- React + TypeScript
- Tailwind CSS
- Framer Motion
- EmailJS
- Vite
- React Icons
- Swiper

## 🏃‍♂️ Running Locally

1. Clone the repository:
```bash
git clone https://github.com/Tohid4641/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server:
```bash
npm run dev
```

## 📦 Building for Production

```bash
npm run build
```

## 🎨 Project Structure

```
portfolio/
├── src/
│   ├── components/     # React components
│   ├── assets/        # Images and static files
│   ├── data/          # Project data and content
│   ├── types/         # TypeScript type definitions
│   └── styles/        # Global styles and Tailwind config
├── public/            # Public assets
└── ...config files
```

## 🔧 Configuration

- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 📱 Environment Variables

Required environment variables:

- `VITE_EMAILJS_SERVICE_ID`: EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID`: EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY`: EmailJS public key

## 🚀 Deployment

The site is deployed using Vercel. Each push to the main branch triggers an automatic deployment.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👋 Contact

[Shaikh Tauhid] - [dev.tauhid@gmail.com]

Project Link: [https://github.com/Tohid4641/portfolio](https://github.com/Tohid4641/portfolio)