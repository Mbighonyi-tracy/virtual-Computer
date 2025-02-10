// import React, { useState } from 'react';
// import Footer from './Footer';
// import Folder from './Folder';
// import Icon from './Icon';
// import './HomePage.css';

// const HomePage = ({ profilePicture }) => {
//   const [folders, setFolders] = useState([]);
//   const [icons] = useState([
//     { name: 'Twitter', icon: '/twitter-icon.png', link: 'https://twitter.com' },
//     { name: 'Facebook', icon: '/facebook-icon.png', link: 'https://facebook.com' },
//     { name: 'LinkedIn', icon: '/linkedin-icon.png', link: 'https://linkedin.com' },
//   ]);

//   const handleContextMenu = (e) => {
//     e.preventDefault();
//     const newFolder = {
//       id: Date.now(),
//       name: `New Folder ${folders.length + 1}`,
//       position: { x: e.clientX, y: e.clientY }
//     };
//     setFolders([...folders, newFolder]);
//   };

//   return (
//     <div className="home-container" onContextMenu={handleContextMenu}>
//       <div className="home-content">
//         <h2 className="home-title gradient-text">Welcome to Your Home Page</h2>
//         {profilePicture && (
//           <div>
//             <img src={profilePicture} alt="Profile" className="home-profile-picture" />
//           </div>
//         )}
//         <p className="home-welcome-text">You are now logged in!</p>
//         <div className="home-dashboard">
//           <h3 className="home-dashboard-title">Your Dashboard</h3>
//           <p className="home-dashboard-text">Here you can view and manage your account.</p>
//           <button className="view-profile-button">
//             View Profile
//           </button>
//         </div>
//       </div>
//       {folders.map((folder) => (
//         <Folder key={folder.id} name={folder.name} position={folder.position} />
//       ))}
//       {icons.map((icon, index) => (
//         <Icon
//           key={index}
//           name={icon.name}
//           icon={icon.icon}
//           link={icon.link}
//           position={{ x: 20 + index * 100, y: 20 }}
//         />
//       ))}
//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

