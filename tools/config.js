module.exports = {
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  token: process.env.TOKEN,
  redirectUrl: 'http://localhost:3000/oauth2callback',
  scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
  columns: 5,
  sheets: [{
    name: 'frontend',
    spreadsheetId: '1V3dP-RLmhvOi_0vqrp24Hp-YKq2egf3Y88KpbunSYao',
    range: 'Dvhb Frontend Tech Radar!A1:E'
  }, {
    name: 'backend',
    spreadsheetId: '1NVKaxuISgA2M5P7V8Kht76jenxydVG8bS_jRy06zOU8',
    range: 'Dvhb Backend Tech Radar!A1:E'
  }, {
    name: 'infrastructure',
    spreadsheetId: '1WgtJHx-DTDm49GDaz_6zxqGhxTe05j-oU6CC7E46BbY',
    range: 'Dvhb DevOps Tech Radar!A1:E'
  }]
}
