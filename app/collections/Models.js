import model from '../models/Model'

const Models = Backbone.Collection.extend({
  model: model,
  url: 'http://shintech.ninja:8001/api/fetch'
})

export default Models