export default async function handler(req, res) {
  try {
    const response = await fetch("https://alerta.prefecturanaval.gob.ar/altura/estacion/30");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Error consultando Prefectura" });
  }
}
