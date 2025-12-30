# Formspree Setup Instructions

The contact form on `contact.html` uses Formspree for backend processing.

## Setup Steps:

1. Go to https://formspree.io/
2. Sign up for a free account (allows 50 submissions/month)
3. Create a new form
4. Copy your form endpoint (looks like: https://formspree.io/f/YOUR_FORM_ID)
5. In `contact.html`, find the form tag and replace `YOUR_FORM_ID` with your actual form ID:

```html
<form action="https://formspree.io/f/YOUR_ACTUAL_FORM_ID" method="POST" id="contact-form">
```

6. Configure form to send to: info@aboveandbeyondny.com (or Tyler's actual email)

## Alternative: Netlify Forms

If hosting on Netlify, you can use Netlify Forms instead (also free):

1. Add `netlify` attribute to form tag:
```html
<form name="contact" method="POST" netlify>
```

2. Remove Formspree action URL
3. Deploy to Netlify - forms will automatically work

## Testing:

After setup, test the form by submitting a test quote request and verifying it arrives at the configured email address.
