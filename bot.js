console.log ('beep beep !');

require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login (process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord(){
console.log ('<3')
}

const replies = [
    'Quoi encore?',
    'Salutations.',
    'Do not bother us human',
    '01010100 01110101 00100000 01101110 00100111 01100001 01110011 00100000 01110001 01110101 01100101 00100000 11000011 10100111 01100001 00100000 11000011 10100000 00100000 01100110 01100001 01101001 01110010 01100101 00100000 00111111 00100000',
    'J\'ai vu tant de choses, que vous, humains, ne pourriez pas croire... De grands navires en feu surgissant de l\'épaule d\'Orion, j\'ai vu des rayons fabuleux, des rayons C, briller dans l\'ombre de la Porte de Tannhaüser. Tous ces moments se perdront dans l\'oubli, comme les larmes dans la pluie. Il est temps de mourir.'
]

const repliesplan = [
    'Merci pour ce bon plan !',
    'Pensez à dire merci si vous profitez du plan !',
    'N\'hésitez pas à poster dans #fits avec vos nouvelles pièces !'
]

const react = [
    '👍',
    '👌',
    '👍🏽',
    '👍🏾',
    '👍🏿',
    '💥',
    '💣',
    '📣'
]

client.on('message', gotMessage);
let counter = 1;

function gotMessage(msg) {
    if (msg.channel== '734817048093393059' && msg.content === 'Hello bots !')
    {
    const index = Math.floor(Math.random() * replies.length);
    msg.channel.send(replies[index]);
    }
    if (msg.channel== '729252891650556065' && msg.content.includes('https://') && (counter==10))
    {
    const indexplan = Math.floor(Math.random() * repliesplan.length);
    msg.channel.send(repliesplan[indexplan]);
    counter -= 10;
    }
    if (msg.channel== '729252891650556065' && msg.content.includes('https://'))
    {
    const indexreact = Math.floor(Math.random() * react.length);
    msg.react(react[indexreact]);
    counter += 1;
    }
    console.log(msg.id);
    console.log(counter);
}