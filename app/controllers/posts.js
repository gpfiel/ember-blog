import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	title: 'Posts List',
	queryParams: ['user'],
  user: null,

  filteredPosts: computed('user', 'posts', function() {
    let user = this.user;
    let posts = this.posts;

    if (user) {
      return posts.filterBy('user.id', user);
    } else {
      return posts;
    }
  })
});
