
import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Apr 2026 – Present"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Robotics and Automation Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Axle, Frederick, Maryland</h4>
            <p>
              Integrated and commissioned robotic laboratory automation systems combining robotic arms, motion stages, barcode scanners, and laboratory instruments.
              Designed and fabricated custom vial-handling mechanisms, pneumatic crimping assemblies, and septum needle insertion systems.
              Integrated rotary rack storage and barcode scanning into automated workflows.
              Developed Python HTTP device-control servers and supported integration with a centralized automation platform.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Sep 2025 – Apr 2026"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Robotics Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Stealth Robotics Startup, Remote</h4>
            <p>
              Developing 3D CAD models and simulations for robotic adhesion and mobility systems.
              Performing load, torque, and stability analyses for vertical surface operation.
              Optimizing track and suction configurations for reliable wall traversal.
              Preparing system architecture for future control and ROS integration.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2021 – Jan 2022"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mechanical Engineering Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">John Cockerill Ltd, Taloja, India</h4>
            <p>
              Designed and optimized mechanical assemblies for steel plant automation using SolidWorks and AutoCAD.
              Conducted GD&T and tolerance stack-up analysis.
              Assisted with on-site commissioning and debugging of plant automation systems.
              Performed FEA simulations and reviewed ISO-compliant technical drawings and BOMs.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Jun 2021 – Jul 2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Automation Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Bharat Traders, Andheri, India</h4>
            <p>
              Developed 2D/3D CAD models for automation setups.
              Conducted root cause analysis for assembly failures.
              Designed pneumatic fixtures and assisted with supplier audits and lean improvements.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2020 – Aug 2021"
            iconStyle={{ background: '#5000ca', color: 'white' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Mechanical Systems Lead Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Agnels Robotics Club, Vashi, India</h4>
            <p>
              Led mechanical design for autonomous robots at DD-Robocon.
              Engineered drivetrain, end-effectors, and actuated arms.
              Integrated systems with electrical/software teams, managed procurement and on-site robot operations.
            </p>
          </VerticalTimelineElement>

        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
