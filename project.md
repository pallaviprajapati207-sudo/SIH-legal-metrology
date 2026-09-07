# SIH 26034 - Smart Legal Metrology Compliance Checker

## 1. Project Identity

Project ID: SIH 26034

Project Title:
Software System to check compliance of Packaged Commodities under Legal Metrology (Packaged Commodities) Rules, 2011 by scanning products, images and labels.

Organization:
Ministry of Consumer Affairs, Food & Public Distribution

Department:
Department of Consumer Affairs (DoCA)

Theme:
Miscellaneous

Application Name:
Smart Legal Metrology Compliance Checker

Short Name:
SLM Checker

---

## 2. Project Objective

Build a professional web-based decision-support system that helps authorized enforcement officers screen packaged commodities by scanning product/package images and extracting label declarations using OCR and computer vision.

The system should:

1. Accept product/package images.
2. Detect and preprocess package/label regions.
3. Extract visible text using OCR.
4. Identify important declarations.
5. Determine which configured compliance requirements are applicable.
6. Check the extracted information against the configured requirements.
7. Highlight possible issues with visual evidence.
8. Allow an officer to review and correct OCR results.
9. Generate a final screening result.
10. Store inspection history.
11. Generate a professional inspection report.
12. Provide administrator tools for managing compliance rules.

The system is a decision-support/screening tool.

It must NOT claim to replace the final legal determination of an authorized Legal Metrology official.

---

# 3. Important Legal Accuracy Requirement

Legal compliance logic must be configuration-driven.

Do NOT hard-code invented:

- Rule numbers
- Penalties
- Legal thresholds
- Exemptions
- Mandatory declarations
- Character/font-size requirements
- Effective dates
- Applicability conditions

Every compliance rule must contain a verified official source/reference.

If a rule cannot confidently be applied:

Status = MANUAL REVIEW

The system must never assume that:

"OCR did not detect text" = "legal violation"

OCR confidence, image quality, applicability and rule confidence must be considered.

---

# 4. Official Legal Sources

Primary source:

Department of Consumer Affairs - Legal Metrology:
https://consumeraffairs.gov.in/pages/legal-metrology-act

Department of Consumer Affairs - Weight and Measures:
https://consumeraffairs.gov.in/pages/weight-and-measures

Official Packaged Commodities Rules / amendment repository:
Use the Department of Consumer Affairs official Legal Metrology pages.

The application must display official-source references inside the Admin Legal Reference section.

Before activating a legal rule, verify the current official source and applicability.

---

# 5. User Roles

## Role 1: Enforcement Officer

Can:

- Login
- View dashboard
- Start inspection
- Upload product images
- Use camera where supported
- Select/detect product category
- Run OCR
- View extracted declarations
- Review OCR
- Correct extracted values
- Confirm declarations
- View compliance checks
- View violations/warnings
- View evidence
- Add remarks
- Complete inspection
- Generate report
- View inspection history
- Search inspections

Cannot:

- Create or modify legal rules
- Manage administrator accounts
- Change system-wide compliance configuration

---

## Role 2: Administrator

Can:

- Login
- View administrator dashboard
- Manage compliance rules
- Create rules
- Edit rules
- Enable/disable rules
- Set effective dates
- Manage categories
- View audit logs
- Manage users
- View analytics
- View official legal references

Administrator actions must be logged.

---

# 6. Demo Login

Development/demo credentials:

Officer:
Email: officer@demo.com
Password: Demo@123

Administrator:
Email: admin@demo.com
Password: Admin@123

These are DEMO credentials only.

Production authentication must use secure password hashing and proper authentication.

---

# 7. Product Categories

The system should support:

1. Food / FMCG
2. Cosmetics / Personal Care
3. Household Products
4. Imported Packaged Commodity
5. Other

The system may suggest a category automatically, but the officer must be able to correct it.

---

# 8. Main Inspection Workflow

Login

↓

Dashboard

↓

Start New Inspection

↓

Upload / Capture Images

↓

Select Product Category

↓

Image Preprocessing

↓

Package / Label Detection

↓

OCR

↓

Text Extraction

↓

Declaration Extraction

↓

Applicable Requirement Detection

↓

Compliance Checks

↓

Visual Evidence Analysis

↓

Officer Review

↓

Final Screening Result

↓

Generate Report

↓

Save Inspection

↓

Inspection History / Analytics

---

# 9. Image Upload Requirements

Support:

- Drag and drop
- File selection
- Camera capture where browser/device supports it
- Multiple images

Suggested image views:

- Front
- Back
- Side
- Top
- Bottom
- Other

Supported common image formats:

- JPG
- JPEG
- PNG
- WEBP

The system must validate:

- File type
- File size
- Image readability

Poor quality images should result in:

MANUAL REVIEW

rather than automatically declaring a violation.

---

# 10. Processing Pipeline

Display a visual processing pipeline:

1. Upload
2. Preprocessing
3. Package Detection
4. OCR
5. Declaration Extraction
6. Applicable Requirements
7. Compliance
8. Evidence

Each stage should show:

- Pending
- Processing
- Completed
- Warning
- Failed

---

# 11. OCR / Declaration Extraction

Extract, where visible and applicable:

- Product name
- Common/generic product description
- Manufacturer
- Packer
- Importer
- Country of origin
- Net quantity
- MRP / retail sale price
- Manufacturing/packing date where applicable
- Best before / use by information where applicable
- Consumer care details
- Unit sale price where applicable
- Dimensions where applicable
- Other configured declarations

Each extracted field must have:

- Field name
- Detected value
- OCR confidence
- Source image
- Bounding box where available
- Review status

---

# 12. Declaration Status

Each declaration/check may have:

PASS

WARNING

FAIL

MANUAL REVIEW

Every status must have an explanation.

Example:

PASS
"Declaration detected with sufficient confidence."

WARNING
"Declaration detected but visual readability requires officer verification."

FAIL
"Configured requirement appears applicable and required information is confidently absent."

MANUAL REVIEW
"Image/OCR confidence is insufficient for automated determination."

---

# 13. Compliance Engine

The compliance engine must be configurable.

Each rule should contain:

- Rule ID
- Rule reference
- Rule title
- Rule description
- Product category
- Declaration/check type
- Validation logic
- Required condition
- Severity
- Official source
- Source URL/reference
- Effective date
- Expiry/end date if applicable
- Active/inactive status
- Last updated
- Created by
- Updated by

---

# 14. Compliance Check Types

Support configurable checks for:

- Presence
- Completeness
- Correctness
- Placement
- Readability
- MRP / retail sale price
- Net quantity
- Manufacturer/packer/importer information
- Country of origin where applicable
- Date declarations where applicable
- Consumer care details
- Unit sale price where applicable
- Product/category-specific requirements
- Imported product requirements
- E-commerce listing requirements where applicable

Do not activate a check unless its applicability and legal source are verified.

---

# 15. OCR Safety Logic

Important:

OCR absence is NOT automatically a violation.

Use logic similar to:

IF
    requirement is verified applicable
AND
    image quality is sufficient
AND
    OCR confidence is high
AND
    required declaration is confidently absent
THEN
    possible FAIL / violation

ELSE IF
    image quality is poor
OR
    OCR confidence is low
OR
    applicability is uncertain
THEN
    MANUAL REVIEW

The officer must always be able to override/correct the automated screening result.

---

# 16. Visual Evidence

For every possible issue, provide evidence.

Evidence may include:

- Original image
- Annotated image
- Bounding box
- Highlighted text region
- Detected declaration
- OCR confidence
- Explanation

Status visualization:

PASS:
Green

WARNING:
Yellow/Amber

FAIL:
Red

MANUAL REVIEW:
Blue

Allow:

- Zoom
- Pan
- Image switching
- Evidence download

---

# 17. Officer Review

Officer can:

- Edit OCR text
- Correct product information
- Confirm declaration present
- Mark false detection
- Add missing information
- Add remarks
- Upload additional evidence
- Change review status

Every manual change must create an audit log.

Audit log should record:

- User
- Timestamp
- Action
- Previous value
- New value
- Reason/remark where applicable

---

# 18. Final Inspection Result

Possible final results:

COMPLIANT

NON-COMPLIANT

REQUIRES MANUAL REVIEW

The final result must be based on the configured compliance checks.

A numeric score may be shown as a secondary visualization only.

A score must NEVER replace the legal/check-based result.

Show:

- Total applicable checks
- Passed
- Warnings
- Failed
- Manual review
- Evidence count
- Officer remarks

---

# 19. Dashboard

Dashboard should show:

- Total inspections
- Compliant
- Non-compliant
- Requires manual review
- Total violations
- Monthly inspections

Charts:

- Inspection status distribution
- Monthly inspection trend
- Category distribution
- Violation distribution

Recent inspections table:

- Inspection ID
- Product
- Category
- Date
- Status
- Violation count
- Reviewer

---

# 20. Inspection Repository

Provide:

Search

Filter

Sort

Filters:

- Date
- Category
- Status
- Violation
- Officer
- Product

Each inspection should open a detailed inspection page.

---

# 21. Reports

Generate:

- Inspection summary
- Product information
- Extracted declarations
- Applicable checks
- Pass/warning/fail/manual-review results
- Violations
- Evidence
- Officer remarks
- Audit information
- Official source references where relevant

Formats:

- PDF
- Editable report format where supported

Include disclaimer:

"This system provides automated screening and decision-support assistance. It does not replace the final determination, inspection, or enforcement decision of an authorized Legal Metrology official."

---

# 22. Admin Rule Management

Admin pages:

- Rules list
- Add rule
- Edit rule
- Rule details
- Activate/deactivate
- Effective dates
- Official source
- Applicability conditions
- Rule version/history

Never delete legal rules permanently.

Prefer:

Active / Inactive / Archived

with audit history.

---

# 23. Demo Mode

Provide three demo scenarios.

## Scenario 1 - Compliant

Product contains the configured required declarations clearly.

Expected:

COMPLIANT

## Scenario 2 - Missing Declaration

A configured applicable declaration is intentionally absent and image/OCR confidence is sufficient.

Expected:

NON-COMPLIANT or configured possible violation

## Scenario 3 - Poor Readability

Text exists but image quality/readability is insufficient.

Expected:

REQUIRES MANUAL REVIEW

The demo must clearly explain why each result occurred.

---

# 24. Optional E-Commerce Module

Optional feature:

Officer/Admin can analyze an e-commerce product listing.

Input:

- Product URL where permitted
- Listing screenshot
- Product images
- Listing text

Check only configured requirements that are legally applicable.

The module must not scrape websites in ways prohibited by their terms or technical restrictions.

If information is unavailable:

MANUAL REVIEW

---

# 25. Database Models

Use:

users

products

inspections

inspection_images

extracted_declarations

rules

compliance_checks

violations

evidence

reports

audit_logs

categories

rule_versions

---

# 26. Suggested Technology Architecture

Frontend:

React
TypeScript
Tailwind CSS
React Router

Backend:

Python
FastAPI
Pydantic
SQLAlchemy

Database:

SQLite for development/demo

PostgreSQL for production-ready deployment

OCR:

Create an OCR service abstraction.

The system should allow:

- Tesseract
- EasyOCR
- Cloud OCR/API if configured

Do not hard-code the entire application to one OCR provider.

Computer Vision:

OpenCV

PDF:

Use a reliable PDF generation library.

---

# 27. API Structure

Authentication:

POST /api/auth/login
POST /api/auth/logout
GET /api/auth/me

Dashboard:

GET /api/dashboard/stats

Scanning:

POST /api/scan
POST /api/scan/images

OCR:

POST /api/ocr/extract

Declarations:

GET /api/inspections/{id}/declarations
PATCH /api/declarations/{id}

Compliance:

POST /api/compliance/check
GET /api/inspections/{id}/checks

Inspections:

GET /api/inspections
GET /api/inspections/{id}
POST /api/inspections
PATCH /api/inspections/{id}

Violations:

GET /api/inspections/{id}/violations

Evidence:

GET /api/inspections/{id}/evidence

Reports:

POST /api/reports
GET /api/reports/{id}

Rules:

GET /api/rules
POST /api/rules
GET /api/rules/{id}
PATCH /api/rules/{id}

Audit:

GET /api/audit-logs

---

# 28. Security

Implement:

- Role-based access control
- Secure password hashing
- Protected routes
- Input validation
- File type validation
- File size limits
- Secure upload handling
- Audit logs
- Admin-only rule management
- No API keys in frontend code
- Environment variables for secrets
- Proper error handling

---

# 29. UX Requirements

The interface must be:

- Professional
- Clean
- Government/enterprise appropriate
- Modern
- Easy for officers
- Desktop-first
- Responsive
- Accessible

Do not create a flashy gaming-style interface.

Avoid excessive animations.

Important information must always be visible.

---

# 30. Landing Page

Landing page sections:

1. Hero
2. Problem
3. Solution
4. How it works
5. Key capabilities
6. Compliance workflow
7. Evidence-based inspection
8. Dashboard preview
9. Demo scenarios
10. Technology
11. Legal reference
12. Disclaimer
13. Footer

Primary CTA:

"Start Inspection"

Secondary CTA:

"View Demo"

---

# 31. Acceptance Criteria

The project is considered successful when:

1. User can login.
2. Role-based navigation works.
3. Officer can create an inspection.
4. Officer can upload multiple images.
5. OCR/extraction pipeline works or clearly enters demo/manual mode.
6. Declarations are displayed with confidence.
7. Compliance engine applies configured rules.
8. System distinguishes PASS/WARNING/FAIL/MANUAL REVIEW.
9. Evidence is visible.
10. Officer can review and correct results.
11. Final result is generated.
12. Inspection is saved.
13. History can be searched.
14. Dashboard statistics update.
15. PDF report can be generated.
16. Admin can manage rules.
17. Audit trail works.
18. Legal disclaimer is visible.
19. No unverified legal claims are presented as fact.

---

# 32. Development Principle

Build a REAL functional application.

Do not create a static mockup.

Do not fill important screens with fake hard-coded data unless explicitly marked as demo data.

Use a proper database and API architecture.

Use demo seed data only for demonstration.

Build the application incrementally according to roadmap.md.