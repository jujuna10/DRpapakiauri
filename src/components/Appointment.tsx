'use client'
import React, { useState } from 'react'
import Image from 'next/image'
// import emailjs from 'emailjs-com';


function Appointment() {
    // const [name,setName] = useState("")
    // const [service,setService] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        doctor:"",
        time:"",
        service:"",
        message: "",
      });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    // };
    
    const doctorNames = ["Doctors","Dr. John Smith", "Dr. James Johnson", "Dr. Robert Brown", "Dr. Michael Williams", "Dr. David Jones", "Dr. William Miller", "Dr. Joseph Davis", "Dr. Charles Garcia", "Dr. Daniel Martinez", "Dr. Matthew Anderson"];
    const clinicServices = ["Cardiac Examination", "Orthopedic Services", "Gynecological Consultation", "Therapy and Medication Treatment", "Physical Therapy", "Pediatric Care", "Allergy Testing", "Cosmetic Procedures", "Pediatric Services", "Chest X-Ray"];

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     const { name, email, service, doctor, time } = formData;

    //     if (!name || !email || !service || !doctor || !time) {
    //         alert("Please fill in all required fields!");
    //         return;
    //     }
    
    //     emailjs
    //       .send(
    //         "service_4zoh2pa",
    //         "template_hpbq1vc",
    //         formData,
    //         "KFRageQreNJeloo0G"
    //       )
    //       .then(
    //         (response) => {
    //           console.log("Email sent to admin:", response.status, response.text);
              
    //         },
    //         (error) => {
    //           console.error("Failed to send email to admin:", error);
              
    //         }
    //       );
    //   };

  return (
    <div id='contact me' className='flex flex-col gap-12'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <h1 className='text-[35px] text-blue-900 font-bold'>კონსულტაცია</h1>
        </div>
        <div className='flex justify-center'>
            
            <div className='w-[80%] md:w-[65%] xl:w-[45%] rounded-[50px] p-[35px] bg-[rgb(213,237,241)]'>
                <form className='flex flex-col gap-[35px]'>
                   
                    <div className='w-full flex gap-4'>
                        <input type="text" name='name' required placeholder='სახელი'  className='border-[1px] border-gray-300 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent p-4 w-1/2' />
                        <input type="tel" name='phone' required placeholder='ტელეფონის ნომერი'  className='border-[1px] border-gray-300 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent p-4 w-1/2' />
                    </div>
                    
                    <input type="text" name='message' placeholder='პაციენტის შესახებ' className='border-[1px] border-gray-300 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent p-4 w-full' />
                    <button type='submit' className='bg-button w-[45%] md:w-[35%] py-2 text-white rounded-[50px]'>გაგზავნა</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Appointment