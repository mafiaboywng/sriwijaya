module.exports = {

  attributes: {
    fullName: {
      type: 'string',
      required: true
    },
    mobileNumber: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    isVerified: {
      type: 'boolean',
      defaultsTo: false
    },
    // REF TO Branch.js
    branch: {
      collection: 'branch',
      via: 'user'
    }
  },

};

