// import React from 'react';
// import { GoogleMap, useLoadScript } from '@react-google-maps/api';
// import { CardBody } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// // Define the container style for the map
// const containerStyle = {
//   width: '100%',
//   height: '400px',
// };

// // Set the default center of the map (latitude and longitude)
// const center = {
//   lat: 28.6210, // San Francisco latitude
//   lng: 77.3812, // San Francisco longitude
// };

// const Map = () => {
//   // Load the Google Maps script
//   const { isLoaded, loadError } = useLoadScript([{
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Your API key from environment variables
// }]);

//   // Handle script load errors
//   if (loadError) return <div>Error loading Google Maps</div>;
//   // Show a loading message while the script is loading
//   if (!isLoaded) return <div>Loading...</div>;

//   // Render the Google Map once the script is loaded
//   return (
// <Card>
//     <CardBody>
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={center}
//       zoom={10}

//     >
//       {/* Add any map components like markers here */}
//     </GoogleMap>
//     </CardBody>
// </Card>

//   );
// };

// export default Map;

import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";




const Map = ({ center }) => {
  const { isLoaded, loadError } = useLoadScript([
    {
      googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    },
  ]);

  if (loadError) return <div>Error loading Google Maps</div>;

  if (!isLoaded) return <div>Loading...</div>;

  return (
    
    
        <iframe className="w-full md:w-[700px]" style={{}}
          title="googlemap"
          src={`${center.maplink}&basemap=satellite&disableDefaultUI=true`}
          width="900"
          height="440"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      
  );
};

export default Map;
