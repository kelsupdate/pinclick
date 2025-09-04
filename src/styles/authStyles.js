// Shared authentication styles for blue theme
export const neonStyles = {
  // Blue glow effects
  neonGlow: {
    boxShadow: '0 0 5px #3b82f6, 0 0 10px #3b82f6, 0 0 15px #3b82f6',
    transition: 'all 0.3s ease-in-out',
  },
  
  neonGlowHover: {
    '&:hover': {
      boxShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6, 0 0 40px #3b82f6',
      transform: 'scale(1.05)',
    },
  },

  // Background gradients
  animatedBackground: {
    background: 'linear-gradient(-45deg, #000000, #001a33, #003366, #004080)',
    backgroundSize: '400% 400%',
    animation: 'gradientShift 8s ease infinite',
  },

  // Card styling
  neonCard: {
    background: 'rgba(0, 0, 0, 0.8)',
    border: '2px solid #3b82f6',
    borderRadius: '16px',
    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), inset 0 0 20px rgba(59, 130, 246, 0.1)',
    backdropFilter: 'blur(10px)',
  },

  // Input styling
  neonInput: {
    '& .MuiInput-input': {
      color: '#ffffff',
      '&::placeholder': {
        color: '#cccccc',
        opacity: 0.7,
      },
    },
    '& .MuiInput-root': {
      border: '1px solid #3b82f6',
      borderRadius: '8px',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: '#2563eb',
        boxShadow: '0 0 10px rgba(37, 99, 235, 0.3)',
      },
      '&:focus-within': {
        borderColor: '#2563eb',
        boxShadow: '0 0 15px rgba(37, 99, 235, 0.5)',
      },
    },
  },

  // Button styling
  neonButton: {
    background: 'linear-gradient(45deg, #3b82f6, #2563eb)',
    color: '#ffffff',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '50px',
    padding: '12px 30px',
    boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
    transition: 'all 0.3s ease',
    '&:hover': {
      background: 'linear-gradient(45deg, #2563eb, #3b82f6)',
      boxShadow: '0 0 20px rgba(37, 99, 235, 0.8)',
      transform: 'translateY(-2px)',
    },
  },

  // Typography
  neonText: {
    color: '#3b82f6',
    textShadow: '0 0 10px #3b82f6, 0 0 20px #3b82f6',
  },

  // Header styling
  neonHeader: {
    background: 'linear-gradient(90deg, #3b82f6, #2563eb)',
    color: '#ffffff',
    borderRadius: '0 0 20px 20px',
    boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
  },
};

// CSS keyframes for animations
export const keyframes = `
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  @keyframes neonPulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }

  @keyframes neonFlicker {
    0%, 100% { opacity: 1; }
    25% { opacity: 0.8; }
    50% { opacity: 0.6; }
    75% { opacity: 0.9; }
  }
`;
