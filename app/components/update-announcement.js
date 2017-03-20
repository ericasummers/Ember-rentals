import Ember from 'ember';

export default Ember.Component.extend({
  updateAnnouncementForm: false,
  actions: {
    updateAnnouncementForm() {
      this.set('updateAnnouncementForm', true);
    },
    update(announcement) {
      var params = {
        name: this.get('name'),
        date: this.get('date'),
      };
      this.set('updateAnnouncementForm', false);
      this.sendAction('update', announcement, params);
    }
  }
});
