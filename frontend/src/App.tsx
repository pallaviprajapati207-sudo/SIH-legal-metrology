import React, { useEffect, useState } from "react";
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

import {
  ScanLine,
  ShieldCheck,
  FileSearch,
  Image as ImageIcon,
  ClipboardCheck,
  FileText,
  LayoutDashboard,
  Package,
  History,
  ShoppingBag,
  User,
  LogOut,
  Settings,
  Users,
  BarChart3,
  Scale,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Loader2,
} from "lucide-react";

/* =========================================================
   API CONFIGURATION
========================================================= */

const API_URL = "https://psychic-lamp-7vq5gjx45jq4crvp-8000.app.github.dev";
/* =========================================================
   API HELPERS
========================================================= */

async function createInspection() {
  const response = await fetch(`${API_URL}/api/inspections`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      business_name: "Demo Business",
      inspector_name: "Demo Officer",
      product_category: "Packaged Commodity",
      location: "India",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to create inspection");
  }

  return response.json();
}

async function uploadDocument(
  inspectionId: string,
  file: File
) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(
    `${API_URL}/api/inspections/${inspectionId}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Upload failed");
  }

  return response.json();
}

async function processInspection(inspectionId: string) {
  const response = await fetch(
    `${API_URL}/api/inspections/${inspectionId}/process`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Processing failed");
  }

  return response.json();
}

async function getInspection(inspectionId: string) {
  const response = await fetch(
    `${API_URL}/api/inspections/${inspectionId}`
  );

  if (!response.ok) {
    throw new Error("Inspection not found");
  }

  return response.json();
}

async function getAllInspections() {
  const response = await fetch(
    `${API_URL}/api/inspections`
  );

  if (!response.ok) {
    throw new Error("Could not load inspections");
  }

  return response.json();
}

async function checkCompliance(inspectionId: string) {
  const response = await fetch(
    `${API_URL}/api/inspections/${inspectionId}/compliance`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    throw new Error("Compliance check failed");
  }

  return response.json();
}

async function getEvidence(inspectionId: string) {
  const response = await fetch(
    `${API_URL}/api/inspections/${inspectionId}/evidence`
  );

  if (!response.ok) {
    throw new Error("Could not load evidence");
  }

  return response.json();
}

async function submitReview(
  inspectionId: string,
  decision: string,
  comments: string
) {
  const response = await fetch(
    `${API_URL}/api/inspections/${inspectionId}/review`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        decision,
        comments,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Review submission failed");
  }

  return response.json();
}

/* =========================================================
   LANDING PAGE DATA
========================================================= */

const features = [
  {
    icon: ScanLine,
    title: "AI-assisted OCR",
    text: "Extract visible declarations from product labels.",
  },
  {
    icon: FileSearch,
    title: "Declaration Extraction",
    text: "Identify key packaged commodity declarations.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Engine",
    text: "Evaluate configured compliance requirements.",
  },
  {
    icon: ImageIcon,
    title: "Visual Evidence",
    text: "Review OCR regions and supporting evidence.",
  },
  {
    icon: ClipboardCheck,
    title: "Officer Review",
    text: "Allow human review before finalization.",
  },
  {
    icon: FileText,
    title: "Inspection Reports",
    text: "Generate structured inspection summaries.",
  },
];

const steps = [
  "Scan",
  "Extract",
  "Check",
  "Review",
  "Report",
];

/* =========================================================
   HEADER
========================================================= */

function Header() {
  return (
    <header className="header">
      <Link className="brand" to="/">
        <div className="logo">
          <ScanLine size={22} />
        </div>
        <span>LegalMetry</span>
      </Link>

      <nav>
        <a href="/#how">How It Works</a>
        <Link to="/legal-reference">Legal Reference</Link>
        <Link to="/demo">Demo</Link>
        <Link to="/login">Login</Link>

        <Link
          className="btn primary small"
          to="/scan"
        >
          Start Inspection
        </Link>
      </nav>
    </header>
  );
}

/* =========================================================
   LANDING
========================================================= */

function Landing() {
  return (
    <>
      <Header />

      <main>
        <section className="hero">
          <div className="hero-text">
            <div className="eyebrow">
              AI-ASSISTED INSPECTION PLATFORM
            </div>

            <h1>
              Smart Compliance Screening for Packaged Commodities
            </h1>

            <p>
              Scan product labels, extract declarations,
              evaluate configured compliance requirements,
              and review evidence through one intelligent
              inspection workflow.
            </p>

            <div className="hero-actions">
              <Link
                className="btn primary"
                to="/scan"
              >
                Start Inspection
                <ArrowRight size={18} />
              </Link>

              <Link
                className="btn secondary"
                to="/demo"
              >
                Explore Demo
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            <div className="scan-card">
              <div className="scan-top">
                <Package size={30} />
                <span>LIVE DEMO</span>
              </div>

              <div className="package-box">
                <ScanLine size={70} />
                <p>Packaged Product</p>
              </div>

              <div className="scan-row">
                <span>Net Quantity</span>
                <b className="pass">PASS</b>
              </div>

              <div className="scan-row">
                <span>MRP Declaration</span>
                <b className="pass">PASS</b>
              </div>

              <div className="scan-row">
                <span>Manufacturer Details</span>
                <b className="review">
                  REVIEW
                </b>
              </div>
            </div>
          </div>
        </section>

        <section
          id="how"
          className="section"
        >
          <div className="section-heading">
            <span className="eyebrow">
              INSPECTION WORKFLOW
            </span>

            <h2>
              From product scan to inspection report
            </h2>
          </div>

          <div className="steps">
            {steps.map((step, index) => (
              <div
                className="step"
                key={step}
              >
                <div className="step-number">
                  0{index + 1}
                </div>

                <h3>{step}</h3>

                <p>
                  {index === 0 &&
                    "Capture or upload packaged commodity images."}

                  {index === 1 &&
                    "Extract declarations using OCR."}

                  {index === 2 &&
                    "Evaluate configured compliance checks."}

                  {index === 3 &&
                    "Review evidence and findings."}

                  {index === 4 &&
                    "Save the final inspection result."}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="section light">
          <div className="section-heading">
            <span className="eyebrow">
              CORE CAPABILITIES
            </span>

            <h2>
              One connected compliance workflow
            </h2>
          </div>

          <div className="feature-grid">
            {features.map(
              ({
                icon: Icon,
                title,
                text,
              }) => (
                <div
                  className="feature-card"
                  key={title}
                >
                  <div className="icon-box">
                    <Icon size={24} />
                  </div>

                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="cta">
          <div>
            <span className="eyebrow">
              READY TO BEGIN
            </span>

            <h2>
              Start a new inspection workflow
            </h2>
          </div>

          <Link
            className="btn white"
            to="/scan"
          >
            Start Inspection
            <ArrowRight size={18} />
          </Link>
        </section>
      </main>

      <footer>
        <span>© 2026 LegalMetry</span>
        <span>
          Smart Legal Metrology Compliance Checker
        </span>
      </footer>
    </>
  );
}

/* =========================================================
   LOGIN
========================================================= */

function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-brand">
        <Link
          className="brand white-brand"
          to="/"
        >
          <div className="logo">
            <ScanLine size={22} />
          </div>

          <span>LegalMetry</span>
        </Link>

        <div>
          <span className="eyebrow light-text">
            SMART INSPECTION
          </span>

          <h1>
            Evidence-driven packaged commodity
            screening.
          </h1>

          <p>
            A connected workflow for scanning,
            reviewing and documenting compliance
            findings.
          </p>
        </div>
      </div>

      <div className="login-side">
        <form
          className="login-card"
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >
          <h2>Welcome back</h2>

          <p>
            Sign in to access the inspection
            platform.
          </p>

          <label>Email</label>

          <input
            type="email"
            placeholder="officer@example.com"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            required
          />

          <div className="remember">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
          </div>

          <button
            className="btn primary full"
            type="submit"
          >
            Login
          </button>

          <button
            type="button"
            className="demo-login"
            onClick={() => navigate("/admin")}
          >
            Open Admin Demo
          </button>

          <p className="demo-note">
            Demo authentication for prototype only.
          </p>
        </form>
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD LAYOUT
========================================================= */

const menu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    icon: ScanLine,
    label: "New Inspection",
    path: "/scan",
  },
  {
    icon: History,
    label: "Inspection History",
    path: "/inspections",
  },
  {
    icon: ShoppingBag,
    label: "E-Commerce Screening",
    path: "/ecommerce",
  },
  {
    icon: User,
    label: "Profile",
    path: "/profile",
  },
];

function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const location = useLocation();

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <Link
          className="brand white-brand"
          to="/dashboard"
        >
          <div className="logo">
            <ScanLine size={20} />
          </div>

          <span>LegalMetry</span>
        </Link>

        <div className="side-menu">
          {menu.map(
            ({
              icon: Icon,
              label,
              path,
            }) => (
              <Link
                key={path}
                to={path}
                className={
                  location.pathname === path
                    ? "active"
                    : ""
                }
              >
                <Icon size={19} />
                {label}
              </Link>
            )
          )}
        </div>

        <Link
          className="logout"
          to="/login"
        >
          <LogOut size={19} />
          Logout
        </Link>
      </aside>

      <div className="dashboard-content">
        {children}
      </div>
    </div>
  );
}

/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard() {
  const navigate = useNavigate();

  const [inspections, setInspections] =
    useState<any[]>([]);

  useEffect(() => {
    getAllInspections()
      .then(setInspections)
      .catch(() => {});
  }, []);

  const total = inspections.length;
  const review = inspections.filter(
    (x) =>
      x.compliance?.overall_status ===
      "MANUAL_REVIEW"
  ).length;

  const compliant = inspections.filter(
    (x) =>
      x.compliance?.overall_status === "PASS"
  ).length;

  const failed = inspections.filter(
    (x) =>
      x.compliance?.overall_status === "FAIL"
  ).length;

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <span className="eyebrow">
            OFFICER WORKSPACE
          </span>

          <h1>Inspection Dashboard</h1>

          <p>
            Live data from the inspection backend.
          </p>
        </div>

        <button
          className="btn primary"
          onClick={() => navigate("/scan")}
        >
          <ScanLine size={18} />
          New Inspection
        </button>
      </div>

      <div className="stats">
        <Stat
          title="Total Inspections"
          value={String(total)}
          icon={<ClipboardCheck />}
        />

        <Stat
          title="Compliant"
          value={String(compliant)}
          icon={<CheckCircle2 />}
          type="pass"
        />

        <Stat
          title="Non-compliant"
          value={String(failed)}
          icon={<XCircle />}
          type="fail"
        />

        <Stat
          title="Manual Review"
          value={String(review)}
          icon={<AlertTriangle />}
          type="review"
        />
      </div>

      <div className="content-card">
        <div className="card-title">
          <div>
            <h2>Recent Inspections</h2>
            <p>Backend Data</p>
          </div>

          <Link to="/inspections">
            View All
          </Link>
        </div>

        {inspections.length === 0 ? (
          <div className="empty">
            <ClipboardCheck size={40} />

            <h3>
              No inspections yet
            </h3>

            <p>
              Start your first inspection.
            </p>

            <button
              className="btn primary"
              onClick={() =>
                navigate("/scan")
              }
            >
              New Inspection
            </button>
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Inspection ID</th>
                  <th>Business</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {inspections
                  .slice(-5)
                  .reverse()
                  .map((item) => (
                    <tr key={item.id}>
                      <td>
                        #{item.id.slice(0, 8)}
                      </td>

                      <td>
                        {item.business_name}
                      </td>

                      <td>
                        <span className="badge review">
                          {item.status}
                        </span>
                      </td>

                      <td>
                        {new Date(
                          item.created_at
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

function Stat({
  title,
  value,
  icon,
  type = "",
}: any) {
  return (
    <div
      className={`stat-card ${type}`}
    >
      <div className="stat-icon">
        {icon}
      </div>

      <p>{title}</p>

      <h2>{value}</h2>

      <span>Live Data</span>
    </div>
  );
}

/* =========================================================
   BADGE
========================================================= */

function Badge({
  type,
}: {
  type: string;
}) {
  const label: any = {
    pass: "PASS",
    fail: "FAIL",
    review: "MANUAL REVIEW",
  };

  return (
    <span
      className={`badge ${type}`}
    >
      {label[type] || type}
    </span>
  );
}

/* =========================================================
   SCAN / UPLOAD
========================================================= */

function ScanPage() {
  const navigate = useNavigate();

  const [file, setFile] =
    useState<File | null>(null);

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleProcess() {
    if (!file) {
      setError(
        "Please select a product image first."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      const inspection =
        await createInspection();

      await uploadDocument(
        inspection.id,
        file
      );

      localStorage.setItem(
        "inspectionId",
        inspection.id
      );

      navigate(
        "/scan/processing"
      );
    } catch (err) {
      console.error(err);

      setError(
        "Could not connect to backend. Please make sure the backend is running."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="breadcrumb">
        Dashboard &gt; New Inspection
      </div>

      <div className="page-header">
        <div>
          <h1>
            Start New Inspection
          </h1>

          <p>
            Create and process a packaged
            commodity inspection.
          </p>
        </div>
      </div>

      <div className="workflow-bar">
        {[
          "Upload",
          "Processing",
          "Declarations",
          "Compliance",
          "Evidence",
          "Review",
          "Result",
        ].map((x, i) => (
          <div
            className={
              i === 0
                ? "current"
                : ""
            }
            key={x}
          >
            <span>{i + 1}</span>
            {x}
          </div>
        ))}
      </div>

      <div className="content-card upload-card">
        <Package size={50} />

        <h2>
          Upload Product Image
        </h2>

        <p>
          Upload a clear image of the
          packaged commodity and label.
        </p>

        <input
          type="file"
          accept="image/*"
          onChange={(e) =>
            setFile(
              e.target.files?.[0] ||
                null
            )
          }
        />

        {file && (
          <p>
            Selected:
            <strong>
              {" "}
              {file.name}
            </strong>
          </p>
        )}

        {error && (
          <p className="error-text">
            {error}
          </p>
        )}

        <button
          className="btn primary"
          onClick={handleProcess}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2
                size={18}
                className="spin"
              />
              Uploading...
            </>
          ) : (
            <>
              Process Inspection
              <ArrowRight
                size={18}
              />
            </>
          )}
        </button>
      </div>
    </DashboardLayout>
  );
}

/* =========================================================
   PROCESSING
========================================================= */

function ProcessingPage() {
  const navigate = useNavigate();

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  useEffect(() => {
    const id =
      localStorage.getItem(
        "inspectionId"
      );

    if (!id) {
      setError(
        "No active inspection found."
      );
      setLoading(false);
      return;
    }

    processInspection(id)
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(
          "Processing could not be started."
        );
        setLoading(false);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="breadcrumb">
        Inspection &gt; Processing
      </div>

      <div className="content-card processing">
        {loading ? (
          <Loader2
            size={55}
            className="spin"
          />
        ) : (
          <CheckCircle2 size={55} />
        )}

        <h1>
          {loading
            ? "Processing Inspection"
            : "Processing Complete"}
        </h1>

        <p>
          {error ||
            "Document processing pipeline completed."}
        </p>

        <div className="progress">
          <div />
        </div>

        <div className="process-list">
          <p>
            <CheckCircle2 />
            Image received
          </p>

          <p>
            <CheckCircle2 />
            Document processing completed
          </p>

          <p>
            <CheckCircle2 />
            Declaration detection ready
          </p>

          <p>
            <CheckCircle2 />
            Compliance evaluation ready
          </p>
        </div>

        {!loading && !error && (
          <button
            className="btn primary"
            onClick={() =>
              navigate(
                "/scan/declarations"
              )
            }
          >
            View Declarations
            <ArrowRight size={18} />
          </button>
        )}
      </div>
    </DashboardLayout>
  );
}

/* =========================================================
   DECLARATIONS
========================================================= */

function DeclarationsPage() {
  const navigate = useNavigate();

  const [inspection, setInspection] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const id =
      localStorage.getItem(
        "inspectionId"
      );

    if (!id) {
      setLoading(false);
      return;
    }

    getInspection(id)
      .then((data) => {
        setInspection(data);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const evidence =
    inspection?.evidence || [];

  return (
    <DashboardLayout>
      <div className="breadcrumb">
        Inspection &gt; Declarations
      </div>

      <div className="page-header">
        <div>
          <h1>
            Extracted Declarations
          </h1>

          <p>
            Declaration data from the
            inspection backend.
          </p>
        </div>
      </div>

      <div className="content-card">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Value</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      Product Name
                    </td>

                    <td>
                      Packaged Commodity
                    </td>

                    <td>
                      <Badge type="review" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Uploaded Document
                    </td>

                    <td>
                      {evidence.length > 0
                        ? evidence[0]
                            .filename
                        : "No document"}
                    </td>

                    <td>
                      <Badge type="pass" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Net Quantity
                    </td>

                    <td>
                      Requires OCR verification
                    </td>

                    <td>
                      <Badge type="review" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      MRP
                    </td>

                    <td>
                      Requires OCR verification
                    </td>

                    <td>
                      <Badge type="review" />
                    </td>
                  </tr>

                  <tr>
                    <td>
                      Manufacturer
                    </td>

                    <td>
                      Requires OCR verification
                    </td>

                    <td>
                      <Badge type="review" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <button
              className="btn primary next-btn"
              onClick={async () => {
                const id =
                  localStorage.getItem(
                    "inspectionId"
                  );

                if (id) {
                  try {
                    await checkCompliance(
                      id
                    );
                  } catch (e) {
                    console.error(e);
                  }
                }

                navigate(
                  "/scan/compliance"
                );
              }}
            >
              Run Compliance Check
              <ArrowRight size={18} />
            </button>
          </>
        )}
      </div>
    </DashboardLayout>
  );
}

/* =========================================================
   COMPLIANCE
========================================================= */

function CompliancePage() {
  const navigate = useNavigate();

  const [result, setResult] =
    useState<any>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const id =
      localStorage.getItem(
        "inspectionId"
      );

    if (!id) {
      setLoading(false);
      return;
    }

    checkCompliance(id)
      .then((data) => {
        setResult(data);
      })
      .catch(() => {})
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <DashboardLayout>
      <div className="breadcrumb">
        Inspection &gt; Compliance
      </div>

      <div className="page-header">
        <div>
          <h1>
            Compliance Checks
          </h1>

          <p>
            Backend compliance evaluation.
          </p>
        </div>
      </div>

      {loading ? (
        <div className="content-card processing">
          <Loader2
            size={45}
            className="spin"
          />

          <h2>
            Running Compliance Check...
          </h2>
        </div>
      ) : (
        <>
          <div className="check-grid">
            {result?.checks?.map(
              (check: any, index: number) => {
                const status =
                  check.status === "PASS"
                    ? "pass"
                    : check.status === "FAIL"
                    ? "fail"
                    : "review";

                return (
                  <div
                    className={`check-card ${status}`}
                    key={index}
                  >
                    {status ===
                    "pass" ? (
                      <CheckCircle2 />
                    ) : status ===
                      "fail" ? (
                      <XCircle />
                    ) : (
                      <AlertTriangle />
                    )}

                    <h3>
                      {check.item}
                    </h3>

                    <Badge
                      type={status}
                    />

                    <p>
                      {check.message}
                    </p>
                  </div>
                );
              }
            )}
          </div>

          <div className="content-card">
            <h2>
              Overall Result
            </h2>

            <p>
              Status:
              <strong>
                {" "}
                {result?.overall_status ||
                  "MANUAL_REVIEW"}
              </strong>
            </p>

            <button
              className="btn primary"
              onClick={() =>
                navigate(
                  "/scan/evidence"
                )
              }
            >
              View Evidence
              <ArrowRight size={18} />
            </button>
          </div>
        </>
      )}
    </DashboardLayout>
  );
}

/* =========================================================
   EVIDENCE
========================================================= */

function EvidencePage() {
  const navigate = useNavigate();

  const [evidence, setEvidence] =
    useState<any[]>([]);

  useEffect(() => {
    const id =
      localStorage.getItem(
        "inspectionId"
      );

    if (!id) return;

    getEvidence(id)
      .then((data) => {
        setEvidence(
          data.evidence || []
        );
      })
      .catch(() => {});
  }, []);

  return (
    <DashboardLayout>
      <div className="breadcrumb">
        Inspection &gt; Evidence
      </div>

      <div className="page-header">
        <div>
          <h1>
            Evidence Viewer
          </h1>

          <p>
            Uploaded inspection evidence.
          </p>
        </div>
      </div>

      <div className="evidence-layout">
        <div className="content-card evidence-image">
          <Package size={100} />

          {evidence.length === 0 ? (
            <p>
              No evidence uploaded.
            </p>
          ) : (
            <div>
              <h3>
                Uploaded Files
              </h3>

              {evidence.map(
                (item) => (
                  <p
                    key={item.id}
                  >
                    <CheckCircle2
                      size={16}
                    />{" "}
                    {item.filename}
                  </p>
                )
              )}
            </div>
          )}
        </div>

        <div className="content-card">
          <h2>
            Evidence Findings
          </h2>

          <p>
            <Badge type="pass" />
            Document uploaded
          </p>

          <p>
            <Badge type="review" />
            OCR verification required
          </p>

          <p>
            <Badge type="review" />
            Officer confirmation required
          </p>

          <button
            className="btn primary next-btn"
            onClick={() =>
              navigate(
                "/scan/review"
              )
            }
          >
            Continue to Review
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* =========================================================
   REVIEW
========================================================= */

function ReviewPage() {
  const navigate = useNavigate();

  const [comments, setComments] =
    useState("");

  const [decision, setDecision] =
    useState("MANUAL_REVIEW");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  async function handleReview() {
    const id =
      localStorage.getItem(
        "inspectionId"
      );

    if (!id) {
      setError(
        "No active inspection found."
      );
      return;
    }

    try {
      setLoading(true);
      setError("");

      await submitReview(
        id,
        decision,
        comments
      );

      navigate(
        "/scan/result"
      );
    } catch (e) {
      console.error(e);

      setError(
        "Could not submit review."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <DashboardLayout>
      <div className="breadcrumb">
        Inspection &gt; Review
      </div>

      <div className="content-card processing">
        <ClipboardCheck size={55} />

        <h1>
          Officer Review
        </h1>

        <p>
          Review the inspection findings
          before finalization.
        </p>

        <label>
          Decision
        </label>

        <select
          value={decision}
          onChange={(e) =>
            setDecision(
              e.target.value
            )
          }
        >
          <option value="PASS">
            PASS
          </option>

          <option value="FAIL">
            FAIL
          </option>

          <option value="MANUAL_REVIEW">
            MANUAL REVIEW
          </option>
        </select>

        <textarea
          placeholder="Officer review notes..."
          rows={5}
          value={comments}
          onChange={(e) =>
            setComments(
              e.target.value
            )
          }
        />

        {error && (
          <p className="error-text">
            {error}
          </p>
        )}

        <button
          className="btn primary"
          onClick={handleReview}
          disabled={loading}
        >
          {loading
            ? "Submitting..."
            : "Complete Review"}

          {!loading && (
            <ArrowRight size={18} />
          )}
        </button>
      </div>
    </DashboardLayout>
  );
}

/* =========================================================
   RESULT
========================================================= */

function ResultPage() {
  const navigate = useNavigate();

  const [inspection, setInspection] =
    useState<any>(null);

  useEffect(() => {
    const id =
      localStorage.getItem(
        "inspectionId"
      );

    if (!id) return;

    getInspection(id)
      .then(setInspection)
      .catch(() => {});
  }, []);

  const status =
    inspection?.review?.decision ||
    inspection?.compliance
      ?.overall_status ||
    "MANUAL_REVIEW";

  const isPass =
    status === "PASS";

  const isFail =
    status === "FAIL";

  return (
    <DashboardLayout>
      <div className="result-card">
        {isPass ? (
          <CheckCircle2 size={60} />
        ) : isFail ? (
          <XCircle size={60} />
        ) : (
          <AlertTriangle size={60} />
        )}

        <span className="eyebrow">
          FINAL INSPECTION RESULT
        </span>

        <h1>
          {isPass
            ? "Inspection Passed"
            : isFail
            ? "Inspection Failed"
            : "Manual Review Required"}
        </h1>

        <p>
          Final decision:
          <strong>
            {" "}
            {status}
          </strong>
        </p>

        {inspection?.review
          ?.comments && (
          <p>
            Officer Notes:{" "}
            {inspection.review.comments}
          </p>
        )}

        <div className="result-actions">
          <button
            className="btn secondary"
            onClick={() =>
              navigate(
                "/scan/review"
              )
            }
          >
            Back to Review
          </button>

          <button
            className="btn primary"
            onClick={() =>
              navigate(
                "/inspections"
              )
            }
          >
            Save Inspection
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}

/* =========================================================
   INSPECTION HISTORY
========================================================= */

function Inspections() {
  const [inspections, setInspections] =
    useState<any[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    getAllInspections()
      .then(setInspections)
      .catch(() => {})
      .finally(() =>
        setLoading(false)
      );
  }, []);

  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <h1>
            Inspection Repository
          </h1>

          <p>
            Saved inspections from backend.
          </p>
        </div>
      </div>

      <div className="content-card">
        {loading ? (
          <p>Loading inspections...</p>
        ) : inspections.length ===
          0 ? (
          <div className="empty">
            <History size={45} />

            <h2>
              No inspections found
            </h2>

            <p>
              Create a new inspection to
              see it here.
            </p>
          </div>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Business</th>
                  <th>Officer</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {inspections.map(
                  (item) => (
                    <tr
                      key={item.id}
                    >
                      <td>
                        #
                        {item.id.slice(
                          0,
                          8
                        )}
                      </td>

                      <td>
                        {
                          item.business_name
                        }
                      </td>

                      <td>
                        {
                          item.inspector_name
                        }
                      </td>

                      <td>
                        <span className="badge review">
                          {item.status}
                        </span>
                      </td>

                      <td>
                        {new Date(
                          item.created_at
                        ).toLocaleDateString()}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

/* =========================================================
   ADMIN
========================================================= */

function Admin() {
  return (
    <DashboardLayout>
      <div className="page-header">
        <div>
          <span className="eyebrow">
            ADMINISTRATION
          </span>

          <h1>
            Administrator Dashboard
          </h1>

          <p>
            Manage rules, users and system
            configuration.
          </p>
        </div>
      </div>

      <div className="admin-grid">
        <Link to="/admin/rules">
          <ShieldCheck />
          <h3>
            Compliance Rules
          </h3>
          <p>
            Manage configured compliance
            rules.
          </p>
        </Link>

        <Link to="/admin/users">
          <Users />
          <h3>
            User Management
          </h3>
          <p>
            Manage officer and administrator
            access.
          </p>
        </Link>

        <Link to="/admin/analytics">
          <BarChart3 />
          <h3>
            System Analytics
          </h3>
          <p>
            View system metrics.
          </p>
        </Link>

        <Link to="/admin/settings">
          <Settings />
          <h3>
            Settings
          </h3>
          <p>
            Configure application settings.
          </p>
        </Link>
      </div>
    </DashboardLayout>
  );
}

/* =========================================================
   PLACEHOLDER
========================================================= */

function Placeholder({
  title,
}: {
  title: string;
}) {
  return (
    <DashboardLayout>
      <div className="content-card empty">
        <Scale size={50} />

        <h1>{title}</h1>

        <p>
          This module is ready for further
          backend integration.
        </p>
      </div>
    </DashboardLayout>
  );
}

/* =========================================================
   LEGAL REFERENCE
========================================================= */

function LegalReference() {
  return (
    <>
      <Header />

      <div className="public-page">
        <span className="eyebrow">
          REFERENCE
        </span>

        <h1>
          Legal Metrology Reference
        </h1>

        <p>
          This prototype provides a
          structured place for verified
          legal and compliance references.
          Official rules and legal sources
          should be validated before
          production use.
        </p>
      </div>
    </>
  );
}

/* =========================================================
   DEMO
========================================================= */

function Demo() {
  return (
    <>
      <Header />

      <div className="public-page">
        <span className="eyebrow">
          PRODUCT DEMO
        </span>

        <h1>
          Explore the Inspection Workflow
        </h1>

        <p>
          Start with a product scan and
          follow extraction, compliance,
          evidence and officer review.
        </p>

        <Link
          className="btn primary"
          to="/scan"
        >
          Open Inspection Workflow
        </Link>
      </div>
    </>
  );
}

/* =========================================================
   404
========================================================= */

function NotFound() {
  return (
    <Placeholder
      title="404 — Page Not Found"
    />
  );
}

/* =========================================================
   APP ROUTES
========================================================= */

export default function App() {
  return (
    <Routes>
      {/* Public */}
      <Route
        path="/"
        element={<Landing />}
      />

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/legal-reference"
        element={<LegalReference />}
      />

      <Route
        path="/demo"
        element={<Demo />}
      />

      {/* Officer */}
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/scan"
        element={<ScanPage />}
      />

      <Route
        path="/scan/upload"
        element={<ScanPage />}
      />

      <Route
        path="/scan/processing"
        element={<ProcessingPage />}
      />

      <Route
        path="/scan/declarations"
        element={<DeclarationsPage />}
      />

      <Route
        path="/scan/compliance"
        element={<CompliancePage />}
      />

      <Route
        path="/scan/evidence"
        element={<EvidencePage />}
      />

      <Route
        path="/scan/review"
        element={<ReviewPage />}
      />

      <Route
        path="/scan/result"
        element={<ResultPage />}
      />

      <Route
        path="/inspections"
        element={<Inspections />}
      />

      <Route
        path="/ecommerce"
        element={
          <Placeholder
            title="E-Commerce Listing Screening"
          />
        }
      />

      <Route
        path="/profile"
        element={
          <Placeholder
            title="Officer Profile"
          />
        }
      />

      {/* Admin */}
      <Route
        path="/admin"
        element={<Admin />}
      />

      <Route
        path="/admin/rules"
        element={
          <Placeholder
            title="Compliance Rules"
          />
        }
      />

      <Route
        path="/admin/users"
        element={
          <Placeholder
            title="User Management"
          />
        }
      />

      <Route
        path="/admin/analytics"
        element={
          <Placeholder
            title="System Analytics"
          />
        }
      />

      <Route
        path="/admin/settings"
        element={
          <Placeholder
            title="System Settings"
          />
        }
      />

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}