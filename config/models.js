module.exports.models = {
  
  schema: true,


  migrate: 'alter',

  attributes: {
    createdAt: { type: 'number', autoCreatedAt: true, },
    updatedAt: { type: 'number', autoUpdatedAt: true, },
    id: { type: 'string', columnName: '_id' },
  },

  dataEncryptionKeys: {
    default: 'GdY4lcR92OvJQi8jfeVuAF6I39kMSggxEKRwVcB0wmM='
  },

  cascadeOnDestroy: true

};
