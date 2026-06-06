export default async function handler(req, res) {
  try {
    const response = await fetch(
      "https://www.vaticannews.va/pt.rss.xml"
    );

    const xml = await response.text();

    res.setHeader("Content-Type", "application/xml");
    res.status(200).send(xml);

  } catch (error) {
    res.status(500).json({
      erro: error.message
    });
  }
}
