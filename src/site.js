require('./common')
require('./images/logo.png')
require('./images/radar_legend.png')

const GoogleSheetInput = require('./util/factory')

const radars = {
  backend: {
    title: 'Dvhb Backend Tech Radar',
    sheetId: 'assets/backend.csv'
  },
  frontend: {
    title: 'Dvhb Frontend Tech Radar',
    sheetId: 'assets/frontend.csv'
  },
  infrastructure: {
    title: 'Dvhb Infrastructure Tech Radar',
    sheetId: 'assets/infrastructure.csv'
  }
}

GoogleSheetInput().build(radars)
