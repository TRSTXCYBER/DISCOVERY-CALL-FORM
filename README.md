# Discovery Call Form

A standalone multi-step Discovery Call intake form built with **React 19**,
**Vite**, **Tailwind CSS v4**, and **framer-motion**. Frontend only — ready to
be wired to Supabase, GoHighLevel, or a webhook later.

## Stack

- React 19 + Vite 6
- Tailwind CSS v4 (via `@tailwindcss/vite`, no config file needed)
- framer-motion for subtle transitions
- No UI component libraries (no shadcn, no Radix)

## Getting started

```bash
npm install
npm run dev
```

Then open the URL printed by Vite (typically `http://localhost:5173`).

### Build

```bash
npm run build
npm run preview
```

## Logo

Place your logo file inside the `contents/` folder. Vite is configured to
serve that folder as the public directory, so any of the following filenames
will be picked up automatically by the `Logo` component:

- `contents/logo.svg`
- `contents/logo.png`
- `contents/logo.jpg`
- `contents/logo.jpeg`
- `contents/logo.webp`

If no logo is present, a minimal placeholder mark is rendered. To change the
supported filenames, edit `src/components/Logo.jsx`.

## Project structure

```
contents/                      # drop logo.* here
src/
  App.jsx                      # screen flow + form state
  main.jsx
  index.css                    # Tailwind v4 + theme tokens
  data/
    formConfig.js              # sections, fields, validation
  components/
    Landing.jsx
    Progress.jsx
    FormSection.jsx
    Review.jsx
    Confirmation.jsx
    Button.jsx
    ErrorMessage.jsx
    Logo.jsx
    fields/
      FieldShell.jsx
      TextField.jsx
      PhoneField.jsx
      SelectField.jsx
      RadioGroup.jsx
      TextArea.jsx
```

## Screen flow

1. Landing
2. Contact Information
3. Company Snapshot
4. IT Setup
5. Qualification
6. Cyber / Risk Snapshot
7. Intent / Plan
8. Review / Submit
9. Confirmation

## Validation

- All fields required except `company_website` and `technology_concern`.
- Errors only appear **after** the user tries to continue/submit.
- Dropdowns require a choice other than `Please Select`.
- `company_website` uses a loose pattern (domain-like, optional `http(s)://`).
- `phone` only requires non-empty input.

See `src/data/formConfig.js` for the full schema and to add/edit fields.

## Hooking up a backend later

The placeholder submit handler lives at the top of `src/App.jsx`:

```js
async function submitDiscoveryCall(payload) {
  console.log('[DiscoveryCall] submit payload:', payload)
  await new Promise((r) => setTimeout(r, 700))
  return { ok: true }
}
```

Replace it with a `fetch` to your webhook, a Supabase insert, or a GoHighLevel
API call. The `payload` already matches the field IDs defined in the form
config.

## Accessibility

- Semantic `<label>`/`<input>` pairing via `htmlFor`/`id`
- `aria-invalid` and `aria-describedby` on inputs with errors/helpers
- Visible focus rings on all interactive elements
- Radio groups use `role="radiogroup"` and real `<input type="radio">` elements

## Responsive

Mobile-first layout tested around 375 / 430 / 768 / 1024 / 1440 px. The form
uses a comfortable max width on desktop (~42rem) rather than stretching.
# DISCOVERY-CALL-FORM
# DEAL-REGISTRATION-FORM
