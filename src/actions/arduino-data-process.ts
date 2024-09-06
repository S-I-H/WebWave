// import axios from "axios";

// export const sendDataArduino = async (button: string) => {
//   try {
//     // Make the POST request to the ESP device
//     // const response = await axios.post(`http://192.168.123.198`, { button }, {
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     // });
//     const sampleData = {
//       "button": "exampleValue",
      
//       "status": "active'"
//     };
    
//     const response = await axios.post(`http://192.168.123.198`, sampleData, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     // Log the response from the ESP device
//     // console.log('Data sent to Arduino:', response?.data);
//     console.log('Data sent to Arduino:', sampleData);

//   } catch (error) {
//     // Log the error type and the value of the button
//     console.log(typeof button);
//     console.log(button);

//     // Check if the error is related to CORS or network issues
//     if (axios.isAxiosError(error) && error.code === 'ERR_NETWORK') {
//       console.error('Network error - possibly CORS issue or ESP device not reachable:', error.message);
//     } else {
//       console.error('Error sending request:', error);
//     }
//   }
// };

import axios from "axios"
export const sendDataArduino=async (button:string)=>{
    try {
        // const response = await axios.post(`http://127.0.0.1:5001`, { button });
        const response = await axios.post(`http://192.168.184.62:5001`, { button });
        console.log('Data sent to Arduino:', response?.data);

      } catch (error) {
        console.log(typeof(button));
        console.log(button)
        console.error('Error sending request:', error);
      }
}
// 192.168.184.62