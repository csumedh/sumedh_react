import React from "react";
import ScrollVideo from './ScrollVideo';
import mock01 from '../assets/images/mock01.png'; // EV project image
import mock02 from '../assets/images/mock02.png'; // Robocon project image
import mock03 from '../assets/images/mock03.png'; // Job shop paper project image
import rdtRrtGif from '../assets/gifs/Picture1.gif'; // RDT-RRT path planning project image
import mock05 from '../assets/images/mock05.png'; // Ashtachamma RL project image
import mock06 from '../assets/images/mock06.png'; // UMP manufacturing image
import mock07 from '../assets/images/mock07.png'; // Formation control project image
import mock09 from '../assets/images/mock09.png'; // RoboHarvest project image
import mock10 from '../assets/images/mock10.png'; // Good music bot
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects & Publications</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://drive.google.com/file/d/1msZBZmElpLBhaDDedZVGEFcUQ6kMAm_9/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={mock01} className="zoom" alt="EV Project Thumbnail" width="90%" />
                    </a>
                    <div className="badge capstone">🚗 Capstone</div>
                    <a href="https://drive.google.com/file/d/1msZBZmElpLBhaDDedZVGEFcUQ6kMAm_9/view?usp=sharing" target="_blank" rel="noreferrer">
                        <h2>EV Conversion Kit for Auto Rickshaws</h2>
                    </a>
                    <p>
                        Developed a modular electric vehicle conversion kit to retrofit existing auto-rickshaws, enabling affordable electrification without buying new EVs. Designed drivetrain, transaxle, and electrical systems; performed MATLAB-Simulink simulations and motor/battery sizing; and validated with industry partner Mining Roots for real-world viability.
                    </p>
                </div>

                <div className="project">
                    <a href="https://www.youtube.com/watch?v=v16S1kGzx-w" target="_blank" rel="noreferrer">
                        <img src={mock02} className="zoom" alt="Robocon 2021 Thumbnail" width="90%" />
                    </a>
                    <div className="badge robotics">🤖 Robotics</div>
                    <div className="badge path-planning">🛣️ Path Planning</div>
                    <div className="badge computervision">📸 Computer vision</div>
                    <a href="https://www.youtube.com/watch?v=v16S1kGzx-w" target="_blank" rel="noreferrer">
                        <h2>DD-Robocon 2021 – National Robotics Competition (AIR 12)</h2>
                    </a>
                    <p>
                        Designed, developed, and calibrated two autonomous robots for DD-Robocon 2021, hosted at IIT Delhi, achieving an All-India Rank 12. Engineered arrow-throwing and defensive mechanisms using SolidWorks, ANSYS, and MATLAB-Simulink. Led fabrication of custom end-effectors and arrow-picking systems, and optimized kinematics for precise task execution.
                    </p>
                </div>

                <div className="project">
                    <a href="https://www.researchgate.net/publication/370132451_Cost_Minimization_in_Job_Shop_Scheduling_Problem" target="_blank" rel="noreferrer">
                        <img src={mock03} className="zoom" alt="Job Shop Scheduling Project" width="90%" />
                    </a>
                    <div className="badge published">📄 Published</div>
                    <div className="badge smart-mfg">🎗️ Lean Manufacturing</div>
                    <a href="https://www.researchgate.net/publication/370132451_Cost_Minimization_in_Job_Shop_Scheduling_Problem" target="_blank" rel="noreferrer">
                        <h2>Cost Minimization in Job Shop Scheduling (Published Research)</h2>
                    </a>
                    <p>
                        Published research on minimizing cost in job shop scheduling using an earliness/tardiness model. Implemented a Python-based GUI with Tkinter to simulate and optimize machine-job sequences. Compared heuristics against benchmark datasets to validate computational efficiency and economic impact.
                    </p>
                </div>

                <div className="project">
                    <a href="https://drive.google.com/file/d/14DS_DjbjVYjh4gQbVFRcQz-QbF6dYiLD/view?usp=sharing" target="_blank" rel="noreferrer">
                    <img src={rdtRrtGif} className="zoom" alt="RDT-RRT Path Planning GIF" width="90%" />
                    </a>
                    <div className="badge path-planning">🛣️ Path Planning</div>
                    <a href="https://drive.google.com/file/d/14DS_DjbjVYjh4gQbVFRcQz-QbF6dYiLD/view?usp=sharing" target="_blank" rel="noreferrer">
                        <h2>RDT-RRT Path Planning for Non-Holonomic Robots</h2>
                    </a>
                    <p>
                        Implemented and analyzed RDT-RRT hybrid path planning algorithm for non-holonomic robots using Python and OpenCV. Benchmarked performance against A*, RRT, and RDT in terms of node exploration, cost, and runtime. Proposed CNN-based dynamic obstacle avoidance and IMU-based real-time response for future development.
                    </p>
                </div>

                <div className="project">
                    <a href="https://drive.google.com/file/d/16cJ-pmClX6cWwY8ndvUgPXmOidSA-JAf/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={mock05} className="zoom" alt="Ashta Chamma RL Agent Thumbnail" width="90%" />
                    </a>
                    <div className="badge reinforcement">🧠 Reinforcement Learning</div>
                    <a href="https://drive.google.com/file/d/16cJ-pmClX6cWwY8ndvUgPXmOidSA-JAf/view?usp=sharing" target="_blank" rel="noreferrer">
                        <h2>Reinforcement Learning Agent for Ashta Chamma Game</h2>
                    </a>
                    <p>
                        Developed a PPO and DQN-based RL agent capable of adapting to dynamic opponent strategies in the traditional Indian board game Ashta Chamma. Trained with Stable-Baselines3 in custom Gymnasium environments and evaluated via win rate, reward accumulation, and policy stability against aggressive, defensive, and random opponents.
                    </p>
                </div>
                <div className="project">
                    <a href="https://drive.google.com/file/d/1ND_WWyU_Nz-3QDqkL_W54SFQYL2BeugG/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={mock06} className="zoom" alt="Smart Manufacturing Project" width="90%" />
                    </a>
                    <div className="badge smart-mfg">🏭 Smart Manufacturing</div>
                    <div className="badge computervision"> ⚙️Automation</div>
                    <a href="https://drive.google.com/file/d/1ND_WWyU_Nz-3QDqkL_W54SFQYL2BeugG/view?usp=sharing" target="_blank" rel="noreferrer">
                        <h2>Smart Bottling Line with Energy Optimization</h2>
                    </a>
                    <p>
                        Designed an optimized smart manufacturing line for vitamin bottle packaging integrating automation, serialization, and smart grid technology. Simulated with FlexSim and validated throughput via dual monoblock configuration, solar-powered energy planning, and robotic palletization for industry-grade efficiency and sustainability.
                    </p>
                </div>
                <div className="project">
                    <a href="https://drive.google.com/file/d/172cK7khTr-UdkfCAOQLjvH5igp_4t2ex/view?usp=sharing" target="_blank" rel="noreferrer">
                        <img
                            src={mock07}
                            className="zoom theme-aware-img"
                            alt="Robot Formation Project Thumbnail"
                            width="90%"
                            />
                    </a>
                    <div className="badge controls">🤖 Controls</div>
                    <a href="https://drive.google.com/file/d/172cK7khTr-UdkfCAOQLjvH5igp_4t2ex/view?usp=sharing" target="_blank" rel="noreferrer">
                        <h2>Formation Control of Mobile Robots using Graph Theory</h2>
                    </a>
                    <p>
                        Developed nonlinear control laws for dynamic robot formations using graph-based modeling. Implemented <i>l−ψ</i> and <i>l−l</i> controllers to maintain and switch formations based on obstacle proximity. Simulated transitions using MATLAB and verified collision-free path planning via transition matrices.
                    </p>
                </div>
                <div className="project">
                    <ScrollVideo />
                    <div className="badge computervision">📸 Computer vision</div>
                    <a
                        href="https://drive.google.com/file/d/1QAijZqzROOFWq7DK6RPdn-MUgvB7PhnB/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }} // keeps the styling consistent
                    >
                        <h2>Parking Assistance Using Homography</h2>
                    </a>
                    <p>
                        Developed a 6-camera-based driver assistance system for low-cost vehicles using OpenCV. Implemented inverse homography to transform stitched panoramic views into top-down obstacle maps. Enabled real-time navigation feedback through dynamic depth projection and camera calibration strategies.
                    </p>
                </div>
                <div className="project">
                    <a href="https://drive.google.com/drive/folders/19LDeTdbFFK7jxf4F6aj7suPYuGOTyqe9?usp=sharing" target="_blank" rel="noreferrer">
                        <img src={mock09} className="zoom" alt="RoboHarvest Fruit Picking Bot" width="90%" />
                    </a>
                    <div className="badge robotics">🤖 Robotics</div>
                    <div className="badge computervision">📸 Computer Vision</div>
                    <div className="badge controls">🎮 Controls</div>
                    <a href="https://drive.google.com/drive/folders/19LDeTdbFFK7jxf4F6aj7suPYuGOTyqe9?usp=sharing" target="_blank" rel="noreferrer">
                        <h2>RoboHarvest – Autonomous Fruit Picking Bot</h2>
                    </a>
                    <p>
                        Designed and implemented RoboHarvest, a computer vision-powered autonomous robot for selective fruit harvesting in constrained environments. Integrated a suction-based end-effector for delicate picking. Built a closed-loop PID control system for robot localization and adaptive movement in real-time. Validated performance across variable lighting and occlusion scenarios with ROS-Gazebo simulations.
                    </p>
                </div>

                <div className="project">
                    <a
                        href="https://drive.google.com/file/d/1QAijZqzROOFWq7DK6RPdn-MUgvB7PhnB/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={mock10} className="zoom" alt="GoodMusicBot Concept Thumbnail" width="90%" />
                    </a>
                    <div className="badge computervision">🎵 HRI & Music Therapy</div>
                    <div className="badge robotics">🤖 Robotics</div>
                    <div className="badge controls">🧠 Emotion-Aware Systems</div>
                    <a
                        href="https://drive.google.com/file/d/1QAijZqzROOFWq7DK6RPdn-MUgvB7PhnB/view?usp=sharing"
                        target="_blank"
                        rel="noreferrer"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <h2>GoodMusicBot – Music-Based HRI for Mental Health</h2>
                    </a>
                    <p>
                        Conceptualized a low-cost therapeutic robot designed to aid mental health using real-time emotion-aware music therapy. Integrated emotion detection (EEG, Q-sensor), cultural music adaptation, and secure cloud-based data storage. Developed modular architecture using LSTMs, CNNs, Essentia, and SQLite with a focus on clinical effectiveness, scalability, and cybersecurity.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
