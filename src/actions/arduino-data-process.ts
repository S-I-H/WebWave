import axios from "axios"
export const sendDataArduino=async (button:string)=>{
    try {
        const response = await axios.post(`http://<Arduino_IP>`, { button });
        console.log('Data sent to Arduino:', response?.data);
        
      } catch (error) {
        console.log(typeof(button));
        console.log(button)
        console.error('Error sending request:', error);
      }
}