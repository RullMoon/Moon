const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)
let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1,$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount) => {
	return `*── 「 ${setting.botName} 」 ──*
	
  _*${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}*_

    𝙇𝙞𝙗𝙖𝙧𝙮 : *𝙈𝙪𝙡𝙩𝙞 𝘿𝙚𝙫𝙞𝙘𝙚*.
    𝙋𝙧𝙚𝙛𝙞𝙭 : ( ${prefix} )
    𝙏𝙖𝙣𝙜𝙜𝙖𝙡 𝙎𝙚𝙧𝙫𝙚𝙧 : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
    𝙒𝙖𝙠𝙩𝙪 𝙎𝙚𝙧𝙫𝙚𝙧 : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}

	𝗦𝘁𝗮𝘁𝘂𝘀 : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
	𝗟𝗶𝗺𝗶𝘁 𝗛𝗮𝗿𝗶𝗮𝗻 : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
	𝗟𝗶𝗺𝗶𝘁 : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
  𝗖𝗮𝘁𝗮𝘁𝗮𝗻 : 𝖠𝗇𝗀𝗀𝖺𝗉 _<>_ *𝖳𝗂𝖽𝖺𝗄 𝖠𝖽𝖺*
  𝘾𝙖𝙩𝙖𝙩𝙖𝙣: 𝖦𝖺𝗄 𝖠𝖽𝖺 𝖥𝗂𝗍𝗎𝗋 𝖠𝗇𝗍𝗂𝗅𝗂𝗇𝗄
  
  _𝖭𝖾𝗆𝗎 𝖡𝗎𝗀? 𝖪𝖾𝗍𝗂𝗄 ${prefix}report (𝖡𝗎𝗀)_
  ${readmore}
  𝗠𝗲𝗻𝘂
  ≻ ${prefix}menu
  ≻ ${prefix}owner
  ≻ ${prefix}donasi
  ≻ ${prefix}speed
  ≻ ${prefix}runtime
  ≻ ${prefix}cekprem
  ≻ ${prefix}listprem
  ≻ ${prefix}jo <Text>
  ≻ ${prefix}simi <Text>
  ≻ ${prefix}infobot

  𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗿 𝗠𝗲𝗻𝘂
  ≻ ${prefix}stiker <ReplyGambar/Caption>
  ≻ ${prefix}toimg <ReplyStiker>
  ≻ ${prefix}tovid <ReplyStiker>

  𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿
  ≻ ${prefix}play <Querry>
  ≻ ${prefix}youtube <LinkYt>
  ≻ ${prefix}tiktok <LinkTt>
  ≻ ${prefix}tiktokaudio <LinkTt>
  ≻ ${prefix}ytmp4 <LinkYt>
  ≻ ${prefix}ytmp3 <LinkYt>
  ≻ ${prefix}ytmp3vn <LinkYt>
  ≻ ${prefix}getvideo
  ≻ ${prefix}getmusic
  ≻ ${prefix}igv <Instagram Video/Reels>
  ≻ ${prefix}igf <Instagram Image>
  ≻ ${prefix}facebook <LinkFb>
  ≻ ${prefix}mediafire <LinkMediaFire>
  
  𝗥𝗮𝗻𝗱𝗼𝗺 𝗠𝗲𝗻𝘂
  ≻ ${prefix}quotes
  ≻ ${prefix}gombalan
  ≻ ${prefix}katagalau
  ≻ ${prefix}cecan
  ≻ ${prefix}cogan
  ≻ ${prefix}naruto
  ≻ ${prefix}loli
  ≻ ${prefix}waifu
  ≻ ${prefix}husbu
  ≻ ${prefix}yaoi
  
  𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗠𝗲𝗻𝘂
  ≻ ${prefix}asupan
  ≻ ${prefix}xnxx link
  ≻ ${prefix}ahegao
  ≻ ${prefix}bloewjob
  ≻ ${prefix}hentai
  ≻ ${prefix}masturbation
  ≻ ${prefix}pussy
  
  𝗠𝗲𝗻𝘂 𝗠𝗮𝗸𝗲𝗿
  ≻ ${prefix}glitch <Text> <Text>
  ≻ ${prefix}flaming <Text>
  ≻ ${prefix}shadow <Text>
  ≻ ${prefix}wolftext <Text>
  ≻ ${prefix}cup <Text>
  ≻ ${prefix}cup2 <Text>
  ≻ ${prefix}romantic <Text>
  ≻ ${prefix}writetext <Text>
  ≻ ${prefix}lovetext <Text>
  ≻ ${prefix}lovetext2 <Text>
  ≻ ${prefix}undergrass <Text>
  ≻ ${prefix}coffecup <Text>
  ≻ ${prefix}woodheart <Text>
  ≻ ${prefix}tahta <Text>
  ≻ ${prefix}waifumaker <Text>
  ≻ ${prefix}lolimaker <Text>
  ≻ ${prefix}kanekimaker <Text>
  ≻ ${prefix}guramaker <Text>
  ≻ ${prefix}leaves <Text>
  ≻ ${prefix}pornhub <Text>
  ≻ ${prefix}3d <Text>
  ≻ ${prefix}christmas <Text>
  ≻ ${prefix}logowolf <Text>
  ≻ ${prefix}logowolf2 <Text>
  
  𝗠𝗲𝗻𝘂 𝗟𝗮𝗶𝗻𝗻𝘆𝗮
  ≻ ${prefix}shortlink <Link>
  ≻ ${prefix}kbbi <Kata>
  ≻ ${prefix}faktaunik
  ≻ ${prefix}ppcp
  ≻ ${prefix}darkjokes
  ≻ ${prefix}meme
  ≻ ${prefix}covid19
  ≻ ${prefix}cerpen
  ≻ ${prefix}cersex
  ≻ ${prefix}wiki <Query>
  ≻ ${prefix}say <Text>
  ≻ ${prefix}qr <Text>
  ≻ ${prefix}readmore <Text>|<Text>
  ≻ ${prefix}hitungmundur 12 10 2022
  ≻ ${prefix}translate <from> <to>
  ≻ ${prefix}lirik <Judul>
  ≻ ${prefix}grupwa <Pencarian>
  ≻ ${prefix}ytsearch <Pencarian>
  ≻ ${prefix}pinterest <Querry>
  ≻ ${prefix}getpp

  𝗘𝗱𝗶𝘁 𝗙𝗼𝗸𝗮𝗹
  ≻ ${prefix}halah
  ≻ ${prefix}hilih
  ≻ ${prefix}heleh
  ≻ ${prefix}huluh
  ≻ ${prefix}holoh
  
  𝗚𝗮𝗺𝗲 𝗗𝗮𝗻 𝗙𝘂𝗻
  ≻ ${prefix}tictactoe @tag
  ≻ ${prefix}delttc
  ≻ ${prefix}suit
  ≻ ${prefix}slot
  ≻ ${prefix}tebakgambar
  ≻ ${prefix}apakah <Query>
  ≻ ${prefix}kapankah <Query>
  ≻ ${prefix}rate <Query>
  ≻ ${prefix}gantecek <Nama>
  ≻ ${prefix}cantikcek <Nama>
  ≻ ${prefix}sangecek <Nama>
  ≻ ${prefix}gaycek <Nama>
  ≻ ${prefix}lesbicek <Nama>
  ≻ ${prefix}gimana <Query>
  ≻ ${prefix}bisakah <Query>
  ≻ ${prefix}cekme
  ≻ ${prefix}dadu
  ≻ ${prefix}truth
  ≻ ${prefix}dare
  
  𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗗𝗮𝗻 𝗕𝗮𝗻𝗸
  ≻ ${prefix}buylimit <Jumlah>
  ≻ ${prefix}buyglimit <Jumlah>
  ≻ ${prefix}transfer @tag <jumlah>
  ≻ ${prefix}limit
  ≻ ${prefix}balance
  ≻ ${prefix}topbalance

  𝗚𝗿𝗼𝘂𝗽 𝗠𝗲𝗻𝘂
  ≻ ${prefix}linkgrup
  ≻ ${prefix}setppgrup
  ≻ ${prefix}setnamegc
  ≻ ${prefix}setdesc
  ≻ ${prefix}group <Open/Close>
  ≻ ${prefix}revoke
  ≻ ${prefix}hidetag <Text>
  ≻ ${prefix}kick <@tag>
  ≻ ${prefix}add <@tag>
  
  𝗢𝘄𝗻𝗲𝗿 𝗠𝗲𝗻𝘂
  > evalcode
  x evalcode-2
  $ executor
  ≻ ${prefix}setppbot
  ≻ ${prefix}exif
  ≻ ${prefix}textchat
  ≻ ${prefix}leave
  ≻ ${prefix}addprem
  ≻ ${prefix}delprem
  ≻ ${prefix}broadcast

  𝘛𝘩𝘢𝘯𝘬𝘴 𝘛𝘰
  - 𝖠𝗅𝗅𝖺𝗁 𝖲𝗐𝗍`
}
