import React from "react";
import "./HeroSection.css";
import img1 from "../../../assets/images/branding1.png";
import img2 from "../../../assets/images/branding2.png";
import img3 from "../../../assets/images/branding3.png";
import img4 from "../../../assets/images/branding4.png";
import img5 from "../../../assets/images/branding5.png";

const CaseStudyLayout = () => {
  return (
    <>
      <div className="cs-wrapper">

        {/* LEFT SIDE */}
        <div className="cs-left">

          {/* MAIN HERO */}
          <div className="cs-hero">
            <img src="https://res.cloudinary.com/mtm-agency/image/fetch/f_auto,q_auto/https://themtmagency.com/upload/media/_1920x1080_crop_center-center_61_line/24-11_29379_Brand_building_for_professional_services_blog_image-11.png" alt="Hero" />
          </div>

          {/* THUMBNAILS */}
          {/* THUMBNAILS */}
          <div className="cs-thumbs">
            {[img1, img2, img3, img4, img5].map((img, i) => (
              <img key={i} src={img} alt={`branding-${i}`} />
            ))}
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="cs-right">

          {/* TOP SMALL IMAGE */}
          <div className="cs-side-image">
            <img src="https://freedesignfile.com/upload/2012/11/business_people_05.jpg" alt="Side" />
          </div>

          {/* CONTENT */}
          <div className="cs-side-content">
            <h2>Brand Transformation</h2>
            <p>
              A complete redesign focused on elevating brand perception,
              improving user experience, and scaling digital presence.
            </p>

            {/* INFO ROWS */}
            <div className="cs-info">
              <div>
                <span>Client</span>
                <p>Fintech Startup</p>
              </div>
              <div>
                <span>Timeline</span>
                <p>10 Weeks</p>
              </div>
              <div>
                <span>Year</span>
                <p>2025</p>
              </div>
            </div>

            {/* PILL BARS */}
            <div className="cs-bars">

              <div className="bar">
                <div className="bar-row">
                  <span>Brand Strategy</span>
                  <div className="track">
                    <div className="fill w90"></div>
                  </div>
                </div>
              </div>

              <div className="bar">
                <div className="bar-row">
                  <span>UI/UX Design</span>
                  <div className="track">
                    <div className="fill w80"></div>
                  </div>
                </div>
              </div>

              <div className="bar">
                <div className="bar-row">
                  <span>Development</span>
                  <div className="track">
                    <div className="fill w70"></div>
                  </div>
                </div>
              </div>

              <div className="bar">
                <div className="bar-row">
                  <span>Marketing</span>
                  <div className="track">
                    <div className="fill w60"></div>
                  </div>
                </div>
              </div>

            </div>

            {/* BOTTOM BADGES */}
            <div className="cs-bottom-badges">
              <span>Branding</span>
              <span>UI/UX</span>
              <span>Strategy</span>
              <span>Development</span>
              <span>Marketing</span>
            </div>

          </div>

        </div>

      </div>

      {/* ================= EXTRA SECTION ================= */}
      <div className="cs-bottom-section">

        {/* LEFT SIDE (3 BOXES) */}
        <div className="cs-bottom-left">

          {/* BOX 1 - With 4-word description */}
          <div className="cs-box">
            <div className="cs-box-row">
              <div className="cs-box-title">
                <h4>Brand Identity Package</h4>
                <p className="box-description">A complete system for cohesive brand visual identity</p>
              </div>
              <div className="cs-box-right">
                <span className="green-tag">+34%</span>
                <span className="price">Offer</span>
                <button>Contact soon</button>
              </div>
            </div>
          </div>

          {/* BOX 2 - With separate container background for UL */}
          <div className="cs-box">
            <div className="cs-box-row">
              <h4>Brand Identity Deluxe</h4>
              <div className="cs-box-right">
                <span className="green-tag">+64%</span>
                <span className="price">Offer</span>
                <button>Contact soon</button>
              </div>
            </div>

            <div className="cs-list-container">
              <ul className="cs-feature-list">
                <li>Logo & Visual Identity</li>
                <li>Full Design System & Guidelines</li>
                <li>Brand Collateral Design</li>
                <li>Market Positioning Strategy</li>
              </ul>
            </div>
          </div>

          {/* BOX 3 - With separate container background for pricing list */}
          <div className="cs-box">
            <div className="cs-box-row">
              <h4>Project Modules</h4>
            </div>

            <div className="cs-pricing-container">
              <div className="cs-pricing-list">
                <div className="pricing-item">
                  <span>UX Audit</span>
                  <span className="price-value">$20%off</span>
                </div>
                <div className="pricing-item">
                  <span>UI Design</span>
                  <span className="price-value">$20%off</span>
                </div>
                <div className="pricing-item">
                  <span>Development</span>
                  <span className="price-value">$20%off</span>
                </div>
                <div className="pricing-item">
                  <span>Testing & QA</span>
                  <span className="price-value">$20%off</span>
                </div>
                <div className="pricing-item">
                  <span>Deployment</span>
                  <span className="price-value">$20%off</span>
                </div>
              </div>
            </div>

            <div className="cs-total">
              <span className="green-tag">+54%</span>
              <span className="price">Offer</span>
              <button>Contact soon</button>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (2 DARK BOXES) */}
        <div className="cs-bottom-right">

          {/* FEATURES - With separate container background for UL */}
          <div className="cs-dark-box">
            <h4>Features</h4>
            <div className="cs-dark-list-container">
              <ul className="cs-feature-dark-list">
                <li>✔ Brand Strategy</li>
                <li>✔ UI/UX Design</li>
                <li>✔ Design System</li>
                <li>✔ Performance Optimization</li>
                <li>✔ SEO Ready</li>
                <li>✔ Analytics Integration</li>
                <li>✔ 24/7 Support</li>
              </ul>
            </div>
          </div>

          {/* COMPARISON */}
          <div className="cs-dark-box">
            <h4>Comparison</h4>
            <div className="cs-table-container">
              <table className="cs-comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Basic</th>
                    <th>Pro</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Strategy</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Design</td>
                    <td>✔</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Development</td>
                    <td>✖</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Support</td>
                    <td>✖</td>
                    <td>✔</td>
                    <td>✔</td>
                  </tr>
                  <tr>
                    <td>Custom Solutions</td>
                    <td>✖</td>
                    <td>✖</td>
                    <td>✔</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>

      {/* ================= FINAL CONTENT SECTION ================= */}
      <div className="cs-final-section">

        {/* LEFT SIDE */}
        <div className="cs-final-left">

          {/* IMAGE */}
          <div className="cs-final-image">
            <img src="https://digitalmarketing.f12technologies.com/public/storage/uploads/page/1754902650_brand-development-services.png" alt="Final Case Study" />
          </div>

          {/* DESCRIPTION */}
          <p className="cs-final-desc">
            This case study explores how a structured branding system can elevate
            user perception and create a consistent digital experience across
            platforms.
          </p>

          {/* CONTENT BLOCKS */}
          <div className="cs-final-text">

            <div>
              <h4>Research & Discovery</h4>
              <p>
                We conducted an in-depth analysis of user behavior, business goals, and competitive landscapes to uncover meaningful insights. Through stakeholder interviews, user journey mapping, and market research, we identified key opportunities and challenges. This phase established a strong strategic foundation, ensuring that every design decision moving forward was rooted in real data and aligned with both user needs and business objectives.
              </p>
            </div>

            <div>
              <h4>Strategy & Direction</h4>
              <p>
                Based on the insights gathered, we defined a clear brand strategy and creative direction. This included crafting a cohesive visual language, tone of voice, and messaging framework that reflects the brand’s core values. We focused on creating consistency across all touchpoints, ensuring that the brand communicates effectively and builds a strong, recognizable identity in the market.
              </p>
            </div>

            <div>
              <h4>Design Execution</h4>
              <p>
                We translated strategy into execution by developing high-fidelity interfaces, scalable components, and a comprehensive design system. Every element was carefully crafted to maintain visual consistency and usability across platforms. The design system enables future scalability, allowing the product to evolve efficiently while preserving a unified user experience.
              </p>
            </div>

            <div>
              <h4>Results & Impact</h4>
              <p>
                The final outcome delivered measurable improvements across key performance metrics. The refined brand identity enhanced user engagement, strengthened brand recognition, and improved conversion rates. By aligning design with strategy, the project not only elevated the user experience but also contributed to tangible business growth and long-term value.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="cs-final-right">

          {/* BOX 1 */}
          <div className="cs-final-box">
            <h4>Achievements</h4>
            <div className="cs-img-grid">
              <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" alt="Achievement 1" />
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Achievement 2" />
              <img src="https://images.unsplash.com/photo-1552664730-d307ca884978" alt="Achievement 3" />
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Achievement 4" />
            </div>
            <div className="number-container">
              <span className="count">+120</span>
            </div>
          </div>

          {/* BOX 2 */}
          <div className="cs-final-box">
            <h4>Visual Assets</h4>
            <div className="cs-img-grid">
              <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" alt="Asset 1" />
              <img src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" alt="Asset 2" />
              <img src="https://images.unsplash.com/photo-1492724441997-5dc865305da7" alt="Asset 3" />
              <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" alt="Asset 4" />
            </div>
            <div className="number-container">
              <span className="count">+160</span>
            </div>
          </div>

          {/* BOX 3 - With separate container for UL list like Features box */}
          <div className="cs-final-box dark">
            <h4>Brand Transformation Summary</h4>
            <div className="cs-final-list-container">
              <ul className="cs-final-ul-list">
                <li>Refined brand positioning aligned with business vision</li>
                <li>Developed a cohesive and scalable visual identity system</li>
                <li>Established consistent brand experience across all touchpoints</li>
                <li>Defined tone of voice and communication guidelines</li>
                <li>Strengthened brand recognition and audience trust</li>
              </ul>
            </div>
            <div className="badges">
              <span>Brand Identity</span>
              <span>Visual System </span>
              <span>Brand Strategy</span>
              <span>Storytelling</span>
            </div>
          </div>

          {/* BOX 4 - With separate container for UL list like Features box */}
          <div className="cs-final-box dark">
            <h4>Key Outcomes</h4>
            <div className="cs-final-list-container">
              <ul className="cs-final-ul-list">
                <li>Improved usability metrics</li>
                <li>Stronger brand recall</li>
                <li>Measurable growth in engagement</li>
                <li>Increased conversion rates</li>
                <li>Enhanced user satisfaction</li>
              </ul>
            </div>
            <div className="badges">
              <span>Growth</span>
              <span>Performance</span>
              <span>Design</span>
              <span>Impact</span>
            </div>
          </div>

        </div>

      </div>
    </>
  );
};

export default CaseStudyLayout;