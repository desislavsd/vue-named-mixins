# vue-named-mixins

Register and access mixins by name.

![npm (scoped)](https://img.shields.io/npm/v/@desislavsd/vue-named-mixins.svg) ![NPM](https://img.shields.io/npm/l/@desislavsd/vue-named-mixins.svg) 
![npm](https://img.shields.io/npm/dt/@desislavsd/vue-named-mixins.svg)
![npm](https://img.shields.io/npm/dw/@desislavsd/vue-named-mixins.svg) 
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@desislavsd/vue-named-mixins.svg) 

If you ever felt tired of importing certain mixin over and over again but didn't want to make it global this package is for you.

## Usage

```shell
npm install @desislavsd/vue-named-mixins
```

Install the plugin as soon as you can, before you `import` any component that utilizes it, and provide a map of mixins you want available. Here is an example with [vuelidate](https://vuelidate.js.org/):

```javascript
import VueNamedMixins from '@desislavsd/vue-named-mixins'
import { validationMixin } from 'vuelidate'

Vue.use(VueNamedMixins, {
    vuelidate: validationMixin
})

// You can also register mixins using Vue.mixin
Vue.mixin('vuelidate', validationMixin)
```

Now instead of importing the registered mixins, they can be directly accessed by name in components definitions:

```vue
<script>
export default {
    mixins: ['vuelidate']
}
</script>
```

Enjoy! 🥳