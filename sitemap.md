# Sitemap - Smart Legal Metrology Compliance Checker

## 1. Public Routes

/
/ 
Landing Page

/login

Login Page

/legal-reference

Legal Metrology Reference

/demo

Demo Introduction / Demo Scenarios

---

# 2. Officer Routes

/dashboard

Officer Dashboard

/scan

Start New Inspection

/scan/upload

Upload / Capture Product Images

/scan/processing

Processing Pipeline

/scan/declarations

Extracted Declarations

/scan/compliance

Compliance Checks

/scan/evidence

Evidence Viewer

/scan/review

Officer Review

/scan/result

Final Inspection Result

/inspections

Inspection Repository

/inspections/:id

Inspection Details

/inspections/:id/report

Inspection Report

/inspections/:id/evidence

Inspection Evidence

/ecommerce

E-Commerce Listing Screening

/profile

Officer Profile

---

# 3. Administrator Routes

/admin

Administrator Dashboard

/admin/rules

Compliance Rules

/admin/rules/new

Create Rule

/admin/rules/:id

Rule Details

/admin/rules/:id/edit

Edit Rule

/admin/rule-versions

Rule Version History

/admin/users

User Management

/admin/audit-logs

Audit Logs

/admin/analytics

System Analytics

/admin/legal-reference

Official Legal References

/admin/settings

System Settings

---

# 4. Navigation Structure

## Public Header

Logo

Home

How It Works

Legal Reference

Demo

Login

---

# 5. Officer Sidebar

Dashboard

New Inspection

Inspection History

E-Commerce Screening

Reports

Profile

Logout

---

# 6. Admin Sidebar

Dashboard

Compliance Rules

Rule Versions

Users

Audit Logs

Analytics

Legal References

Settings

Logout

---

# 7. Main Inspection Navigation

Start:

/scan

↓

Upload:

/scan/upload

↓

Processing:

/scan/processing

↓

Declarations:

/scan/declarations

↓

Compliance:

/scan/compliance

↓

Evidence:

/scan/evidence

↓

Review:

/scan/review

↓

Result:

/scan/result

↓

Report:

/inspections/:id/report

↓

History:

/inspections

---

# 8. Route Protection

Public users:

Can access:

/
/login
/legal-reference
/demo

Officer:

Can access all officer routes.

Admin:

Can access admin routes.

Admin may also access officer inspection functionality if configured.

Unauthenticated user trying to access protected page:

Redirect to:

/login

Officer trying to access admin-only route:

Redirect to:

/dashboard

Admin-only pages must never be accessible through frontend navigation alone.

Backend authorization must also be enforced.

---

# 9. Redirect Rules

After successful officer login:

/dashboard

After successful admin login:

/admin

After creating a new inspection:

/scan/upload

After upload:

/scan/processing

After OCR:

/scan/declarations

After compliance:

/scan/compliance

After evidence:

/scan/evidence

After officer review:

/scan/result

After saving final result:

/inspections/:id

After logout:

/login

After unauthorized access:

/login

After unknown route:

/404

---

# 10. Page-to-Page Connections

| Current Page | Action | Destination |
|---|---|---|
| Landing | Start Inspection | Login or Dashboard |
| Landing | View Demo | Demo |
| Landing | Legal Reference | Legal Reference |
| Login | Officer Login | Dashboard |
| Login | Admin Login | Admin Dashboard |
| Dashboard | New Inspection | Scan |
| Dashboard | Recent Inspection | Inspection Details |
| Scan | Continue | Upload |
| Upload | Process | Processing |
| Processing | Continue | Declarations |
| Declarations | Continue | Compliance |
| Compliance | View Evidence | Evidence |
| Evidence | Continue | Review |
| Review | Complete Review | Result |
| Result | Save Inspection | Inspection Details |
| Result | Generate Report | Report |
| Inspection History | Select Inspection | Inspection Details |
| Inspection Details | View Report | Report |
| Admin Dashboard | Rules | Rules |
| Rules | Add Rule | Create Rule |
| Rules | Edit | Edit Rule |
| Admin | Audit Logs | Audit Logs |

---

# 11. Breadcrumbs

Inspection:

Dashboard
>
New Inspection
>
Upload
>
Processing
>
Declarations
>
Compliance
>
Evidence
>
Review
>
Result

Admin:

Admin Dashboard
>
Compliance Rules
>
Rule Details

---

# 12. Navigation Principle

Do not create disconnected pages.

Every major page must have:

- Back action
- Breadcrumb
- Primary next action
- Relevant navigation
- Clear current status

Browser refresh must not lose the inspection.

Inspection ID should be preserved throughout the workflow.

---

# 13. Error Routes

/404

Not Found

/403

Access Denied

/500

Something Went Wrong

All errors should provide a clear action:

"Go to Dashboard"
