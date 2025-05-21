"use server";

import { contact } from "@/data/footer";
import { InquiryValues } from "@/types/InquiryForm.types";
import nodemailer from "nodemailer";

export async function sendInquiry(inquiry: InquiryValues) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.seznam.cz",
      port: 465,
      secure: true,
      auth: {
        user: contact.email,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    const body = `Name: ${inquiry.name}\nCompany: ${inquiry.company}\nService: ${inquiry.service}\nBudget: ${inquiry.budget}\nTime frame: ${inquiry.timeframe}\nEmail: ${inquiry.email}\nDescription: ${inquiry.description}`;

    await transporter.sendMail({
      from: contact.email,
      to: contact.email,
      subject: "New inquiry",
      text: body,
    });
  } catch (error) {
    console.error("Email inquiry error:", error);
  }
}
