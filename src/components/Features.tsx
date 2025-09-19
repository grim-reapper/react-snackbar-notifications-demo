import React from 'react';
import './Features.css';

const Features: React.FC = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Promise Support',
      description: 'Automatically handle loading states with promise resolution and rejection'
    },
    {
      icon: '🎨',
      title: 'Fully Customizable',
      description: 'Customize colors, animations, positions, themes, and more'
    },
    {
      icon: '⚡',
      title: 'TypeScript Support',
      description: 'Full TypeScript support with comprehensive type definitions'
    },
    {
      icon: '📱',
      title: 'Responsive Design',
      description: 'Works perfectly on all screen sizes and devices'
    },
    {
      icon: '🎭',
      title: 'Multiple Animations',
      description: 'Choose from slide, fade, and directional animations'
    },
    {
      icon: '🎯',
      title: 'Easy Integration',
      description: 'Simple API with React hooks for seamless integration'
    }
  ];

  return (
    <section className="features">
      <div className="container">
        <h2 className="features-title">Why Choose React Snackbar?</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;