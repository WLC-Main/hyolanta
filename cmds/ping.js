module.exports = {
    name: 'üye',
    description: 'test!',
    execute(message, args) {
        const uyesema = require('../models/uye')
      const uye = new uyesema({
          uid: message.author.id,
          unvan: 'Beater',
          stat: "0",
          alink: "https://media.discordapp.net/attachments/755114934886727763/766347294806900736/866e4fc191237bd66d5526c64eea9799.png"
      })
uye.save()
uyesema.findOne({uid: message.author.id}).exec((error, data) => {
if(error) {throw error}

    const embed = {
        "footer": {
            "text": "iletişim için @Hyo"
        },
        "image": {
            "url": data.alink
        },

        "fields": [
            {
                "name": "<:thonkang:219069250692841473>",
                "value": "these last two",
                "inline": true
            },
            {
                "name": "<:thonkang:219069250692841473>",
                "value": "are inline fields",
                "inline": true
            }
        ]
    };

    message.channel.send({ embed });


})


    },
};