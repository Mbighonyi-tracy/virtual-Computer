import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [temperature, setTemperature] = useState(20); // Simulated temperature
  const [dateTime, setDateTime] = useState(new Date());
  


  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
      // Simulate temperature change
      setTemperature(prev => Math.floor(Math.random() * (30 - 10 + 1) + 10));
    }, 1000);

    return () => clearInterval(timer);

    
  }, []);

  return (
    <footer className="footer">
      <div className="footer-section temperature">
        <span>{temperature}°C</span>
      </div>
      <div className="footer-section search">
        <div className="windows-icon"></div>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="footer-section datetime">
        <span>{dateTime.toLocaleTimeString()}</span>
        <span>{dateTime.toLocaleDateString()}</span>
       
      </div>
    </footer>
    )}

export default Footer


//     import { useState, useEffect } from "react"
// import "./Footer.css"

// const Footer = () => {
//   const [currentTime, setCurrentTime] = useState(new Date())
//   const [showCalendar, setShowCalendar] = useState(false)
//   const [showQuickSettings, setShowQuickSettings] = useState(false)
//   const [cloudiness, setCloudiness] = useState(50) // 0-100 scale
//   const [wifiOn, setWifiOn] = useState(true)
//   const [bluetoothOn, setBluetoothOn] = useState(false)

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000)
//     return () => clearInterval(timer)
//   }, [])

//   const toggleCalendar = () => {
//     setShowCalendar(!showCalendar)
//     setShowQuickSettings(false)
//   }

//   const toggleQuickSettings = () => {
//     setShowQuickSettings(!showQuickSettings)
//     setShowCalendar(false)
//   }

//   return (
//     <footer className="footer">
//       <div className="footer-section weather">
//         <div className={`weather-icon ${cloudiness > 50 ? "cloudy" : "sunny"}`}></div>
//       </div>

//       <div className="footer-section search">
//         <div className="windows-icon"></div>
//         <input type="text" placeholder="Type here to search" />
//         <div className="search-icon"></div>
//       </div>

//       <div className="footer-section system">
//         <div className="time-date" onClick={toggleCalendar}>
//           <span className="time">{currentTime.toLocaleTimeString()}</span>
//           <span className="date">{currentTime.toLocaleDateString()}</span>
//         </div>
//         <div className="arrow-icon" onClick={toggleQuickSettings}></div>

//         {showCalendar && (
//           <div className="calendar">
//             {/* You can implement a full calendar component here */}
//             <h3>{currentTime.toLocaleString("default", { month: "long", year: "numeric" })}</h3>
//             {/* Add calendar grid here */}
//           </div>
//         )}

//         {showQuickSettings && (
//           <div className="quick-settings">
//             <div className={`setting-icon wifi ${wifiOn ? "on" : "off"}`} onClick={() => setWifiOn(!wifiOn)}></div>
//             <div
//               className={`setting-icon bluetooth ${bluetoothOn ? "on" : "off"}`}
//               onClick={() => setBluetoothOn(!bluetoothOn)}
//             ></div>
//           </div>
//         )}
//       </div>
//     </footer>
//   )
// }



 
