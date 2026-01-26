# Deprecation Audit: TotalAudioPromo Dashboard & Pricing Update

**Date:** 2026-01-26
**Status:** In Progress
**Repo:** `totalaudiopromo.com` (Marketing Site)

## 1. Inventory & Contradictions

### A. Route Inventory (Marketing Site)

- **Home:** `src/pages/index.tsx`
- **Pricing:** `src/pages/pricing.tsx`
- **Legal:** `src/pages/privacy.tsx`, `src/pages/terms.tsx`, `src/pages/gdpr.tsx`
- **API:** `src/pages/api/checkout.ts` (Stripe bundle checkout)

### B. Dashboard References (To be deprecated/replaced)

The marketing site links to `https://dashboard.totalaudiopromo.com` in several places. The "Dashboard" app code is **NOT** present in this repository, so changes are limited to the marketing site's pointers.

**Locations:**

1.  **Nav (Home & Pricing):** "Dashboard" button linking to `https://dashboard.totalaudiopromo.com`.
2.  **Footer (Home):** "Dashboard" link under "Products".
3.  **Pricing Page `Start for Free` CTA:** Links to dashboard.
4.  **Pricing Page `Get All Access` CTA:** Links to dashboard.
5.  **Pricing Page `Contact Us` CTA:** Links to dashboard.

### C. Pricing Contradictions

| Item             | Current Code       | Desired State                                                              |
| :--------------- | :----------------- | :------------------------------------------------------------------------- |
| **Tier 1 Name**  | "Starter"          | "Free”                                                                     |
| **Tier 1 Price** | £5                 | Free (£0)                                                                  |
| **Tier 2 Name**  | "Professional"     | "Pro"                                                                      |
| **Tier 2 Price** | £19                | £19 (Match)                                                                |
| **Tier 3 Name**  | "Agency"           | "Agency" (Match)                                                           |
| **Tier 3 Price** | £79                | £79 (Match)                                                                |
| **Buttons**      | Link to Dashboard  | Link to `https://intel.totalaudiopromo.com/pricing?source=totalaudiopromo` |
| **Auth/Login**   | "Dashboard" in Nav | "Account" -> `https://intel.totalaudiopromo.com/signin?returnTo=...`       |

### D. "Audio Intel" Terminology

- "Intel" is largely used.
- "Intel Pro" used in `pricing.tsx`.
- "Audio Intel" found in Meta tags (Home). Note: User requested to replace user-facing text, SEO meta copy is exempt.

## 2. Risk Assessment

- **Dashboard App Access:** The dashboard application code is not in this repo. I cannot implement the "shim" (redirect logic) inside the dashboard app provided in the instructions. This is a blocked step or requires manual ops adjustment outside this codebase.
- **Billing/Checkout:** `src/pages/api/checkout.ts` handles "bundle" checkout. If we replace the buttons with links to Intel Pricing, this API endpoint becomes orphaned. We should ensure the Intel pricing page handles these subscriptions.
- **SEO:** Changing "Starter" to "Free" is a positive change. Removing "Dashboard" from nav might affect users looking for it, but "Account" is a standard replacement.

## 3. Proposed Changes

### A. Chore (Audit)

- Created this document.

### B. Fix (Marketing): Pricing + CTAs

- **`src/pages/pricing.tsx`**:
  - Update `BASE_TIER_PRICING`: Set `starter` to 0.
  - Rename "Starter" to "Free".
  - Rename "Professional" to "Pro".
  - Replace `handleBundleCheckout` usages and CTA buttons with direct links to `https://intel.totalaudiopromo.com/pricing?source=totalaudiopromo`.
  - Update Pricing Cards text to match new "Studio Calm" direction (if needed) or just the specific copy changes.
  - Remove "Dashboard" nav link, replace with "Account" (`https://intel.totalaudiopromo.com/signin`).

- **`src/pages/index.tsx`**:
  - Update Pricing section (it duplicates the pricing logic somewhat visually).
  - Ensure pricing values match new structure (£5 -> Free).
  - Update CTAs to point to Intel pricing.

### C. Fix (Marketing): Remove "Dashboard" from Nav/Footer

- **`src/pages/index.tsx`**:
  - Update Footer: Remove "Dashboard" link.
  - Update Nav: Replace "Dashboard" with "Account" -> `https://intel.totalaudiopromo.com/signin`.

### D. Fix (Auth-Shim) - BLOCKED

- Cannot modify dashboard app behavior. Will skip this step or add a note in `src` if applicable.

### E. Chore (Deprecation)

- Add comments in `src/pages/api/checkout.ts` marking it as deprecated if we stop using it.
