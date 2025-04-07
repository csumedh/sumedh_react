// src/components/Resources.tsx
import React from 'react';
import '../assets/styles/Resources.scss';

const Resources = () => {
  return (
    <div className="resources-container" id="resources">
      <h1>Resources & Hacks</h1>

      <div className="resource-group">
        <h2>Frontend Fixes</h2>
        <ul>
          <li>Gazebo, Linux, Windows fixes</li>
        </ul>
      </div>

      <div className="resource-group">
        <h2>ROS</h2>
        <div className="resource-tile">
          <h3>🚀 Get Started with Your First TurtleBot3 Gazebo Launch (ROS 2 Humble)</h3>
          <ol className="code-steps">
            <li><strong>Set Up Locale and Sources</strong>
              <pre>{`sudo apt update && sudo apt install locales
sudo locale-gen en_US en_US.UTF-8
sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
export LANG=en_US.UTF-8`}</pre>
            </li>
            <li><strong>Add ROS 2 Repositories</strong>
              <pre>{`sudo apt install software-properties-common
sudo add-apt-repository universe
sudo apt update && sudo apt install curl -y
curl -s https://raw.githubusercontent.com/ros/rosdistro/master/ros.key | sudo tee /usr/share/keyrings/ros-archive-keyring.gpg > /dev/null

echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] \\
http://packages.ros.org/ros2/ubuntu \$(lsb_release -cs) main" | \\
sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null`}</pre>
            </li>
            <li><strong>Install ROS 2 Humble Desktop</strong>
              <pre>sudo apt update && sudo apt install ros-humble-desktop -y</pre>
            </li>
            <li><strong>Source ROS 2</strong>
              <pre>{`echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
source ~/.bashrc`}</pre>
            </li>
            <li><strong>Install Build Tools</strong>
              <pre>{`sudo apt install -y python3-colcon-common-extensions python3-rosdep python3-vcstool git
sudo rosdep init
rosdep update`}</pre>
            </li>
            <li><strong>Install TurtleBot3</strong>
              <pre>{`mkdir -p ~/turtlebot3_ws/src
cd ~/turtlebot3_ws/src
git clone -b humble https://github.com/ROBOTIS-GIT/turtlebot3.git
cd ~/turtlebot3_ws
rosdep install -i --from-path src --rosdistro humble -y
colcon build --symlink-install
source install/setup.bash`}</pre>
            </li>
            <li><strong>Set TurtleBot3 Environment Variable</strong>
              <pre>{`echo "export TURTLEBOT3_MODEL=burger" >> ~/.bashrc
source ~/.bashrc`}</pre>
            </li>
            <li><strong>Install Gazebo & Sim Packages</strong>
              <pre>{`sudo apt install ros-humble-gazebo-ros-pkgs ros-humble-gazebo-ros2-control -y
sudo apt install ros-humble-turtlebot3-gazebo -y
sudo apt install gazebo11 libgazebo11-dev -y`}</pre>
            </li>
            <li><strong>Launch TurtleBot3 in Gazebo</strong>
              <pre>{`cd ~/turtlebot3_ws
source install/setup.bash
ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py`}</pre>
            </li>
          </ol>
        </div>
      </div> {/* ✅ this was missing! */}

      <div className="resource-group">
        <h2>React Tips</h2>
        <ul>
          <li>How to persist scroll position</li>
          <li>Scroll-to-section with smooth animation</li>
          <li>Using refs with hooks</li>
        </ul>
      </div>
    </div>
  );
};

export default Resources;
