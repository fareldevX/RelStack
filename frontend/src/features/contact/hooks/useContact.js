import { useState } from "react";
import { submitContactForm } from "../services/contactApi";

export function useContact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      await submitContactForm(formData);
      setStatusMessage("Message sent successfully.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusMessage(
        error?.response?.data?.message ||
          "Failed to send message. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, isSubmitting, statusMessage, handleChange, handleSubmit };
}
