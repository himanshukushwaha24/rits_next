// import React from "react";
// import { CardBody } from "react-bootstrap";
// import Card from "react-bootstrap/Card";

// const Placecart = () => {
//   return (
//     <Card className="w-full h-auto md:w-full md:h-auto overflow-x-auto md:overflow-x-visible scroll-responsive">
//       <div className="flex md:flex-col gap-1  md:px-0">
//         <CardBody>
//           <div className="min-w-[200px] flex flex-col justify-between bg-[#FFFFFF] py-2 shadow-md">
//             <span className="font-[500px] text-[20px] leading-6 text-[#575757] mb-2">
//               
//             </span>
//             <span className="text-[#009837] font-[700px] text-[24px] leading-7">
//               USA
//             </span>
//           </div>
//         </CardBody>
//         <CardBody>
//           <div className="min-w-[200px] flex flex-col justify-between bg-[#FFFFFF] py-2 shadow-md">
//             <span className="font-[500px] text-[20px] leading-6 text-[#575757] mb-2">
//               
//             </span>
//             <span className="text-[#009837] font-[700px] text-[24px] leading-7">
//               USA
//             </span>
//           </div>
//         </CardBody>
//         <CardBody>
//           <div className="min-w-[200px] flex flex-col justify-between bg-[#FFFFFF] py-2 shadow-md">
//             <span className="font-[500px] text-[20px] leading-6 text-[#575757] mb-2">
//               New York
//             </span>
//             <span className="text-[#009837] font-[700px] text-[24px] leading-7">
//               USA
//             </span>
//           </div>
//         </CardBody>
//         <CardBody>
//           <div className="min-w-[200px] flex flex-col justify-between bg-[#FFFFFF] py-2 shadow-md">
//             <span className="font-[500px] text-[20px] leading-6 text-[#575757]">
//               
//             </span>
//             <span className="text-[#009837] font-[700px] text-[24px] leading-7">
//               USA
//             </span>
//           </div>
//         </CardBody>
//       </div>
//     </Card>
//   );
// };

// export default Placecart;




import React from "react";
import { useState } from "react";
import { CardBody } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const Placecart = ({ onCitySelect }) => {
  const [selectedCity, setSelectedCity] = useState(null);

  const cities = [
    {
      name: "New York",
      country: "USA",
      lat: 40.7128,
      lng: -74.006,
      maplink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.03609235!2d-74.30933268632423!3d40.697539959410896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1724380236131!5m2!1sen!2sin",
    },

    {
      name: "San Francisco",
      country: "USA",
      lat: 37.7749,
      lng: -122.4194,
      maplink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.9964103731!2d-122.52000150281195!3d37.75780703789626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1724380355293!5m2!1sen!2sin",
    },
    {
      name: "Noida",
      country: "India",
      lat: 28.5355,
      lng: 77.391,
      maplink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224356.85923429683!2d77.23701267138128!3d28.52240403541215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1724380454599!5m2!1sen!2sin",
    },
    {
      name: "Sheung Wan",
      country: "Hong Kong",
      lat: 22.2855,
      lng: 114.1517,
      maplink:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7383.508701967368!2d114.13987834563478!3d22.287293286819082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404007e811b3f95%3A0x47c863b8fcf83784!2sSheung%20Wan%2C%20Hong%20Kong!5e0!3m2!1sen!2sin!4v1724380519436!5m2!1sen!2sin",
    },
  ];


  return (
    <Card className="w-full h-auto md:w-full md:h-auto overflow-x-auto md:overflow-x-hidden scroll-responsive bg-[#EAEAEA] ">
      <div className="flex md:flex-col gap-1 md:px-0 bg-white">
        {cities.map((city) => (
          <CardBody
            key={city.name}
            onClick={() => {
              onCitySelect({
                lat: city.lat,
                lng: city.lng,
                maplink: city.maplink,
              });
              setSelectedCity(city.name);
            }}
            
            
            className="hover:cursor-pointer"
          >
            <div className={`min-w-[350px] flex flex-col justify-between py-2 shadow-md ${
  selectedCity === city.name ? 'bg-[#FFFFFF]' : 'bg-[#EAEAEA]'
}`}>
              <span className="font-[500px] text-[20px] leading-6 text-[#575757] mb-2">
                {city.name}
              </span>
              <span className="text-[#009837] font-[700px] text-[24px] leading-7">
                {city.country}
              </span>
            </div>
          </CardBody>
        ))}
      </div>
    </Card>
  );
};

export default Placecart;

