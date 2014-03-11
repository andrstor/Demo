/*jshint evil:true*/

if (typeof document !== "undefined") {
    (function () {
        sl = {
            root: null,
            modules: {},
            loaded: {},
            unloaded: function() {
                for (var key in sl.modules) {
                    if (!sl.loaded[key]) {
                        console.log(key);
                    }
                }
            },
            globalEval: function (data) { 
                if (data) {
                    (window.execScript || function (data) {
                        try {
                            window["eval"].call(window, data);
                        } catch (e) {
                            console.error('Scriptloader: Type error, could not eval a file.');
                            console.error(data);
                            //console.error(e.message);
                            /*
                            Something is wrong in the file. Check the data argument above to see what file.
                            */
                            throw (e);
                        }
                    })(data);
                }
            },
            requireModule: function (name) {
                var loaded = sl.loaded[name];

                var mod = sl.modules[name];

                if (!loaded) {
                    if (mod) {
                        sl.loaded[name] = true;

                        if (typeof mod === "string") {
                            //console.log("#Scriptloader: " + name + " module loaded.");
                            this.globalEval(mod);
                        } else {
                            mod();
                        }
                    } else {
                        if (sl.root && name.substr(0, sl.root.length) !== sl.root) {
                            return sl.requireModule(sl.root + name);
                        } else {
                            console.error("The module '" + name + "' could not be found");
                            throw "The module '" + name + "' could not be found";
                        }
                    }
                } else {
                    //console.log("The module" + name + " has already been loaded");
                }

                return loaded;
            },
            requireAll: function (regex) {
                for (var module in this.modules) {
                    if (!this.modules.hasOwnProperty(module)) { continue; }
                    if (regex && !regex.test(module)) { continue; }
                    sl.requireModule(module);
                }
            },
            require: function (path) {
                if (typeof path === 'string') {
                    sl.requireModule(path);
                } else {
                    sl.requireAll(path);
                }
            },
            register: function (name, callback) {
                sl.modules[name] = callback;
            }
             
        };
    })();
}

window.minispade = sl;
