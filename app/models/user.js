import DS from 'ember-data';
import EmberObject, { computed } from '@ember/object';

export default DS.Model.extend({
	name: DS.attr('string'),
	email: DS.attr('string'),
	phone: DS.attr('string'),
	username: DS.attr('string'),
	website: DS.attr('string'),
	address: DS.attr(),
	price: computed(function() {
    return '£' + Math.floor((Math.random() * 100) + 1) + ' per hour';
  }),
	subject: computed(function() {
		var subjects = ['Math', 'English', 'Science', 'Mechanic', 'Statistics', 'Phonic', 'Humanities', 'Design', 'Classics', 'Eletronics']
    return subjects[this.id - 1]
  })
});
