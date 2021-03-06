"use strict";

const fs      = require('fs');
const extend  = require('extend');
const helper  = require('node-red-viseo-helper');

exports.init = () => {
    global.CONFIG = {};
    
    let path = helper.resolve(process.env['BOTBUILDER_CFG']);
    if (!path) return;

    extend(true, CONFIG, loadConfiguration(path));
};

const loadConfiguration = (path) => {
    console.log('Loading properties...', path);
    if (!fs.existsSync(path)) { return {}; }
        
    let json = fs.readFileSync(path, 'utf8');
    return JSON.parse(json);
};