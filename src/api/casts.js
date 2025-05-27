// pages/api/cats.js

export default async function handler(req, res) {
  try {
    const response = await fetch('https://meowfacts.herokuapp.com');
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch cat facts' });
  }
}
