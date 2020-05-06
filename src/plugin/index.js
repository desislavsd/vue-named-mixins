
import { version } from '@/../package.json'

function extendOverride(target, prop, registry){

    let method = target[prop];

    target[prop] = function( options ){

        options?.mixins?.forEach( (mixin, i, mixins) => {

            if(typeof mixin != 'string' ) return;

            if( !registry[mixin] ) return mixins.splice(i, 1);
            
            mixins.splice(i, 1, registry[mixin]);

        })

        return method.apply(this, arguments)
    }
    
}

function mixinOverride(target, prop, registry){

    let method = target[prop];

    target[prop] = function (name, mixin){

        if(arguments.length == 2)
            return registry[name] = mixin;

        return method.apply(this, arguments);
    }
}

function install(Vue, registry = {}){

    registry = Object.assign(Object.create(null), registry);

    /**
     * Make the default Vue.extend method be able
     * to process mixins passed as strings in
     * the provided options object
     */
    extendOverride(Vue, 'extend', registry);

    /**
     * TODO: In some projects may be necessary to override the `._init` as well:
     * extendOverride(Vue.prototype, '_init', registry);
     */
    
    /**
     * Allow adding entries to the registry via Vue.mixin(name, mixin)
     */
    mixinOverride(Vue, 'mixin', registry);
}

export default { install, version }