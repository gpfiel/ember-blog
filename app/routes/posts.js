import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	loadingData: service('loading-data'),
	model(params) {
		this.loadingData.activate()
		return this.store.findAll('post');
	},
	afterModel() {
		this.loadingData.deactivate()
	},
	setupController(controller, model) {
		controller.set('posts', model)
	},
	resetController(controller) {
		if (controller) {
			controller.get('queryParams').forEach((param) => {
				controller.set(param, null)
			})
		}
	}
});
