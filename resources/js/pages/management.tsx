import PublicLayout from '@/layouts/public-layout';
import { Head } from '@inertiajs/react';

function Management() {
  return (
    <>
      <Head title="Management Solutions" />

      {/* HERO */}
      <section className="management-hero">
        <div className="management-hero-content">
          <h1>Management Solutions</h1>
          <p>
            Integrated CRM and ERP solutions designed to help organizations manage operations, data, and decision-making
            efficiently.
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="management-section">
        <div className="management-overview">
          <h2>Built for operational clarity</h2>
          <p>
            Our management systems focus on simplifying complex workflows, improving visibility across teams, and
            enabling better strategic decisions through reliable data.
          </p>
        </div>
      </section>

      {/* FEATURES */}
      <section className="management-section alt">
        <h2>Core Capabilities</h2>

        <div className="management-feature-grid">
          <div className="management-feature-card">
            <h3>Customer Relationship Management</h3>
            <p>
              Centralize customer data, track interactions, and build stronger relationships across your organization.
            </p>
          </div>

          <div className="management-feature-card">
            <h3>Enterprise Resource Planning</h3>
            <p>Manage finance, inventory, procurement, and operations in a single integrated system.</p>
          </div>

          <div className="management-feature-card">
            <h3>Reporting & Analytics</h3>
            <p>Gain actionable insights through dashboards and real-time reports that support data-driven decisions.</p>
          </div>

          <div className="management-feature-card">
            <h3>Process Automation</h3>
            <p>Reduce manual work by automating routine operational processes across departments.</p>
          </div>

          <div className="management-feature-card">
            <h3>Access Control</h3>
            <p>Define roles and permissions to ensure data security and proper access across teams.</p>
          </div>

          <div className="management-feature-card">
            <h3>Scalable Architecture</h3>
            <p>Designed to grow with your organization, from small teams to enterprise-scale operations.</p>
          </div>
        </div>
      </section>

      {/* USE CASE */}
      <section className="management-section">
        <h2>Who is it for?</h2>

        <div className="management-usecase-grid">
          <div className="management-usecase">
            <h4>Small & Medium Businesses</h4>
            <p>Streamline daily operations without the overhead of complex enterprise tools.</p>
          </div>

          <div className="management-usecase">
            <h4>Enterprises</h4>
            <p>Integrate multiple departments and systems into a unified operational platform.</p>
          </div>

          <div className="management-usecase">
            <h4>Non-profit Organizations</h4>
            <p>Improve transparency, reporting, and operational efficiency.</p>
          </div>
        </div>
      </section>
    </>
  );
}

Management.layout = (page: React.ReactNode) => <PublicLayout>{page}</PublicLayout>;

export default Management;
