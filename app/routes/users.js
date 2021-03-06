import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	loadingData: service('loading-data'),
	model() {
		this.loadingData.activate()
		return this.store.findAll('user');
	},
	afterModel() {
		this.loadingData.deactivate()
	},
	setupController(controller, model) {
		controller.set('users', model)
	}
});
