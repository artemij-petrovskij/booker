const fetch = require('node-fetch')
const url = 'api/'
class Book {
  static get = async () => {
    try {
      const res = await fetch(`${url}/books`);

      let data = await res.json();
      return data
    } catch (err) {

      console.error(err);
    }
  }


}

export {Book}
