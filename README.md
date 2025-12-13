# WebX Tech Solutions Website

A professional Flask-based website for WebX Tech Solutions - a company specializing in custom website development and SEO optimization services.

## Features

- **Home Page**: Engaging hero section with features showcase
- **About Page**: Company information, mission, vision, and values
- **Services Page**: Detailed service offerings with pricing plans
- **Portfolio Page**: Showcase of completed projects with testimonials
- **Contact Page**: Contact form and business information
- **Responsive Design**: Mobile-friendly across all devices
- **Modern UI**: Clean and professional design with smooth animations

## Tech Stack

- **Backend**: Flask (Python web framework)
- **Frontend**: HTML5, CSS3, JavaScript
- **Icons**: Font Awesome 6.4.0
- **Styling**: Custom CSS with CSS Grid and Flexbox

## Installation

1. Install Python dependencies:
```bash
pip install -r requirements.txt
```

2. Run the application:
```bash
python app.py
```

3. Open your browser and navigate to:
```
http://localhost:5000
```

## Project Structure

```
webxtechsolutions/
├── app.py                  # Main Flask application
├── requirements.txt        # Python dependencies
├── static/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   └── js/
│       └── main.js        # JavaScript functionality
└── templates/
    ├── base.html          # Base template
    ├── index.html         # Home page
    ├── about.html         # About page
    ├── services.html      # Services page
    ├── portfolio.html     # Portfolio page
    └── contact.html       # Contact page
```

## Customization

### Colors
Edit the CSS variables in `static/css/style.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    --accent-color: #3b82f6;
    /* ... more colors */
}
```

### Contact Information
Update the contact details in `templates/base.html` footer section and `templates/contact.html`.

### Services and Pricing
Modify the service details and pricing in `templates/services.html`.

## Development

The application runs in debug mode by default. For production deployment:

1. Set `debug=False` in `app.py`
2. Configure a production-ready WSGI server (e.g., Gunicorn)
3. Set up proper environment variables for sensitive data
4. Configure email service for contact form functionality

## License

Copyright © 2025 WebX Tech Solutions. All rights reserved.
