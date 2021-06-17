const mongosee = require('mongoose')
const conf = require('../conf.json')
const uri = process.env.uri;
mongosee.connect(uri,  { useUnifiedTopology: true, useNewUrlParser: true  } )

const sema = mongosee.Schema

const uye = new sema({
   uid: String,
   klan: String,
   para: Number,
   unvan: String,
   work: String,
   ulke: String,
    mulk: String,
    alink: String,
    monnsterkills: Number,
    arenaticket: Number,
    can: Number,
    atk: Number,
    din: String,
    gsayı: String,
    premium: Number,
    durum: Number
    })

const Uye = mongosee.model('profil', uye)
module.exports = Uye