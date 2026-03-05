import { useState, useEffect } from 'react'
import './App.css'

const slides = [
  {
    src: '/chair.png',
    tabSrc: '/chair-tab.png',
    title: 'Curated Furniture',
    subtitle: 'Premium designs crafted for modern living spaces',
  },
  {
    src: '/cabinet.png',
    tabSrc: '/cabinet-tab.png',
    title: 'Elegant Storage',
    subtitle: 'Where form meets function in perfect harmony',
  },
  {
    src: '/pilates.png',
    tabSrc: '/pilates-tab.png',
    title: 'Wellness Essentials',
    subtitle: 'Elevate your everyday wellness routine',
  },
  {
    src: '/sauna.png',
    tabSrc: '/sauna-tab.png',
    title: 'Luxury Relaxation',
    subtitle: 'Your personal sanctuary, reimagined',
  },
]

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  )
}

function DeltaLogo() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="14" width="16" height="16" rx="3" fill="#C94B1C"/>
      <rect x="14" y="8" width="16" height="16" rx="3" fill="#1a1a2e" opacity="0.85"/>
      <rect x="14" y="14" width="6" height="6" rx="1" fill="#C94B1C" opacity="0.6"/>
    </svg>
  )
}

function Slideshow() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length)
    }, 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="slideshow">
      {slides.map((slide, i) => (
        <div key={i} className={`slide ${i === current ? 'active' : ''}`}>
          <picture>
            <source media="(max-width: 1024px)" srcSet={slide.tabSrc} />
            <img src={slide.src} alt={slide.title} />
          </picture>
        </div>
      ))}

      <div className="slide-overlay" />

      <div className="slide-dots-bar">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === current ? 'active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

    </div>
  )
}

function AuthPanel() {
  const [mode, setMode] = useState('login')
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="auth-panel">
      <div className="auth-inner">
        <div className="auth-logo-wrap">
          <div className="auth-logo-circle">
            <DeltaLogo />
          </div>
        </div>

        <div className="auth-tabs">
          <button
            className={`tab ${mode === 'login' ? 'active' : ''}`}
            onClick={() => setMode('login')}
          >
            Login
          </button>
          <button
            className={`tab ${mode === 'signup' ? 'active' : ''}`}
            onClick={() => setMode('signup')}
          >
            Sign Up
          </button>
        </div>

        <div className="auth-heading">
          <h1>{mode === 'login' ? 'Welcome back' : 'Create your account'}</h1>
          <p>{mode === 'login' ? 'Enter your details to login' : 'Enter your details to get started'}</p>
        </div>

        <button className="google-btn">
          <GoogleIcon />
          <span>Continue with Google</span>
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        {mode === 'signup' && (
          <div className="field-group">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              autoComplete="name"
            />
          </div>
        )}

        <div className="field-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="hello@ikarusdelta.com"
            autoComplete="email"
          />
        </div>

        <div className="field-group">
          <div className="label-row">
            <label htmlFor="password">Password</label>
            {mode === 'login' && (
              <button className="forgot-btn" type="button">Forgot password?</button>
            )}
          </div>
          <div className="input-wrap">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder={mode === 'login' ? 'Insert your password' : 'Create a password'}
              autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
            />
            <button
              className="toggle-pw"
              type="button"
              onClick={() => setShowPassword(v => !v)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/>
                  <line x1="1" y1="1" x2="23" y2="23"/>
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {mode === 'signup' && (
          <div className="field-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              placeholder="Repeat your password"
              autoComplete="new-password"
            />
          </div>
        )}

        <button className="primary-btn">
          {mode === 'login' ? 'Login' : 'Create Account'}
        </button>

        <p className="switch-mode">
          {mode === 'login' ? (
            <>Don&apos;t have an account?{' '}
              <button type="button" onClick={() => setMode('signup')}>Create an account</button>
            </>
          ) : (
            <>Already have an account?{' '}
              <button type="button" onClick={() => setMode('login')}>Login</button>
            </>
          )}
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="layout">
      <Slideshow />
      <AuthPanel />
    </div>
  )
}
