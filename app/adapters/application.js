import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from '../config/environment';
import { isPresent } from '@ember/utils';

export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
    namespace: 'api',
    host: ENV.host,
    authorize(xhr) {
        let { access_token } = this.get('session.data.authenticated');
        if (isPresent(access_token)) {
            xhr.setRequestHeader('Authorization', `Bearer ${access_token}`);
        }
    }
});
