import DS from 'ember-data';

export default DS.Model.extend({
  channelname: DS.attr(),
  password: DS.attr(),
  firstname: DS.attr(),
  lastname: DS.attr(),
  biography: DS.attr(),
  image_url: DS.attr()
});
