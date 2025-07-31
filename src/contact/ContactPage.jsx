import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Images } from "lucide-react";
import contactBg from "../assets/contact-bg.jpg";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  MessageCircle,
} from "lucide-react";


const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});
const contactpage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    reset();
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center p-6"
      style={{ backgroundImage: `url(${contactBg})` }}
    >

      <h1 className="text-5xl font-extrabold text-white mb-10 drop-shadow-lg text-center">
        Contact Us
      </h1>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center gap-3">
              <Mail className="text-blue-500" />
              <span>support@yourdomain.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-green-500" />
              <span>‪+2547 00 282 618‬</span>
              <Phone className="text-green-500" />
              <br /><br />
              <span>‪+2547 29 770 384‬</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-red-500" />
              <span>Rendile Arcade Plaza opposite Kamkunji police Station,Along Ukwala Rd.</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-xl shadow space-y-4">
          <div>
            <label className="block font-medium">Name</label>
            <input
              {...register("name")}
              className="w-full mt-1 p-2 border rounded"
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Email</label>
            <input
              {...register("email")}
              type="email"
              className="w-full mt-1 p-2 border rounded"
              placeholder="you@example.com"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block font-medium">Message</label>
            <textarea
              {...register("message")}
              rows="4"
              className="w-full mt-1 p-2 border rounded"
              placeholder="Type your message..."
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
          >
            Send Message
          </button>

          {isSubmitSuccessful && (
            <p className="text-green-600 font-medium mt-2">Message sent successfully!</p>
          )}
        </form>
        <footer className="w-full flex justify-center bg-transparent py-6 animate-fade-in mt-auto">
          <div
            className="bg-white rounded-xl shadow-md text-center py-6 px-10 ml-auto"
            style={{ width: "70vw" }}
          >
            {/* Location */}
            <p className="text-blue-900 text-base font-semibold mb-3 tracking-wide">
              <span className="text-black">Rendile Arcade Plaza</span>, opposite <span className="text-red-600">Kamukunji Police Station</span>, along <span className="text-green-600">Ukwala Rd</span>
            </p>


            {/* Social Icons in a row */}
            <div className="flex justify-center items-center gap-6 mb-3">
              {/* Facebook */}
              <div className="flex flex-col items-center">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-600 hover:scale-110 transition"
                >
                  <Facebook className="w-8 h-8 text-white" />
                </a>
                <span className="text-xs text-gray-700">Facebook</span>
              </div>

              {/* Instagram */}
              <div className="flex flex-col items-center">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-pink-500 hover:scale-110 transition"
                >
                  <Instagram className="w-8 h-8 text-white" />
                </a>
                <span className="text-xs text-gray-700">Instagram</span>
              </div>

              {/* YouTube */}
              <div className="flex flex-col items-center">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-red-600 hover:scale-110 transition"
                >
                  <Youtube className="w-8 h-8 text-white" />
                </a>
                <span className="text-xs text-gray-700">YouTube</span>
              </div>

              {/* Twitter */}
              <div className="flex flex-col items-center">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-blue-400 hover:scale-110 transition"
                >
                  <Twitter className="w-8 h-8 text-white" />
                </a>
                <span className="text-xs text-gray-700">Twitter</span>
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col items-center">
                <a
                  href="https://wa.me/254700282618"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-green-500 hover:scale-110 transition"
                >
                  <MessageCircle className="w-8 h-8 text-white" />
                </a>
                <span className="text-xs text-gray-700">WhatsApp</span>
              </div>

              {/* TikTok */}
              <div className="flex flex-col items-center">
                <a
                  href="https://www.tiktok.com/@yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-black hover:scale-110 transition"
                >
                  <span className="text-xl text-white">🎵</span>
                </a>
                <span className="text-xs text-gray-700">TikTok</span>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-gray-600 text-xs">
              © 30th July 2025 | Krystal Traders. All rights reserved.
            </p>
          </div>
        </footer>


      </div>
    </div>
  );
};

export default contactpage;