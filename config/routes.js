module.exports.routes = {

  '/': {
    view: 'pages/homepage'
  },
  'GET /indonesia' : 'IndonesiaController.findAllIndonesia',
  'GET /cinta' : 'IndonesiaController.cinta'


};
