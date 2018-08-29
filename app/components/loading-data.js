import Component from '@ember/component';

export default Component.extend({
	classNames: ['component-loading-data'],
	classNameBindings: ['isEnabled::d-none'],
	isEnabled: false
});
