module.exports = {
  
    findAllIndonesia: async (req, res) => {
        let indonesia = await Indonesia.find({kabupaten:'KABUPATEN SUKOHARJO'});
        return res.ok(indonesia);
    }

};
