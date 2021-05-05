import captureWebsite from 'capture-website'
import { GoogleSpreadsheet } from "google-spreadsheet"
import { google } from 'googleapis'
import { fromBase64 } from "../../lib/base64"
import stream from "stream"

const folderId = process.env.DRIVE_ID
const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

const credentials = {
  client_email: process.env.SHEET_CLIENT_EMAIL,
  private_key: fromBase64(process.env.SHEET_PRIVATE_KEY),
}


export default async (req, res) => {
  const authClient = await google.auth.getClient({
    credentials,
    scopes: ["https://www.googleapis.com/auth/drive.file"],
    subject: process.env.SHEET_CLIENT_EMAIL,
  })


  const drive = google.drive({ version: 'v3', auth: authClient })
  const data = JSON.parse(req.body)

  let imageId;

  if (data.Url) {
    const base64String = await captureWebsite.base64(data.Url)
    const base64Image = base64String.replace(/^data:image\/\w+;base64,/, "")

    const fileMetadata = {
      name: new Date().getTime() + '.png',
      mimeType: 'image/png',
      parents: [folderId]
    }

    const buf = new Buffer.from(base64Image, "base64")
    const bs = new stream.PassThrough()
    bs.end(buf)

    const media = {
      mimeType: 'image/png',
      body: bs
    }

    try {
      const file = await drive.files.create({
        resource: fileMetadata,
        media
      })
      imageId = file.data.id
    } catch (err) {
      return console.log('The API returned an error: ' + err);
    }
  }

  await doc.useServiceAccountAuth(credentials)
  await doc.loadInfo()
  const sheet = doc.sheetsByIndex[6]

  await sheet.addRow({
    Ativo: false,
    Nome: data.Nome,
    Url: data.Url,
    Virou: data.Virou,
    ScreenShot: imageId
  })

  res.json({ status: false })
}
