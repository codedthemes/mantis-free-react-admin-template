# AuthFooter Component

**Location:** `src/components/cards/AuthFooter.jsx`

## Overview

AuthFooter is a responsive footer component specifically designed for authentication pages (login, register, forgot password). It displays copyright information and links to Terms & Conditions and Privacy Policy.

## Dependencies

- Material-UI: `Container`, `Link`, `Typography`, `Stack`

## Props

This component has no props - it's a static footer with fixed content.

## Usage

```jsx
import AuthFooter from 'components/cards/AuthFooter';

<AuthFooter />
```

## Content Structure

### Copyright Section
- Text: "© Made with love by Team CodedThemes"
- Links to: https://codedthemes.com/

### Legal Links
- **Terms and Conditions**: https://mui.com/store/terms/
- **Privacy Policy**: https://mui.com/legal/privacy/

## Layout Details

### Container
- Max width: `xl` (1536px)
- Full width responsive behavior

### Desktop Layout (sm and up)
```
[Copyright Text]                    [Terms & Conditions] [Privacy Policy]
```

### Mobile Layout (xs)
```
       [Copyright Text]
    [Terms & Conditions]
      [Privacy Policy]
```

### Spacing
- Gap between sections: `2` (16px)
- Gap between legal links:
  - Mobile: `1` (8px)
  - Desktop: `3` (24px)

### Alignment
- Mobile: Center-aligned
- Desktop: Space-between (copyright left, links right)

## Typography

All text uses:
- Variant: `subtitle2`
- Color: `secondary`

## Link Behavior

All links:
- Open in new tab (`target="_blank"`)
- Underline on hover
- Secondary color
- Inherit text alignment

## Responsive Breakpoints

| Breakpoint | Direction | Alignment | Text Alignment |
|------------|-----------|-----------|----------------|
| xs (mobile) | column | center | center |
| sm+ (desktop) | row | space-between | inherit |

## Usage Examples

### In Authentication Layout

```jsx
<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
  <Box sx={{ flexGrow: 1 }}>
    {/* Auth content */}
    <LoginForm />
  </Box>

  <Box sx={{ py: 3 }}>
    <AuthFooter />
  </Box>
</Box>
```

### Login Page

```jsx
<Grid container>
  <Grid item xs={12}>
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AuthLogin />
        </Grid>
        <Grid item xs={12}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper>
  </Grid>
</Grid>
```

### Register Page

```jsx
<Grid container>
  <Grid item xs={12}>
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <AuthRegister />
        </Grid>
        <Grid item xs={12}>
          <AuthFooter />
        </Grid>
      </Grid>
    </AuthWrapper>
  </Grid>
</Grid>
```

## Customization

To customize the footer content, edit the component directly:

### Change Copyright Text

```jsx
// In AuthFooter.jsx
<Typography variant="subtitle2" color="secondary">
  © {new Date().getFullYear()} Your Company Name
</Typography>
```

### Update Links

```jsx
// In AuthFooter.jsx
<Typography
  variant="subtitle2"
  color="secondary"
  component={Link}
  href="https://yoursite.com/terms"
  target="_blank"
  underline="hover"
>
  Terms and Conditions
</Typography>
```

### Add Additional Links

```jsx
<Stack direction={{ xs: 'column', sm: 'row' }} sx={{ gap: { xs: 1, sm: 3 } }}>
  <Typography variant="subtitle2" color="secondary" component={Link} href="/terms">
    Terms
  </Typography>
  <Typography variant="subtitle2" color="secondary" component={Link} href="/privacy">
    Privacy
  </Typography>
  <Typography variant="subtitle2" color="secondary" component={Link} href="/cookies">
    Cookies
  </Typography>
  <Typography variant="subtitle2" color="secondary" component={Link} href="/support">
    Support
  </Typography>
</Stack>
```

## Best Practices

1. **Content Updates:**
   - Update copyright year dynamically: `© ${new Date().getFullYear()}`
   - Replace placeholder links with your actual legal documents
   - Update company name and link

2. **Legal Compliance:**
   - Ensure Terms and Privacy links point to valid documents
   - Keep legal documents up-to-date
   - Consider adding GDPR/CCPA links if applicable

3. **Branding:**
   - Customize text to match your brand voice
   - Update "Made with love" to your preferred message
   - Add social media links if desired

4. **Accessibility:**
   - All links are keyboard accessible
   - Proper contrast with secondary color
   - Opens external links in new tab (user choice)

5. **Responsive Design:**
   - Test on mobile devices
   - Ensure text remains readable at all sizes
   - Verify link spacing works on small screens

## Related Components

- **AuthWrapper** (`src/sections/auth/AuthWrapper.jsx`): Wraps auth pages
- **AuthCard** (`src/sections/auth/AuthCard.jsx`): Auth form container
- **Auth Pages**: Login, Register (use this footer)

## Common Patterns

### Sticky Footer

```jsx
<Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
  <Box component="main" sx={{ flex: '1 0 auto' }}>
    {/* Page content */}
  </Box>
  <Box component="footer" sx={{ flexShrink: 0, py: 2 }}>
    <AuthFooter />
  </Box>
</Box>
```

### With Background

```jsx
<Box sx={{ bgcolor: 'background.default', py: 3, mt: 4 }}>
  <AuthFooter />
</Box>
```

### Centered Layout

```jsx
<Container maxWidth="sm">
  <Box sx={{ textAlign: 'center', py: 4 }}>
    <AuthFooter />
  </Box>
</Container>
```

## Notes

- Component is static with no props
- Uses Material-UI responsive utilities
- All links open in new tab for security
- Mobile-first responsive design
- Suitable only for authentication pages
- For main app footer, create a separate component
- Links currently point to CodedThemes and MUI - update for production use
