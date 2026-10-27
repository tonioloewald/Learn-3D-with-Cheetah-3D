import { buildSite, devServer } from 'tosijs-ui/site'
import config from '../site.config'

process.argv.includes('--build') ? buildSite(config) : devServer(config)
