const fs = require('fs')
const path = require('path')
const { google } = require('googleapis')
const { padEnd } = require('./utils')
const { sheets, scope, token, clientId, clientSecret, redirectUrl, columns } = require('./config')

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl)

oauth2Client.setCredentials({
  access_token: '',
  refresh_token: token,
  scope,
  token_type: 'Bearer',
  expiry_date: 0
})

async function getData (auth) {
  const { spreadsheets } = google.sheets('v4')
  sheets.forEach(({ name, range, spreadsheetId }) => {
    spreadsheets.values.get({ auth, range, spreadsheetId }, (err, res) => {
      if (err) {
        console.error(err)
        return
      }
      const data = res.data.values.map(v => padEnd(v, columns, '').join(',')).join('\n')
      const fileName = path.resolve('src', 'assets', `${name}.csv`)
      fs.writeFileSync(fileName, data, 'utf8')
      console.log('Success!')
    })
  })
}

getData(oauth2Client)
