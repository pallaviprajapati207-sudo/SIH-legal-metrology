# Roadmap - Smart Legal Metrology Compliance Checker

IMPORTANT:

Execute phases ONE BY ONE.

Do not attempt to build the entire project in one prompt.

After completing a phase:

1. Test it.
2. Verify acceptance criteria.
3. Fix errors.
4. Only then continue to the next phase.

---

# PHASE 0 - Planning & Legal Verification

## Goal

Understand the complete project architecture before coding.

## Tasks

- Read project.md
- Read sitemap.md
- Read theme.md
- Read roadmap.md
- Verify official Legal Metrology sources
- Define database structure
- Define API structure
- Define frontend route structure
- Define roles

## Deliverable

Architecture plan.

## Acceptance

The AI builder must confirm:

- Routes understood
- Roles understood
- Database understood
- Compliance engine understood
- Legal safety rules understood

No application coding yet.

---

# PHASE 1 - Project Foundation

## Goal

Create the real application structure.

## Tasks

Frontend:

- React
- TypeScript
- Tailwind
- Router
- Layout
- Header
- Sidebar
- Basic responsive structure

Backend:

- FastAPI
- Pydantic
- SQLAlchemy
- Database connection

Create:

- users
- inspections
- products
- rules
- audit_logs

## Acceptance

- Application runs
- Backend runs
- Frontend connects to backend
- Database works
- Routes work
- No static-only architecture

---

# PHASE 2 - Theme & Landing Page

## Goal

Implement the visual identity.

## Tasks

- Apply colors from theme.md
- Apply typography
- Create header
- Create hero
- Create feature sections
- Create workflow
- Create CTA
- Create footer
- Add generated images

## Acceptance

Landing page looks professional.

All navigation links work.

Responsive layout works.

---

# PHASE 3 - Authentication & RBAC

## Goal

Implement real authentication.

## Tasks

- Login API
- Password hashing
- Session/token handling
- Officer role
- Admin role
- Protected routes
- Logout
- Current user endpoint

## Demo

Officer:
officer@demo.com
Demo@123

Admin:
admin@demo.com
Admin@123

## Acceptance

Officer cannot access admin-only functionality.

Admin can access admin pages.

Unauthenticated users are redirected to login.

---

# PHASE 4 - Officer Dashboard

## Goal

Build functional officer dashboard.

## Tasks

Create:

- Total inspections
- Compliant
- Non-compliant
- Manual review
- Violations
- Monthly chart
- Category chart
- Recent inspections

Data must come from backend/database.

## Acceptance

Creating an inspection changes dashboard statistics.

No important statistic is permanently hard-coded.

---

# PHASE 5 - Scan & Upload

## Goal

Create the inspection creation workflow.

## Tasks

- New inspection
- Product category
- Upload images
- Multiple images
- Image preview
- Delete/reorder image
- Image metadata
- Validation
- Upload progress

## Categories

- Food/FMCG
- Cosmetics/Personal Care
- Household Products
- Imported Packaged Commodity
- Other

## Acceptance

Officer can create inspection and upload multiple images.

---

# PHASE 6 - OCR Pipeline

## Goal

Implement OCR architecture.

## Tasks

Create OCR service abstraction.

Input:

Product images

Output:

OCR text

For every text block:

- text
- confidence
- bounding box
- image ID

Implement image preprocessing.

If OCR service is unavailable:

Use a clearly marked DEMO OCR mode.

Do not pretend demo data is real OCR.

## Acceptance

OCR output is visible.

Confidence is shown.

Low-confidence text is flagged.

---

# PHASE 7 - Declaration Extraction

## Goal

Convert OCR text into structured declarations.

## Fields

- Product name
- Manufacturer
- Packer
- Importer
- Country of origin
- Net quantity
- MRP
- Date information
- Consumer care
- Unit sale price
- Dimensions where applicable

Each field:

- Value
- Confidence
- Source image
- Bounding box
- Status

## Acceptance

Officer can edit extracted values.

Changes are saved.

---

# PHASE 8 - Compliance Rule Engine

## Goal

Implement configurable rule evaluation.

## Tasks

Create rule model.

Each rule contains:

- Rule ID
- Reference
- Title
- Description
- Category
- Declaration
- Validation
- Required condition
- Severity
- Source
- Effective date
- Status

Implement:

- applicability
- validation
- confidence handling
- manual review

## Critical Rule

Do NOT equate OCR absence with violation.

## Acceptance

Configured rules produce:

PASS

WARNING

FAIL

MANUAL REVIEW

with explanation.

---

# PHASE 9 - Evidence & Computer Vision

## Goal

Make results explainable.

## Tasks

- Original image
- Annotated image
- Bounding boxes
- Text highlighting
- Evidence list
- Confidence
- Zoom
- Pan

## Acceptance

Every important issue has evidence or a clear reason why evidence is unavailable.

---

# PHASE 10 - Officer Review

## Goal

Allow human verification.

## Tasks

Officer can:

- Edit OCR
- Correct declarations
- Confirm declaration
- Mark false detection
- Add missing data
- Add remarks
- Upload evidence
- Confirm review

Create audit logs.

## Acceptance

Every manual change is recorded.

---

# PHASE 11 - Final Result

## Goal

Create final screening result.

Possible:

COMPLIANT

NON-COMPLIANT

REQUIRES MANUAL REVIEW

Show:

- Applicable checks
- Passed
- Warnings
- Failed
- Manual review
- Violations
- Evidence

## Acceptance

Final status is explainable.

Score cannot override legal/check result.

---

# PHASE 12 - Reports

## Goal

Generate professional reports.

## Tasks

- Report page
- PDF generation
- Inspection summary
- Product data
- Declarations
- Compliance checks
- Violations
- Evidence
- Officer remarks
- Disclaimer

## Acceptance

PDF opens correctly.

Report contains inspection ID and date.

Report clearly states that it is decision-support/screening.

---

# PHASE 13 - Inspection Repository

## Goal

Create inspection history.

## Tasks

Search

Filter

Sort

Pagination

Inspection detail

Report access

Evidence access

Filters:

- Date
- Category
- Status
- Violation
- Officer

## Acceptance

Saved inspections are searchable.

---

# PHASE 14 - Admin Panel

## Goal

Create administrator functionality.

## Pages

- Admin Dashboard
- Rules
- Create Rule
- Edit Rule
- Rule Version History
- Users
- Audit Logs
- Analytics
- Legal References

## Acceptance

Admin can manage rules.

Every change is audited.

Officer cannot edit legal rules.

---

# PHASE 15 - E-Commerce Module

## Goal

Optional e-commerce compliance screening.

## Tasks

- Listing input
- Screenshot upload
- Listing data extraction
- Applicable checks
- Manual review

If information is unavailable:

MANUAL REVIEW

Do not invent missing information.

## Acceptance

Module clearly indicates when evidence is insufficient.

---

# PHASE 16 - Demo Scenarios

## Goal

Create reliable SIH demonstration.

Scenario 1:

COMPLIANT

Scenario 2:

MISSING DECLARATION

Scenario 3:

POOR READABILITY

## Acceptance

All three scenarios produce explainable results.

Demo data is clearly identified.

---

# PHASE 17 - Testing

## Functional Testing

Test:

- Login
- Logout
- RBAC
- Upload
- OCR
- Extraction
- Compliance
- Evidence
- Review
- Reports
- History
- Admin rules

## Edge Cases

Test:

- Empty image
- Blurry image
- Low OCR confidence
- Multiple images
- Missing declaration
- Incorrect extraction
- Unsupported file
- Large file
- Unauthorized admin route
- Network error

---

# PHASE 18 - Security

## Tasks

- Password hashing
- Protected APIs
- RBAC backend enforcement
- Input validation
- Upload validation
- Secret management
- Error handling
- Audit logging

No secrets in frontend code.

---

# PHASE 19 - Accessibility & UI Polish

## Tasks

- Keyboard navigation
- Focus states
- Contrast
- Labels
- Responsive design
- Mobile testing
- Empty states
- Loading states
- Error states

---

# PHASE 20 - Final SIH Demo Preparation

## Demo Flow

1. Open website
2. Login
3. Dashboard
4. Start inspection
5. Upload product images
6. Show processing
7. Show OCR
8. Show declarations
9. Show compliance checks
10. Show evidence
11. Officer review
12. Final result
13. Generate PDF
14. Open inspection history
15. Show dashboard analytics
16. Show admin rule management
17. Show legal references

## Final Acceptance

The entire workflow must work from:

Login

to

Final Report

without broken links.

---

# Development Rule

NEVER skip acceptance testing.

NEVER implement all phases simultaneously.

NEVER invent legal requirements.

NEVER present demo data as real inspection data.

NEVER claim automated screening is a final legal determination.

Always preserve completed functionality when implementing the next phase.
