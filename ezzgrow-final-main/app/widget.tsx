import { useEffect } from 'react';

const WidgetCalendly = () => {
  useEffect(() => {
    // Function to initialize Calendly badge widget after the component mounts
    const initializeCalendlyWidget = () => {
      // Use type assertion to access the Calendly object on window
      if ((window as any).Calendly) {
        (window as any).Calendly.initBadgeWidget({
          url: 'https://calendly.com/contact-ezzgrow/1to1meeting',
          text: 'Book a free meeting',
          color: '#0445af',
          textColor: '#ffffff',
          branding: undefined,
        });
      }
    };

    // Execute the initialization function after component mounts
    initializeCalendlyWidget();
  }, []);

  return (
    <div>
      {/* Link to Calendly widget CSS */}
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />

      {/* Script to load Calendly widget JavaScript */}
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async />

      {/* Empty div to hold the Calendly badge */}
      <div id="calendly-badge" style={{ minWidth: '320px', height: '44px' }}></div>
    </div>
  );
};

export default WidgetCalendly;
