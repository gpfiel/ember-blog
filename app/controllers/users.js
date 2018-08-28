import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { A } from '@ember/array';

export default Controller.extend({
	title: 'Welcome to tutors match',
	filter: '',

	currentSortingProperties: A(["name:asc"]),
  currentSortingProperty: 'name',
  currentSortingDirection: 'asc',

	usersSortedList: computed.sort('filteredUsers', 'currentSortingProperties'),

  filteredUsers: computed('filter', function() {
    const filterTerm = this.get('filter');
    var model = this.get('model');

    var filtered = model.filter( function(user) {
        return user.get('name').toLowerCase().indexOf(filterTerm) !== -1 || user.get('subject').toLowerCase().indexOf(filterTerm) !== -1;
    });

    return filtered;
  }),

  reverse: computed('currentSortingDirection', function() {
    if (this.get('currentSortingDirection') == 'asc')
			return true; 
		else 
			return false;
  }),

  reverseDirection() {
		if (this.get('currentSortingDirection') == 'asc')
			return 'desc' 
		else 
			return 'asc'	
	},

  actions: {
		sortBy(property) {
			var direction;
			if (this.get('currentSortingProperty') == property)
				direction = this.reverseDirection()
			else
				direction = 'asc'

			this.set('currentSortingProperty', property)
			this.set('currentSortingDirection', direction)
			this.set('currentSortingProperties', [property+":"+direction])
		}
  }

});
