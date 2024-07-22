const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })
   

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "94776734030"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanahmad:s4salmanyt@cluster0.szcj2eo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '94762983012' 
global.devs = '94762983012';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUlJMDZHQW1aWUV6QmRqc3FNNnpvdnNCTi9zNE1xUFJ2YkJxckRPbkZtND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicWZSaytkVlhyRmUxeFVlYW84bEFlZThBc1A4eExmbllhTXhIdUplYTloQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJTWsyT2NBYy9uVzA2blQzQnhLeWZ5LzNYcHNjZWlNVlp6U0RBMEJXNGtnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGdVpKbC9rNzU3RWVocEphVnlMZGFZekVBY0xocVlLRHJRRm9CVzRmdnpJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNDaHVYVW0zVFJpWVFCVzVOa3ZZeU81RHhVOGRxRm94Tk94TFlGNlVIMjg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhJMVdLK1FHZzAwSDhEWnY0UDNoRTZhYnNKcmxOdVoveEcrdnJHd3NwQW89In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSTFEZVRESEtDMHpIaXRaYTFZc0FObDFzL1RzK2FCOTl1L1BkYkhEOGNaOXBDaWlFZDZRdXBuS2ltVndOMHZtNmVxNjJZSDg4SzdxUVFscmNRTUJoZz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE2NCwiYWR2U2VjcmV0S2V5IjoiN2JUQjE1SW1wRnZ3WnZrWUdNV21DWFVLTFJzOWU1YURmWHdRMXQxRU8vVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVFBXSXpjWE5UaHlYTmNnaXUxTG1EQSIsInBob25lSWQiOiI5NWQyNTJiZC00YmQzLTRjZGQtOWJiYy1iYjYxYzFlN2EzZjAiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS3E3UzVMT1JjbGlGdmhJZWpTVHQvUnNReVc4PSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjMnZPaElKY2Q5ZTUwZnYwK3FvYmhlUEd6ZlE9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNKSEp2cWNDRUpPQStyUUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIvTXpZdVpocVpvZlduRkxBdnE0WWYzbFVkSFlNSGxndzZUYW54NGhSVmtVPSIsImFjY291bnRTaWduYXR1cmUiOiIzRmRIQjN4VTBPck42NnU1dnNNL3hjME8weURySGxuZUpiU2RlM0RYa2dSTUxOdVpKNVZseXJNUHVJSGhwKzNaWVYzRjFiMHFhRW1HNEsyelR2YUtDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ05WT0xCRzl1b1d2OUh3ZnZBbFlUbEIwa0NxUTVpcUxhT2xYT2MwZXAzMXBzSTdQV0tKc2loRTVENXhmc1FMOHczSzZ1dzNVOVRVajRxcWRxbFlvaXc9PSJ9LCJtZSI6eyJpZCI6Ijk0Nzc2NzM0MDMwOjQ4QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmoXwnZm48J2ZvPCdmbAg8J2ZvPCdmb7wnZmz8J2agijwnZqj8J2ZvCDwnZqD8J2ZtPCdmbDwnZm8KSDwnZqM8J2amPCdmpfwnZqc8J2anSDwnZqc8J2anfCdmpvwnZqS8J2al/CdmpDwnZqcIFwi8J2ah/CdmofwnZqHXCJeIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzc2NzM0MDMwOjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZ6TTJMbVlhbWFIMXB4U3dMNnVHSDk1VkhSMkRCNVlNT2sycDhlSVVWWkYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE2NjM1MTB9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  '',
  packname:  process.env.PACK_NAME || '',
   
  botname:   process.env.BOT_NAME === undefined ? "Xlicon-Md" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'salmanytofficial' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
