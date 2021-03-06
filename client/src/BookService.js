const fetch = require('node-fetch')
const url = '/api'
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

  static showSingleBook = async (body) => {
    try {
      const query = await fetch(`${url}/single`,
        {
          method: 'post',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });

      const responseJSON = await query.json();
      return responseJSON
    } catch (err) {
      console.error(err);
    }
  }

  static editItem = async (body) => {
    try {
      const response = await fetch(`${url}/edit`,
        {
          method: 'post',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 201) {
          return response
        } else {
          return { err: 'Server error' }
        }
    } catch (err) {
      console.error(err);
    }
  }

  static deleteItem = async (body) => {
    try {
      const response = await fetch(`${url}/delete`,
        {
          method: 'post',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        });
      if (response.status === 201) {
        return response
      } else {
        return { err: 'Server error' }
      }

    } catch (err) {
      console.error(err);
    }
  }

}

export { Book }
