/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0f0f1a',
          900: '#0f0f1a',
          800: '#16162a',
          700: '#1e1e35',
          600: '#252545',
          500: '#2e2e55',
        },
        orange: {
          DEFAULT: '#ff6b2b',
          light: '#ff8c5a',
          dark: '#e55520',
          amber: '#ff9a3c',
          glow: 'rgba(255,107,43,0.3)',
        },
        success: '#00d9a6',
        muted: '#8b8b9e',
        glass: 'rgba(255,255,255,0.07)',
      },
      fontFamily: {
        sans: ['var(--font-jakarta)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(135deg, #ff6b2b 0%, #ff9a3c 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0f0f1a 0%, #16162a 100%)',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(255,107,43,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,154,60,0.06) 0%, transparent 60%)',
      },
      animation: {
        'float-card': 'floatCard 8s ease-in-out infinite',
        'pulse-orange': 'pulseOrange 2.5s ease-in-out infinite',
        'slide-in': 'slideIn 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
        'typewriter': 'typewriter 3s steps(40) forwards',
        'ping-slow': 'ping 3s cubic-bezier(0,0,0.2,1) infinite',
      },
      keyframes: {
        floatCard: {
          '0%, 100%': { transform: 'translateY(0px) rotate(-2deg)' },
          '50%': { transform: 'translateY(-20px) rotate(2deg)' },
        },
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,107,43,0.4)' },
          '50%': { boxShadow: '0 0 0 20px rgba(255,107,43,0)' },
        },
        slideIn: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'orange-glow': '0 0 30px rgba(255,107,43,0.25)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
        'card': '0 20px 60px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}
