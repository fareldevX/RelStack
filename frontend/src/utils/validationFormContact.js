export const validationFormContact = (form) => {
  if (!form.name.trim()) {
    return "Name is required!";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    return "Email invalid!";
  }

  if (form.message.trim().length < 5) {
    return "Message is short!";
  }

  return null;
};
