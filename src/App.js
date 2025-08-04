import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";


const App = () => {
  return (
    <div className="container py-5">
      {/* Feature label */}
      <div className="text-center mb-3">
        <small className="text-success fw-semibold text-uppercase" style={{ letterSpacing: '2px' }}>Our Feature</small>
      </div>

      {/* Main Title */}
      <h2 className="text-center fw-bold mb-3" style={{ color: '#155E63' }}>
        Discover the standout <strong>insurance benefits</strong> we offer
      </h2>

      {/* Subtitle */}
      <p className="text-center text-secondary mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
        Uncover the essential highlights of our insurance plans – built for extensive protection,
        customizable options, and top-tier service.
      </p>

      {/* Feature items */}
      <div className="row text-center">
        {/* Feature 1 */}
        <div className="col-md-3 border-end">
          <div className="mb-3 d-flex justify-content-center">
            {/* Icon Circle */}
            <div style={{
              backgroundColor: '#088758',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}>
              {/* SVG Icon for Customizable Plans */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text" >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <line x1="10" y1="9" x2="8" y2="9" />
              </svg>
            </div>
          </div>
          <h6 className="fw-bold text-dark mb-2">Customizable Plans</h6>
          <p className="text-secondary small mx-3 mx-md-0">
            Get coverage tailored to your unique needs and budget for the ideal protection.
          </p>
        </div>

        {/* Feature 2 */}
        <div className="col-md-3 border-end">
          <div className="mb-3 d-flex justify-content-center">
            <div style={{
              backgroundColor: '#088758',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}>
              {/* SVG Icon for Multiple Policy Savings */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a7.9 7.9 0 0 0 0-6" />
                <path d="M4.6 9a7.9 7.9 0 0 0 0 6" />
              </svg>
            </div>
          </div>
          <h6 className="fw-bold text-dark mb-2">Multiple Policy Savings</h6>
          <p className="text-secondary small mx-3 mx-md-0">
            Bundle and save! Combine policies for cost-effective and comprehensive coverage.
          </p>
        </div>

        {/* Feature 3 */}
        <div className="col-md-3 border-end">
          <div className="mb-3 d-flex justify-content-center">
            <div style={{
              backgroundColor: '#088758',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}>
              {/* SVG Icon for Accident Forgiveness */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 7 10 18l-5-5" />
                <circle cx="20" cy="20" r="2" />
              </svg>
            </div>
          </div>
          <h6 className="fw-bold text-dark mb-2">Accident Forgiveness</h6>
          <p className="text-secondary small mx-3 mx-md-0">
            Stay protected even when the unexpected happens – your rates won’t increase after your first accident.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="col-md-3">
          <div className="mb-3 d-flex justify-content-center">
            <div style={{
              backgroundColor: '#088758',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}>
              {/* SVG Icon for Home Replacement Cost */}
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7" />
                <path d="M9 22V12h6v10" />
                <circle cx="18" cy="12" r="3" />
              </svg>
            </div>
          </div>
          <h6 className="fw-bold text-dark mb-2">Home Replacement Cost</h6>
          <p className="text-secondary small mx-3 mx-md-0">
            Ensure your home is fully covered — with replacement cost coverage that adjusts to your needs.
          </p>
        </div>
      </div>
      <hr style={{ marginTop: "50px", border: "1px solid #ddd" }} />

    </div>

  );
};
export default App;
