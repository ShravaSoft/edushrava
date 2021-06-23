const PopperJS = require('popper.js');

export default class Popper {
    constructor() {
        this.placements = PopperJS.placements;

        return {
            destroy: () => {},
            scheduleUpdate: () => {}
        }
    }
}