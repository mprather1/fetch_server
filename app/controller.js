import Marionette from 'marionette'
import Models from './collections/Models'
import ModelsView from './views/ModelsView'

const Controller = Marionette.Object.extend({
  initialize: function (options) {
    const models = new Models()
    models.fetch({
      success: (data) => {
        console.log('success')
      },
      failure: (err) => {
        console.log(err)
      }
    })

    this.app = options.app
    this.app.view.showChildView('main', new ModelsView({ collection: models }))
  }
})

export default Controller
