import React from "react";
import '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faCogs, faDraftingCompass } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsProgramming = [
    "Python", "C++", "MATLAB", "Simulink", "C#", "Java", "Bash"
];

const labelsFrameworks = [
    "ROS", "Gazebo", "OpenCV", "TensorFlow", "PyTorch", "RViz", "RQT"
];

const labelsDesignAndHardware = [
    "SolidWorks", "AutoCAD", "Fusion 360", "ANSYS",
    "LIDAR", "IMU", "GPS", "NVIDIA Jetson", "PLC", "SCADA", "Edge AI", "Linux/Ubuntu"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">

                {/* Programming & Control */}
                <div className="skill">
                    <FontAwesomeIcon icon={faCogs} size="3x" />
                    <h3>Programming & Control Systems</h3>
                    <p>
                        Skilled in implementing control algorithms like PID and MPC for real-time robotic systems. 
                        Proficient in multi-language development including C++, Python, and MATLAB/Simulink for high-performance and simulation-driven workflows.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsProgramming.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Robotics Frameworks */}
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x" />
                    <h3>Robotics Frameworks & Simulation</h3>
                    <p>
                        Hands-on experience with ROS-based robotic systems and simulation tools like Gazebo and RViz.
                        Familiar with integrating computer vision and deep learning using OpenCV, TensorFlow, and PyTorch.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFrameworks.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Design & Mechatronics */}
                <div className="skill">
                    <FontAwesomeIcon icon={faDraftingCompass} size="3x" />
                    <h3>Design, Simulation & Mechatronics</h3>
                    <p>
                        Proficient in mechanical design and FEA using SolidWorks, AutoCAD, Fusion 360, and ANSYS.
                        Experienced with robotic hardware integration including LIDAR, IMUs, GPS, Jetson, and embedded systems.
                    </p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsDesignAndHardware.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </div>
    );
}

export default Expertise;
