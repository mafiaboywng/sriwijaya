module.exports = {

  attributes: {
    name: {
      type: 'string',
      required: true
    },
    long: {
      type: 'number',
      required: true
    },
    lati: {
      type: 'number',
      required: true
    },
    user: {
      model: 'user'
    }
  },

};

