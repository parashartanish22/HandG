"use client";

import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7999764287" // update with your WhatsApp business number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg z-50"
    >
      <FaWhatsapp className="w-6 h-6" />
    </a>
  );
}
