const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_15_14_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDUxLFxuICAgICAgICA4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzNixcbiAgICAgICAgMjI3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjAwLFxuICAgICAgICA0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAxNCxcbiAgICAgICAgMTc3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTIxLFxuICAgICAgICAzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDExLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjA2LFxuICAgICAgICA4LFxuICAgICAgICA1MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDY3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDMxLFxuICAgICAgICA3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDQ5LFxuICAgICAgICA0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3LFxuICAgICAgICA1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MixcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICA0MCxcbiAgICAgICAgODksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjIwLFxuICAgICAgICA4NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM4LFxuICAgICAgICAwLFxuICAgICAgICA4MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI2LFxuICAgICAgICA3OSxcbiAgICAgICAgMjExLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjMsXG4gICAgICAgIDM4LFxuICAgICAgICA2LFxuICAgICAgICA2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MixcbiAgICAgICAgMzYsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTE3LFxuICAgICAgICAwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDY3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjlSbUZ3TDEweEVlM0R0cG9STU1zWlloNnZmTFgyYWpjcVloL3M4WE9hWW89XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJGRVpNYXl1Unk2UnI4bFAxTGcybndcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjZlOGJmZjYtMzdlNS00MGNmLTlkMGMtYmQyZTY3ZTRiODhiXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI2LFxuICAgICAgMTk1LFxuICAgICAgMTI3LFxuICAgICAgMTM2LFxuICAgICAgMjQ4LFxuICAgICAgMTIzLFxuICAgICAgNSxcbiAgICAgIDEzNCxcbiAgICAgIDE4NixcbiAgICAgIDE2NSxcbiAgICAgIDE0OCxcbiAgICAgIDE4NyxcbiAgICAgIDEzMixcbiAgICAgIDExMyxcbiAgICAgIDMyLFxuICAgICAgMTUwLFxuICAgICAgMTEzLFxuICAgICAgMTI4LFxuICAgICAgMTMzLFxuICAgICAgNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTk3LFxuICAgICAgNTcsXG4gICAgICAxMzAsXG4gICAgICA5NixcbiAgICAgIDI4LFxuICAgICAgMTgzLFxuICAgICAgMjAxLFxuICAgICAgMjE5LFxuICAgICAgMjA5LFxuICAgICAgMTI0LFxuICAgICAgMjEyLFxuICAgICAgMjE4LFxuICAgICAgMjA1LFxuICAgICAgNzMsXG4gICAgICAyNDAsXG4gICAgICAxOTQsXG4gICAgICAxODMsXG4gICAgICAxMjEsXG4gICAgICAxMCxcbiAgICAgIDE4MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4NTE3R0pIQVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODAzMzk1NjgzNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNTIwMzM0MTIxNDUxNjA6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJcUwzck1FRU4rbnRiUUdHQVVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIndXMUUzY0tKelU3SXdmSHVDS2Vtajc5cTR4Sm12OVh1bFFTTnZQaGlZU289XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWTFqRXJ5T240emF5MXkxemZzVmhtcU9CcDZucWJ2dkI0YjdlUlFaKzFNN3JWSk5UQWpnQnhXZGRJQkhLOEg3RHFFQ1RwOFBCSC9HYUk5Z1VhSlJjQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiSnJGQUdTT0hnVytZYlVHWk1nYktyQnFSNXgybDJaa1pxbHdBbzJnZXdjTENFejdwYUMrbSsxdXEwd3ZxZ0t3K3Z3ZXZOci9hVDd5VDRLWW9RQTVWaXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODAzMzk1NjgzNzo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA1MzgwODRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
