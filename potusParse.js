const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://en.wikipedia.org/wiki/George_Washington';

const potusParse = url =>{
  return rp(url)
  .then(html=>{
    return{
      name: $('.firstHeading', html).text(),
      birthday: $('.bday', html).text()
    };    
  })
  .catch(err=>{
    console.log(err);
  })
}

module.exports = potusParse;