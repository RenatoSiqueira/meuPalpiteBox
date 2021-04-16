import captureWebsite from 'capture-website'
import { GoogleSpreadsheet } from "google-spreadsheet"
import { fromBase64 } from "../../lib/base64"

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

export default async (req, res) => {
  await doc.useServiceAccountAuth({
    client_email: process.env.SHEET_CLIENT_EMAIL,
    private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
  })
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[6]
  const data = JSON.parse(req.body)

  let ss = ''
  if (data.Url) {
    ss = await captureWebsite.base64(data.Url)
  }

  console.log(ss)

  await sheet.addRow({
    Ativo: false,
    Nome: data.Nome,
    Url: data.Url,
    Virou: data.Virou,
    ScreenShot: ss
  })


  console.log(ss)

  res.json({ status: true })
}
