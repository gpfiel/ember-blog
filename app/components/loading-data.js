import Component from '@ember/component';

export default Component.extend({
	// store: Ember.inject.service(),
	classNames: ['component-loading-data'],
	classNameBindings: ['isEnabled::d-none'],
	isEnabled: false,
	didInsertElement() {
		// console.log(this.store.findRecord('user', 1))
		if (this.get('isEnabled')) {
	    Ember.run.later(() => {
	    	this.set('isEnabled', false)
	  	}, 1800);	
		}
  }
});
