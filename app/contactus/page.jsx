"use client";
import React, { useRef, useState } from "react";
import { AspectRatio } from "@chakra-ui/react";
import emailjs from '@emailjs/browser';
import Confetti from 'react-confetti';
import {
  Alert,
  AlertIcon,
} from '@chakra-ui/react'
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Component() {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);
  const [emailnotSent, setEmailNotSent] = useState(false);
  const [hCaptchaValidated, setHCaptchaValidated] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (hCaptchaValidated) {
      emailjs
        .sendForm('service_m1u3ssf', 'template_whjbqkq', form.current, {
          publicKey: 'Yodn8ua9CvHv44eHN',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            setEmailSent(true);
          },
          (error) => {
            setEmailNotSent(true);
          },
        );
    } else {
      console.log('Please complete the hCaptcha validation.');
    }
  };

  return (
    <>
      <div className="max-w-screen">
        <AspectRatio ratio={16 / 8}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248743.1716239267!2d80.10942567138771!3d13.06034780108987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52666a3b499e4f%3A0x3ac8071a073e27cd!2sEnergy%20And%20Fuel%20Users%20Association%20Of%20India!5e0!3m2!1sen!2sin!4v1578505633263!5m2!1sen!2sin"></iframe>
        </AspectRatio>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          ENERGY AND FUEL USERS  ASSOCIATION OF INDIA
        </h5>

        <section className="py-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
          <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
            <div className="py-6 md:py-0 md:px-6">
              <h5 className="text-2xl font-bold">ADDRESS:</h5>
              <p className="pt-2 pb-4"></p>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span>4B-1, JP TOWERS 7/2, NUNGAMBAKKAM HIGH ROAD CHENNAI – 600 034. TAMIL NADU. INDIA PHONE : 91-44-28278604</span>
                </p>
              </div>
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col py-6 space-y-6 md:py-0 md:px-6">
              <label className="block">
                <span className="mb-1">Full name</span>
                <input type="text" name="user_name" placeholder="Leroy Jenkins" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:dark:bg-gray-800" />
              </label>
              <label className="block">
                <span className="mb-1">Email address</span>
                <input type="email" name="user_email" placeholder="leroy@jenkins.com" className="block w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:dark:bg-gray-800" />
              </label>
              <label className="block">
                <span className="mb-1">Message</span>
                <textarea rows="3" name="user_message"className="block w-full rounded-md focus:ring focus:ri focus:ri dark:dark:bg-gray-800"></textarea>
              </label>
        
              {hCaptchaValidated && (
                <button type="submit" className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:dark:bg-violet-400 dark:dark:text-gray-900 focus:ri hover:ri">Submit</button>
              )}
            </form>
          </div>
        </section>

        <div  className="p-16">
                <HCaptcha
                  sitekey="3466a4a2-fe0a-4905-a84d-880ea766c206"
                  onVerify={(token) => setHCaptchaValidated(true)}
                 
                />
              </div>
        {emailSent && (
          <>
            <Confetti />
            <Alert status='success'>
              <AlertIcon />
              Your message has been sent successfully
            </Alert>
          </>
        )}
                {emailnotSent && (
          <>
      
            <Alert status='error'>
              <AlertIcon />
              There is a error in sending the message
            </Alert>
          </>
        )}
      </div>
      <br />
    </>
  );
}
