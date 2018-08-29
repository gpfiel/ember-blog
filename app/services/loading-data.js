import Service from '@ember/service';
import { later } from '@ember/runloop';

export default Service.extend({
	status: false,

  activate() {
    this.set('status', true)
  },
	deactivate() {
		later(() => {
			this.set('status', false)
		}, 1000);	
  },
});
