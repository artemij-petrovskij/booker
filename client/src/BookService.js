const fetch = require('node-fetch')
const url = 'api'
class Book {
  static getAllBooks = async () => {
    try {
      const res = await fetch(`${url}/books`);

      let data = await res.json();
      return data
    } catch (err) {

      console.error(err);
    }
  }

  static addNewBook = async (body) => {
    try {
      await fetch(`${url}/add`,
        {
          method: 'post',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
      console.error(err);
    }
  }


}

export { Book }
