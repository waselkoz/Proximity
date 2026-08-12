"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message is too short"),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    // Validate the data
    const validatedData = contactSchema.parse(rawData);

    // Simulate sending email (Mock)
    console.log("Mock Email Sent!");
    console.log("Details:", validatedData);

    // Artificial delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    return { success: true, message: "Thank you! We will get back to you soon." };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: "Please check the form for errors." };
    }
    return { success: false, message: "Something went wrong. Please try again later." };
  }
}
