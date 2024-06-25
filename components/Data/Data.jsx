import Onboard1 from "../../assets/images/onboard_img1.png";
import Onboard2 from "../../assets/images/onboard_img2.png";
import Onboard3 from "../../assets/images/onboard_img3.png";

import Google from "../../assets/images/Google.svg";
import Apple from "../../assets/images/Apple.svg";


export const pages = [
    {
        id: 1,
        image: Onboard1,
        heading: 'Welcome to ParkEase!',    
        Text: 'ParkEase helps you find and book the best parking spots in seconds.',
        
    },
    {
        id: 2,
        image: Onboard2,
        heading: 'Quick Booking',
        Text: 'Quickly search for parking, compare options, and book instantly—all from your smartphone.',

    },
    {
        id: 3,
        image: Onboard3,
        heading: 'No More Waiting Tickets',
        Text: 'Enjoy peace of mind with our verified parking spots and secure payment options.',

    },
]


export const log_methods = [
    {
        id: 1,
        image: <Google />, 
        text: 'Sign Up with Google',
    },
    {
        id: 2,
        image: <Apple />, 
        text: 'Sign Up with Apple',
    },
]