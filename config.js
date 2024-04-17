import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fetch from 'node-fetch'
import axios from 'axios'


global.owner = [
  ['2347032757035', '╚»★«╝ T̳̿͟͞H̳̿͟͞A̳̿͟͞W̳̿͟͞I̳̿͟͞Z̳̿͟͞Z̳̿͟͞ ̳̿͟͞M̳̿͟͞D̳̿͟͞ ╚»★«╝', true],
  ['447880903871', ' T̳̿͟͞H̳̿͟͞A̳̿͟͞W̳̿͟͞I̳̿͟͞Z̳̿͟͞Z̳̿͟͞', true], 
  [''] 
] //Number of owners

//global.pairingNumber = "" //put your bot number here

global.mods = ['2347032757035','447880903871'] 
global.prems = ['2347032757035', '447880903871',]
global.allowed = ['2347032757035', '447880903871',]
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124']
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())]
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63']
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())]
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5']
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())]
global.lolkeysapi = ['GataDios']

global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz', 
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,	
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`, 
  'https://api-fgmods.ddns.net': 'fg-dylux'
}

// Sticker WM
global.botname = '╚»★«╝ T̳̿͟͞H̳̿͟͞A̳̿͟͞W̳̿͟͞I̳̿͟͞Z̳̿͟͞Z̳̿͟͞ ̳̿͟͞M̳̿͟͞D̳̿͟͞ ╚»★«╝'
global.premium = 'true'
global.packname = 'T̳̿͟͞H̳̿͟͞A̳̿͟͞W̳̿͟͞I̳̿͟͞Z̳̿͟͞Z̳̿͟͞┃ᴮᴼᵀ' 
global.author = '@╚»★«╝ T̳̿͟͞H̳̿͟͞A̳̿͟͞W̳̿͟͞I̳̿͟͞Z̳̿͟͞Z̳̿͟͞ ╚»★«╝' 
global.menuvid = 'https://i.imgur.com/AjDzGgG.mp4'
global.igfg = '▢ Follow on Instagram\nhttps://www.instagram.com/asli_guru69\n' 
global.dygp = 'https:///chat.whatsapp.com/Ef7DRVhS8s3FgF03ptk0fg'
global.fgsc = 'https://github.com/Guru322/GURU-BOT' 
global.fgyt = 'http://www.youtube.com/@Tha_Wizz'
global.fgpyp = 'http://www.youtube.com/@Tha_Wizz'
global.fglog = 'https://raw.githubusercontent.com/Guru322/api/Guru/guru.jpg' 
global.thumb = fs.readFileSync('./Assets/Gurulogo.jpg')


global.wait = '*⌛ _Charging..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '3' 

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
