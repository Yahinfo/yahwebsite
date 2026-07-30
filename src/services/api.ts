import type { ContactFormData } from '../types';

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log('Contact form submitted:', data);
  return { success: true, message: 'Thank you! We will get back to you within 24 hours.' };
}

export async function submitQuoteForm(data: Record<string, string>): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  console.log('Quote form submitted:', data);
  return { success: true, message: 'Quote request received! Our team will contact you shortly.' };
}

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log('Newsletter subscription:', email);
  return { success: true, message: 'Successfully subscribed to our newsletter!' };
}
