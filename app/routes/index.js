import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
    return this.store.findAll('announcement');
  },
  actions:{
    saveRental(params){
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    },
    saveAnnouncement(params){
      var newAnnouncement = this.store.createRecord('announcement', params);
      newAnnouncement.save();
      this.transitionTo('index');
    }
  }
});
