import {default as Component} from '../Base.mjs';

/**
 * Convenience class to render an OpenStreetMap
 * Requires setting Neo.config.useOpenStreetMaps to true (or manually include the lib)
 * @class Neo.component.wrapper.OpenStreetMap
 * @extends Neo.component.Base
 */
class OpenStreetMap extends Component {
    static getConfig() {return {
        /**
         * @member {String} className='Neo.component.wrapper.OpenStreetMap'
         * @private
         */
        className: 'Neo.component.wrapper.OpenStreetMap',
        /**
         * @member {String} ntype='am-chart'
         * @private
         */
        ntype: 'am-chart',
        /**
         * @member {Object} _vdom
         */
        _vdom: {
            style: {position: 'relative', height: '100%', width: '100%'},
            cn: [{
                style: {position: 'absolute', height: '100%', width: '100%'},
                cn: [{
                    style: {
                        height: '100%'
                    }
                }]
            }]
        }
    }}

    /**
     *
     */
    getVdomRoot() {
        return this.vdom.cn[0].cn[0];
    }

    /**
     *
     */
    getVnodeRoot() {
        return this.vnode.childNodes[0].childNodes[0];
    }

    /**
     *
     */
    onConstructed() {
        super.onConstructed();

        const me = this;

        me.on('mounted', () => {
            Neo.main.lib.OpenStreetMaps.create({
                id: me.id
            }).then(me.onMapMounted);
        });
    }

    /**
     * Override this method to trigger logic after the map got mounted into the dom
     */
    onMapMounted() {
        console.log('onMapMounted');
    }
}

Neo.applyClassConfig(OpenStreetMap);

export {OpenStreetMap as default};