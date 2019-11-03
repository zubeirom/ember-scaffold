import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default Controller.extend({
  toastr: service('toast'),
  session: service(),

  checklist(obj) {
    if (obj.channelname !== undefined && obj.password !== undefined) {
      return true
    }
    this.toastr.error('Please enter all fields', 'Warning');
    return false
  },

  actions: {
    async register(){
      set(this, 'loader', true);
      if(this.checklist(this.model)) {
        if(this.model.password === this.secondPassword) {
          try {
            await this.model.save();
            set(this.model, 'password', '');
            set(this, 'secondPassword', '');
          } catch (error) {
            console.log(error);
            this.toastr.error('Account exists already', 'Error');
            set(this.model, 'password', '');
            set(this, 'secondPassword', '');
          }
        } else {
          this.toastr.warning('Passwords don\'t match', 'Warning');
        }
      }
      set(this, 'loader', false);
    }
  }
  
});
