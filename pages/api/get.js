import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../lib/base64"

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  try {
    await doc.useServiceAccountAuth({
      client_email: process.env.SHEET_CLIENT_EMAIL,
      private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
    })
    await doc.loadInfo()
    const sheet = doc.sheetsByIndex[6]

    const rows = await sheet.getRows()
    const projects = rows
      .filter(i => i.Ativo === "TRUE")
      .map((i) => ({
        nome: i.Nome,
        url: i.Url,
        virou: i.Virou,
      }))

    res.json(projects)
  } catch (error) {
    console.log(error)
    res.json({})
  }
}
