const http = require('http')
const url = require('url')
const opn = require('open')
const { google } = require('googleapis')
const { clientId, clientSecret, redirectUrl, scope } = require('./config')

const oauth2Client = new google.auth.OAuth2(clientId, clientSecret, redirectUrl)

async function authenticate () {
  return new Promise((resolve, reject) => {
    const authorizeUrl = oauth2Client.generateAuthUrl({ access_type: 'offline', scope })
    const server = http
      .createServer(async (req, res) => {
        try {
          if (req.url.indexOf('/oauth2callback') > -1) {
            const qs = new url.URL(req.url, 'http://localhost:3000')
              .searchParams
            const { tokens } = await oauth2Client.getToken(qs.get('code'))
            res.end(`Authentication successful!\nTOKEN=${tokens.refresh_token}`)
            server.close()
            oauth2Client.credentials = tokens
            resolve(oauth2Client)
          }
        } catch (e) {
          reject(e)
        }
      })
      .listen(3000, () => {
        opn(authorizeUrl, { wait: false }).then(cp => cp.unref())
      })
  })
}

authenticate()
  .then(console.log)
  .catch(console.error)
