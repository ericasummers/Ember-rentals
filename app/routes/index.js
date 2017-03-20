import Ember from 'ember';

export default Ember.Route.extend({
  model(rental) {
    return this.store.findAll('rental');
  },
  actions:{
    saveRental(params){
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
    }
  }
});
