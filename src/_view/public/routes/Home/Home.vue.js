import ApiService from "../../../../_services/Api.service";
import store from '../../../../_store';
import router from "../../../../_router";
import {CONSTANTS_CONFIG} from "../../../../_config/Constants.config";

export default {
  name: 'home',
  props: [],
  data: function () {
    return {
      api: new ApiService(),
      signUpMobileFormState : {},
      signUpMobileForm : {
        mobile: store.getters['mobile']? store.getters['mobile'] : '0403792427',
        password: '123456',
        reEnterPassword: '123456'
      }
    };
  },
  created: function () {
  },
  methods: {
    submitSignUpMobileForm : function(){
      store.dispatch('UPDATE_MOBILE', this.signUpMobileForm.mobile);
      router.push({name: 'verify', params: {}});
    }
  },
  computed: {},
  components: {}
}
