import Contact from "../models/Contact.js";

export const addMessage = async (req, res) => {
  try {
    const message = new Contact(req.body);
    await message.save();

    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ message: "Failed to save message!" });
  }
};
