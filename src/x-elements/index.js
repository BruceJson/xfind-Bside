import XButton from './components/button';
import Flexbox from './components/flexbox';

var comps = {
    XButton,
    Flexbox,
    FlexItem: Flexbox.flexItem
};

const install = function (Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(comps).forEach(key => {
        Vue.component(key, comps[key]);
    });
}

const API = {
    install
};

export default API;
