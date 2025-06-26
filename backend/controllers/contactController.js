import Contact from '../models/Contact.js'; // Подключаем модель данных

export const submitContactForm = async (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  const newContact = new Contact({
    firstName,
    lastName,
    email,
    phoneNumber,
    message,
  });

  try {
    await newContact.save();
    res.status(200).json({ message: 'Your message has been successfully sent!' });
  } catch (error) {
    res.status(500).json({ error: 'Error saving data to database' });
  }
};
