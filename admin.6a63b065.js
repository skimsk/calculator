// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/data/price.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  // Монтажник
  employee: {
    Ramochnaya25: {
      canvas: [{
        key: 'fiberglass',
        price: 1980,
        min: 1980
      }, {
        key: 'petscreen',
        price: 4098,
        min: 990
      }, {
        key: 'micromesh',
        price: 1250,
        min: 850
      }, {
        key: 'maxivision',
        price: 1100,
        min: 800
      }, {
        key: 'polltex',
        price: 1900,
        min: 1500
      }, {
        key: 'sunlight',
        price: 1900,
        min: 1500
      }, {
        key: 'antibird',
        price: 1500,
        min: 990
      }, {
        key: 'diamond',
        price: 1700,
        min: 1200
      }, {
        key: 'antipo',
        price: 1700,
        min: 1200
      }, {
        key: 'metalmesh',
        price: 1700,
        min: 1200
      }, {
        key: 'resplion',
        price: 1700,
        min: 1200
      }],
      //цвет рамки
      frame_color: [{
        key: 'antracite',
        price: 200
      }],
      //углы
      corners: [{
        key: 'metallicheskie',
        price: 200
      }, {
        key: 'metallicheskie',
        price: 200
      }],
      //ручки
      handles: [{
        key: 'metallicheskie',
        price: 100
      }]
    },
    VstavnayaVSN: {
      canvas: [{
        key: 'fiberglass',
        price: 1980,
        min: 650
      }, {
        key: 'petscreen',
        price: 4098,
        min: 990
      }, {
        key: 'micromesh',
        price: 1250,
        min: 850
      }, {
        key: 'maxivision',
        price: 1100,
        min: 800
      }, {
        key: 'polltex',
        price: 1900,
        min: 1500
      }, {
        key: 'sunlight',
        price: 1900,
        min: 1500
      }, {
        key: 'antibird',
        price: 1500,
        min: 990
      }, {
        key: 'diamond',
        price: 1700,
        min: 1200
      }, {
        key: 'antipo',
        price: 1700,
        min: 1200
      }, {
        key: 'metalmesh',
        price: 1700,
        min: 1200
      }, {
        key: 'resplion',
        price: 1700,
        min: 1200
      }],
      //цвет рамки
      frame_color: [{
        key: 'antracite',
        price: 1000
      }],
      //углы
      corners: [{
        key: 'metallicheskie',
        price: 200
      }],
      //ручки
      handles: [{
        key: 'metallicheskie',
        price: 100
      }]
    },
    Ramochnaya32: {
      canvas: [{
        key: 'fiberglass',
        price: 2890,
        min: 2890
      }, {
        key: 'petscreen',
        price: 4090,
        min: 4090
      }, {
        key: 'micromesh',
        price: 3890,
        min: 3890
      }, {
        key: 'maxivision',
        price: 3690,
        min: 3690
      }, {
        key: 'polltex',
        price: 5090,
        min: 5090
      }, {
        key: 'sunlight',
        price: 5090,
        min: 5090
      }, {
        key: 'antibird',
        price: 4090,
        min: 4090
      }, {
        key: 'diamondsteel',
        price: 4590,
        min: 4590
      }],
      frame_color: [{
        key: 'antracite',
        price: 400
      }],
      montage: [{
        key: 'easy',
        data: [{
          key: 'area',
          data: [{
            min: 0,
            max: 1.4,
            price: 350
          }, {
            min: 1.4,
            price: 450
          }]
        }]
      }, {
        key: 'hard',
        data: [{
          key: 'area',
          data: [{
            min: 0,
            max: 1.4,
            price: 450
          }, {
            min: 1.4,
            price: 550
          }]
        }]
      }]
    },
    RamochnayaAlumSN: {
      canvas: [{
        key: 'fiberglass',
        price: 4200,
        min: 4200
      }, {
        key: 'petscreen',
        price: 5400,
        min: 5400
      }, {
        key: 'micromesh',
        price: 5200,
        min: 5200
      }, {
        key: 'maxivision',
        price: 5000,
        min: 5000
      }, {
        key: 'polltex',
        price: 6300,
        min: 6300
      }, {
        key: 'sunlight',
        price: 6300,
        min: 6300
      }, {
        key: 'antibird',
        price: 5400,
        min: 5400
      }, {
        key: 'diamondsteel',
        price: 5900,
        min: 5900
      }]
    },
    RamochnayaUSN: {
      canvas: [{
        key: 'fiberglass',
        price: 4200,
        min: 4200
      }, {
        key: 'petscreen',
        price: 5400,
        min: 5400
      }, {
        key: 'micromesh',
        price: 5200,
        min: 5200
      }, {
        key: 'maxivision',
        price: 5000,
        min: 5000
      }, {
        key: 'polltex',
        price: 6300,
        min: 6300
      }, {
        key: 'sunlight',
        price: 6300,
        min: 6300
      }, {
        key: 'antibird',
        price: 5400,
        min: 5400
      }, {
        key: 'diamondsteel',
        price: 5900,
        min: 5900
      }]
    },
    VstavnayaSKF: {
      canvas: [{
        key: 'fiberglass',
        price: 2790,
        min: 2790
      }, {
        key: 'petscreen',
        price: 3990,
        min: 3990
      }, {
        key: 'micromesh',
        price: 3790,
        min: 3790
      }, {
        key: 'maxivision',
        price: 3590,
        min: 3590
      }, {
        key: 'polltex',
        price: 4890,
        min: 4890
      }, {
        key: 'sunlight',
        price: 4890,
        min: 4890
      }, {
        key: 'antibird',
        price: 3990,
        min: 3990
      }, {
        key: 'diamondsteel',
        price: 4490,
        min: 4490
      }],
      frame_color: [{
        key: 'antracite',
        price: 400
      }]
    },
    Krilo: {
      canvas: [{
        key: 'fiberglass',
        price: 2290,
        min: 2290
      }, {
        key: 'petscreen',
        price: 3490,
        min: 3490
      }, {
        key: 'micromesh',
        price: 3290,
        min: 3290
      }, {
        key: 'maxivision',
        price: 3090,
        min: 3090
      }, {
        key: 'polltex',
        price: 4490,
        min: 4490
      }, {
        key: 'sunlight',
        price: 4490,
        min: 4490
      }, {
        key: 'antibird',
        price: 3490,
        min: 3490
      }, {
        key: 'diamondsteel',
        price: 3990,
        min: 3990
      }],
      frame_color: [{
        key: 'antracite',
        price: 400
      }],
      handles: [{
        key: 'metallicheskie',
        price: 150
      }]
    },
    RazdvignayaProvedal: {
      canvas: [{
        key: 'fiberglass',
        price: 2790,
        min: 2790
      }, {
        key: 'petscreen',
        price: 3990,
        min: 3990
      }, {
        key: 'micromesh',
        price: 3790,
        min: 3790
      }, {
        key: 'maxivision',
        price: 3590,
        min: 3590
      }, {
        key: 'polltex',
        price: 4990,
        min: 4990
      }, {
        key: 'sunlight',
        price: 4990,
        min: 4990
      }, {
        key: 'antibird',
        price: 3990,
        min: 3990
      }, {
        key: 'diamondsteel',
        price: 4490,
        min: 4490
      }],
      frame_color: [{
        key: 'antracite',
        price: 400
      }],
      montage: [{
        key: 'easy',
        price: 900
      }, {
        key: 'hard',
        price: 1100
      }]
    },
    Dvernaya25: {
      canvas: [{
        key: 'fiberglass',
        price: 2390,
        min: 2390
      }, {
        key: 'petscreen',
        price: 3590,
        min: 3590
      }, {
        key: 'micromesh',
        price: 3390,
        min: 3390
      }, {
        key: 'maxivision',
        price: 3190,
        min: 3190
      }, {
        key: 'polltex',
        price: 4590,
        min: 4590
      }, {
        key: 'sunlight',
        price: 4590,
        min: 4590
      }, {
        key: 'antibird',
        price: 3790,
        min: 3790
      }, {
        key: 'diamondsteel',
        price: 4090,
        min: 4090
      }],
      frame_color: [{
        key: 'antracite',
        price: 400
      }],
      montage: [{
        key: 'easy',
        price: 700
      }, {
        key: 'hard',
        price: 900
      }]
    },
    Dvernaya32: {
      canvas: [{
        key: 'fiberglass',
        price: 3290,
        min: 3290
      }, {
        key: 'petscreen',
        price: 4490,
        min: 4490
      }, {
        key: 'micromesh',
        price: 4290,
        min: 4290
      }, {
        key: 'maxivision',
        price: 4090,
        min: 4090
      }, {
        key: 'polltex',
        price: 5490,
        min: 5490
      }, {
        key: 'sunlight',
        price: 5490,
        min: 5490
      }, {
        key: 'antibird',
        price: 4790,
        min: 4790
      }, {
        key: 'diamondsteel',
        price: 4990,
        min: 4990
      }],
      hinges: [{
        key: 's-dovodchikom',
        price: 1200
      }],
      montage: [{
        key: 'easy',
        data: [{
          key: 'hinges',
          data: [{
            key: 'metallicheskie',
            price: 700
          }, {
            key: 's-dovodchikom',
            price: 900
          }]
        }]
      }, {
        key: 'hard',
        data: [{
          key: 'hinges',
          data: [{
            key: 'metallicheskie',
            price: 900
          }, {
            key: 's-dovodchikom',
            price: 1100
          }]
        }]
      }]
    },
    Dvernaya42: {
      canvas: [{
        key: 'fiberglass',
        price: 3290,
        min: 3290
      }, {
        key: 'petscreen',
        price: 4490,
        min: 4490
      }, {
        key: 'micromesh',
        price: 4290,
        min: 4290
      }, {
        key: 'maxivision',
        price: 4090,
        min: 4090
      }, {
        key: 'polltex',
        price: 5490,
        min: 5490
      }, {
        key: 'sunlight',
        price: 5490,
        min: 5490
      }, {
        key: 'antibird',
        price: 4790,
        min: 4790
      }, {
        key: 'diamondsteel',
        price: 4990,
        min: 4990
      }],
      frame_color: [{
        key: 'antracite',
        price: 400
      }],
      hinges: [{
        key: 's-dovodchikom',
        price: 1200
      }],
      montage: [{
        key: 'easy',
        data: [{
          key: 'hinges',
          data: [{
            key: 'metallicheskie',
            price: 700
          }, {
            key: 's-dovodchikom',
            price: 900
          }]
        }]
      }, {
        key: 'hard',
        data: [{
          key: 'hinges',
          data: [{
            key: 'metallicheskie',
            price: 900
          }, {
            key: 's-dovodchikom',
            price: 1100
          }]
        }]
      }]
    },
    Dvernaya52: {
      canvas: [{
        key: 'fiberglass',
        price: 4000,
        min: 4000
      }, {
        key: 'petscreen',
        price: 5200,
        min: 5200
      }, {
        key: 'micromesh',
        price: 5000,
        min: 5000
      }, {
        key: 'maxivision',
        price: 4800,
        min: 4800
      }, {
        key: 'polltex',
        price: 6100,
        min: 6100
      }, {
        key: 'sunlight',
        price: 6100,
        min: 6100
      }, {
        key: 'antibird',
        price: 5200,
        min: 5200
      }, {
        key: 'diamondsteel',
        price: 5700,
        min: 5700
      }],
      hinges: [{
        key: 's-dovodchikom',
        price: 1200
      }],
      montage: [{
        key: 'easy',
        data: [{
          key: 'hinges',
          data: [{
            key: 'metallicheskie',
            price: 700
          }, {
            key: 's-dovodchikom',
            price: 900
          }]
        }]
      }, {
        key: 'hard',
        data: [{
          key: 'hinges',
          data: [{
            key: 'metallicheskie',
            price: 900
          }, {
            key: 's-dovodchikom',
            price: 1100
          }]
        }]
      }]
    },
    RulonnayaPolsha: {
      // price: 7800, min: 7800
      montage: [{
        key: 'easy',
        percent: 20
      }, {
        key: 'hard',
        percent: 25
      }]
    },
    RulonnayaItalia: {
      canvas: [{
        key: 'standart-gray',
        price: 9800,
        min: 9800
      }, {
        key: 'sunox',
        price: 10400,
        min: 10400
      }, {
        key: 'antipo-gray',
        price: 10700,
        min: 10700
      }, {
        key: 'antipo-black',
        price: 10700,
        min: 10700
      }],
      montage: [{
        key: 'easy',
        percent: 20
      }, {
        key: 'hard',
        percent: 25
      }]
    },
    PlisseRussia: {
      canvas: [{
        key: 'standart-gray',
        price: 0
      }, {
        key: 'antivandal-gray',
        price: 800
      }, {
        key: 'maxivision-black',
        price: 800
      }, {
        key: 'antipo-gray',
        price: 800
      }, {
        key: 'waterproof-gray',
        price: 800
      }],
      opening: [{
        key: 'odnostoronee',
        price: 7990
      }, {
        key: 'vstrechnoe',
        price: 9990
      }, {
        key: 'reversivnoe',
        price: 9990
      }, {
        key: 'verticalnoe',
        price: 7990
      }],
      doorstep: [{
        key: 'nizkiy4mm',
        price: 200
      }],
      montage: [{
        key: 'easy',
        percent: 20
      }, {
        key: 'hard',
        percent: 25
      }]
    },
    PlisseItalia: {
      opening: [{
        key: 'odnostoronee',
        price: 11500
      }, {
        key: 'vstrechnoe',
        price: 13500
      }, {
        key: 'reversivnoe',
        price: 13500
      }, {
        key: 'verticalnoe',
        price: 11500
      }],
      install: [{
        key: 'nakladka7mm',
        price: 800
      }, {
        key: 'nakladka30mm-sborka',
        price: 800
      }, {
        key: 'nakladka30mm',
        price: 800
      }],
      montage: [{
        key: 'easy',
        percent: 20
      }, {
        key: 'hard',
        percent: 25
      }]
    },
    Arochnaya: {
      canvas: [{
        key: 'fiberglass',
        price: 5200,
        min: 5200
      }, {
        key: 'petscreen',
        price: 6400,
        min: 6400
      }, {
        key: 'micromesh',
        price: 6200,
        min: 6200
      }, {
        key: 'maxivision',
        price: 6000,
        min: 6000
      }, {
        key: 'polltex',
        price: 7400,
        min: 7400
      }, {
        key: 'sunlight',
        price: 7400,
        min: 7400
      }, {
        key: 'antibird',
        price: 6400,
        min: 6400
      }, {
        key: 'diamondsteel',
        price: 6900,
        min: 6900
      }],
      frame_color: [{
        key: 'antracite',
        price: 400
      }],
      corners: [{
        key: 'metallicheskie',
        price: 300
      }],
      handles: [{
        key: 'metallicheskie',
        price: 150
      }],
      montage: [{
        key: 'easy',
        price: 350
      }, {
        key: 'hard',
        price: 450
      }]
    },
    TrapeciyaStandart: {
      canvas: [{
        key: 'fiberglass',
        price: 3200,
        min: 3200
      }, {
        key: 'petscreen',
        price: 4400,
        min: 4400
      }, {
        key: 'micromesh',
        price: 4200,
        min: 4200
      }, {
        key: 'maxivision',
        price: 4000,
        min: 4000
      }, {
        key: 'polltex',
        price: 5400,
        min: 5400
      }, {
        key: 'sunlight',
        price: 5400,
        min: 5400
      }, {
        key: 'antibird',
        price: 4400,
        min: 4400
      }, {
        key: 'diamondsteel',
        price: 4900,
        min: 4900
      }],
      frame_color: [{
        key: 'antracite',
        price: 400
      }],
      corners: [{
        key: 'metallicheskie',
        price: 300
      }],
      handles: [{
        key: 'metallicheskie',
        price: 150
      }],
      montage: [{
        key: 'easy',
        price: 350
      }, {
        key: 'hard',
        price: 450
      }]
    },
    TrapeciyaUsilennaya32: {
      canvas: [{
        key: 'fiberglass',
        price: 4800,
        min: 4800
      }, {
        key: 'petscreen',
        price: 6000,
        min: 6000
      }, {
        key: 'micromesh',
        price: 5800,
        min: 5800
      }, {
        key: 'maxivision',
        price: 5600,
        min: 5600
      }, {
        key: 'polltex',
        price: 7000,
        min: 7000
      }, {
        key: 'sunlight',
        price: 7000,
        min: 7000
      }, {
        key: 'antibird',
        price: 6000,
        min: 6000
      }, {
        key: 'diamondsteel',
        price: 6500,
        min: 6500
      }],
      frame_color: [{
        key: 'antracite',
        price: 400
      }],
      corners: [{
        key: 'metallicheskie',
        price: 300
      }],
      handles: [{
        key: 'metallicheskie',
        price: 150
      }],
      montage: [{
        key: 'easy',
        price: 350
      }, {
        key: 'hard',
        price: 450
      }]
    },
    Perekatka: {
      canvas: [{
        key: 'fiberglass',
        price: 990,
        min: 990
      }, {
        key: 'petscreen',
        price: 2190,
        min: 2190
      }, {
        key: 'micromesh',
        price: 1990,
        min: 1990
      }, {
        key: 'maxivision',
        price: 1890,
        min: 1890
      }, {
        key: 'polltex',
        price: 3190,
        min: 3190
      }, {
        key: 'sunlight',
        price: 3190,
        min: 3190
      }, {
        key: 'antibird',
        price: 2190,
        min: 2190
      }, {
        key: 'diamondsteel',
        price: 2690,
        min: 2690
      }],
      remake: [{
        key: 'z-krepleniya',
        price: 0
      }, {
        key: 'vnutrennie-zacepi',
        price: 400
      }, {
        key: 'plungery',
        price: 600
      }, {
        key: 'ugly-metallicheskie',
        price: 300
      }, {
        key: 'ugly-plastikovie',
        price: 100
      }, {
        key: 'ruchki-metallicheskie',
        price: 150
      }, {
        key: 'petli-metallicheskie',
        price: 300
      }, {
        key: 'petli-s-dovodchikom',
        price: 1200
      }],
      montage: [{
        key: 'easy',
        price: 350
      }, {
        key: 'hard',
        price: 450
      }]
    }
  }

  /*
  //Дилерский прайс
   dealer: {
      Ramochnaya25: {
          canvas: [
              { key: 'fiberglass', price: 3560, min: 650 },
              { key: 'petscreen', price: 1500, min: 990 },
              { key: 'micromesh', price: 1250, min: 850 },
              { key: 'maxivision', price: 1100, min: 800 },
              { key: 'polltex', price: 1900, min: 1500 },
              { key: 'sunlight', price: 1900, min: 1500 },
              { key: 'antibird', price: 1500, min: 990 },
              { key: 'diamond', price: 1700, min: 1200 },
              { key: 'antipo', price: 1700, min: 1200 },
              { key: 'metalmesh', price: 1700, min: 1200 },
              { key: 'resplion', price: 1700, min: 1200 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],
          corners: [
              { key: 'metallicheskie', price: 200 },
          ],
          handles: [
              { key: 'metallicheskie', price: 100 },
          ],
          fastings: [
              { key: 'vnutrennie-zacepi', price: 50 },
              { key: 'plungery', price: 400 },
          ]
      },
      Ramochnaya32: {
          canvas: [
              { key: 'fiberglass', price: 2000, min: 1500 },
              { key: 'petscreen', price: 2800, min: 2100 },
              { key: 'micromesh', price: 2550, min: 1950 },
              { key: 'maxivision', price: 2400, min: 1900 },
              { key: 'polltex', price: 3200, min: 2600 },
              { key: 'sunlight', price: 3200, min: 2600 },
              { key: 'antibird', price: 2800, min: 2100 },
              { key: 'diamondsteel', price: 3000, min: 2400 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],
      },
      VstavnayaVSN: {
          canvas: [
              { key: 'fiberglass', price: 3560, min: 650 },
              { key: 'petscreen', price: 1500, min: 990 },
              { key: 'micromesh', price: 1250, min: 850 },
              { key: 'maxivision', price: 1100, min: 800 },
              { key: 'polltex', price: 1900, min: 1500 },
              { key: 'sunlight', price: 1900, min: 1500 },
              { key: 'antibird', price: 1500, min: 990 },
              { key: 'diamond', price: 1700, min: 1200 },
              { key: 'antipo', price: 1700, min: 1200 },
              { key: 'metalmesh', price: 1700, min: 1200 },
              { key: 'resplion', price: 1700, min: 1200 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],
      },
      RamochnayaAlumSN: {
          canvas: [
              { key: 'fiberglass', price: 2900, min: 2900 },
              { key: 'petscreen', price: 3700, min: 3700 },
              { key: 'micromesh', price: 3450, min: 3450 },
              { key: 'maxivision', price: 3300, min: 3300 },
              { key: 'polltex', price: 4000, min: 4000 },
              { key: 'sunlight', price: 4000, min: 4000 },
              { key: 'antibird', price: 3700, min: 3700 },
              { key: 'diamondsteel', price: 3850, min: 3850 },
          ], 
      },
      RamochnayaUSN: {
          canvas: [
              { key: 'fiberglass', price: 2900, min: 2900 },
              { key: 'petscreen', price: 3700, min: 3700 },
              { key: 'micromesh', price: 3450, min: 3450 },
              { key: 'maxivision', price: 3300, min: 3300 },
              { key: 'polltex', price: 4000, min: 4000 },
              { key: 'sunlight', price: 4000, min: 4000 },
              { key: 'antibird', price: 3700, min: 3700 },
              { key: 'diamondsteel', price: 3850, min: 3850 },
          ], 
      },
      VstavnayaSKF: {
          canvas: [
              { key: 'fiberglass', price: 1500, min: 1300 },
              { key: 'petscreen', price: 2300, min: 1900 },
              { key: 'micromesh', price: 2050, min: 1650 },
              { key: 'maxivision', price: 1900, min: 1600 },
              { key: 'polltex', price: 2700, min: 2300 },
              { key: 'sunlight', price: 2700, min: 2300 },
              { key: 'antibird', price: 2300, min: 1900 },
              { key: 'diamondsteel', price: 2500, min: 2100 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],
      },
      Krilo: {
          canvas: [
              { key: 'fiberglass', price: 1100, min: 900 },
              { key: 'petscreen', price: 1900, min: 1500 },
              { key: 'micromesh', price: 1600, min: 1300 },
              { key: 'maxivision', price: 1500, min: 1200 },
              { key: 'polltex', price: 2300, min: 1900 },
              { key: 'sunlight', price: 2300, min: 1900 },
              { key: 'antibird', price: 1900, min: 1500 },
              { key: 'diamondsteel', price: 2100, min: 1700 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],
          handles: [
              { key: 'metallicheskie', price: 100 },
          ],
      },
      RazdvignayaProvedal: {
          canvas: [
              { key: 'fiberglass', price: 2200, min: 1900 },
              { key: 'petscreen', price: 3000, min: 2500 },
              { key: 'micromesh', price: 2700, min: 2300 },
              { key: 'maxivision', price: 2500, min: 2200 },
              { key: 'polltex', price: 3400, min: 2900 },
              { key: 'sunlight', price: 3400, min: 2900 },
              { key: 'antibird', price: 3000, min: 2500 },
              { key: 'diamondsteel', price: 3200, min: 2700 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],
      },
      Dvernaya25: {
          canvas: [
              { key: 'fiberglass', price: 1500, min: 1500 },
              { key: 'petscreen', price: 2400, min: 2400 },
              { key: 'micromesh', price: 2100, min: 2400 },
              { key: 'maxivision', price: 1900, min: 1900 },
              { key: 'polltex', price: 2800, min: 2800 },
              { key: 'sunlight', price: 2800, min: 2800 },
              { key: 'antibird', price: 2400, min: 2400 },
              { key: 'diamondsteel', price: 2600, min: 2600 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],  
      },
      Dvernaya32: {
          canvas: [
              { key: 'fiberglass', price: 2700, min: 2700 },
              { key: 'petscreen', price: 3600, min: 3600 },
              { key: 'micromesh', price: 3300, min: 3300 },
              { key: 'maxivision', price: 3100, min: 3100 },
              { key: 'polltex', price: 4000, min: 4000 },
              { key: 'sunlight', price: 4000, min: 4000 },
              { key: 'antibird', price: 3600, min: 3600 },
              { key: 'diamondsteel', price: 3800, min: 3800 },
          ],
          hinges: [
              { key: 's-dovodchikom', price: 900 },
          ], 
      },
      Dvernaya42: {
          canvas: [
              { key: 'fiberglass', price: 2700, min: 2700 },
              { key: 'petscreen', price: 3600, min: 3600 },
              { key: 'micromesh', price: 3300, min: 3300 },
              { key: 'maxivision', price: 3100, min: 3100 },
              { key: 'polltex', price: 4000, min: 4000 },
              { key: 'sunlight', price: 4000, min: 4000 },
              { key: 'antibird', price: 3600, min: 3600 },
              { key: 'diamondsteel', price: 3800, min: 3800 },
          ],
          frame_color: [
              { key: 'antracite', price: 400 },
          ],
          hinges: [
              { key: 's-dovodchikom', price: 900 },
          ], 
      },
      Dvernaya52: {
          canvas: [
              { key: 'fiberglass', price: 2900, min: 2900 },
              { key: 'petscreen', price: 3700, min: 3700 },
              { key: 'micromesh', price: 3450, min: 3450 },
              { key: 'maxivision', price: 3300, min: 3300 },
              { key: 'polltex', price: 4000, min: 4000 },
              { key: 'sunlight', price: 4000, min: 4000 },
              { key: 'antibird', price: 3700, min: 3700 },
              { key: 'diamondsteel', price: 3850, min: 3850 },
          ], 
      },
      RulonnayaPolsha: {
          // price: 6000, min: 6000 
      },
      RulonnayaItalia: {
          canvas: [
              { key: 'standart-gray', price: 7200, min: 7200 },
              { key: 'sunox', price: 7700, min: 7700 },
              { key: 'antipo-gray', price: 8000, min: 8000 },
              { key: 'antipo-black', price: 8000, min: 8000 },
          ], 
      },
      PlisseRussia: {
          canvas: [
              { key: 'standart-gray', price: 0 },
              { key: 'antivandal-gray', price: 500 },
              { key: 'maxivision-black', price: 500 },
              { key: 'antipo-gray', price: 500 },
              { key: 'waterproof-gray', price: 500 },
          ],
          opening: [
              { key: 'odnostoronee', price: 5700 },
              { key: 'vstrechnoe', price: 7000 },
              { key: 'reversivnoe', price: 7000 },
              { key: 'verticalnoe', price: 5700 },
          ],
          doorstep: [
              { key: 'nizkiy4mm', price: 200 },
          ]  
      },
      PlisseItalia: {
          opening: [
              { key: 'odnostoronee', price: 9900 },
              { key: 'vstrechnoe', price: 12000 },
              { key: 'reversivnoe', price: 12000 },
              { key: 'verticalnoe', price: 9900 },
          ],
          install: [
              { key: 'nakladka7mm', price: 800 },
              { key: 'nakladka30mm-sborka', price: 800 },
              { key: 'nakladka30mm', price: 800 },
          ]  
      },
      Arochnaya: {
          canvas: [
              { key: 'fiberglass', price: 3500, min: 3500 },
              { key: 'petscreen', price: 4300, min: 4300 },
              { key: 'micromesh', price: 4000, min: 4000 },
              { key: 'maxivision', price: 3800, min: 3800 },
              { key: 'polltex', price: 4700, min: 4700 },
              { key: 'sunlight', price: 4700, min: 4700 },
              { key: 'antibird', price: 4300, min: 4300 },
              { key: 'diamondsteel', price: 4500, min: 4500 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],
          corners: [
              { key: 'metallicheskie', price: 200 },
          ],
          handles: [
              { key: 'metallicheskie', price: 100 },
          ],    
      },
      TrapeciyaStandart: {
          canvas: [
              { key: 'fiberglass', price: 2200, min: 2200 },
              { key: 'petscreen', price: 3000, min: 3000 },
              { key: 'micromesh', price: 2700, min: 2700 },
              { key: 'maxivision', price: 2500, min: 2500 },
              { key: 'polltex', price: 3400, min: 3400 },
              { key: 'sunlight', price: 3400, min: 3400 },
              { key: 'antibird', price: 3000, min: 3000 },
              { key: 'diamondsteel', price: 3200, min: 3200 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],
          corners: [
              { key: 'metallicheskie', price: 200 },
          ],
          handles: [
              { key: 'metallicheskie', price: 100 },
          ],    
      },
      TrapeciyaUsilennaya32: {
          canvas: [
              { key: 'fiberglass', price: 3200, min: 3200 },
              { key: 'petscreen', price: 4000, min: 4000 },
              { key: 'micromesh', price: 3700, min: 3700 },
              { key: 'maxivision', price: 3500, min: 3500 },
              { key: 'polltex', price: 4400, min: 4400 },
              { key: 'sunlight', price: 4400, min: 4400 },
              { key: 'antibird', price: 4000, min: 4000 },
              { key: 'diamondsteel', price: 4200, min: 4200 },
          ],
          frame_color: [
              { key: 'antracite', price: 200 },
          ],
          corners: [
              { key: 'metallicheskie', price: 200 },
          ],
          handles: [
              { key: 'metallicheskie', price: 100 },
          ],    
      },
      Perekatka: {
          canvas: [
              { key: 'fiberglass', price: 600, min: 500 },
              { key: 'petscreen', price: 1400, min: 900 },
              { key: 'micromesh', price: 1150, min: 750 },
              { key: 'maxivision', price: 1000, min: 750 },
              { key: 'polltex', price: 1800, min: 1400 },
              { key: 'sunlight', price: 1800, min: 1400 },
              { key: 'antibird', price: 1400, min: 900 },
              { key: 'diamondsteel', price: 1300, min: 1300 },
          ],
          remake: [
              { key: 'z-krepleniya', price: 0 },
              { key: 'vnutrennie-zacepi', price: 300 },
              { key: 'plungery', price: 400 },
              { key: 'ugly-metallicheskie', price: 200 },
              { key: 'ugly-plastikovie', price: 100 },
              { key: 'ruchki-metallicheskie', price: 100 },
              { key: 'petli-metallicheskie', price: 200 },
              { key: 'petli-s-dovodchikom', price: 900 },
          ],
      },
  },
  */
};
},{}],"admin/index.js":[function(require,module,exports) {
"use strict";

var _price = _interopRequireDefault(require("../src/data/price.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var app = document.getElementById('app');

// Функция для отображения формы редактирования цен
function renderPriceEditor() {
  var keys = Object.keys(_price.default.employee);
  keys.forEach(function (key) {
    var section = _price.default.employee[key];
    var heading = document.createElement('h2');
    heading.textContent = key;
    app.appendChild(heading);
    Object.keys(section).forEach(function (subKey) {
      var subSection = section[subKey];
      var subHeading = document.createElement('h3');
      subHeading.textContent = subKey;
      app.appendChild(subHeading);
      subSection.forEach(function (item) {
        var label = document.createElement('label');
        label.textContent = "".concat(item.key, ": ");
        var input = document.createElement('input');
        input.type = 'number';
        input.value = item.price;
        input.addEventListener('change', function () {
          item.price = parseInt(input.value);
        });
        app.appendChild(label);
        app.appendChild(input);
        app.appendChild(document.createElement('br'));
      });
      app.appendChild(document.createElement('hr'));
    });
  });

  // Создание кнопки "Сохранить"
  var saveButton = document.createElement('button');
  saveButton.textContent = 'Сохранить';
  saveButton.addEventListener('click', function () {
    savePrices();
  });
  app.appendChild(saveButton);
}

// Функция для сохранения изменений
function savePrices() {
  console.log('Отправка данных на сервер:', _price.default);
  fetch('http://localhost:3000/save-prices', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(_price.default)
  }).then(function (response) {
    console.log('Ответ сервера:', response);
    if (!response.ok) {
      return response.text().then(function (text) {
        throw new Error(text);
      });
    }
    return response.text();
  }).then(function (data) {
    console.log('Данные успешно сохранены:', data);
    alert('Изменения сохранены');
  }).catch(function (error) {
    console.error('Ошибка при сохранении данных:', error);
    alert("\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445: ".concat(error.message));
  });
}
renderPriceEditor();
},{"../src/data/price.js":"src/data/price.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49240" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","admin/index.js"], null)
//# sourceMappingURL=/admin.6a63b065.js.map