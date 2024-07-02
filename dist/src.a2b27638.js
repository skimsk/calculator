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
})({"src/config.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  name: 'Калькулятор москитных сеток',
  description: "Калькулятор москитных сеток",
  user: {
    id: "1",
    name: "Nikolay",
    email: "nikolay@example.com",
    role: "employee"
    // role: "dealer"
  },
  webhooks: {
    //bitrix24: 'https://geo-setki.ru/bitrix/index.php?action=bitrix',
    //bitrix24: 'https://geo-setki.ru/controller.php'
  }
};
},{}],"src/user/User.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _config = _interopRequireDefault(require("../config.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _roles = /*#__PURE__*/new WeakMap();
var User = /*#__PURE__*/function () {
  function User(user) {
    _classCallCheck(this, User);
    _defineProperty(this, "id", null);
    _defineProperty(this, "name", '');
    _defineProperty(this, "email", '');
    _defineProperty(this, "role", null);
    _defineProperty(this, "permissions", []);
    // Ассоциация названия роли пришедшей с сервера с ролью используемой в приложении
    // Для исключения несоответсвия названий если роль поменяется на сервере
    // {servername: appname}
    _classPrivateFieldInitSpec(this, _roles, {
      employee: 'employee',
      dealer: 'dealer'
    });
    if (!user) throw new Error("[User.setUser] Invalid user");
    if (!user.role) throw new Error("[User.setUser] Invalid user role");
    if (!_classPrivateFieldGet(_roles, this)[user.role]) throw new Error("[User.setUser] Invalid set user role");
    this.id = user.id || '';
    this.name = user.name || '';
    this.email = user.email || '';
    this.role = _classPrivateFieldGet(_roles, this)[user.role];
    this.permissions = user.permissions || [];
  }
  return _createClass(User, [{
    key: "getRole",
    value: function getRole() {
      return this.role;
    }
  }]);
}();
var user = new User(_config.default.user);
// const user = new User();
// const userdata = await fetchUserData().then((response) => {
//     user.setUser(response);
// }); 
var _default = exports.default = user;
},{"../config.js":"src/config.js"}],"src/data/products.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = [
// Рамочная 25мм
{
  key: 'Ramochnaya25',
  title: 'Рамочная 25мм',
  // selected: true,
  form: {
    name: 'Ramochnaya25',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'antracite',
          label: 'Антрацит (7016)'
        }, {
          value: 'black',
          label: 'Черный (9005)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '2000',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '200',
        max: '3000',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'fastings',
        type: 'radio',
        label: 'Тип крепления',
        items: [{
          value: 'z-krepleniya-m',
          label: 'Z-образное (металл)',
          checked: true
        }, {
          value: 'z-krepleniya-p',
          label: 'Z-образное (пластик)'
        }, {
          value: 'vnutrennie-zacepi',
          label: 'Внутренние зацепы'
        }, {
          value: 'plungery',
          label: 'Плунжеры'
        }, {
          value: 'bezkrepleniya',
          label: 'Без креплений'
        }]
      }, {
        key: 'komplekt',
        type: 'radio',
        label: 'Комплект креплений',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'half',
          label: '1,5'
        }, {
          value: 'two',
          label: '2'
        }]
      }, {
        key: 'corners',
        type: 'radio',
        label: 'Углы',
        items: [{
          value: 'plastikovie',
          label: 'Пластиковые',
          checked: true
        }, {
          value: 'metallicheskie',
          label: 'Металлические'
        }]
      }, {
        key: 'peremychka',
        type: 'radio',
        label: 'Количество перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }, {
        key: 'handles',
        type: 'radio',
        label: 'Ручки',
        items: [{
          value: 'silikonovie',
          label: 'Силиконовые'
        }, {
          value: 'metallicheskie',
          label: 'Металлические',
          checked: true
        }, {
          value: 'bezruchek',
          label: 'Без ручек'
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Вставная VSN
{
  key: 'VstavnayaVSN',
  title: 'Вставная «VSN» ',
  // selected: true,
  form: {
    name: 'VstavnayaVSN',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'antracite',
          label: 'Антрацит (7016)'
        }, {
          value: 'black',
          label: 'Черный (9005)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '1600',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '200',
        max: '3000',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'komplekt',
        type: 'radio',
        label: 'Комплект креплений',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'half',
          label: '1,5'
        }, {
          value: 'two',
          label: '2'
        }]
      }, {
        key: 'peremychka',
        type: 'radio',
        label: 'Кол-во перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Рамочная "AlumSN"
{
  key: 'RamochnayaAlumSN',
  title: 'Рамочная «AlumSN»',
  // selected: true,
  form: {
    name: 'RamochnayaAlumSN',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'antracite',
          label: 'Антрацит (7016)'
        }, {
          value: 'black',
          label: 'Черный (9005)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        min: '200',
        max: '1600',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '300',
        max: '3500',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'komplekt',
        type: 'radio',
        label: 'Комплект креплений',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'half',
          label: '1,5'
        }]
      }, {
        key: 'peremychka',
        type: 'radio',
        label: 'Кол-во перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Раздвижная «Проведал»
{
  key: 'RazdvignayaProvedal',
  title: 'Раздвижная «PROVEDAL»',
  // selected: true,
  form: {
    name: 'RazdvignayaProvedal',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '1600',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '200',
        max: '2500',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'rail',
        type: 'number',
        name: 'rail',
        label: 'Длинна рельс (направляющих)',
        value: '0',
        min: '0',
        max: '6000',
        step: '1',
        unit: 'мм.'
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'rails',
        type: 'radio',
        label: 'Кол-во рельс',
        items: [{
          value: 'two',
          label: '2',
          checked: true
        }, {
          value: 'one',
          label: '1'
        }, {
          value: 'norels',
          label: 'без рельс'
        }]
      }, {
        key: 'peremychka',
        type: 'radio',
        label: 'Кол-во перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Дверная 42мм
{
  key: 'Dvernaya42',
  title: 'Дверная 42мм',
  // selected: true,
  form: {
    name: 'Dvernaya42',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'antracite',
          label: 'Антрацит (7016)'
        }, {
          value: 'black',
          label: 'Черный (9005)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '2000',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '200',
        max: '3000',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'hinges',
        type: 'radio',
        label: 'Петли',
        items: [{
          value: 'metallicheskie',
          label: 'Без доводчика',
          checked: true
        }, {
          value: 's-dovodchikom',
          label: 'С доводчиком'
        }, {
          value: 'usilenye',
          label: 'Усиленные'
        }]
      }, {
        key: 'peremychka',
        type: 'radio',
        label: 'Кол-во перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }, {
        key: 'latches',
        type: 'radio',
        label: 'Кол-во шпингалетов',
        items: [{
          value: 'null',
          label: '0',
          checked: true
        }, {
          value: 'one',
          label: '1'
        }, {
          value: 'two',
          label: '2'
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Плиссе (Италия)
{
  key: 'PlisseItalia',
  title: 'PLISSE22 (Италия)',
  // selected: true,
  form: {
    name: 'PlisseItalia',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass" (Италия)',
          selected: true
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '400',
        max: '3000',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '400',
        max: '3000',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'opening',
      type: 'radio',
      label: 'Открывание',
      items: [{
        value: 'odnostoronee',
        label: 'Односторонние',
        checked: true
      }, {
        value: 'vstrechnoe',
        label: 'Встречное'
      }, {
        value: 'reversivnoe',
        label: 'Реверсивное'
      }, {
        value: 'verticalnoe',
        label: 'Вертикальное'
      }]
    }, {
      key: 'doorstep',
      type: 'radio',
      label: 'Порог',
      items: [{
        value: 'obichniy29mm',
        label: 'Обычный 29мм',
        checked: true
      }, {
        value: 'nizkiy7mm',
        label: 'Низкий 7мм'
      }]
    }, {
      key: 'montageplisse',
      type: 'radio',
      label: 'Тип монтажа',
      items: [{
        value: 'sobran',
        label: 'В сборке',
        checked: true
      }, {
        value: 'razobran',
        label: 'Без сборки'
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
}, {
  key: 'RulonnayaItalia',
  title: 'Роллетная KLIP40 (Италия)',
  // selected: true,
  form: {
    name: 'RulonnayaItalia',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglassrollet',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'antiporollet',
          label: 'Антипыль "Antipo" (Италия)'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '2000',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '200',
        max: '3000',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Рамочная OPTIMA
{
  key: 'Dvernaya52',
  title: 'Рамочная OPTIMA',
  // selected: true,
  form: {
    name: 'Dvernaya52',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '300',
        max: '2000',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '300',
        max: '3000',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'komplekt',
        type: 'radio',
        label: 'Комплект креплений',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'half',
          label: '1,5'
        }, {
          value: 'two',
          label: '2'
        }]
      }, {
        key: 'peremychka',
        type: 'radio',
        label: 'Количество перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Рамочная 32мм
{
  key: 'Ramochnaya32',
  title: 'Рамочная 32мм',
  // selected: true,
  form: {
    name: 'Ramochnaya32',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'antracite',
          label: 'Антрацит (7016)'
        }, {
          value: 'black',
          label: 'Черный (9005)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '2000',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '300',
        max: '3500',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'fastings',
        type: 'radio',
        label: 'Тип крепления',
        items: [{
          value: 'z-krepleniya-m',
          label: 'Z-образное (металл)',
          checked: true
        }, {
          value: 'z-krepleniya-p',
          label: 'Z-образное (пластик)'
        }, {
          value: 'vnutrennie-zacepi',
          label: 'Внутренние зацепы'
        }, {
          value: 'plungery',
          label: 'Плунжеры'
        }, {
          value: 'bezkrepleniya',
          label: 'Без креплений'
        }]
      }, {
        key: 'komplekt',
        type: 'radio',
        label: 'Комплект креплений',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'half',
          label: '1,5'
        }, {
          value: 'two',
          label: '2'
        }]
      }, {
        key: 'corners',
        type: 'radio',
        label: 'Углы',
        items: [{
          value: 'plastikovie',
          label: 'Пластиковые',
          checked: true
        }, {
          value: 'metallicheskie',
          label: 'Металлические'
        }]
      }, {
        key: 'peremychka',
        type: 'radio',
        label: 'Количество перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }, {
        key: 'handles',
        type: 'radio',
        label: 'Ручки',
        items: [{
          value: 'silikonovie',
          label: 'Силиконовые'
        }, {
          value: 'metallicheskie',
          label: 'Металлические',
          checked: true
        }, {
          value: 'bezruchek',
          label: 'Без ручек'
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
}, {
  key: 'PlisseRussia',
  title: 'Плиссе DMF',
  // selected: true,
  form: {
    name: 'PlisseRussia',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '400',
        max: '3000',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '400',
        max: '3000',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'opening',
      type: 'radio',
      label: 'Открывание',
      items: [{
        value: 'odnostoronee',
        label: 'Односторонние',
        checked: true
      }, {
        value: 'vstrechnoe',
        label: 'Встречное'
      }, {
        value: 'reversivnoe',
        label: 'Реверсивное'
      }, {
        value: 'verticalnoe',
        label: 'Вертикальное'
      }]
    }, {
      key: 'doorstep',
      type: 'radio',
      label: 'Порог',
      items: [{
        value: 'obichniy29mm',
        label: 'Обычный 29мм',
        checked: true
      }, {
        value: 'nizkiy7mm',
        label: 'Низкий 7мм'
      }]
    }, {
      key: 'montageplisse',
      type: 'radio',
      label: 'Тип монтажа',
      items: [{
        value: 'sobran',
        label: 'В сборке',
        checked: true
      }, {
        value: 'razobran',
        label: 'Без сборки'
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Трапеция «25мм»
{
  key: 'TrapeciyaStandart',
  title: 'Трапеция 25мм',
  // selected: true,
  form: {
    name: 'TrapeciyaStandart',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'antracite',
          label: 'Антрацит (7016)'
        }, {
          value: 'black',
          label: 'Черный (9005)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '1600',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height_left',
        type: 'number',
        name: 'height_left',
        label: 'Высота лево',
        value: '1000',
        min: '200',
        max: '2500',
        step: '1',
        unit: 'мм.'
      }, {
        key: 'height_right',
        type: 'number',
        name: 'height_right',
        label: 'Высота право',
        value: '1000',
        min: '200',
        max: '2500',
        step: '1',
        unit: 'мм.'
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'fastings',
        type: 'radio',
        label: 'Тип крепления',
        items: [{
          value: 'z-krepleniya-m',
          label: 'Z-образное (металл)',
          checked: true
        }, {
          value: 'z-krepleniya-p',
          label: 'Z-образное (пластик)'
        }, {
          value: 'plungery',
          label: 'Плунжеры'
        }, {
          value: 'bezkrepleniya',
          label: 'Без креплений'
        }]
      }, {
        key: 'komplekt',
        type: 'radio',
        label: 'Комплект креплений',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'half',
          label: '1,5'
        }, {
          value: 'two',
          label: '2'
        }]
      }, {
        key: 'corners',
        type: 'radio',
        label: 'Углы',
        items: [{
          value: 'metallicheskie',
          label: 'Металлические',
          checked: true
        }, {
          value: 'plastikovie',
          label: 'Пластиковые'
        }]
      }, {
        key: 'peremychka',
        type: 'radio',
        label: 'Количество перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }, {
        key: 'handles',
        type: 'radio',
        label: 'Ручки',
        items: [{
          value: 'metallicheskie',
          label: 'Металлические',
          checked: true
        }, {
          value: 'silikonovie',
          label: 'Силиконовые'
        }]
      }, {
        key: 'plusprice',
        type: 'radio',
        items: [{
          value: 'priceplus',
          label: '',
          checked: true
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Арочная
{
  key: 'Arochnaya',
  title: 'Арочная 25мм',
  // selected: true,
  form: {
    name: 'Arochnaya',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'antracite',
          label: 'Антрацит (7016)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '1600',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота прямоугольной части',
        value: '',
        min: '200',
        max: '2500',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height_rect',
        type: 'number',
        name: 'height_rect',
        label: 'Высота дуги',
        value: '1000',
        min: '200',
        max: '2500',
        step: '1',
        unit: 'мм.'
        // required: true,
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'fastings',
        type: 'radio',
        label: 'Тип крепления',
        items: [{
          value: 'z-krepleniya-m',
          label: 'Z-образное (металл)',
          checked: true
        }, {
          value: 'z-krepleniya-p',
          label: 'Z-образное (пластик)'
        }, {
          value: 'plungery',
          label: 'Плунжеры'
        }, {
          value: 'bezkrepleniya',
          label: 'Без креплений'
        }]
      }, {
        key: 'komplekt',
        type: 'radio',
        label: 'Комплект креплений',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'half',
          label: '1,5'
        }, {
          value: 'two',
          label: '2'
        }]
      }, {
        key: 'corners',
        type: 'radio',
        label: 'Углы',
        items: [{
          value: 'metallicheskie',
          label: 'Металлические',
          checked: true
        }, {
          value: 'plastikovie',
          label: 'Пластиковые'
        }]
      }, {
        key: 'handles',
        type: 'radio',
        label: 'Ручки',
        items: [{
          value: 'metallicheskie',
          label: 'Металлические',
          checked: true
        }, {
          value: 'silikonovie',
          label: 'Силиконовые'
        }]
      }, {
        key: 'plusprice',
        type: 'radio',
        items: [{
          value: 'priceplus',
          label: '',
          checked: true
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Раздвижная "SLIDORS"
{
  key: 'RulonnayaPolsha',
  title: 'Раздвижная SLIDORS',
  // selected: true,
  form: {
    name: 'RulonnayaPolsha',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }]
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '1600',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '200',
        max: '2500',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'rail',
        type: 'number',
        name: 'rail',
        label: 'Длинна рельс (направляющих)',
        value: '0',
        min: '0',
        max: '6000',
        step: '1',
        unit: 'мм.'
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'rails',
        type: 'radio',
        label: 'Кол-во рельс',
        items: [{
          value: 'two',
          label: '2',
          checked: true
        }, {
          value: 'one',
          label: '1'
        }, {
          value: 'norels',
          label: 'без рельс'
        }]
      }, {
        key: 'peremychka',
        type: 'radio',
        label: 'Кол-во перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }, {
        key: 'plusprice',
        type: 'radio',
        items: [{
          value: 'priceplus',
          label: '',
          checked: true
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
//Рамочная в раме Provedal
{
  key: 'Dvernaya32',
  title: 'Рамочная в раме «PROVEDAL» ',
  // selected: true,
  form: {
    name: 'Dvernaya32',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '1600',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '200',
        max: '2500',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'options',
      type: 'group',
      label: 'Опции',
      inputs: [{
        key: 'peremychka',
        type: 'radio',
        label: 'Кол-во перемычек',
        items: [{
          value: 'one',
          label: '1',
          checked: true
        }, {
          value: 'two',
          label: '2'
        }, {
          value: 'three',
          label: '3'
        }, {
          value: 'four',
          label: '4'
        }, {
          value: 'krest',
          label: 'Крестообразная'
        }]
      }, {
        key: 'plusprice',
        type: 'radio',
        items: [{
          value: 'priceplus',
          label: '',
          checked: true
        }]
      }]
    }, {
      key: 'montage',
      type: 'select',
      label: 'Установка'
    }]
  }
},
// Перекат
{
  key: 'Perekatka',
  title: 'Перекат',
  // selected: true,
  form: {
    name: 'Perekatka',
    fields: [{
      key: 'frame',
      type: 'group',
      inputs: [{
        key: 'frame_color',
        type: 'select',
        label: 'Цвет рамки',
        required: true,
        items: [{
          value: 'white',
          label: 'Белый (9003)',
          selected: true
        }, {
          value: 'brown',
          label: 'Коричневый (8017)'
        }, {
          value: 'ral',
          label: 'Покраска в RAL'
        }]
      }, {
        key: 'ral',
        type: 'ral',
        label: 'Код RAL'
      }]
    }, {
      key: 'canvas',
      type: 'group',
      inputs: [{
        key: 'canvas',
        type: 'select',
        label: 'Полотно',
        items: [{
          value: 'fiberglass',
          label: 'Стандарт "Fiberglass"',
          selected: true
        }, {
          value: 'petscreen',
          label: 'Антикошка "Pet Screen"'
        }, {
          value: 'micromesh',
          label: 'Антимошка "Micro Mesh"'
        }, {
          value: 'antipyl',
          label: 'Антипыль'
        }, {
          value: 'polltex',
          label: 'Антипыльца "Poll-Tex"'
        }, {
          value: 'diamond',
          label: 'Металлическая "Diamond"'
        }, {
          value: 'antipo',
          label: 'Антипыль "Antipo" (Италия)'
        }, {
          value: 'metalmesh',
          label: 'Металлическая сетка 20*20'
        }, {
          value: 'maxivision',
          label: 'Ультравью "Maxi vision"'
        }, {
          value: 'sunlight',
          label: 'Светоотражающие "Sunlight"'
        }, {
          value: 'resplion',
          label: 'Антибактериальная “Respilon”'
        }]
      }, {
        key: 'canvas_color',
        type: 'canvas_color',
        label: 'Цвет полотна'
      }]
    }, {
      key: 'size',
      type: 'group',
      label: 'Размеры конструкции',
      inputs: [{
        key: 'width',
        type: 'number',
        name: 'width',
        label: 'Ширина',
        value: '',
        min: '200',
        max: '2000',
        step: '1',
        unit: 'мм.',
        required: true
      }, {
        key: 'height',
        type: 'number',
        name: 'height',
        label: 'Высота',
        value: '',
        min: '300',
        max: '3500',
        step: '1',
        unit: 'мм.',
        required: true
      }]
    }, {
      key: 'remake',
      type: 'checkbox',
      label: 'Переделать',
      items: [{
        value: 'z-krepleniya-m',
        label: 'Z-образное (металл)'
      }, {
        value: 'z-krepleniya-p',
        label: 'Z-образное (пластик)'
      }, {
        value: 'vnutrennie-zacepi',
        label: 'Внутренние зацепы'
      }, {
        value: 'plungery',
        label: 'Плунжеры'
      }, {
        value: 'ugly-metallicheskie',
        label: 'Металлические углы'
      }, {
        value: 'ugly-plastikovie',
        label: 'Пластиковые углы'
      }, {
        value: 'ruchki-metallicheskie',
        label: 'Металлические ручки'
      }, {
        value: 'ruchki-plastikovie',
        label: 'Пластиковые ручки'
      }, {
        value: 'fetr',
        label: 'Фетр'
      }]
    }, {
      key: 'komplekt',
      type: 'radio',
      label: 'Комплект креплений',
      items: [{
        value: 'one',
        label: '1'
      }, {
        value: 'half',
        label: '1,5'
      }, {
        value: 'two',
        label: '2'
      }]
    }]
  }
}];
},{}],"src/components/form/FieldGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var FieldGroup = exports.default = /*#__PURE__*/function () {
  function FieldGroup(key) {
    var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, FieldGroup);
    _defineProperty(this, "key", null);
    _defineProperty(this, "fields", new Set());
    _defineProperty(this, "$wrapper", document.createElement('div'));
    _defineProperty(this, "$fields", document.createElement('div'));
    _defineProperty(this, "$label", document.createElement('div'));
    this.key = key || null;
    this.$wrapper.className = 'field-group field-group-' + this.key;
    this.$label.className = 'field-group-label';
    this.$fields.className = 'field-group-fields';
  }
  return _createClass(FieldGroup, [{
    key: "addField",
    value: function addField(field) {
      this.fields.add(field);
      return this;
    }
  }, {
    key: "addFields",
    value: function addFields() {
      var _this = this;
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (fields.length !== 0) {
        fields.forEach(function (field) {
          _this.addField(field);
        });
      }
      return this;
    }
  }, {
    key: "setLabel",
    value: function setLabel(text) {
      if (text !== undefined) {
        this.$label.innerHTML = text;
        this.$wrapper.prepend(this.$label);
      }
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      var _iterator = _createForOfIteratorHelper(this.fields.values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          this.$fields.append(field.render());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.$wrapper.append(this.$fields);
      return this.$wrapper;
    }
  }]);
}();
},{}],"src/components/form/Input.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Input = exports.default = /*#__PURE__*/function () {
  function Input(key) {
    var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'input';
    _classCallCheck(this, Input);
    _defineProperty(this, "key", null);
    _defineProperty(this, "visible", true);
    _defineProperty(this, "disabled", false);
    _defineProperty(this, "required", false);
    _defineProperty(this, "placeholder", '');
    _defineProperty(this, "valid", true);
    _defineProperty(this, "default", '');
    _defineProperty(this, "$element", Object.create(null));
    _defineProperty(this, "$wrapper", document.createElement('div'));
    _defineProperty(this, "$label", document.createElement('label'));
    if (key === undefined) throw Error('Input.constructor.key is undefined');
    this.key = key;
    this.$wrapper.className = 'form-group';
    this.$wrapper.classList.add('form-group-' + this.key);
    this.$element = document.createElement(tag);
    this.$element.id = this.key;
    this.$element.name = this.key;
    this.$label.className = 'form-group-label';
    this.$label.setAttribute('for', this.key);
    this.$wrapper.append(this.$element);
  }
  return _createClass(Input, [{
    key: "setId",
    value: function setId(id) {
      this.$element.id = id ? id : this.key;
      this.$label.setAttribute('for', this.$element.id);
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      if (value !== undefined) this.$element.value = value.toString();
      return this;
    }
  }, {
    key: "setDisabled",
    value: function setDisabled(flag) {
      if (typeof flag === 'boolean') {
        flag !== false ? this.$wrapper.classList.add('disabled') : this.$wrapper.classList.remove('disabled');
        this.$element.disabled = flag;
        this.disabled = flag;
      }
      return this;
    }
  }, {
    key: "setRequired",
    value: function setRequired(flag) {
      if (typeof flag === 'boolean') {
        flag !== false ? this.$wrapper.classList.add('required') : this.$wrapper.classList.remove('required');
        this.$element.required = flag;
        this.required = flag;
      }
      return this;
    }
  }, {
    key: "setPlaceholder",
    value: function setPlaceholder(value) {
      if (value !== undefined) this.$element.placeholder = value.toString();
      return this;
    }
  }, {
    key: "setVisible",
    value: function setVisible(flag) {
      if (typeof flag === 'boolean') {
        flag === false ? this.hide() : this.show();
      }
      return this;
    }
  }, {
    key: "setValid",
    value: function setValid(flag) {
      if (typeof flag === 'boolean') this.valid = flag;
      return this;
    }
  }, {
    key: "setDefault",
    value: function setDefault() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (value !== null) this.default = value;
      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setValue(this.default);
      return this;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.$element;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.$element.value;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$wrapper.classList.add('is-hidden');
      this.visible = false;
      return this;
    }
  }, {
    key: "show",
    value: function show() {
      this.$wrapper.classList.remove('is-hidden');
      this.visible = true;
      return this;
    }
  }, {
    key: "on",
    value: function on() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'change';
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      if (typeof callback === 'function') {
        this.$element.addEventListener(name, callback.bind(this));
      }
      return this;
    }
  }, {
    key: "dispatch",
    value: function dispatch(name) {
      this.$element.dispatchEvent(new Event(name));
      return this;
    }
  }, {
    key: "dispatchAll",
    value: function dispatchAll() {
      var _iterator = _createForOfIteratorHelper(this.eventHandlers),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var eventHandler = _step.value;
          this.$element.dispatchEvent(new Event(eventHandler.name));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return this;
    }
  }, {
    key: "setLabel",
    value: function setLabel(text) {
      if (text !== undefined) {
        this.$label.innerHTML = text;
        this.$wrapper.prepend(this.$label);
      }
      return this;
    }
  }, {
    key: "inputData",
    value: function inputData() {
      return {
        key: this.key,
        label: this.$label.innerText,
        value: this.getValue()
        // value: this.getValue() || undefined,
      };
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.disabled;
    }
  }, {
    key: "isRequired",
    value: function isRequired() {
      return this.required;
    }
  }, {
    key: "isFilled",
    value: function isFilled() {
      return !!this.getValue().toString().trim().length;
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return this.valid;
    }

    // // Метод для создания снимка текущих значений
    // getState() {
    //     return {
    //         min: this.min,
    //         max: this.max,
    //         step: this.step,
    //         lang: this.lang,
    //         value: this.getValue(),
    //         visible: this.visible,
    //         disabled: this.disabled
    //     };
    // }

    // // Метод для восстановления состояния из снимка
    // restoreState(snapshot) {
    //     this.setMin(snapshot.min);
    //     this.setMax(snapshot.max);
    //     this.setStep(snapshot.step);
    //     this.setValue(snapshot.value);
    //     this.setLang(snapshot.lang);
    //     this.setDisabled(snapshot.disabled);
    //     this.setVisible(snapshot.visible);
    // }
  }, {
    key: "render",
    value: function render() {
      return this.$wrapper;
    }
  }]);
}();
},{}],"src/components/form/Select.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Select = exports.default = /*#__PURE__*/function (_Input) {
  function Select(key) {
    var _this;
    _classCallCheck(this, Select);
    _this = _callSuper(this, Select, [key, 'select']);
    _defineProperty(_this, "options", new Map());
    _this.$element.className = 'form-select';
    return _this;
  }
  _inherits(Select, _Input);
  return _createClass(Select, [{
    key: "addOption",
    value: function addOption(value) {
      var label = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var selected = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var disabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      if (value !== undefined) {
        var option = document.createElement('option');
        option.value = value.toString();
        option.innerHTML = label.toString();
        option.selected = selected;
        option.disabled = disabled;
        this.options.set(option.value, option);
        this.$element.append(option);
      }
      return this;
    }
  }, {
    key: "addOptions",
    value: function addOptions() {
      var _this2 = this;
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      options.forEach(function (option) {
        if (_typeof(option) === 'object') {
          _this2.addOption(option.value, option.label, option.selected, option.disabled);
        }
      });
      return this;
    }
  }, {
    key: "setOptions",
    value: function setOptions() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.options = new Map();
      this.$element.innerHTML = '';
      this.addOptions(options);
      return this;
    }
  }, {
    key: "setValue",
    value: function setValue(key) {
      var option = this.getOption(key);
      if (option !== undefined) option.selected = true;
      return this;
    }
  }, {
    key: "getOptions",
    value: function getOptions() {
      return this.options;
    }
  }, {
    key: "getOption",
    value: function getOption(key) {
      if (this.getOptions().has(key)) return this.options.get(key);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _iterator = _createForOfIteratorHelper(this.getOptions().values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var option = _step.value;
          if (option.selected) return option.value.toString();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return this.$element.value;
    }
  }, {
    key: "disableOption",
    value: function disableOption(key) {
      var option = this.getOption(key);
      if (option !== undefined) option.disabled = true;
      return this;
    }
  }, {
    key: "enableOption",
    value: function enableOption(key) {
      var option = this.getOption(key);
      if (option !== undefined) option.disabled = false;
      return this;
    }
  }, {
    key: "inputData",
    value: function inputData() {
      return Object.assign(_get(_getPrototypeOf(Select.prototype), "inputData", this).call(this), {
        title: this.getOption(this.getValue()).innerText
      });
    }
  }]);
}(_Input2.default);
},{"./Input.js":"src/components/form/Input.js"}],"src/components/buttons/Button.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("../form/Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Button = exports.default = /*#__PURE__*/function (_Input) {
  function Button(key) {
    var _this;
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'button';
    _classCallCheck(this, Button);
    _this = _callSuper(this, Button, [key]);
    _defineProperty(_this, "key", null);
    _defineProperty(_this, "$element", document.createElement('button'));
    _defineProperty(_this, "$label", document.createElement('span'));
    _defineProperty(_this, "$iconWrapper", document.createElement('i'));
    _this.key = key || 'key';
    _this.$element.className = 'button ' + _this.key;
    _this.$element.type = type;
    _this.$element.name = _this.key;
    _this.$element.id = _this.key;
    _this.$iconWrapper.classList.add('icon');
    return _this;
  }
  _inherits(Button, _Input);
  return _createClass(Button, [{
    key: "addClass",
    value: function addClass(name) {
      if (name !== undefined) this.$element.classList.add(name);
      return this;
    }
  }, {
    key: "removeClass",
    value: function removeClass(name) {
      if (name !== undefined) this.$element.classList.remove(name);
      return this;
    }
  }, {
    key: "setClass",
    value: function setClass(name) {
      if (name !== undefined) this.$element.className = name;
      return this;
    }
  }, {
    key: "setText",
    value: function setText(text) {
      if (text !== undefined) {
        this.$label.innerText = text;
        this.$element.append(this.$label);
      }
      return this;
    }
  }, {
    key: "setTitle",
    value: function setTitle(text) {
      if (text) this.$element.setAttribute('title', text);
    }
  }, {
    key: "setIcon",
    value: function setIcon(name) {
      this.$iconWrapper.classList.add(name);
      this.$element.prepend(this.$iconWrapper);
      return this;
    }
  }, {
    key: "setIconImg",
    value: function setIconImg() {
      var _image$classList;
      var imgsrc = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['img-fluid'];
      var image = document.createElement('img');
      image.src = imgsrc;
      (_image$classList = image.classList).add.apply(_image$classList, _toConsumableArray(classes));
      this.$element.prepend(image);
      return this;
    }
  }, {
    key: "setIconSVG",
    value: function setIconSVG() {
      var svg = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.$iconWrapper.innerHTML = svg;
      this.$element.prepend(this.$iconWrapper);
      return this;
    }
  }, {
    key: "setDisabled",
    value: function setDisabled(flag) {
      if (typeof flag === 'boolean') {
        flag !== false ? this.$element.classList.add('disabled') : this.$element.classList.remove('disabled');
        this.$element.disabled = flag;
      }
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return this.$element;
    }
  }]);
}(_Input2.default);
},{"../form/Input.js":"src/components/form/Input.js"}],"src/components/form/InputNumber.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var InputNumber = exports.default = /*#__PURE__*/function (_Input) {
  function InputNumber(key, min, max, step) {
    var _this;
    _classCallCheck(this, InputNumber);
    _this = _callSuper(this, InputNumber, [key]);
    _defineProperty(_this, "min", null);
    _defineProperty(_this, "max", null);
    _defineProperty(_this, "step", null);
    _defineProperty(_this, "lang", 'en-US');
    _this.$element.type = 'number';
    _this.$element.className = 'form-control';
    _this.setMin(min);
    _this.setMax(max);
    _this.setStep(step);
    _this.setLang(_this.lang);
    _this.on('change', _this.validate.bind(_this));
    return _this;
  }
  _inherits(InputNumber, _Input);
  return _createClass(InputNumber, [{
    key: "getValue",
    value: function getValue() {
      return parseFloat(this.$element.value.toString());
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      if (value !== undefined) {
        var val = parseFloat(value);
        if ((this.min === null || val >= this.min) && (this.max === null || val <= this.max)) {
          this.$element.value = val.toString();
        }
      }
      return this;
    }
  }, {
    key: "setLimits",
    value: function setLimits(min, max) {
      this.setMin(min).setMax(max);
      return this;
    }
  }, {
    key: "setMin",
    value: function setMin(value) {
      if (value !== undefined) {
        this.min = parseFloat(value);
        this.$element.min = value.toString();
      }
      return this;
    }
  }, {
    key: "setMax",
    value: function setMax(value) {
      if (value !== undefined) {
        this.max = parseFloat(value);
        this.$element.max = value.toString();
      }
      return this;
    }
  }, {
    key: "setStep",
    value: function setStep(value) {
      if (value !== undefined) {
        this.step = parseFloat(value);
        this.$element.step = value;
      }
      return this;
    }
  }, {
    key: "setUnit",
    value: function setUnit(value) {
      if (value !== undefined) this.$label.append(' (' + value + ')');
      return this;
    }
  }, {
    key: "setLang",
    value: function setLang() {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
      this.lang = lang;
      this.$element.lang = lang;
      return this;
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === 'number';
    }
  }, {
    key: "validate",
    value: function validate() {
      var value = this.getValue();

      // if (!this.isNumber(value)) this.setValue(4);
      // console.log(this.isNumber(value));

      if (isNaN(value) && this.min !== null) this.setValue(this.min.toString());
      if (this.min !== null && value < this.min) {
        this.setValue(this.min.toString());
      }
      if (this.max !== null && value > this.max) {
        this.setValue(this.max.toString());
      }
      return this;
    }
  }]);
}(_Input2.default);
},{"./Input.js":"src/components/form/Input.js"}],"src/components/form/InputQuantity.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _InputNumber2 = _interopRequireDefault(require("./InputNumber.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var InputQuantity = exports.default = /*#__PURE__*/function (_InputNumber) {
  function InputQuantity(key, min, max, step) {
    var _this;
    _classCallCheck(this, InputQuantity);
    _this = _callSuper(this, InputQuantity, [key, min, max, step]);
    _defineProperty(_this, "$buttonPlus", document.createElement('button'));
    _defineProperty(_this, "$buttonMinus", document.createElement('button'));
    _defineProperty(_this, "$inputWrapper", document.createElement('div'));
    _this.$inputWrapper.className = 'input-quantity';
    _this.$buttonPlus.type = 'button';
    _this.$buttonMinus.type = 'button';
    _this.$buttonPlus.className = 'iq-plus';
    _this.$buttonMinus.className = 'iq-minus';
    _this.$buttonPlus.addEventListener('click', _this.increment.bind(_this));
    _this.$buttonMinus.addEventListener('click', _this.decrement.bind(_this));
    _this.$inputWrapper.append(_this.$buttonMinus, _this.$element, _this.$buttonPlus);
    _this.$wrapper.append(_this.$inputWrapper);
    return _this;
  }
  _inherits(InputQuantity, _InputNumber);
  return _createClass(InputQuantity, [{
    key: "increment",
    value: function increment() {
      var step = this.step ? this.step : 1;
      this.setValue(this.getValue() + step);
      this.dispatch('change');
    }
  }, {
    key: "decrement",
    value: function decrement() {
      var step = this.step ? this.step : 1;
      this.setValue(this.getValue() - step);
      this.dispatch('change');
    }
  }, {
    key: "render",
    value: function render() {
      return this.$wrapper;
    }
  }]);
}(_InputNumber2.default);
},{"./InputNumber.js":"src/components/form/InputNumber.js"}],"src/data/polotna.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  fiberglass: [{
    value: 'gray',
    label: 'Серый'
  }, {
    value: 'black',
    label: 'Чёрный'
  }],
  fiberglassplisse: [{
    value: 'gray',
    label: 'Серый'
  }],
  fiberglassrollet: [{
    value: 'gray',
    label: 'Серый'
  }],
  petscreen: [{
    value: 'blacksun',
    label: 'Белый'
  }, {
    value: 'gray',
    label: 'Серый'
  }, {
    value: 'black',
    label: 'Чёрный'
  }, {
    value: 'blackwhite',
    label: 'Черно-Белый'
  }, {
    value: 'whiteglitter',
    label: 'Белый блеск'
  }, {
    value: 'bronze',
    label: 'Бронзовый'
  }, {
    value: 'brown',
    label: 'Коричневый'
  }],
  micromesh: [{
    value: 'black',
    label: 'Чёрный'
  }],
  maxivision: [{
    value: 'black',
    label: 'Чёрный'
  }],
  metalmesh: [{
    value: 'gray',
    label: 'Cерый'
  }],
  polltex: [{
    value: 'gray',
    label: 'Чёрный'
  }],
  polltexplisse: [{
    value: 'gray',
    label: 'Чёрный'
  }],
  sunlight: [{
    value: 'lightmetal',
    label: 'Серый'
  }],
  antibird: [{
    value: 'alum',
    label: 'Алюминиевый'
  }],
  diamond: [{
    value: 'black',
    label: 'Чёрный'
  }],
  resplion: [{
    value: 'gray',
    label: 'Cерый'
  }],
  antipyl: [{
    value: 'gray',
    label: 'Cерый'
  }],
  antipo: [{
    value: 'lightmetal',
    label: 'Серый'
  }, {
    value: 'black',
    label: 'Чёрный'
  }]
};
},{}],"src/components/form/Form.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Form = exports.default = /*#__PURE__*/function () {
  function Form(key, action) {
    _classCallCheck(this, Form);
    _defineProperty(this, "key", null);
    _defineProperty(this, "fields", new Set());
    _defineProperty(this, "inputs", new Map());
    _defineProperty(this, "$form", document.createElement('form'));
    this.key = key || null;
    if (this.key !== null) {
      this.$form.id = this.key;
      this.$form.name = this.key;
    }
    this.$form.action = action || window.location.href;
    this.$form.autocomplete = 'off';
    this.$form.className = 'form';
  }
  return _createClass(Form, [{
    key: "addField",
    value: function addField(field) {
      if (field !== undefined) {
        if (typeof field.render === 'function') {
          this.fields.add(field);
          this.$form.append(field.render());
        } else {
          throw Error('Form.addField: Function "render" not found in field');
        }
      } else {
        console.log('Form.addField: field is undefined');
      }
      return this;
    }
  }, {
    key: "addFields",
    value: function addFields() {
      var _this = this;
      var fields = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (fields.length !== 0) {
        fields.forEach(function (field) {
          _this.addField(field);
        });
      }
      return this;
    }
  }, {
    key: "addInput",
    value: function addInput(input) {
      if (input instanceof Object && input.hasOwnProperty('key')) {
        this.inputs.set(input.key, input);
      }
      return this;
    }
  }, {
    key: "addInputs",
    value: function addInputs() {
      var _this2 = this;
      var inputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (inputs.length !== 0) {
        inputs.forEach(function (input) {
          _this2.addInput(input);
        });
      }
      return this;
    }
  }, {
    key: "removeInput",
    value: function removeInput(key) {
      if (key != undefined) {
        var input = this.getInput(key);
        if (input !== undefined) this.getInputs().delete(key);
      }
      return this;
    }
  }, {
    key: "removeField",
    value: function removeField(key) {
      if (key != undefined) {
        var field = this.getField(key);
        if (field !== undefined) {
          this.getFields().delete(field);
          this.$form.removeChild(field.render());
        }
      }
      return this;
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return this.inputs;
    }
  }, {
    key: "getFields",
    value: function getFields() {
      return this.fields;
    }
  }, {
    key: "getInput",
    value: function getInput(key) {
      if (this.inputs.has(key)) return this.inputs.get(key);
    }
  }, {
    key: "getField",
    value: function getField(key) {
      var _iterator = _createForOfIteratorHelper(this.fields),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var field = _step.value;
          if (field.hasOwnProperty('key') && field.key === key) return field;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "getFormData",
    value: function getFormData() {
      var data = new Map();
      var _iterator2 = _createForOfIteratorHelper(this.getInputs().values()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var input = _step2.value;
          if (!input.isDisabled()) data.set(input.key, input.inputData());
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return data;
    }
  }, {
    key: "validate",
    value: function validate() {
      console.log('Run Validate');
    }
  }, {
    key: "reset",
    value: function reset() {
      var _iterator3 = _createForOfIteratorHelper(this.getInputs().values()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var input = _step3.value;
          input.reset();
          // input.dispatch('change');
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "addCSSClass",
    value: function addCSSClass(name) {
      this.$form.classList.add(name);
      return this;
    }
  }, {
    key: "removeCSSClass",
    value: function removeCSSClass(name) {
      this.$form.classList.remove(name);
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return this.$form;
    }
  }]);
}();
},{}],"src/components/form/InputGroup.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var InputGroup = exports.default = /*#__PURE__*/function () {
  function InputGroup(key) {
    _classCallCheck(this, InputGroup);
    _defineProperty(this, "key", null);
    _defineProperty(this, "inputs", new Map());
    _defineProperty(this, "disabled", false);
    _defineProperty(this, "$wrapper", document.createElement('div'));
    _defineProperty(this, "$inputs", document.createElement('div'));
    _defineProperty(this, "$label", document.createElement('div'));
    this.key = key || null;
    this.$wrapper.className = 'form-group form-group-' + this.key;
    this.$label.className = 'form-group-label';
    this.$inputs.className = 'input-group';
    this.$wrapper.append(this.$inputs);
  }
  return _createClass(InputGroup, [{
    key: "addInput",
    value: function addInput() {
      var input = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (input instanceof _Input.default) {
        this.inputs.set(input.key, input);
        this.$inputs.append(input.render());
      }
      return this;
    }
  }, {
    key: "addInputs",
    value: function addInputs() {
      var _this = this;
      var inputs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (inputs.length !== 0) {
        inputs.forEach(function (input) {
          _this.addInput(input);
        });
      }
      return this;
    }
  }, {
    key: "setRequired",
    value: function setRequired(flag) {
      if (typeof flag === 'boolean') {
        flag !== false ? this.$wrapper.classList.add('required') : this.$wrapper.classList.remove('required');
      }
      return this;
    }
  }, {
    key: "setDisabled",
    value: function setDisabled(flag) {
      if (typeof flag === 'boolean') {
        flag !== false ? this.$wrapper.classList.add('disabled') : this.$wrapper.classList.remove('disabled');
        this.disabled = flag;
      }
      return this;
    }
  }, {
    key: "getInput",
    value: function getInput(key) {
      if (this.getInputs().has(key)) return this.inputs.get(key);
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      return this.inputs;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$wrapper.classList.add('is-hidden');
      return this;
    }
  }, {
    key: "show",
    value: function show() {
      this.$wrapper.classList.remove('is-hidden');
      return this;
    }
  }, {
    key: "setVisible",
    value: function setVisible(flag) {
      if (typeof flag === 'boolean') {
        flag !== false ? this.hide() : this.show();
      }
      return this;
    }
  }, {
    key: "on",
    value: function on(name, callback) {
      var _iterator = _createForOfIteratorHelper(this.getInputs().values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          input.on(name, callback.bind(input));
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(name) {
      var _iterator2 = _createForOfIteratorHelper(this.getInputs().values()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var input = _step2.value;
          input.dispatch(name);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return this;
    }
  }, {
    key: "setLabel",
    value: function setLabel(text) {
      if (text !== undefined) {
        this.$label.innerHTML = text;
        this.$wrapper.prepend(this.$label);
      }
      return this;
    }
  }, {
    key: "isDisabled",
    value: function isDisabled() {
      return this.disabled;
    }
  }, {
    key: "render",
    value: function render() {
      return this.$wrapper;
    }
  }]);
}();
},{"./Input.js":"src/components/form/Input.js"}],"src/components/form/InputCheck.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var InputCheck = exports.default = /*#__PURE__*/function (_Input) {
  function InputCheck(name, value, text) {
    var _this;
    var checked = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    _classCallCheck(this, InputCheck);
    _this = _callSuper(this, InputCheck, [value]);
    _this.$wrapper = _this.$label;
    _this.$element.type = 'checkbox';
    // this.$element.name = name + '[]';
    _this.$element.name = name;
    _this.$element.className = 'check';
    _this.$element.id = name + '_' + value;
    _this.$wrapper.className = 'input-check';
    _this.$label.setAttribute('for', _this.$element.id);
    if (value !== undefined) _this.setValue(value);
    _this.setLabel(text);
    _this.setChecked(checked);
    _this.setDisabled(disabled);
    _this.$wrapper.prepend(_this.$element);
    return _this;
  }
  _inherits(InputCheck, _Input);
  return _createClass(InputCheck, [{
    key: "setChecked",
    value: function setChecked(flag) {
      if (typeof flag === 'boolean') this.$element.checked = flag;
      return this;
    }
  }, {
    key: "setLabel",
    value: function setLabel(text) {
      if (text !== undefined) {
        var $span = document.createElement('span');
        $span.innerHTML = text.toString();
        this.$wrapper.append($span);
      }
      return this;
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      return this.$element.checked;
    }
  }]);
}(_Input2.default);
},{"./Input.js":"src/components/form/Input.js"}],"src/components/form/Checkbox.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _InputGroup2 = _interopRequireDefault(require("./InputGroup.js"));
var _InputCheck = _interopRequireDefault(require("./InputCheck.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Checkbox = exports.default = /*#__PURE__*/function (_InputGroup) {
  function Checkbox(key) {
    var _this;
    _classCallCheck(this, Checkbox);
    _this = _callSuper(this, Checkbox, [key]);
    _defineProperty(_this, "default", '');
    _defineProperty(_this, "required", false);
    return _this;
  }
  _inherits(Checkbox, _InputGroup);
  return _createClass(Checkbox, [{
    key: "addItem",
    value: function addItem(value, text) {
      var checked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var disabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      this.addInput(new _InputCheck.default(this.key, value, text, checked, disabled));
      return this;
    }
  }, {
    key: "getChecked",
    value: function getChecked() {
      var checked = new Set();
      var _iterator = _createForOfIteratorHelper(this.getInputs().values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          if (input.isChecked()) checked.add(input);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return checked;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var values = [];
      var _iterator2 = _createForOfIteratorHelper(this.getChecked()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var input = _step2.value;
          values.push(input.getValue());
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return values;
    }
  }, {
    key: "setDefault",
    value: function setDefault() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (value !== null) this.default = value;
      return this;
    }

    // setRequired(flag) {
    //     if (typeof flag === 'boolean') {
    //         (flag !== false) ? this.$wrapper.classList.add('required') : this.$wrapper.classList.remove('required');
    //         this.required = flag;
    //     } 
    //     return this;
    // }

    // isRequired() {
    //     return this.required;
    // }
  }, {
    key: "reset",
    value: function reset() {
      var _iterator3 = _createForOfIteratorHelper(this.getInputs().values()),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var input = _step3.value;
          if (input.getValue() === this.default) input.setChecked(true);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return this;
    }
  }, {
    key: "inputData",
    value: function inputData() {
      var values = [];
      var _iterator4 = _createForOfIteratorHelper(this.getChecked()),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var input = _step4.value;
          values.push(input.inputData());
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
      return {
        key: this.key,
        label: this.$label.innerText,
        value: values
      };
    }
  }]);
}(_InputGroup2.default);
},{"./InputGroup.js":"src/components/form/InputGroup.js","./InputCheck.js":"src/components/form/InputCheck.js"}],"src/components/form/InputRadio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var InputRadio = exports.default = /*#__PURE__*/function (_Input) {
  function InputRadio(name, value, text) {
    var _this;
    var checked = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var disabled = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    _classCallCheck(this, InputRadio);
    _this = _callSuper(this, InputRadio, [value]);
    _this.$wrapper = _this.$label;
    _this.$element.id = name + '_' + value;
    _this.$element.type = 'radio';
    _this.$element.name = name;
    _this.$element.className = 'radio';
    _this.$wrapper.className = 'input-radio';
    _this.$label.setAttribute('for', _this.$element.id);
    if (value !== undefined) _this.setValue(value);
    _this.setLabel(text);
    _this.setChecked(checked);
    _this.setDisabled(disabled);
    _this.$wrapper.prepend(_this.$element);
    return _this;
  }
  _inherits(InputRadio, _Input);
  return _createClass(InputRadio, [{
    key: "setChecked",
    value: function setChecked(flag) {
      if (typeof flag === 'boolean') this.$element.checked = flag;
      return this;
    }
  }, {
    key: "setLabel",
    value: function setLabel(text) {
      if (text !== undefined) {
        var $span = document.createElement('span');
        $span.innerHTML = text.toString();
        this.$wrapper.append($span);
      }
      return this;
    }
  }, {
    key: "isChecked",
    value: function isChecked() {
      return this.$element.checked;
    }
  }]);
}(_Input2.default);
},{"./Input.js":"src/components/form/Input.js"}],"src/components/form/Radio.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _InputGroup2 = _interopRequireDefault(require("./InputGroup.js"));
var _InputRadio = _interopRequireDefault(require("./InputRadio.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Radio = exports.default = /*#__PURE__*/function (_InputGroup) {
  function Radio(key) {
    var _this;
    _classCallCheck(this, Radio);
    _this = _callSuper(this, Radio, [key]);
    _defineProperty(_this, "default", '');
    _defineProperty(_this, "required", false);
    return _this;
  }
  _inherits(Radio, _InputGroup);
  return _createClass(Radio, [{
    key: "addItem",
    value: function addItem(value, text) {
      var checked = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var disabled = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      this.addInput(new _InputRadio.default(this.key, value, text, checked, disabled));
      return this;
    }
  }, {
    key: "getChecked",
    value: function getChecked() {
      var _iterator = _createForOfIteratorHelper(this.getInputs().values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          if (input.isChecked()) return input;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var checked = this.getChecked();
      return checked ? checked.getValue() : undefined;
    }
  }, {
    key: "setDefault",
    value: function setDefault() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      if (value !== null) this.default = value;
      return this;
    }
  }, {
    key: "setRequired",
    value: function setRequired(flag) {
      if (typeof flag === 'boolean') {
        flag !== false ? this.$wrapper.classList.add('required') : this.$wrapper.classList.remove('required');
        this.required = flag;
      }
      return this;
    }
  }, {
    key: "isRequired",
    value: function isRequired() {
      return this.required;
    }
  }, {
    key: "reset",
    value: function reset() {
      var _iterator2 = _createForOfIteratorHelper(this.getInputs().values()),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var input = _step2.value;
          if (input.getValue() === this.default) input.setChecked(true);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return this;
    }
  }, {
    key: "inputData",
    value: function inputData() {
      var checked = this.getChecked();
      return {
        key: this.key,
        label: this.$label.innerText,
        title: checked !== undefined ? checked.$label.innerText : 'undefined',
        value: checked !== undefined ? checked.getValue() : 'undefined'
      };
    }
  }]);
}(_InputGroup2.default);
},{"./InputGroup.js":"src/components/form/InputGroup.js","./InputRadio.js":"src/components/form/InputRadio.js"}],"src/components/form/InputText.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var InputText = exports.default = /*#__PURE__*/function (_Input) {
  function InputText(key) {
    var _this;
    _classCallCheck(this, InputText);
    _this = _callSuper(this, InputText, [key]);
    _this.$element.type = 'text';
    _this.$element.className = 'form-control';
    return _this;
  }
  _inherits(InputText, _Input);
  return _createClass(InputText, [{
    key: "getValue",
    value: function getValue() {
      return this.$element.value.trim().toString();
    }
  }]);
}(_Input2.default);
},{"./Input.js":"src/components/form/Input.js"}],"src/components/form/Textarea.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Textarea = exports.default = /*#__PURE__*/function (_Input) {
  function Textarea(key) {
    var _this;
    _classCallCheck(this, Textarea);
    _this = _callSuper(this, Textarea, [key, 'textarea']);
    _this.$element.classList.add('form-control');
    return _this;
  }
  _inherits(Textarea, _Input);
  return _createClass(Textarea, [{
    key: "getValue",
    value: function getValue() {
      return this.$element.value.trim().toString();
    }
  }]);
}(_Input2.default);
},{"./Input.js":"src/components/form/Input.js"}],"src/components/form/InputHidden.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var InputHidden = exports.default = /*#__PURE__*/function (_Input) {
  function InputHidden(key) {
    var _this;
    _classCallCheck(this, InputHidden);
    _this = _callSuper(this, InputHidden, [key]);
    _this.$element.type = 'hidden';
    return _this;
  }
  _inherits(InputHidden, _Input);
  return _createClass(InputHidden, [{
    key: "render",
    value: function render() {
      return this.$element;
    }
  }]);
}(_Input2.default);
},{"./Input.js":"src/components/form/Input.js"}],"src/module/Product/form/InputRAL.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Button = _interopRequireDefault(require("../../../components/buttons/Button.js"));
var _InputNumber2 = _interopRequireDefault(require("../../../components/form/InputNumber.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var InputRAL = exports.default = /*#__PURE__*/function (_InputNumber) {
  function InputRAL(key, min, max) {
    var _this;
    _classCallCheck(this, InputRAL);
    _this = _callSuper(this, InputRAL, [key, min, max]);
    _defineProperty(_this, "button", new _Button.default('ral_select'));
    _defineProperty(_this, "$inputWrapper", document.createElement('div'));
    _this.$inputWrapper.className = 'form-group-inputs';

    //this.button.setText('');
    _this.button.removeClass('button');
    _this.button.getElement().dataset.bsToggle = 'offcanvas';
    _this.button.getElement().dataset.bsTarget = '#offcanvas-ral_modal';
    _this.$inputWrapper.append(_this.$element, _this.button.render());
    _this.$wrapper.append(_this.$inputWrapper);
    return _this;
  }

  // validate() {
  //     super.validate();

  //     console.log(77777);
  // }
  _inherits(InputRAL, _InputNumber);
  return _createClass(InputRAL, [{
    key: "getButton",
    value: function getButton() {
      return this.button;
    }
  }]);
}(_InputNumber2.default);
},{"../../../components/buttons/Button.js":"src/components/buttons/Button.js","../../../components/form/InputNumber.js":"src/components/form/InputNumber.js"}],"src/data/ral.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = [{
  code: '1000',
  color: '#CABE8E'
}, {
  code: '1001',
  color: '#CEB58C'
}, {
  code: '1002',
  color: '#CFAF76'
}, {
  code: '1003',
  color: '#F2AD22'
}, {
  code: '1004',
  color: '#DFA31F'
}, {
  code: '1005',
  color: '#C89625'
}, {
  code: '1006',
  color: '#DD9622'
}, {
  code: '1007',
  color: '#E5941F'
}, {
  code: '1011',
  color: '#AF885D'
}, {
  code: '1012',
  color: '#D8B33E'
}, {
  code: '1013',
  color: '#E4DDCB'
}, {
  code: '1014',
  color: '#DCC6A1'
}, {
  code: '1015',
  color: '#E5D5BB'
}, {
  code: '1016',
  color: '#EDE334'
}, {
  code: '1017',
  color: '#F2AE5D'
}, {
  code: '1018',
  color: '#F4D046'
}, {
  code: '1019',
  color: '#A69480'
}, {
  code: '1020',
  color: '#A2946D'
}, {
  code: '1021',
  color: '#EEBB00'
}, {
  code: '1023',
  color: '#F1BB01'
}, {
  code: '1024',
  color: '#B99559'
}, {
  code: '1026',
  color: '#F0FD00'
}, {
  code: '1027',
  color: '#A78734'
}, {
  code: '1028',
  color: '#FFA200'
}, {
  code: '1032',
  color: '#DBA829'
}, {
  code: '1033',
  color: '#F3A038'
}, {
  code: '1034',
  color: '#E9A35E'
}, {
  code: '1035',
  color: '#887E6B'
}, {
  code: '1036',
  color: '#856E44'
}, {
  code: '1037',
  color: '#EB982E'
}, {
  code: '2000',
  color: '#D7772D'
}, {
  code: '2001',
  color: '#BA563C'
}, {
  code: '2002',
  color: '#BE483C'
}, {
  code: '2003',
  color: '#F28044'
}, {
  code: '2004',
  color: '#DF5E34'
}, {
  code: '2005',
  color: '#FF1502'
}, {
  code: '2007',
  color: '#FF9600'
}, {
  code: '2008',
  color: '#E9723A'
}, {
  code: '2009',
  color: '#DB5E32'
}, {
  code: '2010',
  color: '#CC653C'
}, {
  code: '2011',
  color: '#E27638'
}, {
  code: '2012',
  color: '#D46B58'
}, {
  code: '2013',
  color: '#934424'
}, {
  code: '3000',
  color: '#A8403D'
}, {
  code: '3001',
  color: '#A03C3E'
}, {
  code: '3002',
  color: '#9F3B3D'
}, {
  code: '3003',
  color: '#8A383E'
}, {
  code: '3004',
  color: '#753C42'
}, {
  code: '3005',
  color: '#663D43'
}, {
  code: '3007',
  color: '#513E40'
}, {
  code: '3009',
  color: '#734641'
}, {
  code: '3011',
  color: '#7D3D3D'
}, {
  code: '3012',
  color: '#C88B78'
}, {
  code: '3013',
  color: '#99443F'
}, {
  code: '3014',
  color: '#CB797D'
}, {
  code: '3015',
  color: '#D8A5AE'
}, {
  code: '3016',
  color: '#A94C44'
}, {
  code: '3017',
  color: '#CA5F69'
}, {
  code: '3018',
  color: '#C74F59'
}, {
  code: '3020',
  color: '#BB3939'
}, {
  code: '3022',
  color: '#CD705E'
}, {
  code: '3024',
  color: '#F60100'
}, {
  code: '3026',
  color: '#FE0000'
}, {
  code: '3027',
  color: '#AD3E4F'
}, {
  code: '3004',
  color: '#753C42'
}, {
  code: '3005',
  color: '#663D43'
}, {
  code: '3007',
  color: '#513E40'
}, {
  code: '3009',
  color: '#734641'
}, {
  code: '3011',
  color: '#7D3D3D'
}, {
  code: '3012',
  color: '#C88B78'
}, {
  code: '3013',
  color: '#99443F'
}, {
  code: '3014',
  color: '#CB797D'
}, {
  code: '3015',
  color: '#D8A5AE'
}, {
  code: '3016',
  color: '#A94C44'
}, {
  code: '3017',
  color: '#CA5F69'
}, {
  code: '3018',
  color: '#C74F59'
}, {
  code: '3020',
  color: '#BB3939'
}, {
  code: '3022',
  color: '#CD705E'
}, {
  code: '3024',
  color: '#F60100'
}, {
  code: '3026',
  color: '#FE0000'
}, {
  code: '3027',
  color: '#AD3E4F'
}, {
  code: '3028',
  color: '#CB3234'
}, {
  code: '3031',
  color: '#AB464E'
}, {
  code: '3032',
  color: '#751521'
}, {
  code: '3033',
  color: '#B54740'
}, {
  code: '4001',
  color: '#8C6A8B'
}, {
  code: '4002',
  color: '#924E5D'
}, {
  code: '4003',
  color: '#C66A93'
}, {
  code: '4004',
  color: '#703B4D'
}, {
  code: '4005',
  color: '#8470A1'
}, {
  code: '4006',
  color: '#97467E'
}, {
  code: '4007',
  color: '#573E51'
}, {
  code: '4008',
  color: '#8D5789'
}, {
  code: '4009',
  color: '#A38B98'
}, {
  code: '4010',
  color: '#C05082'
}, {
  code: '4011',
  color: '#836593'
}, {
  code: '4012',
  color: '#716880'
}, {
  code: '5000',
  color: '#485B79'
}, {
  code: '5001',
  color: '#38586F'
}, {
  code: '5002',
  color: '#3F4B87'
}, {
  code: '5003',
  color: '#3B4963'
}, {
  code: '5004',
  color: '#3C3F48'
}, {
  code: '5005',
  color: '#2B5D8E'
}, {
  code: '5007',
  color: '#4F7194'
}, {
  code: '5008',
  color: '#454C56'
}, {
  code: '5009',
  color: '#3E667F'
}, {
  code: '5010',
  color: '#2B5A84'
}, {
  code: '5011',
  color: '#3C4250'
}, {
  code: '5012',
  color: '#418EBA'
}, {
  code: '5013',
  color: '#3C4661'
}, {
  code: '5014',
  color: '#71839B'
}, {
  code: '5015',
  color: '#3082B4'
}, {
  code: '5017',
  color: '#186694'
}, {
  code: '5018',
  color: '#389293'
}, {
  code: '5019',
  color: '#31678B'
}, {
  code: '5020',
  color: '#2A525A'
}, {
  code: '5021',
  color: '#097D7D'
}, {
  code: '5022',
  color: '#444267'
}, {
  code: '5023',
  color: '#5A7495'
}, {
  code: '5024',
  color: '#7098B1'
}, {
  code: '5025',
  color: '#336275'
}, {
  code: '5026',
  color: '#212A51'
}, {
  code: '6000',
  color: '#4E7D6B'
}, {
  code: '6001',
  color: '#437248'
}, {
  code: '6002',
  color: '#456540'
}, {
  code: '6003',
  color: '#5A5E4D'
}, {
  code: '6004',
  color: '#335554'
}, {
  code: '6005',
  color: '#365148'
}, {
  code: '6006',
  color: '#4E4E46'
}, {
  code: '6007',
  color: '#43493F'
}, {
  code: '6008',
  color: '#47473F'
}, {
  code: '6009',
  color: '#3F4941'
}, {
  code: '6010',
  color: '#547546'
}, {
  code: '6011',
  color: '#728567'
}, {
  code: '6012',
  color: '#444D4C'
}, {
  code: '6013',
  color: '#827C64'
}, {
  code: '6014',
  color: '#534E48'
}, {
  code: '6015',
  color: '#4A4D46'
}, {
  code: '6016',
  color: '#167259'
}, {
  code: '6017',
  color: '#5E874D'
}, {
  code: '6018',
  color: '#619F49'
}, {
  code: '6019',
  color: '#B9D1AF'
}, {
  code: '6020',
  color: '#4A5449'
}, {
  code: '6021',
  color: '#8DA080'
}, {
  code: '6022',
  color: '#4B4640'
}, {
  code: '6024',
  color: '#298C5E'
}, {
  code: '6025',
  color: '#64774A'
}, {
  code: '6026',
  color: '#07695A'
}, {
  code: '6027',
  color: '#85BEB8'
}, {
  code: '6028',
  color: '#446052'
}, {
  code: '6029',
  color: '#00784B'
}, {
  code: '6032',
  color: '#36875E'
}, {
  code: '6033',
  color: '#578F86'
}, {
  code: '6034',
  color: '#85B1B0'
}, {
  code: '6035',
  color: '#044D26'
}, {
  code: '6036',
  color: '#015D4F'
}, {
  code: '6037',
  color: '#008E38'
}, {
  code: '6038',
  color: '#00BB2E'
}, {
  code: '7000',
  color: '#838E94'
}, {
  code: '7001',
  color: '#949BA3'
}, {
  code: '7002',
  color: '#898270'
}, {
  code: '7003',
  color: '#7D7D71'
}, {
  code: '7004',
  color: '#A0A0A0'
}, {
  code: '7005',
  color: '#767875'
}, {
  code: '7006',
  color: '#7A7267'
}, {
  code: '7008',
  color: '#7A6A50'
}, {
  code: '7009',
  color: '#646760'
}, {
  code: '7010',
  color: '#616660'
}, {
  code: '7011',
  color: '#5E6367'
}, {
  code: '7012',
  color: '#656A6D'
}, {
  code: '7013',
  color: '#605C51'
}, {
  code: '7015',
  color: '#5D6065'
}, {
  code: '7016',
  color: '#4C4F54'
}, {
  code: '7021',
  color: '#47484A'
}, {
  code: '7022',
  color: '#5A5955'
}, {
  code: '7023',
  color: '#85867E'
}, {
  code: '7024',
  color: '#56575C'
}, {
  code: '7026',
  color: '#4B5355'
}, {
  code: '7030',
  color: '#97948D'
}, {
  code: '7031',
  color: '#6B727A'
}, {
  code: '7032',
  color: '#B7B4A5'
}, {
  code: '7033',
  color: '#868A7C'
}, {
  code: '7034',
  color: '#96907A'
}, {
  code: '7035',
  color: '#C9CBC8'
}, {
  code: '7036',
  color: '#9D9998'
}, {
  code: '7037',
  color: '#858585'
}, {
  code: '7038',
  color: '#B2B5AE'
}, {
  code: '7039',
  color: '#74716A'
}, {
  code: '7040',
  color: '#9EA3A7'
}, {
  code: '7042',
  color: '#949899'
}, {
  code: '7043',
  color: '#5D5F5E'
}, {
  code: '7044',
  color: '#BBB6B0'
}, {
  code: '7045',
  color: '#94989B'
}, {
  code: '7046',
  color: '#878C90'
}, {
  code: '7047',
  color: '#CACACA'
}, {
  code: '7048',
  color: '#858071'
}, {
  code: '8000',
  color: '#8B734F'
}, {
  code: '8001',
  color: '#9E6D44'
}, {
  code: '8002',
  color: '#7F5B4F'
}, {
  code: '8003',
  color: '#845A41'
}, {
  code: '8004',
  color: '#915847'
}, {
  code: '8007',
  color: '#775441'
}, {
  code: '8008',
  color: '#795B43'
}, {
  code: '8011',
  color: '#654A3F'
}, {
  code: '8012',
  color: '#6E4742'
}, {
  code: '8014',
  color: '#56483F'
}, {
  code: '8015',
  color: '#694642'
}, {
  code: '8016',
  color: '#5B443E'
}, {
  code: '8017',
  color: '#534542'
}, {
  code: '8019',
  color: '#4E4848'
}, {
  code: '8022',
  color: '#3D3C3A'
}, {
  code: '8023',
  color: '#A66442'
}, {
  code: '8024',
  color: '#7E5E4F'
}, {
  code: '8025',
  color: '#7C6255'
}, {
  code: '8028',
  color: '#5E4D43'
}, {
  code: '8029',
  color: '#80432A'
}, {
  code: '9001',
  color: '#EAE2D7'
}, {
  code: '9002',
  color: '#D8D8D0'
}, {
  code: '9003',
  color: '#EEEEEC'
}, {
  code: '9004',
  color: '#444446'
}, {
  code: '9005',
  color: '#3C3C3C'
}, {
  code: '9006',
  color: '#A6A5A2'
}, {
  code: '9007',
  color: '#8F8E8A'
}, {
  code: '9010',
  color: '#F2EFE8'
}, {
  code: '9011',
  color: '#3E3F41'
}, {
  code: '9016',
  color: '#F1F2ED'
}, {
  code: '9017',
  color: '#404040'
}, {
  code: '9018',
  color: '#CACFC9'
}, {
  code: '9022',
  color: '#A0A1A0'
}, {
  code: '9023',
  color: '#909293'
}];
},{}],"src/components/bootstrap/OffCanvas.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OffCanvas = exports.default = /*#__PURE__*/function () {
  function OffCanvas(key) {
    _classCallCheck(this, OffCanvas);
    _defineProperty(this, "key", null);
    _defineProperty(this, "id", '');
    _defineProperty(this, "elements", new Set());
    _defineProperty(this, "visible", false);
    _defineProperty(this, "$wrapper", document.createElement('div'));
    _defineProperty(this, "$header", document.createElement('div'));
    _defineProperty(this, "$title", document.createElement('h5'));
    _defineProperty(this, "$body", document.createElement('div'));
    _defineProperty(this, "$buttonClose", document.createElement('button'));
    if (key === undefined) throw Error('OffCanvas.constructor.key is undefined');
    this.key = key;
    this.id = 'offcanvas-' + this.key;
    this.$wrapper.id = this.id;
    this.$wrapper.className = 'offcanvas offcanvas-start';
    this.$wrapper.classList.add(this.id);
    this.$wrapper.dataset.bsScroll = true;
    this.$header.className = 'offcanvas-header';
    this.$body.className = 'offcanvas-body';
    this.$buttonClose.type = 'button';
    this.$buttonClose.className = 'btn-close';
    this.$buttonClose.dataset.bsToggle = 'offcanvas';
    this.$buttonClose.dataset.bsTarget = '#' + this.id;
    this.$header.append(this.$buttonClose);
    this.$wrapper.append(this.$header, this.$body);
  }
  return _createClass(OffCanvas, [{
    key: "addElement",
    value: function addElement(element) {
      if (element !== undefined) {
        this.elements.add(element);
        this.$body.append(element);
      }
      return this;
    }
  }, {
    key: "setVisible",
    value: function setVisible(flag) {
      if (typeof flag === 'boolean') {
        flag === false ? this.hide() : this.show();
      }
      return this;
    }
  }, {
    key: "hide",
    value: function hide() {
      this.$wrapper.classList.remove('show');
      this.visible = false;
      return this;
    }
  }, {
    key: "show",
    value: function show() {
      this.$wrapper.classList.add('show');
      this.visible = true;
      return this;
    }
  }, {
    key: "setTitle",
    value: function setTitle(text) {
      if (text !== undefined) {
        this.$title.innerHTML = text;
        this.$header.prepend(this.$title);
      }
      return this;
    }
  }, {
    key: "render",
    value: function render() {
      return this.$wrapper;
    }
  }]);
}();
},{}],"src/module/Product/form/OffCanvasRAL.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ral = _interopRequireDefault(require("../../../data/ral.js"));
var _OffCanvas2 = _interopRequireDefault(require("../../../components/bootstrap/OffCanvas.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OffCanvasRAL = exports.default = /*#__PURE__*/function (_OffCanvas) {
  function OffCanvasRAL(key) {
    var _this;
    _classCallCheck(this, OffCanvasRAL);
    _this = _callSuper(this, OffCanvasRAL, [key]);
    _defineProperty(_this, "items", new Set());
    _this.addElement(_this.createRALList());
    return _this;
  }
  _inherits(OffCanvasRAL, _OffCanvas);
  return _createClass(OffCanvasRAL, [{
    key: "createRALItem",
    value: function createRALItem(code) {
      var item = document.createElement('li');
      var view = document.createElement('span');
      var caption = document.createElement('span');
      item.dataset.code = code;
      item.dataset.bsDismiss = 'offcanvas';
      item.dataset.bsTarget = '#' + this.id;
      view.className = 'ral-code ral-' + code;
      caption.className = 'ral-caption';
      caption.innerHTML = 'RAL ' + code;
      item.append(view, caption);
      return item;
    }
  }, {
    key: "createRALList",
    value: function createRALList() {
      var _this2 = this;
      var $list = document.createElement('ul');
      $list.className = 'ral-colors_list';
      _ral.default.forEach(function (color) {
        if (color.code !== undefined) {
          var item = _this2.createRALItem(color.code);
          _this2.items.add(item);
          $list.append(item);
        }
      });
      return $list;
    }
  }, {
    key: "getItems",
    value: function getItems() {
      return this.items;
    }
  }, {
    key: "onClickItem",
    value: function onClickItem(callback) {
      if (typeof callback === 'function') {
        var _iterator = _createForOfIteratorHelper(this.getItems()),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;
            item.addEventListener('click', callback.bind(item));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }
  }]);
}(_OffCanvas2.default);
},{"../../../data/ral.js":"src/data/ral.js","../../../components/bootstrap/OffCanvas.js":"src/components/bootstrap/OffCanvas.js"}],"src/module/Product/ProductForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../user/User.js"));
var _polotna = _interopRequireDefault(require("../../data/polotna.js"));
var _Form2 = _interopRequireDefault(require("../../components/form/Form.js"));
var _FieldGroup = _interopRequireDefault(require("../../components/form/FieldGroup.js"));
var _Select = _interopRequireDefault(require("../../components/form/Select.js"));
var _Checkbox = _interopRequireDefault(require("../../components/form/Checkbox.js"));
var _Radio = _interopRequireDefault(require("../../components/form/Radio.js"));
var _InputNumber = _interopRequireDefault(require("../../components/form/InputNumber.js"));
var _InputText = _interopRequireDefault(require("../../components/form/InputText.js"));
var _Textarea = _interopRequireDefault(require("../../components/form/Textarea.js"));
var _InputHidden = _interopRequireDefault(require("../../components/form/InputHidden.js"));
var _InputQuantity = _interopRequireDefault(require("../../components/form/InputQuantity.js"));
var _InputRAL = _interopRequireDefault(require("./form/InputRAL.js"));
var _OffCanvasRAL = _interopRequireDefault(require("./form/OffCanvasRAL.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); } // Data
// Default
// Custom
var ProductForm = exports.default = /*#__PURE__*/function (_Form) {
  function ProductForm() {
    var _this;
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, ProductForm);
    _this = _callSuper(this, ProductForm, [config.key || 'ProductForm']);
    _this.$form.classList.add('form-product');

    // Добавляем в форму поле с текстовым названием товара
    _this.addField(_this.createHiddenTitle(config.title));

    // Генератор полей формы согласно конфигурации
    try {
      config.form.fields.forEach(function (field) {
        if (field.type === 'group') {
          _this.addField(_this.createGroup(field));
        } else {
          _this.addField(_this.createInput(field));
        }
      });
    } catch (error) {
      console.log('Ошибка конфигурации полей конструкции', error);
    }
    _this.addField(_this.createInputSpesmontaz());
    _this.addField(_this.createInputKomnata());

    // Добавляем в форму поле "комментарий"
    _this.addField(_this.createInputComment());

    // Добавляем в форму поле "монтаж"
    //this.addField(this.createInputMontage());

    // Добавляем в форму модальное окно с "RAL" цветами
    _this.addField(_this.createModalRAL());

    // Авто-вызов функций(совпадающих с ключом поля) для изменения поведения полей формы
    _this.setInputChanges();
    return _this;
  }

  /** 
   * Функции для изменения полей (зависимости/поведение/события и т.д)
   * function(field) {field.on('change', function(this, e) {}}
   * Где:
   * - this - непосредственно инстанс объекта где произошло событие [Input:class]
   * - field - поле [InputGroup:class, Input:class etc]
   */

  // Полотно -> цвета полотна
  // У каждого полотна есть разные цвета, которые грузятся из конфигурации polotna.js
  // Ловим изменения поля полотна и подгружаем нужный список цветов
  _inherits(ProductForm, _Form);
  return _createClass(ProductForm, [{
    key: "canvas",
    value: function canvas(field) {
      var canvasColors = this.getInput('canvas_color');
      if (canvasColors !== undefined) {
        field.on('change', function (e) {
          var key = this.getValue();
          if (_polotna.default.hasOwnProperty(key)) {
            canvasColors.setOptions(_polotna.default[key]);
          }
        });
      }
    }

    // Цвет рамки
  }, {
    key: "frame_color",
    value: function frame_color(field) {
      var inputRAL = this.getInput('ral');
      if (inputRAL !== undefined) {
        field.on('change', function (e) {
          inputRAL.setDisabled(true);
          if (this.getValue() === 'ral') {
            inputRAL.setDisabled(false);

            // Bootstrap events accessibility fix:
            var button = inputRAL.getButton().getElement();
            button.dispatchEvent(new Event('click'));
          }
        });
      }
    }

    // Установка (Показываем только монтажникам) (type Select)
  }, {
    key: "createInputSpesmontaz",
    value: function createInputSpesmontaz() {
      var input = new _Textarea.default('mogtagespes');
      input.setLabel('Монтажные работы');
      input.setPlaceholder('Укажите сумму');

      // Скрыть поле по умолчанию
      input.setVisible(false);
      this.addInput(input);
      return input;
    }
  }, {
    key: "montage",
    value: function montage(field) {
      if (_User.default.getRole() === 'employee') {
        field.addOption('easy', 'Монтаж', true);
        field.addOption('hard', 'Сложный монтаж');
        field.addOption('specific', 'Специфический монтаж');
        field.addOption('off', 'Без монтажа');
        var inputSpesmontaz = this.getInput('mogtagespes'); // Поле ввода стоимости монтажа

        field.on('change', function () {
          if (this.getValue() === 'specific') {
            inputSpesmontaz.setVisible(true); // Показываем поле ввода стоимости монтажа
          } else {
            inputSpesmontaz.setVisible(false); // Скрываем поле ввода стоимости монтажа
          }
        });
      } else {
        field.setVisible(false);
        field.setDisabled(true);
      }
    }

    /** 
     * Нестандартные поля  
     */

    // Цвета полотна в зависимости от типа полотна 
  }, {
    key: "createCanvasColors",
    value: function createCanvasColors() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var input = new _Select.default(config.key);
      input.setLabel(config.label);
      input.setRequired(config.required);

      // Устанавливаем цвета полотна согласно конфигурации и текущего полотна
      var canvasKey = this.getInput('canvas').getValue();
      if (_polotna.default.hasOwnProperty(canvasKey)) {
        _polotna.default[canvasKey].forEach(function (item) {
          input.addOption(item.value, item.label, item.selected);
        });
      }
      return input;
    }

    // Поле для ввода кода цвета RAL 
  }, {
    key: "createInputRAL",
    value: function createInputRAL() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var input = new _InputRAL.default(config.key, '1000', '9023'); // Ключ, мин, макс
      input.setLabel(config.label);
      input.setDisabled(true);
      input.setValue('1000');
      // input.setVisible(config.visible);

      return input;
    }

    // Модальное окно с выбором рал цветов, добавляется просто как field в конец формы 
    // Поведение не как у Input по этому события функциями повесить нельзя
    // Все поведение пишется при создании
  }, {
    key: "createModalRAL",
    value: function createModalRAL() {
      var field = new _OffCanvasRAL.default('ral_modal');
      field.setTitle('Выберите цвет по шкале RAL');
      // field.setVisible(true);

      // Обработка клика по элементу списка RAL цветов в модальном окне
      var inputRAL = this.getInput('ral');
      if (inputRAL !== undefined) {
        var buttonRAL = inputRAL.getButton();
        buttonRAL.setClass('ral-' + inputRAL.getValue());
        field.onClickItem(function () {
          inputRAL.setValue(this.dataset.code);
          buttonRAL.setClass('ral-' + this.dataset.code);
          // С валидацией
          inputRAL.validate();
        });
        inputRAL.on('change', function () {
          buttonRAL.setClass('ral-' + this.getValue());
        });
      }
      return field;
    }

    // Комментарий к изделию
  }, {
    key: "createInputComment",
    value: function createInputComment() {
      var input = new _Textarea.default('comment');
      input.setLabel('Комментарий к изделию');
      input.setPlaceholder('Текст комментария');
      this.addInput(input);
      return input;
    }

    // Тип комннаты
  }, {
    key: "createInputKomnata",
    value: function createInputKomnata() {
      var input = new _Textarea.default('typeroom');
      input.setLabel('Название помещения');
      input.setPlaceholder('Введите название');
      this.addInput(input);
      return input;
    }

    // Скрытое поле с названием товара
  }, {
    key: "createHiddenTitle",
    value: function createHiddenTitle(text) {
      var input = new _InputHidden.default('title');
      input.setValue(text);
      input.setLabel('Тип конструкции');
      this.addInput(input);
      return input;
    }

    /**
     * Конструкторы полей формы
     */

    // Input
  }, {
    key: "createInput",
    value: function createInput() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var input = Object.create(null);
      if (config.type !== undefined) {
        switch (config.type) {
          case 'select':
            input = this.createSelect(config);
            break;
          case 'checkbox':
            input = this.createCheckbox(config);
            break;
          case 'number':
            input = this.createInputQuantity(config);
            break;
          case 'radio':
            input = this.createRadio(config);
            break;
          // case 'text': input = this.createInputText(config); break;
          // case 'textarea': input = this.createTextarea(config); break;

          // Кастомные не стандартные поля
          case 'canvas_color':
            input = this.createCanvasColors(config);
            break;
          case 'ral':
            input = this.createInputRAL(config);
            break;
        }
        this.addInput(input);
      }
      return input;
    }

    // FieldGroup
  }, {
    key: "createGroup",
    value: function createGroup() {
      var _this2 = this;
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var group = new _FieldGroup.default(config.key);
      group.setLabel(config.label);
      config.inputs.forEach(function (input) {
        group.addField(_this2.createInput(input));
      });
      return group;
    }

    // Select
  }, {
    key: "createSelect",
    value: function createSelect() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var input = new _Select.default(config.key);
      input.setLabel(config.label);
      input.setRequired(config.required);
      input.setVisible(config.visible);
      input.setDisabled(config.disabled);
      if (config.hasOwnProperty('items')) {
        config.items.forEach(function (item) {
          input.addOption(item.value, item.label, item.selected);
        });
      }
      return input;
    }

    // Checkbox
  }, {
    key: "createCheckbox",
    value: function createCheckbox() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var field = new _Checkbox.default(config.key);
      field.setLabel(config.label);
      field.setRequired(config.required);
      field.setDisabled(config.disabled);
      if (config.hasOwnProperty('items')) {
        config.items.forEach(function (item) {
          field.addItem(item.value, item.label, item.checked, item.disabled);
        });
      }
      return field;
    }

    // Input Number
  }, {
    key: "createInputNumber",
    value: function createInputNumber() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var input = new _InputNumber.default(config.key, config.min, config.max, config.step);
      input.setLabel(config.label);
      input.setRequired(config.required);
      input.setDisabled(config.disabled);
      input.setValue(config.value);
      input.setUnit(config.unit);
      return input;
    }

    // Input number plus-minus
  }, {
    key: "createInputQuantity",
    value: function createInputQuantity() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var input = new _InputQuantity.default(config.key, config.min, config.max, config.step);
      input.setLabel(config.label);
      input.setRequired(config.required);
      input.setDisabled(config.disabled);
      input.setValue(config.value);
      input.setUnit(config.unit);
      return input;
    }

    // Radio
  }, {
    key: "createRadio",
    value: function createRadio() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var field = new _Radio.default(config.key);
      field.setLabel(config.label);
      field.setRequired(config.required);
      field.setDisabled(config.disabled);
      if (config.hasOwnProperty('items')) {
        config.items.forEach(function (item) {
          field.addItem(item.value, item.label, item.checked, item.disabled);
        });
      }
      return field;
    }

    // // Input text
    // createInputText(config = {}) {
    //     const input = new InputText(config.key);
    //     input.setLabel(config.label);
    //     input.setRequired(config.required);
    //     input.setPlaceholder(config.placeholder);

    //     return input;
    // }

    // // Textarea
    // createTextarea(config = {}) {
    //     const input = new Textarea(config.key);
    //     input.setLabel(config.label);
    //     input.setPlaceholder(config.placeholder);
    //     input.setRequired(config.required);

    //     return input;
    // }

    // Применение изменений для input поля по ключу "key" 
    // Автозапуск функции с именем ключа key() если создана
  }, {
    key: "setInputChanges",
    value: function setInputChanges() {
      var _iterator = _createForOfIteratorHelper(this.getInputs().values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          // Проверка наличия функции обработчика для поля
          if (input.hasOwnProperty('key')) {
            // Вызов функции обработчика
            if (typeof this[input.key] === 'function') {
              this[input.key](input);
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    /**
     * 
     */
    // getPrice() {
    //     console.log(this);
    // }
  }]);
}(_Form2.default);
},{"../../user/User.js":"src/user/User.js","../../data/polotna.js":"src/data/polotna.js","../../components/form/Form.js":"src/components/form/Form.js","../../components/form/FieldGroup.js":"src/components/form/FieldGroup.js","../../components/form/Select.js":"src/components/form/Select.js","../../components/form/Checkbox.js":"src/components/form/Checkbox.js","../../components/form/Radio.js":"src/components/form/Radio.js","../../components/form/InputNumber.js":"src/components/form/InputNumber.js","../../components/form/InputText.js":"src/components/form/InputText.js","../../components/form/Textarea.js":"src/components/form/Textarea.js","../../components/form/InputHidden.js":"src/components/form/InputHidden.js","../../components/form/InputQuantity.js":"src/components/form/InputQuantity.js","./form/InputRAL.js":"src/module/Product/form/InputRAL.js","./form/OffCanvasRAL.js":"src/module/Product/form/OffCanvasRAL.js"}],"src/data/price.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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
        min: 4098
      }, {
        key: 'maxivision',
        price: 4098,
        min: 4098
      }, {
        key: 'micromesh',
        price: 3795,
        min: 3795
      }, {
        key: 'antipyl',
        price: 3795,
        min: 3795
      }, {
        key: 'polltex',
        price: 4857,
        min: 4857
      }, {
        key: 'antibird',
        price: 6527,
        min: 6527
      }, {
        key: 'sunlight',
        price: 1900,
        min: 1500
      }, {
        key: 'diamond',
        price: 4929,
        min: 4929
      }, {
        key: 'antipo',
        price: 5795,
        min: 5795
      }, {
        key: 'metalmesh',
        price: 4488,
        min: 4488
      }, {
        key: 'resplion',
        price: 5098,
        min: 5098
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      // Тип крепления
      fastings: [{
        key: 'z-krepleniya-m',
        price: 450
      }, {
        key: 'z-krepleniya-p',
        price: 220
      }, {
        key: 'plungery',
        price: 900
      }, {
        key: 'vnutrennie-zacepi',
        price: 660
      }, {
        key: 'bezkrepleniya',
        price: 0
      }],
      // Углы
      corners: [{
        key: 'plastikovie',
        price: 0
      }, {
        key: 'metallicheskie',
        price: 450
      }],
      // Ручки
      handles: [{
        key: 'silikonovie',
        price: 0
      }, {
        key: 'metallicheskie',
        price: 220
      }, {
        key: 'bezruchek',
        price: 0
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 220
      }, {
        key: 'three',
        price: 440
      }, {
        key: 'four',
        price: 660
      }, {
        key: 'krest',
        price: 2200
      }],
      //комплект креплений
      komplekt: [{
        key: 'one',
        price: 0
      }, {
        key: 'half',
        price: 110
      }, {
        key: 'two',
        price: 440
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 600
      }, {
        key: 'hard',
        price: 1200
      }]
    },
    VstavnayaVSN: {
      canvas: [{
        key: 'fiberglass',
        price: 3850,
        min: 3850
      }, {
        key: 'petscreen',
        price: 6196,
        min: 6196
      }, {
        key: 'maxivision',
        price: 6196,
        min: 6196
      }, {
        key: 'micromesh',
        price: 5920,
        min: 5920
      }, {
        key: 'antipyl',
        price: 5920,
        min: 5920
      }, {
        key: 'polltex',
        price: 6886,
        min: 6886
      }, {
        key: 'resplion',
        price: 8404,
        min: 8404
      }, {
        key: 'sunlight',
        price: 6886,
        min: 6886
      }, {
        key: 'diamond',
        price: 6196,
        min: 6196
      }, {
        key: 'antipo',
        price: 7920,
        min: 7920
      }, {
        key: 'metalmesh',
        price: 7196,
        min: 7196
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 440
      }, {
        key: 'three',
        price: 660
      }, {
        key: 'four',
        price: 880
      }, {
        key: 'krest',
        price: 2200
      }],
      komplekt: [{
        key: 'one',
        price: 0
      }, {
        key: 'half',
        price: 675
      }, {
        key: 'two',
        price: 900
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 600
      }, {
        key: 'hard',
        price: 1200
      }]
    },
    RamochnayaAlumSN: {
      canvas: [{
        key: 'fiberglass',
        price: 8250,
        min: 8250
      }, {
        key: 'petscreen',
        price: 10596,
        min: 10596
      }, {
        key: 'maxivision',
        price: 10596,
        min: 10596
      }, {
        key: 'micromesh',
        price: 10320,
        min: 10320
      }, {
        key: 'antipyl',
        price: 10320,
        min: 10320
      }, {
        key: 'polltex',
        price: 11286,
        min: 11286
      }, {
        key: 'resplion',
        price: 12804,
        min: 12804
      }, {
        key: 'sunlight',
        price: 11286,
        min: 11286
      }, {
        key: 'diamond',
        price: 10596,
        min: 10596
      }, {
        key: 'antipo',
        price: 12320,
        min: 12320
      }, {
        key: 'metalmesh',
        price: 11596,
        min: 11596
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 220
      }, {
        key: 'three',
        price: 440
      }, {
        key: 'four',
        price: 660
      }, {
        key: 'krest',
        price: 2200
      }],
      komplekt: [{
        key: 'one',
        price: 0
      }, {
        key: 'half',
        price: 675
      }, {
        key: 'two',
        price: 900
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 800
      }, {
        key: 'hard',
        price: 1600
      }]
    },
    Ramochnaya32: {
      canvas: [{
        key: 'fiberglass',
        price: 3980,
        min: 3980
      }, {
        key: 'petscreen',
        price: 6098,
        min: 6098
      }, {
        key: 'maxivision',
        price: 6098,
        min: 6098
      }, {
        key: 'micromesh',
        price: 5795,
        min: 5795
      }, {
        key: 'antipyl',
        price: 5795,
        min: 5795
      }, {
        key: 'polltex',
        price: 6857,
        min: 6857
      }, {
        key: 'resplion',
        price: 8527,
        min: 8527
      }, {
        key: 'sunlight',
        price: 6929,
        min: 6929
      }, {
        key: 'diamond',
        price: 6488,
        min: 6488
      }, {
        key: 'antipo',
        price: 7795,
        min: 7795
      }, {
        key: 'metalmesh',
        price: 7098,
        min: 7098
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      // Тип крепления
      fastings: [{
        key: 'z-krepleniya-m',
        price: 450
      }, {
        key: 'z-krepleniya-p',
        price: 220
      }, {
        key: 'plungery',
        price: 900
      }, {
        key: 'vnutrennie-zacepi',
        price: 660
      }, {
        key: 'bezkrepleniya',
        price: 0
      }],
      // Углы
      corners: [{
        key: 'plastikovie',
        price: 0
      }, {
        key: 'metallicheskie',
        price: 450
      }],
      // Ручки
      handles: [{
        key: 'silikonovie',
        price: 0
      }, {
        key: 'metallicheskie',
        price: 220
      }, {
        key: 'bezruchek',
        price: 0
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 220
      }, {
        key: 'three',
        price: 440
      }, {
        key: 'four',
        price: 660
      }, {
        key: 'krest',
        price: 2200
      }],
      //комплект креплений
      komplekt: [{
        key: 'one',
        price: 0
      }, {
        key: 'half',
        price: 110
      }, {
        key: 'two',
        price: 440
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 600
      }, {
        key: 'hard',
        price: 1200
      }]
    },
    RazdvignayaProvedal: {
      canvas: [{
        key: 'fiberglass',
        price: 5023,
        min: 5023
      }, {
        key: 'petscreen',
        price: 7369,
        min: 7369
      }, {
        key: 'maxivision',
        price: 7369,
        min: 7369
      }, {
        key: 'micromesh',
        price: 7093,
        min: 7093
      }, {
        key: 'antipyl',
        price: 7093,
        min: 7093
      }, {
        key: 'polltex',
        price: 8059,
        min: 8059
      }, {
        key: 'resplion',
        price: 9577,
        min: 9577
      }, {
        key: 'sunlight',
        price: 8059,
        min: 8059
      }, {
        key: 'diamond',
        price: 7369,
        min: 7369
      }, {
        key: 'antipo',
        price: 9093,
        min: 9093
      }, {
        key: 'metalmesh',
        price: 8369,
        min: 8369
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 220
      }, {
        key: 'three',
        price: 440
      }, {
        key: 'four',
        price: 660
      }, {
        key: 'krest',
        price: 2200
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 1100
      }, {
        key: 'hard',
        price: 2200
      }]
    },
    //Рамочная в раме Provedal
    Dvernaya32: {
      canvas: [{
        key: 'fiberglass',
        price: 5023,
        min: 5023
      }, {
        key: 'petscreen',
        price: 7369,
        min: 7369
      }, {
        key: 'maxivision',
        price: 7369,
        min: 7369
      }, {
        key: 'micromesh',
        price: 7093,
        min: 7093
      }, {
        key: 'antipyl',
        price: 7093,
        min: 7093
      }, {
        key: 'polltex',
        price: 8059,
        min: 8059
      }, {
        key: 'resplion',
        price: 9577,
        min: 9577
      }, {
        key: 'sunlight',
        price: 8059,
        min: 8059
      }, {
        key: 'antipo',
        price: 9093,
        min: 9093
      }, {
        key: 'metalmesh',
        price: 8369,
        min: 8369
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 220
      }, {
        key: 'three',
        price: 440
      }, {
        key: 'four',
        price: 660
      }, {
        key: 'krest',
        price: 2200
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 1100
      }, {
        key: 'hard',
        price: 2200
      }],
      plusprice: [{
        key: 'priceplus',
        price: 13500
      }]
    },
    //Раздвижная SLIDORS
    RulonnayaPolsha: {
      canvas: [{
        key: 'fiberglass',
        price: 1980,
        min: 1980
      }, {
        key: 'petscreen',
        price: 4098,
        min: 4098
      }, {
        key: 'maxivision',
        price: 4098,
        min: 4098
      }, {
        key: 'micromesh',
        price: 3795,
        min: 3795
      }, {
        key: 'antipyl',
        price: 3795,
        min: 3795
      }, {
        key: 'polltex',
        price: 4857,
        min: 4857
      }, {
        key: 'antibird',
        price: 6527,
        min: 6527
      }, {
        key: 'sunlight',
        price: 1900,
        min: 1500
      }, {
        key: 'diamond',
        price: 4929,
        min: 4929
      }, {
        key: 'antipo',
        price: 5795,
        min: 5795
      }, {
        key: 'metalmesh',
        price: 4488,
        min: 4488
      }, {
        key: 'resplion',
        price: 5098,
        min: 5098
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 220
      }, {
        key: 'three',
        price: 440
      }, {
        key: 'four',
        price: 660
      }, {
        key: 'krest',
        price: 2200
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 1100
      }, {
        key: 'hard',
        price: 2200
      }],
      plusprice: [{
        key: 'priceplus',
        price: 15000
      }]
    },
    Dvernaya42: {
      canvas: [{
        key: 'fiberglass',
        price: 1980,
        min: 1980
      }, {
        key: 'petscreen',
        price: 4098,
        min: 4098
      }, {
        key: 'maxivision',
        price: 4098,
        min: 4098
      }, {
        key: 'micromesh',
        price: 3795,
        min: 3795
      }, {
        key: 'antipyl',
        price: 3795,
        min: 3795
      }, {
        key: 'polltex',
        price: 4857,
        min: 4857
      }, {
        key: 'antibird',
        price: 6527,
        min: 6527
      }, {
        key: 'sunlight',
        price: 1900,
        min: 1500
      }, {
        key: 'diamond',
        price: 4929,
        min: 4929
      }, {
        key: 'antipo',
        price: 5795,
        min: 5795
      }, {
        key: 'metalmesh',
        price: 4488,
        min: 4488
      }, {
        key: 'resplion',
        price: 5098,
        min: 5098
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      // Петли
      hinges: [{
        key: 'bez-dovodchika',
        price: 3500
      }, {
        key: 's-dovodchikom',
        price: 4500
      }, {
        key: 'usilenye',
        price: 4500
      }],
      latches: [{
        key: 'null',
        price: 0
      }, {
        key: 'one',
        price: 600
      }, {
        key: 'two',
        price: 1200
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 440
      }, {
        key: 'three',
        price: 660
      }, {
        key: 'four',
        price: 880
      }, {
        key: 'krest',
        price: 2200
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 1100
      }, {
        key: 'hard',
        price: 2200
      }]
    },
    PlisseItalia: {
      opening: [{
        key: 'odnostoronee',
        price: 20790
      }, {
        key: 'vstrechnoe',
        price: 27027
      }, {
        key: 'reversivnoe',
        price: 27027
      }, {
        key: 'verticalnoe',
        price: 20790
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 2000
      }],
      montage: [{
        key: 'easy',
        price: 2500
      }, {
        key: 'hard',
        price: 5000
      }]
    },
    //Плиссе DMF / ДМФ
    PlisseRussia: {
      opening: [{
        key: 'odnostoronee',
        price: 27027
      }, {
        key: 'vstrechnoe',
        price: 35135
      }, {
        key: 'reversivnoe',
        price: 35135
      }, {
        key: 'verticalnoe',
        price: 27027
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 2000
      }],
      montage: [{
        key: 'easy',
        price: 2500
      }, {
        key: 'hard',
        price: 5000
      }]
    },
    RulonnayaItalia: {
      canvas: [{
        key: 'fiberglassrollet',
        price: 11550,
        min: 11550
      }, {
        key: 'antiporollet',
        price: 15015,
        min: 15015
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'brown',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 2000
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 2000
      }, {
        key: 'hard',
        price: 4000
      }]
    },
    //Рамочная OPTIMA
    Dvernaya52: {
      canvas: [{
        key: 'fiberglass',
        price: 3850,
        min: 3850
      }, {
        key: 'petscreen',
        price: 6196,
        min: 6196
      }, {
        key: 'maxivision',
        price: 6196,
        min: 6196
      }, {
        key: 'micromesh',
        price: 5920,
        min: 5920
      }, {
        key: 'antipyl',
        price: 5920,
        min: 5920
      }, {
        key: 'polltex',
        price: 6886,
        min: 6886
      }, {
        key: 'resplion',
        price: 8404,
        min: 8404
      }, {
        key: 'sunlight',
        price: 6886,
        min: 6886
      }, {
        key: 'diamond',
        price: 6196,
        min: 6196
      }, {
        key: 'antipo',
        price: 6920,
        min: 6920
      }, {
        key: 'metalmesh',
        price: 7196,
        min: 7196
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 440
      }, {
        key: 'three',
        price: 660
      }, {
        key: 'four',
        price: 880
      }, {
        key: 'krest',
        price: 2200
      }],
      //комплект креплений
      komplekt: [{
        key: 'one',
        price: 0
      }, {
        key: 'half',
        price: 110
      }, {
        key: 'two',
        price: 440
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 600
      }, {
        key: 'hard',
        price: 1200
      }]
    },
    TrapeciyaStandart: {
      canvas: [{
        key: 'fiberglass',
        price: 1980,
        min: 1980
      }, {
        key: 'petscreen',
        price: 4098,
        min: 4098
      }, {
        key: 'maxivision',
        price: 4098,
        min: 4098
      }, {
        key: 'micromesh',
        price: 3795,
        min: 3795
      }, {
        key: 'antipyl',
        price: 3795,
        min: 3795
      }, {
        key: 'polltex',
        price: 4857,
        min: 4857
      }, {
        key: 'antibird',
        price: 6527,
        min: 6527
      }, {
        key: 'sunlight',
        price: 1900,
        min: 1500
      }, {
        key: 'diamond',
        price: 4929,
        min: 4929
      }, {
        key: 'antipo',
        price: 5795,
        min: 5795
      }, {
        key: 'metalmesh',
        price: 4488,
        min: 4488
      }, {
        key: 'resplion',
        price: 5098,
        min: 5098
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      // Тип крепления
      fastings: [{
        key: 'z-krepleniya-m',
        price: 450
      }, {
        key: 'z-krepleniya-p',
        price: 220
      }, {
        key: 'plungery',
        price: 900
      }, {
        key: 'bezkrepleniya',
        price: 0
      }],
      // Углы
      corners: [{
        key: 'plastikovie',
        price: 0
      }, {
        key: 'metallicheskie',
        price: 450
      }],
      plusprice: [{
        key: 'priceplus',
        price: 4500
      }],
      // Ручки
      handles: [{
        key: 'silikonovie',
        price: 0
      }, {
        key: 'metallicheskie',
        price: 220
      }, {
        key: 'bezruchek',
        price: 0
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 440
      }, {
        key: 'three',
        price: 660
      }, {
        key: 'four',
        price: 880
      }, {
        key: 'krest',
        price: 2200
      }],
      //комплект креплений
      komplekt: [{
        key: 'one',
        price: 0
      }, {
        key: 'half',
        price: 110
      }, {
        key: 'two',
        price: 440
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 600
      }, {
        key: 'hard',
        price: 1200
      }]
    },
    Arochnaya: {
      canvas: [{
        key: 'fiberglass',
        price: 1980,
        min: 1980
      }, {
        key: 'petscreen',
        price: 4098,
        min: 4098
      }, {
        key: 'maxivision',
        price: 4098,
        min: 4098
      }, {
        key: 'micromesh',
        price: 3795,
        min: 3795
      }, {
        key: 'antipyl',
        price: 3795,
        min: 3795
      }, {
        key: 'polltex',
        price: 4857,
        min: 4857
      }, {
        key: 'antibird',
        price: 6527,
        min: 6527
      }, {
        key: 'sunlight',
        price: 1900,
        min: 1500
      }, {
        key: 'diamond',
        price: 4929,
        min: 4929
      }, {
        key: 'antipo',
        price: 5795,
        min: 5795
      }, {
        key: 'metalmesh',
        price: 4488,
        min: 4488
      }, {
        key: 'resplion',
        price: 5098,
        min: 5098
      }],
      // Цвет рамки
      frame_color: [{
        key: 'white',
        price: 0
      }, {
        key: 'antracite',
        price: 1000
      }, {
        key: 'black',
        price: 1000
      }, {
        key: 'ral.min',
        price: 6000
      }, {
        key: 'ral',
        price: 1000
      }],
      // Тип крепления
      fastings: [{
        key: 'z-krepleniya-m',
        price: 450
      }, {
        key: 'z-krepleniya-p',
        price: 220
      }, {
        key: 'plungery',
        price: 900
      }, {
        key: 'bezkrepleniya',
        price: 0
      }],
      // Углы
      corners: [{
        key: 'plastikovie',
        price: 0
      }, {
        key: 'metallicheskie',
        price: 450
      }],
      // Ручки
      handles: [{
        key: 'silikonovie',
        price: 0
      }, {
        key: 'metallicheskie',
        price: 220
      }, {
        key: 'bezruchek',
        price: 0
      }],
      //Перемычки
      peremychka: [{
        key: 'one',
        price: 0
      }, {
        key: 'two',
        price: 440
      }, {
        key: 'three',
        price: 660
      }, {
        key: 'four',
        price: 880
      }, {
        key: 'krest',
        price: 2200
      }],
      //комплект креплений
      komplekt: [{
        key: 'one',
        price: 0
      }, {
        key: 'half',
        price: 110
      }, {
        key: 'two',
        price: 440
      }],
      plusprice: [{
        key: 'priceplus',
        price: 6000
      }],
      // Монтаж
      montage: [{
        key: 'easy',
        price: 600
      }, {
        key: 'hard',
        price: 1200
      }]
    }
  },
  Perekatka: _defineProperty({
    canvas: [{
      key: 'fiberglass',
      price: 1782,
      min: 1782
    }, {
      key: 'petscreen',
      price: 3688,
      min: 3688
    }, {
      key: 'maxivision',
      price: 3688,
      min: 3688
    }, {
      key: 'micromesh',
      price: 3795,
      min: 3795
    }, {
      key: 'antipyl',
      price: 3415,
      min: 3415
    }, {
      key: 'polltex',
      price: 3415,
      min: 3415
    }, {
      key: 'antibird',
      price: 3415,
      min: 3415
    }, {
      key: 'sunlight',
      price: 3415,
      min: 3415
    }, {
      key: 'diamond',
      price: 4039,
      min: 4039
    }, {
      key: 'antipo',
      price: 4315,
      min: 4315
    }, {
      key: 'metalmesh',
      price: 4588,
      min: 4588
    }, {
      key: 'resplion',
      price: 5098,
      min: 5098
    }],
    // Цвет рамки
    frame_color: [{
      key: 'white',
      price: 0
    }, {
      key: 'antracite',
      price: 1000
    }, {
      key: 'black',
      price: 1000
    }, {
      key: 'ral.min',
      price: 6000
    }, {
      key: 'ral',
      price: 1000
    }],
    //тип крепления
    fastings: [{
      key: 'z-krepleniya-m',
      price: 450
    }, {
      key: 'z-krepleniya-p',
      price: 220
    }, {
      key: 'plungery',
      price: 900
    }],
    //ручки
    handles: [{
      key: 'silikonovie',
      price: 0
    }, {
      key: 'metallicheskie',
      price: 220
    }],
    //комплект креплений
    komplekt: [{
      key: 'one',
      price: 0
    }, {
      key: 'half',
      price: 220
    }, {
      key: 'two',
      price: 440
    }],
    // Углы
    corners: [{
      key: 'plastikovie',
      price: 0
    }, {
      key: 'metallicheskie',
      price: 450
    }]
  }, "handles", [{
    key: 'silikonovie',
    price: 0
  }, {
    key: 'metallicheskie',
    price: 220
  }, {
    key: 'bezruchek',
    price: 0
  }])
};
},{}],"src/module/Product/price/Price.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Price = exports.default = /*#__PURE__*/function () {
  function Price(formData, priceData) {
    _classCallCheck(this, Price);
    this.formData = formData;
    this.priceData = priceData;
    this.debug = false;
  }

  // Основная функция для рассчета цены
  return _createClass(Price, [{
    key: "calculate",
    value: function calculate() {
      throw new Error('Must implement calculate() method');
    }

    /**
     * Получение цены по имени поля формы
     * @param {string} inputKey 
     */
  }, {
    key: "getInputPrice",
    value: function getInputPrice(inputKey) {
      var _this = this;
      var inputData = this.formData.get(inputKey);
      if (!inputData || !inputData.value) return {
        price: 0,
        min: 0
      };
      if (Array.isArray(inputData.value)) {
        return inputData.value.map(function (item) {
          return _objectSpread(_objectSpread({}, {
            price: 0,
            min: 0
          }), _this.findPrice(inputKey, item.value));
        });
      }
      return _objectSpread(_objectSpread({}, {
        price: 0,
        min: 0
      }), this.findPrice(inputKey, inputData.value));
    }

    // Рассчет площади сетки с переводом мм. в кв.м.
  }, {
    key: "calcArea",
    value: function calcArea() {
      var _this$formData$get, _this$formData$get2;
      var areaM2 = 0;
      var w = (_this$formData$get = this.formData.get('width')) === null || _this$formData$get === void 0 ? void 0 : _this$formData$get.value;
      var h = (_this$formData$get2 = this.formData.get('height')) === null || _this$formData$get2 === void 0 ? void 0 : _this$formData$get2.value;
      if (w && h) areaM2 = parseFloat((w / 1000 * (h / 1000)).toFixed(6));

      // Debug
      if (this.debug === true) console.log("calcArea = ".concat(areaM2));
      return areaM2;
    }

    // Рассчет цены с учетом площади сетки 
    // priceM2 - цена за кв.м.
    // priceM2Min - минимальная цена.
  }, {
    key: "calcAreaPrice",
    value: function calcAreaPrice(priceM2) {
      var priceM2Min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var areaPrice = 0;
      areaPrice += (priceM2 || 0) * this.calcArea();
      if (areaPrice < priceM2Min) areaPrice = priceM2Min;

      // Debug
      if (this.debug === true) console.log("areaPrice = ".concat(areaPrice));
      return areaPrice;
    }

    // Рассчет цены полотна + цены на цвет рамки
  }, {
    key: "calcCanvasFramePrice",
    value: function calcCanvasFramePrice() {
      var price = 0,
        priceM2 = 0,
        priceM2Min = 0,
        framePrice = 0;
      priceM2 = this.getInputPrice('canvas').price;
      priceM2Min = this.getInputPrice('canvas').min;
      framePrice = this.getInputPrice('frame_color').price;

      // Цена за полотно + цена за рамку
      price = this.calcAreaPrice(priceM2 + framePrice);
      // Если цена получилась меньше минимальной
      if (price < priceM2Min + framePrice) price = priceM2Min + framePrice;

      // Debug
      if (this.debug === true) console.log("calcCanvasFramePrice = ".concat(price));
      return price;
    }

    // Рассчет опций по умолчанию
  }, {
    key: "calcOptionsPrice",
    value: function calcOptionsPrice() {
      var price = 0;
      var _iterator = _createForOfIteratorHelper(this.formData.values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          switch (input.key) {
            case 'corners':
            case 'handles':
            case 'fastings':
            case 'komplekt':
            case 'peremychka':
            case 'plusprice':
            case 'hinges':
              price += this.getInputPrice(input.key).price;
              break;
            case 'remake':
              price += this.getInputPrice('remake').reduce(function (sum, item) {
                return sum + item.price;
              }, 0);
              break;
          }
        }

        // Debug
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (this.debug === true) console.log("calcOptionsPrice = ".concat(price));
      return price;
    }

    // Рассчет цены на рельсы
  }, {
    key: "calcRailPrice",
    value: function calcRailPrice() {
      var price = 0;
      var priceM = 800; // Цена за погонный метр рельсы, р.
      var rail = this.formData.get('rail');
      if (rail) {
        price = rail.value / 1000 * priceM; // с переводом мм в метры 
      }
      return price;
    }
  }, {
    key: "calcRailPriceSlidors",
    value: function calcRailPriceSlidors() {
      var price = 0;
      var priceM = 1000; // Цена за погонный метр рельсы, р.
      var rail = this.formData.get('rail');
      if (rail) {
        price = rail.value / 1000 * priceM; // с переводом мм в метры 
      }
      return price;
    }

    // Рассчет стоимости монтажа (только для монтажников)
  }, {
    key: "calcMontage",
    value: function calcMontage(productPrice) {
      var _this2 = this;
      var total = 0;
      var inputPriceData = this.getInputPrice('montage');
      if (inputPriceData) {
        // Если встречается data в виде массива, значит есть поля которые влияют на цену монтажа
        if (inputPriceData.data) {
          inputPriceData.data.forEach(function (field) {
            if (field.data) {
              switch (field.key) {
                case 'area':
                  var price = 0;
                  var area = _this2.calcArea();
                  field.data.forEach(function (item) {
                    if (_this2.inRange(area, item.min, item.max)) price = item.price || 0;
                  });
                  total += price;
                  break;
                case 'fastings':
                  var fastings = _this2.formData.get('fastings');
                  if (fastings && fastings.value) {
                    field.data.forEach(function (item) {
                      if (fastings.value === item.key) total += item.price || 0;
                    });
                  }
                  break;
                case 'hinges':
                  var hinges = _this2.formData.get('hinges');
                  if (hinges && hinges.value) {
                    field.data.forEach(function (item) {
                      if (hinges.value === item.key) total += item.price || 0;
                    });
                  }
                  break;
              }
            }
          });
        }

        // При обычном параметре price - просто добавляем его к цене монтажа
        if (inputPriceData.price) total += inputPriceData.price;

        // При параметре percent - рассчитываем стоимость монтажа из цены продукта
        if (inputPriceData.percent && productPrice) {
          total += Math.round(productPrice * inputPriceData.percent / 100);
        }
      }

      // Debug
      if (this.debug === true) console.log("calcMontage = ".concat(total));
      return total;
    }

    // Поиск цены по ключу в массиве цен (priceData[key] = arrayOf {key, price, min})
  }, {
    key: "findPrice",
    value: function findPrice(key, value) {
      var _this$priceData$key;
      return (_this$priceData$key = this.priceData[key]) === null || _this$priceData$key === void 0 ? void 0 : _this$priceData$key.find(function (item) {
        return item.key === value;
      });
    }
  }, {
    key: "inRange",
    value: function inRange(num, min, max) {
      if (num) {
        if (min && !max) return num >= min;
        if (!min && max) return num <= max;
        if (min && max) return num >= min && num <= max;
      }
      return false;
    }
  }, {
    key: "debug",
    value: function debug() {
      var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      if (this.debug) console.log("".concat(text, " = ").concat(value));
    }
  }]);
}();
},{}],"src/module/Product/price/PriceDealer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Price2 = _interopRequireDefault(require("./Price.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var PriceDealer = exports.default = /*#__PURE__*/function (_Price) {
  function PriceDealer(productKey, formData, priceData) {
    var _this;
    _classCallCheck(this, PriceDealer);
    _this = _callSuper(this, PriceDealer, [formData, priceData]);
    _this.productKey = productKey;
    return _this;
  }
  _inherits(PriceDealer, _Price);
  return _createClass(PriceDealer, [{
    key: "calculate",
    value: function calculate() {
      if (typeof this[this.productKey] === 'function') {
        return this[this.productKey]();
      } else {
        return this.Default();
      }
    }
  }, {
    key: "Default",
    value: function Default() {
      var total = 0;
      total += this.calcCanvasFramePrice();
      total += this.calcOptionsPrice();
      return total;
    }
  }, {
    key: "PlisseRussia",
    value: function PlisseRussia() {
      var total = 0,
        priceM2 = 0;
      priceM2 += this.getInputPrice('opening').price;
      priceM2 += this.getInputPrice('install').price;
      total = this.calcAreaPrice(priceM2, priceM2);
      return total;
      return total;
    }
  }, {
    key: "PlisseItaly",
    value: function PlisseItaly() {
      var total = 0,
        priceM2 = 0;
      priceM2 += this.getInputPrice('opening').price;
      priceM2 += this.getInputPrice('install').price;
      total = this.calcAreaPrice(priceM2, priceM2);
      return total;
    }
  }, {
    key: "RazdvignayaProvedal",
    value: function RazdvignayaProvedal() {
      var total = 0;
      total += this.calcCanvasFramePrice();
      total += this.calcOptionsPrice();
      total += this.calcRailPrice();
      return total;
    }
  }, {
    key: "RulonnayaItalia",
    value: function RulonnayaItalia() {
      var total = 0;
      total += this.calcCanvasFramePrice();
      return total;
    }
  }, {
    key: "RulonnayaPolsha",
    value: function RulonnayaPolsha() {
      var total = 0,
        priceM2 = 6000,
        priceM2Min = 6000;
      total += this.calcAreaPrice(priceM2, priceM2Min);
      return total;
    }
  }]);
}(_Price2.default);
},{"./Price.js":"src/module/Product/price/Price.js"}],"src/module/Product/price/PriceEmployee.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Price2 = _interopRequireDefault(require("./Price.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var PriceEmployee = exports.default = /*#__PURE__*/function (_Price) {
  function PriceEmployee(productKey, formData, priceData) {
    var _this;
    _classCallCheck(this, PriceEmployee);
    _this = _callSuper(this, PriceEmployee, [formData, priceData]);
    _this.productKey = productKey;
    return _this;
  }
  _inherits(PriceEmployee, _Price);
  return _createClass(PriceEmployee, [{
    key: "calculate",
    value: function calculate() {
      if (typeof this[this.productKey] === 'function') {
        return this[this.productKey]();
      } else {
        return this.Default();
      }
    }
  }, {
    key: "Default",
    value: function Default() {
      var total = 0;
      total += this.calcCanvasFramePrice();
      total += this.calcOptionsPrice();
      // Рассчет монтажа
      total += this.calcMontage(total);
      return total;
    }
  }, {
    key: "PlisseRussia",
    value: function PlisseRussia() {
      var total = 0,
        priceM2 = 0;
      priceM2 += this.getInputPrice('opening').price;
      priceM2 += this.getInputPrice('install').price;
      total = this.calcAreaPrice(priceM2, priceM2);
      return total;
      return total;
    }
  }, {
    key: "PlisseItalia",
    value: function PlisseItalia() {
      var total = 0,
        priceM2 = 0;
      priceM2 += this.getInputPrice('opening').price;
      total = this.calcAreaPrice(priceM2, priceM2);
      // Рассчет монтажа
      total += this.calcMontage(total);
      return total;
    }
  }, {
    key: "RazdvignayaProvedal",
    value: function RazdvignayaProvedal() {
      var total = 0;
      total += this.calcCanvasFramePrice();
      total += this.calcOptionsPrice();
      total += this.calcRailPrice();
      // Рассчет монтажа
      total += this.calcMontage(total);
      return total;
    }
  }, {
    key: "RulonnayaPolsha",
    value: function RulonnayaPolsha() {
      var total = 0;
      total += this.calcCanvasFramePrice();
      total += this.calcOptionsPrice();
      total += this.calcRailPriceSlidors();
      // Рассчет монтажа
      total += this.calcMontage(total);
      return total;
    }
  }, {
    key: "RulonnayaItalia",
    value: function RulonnayaItalia() {
      var total = 0;
      total += this.calcCanvasFramePrice();
      // Рассчет монтажа
      total += this.calcMontage(total);
      return total;
    }
  }]);
}(_Price2.default);
},{"./Price.js":"src/module/Product/price/Price.js"}],"src/module/Product/ProductPrice.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _price = _interopRequireDefault(require("../../data/price.js"));
var _PriceDealer = _interopRequireDefault(require("./price/PriceDealer.js"));
var _PriceEmployee = _interopRequireDefault(require("./price/PriceEmployee.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ProductPrice = exports.default = /*#__PURE__*/function () {
  function ProductPrice(productKey, userRole, formData) {
    _classCallCheck(this, ProductPrice);
    if (!_price.default[userRole] || !_price.default[userRole][productKey]) {
      throw new Error("ProductPrice[constructor] Invalid PriceData ".concat(productKey));
    }
    var priceData = _price.default[userRole][productKey];
    if (userRole === 'employee') {
      this.priceStrategy = new _PriceEmployee.default(productKey, formData, priceData);
    } else if (userRole === 'dealer') {
      this.priceStrategy = new _PriceDealer.default(productKey, formData, priceData);
    } else {
      throw new Error("Unknown user: ".concat(userRole));
    }
  }
  return _createClass(ProductPrice, [{
    key: "calculate",
    value: function calculate() {
      return this.priceStrategy.calculate();
    }
  }]);
}();
},{"../../data/price.js":"src/data/price.js","./price/PriceDealer.js":"src/module/Product/price/PriceDealer.js","./price/PriceEmployee.js":"src/module/Product/price/PriceEmployee.js"}],"src/data/sawing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  Ramochnaya25: [{
    key: 'width',
    value: 60
  }, {
    key: 'height',
    value: 60
  }, {
    key: 'impost',
    value: 48
  }],
  VstavnayaVSN: [{
    key: 'width',
    value: 60
  }, {
    key: 'height',
    value: 60
  }, {
    key: 'impost',
    value: 48
  }],
  Ramochnaya32: [{
    key: 'width',
    value: 74
  }, {
    key: 'height',
    value: 74
  }, {
    key: 'impost',
    value: 62
  }],
  RamochnayaAlumSN: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 52
  }],
  RamochnayaUSN: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 50
  }],
  VstavnayaSKF: [{
    key: 'width',
    value: 40
  }, {
    key: 'height',
    value: 40
  }, {
    key: 'impost',
    value: 36
  }],
  Krilo: [{
    key: 'width',
    value: 46
  }, {
    key: 'height',
    value: 46
  }, {
    key: 'impost',
    value: 39
  }],
  RazdvignayaProvedal: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 58
  }],
  Dvernaya25: [{
    key: 'width',
    value: 60
  }, {
    key: 'height',
    value: 60
  }, {
    key: 'impost',
    value: 48
  }],
  Dvernaya32: [{
    key: 'width',
    value: 74
  }, {
    key: 'height',
    value: 74
  }, {
    key: 'impost',
    value: 62
  }],
  Dvernaya42: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 86
  }],
  Dvernaya52: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 104
  }],
  RulonnayaPolsha: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 0
  }],
  RulonnayaItalia: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 0
  }],
  PlisseRussia: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 0
  }],
  PlisseItalia: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 0
  }],
  Arochnaya: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 0
  }],
  TrapeciyaStandart: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 0
  }],
  TrapeciyaUsilennaya32: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 0
  }],
  Perekatka: [{
    key: 'width',
    value: 0
  }, {
    key: 'height',
    value: 0
  }, {
    key: 'impost',
    value: 0
  }]
};
},{}],"src/module/Product/ProductSawing.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _sawing = _interopRequireDefault(require("../../data/sawing.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ProductSawing = exports.default = /*#__PURE__*/function () {
  function ProductSawing(productKey, formData) {
    _classCallCheck(this, ProductSawing);
    if (!_sawing.default[productKey]) {
      throw new Error("ProductSawing[constructor] Invalid SawingData ".concat(productKey));
    }
    this.formData = formData;
    this.sawingData = _sawing.default[productKey];
  }
  return _createClass(ProductSawing, [{
    key: "calculate",
    value: function calculate() {
      var _this$formData$get, _this$formData$get2;
      var width = (_this$formData$get = this.formData.get('width')) === null || _this$formData$get === void 0 ? void 0 : _this$formData$get.value;
      var height = (_this$formData$get2 = this.formData.get('height')) === null || _this$formData$get2 === void 0 ? void 0 : _this$formData$get2.value;
      var result = {
        width: width ? width - this.getSawingValueByKey('width') : 0,
        height: height ? height - this.getSawingValueByKey('height') : 0,
        impost: width ? width - this.getSawingValueByKey('impost') : 0
      };
      return result;
    }
  }, {
    key: "getSawingValueByKey",
    value: function getSawingValueByKey(key) {
      var sawingItem = this.sawingData.find(function (item) {
        return item.key === key;
      });
      return sawingItem ? sawingItem.value : 0;
    }
  }]);
}();
},{"../../data/sawing.js":"src/data/sawing.js"}],"src/data/kpi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  // Монтажник
  installer: {
    Ramochnaya25: [{
      key: 'easy',
      fix: 200,
      percent: 10
    }, {
      key: 'hard',
      fix: 250,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    Ramochnaya32: [{
      key: 'easy',
      fix: 200,
      percent: 10
    }, {
      key: 'hard',
      fix: 250,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    RamochnayaAlumSN: [{
      key: 'easy',
      fix: 0,
      percent: 12
    }, {
      key: 'hard',
      fix: 0,
      percent: 12
    }, {
      key: 'off',
      fix: 0,
      percent: 12
    }],
    RamochnayaUSN: [{
      key: 'easy',
      fix: 0,
      percent: 12
    }, {
      key: 'hard',
      fix: 0,
      percent: 12
    }, {
      key: 'off',
      fix: 0,
      percent: 12
    }],
    VstavnayaVSN: [{
      key: 'easy',
      fix: 0,
      percent: 14
    }, {
      key: 'hard',
      fix: 0,
      percent: 14
    }],
    VstavnayaSKF: [{
      key: 'easy',
      fix: 0,
      percent: 14
    }, {
      key: 'hard',
      fix: 0,
      percent: 14
    }],
    Krilo: [{
      key: 'easy',
      fix: 0,
      percent: 15
    }, {
      key: 'hard',
      fix: 0,
      percent: 15
    }],
    RazdvignayaProvedal: [{
      key: 'easy',
      fix: 400,
      percent: 10
    }, {
      key: 'hard',
      fix: 500,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    Dvernaya25: [{
      key: 'easy',
      fix: 400,
      percent: 10
    }, {
      key: 'hard',
      fix: 500,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    Dvernaya32: [{
      key: 'easy',
      fix: 400,
      percent: 10
    }, {
      key: 'hard',
      fix: 500,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    Dvernaya42: [{
      key: 'easy',
      fix: 400,
      percent: 10
    }, {
      key: 'hard',
      fix: 500,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    Dvernaya52: [{
      key: 'easy',
      fix: 400,
      percent: 10
    }, {
      key: 'hard',
      fix: 500,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    RulonnayaPolsha: [{
      key: 'easy',
      fix: 0,
      percent: 15
    }, {
      key: 'hard',
      fix: 0,
      percent: 18
    }, {
      key: 'off',
      fix: 0,
      percent: 5
    }],
    RulonnayaItalia: [{
      key: 'easy',
      fix: 0,
      percent: 15
    }, {
      key: 'hard',
      fix: 0,
      percent: 18
    }, {
      key: 'off',
      fix: 0,
      percent: 5
    }],
    PlisseRussia: [{
      key: 'easy',
      fix: 0,
      percent: 10
    }, {
      key: 'hard',
      fix: 0,
      percent: 13
    }, {
      key: 'off',
      fix: 0,
      percent: 5
    }],
    PlisseItalia: [{
      key: 'easy',
      fix: 0,
      percent: 10
    }, {
      key: 'hard',
      fix: 0,
      percent: 13
    }, {
      key: 'off',
      fix: 0,
      percent: 5
    }],
    Arochnaya: [{
      key: 'easy',
      fix: 400,
      percent: 10
    }, {
      key: 'hard',
      fix: 500,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    TrapeciyaStandart: [{
      key: 'easy',
      fix: 400,
      percent: 10
    }, {
      key: 'hard',
      fix: 500,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    TrapeciyaUsilennaya32: [{
      key: 'easy',
      fix: 400,
      percent: 10
    }, {
      key: 'hard',
      fix: 500,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }],
    Perekatka: [{
      key: 'easy',
      fix: 250,
      percent: 10
    }, {
      key: 'hard',
      fix: 350,
      percent: 10
    }, {
      key: 'off',
      fix: 0,
      percent: 10
    }]
  },
  // Сборщик
  assembler: {
    Ramochnaya25: {
      canvas: [{
        key: 'fiberglass',
        price: 60
      }, {
        key: 'petscreen',
        price: 150
      }, {
        key: 'micromesh',
        price: 60
      }, {
        key: 'maxivision',
        price: 60
      }, {
        key: 'polltex',
        price: 160
      }, {
        key: 'sunlight',
        price: 60
      }, {
        key: 'antibird',
        price: 160
      }, {
        key: 'diamondsteel',
        price: 200
      }],
      corners: [{
        key: 'metallicheskie',
        price: 10
      }],
      handles: [{
        key: 'metallicheskie',
        price: 20
      }],
      fastings: [{
        key: 'vnutrennie-zacepi',
        price: 100
      }, {
        key: 'plungery',
        price: 130
      }]
    },
    VstavnayaVSN: {
      canvas: [{
        key: 'fiberglass',
        price: 90
      }, {
        key: 'petscreen',
        price: 200
      }, {
        key: 'micromesh',
        price: 90
      }, {
        key: 'maxivision',
        price: 90
      }, {
        key: 'polltex',
        price: 190
      }, {
        key: 'sunlight',
        price: 90
      }, {
        key: 'antibird',
        price: 190
      }, {
        key: 'diamondsteel',
        price: 230
      }]
    },
    Ramochnaya32: {
      canvas: [{
        key: 'fiberglass',
        price: 100
      }, {
        key: 'petscreen',
        price: 190
      }, {
        key: 'micromesh',
        price: 100
      }, {
        key: 'maxivision',
        price: 100
      }, {
        key: 'polltex',
        price: 200
      }, {
        key: 'sunlight',
        price: 100
      }, {
        key: 'antibird',
        price: 200
      }, {
        key: 'diamondsteel',
        price: 240
      }],
      corners: [{
        key: 'metallicheskie',
        price: 10
      }],
      handles: [{
        key: 'metallicheskie',
        price: 20
      }],
      fastings: [{
        key: 'vnutrennie-zacepi',
        price: 100
      }, {
        key: 'plungery',
        price: 130
      }]
    },
    RamochnayaAlumSN: {
      canvas: [{
        key: 'fiberglass',
        price: 200
      }, {
        key: 'petscreen',
        price: 290
      }, {
        key: 'micromesh',
        price: 200
      }, {
        key: 'maxivision',
        price: 200
      }, {
        key: 'polltex',
        price: 300
      }, {
        key: 'sunlight',
        price: 200
      }, {
        key: 'antibird',
        price: 300
      }, {
        key: 'diamondsteel',
        price: 340
      }]
    },
    RamochnayaUSN: {
      canvas: [{
        key: 'fiberglass',
        price: 200
      }, {
        key: 'petscreen',
        price: 290
      }, {
        key: 'micromesh',
        price: 200
      }, {
        key: 'maxivision',
        price: 200
      }, {
        key: 'polltex',
        price: 300
      }, {
        key: 'sunlight',
        price: 200
      }, {
        key: 'antibird',
        price: 300
      }, {
        key: 'diamondsteel',
        price: 340
      }]
    },
    VstavnayaSKF: {
      canvas: [{
        key: 'fiberglass',
        price: 90
      }, {
        key: 'petscreen',
        price: 200
      }, {
        key: 'micromesh',
        price: 90
      }, {
        key: 'maxivision',
        price: 90
      }, {
        key: 'polltex',
        price: 190
      }, {
        key: 'sunlight',
        price: 90
      }, {
        key: 'antibird',
        price: 190
      }, {
        key: 'diamondsteel',
        price: 230
      }]
    },
    Krilo: {
      canvas: [{
        key: 'fiberglass',
        price: 100
      }, {
        key: 'petscreen',
        price: 190
      }, {
        key: 'micromesh',
        price: 100
      }, {
        key: 'maxivision',
        price: 100
      }, {
        key: 'polltex',
        price: 200
      }, {
        key: 'sunlight',
        price: 100
      }, {
        key: 'antibird',
        price: 200
      }, {
        key: 'diamondsteel',
        price: 240
      }]
    },
    RazdvignayaProvedal: {
      canvas: [{
        key: 'fiberglass',
        price: 160
      }, {
        key: 'petscreen',
        price: 250
      }, {
        key: 'micromesh',
        price: 160
      }, {
        key: 'maxivision',
        price: 160
      }, {
        key: 'polltex',
        price: 260
      }, {
        key: 'sunlight',
        price: 160
      }, {
        key: 'antibird',
        price: 260
      }, {
        key: 'diamondsteel',
        price: 300
      }]
    },
    Dvernaya25: {
      canvas: [{
        key: 'fiberglass',
        price: 160
      }, {
        key: 'petscreen',
        price: 250
      }, {
        key: 'micromesh',
        price: 160
      }, {
        key: 'maxivision',
        price: 160
      }, {
        key: 'polltex',
        price: 260
      }, {
        key: 'sunlight',
        price: 160
      }, {
        key: 'antibird',
        price: 260
      }, {
        key: 'diamondsteel',
        price: 300
      }]
    },
    Dvernaya32: {
      canvas: [{
        key: 'fiberglass',
        price: 200
      }, {
        key: 'petscreen',
        price: 280
      }, {
        key: 'micromesh',
        price: 200
      }, {
        key: 'maxivision',
        price: 200
      }, {
        key: 'polltex',
        price: 290
      }, {
        key: 'sunlight',
        price: 200
      }, {
        key: 'antibird',
        price: 290
      }, {
        key: 'diamondsteel',
        price: 330
      }]
    },
    Dvernaya42: {
      canvas: [{
        key: 'fiberglass',
        price: 200
      }, {
        key: 'petscreen',
        price: 280
      }, {
        key: 'micromesh',
        price: 200
      }, {
        key: 'maxivision',
        price: 200
      }, {
        key: 'polltex',
        price: 290
      }, {
        key: 'sunlight',
        price: 200
      }, {
        key: 'antibird',
        price: 290
      }, {
        key: 'diamondsteel',
        price: 330
      }]
    },
    Dvernaya52: {
      canvas: [{
        key: 'fiberglass',
        price: 200
      }, {
        key: 'petscreen',
        price: 280
      }, {
        key: 'micromesh',
        price: 200
      }, {
        key: 'maxivision',
        price: 200
      }, {
        key: 'polltex',
        price: 290
      }, {
        key: 'sunlight',
        price: 200
      }, {
        key: 'antibird',
        price: 290
      }, {
        key: 'diamondsteel',
        price: 330
      }]
    },
    RulonnayaPolsha: {
      canvas: [{
        key: 'all',
        price: 350
      }]
    },
    RulonnayaItalia: {
      canvas: [{
        key: 'all',
        price: 500
      }]
    },
    PlisseRussia: {
      opening: [{
        key: 'odnostoronee',
        price: 450
      }, {
        key: 'vstrechnoe',
        price: 550
      }, {
        key: 'reversivnoe',
        price: 550
      }, {
        key: 'verticalnoe',
        price: 450
      }]
    },
    PlisseItalia: {
      opening: [{
        key: 'odnostoronee',
        price: 550,
        install: 600
      }, {
        key: 'vstrechnoe',
        price: 650,
        install: 700
      }, {
        key: 'reversivnoe',
        price: 650,
        install: 700
      }, {
        key: 'verticalnoe',
        price: 550,
        install: 600
      }],
      install: [{
        key: 'nakladka7mm',
        price: 600
      }, {
        key: 'nakladka30mm-sborka',
        price: 800
      }, {
        key: 'nakladka30mm',
        price: 800
      }]
    },
    Arochnaya: {
      canvas: [{
        key: 'fiberglass',
        price: 1000
      }, {
        key: 'petscreen',
        price: 1100
      }, {
        key: 'micromesh',
        price: 1000
      }, {
        key: 'maxivision',
        price: 1000
      }, {
        key: 'polltex',
        price: 1110
      }, {
        key: 'sunlight',
        price: 1000
      }, {
        key: 'antibird',
        price: 1110
      }, {
        key: 'diamondsteel',
        price: 1150
      }],
      corners: [{
        key: 'metallicheskie',
        price: 10
      }],
      handles: [{
        key: 'metallicheskie',
        price: 20
      }]
    },
    TrapeciyaStandart: {
      canvas: [{
        key: 'fiberglass',
        price: 500
      }, {
        key: 'petscreen',
        price: 600
      }, {
        key: 'micromesh',
        price: 500
      }, {
        key: 'maxivision',
        price: 500
      }, {
        key: 'polltex',
        price: 610
      }, {
        key: 'sunlight',
        price: 500
      }, {
        key: 'antibird',
        price: 610
      }, {
        key: 'diamondsteel',
        price: 650
      }],
      corners: [{
        key: 'metallicheskie',
        price: 10
      }],
      handles: [{
        key: 'metallicheskie',
        price: 20
      }]
    },
    TrapeciyaUsilennaya32: {
      canvas: [{
        key: 'fiberglass',
        price: 600
      }, {
        key: 'petscreen',
        price: 700
      }, {
        key: 'micromesh',
        price: 600
      }, {
        key: 'maxivision',
        price: 600
      }, {
        key: 'polltex',
        price: 710
      }, {
        key: 'sunlight',
        price: 600
      }, {
        key: 'antibird',
        price: 710
      }, {
        key: 'diamondsteel',
        price: 750
      }]
    },
    Perekatka: {
      canvas: [{
        key: 'fiberglass',
        price: 60
      }, {
        key: 'petscreen',
        price: 150
      }, {
        key: 'micromesh',
        price: 60
      }, {
        key: 'maxivision',
        price: 60
      }, {
        key: 'polltex',
        price: 160
      }, {
        key: 'sunlight',
        price: 60
      }, {
        key: 'antibird',
        price: 160
      }, {
        key: 'diamondsteel',
        price: 200
      }],
      remake: [{
        key: 'z-krepleniya',
        price: 0
      }, {
        key: 'vnutrennie-zacepi',
        price: 100
      }, {
        key: 'plungery',
        price: 130
      }, {
        key: 'ugly-metallicheskie',
        price: 30
      }, {
        key: 'ugly-plastikovie',
        price: 20
      }, {
        key: 'ruchki-metallicheskie',
        price: 20
      }, {
        key: 'petli-metallicheskie',
        price: 30
      }, {
        key: 'petli-s-dovodchikom',
        price: 40
      }]
    }
  }
};
},{}],"src/module/Product/kpi/KPIInstaller.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _kpi = _interopRequireDefault(require("../../../data/kpi.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var KPIInstaller = exports.default = /*#__PURE__*/function () {
  function KPIInstaller(productKey, formData) {
    var productPrice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    _classCallCheck(this, KPIInstaller);
    this.productKey = productKey;
    this.productPrice = productPrice;
    this.formData = formData;
    if (!_kpi.default.installer || !_kpi.default.installer[this.productKey]) {
      throw new Error("KPIInstaller[constructor] Invalid KPIData ".concat(productKey));
    }
    this.kpiData = _kpi.default.installer[this.productKey];
  }

  // КПИ сетки считается в любом случае вне зависимости есть монтаж или нет
  return _createClass(KPIInstaller, [{
    key: "calculate",
    value: function calculate() {
      var KPI = 0;
      if (typeof this[this.productKey] === 'function') {
        KPI = this[this.productKey]();
      } else {
        KPI = this.Default();
      }
      return KPI;
    }
  }, {
    key: "Default",
    value: function Default() {
      var _this$formData$get;
      var kpi = 0;
      var montageKey = (_this$formData$get = this.formData.get('montage')) === null || _this$formData$get === void 0 ? void 0 : _this$formData$get.value; // montageKey = (off || easy || hard)
      var kpiData = this.kpiData.find(function (item) {
        return item.key === montageKey;
      });
      if (kpiData) {
        kpi += kpiData.fix;
        kpi += Math.round(this.productPrice * kpiData.percent / 100);
      }
      return kpi;
    }
  }, {
    key: "Ramochnaya25",
    value: function Ramochnaya25() {
      var kpi = 0;
      kpi += this.Default();
      if (kpi === 0) kpi += Math.round(this.productPrice * 15 / 100);
      return kpi;
    }
  }, {
    key: "VstavnayaVSN",
    value: function VstavnayaVSN() {
      var kpi = 0;
      var kpiData = this.kpiData.find(function (item) {
        return item.key === 'easy';
      });
      if (kpiData) kpi += Math.round(this.productPrice * kpiData.percent / 100);
      return kpi;
    }
  }, {
    key: "RamochnayaAlumSN",
    value: function RamochnayaAlumSN() {
      var kpi = 0;
      var kpiData = this.kpiData.find(function (item) {
        return item.key === 'easy';
      });
      if (kpiData) kpi += Math.round(this.productPrice * kpiData.percent / 100);
      return kpi;
    }
  }, {
    key: "RamochnayaUSN",
    value: function RamochnayaUSN() {
      var kpi = 0;
      var kpiData = this.kpiData.find(function (item) {
        return item.key === 'easy';
      });
      if (kpiData) kpi += Math.round(this.productPrice * kpiData.percent / 100);
      return kpi;
    }
  }, {
    key: "Krilo",
    value: function Krilo() {
      var kpi = 0;
      var kpiData = this.kpiData.find(function (item) {
        return item.key === 'easy';
      });
      if (kpiData) kpi += Math.round(this.productPrice * kpiData.percent / 100);
      return kpi;
    }
  }]);
}();
},{"../../../data/kpi.js":"src/data/kpi.js"}],"src/module/Product/kpi/KPIAssembler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _kpi = _interopRequireDefault(require("../../../data/kpi.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var KPIAssembler = exports.default = /*#__PURE__*/function () {
  function KPIAssembler(productKey, formData) {
    _classCallCheck(this, KPIAssembler);
    this.productKey = productKey;
    this.formData = formData;
    if (!_kpi.default.assembler || !_kpi.default.assembler[this.productKey]) {
      throw new Error("KPIAssembler[constructor] Invalid KPIData ".concat(productKey));
    }
    this.kpiData = _kpi.default.assembler[this.productKey];
  }
  return _createClass(KPIAssembler, [{
    key: "calculate",
    value: function calculate() {
      if (typeof this[this.productKey] === 'function') {
        return this[this.productKey]();
      } else {
        return this.Default();
      }
    }
  }, {
    key: "Default",
    value: function Default() {
      var kpi = 0;
      kpi += this.canvasKPI();
      kpi += this.optionsKPI();
      return kpi;
    }
  }, {
    key: "RulonnayaPolsha",
    value: function RulonnayaPolsha() {
      var kpi = 0;
      var canvas = this.findItem('canvas', 'all');
      if (!canvas || !canvas.price) return 0;
      var areaKPI = this.calcAreaPrice(canvas.price);
      kpi += areaKPI <= canvas.price ? canvas.price : areaKPI;
      return kpi;
    }
  }, {
    key: "RulonnayaItalia",
    value: function RulonnayaItalia() {
      var kpi = 0;
      var canvas = this.findItem('canvas', 'all');
      if (!canvas || !canvas.price) return 0;
      var areaKPI = this.calcAreaPrice(canvas.price);
      kpi += areaKPI <= canvas.price ? canvas.price : areaKPI;
      return kpi;
    }
  }, {
    key: "PlisseRussia",
    value: function PlisseRussia() {
      var kpi = 0,
        priceM2 = 0;
      priceM2 += this.getInputKPI('opening').price;
      var areaKPI = this.calcAreaPrice(priceM2);
      kpi += areaKPI <= priceM2 ? priceM2 : areaKPI;
      return kpi;
    }
  }, {
    key: "PlisseItaly",
    value: function PlisseItaly() {
      var _this$formData$get;
      var kpi = 0,
        priceM2 = 0;
      var installValue = (_this$formData$get = this.formData.get('install')) === null || _this$formData$get === void 0 ? void 0 : _this$formData$get.value;
      var openingKPI = this.getInputKPI('opening');
      if (installValue) {
        switch (installValue) {
          case 'proem7mm':
            priceM2 += openingKPI === null || openingKPI === void 0 ? void 0 : openingKPI.price;
            break;
          default:
            priceM2 += openingKPI === null || openingKPI === void 0 ? void 0 : openingKPI.install;
            break;
        }
      }
      var areaKPI = this.calcAreaPrice(priceM2);
      kpi += areaKPI <= priceM2 ? priceM2 : areaKPI;
      return kpi;
    }

    /**
     * Методы рассчета KPI
     */
    // Рассчет kpi по полотну (за общую площадь полотна сетки)
    // Минимальный kpi равен цене за кв.м.
  }, {
    key: "canvasKPI",
    value: function canvasKPI() {
      var kpi = 0,
        priceM2 = 0;
      priceM2 += this.getInputKPI('canvas').price;
      kpi += this.calcAreaPrice(priceM2);
      return kpi <= priceM2 ? priceM2 : kpi;
    }

    // Рассчет kpi для стандартных опций большинства сеток
  }, {
    key: "optionsKPI",
    value: function optionsKPI() {
      var kpi = 0;
      var _iterator = _createForOfIteratorHelper(this.formData.values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          switch (input.key) {
            case 'corners':
            case 'handles':
            case 'fastings':
            case 'hinges':
              kpi += this.getInputKPI(input.key).price;
              break;
            case 'remake':
              kpi += this.getInputKPI('remake').reduce(function (sum, item) {
                return sum + item.price;
              }, 0);
              break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return kpi;
    }

    // Получение цены по имени поля формы ( в том числе из массивов типа checkbox )
  }, {
    key: "getInputKPI",
    value: function getInputKPI(inputKey) {
      var _this = this;
      var inputData = this.formData.get(inputKey);
      if (!inputData || !inputData.value) return {
        price: 0
      };
      if (Array.isArray(inputData.value)) {
        return inputData.value.map(function (item) {
          return _objectSpread(_objectSpread({}, {
            price: 0
          }), _this.findItem(inputKey, item.value));
        });
      }
      return _objectSpread(_objectSpread({}, {
        price: 0
      }), this.findItem(inputKey, inputData.value));
    }

    // Поиск по ключу в массиве данных KPI (kpiData[key] = arrayOf {key, price})
  }, {
    key: "findItem",
    value: function findItem(key, value) {
      var _this$kpiData$key;
      return (_this$kpiData$key = this.kpiData[key]) === null || _this$kpiData$key === void 0 ? void 0 : _this$kpiData$key.find(function (item) {
        return item.key === value;
      });
    }

    // Рассчет площади сетки с переводом мм. в кв.м.
  }, {
    key: "calcArea",
    value: function calcArea() {
      var _this$formData$get2, _this$formData$get3;
      var areaM2 = 0;
      var w = (_this$formData$get2 = this.formData.get('width')) === null || _this$formData$get2 === void 0 ? void 0 : _this$formData$get2.value;
      var h = (_this$formData$get3 = this.formData.get('height')) === null || _this$formData$get3 === void 0 ? void 0 : _this$formData$get3.value;
      if (w && h) areaM2 = parseFloat((w / 1000 * (h / 1000)).toFixed(6));
      return areaM2;
    }

    // Рассчет kpi с учетом площади (priceM2 - цена за кв.м).
  }, {
    key: "calcAreaPrice",
    value: function calcAreaPrice(priceM2) {
      return (priceM2 || 0) * this.calcArea();
    }
  }]);
}();
},{"../../../data/kpi.js":"src/data/kpi.js"}],"src/dto/DTOProduct.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var DTOProduct = exports.default = /*#__PURE__*/_createClass(function DTOProduct() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _classCallCheck(this, DTOProduct);
  this.id = data.id || new Date().getTime();
  this.name = data.name || '';
  this.quantity = data.quantity || 1;
  this.price = data.price || 0;
  this.montage = data.montage || false;
  this.ral = data.ral || false;
  this.kpi = Object.assign({
    installer: 0,
    assembler: 0
  }, data.kpi);
  this.sawing = Object.assign({
    width: 0,
    height: 0,
    impost: 0
  }, data.sawing);
});
},{}],"src/module/Cart/Cart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Cart = exports.default = /*#__PURE__*/function () {
  function Cart(key) {
    _classCallCheck(this, Cart);
    this.key = 'cart.' + key;
    if (localStorage.getItem(this.key) === null) localStorage.setItem(this.key, '[]');
  }
  return _createClass(Cart, [{
    key: "getItems",
    value: function getItems() {
      return JSON.parse(localStorage.getItem(this.key));
    }
  }, {
    key: "getItem",
    value: function getItem(id) {
      return this.getItems().find(function (item) {
        var _item$id;
        return ((_item$id = item.id) === null || _item$id === void 0 ? void 0 : _item$id.toString()) === id.toString();
      });
    }
  }, {
    key: "addItem",
    value: function addItem(item) {
      var items = this.getItems();
      items.push(item);
      localStorage.setItem(this.key, JSON.stringify(items));
      return this;
    }
  }, {
    key: "setItems",
    value: function setItems(items) {
      localStorage.setItem(this.key, JSON.stringify(items));
      return this;
    }
  }, {
    key: "setItem",
    value: function setItem(id, item) {
      var items = this.getItems();
      var index = items.findIndex(function (item) {
        return item.id === id;
      });
      if (index !== -1) {
        items[index] = item;
        this.setItems(items);
      }
      return this;
    }
  }, {
    key: "updateItem",
    value: function updateItem(id, name, value) {
      var items = this.getItems();
      var index = items.findIndex(function (item) {
        return item.id === id;
      });
      if (index !== -1) {
        items[index][name] = value;
        this.setItems(items);
      }
      return this;
    }
  }, {
    key: "removeItem",
    value: function removeItem(id) {
      var items = this.getItems();
      if (id !== undefined && items.length > 0) {
        for (var i = 0; i < items.length; i++) {
          var itemID = items[i].id;
          if (itemID !== undefined && itemID.toString() === id.toString()) {
            items.splice(i, 1);
          }
        }
        this.setItems(items);
      }
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      this.setItems([]);
      return this;
    }
  }, {
    key: "itemsCount",
    value: function itemsCount() {
      return this.getItems().length;
    }
  }]);
}();
},{}],"src/module/Cart/CartExtras.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Cart2 = _interopRequireDefault(require("./Cart.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var CartExtras = /*#__PURE__*/function (_Cart) {
  function CartExtras() {
    _classCallCheck(this, CartExtras);
    return _callSuper(this, CartExtras, ['extras']);
  }
  _inherits(CartExtras, _Cart);
  return _createClass(CartExtras, [{
    key: "totalPrice",
    value: function totalPrice() {
      return this.getItems().reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);
    }
  }, {
    key: "totalQuantity",
    value: function totalQuantity() {
      return this.getItems().reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    }
  }]);
}(_Cart2.default);
var _default = exports.default = CartExtras;
},{"./Cart.js":"src/module/Cart/Cart.js"}],"src/module/Cart/CartProducts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Cart2 = _interopRequireDefault(require("./Cart.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var CartProducts = /*#__PURE__*/function (_Cart) {
  function CartProducts() {
    _classCallCheck(this, CartProducts);
    return _callSuper(this, CartProducts, ['products']);
  }
  _inherits(CartProducts, _Cart);
  return _createClass(CartProducts, [{
    key: "totalPrice",
    value: function totalPrice() {
      return this.getItems().reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);
    }
  }, {
    key: "totalQuantity",
    value: function totalQuantity() {
      return this.getItems().reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);
    }
  }, {
    key: "totalKPIInstaller",
    value: function totalKPIInstaller() {
      return this.getItems().reduce(function (acc, item) {
        return acc + item.kpi.installer * item.quantity;
      }, 0);
    }
  }, {
    key: "totalKPIAssembler",
    value: function totalKPIAssembler() {
      return this.getItems().reduce(function (acc, item) {
        return acc + item.kpi.assembler * item.quantity;
      }, 0);
    }
  }]);
}(_Cart2.default);
var _default = exports.default = CartProducts;
},{"./Cart.js":"src/module/Cart/Cart.js"}],"src/data/order.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  // Диллер
  dealer: {
    ral: {
      price: 300,
      min: 6000
    }
  },
  // Монтажник
  employee: {
    ral: {
      price: 400,
      min: 8000
    }
  }
};
},{}],"src/module/Order/Order.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _CartExtras = _interopRequireDefault(require("../Cart/CartExtras.js"));
var _CartProducts = _interopRequireDefault(require("../Cart/CartProducts.js"));
var _order = _interopRequireDefault(require("../../data/order.js"));
var _User = _interopRequireDefault(require("../../user/User.js"));
var _price = _interopRequireDefault(require("../../data/price.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _userRole = /*#__PURE__*/new WeakMap();
var _priceData = /*#__PURE__*/new WeakMap();
var _cartProducts = /*#__PURE__*/new WeakMap();
var _cartExtras = /*#__PURE__*/new WeakMap();
var _observers = /*#__PURE__*/new WeakMap();
var Order = /*#__PURE__*/function () {
  function Order(user) {
    _classCallCheck(this, Order);
    _classPrivateFieldInitSpec(this, _userRole, null);
    _classPrivateFieldInitSpec(this, _priceData, Object.create(null));
    _classPrivateFieldInitSpec(this, _cartProducts, new _CartProducts.default());
    _classPrivateFieldInitSpec(this, _cartExtras, new _CartExtras.default());
    _classPrivateFieldInitSpec(this, _observers, new Set());
    if (!user.getRole()) throw Error("Order[constructor] User.getRole error");
    _classPrivateFieldSet(_userRole, this, user.getRole());
    if (!_price.default[_classPrivateFieldGet(_userRole, this)]) throw Error("Order[PriceData] get userdata error ".concat(_classPrivateFieldGet(_userRole, this)));
    _classPrivateFieldSet(_priceData, this, _price.default[_classPrivateFieldGet(_userRole, this)]);
    this.setDefaults();
  }

  /**
   * Москитные сетки
   */
  return _createClass(Order, [{
    key: "addProduct",
    value: function addProduct(item) {
      _classPrivateFieldGet(_cartProducts, this).addItem(item);
      return this.update();
    }
  }, {
    key: "setProduct",
    value: function setProduct(id, item) {
      _classPrivateFieldGet(_cartProducts, this).setItem(id, item);
      return this.update();
    }
  }, {
    key: "deleteProduct",
    value: function deleteProduct(id) {
      _classPrivateFieldGet(_cartProducts, this).removeItem(id);
      return this.update();
    }
  }, {
    key: "getProducts",
    value: function getProducts() {
      return _classPrivateFieldGet(_cartProducts, this).getItems();
    }

    /**
     * Комплектующие
     */
  }, {
    key: "setExtrasItem",
    value: function setExtrasItem(id, item) {
      _classPrivateFieldGet(_cartExtras, this).setItem(id, item);
      return this.update();
    }
  }, {
    key: "addOrUpdateExtras",
    value: function addOrUpdateExtras(item) {
      if (_classPrivateFieldGet(_cartExtras, this).getItem(item.id)) {
        _classPrivateFieldGet(_cartExtras, this).updateItem(item.id, 'quantity', item.quantity);
      } else {
        _classPrivateFieldGet(_cartExtras, this).addItem(item);
      }
      return this.update();
    }
  }, {
    key: "deleteExtras",
    value: function deleteExtras(id) {
      _classPrivateFieldGet(_cartExtras, this).removeItem(id);
      return this.update();
    }
  }, {
    key: "getExtrasItem",
    value: function getExtrasItem(id) {
      return _classPrivateFieldGet(_cartExtras, this).getItem(id);
    }
  }, {
    key: "getExtras",
    value: function getExtras() {
      return _classPrivateFieldGet(_cartExtras, this).getItems();
    }

    /**
     * Данные из формы заказа
     */
  }, {
    key: "setDiscount",
    value: function setDiscount(percent) {
      if (percent !== undefined) this.discount = Number(percent) || 0;
      return this.update();
    }
  }, {
    key: "setBeznal",
    value: function setBeznal(percent) {
      if (percent !== undefined) this.beznal = Number(percent) || 0;
      return this.update();
    }
  }, {
    key: "setCdek",
    value: function setCdek(amount) {
      if (amount !== undefined) this.cdek = Number(amount) || 0; // Преобразуем amount в число или 0, если NaN
      return this.update(); // Обновляем состояние заказа
    }
  }, {
    key: "setNdc",
    value: function setNdc(percent) {
      if (percent !== undefined) this.ndc = Number(percent) || 0;
      return this.update();
    }
  }, {
    key: "setDeliveryDistance",
    value: function setDeliveryDistance(distance) {
      this.deliveryDistance = distance;
      return this.update();
    }
  }, {
    key: "setDeliveryCdek",
    value: function setDeliveryCdek(dostavkacdek) {
      this.deliveryCdek = dostavkacdek;
      return this.update();
    }
  }, {
    key: "setDeliveryCustom",
    value: function setDeliveryCustom(distancecustom) {
      this.deliveryCustom = distancecustom;
      return this.update();
    }
  }, {
    key: "setPickup",
    value: function setPickup(pickup) {
      this.pickup = pickup;
      return this.update();
    }

    /**
     * Рассчеты
     */
    // Рассчет суммы всех дополнительных комплектующих в заказе
  }, {
    key: "calcTotalPriceExtras",
    value: function calcTotalPriceExtras() {
      return _classPrivateFieldGet(_cartExtras, this).totalPrice();
    }

    // Рассчет суммы всех сеток в заказе
  }, {
    key: "calcTotalPriceProducts",
    value: function calcTotalPriceProducts() {
      return _classPrivateFieldGet(_cartProducts, this).totalPrice();
    }

    // Рассчет скидки
    // price - цена товара
  }, {
    key: "calcDiscount",
    value: function calcDiscount() {
      var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return Math.round(price - price * this.discount / 100);
    }
  }, {
    key: "calcBeznal",
    value: function calcBeznal() {
      var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return Math.round(price + price * this.beznal / 100);
    }
  }, {
    key: "calcNdc",
    value: function calcNdc() {
      var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return Math.round(price + price * this.ndc / 100);
    }
  }, {
    key: "calcCdek",
    value: function calcCdek() {
      var price = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return Math.round(price + this.cdek);
    }

    // Рассчет доставки 
    // min - минимальная цена доставки
    // mkad - цена доставки за 1 км за МКАД
  }, {
    key: "calcDelivery",
    value:
    // Рассчет суммарной цены на все товары с учетом скидки и доставки
    // Минимальная сумма заказа  5000 р
    function calcDelivery() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
      var mkad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;
      var delivery = 0;
      if (!this.pickup) delivery += min + mkad * this.deliveryDistance;
      return delivery;
    }
  }, {
    key: "calcRAL",
    value:
    // Рассчет покраски по RAL
    function calcRAL() {
      var total = 0;
      if (this.ral === true) {
        // Получаем данные для RAL из импортированных данных
        var ral = _price.default.employee.Ramochnaya25.frame_color.find(function (item) {
          return item.key === 'ral';
        });
        var ralMin = _price.default.employee.Ramochnaya25.frame_color.find(function (item) {
          return item.key === 'ral.min';
        });

        // Получаем количество товаров в корзине
        var quantity = _classPrivateFieldGet(_cartProducts, this).totalQuantity();

        // Рассчитываем стоимость в зависимости от количества товаров
        if (quantity <= 2) {
          total += ralMin.price; // Минимальная стоимость
        } else if (quantity > 2) {
          total += ralMin.price + ral.price * (quantity - 2); // Минимальная стоимость плюс стоимость за дополнительное количество
        }
      }
      return total;
    }
  }, {
    key: "calcSpecialDelivery",
    value: function calcSpecialDelivery() {
      var delivery_custom = 0;
      delivery_custom += this.deliveryCustom;
      return delivery_custom;
    }
  }, {
    key: "calcDeliveryCdek",
    value: function calcDeliveryCdek() {
      var delivery_cdek = 0;
      delivery_cdek += this.deliveryCdek;
      return delivery_cdek;
    }
  }, {
    key: "calcTotalPrice",
    value: function calcTotalPrice() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5000;
      // Рассчет по умолчанию
      var total = this.calcTotalPriceProducts() + this.calcTotalPriceExtras();
      // Рассчет с покраской по RAL
      total += this.calcRAL();
      // + Рассчет с доставкой (если нет самовывоза)
      total += this.calcDelivery();
      total += this.calcCdek();
      // + Рассчет с спецтранспортом
      var specialDeliveryCost = this.calcSpecialDelivery();
      total += specialDeliveryCost;
      var DeliveryCdelCost = this.calcDeliveryCdek();
      total += DeliveryCdelCost;

      // Рассчет со скидкой только на товары и комплектующие
      total = this.calcDiscount(total);
      total = this.calcBeznal(total);
      total = this.calcNdc(total);
      if (total < min && !this.pickup) {
        total = min;
        total += specialDeliveryCost;
        total += DeliveryCdelCost;
      }
      return +total.toFixed(2); // Округляем итоговую стоимость до двух знаков после запятой
    }

    // Рассчет суммарного KPI монтажника + КПИ доставки
    // min - минимальная оплата монтажнику, р.
  }, {
    key: "calcTotalKPIInstaller",
    value: function calcTotalKPIInstaller() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
      var total = 0,
        products = 0,
        extras = 0,
        delivery = 0;

      // Суммарное KPI у всех товаров
      products = _classPrivateFieldGet(_cartProducts, this).totalKPIInstaller();
      // KPI 30% от суммы комплектующих 
      extras = this.calcTotalPriceExtras() * 30 / 100;
      // KPI за доставку
      delivery = this.calcDelivery(400);
      var summary = products + extras + delivery;
      total += summary <= min ? min : summary;
      return total;
    }

    // Рассчет суммарного KPI сборщика
  }, {
    key: "calcTotalKPIAssembler",
    value: function calcTotalKPIAssembler() {
      return _classPrivateFieldGet(_cartProducts, this).totalKPIAssembler();
    }

    /**
     * Уведомление наблюдателей об изменениях в заказе
     */
  }, {
    key: "update",
    value: function update() {
      if (this.isEmpty()) {
        this.setDefaults();
      } else {
        this.montage = this.hasMontage();
        this.ral = this.hasRAL();
        if (this.montage) this.pickup = false;

        // Обновление массива товаров
        this.products = this.getProducts();

        // Обновление массива комплектующих
        this.extras = this.getExtras();

        // Сумма KPI монтажника не учитывается если есть самовывоз
        this.kpi.installer = !this.pickup ? this.calcTotalKPIInstaller() : 0;

        // Сумма KPI установщика
        this.kpi.assembler = this.calcTotalKPIAssembler();

        // Сумма заказа
        this.totalPrice = this.calcTotalPrice();
      }
      this.broadcast();
      return this;
    }

    /**
     * Дополнительные функции
     */
    // Сброс атрибутов к значениям по умолчанию
  }, {
    key: "setDefaults",
    value: function setDefaults() {
      this.deliveryDistance = 0; // Расстояние доставки (км)
      this.deliveryCustom = 0; // Доставка и спец.транспорт
      this.deliveryCdek = 0; // Тариф ТК СДЭК
      this.specificalMontage = 0; //Стоимость работ по специфическому монтажу
      this.discount = 0; // Скидка (%)
      this.beznal = 0; //Безнал
      this.ndc = 0; //Безнал
      this.cdek = 0; //Доставка до ТК СДЭК отгрузка
      this.pickup = _classPrivateFieldGet(_userRole, this) === 'dealer'; // Самовывоз (true/false) У диллеров самовывоз по умолчанию "Да" 
      this.montage = false; // Монтаж (true/false)
      this.ral = false; // RAL (true/false)
      this.products = []; // Массив продуктов
      this.extras = []; // Массив комплектующих
      this.kpi = {
        installer: 0,
        // Суммарное KPI Монтажника 
        assembler: 0 // Суммарное KPI Сборщика 
      };
    }

    // Проверка, пустой ли заказ
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      var items = [].concat(_toConsumableArray(_classPrivateFieldGet(_cartProducts, this).getItems()), _toConsumableArray(_classPrivateFieldGet(_cartExtras, this).getItems()));
      return !Boolean(items.length);
    }

    // Есть ли хоть одна сетка в заказе с монтажом (true/false)
  }, {
    key: "hasMontage",
    value: function hasMontage() {
      return this.getProducts().some(function (item) {
        return item.montage;
      });
    }

    // Есть ли хоть одна сетка в заказе с покраской по RAL (true/false)
  }, {
    key: "hasRAL",
    value: function hasRAL() {
      return this.getProducts().some(function (item) {
        return item.ral;
      });
    }

    // Есть ли самовывоз? (true/false)
  }, {
    key: "hasPickup",
    value: function hasPickup() {
      return this.pickup;
    }

    // Роль пользователя
  }, {
    key: "getUserRole",
    value: function getUserRole() {
      return _classPrivateFieldGet(_userRole, this);
    }

    // Полная очистка заказа
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldGet(_cartProducts, this).clear();
      _classPrivateFieldGet(_cartExtras, this).clear();
      return this.update();
    }

    /**
     * Регистрация наблюдателей (обсерверов)
     */
  }, {
    key: "broadcast",
    value: function broadcast() {
      var _iterator = _createForOfIteratorHelper(_classPrivateFieldGet(_observers, this)),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.update(this);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return this;
    }
  }, {
    key: "registerObserver",
    value: function registerObserver(observer) {
      _classPrivateFieldGet(_observers, this).add(observer);
      return this;
    }
  }, {
    key: "unregisterObserver",
    value: function unregisterObserver(observer) {
      if (_classPrivateFieldGet(_observers, this).has(observer)) _classPrivateFieldGet(_observers, this).delete(observer);
      return this;
    }
  }]);
}();
var _default = exports.default = new Order(_User.default);
},{"../Cart/CartExtras.js":"src/module/Cart/CartExtras.js","../Cart/CartProducts.js":"src/module/Cart/CartProducts.js","../../data/order.js":"src/data/order.js","../../user/User.js":"src/user/User.js","../../data/price.js":"src/data/price.js"}],"src/module/Product/products/Ramochnaya25.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../../user/User.js"));
var _ProductForm2 = _interopRequireDefault(require("../ProductForm.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Ramochnaya25 = exports.default = /*#__PURE__*/function (_ProductForm) {
  function Ramochnaya25() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Ramochnaya25);
    return _callSuper(this, Ramochnaya25, [config]);
  }

  /* Функции для изменения полей (зависимости/поведение/события и т.д) */
  // Крепления
  _inherits(Ramochnaya25, _ProductForm);
  return _createClass(Ramochnaya25, [{
    key: "fastings",
    value: function fastings(field) {
      var inputMontage = this.getInput('montage'); // Поле "монтаж"
      var inputHandles = this.getInput('handles'); // Поле "ручки"
      var inputKomplekt = this.getInput('komplekt'); // Поле "ручки"

      if (inputMontage && inputHandles && inputKomplekt) {
        field.on('change', function () {
          inputMontage.setDisabled(_User.default.getRole() === 'dealer');
          inputHandles.setDisabled(false);
          inputKomplekt.setDisabled(true);
          switch (this.getValue()) {
            case 'plungery':
              inputKomplekt.setDisabled(false);
              break;
            case 'plungery':
              inputHandles.setDisabled(true);
              break;
            case 'vnutrennie-zacepi':
              inputKomplekt.setDisabled(true);
              break;
            case 'z-krepleniya-m':
              inputKomplekt.setDisabled(false);
              break;
            case 'z-krepleniya-p':
              inputKomplekt.setDisabled(false);
              break;
          }
        });
      }
    }
  }]);
}(_ProductForm2.default);
},{"../../../user/User.js":"src/user/User.js","../ProductForm.js":"src/module/Product/ProductForm.js"}],"src/module/Product/products/RamochnayaOptima.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../../user/User.js"));
var _ProductForm2 = _interopRequireDefault(require("../ProductForm.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var RamochnayaOptima = exports.default = /*#__PURE__*/function (_ProductForm) {
  function RamochnayaOptima() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, RamochnayaOptima);
    return _callSuper(this, RamochnayaOptima, [config]);
  }

  /* Функции для изменения полей (зависимости/поведение/события и т.д) */
  // Крепления
  _inherits(RamochnayaOptima, _ProductForm);
  return _createClass(RamochnayaOptima, [{
    key: "fastings",
    value: function fastings(field) {
      var inputMontage = this.getInput('montage'); // Поле "монтаж"
      var inputKomplekt = this.getInput('komplekt'); // Поле "ручки"

      if (inputMontage && inputKomplekt) {
        field.on('change', function () {
          inputMontage.setDisabled(_User.default.getRole() === 'dealer');
          inputKomplekt.setDisabled(true);
          switch (this.getValue()) {
            case 'vnutrennie-zacepi':
              inputKomplekt.setDisabled(true);
              break;
            case 'plungery':
              inputKomplekt.setDisabled(true);
              break;
            case 'bezkrepleniya':
              inputKomplekt.setDisabled(true);
              break;
            case 'z-krepleniya-m':
              inputKomplekt.setDisabled(false);
              break;
            case 'z-krepleniya-p':
              inputKomplekt.setDisabled(false);
              break;
          }
        });
      }
    }
  }]);
}(_ProductForm2.default);
},{"../../../user/User.js":"src/user/User.js","../ProductForm.js":"src/module/Product/ProductForm.js"}],"src/module/Product/products/RulonnayaItalia.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductForm2 = _interopRequireDefault(require("../ProductForm.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var RulonnayaItalia = exports.default = /*#__PURE__*/function (_ProductForm) {
  function RulonnayaItalia() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, RulonnayaItalia);
    return _callSuper(this, RulonnayaItalia, [config]);
  }

  /* Функции для изменения полей (зависимости/поведение/события и т.д) */

  // Изменение максимальной высоты в зависимости от полотна
  _inherits(RulonnayaItalia, _ProductForm);
  return _createClass(RulonnayaItalia, [{
    key: "canvas",
    value: function canvas(field) {
      var height = this.getInput('height'); // Поле "высота"
      field.on('change', function () {
        switch (this.getValue()) {
          case 'antipo-gray':
          case 'antipo-black':
            height.setMax('1800').validate();
            break;
          default:
            height.setMax('2500').validate();
            break;
        }
      });
    }
  }]);
}(_ProductForm2.default);
},{"../ProductForm.js":"src/module/Product/ProductForm.js"}],"src/module/Product/products/PlisseItalia.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductForm2 = _interopRequireDefault(require("../ProductForm.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var PlisseItalia = exports.default = /*#__PURE__*/function (_ProductForm) {
  function PlisseItalia() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, PlisseItalia);
    return _callSuper(this, PlisseItalia, [config]);
  }

  /* Функции для изменения полей (зависимости/поведение/события и т.д) */

  // Изменение максимальной ширины в зависимости от типа открывания
  _inherits(PlisseItalia, _ProductForm);
  return _createClass(PlisseItalia, [{
    key: "opening",
    value: function opening(field) {
      var width = this.getInput('width'); // Поле "ширина"
      field.on('change', function () {
        switch (this.getValue()) {
          case 'vstrechnoe':
          case 'reversivnoe':
            width.setMax('6000').validate();
            break;
          default:
            width.setMax('3000').validate();
            break;
        }
      });
    }

    // Изменение максимальной высоты в зависимости от полотна
  }, {
    key: "canvas",
    value: function canvas(field) {
      var height = this.getInput('height'); // Поле "высота"
      field.on('change', function () {
        switch (this.getValue()) {
          case 'antivandal-gray':
            height.setMax('2800').validate();
            break;
          case 'maxivision-black':
            height.setMax('2400').validate();
            break;
          default:
            height.setMax('3000').validate();
            break;
        }
      });
    }
  }]);
}(_ProductForm2.default);
},{"../ProductForm.js":"src/module/Product/ProductForm.js"}],"src/module/Product/products/PlisseRussia.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ProductForm2 = _interopRequireDefault(require("../ProductForm.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var PlisseRussia = exports.default = /*#__PURE__*/function (_ProductForm) {
  function PlisseRussia() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, PlisseRussia);
    return _callSuper(this, PlisseRussia, [config]);
  }

  /* Функции для изменения полей (зависимости/поведение/события и т.д) */

  // Изменение максимальной ширины в зависимости от типа открывания
  _inherits(PlisseRussia, _ProductForm);
  return _createClass(PlisseRussia, [{
    key: "opening",
    value: function opening(field) {
      var width = this.getInput('width'); // Поле "ширина"
      field.on('change', function () {
        switch (this.getValue()) {
          case 'vstrechnoe':
          case 'reversivnoe':
            width.setMax('6000').validate();
            break;
          default:
            width.setMax('3000').validate();
            break;
        }
      });
    }

    // Изменение максимальной высоты в зависимости от полотна
  }, {
    key: "canvas",
    value: function canvas(field) {
      var height = this.getInput('height'); // Поле "высота"
      field.on('change', function () {
        switch (this.getValue()) {
          case 'antivandal-gray':
            height.setMax('2800').validate();
            break;
          case 'maxivision-black':
            height.setMax('2400').validate();
            break;
          default:
            height.setMax('3000').validate();
            break;
        }
      });
    }
  }]);
}(_ProductForm2.default);
},{"../ProductForm.js":"src/module/Product/ProductForm.js"}],"src/module/Product/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
var _User = _interopRequireDefault(require("../../user/User.js"));
var _products = _interopRequireDefault(require("../../data/products.js"));
var _FieldGroup = _interopRequireDefault(require("../../components/form/FieldGroup.js"));
var _Select = _interopRequireDefault(require("../../components/form/Select.js"));
var _Button = _interopRequireDefault(require("../../components/buttons/Button.js"));
var _InputQuantity = _interopRequireDefault(require("../../components/form/InputQuantity.js"));
var _ProductForm = _interopRequireDefault(require("./ProductForm.js"));
var _ProductPrice = _interopRequireDefault(require("./ProductPrice.js"));
var _ProductSawing = _interopRequireDefault(require("./ProductSawing.js"));
var _KPIInstaller = _interopRequireDefault(require("./kpi/KPIInstaller.js"));
var _KPIAssembler = _interopRequireDefault(require("./kpi/KPIAssembler.js"));
var _DTOProduct = _interopRequireDefault(require("../../dto/DTOProduct.js"));
var _Order = _interopRequireDefault(require("../Order/Order.js"));
var _Ramochnaya = _interopRequireDefault(require("./products/Ramochnaya25.js"));
var _RamochnayaOptima = _interopRequireDefault(require("./products/RamochnayaOptima.js"));
var _RulonnayaItalia = _interopRequireDefault(require("./products/RulonnayaItalia.js"));
var _PlisseItalia = _interopRequireDefault(require("./products/PlisseItalia.js"));
var _PlisseRussia = _interopRequireDefault(require("./products/PlisseRussia.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; } // Товары с индивидуальным поведением
var ProductKeys = {
  'Ramochnaya25': _Ramochnaya.default,
  'RamochnayaOptima': _RamochnayaOptima.default,
  'RulonnayaItalia': _RulonnayaItalia.default,
  'PlisseItalia': _PlisseItalia.default,
  'PlisseRussia': _PlisseRussia.default
};
var userRole = _User.default.getRole();

/**
 * Инициализация компонентов модуля
 */
function render() {
  var $wrapper = document.createElement('div');
  $wrapper.className = 'module-container';
  $wrapper.innerHTML = "\n        <div class=\"module-product-select\">\n            <div class=\"container\">\n                <div class=\"module-header\">\n                    <h2>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043E\u043D\u0441\u0442\u0440\u0443\u043A\u0446\u0438\u044E</h2>\n                </div>\n                <div id=\"ModuleProductSelector\"></div>\n            </div>\n        </div>\n        <div class=\"module-product-form\">\n            <div class=\"container\" id=\"ModuleProductForm\"></div>\n        </div>\n    ";

  // Селектор выбора конструкции
  var Selector = new _Select.default('product');
  _products.default.forEach(function (item) {
    Selector.addOption(item.key, item.title, item.selected);
  });
  $wrapper.querySelector('#ModuleProductSelector').append(Selector.render());

  // Форма калькулятора полей конструкции
  Selector.on('change', function () {
    var Form = createForm(this.getValue());
    var formContainer = $wrapper.querySelector('#ModuleProductForm');
    formContainer.innerHTML = '';
    formContainer.append(Form.render());
  }).dispatch('change');
  return $wrapper;
}

// Обработчик формы товара (сетки) для добавления в корзину/заказ
function createOrderItem(form) {
  var _formData$get, _formData$get2, _formData$get3, _formData$get4;
  var productKey = form.key;
  var formData = form.getFormData();

  // Получение значения монтажных работ
  var montagePrice = parseFloat((_formData$get = formData.get('mogtagespes')) === null || _formData$get === void 0 ? void 0 : _formData$get.value) || 0;

  // Цена сетки с монтажом или без (считается сразу в ProductPrice)
  var productPrice = new _ProductPrice.default(productKey, userRole, formData).calculate();
  // Итоговая цена с учётом стоимости монтажа
  var totalPrice = productPrice + montagePrice;

  // KPI Монтажника
  var kpiInstaller = new _KPIInstaller.default(productKey, formData, totalPrice).calculate();
  // KPI Сборщика
  var kpiAssembler = new _KPIAssembler.default(productKey, formData).calculate();
  // Распил
  var productSawing = new _ProductSawing.default(productKey, formData).calculate();
  var product = new _DTOProduct.default({
    id: new Date().getTime(),
    name: createProductName(form, totalPrice),
    quantity: formData.get('quantity').value,
    price: Math.round(totalPrice),
    // Округляем до целого числа
    montage: ((_formData$get2 = formData.get('montage')) === null || _formData$get2 === void 0 ? void 0 : _formData$get2.value) && ((_formData$get3 = formData.get('montage')) === null || _formData$get3 === void 0 ? void 0 : _formData$get3.value) !== 'off',
    ral: ((_formData$get4 = formData.get('frame_color')) === null || _formData$get4 === void 0 ? void 0 : _formData$get4.value) === 'ral',
    kpi: {
      installer: Math.round(kpiInstaller),
      assembler: Math.round(kpiAssembler)
    },
    sawing: productSawing
  });
  return product;
}

// Установка формы
function createForm(key) {
  // Создаем форму из конфигурации:
  var form;
  _products.default.forEach(function (config) {
    if (key !== undefined && config.key === key) {
      if (ProductKeys[config.key] !== undefined) {
        form = new ProductKeys[config.key](config);
      } else {
        form = new _ProductForm.default(config);
      }
    }
  });

  // Добавляем поля для возможности заказа товара
  var actions = createFormActions(form);

  // Событие нажатия кнопки "Добавить в заказ"
  actions.button.on('click', function () {
    _Order.default.addProduct(createOrderItem(form));
    // createOrderItem(form);
  });
  return form;
}

// Установка блока действий к форме товара
// с кнопкой "добавить в заказ" и с выбором количества сеток
function createFormActions(form) {
  var group = new _FieldGroup.default('actions');
  var button = new _Button.default('button_cart').setText('Добавить в заказ');
  var input = new _InputQuantity.default('quantity');
  button.setClass('button button-cart');
  input.setLimits('1', '999').setValue('1').setLabel('Кол-во сеток');
  form.addInput(input);
  form.addField(group.addFields([input, button]));
  return {
    button: button,
    input: input
  };
}

// Генерирует полный текст товара по данным из формы сетки
function createProductName(form) {
  var price = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var fields = [];
  var _iterator = _createForOfIteratorHelper(form.getFormData().values()),
    _step;
  try {
    var _loop = function _loop() {
      var inputData = _step.value;
      // Исключаем количество сеток из текста
      if (inputData.key === 'quantity') return 1; // continue
      if (inputData.value instanceof Array) {
        var values = [];
        inputData.value.forEach(function (field) {
          values.push("".concat(field.label));
        });
        if (values.length > 0) fields.push("".concat(inputData.label, ": (").concat(values.join(', '), ")"));
      } else {
        if (inputData.value) {
          fields.push("".concat(inputData.label, ": ").concat(inputData.title || inputData.value));
        }
      }
    };
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      if (_loop()) continue;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  fields.push("\u0426\u0435\u043D\u0430: ".concat(price, " \u20BD"));
  return fields.join('. ');
}
},{"../../user/User.js":"src/user/User.js","../../data/products.js":"src/data/products.js","../../components/form/FieldGroup.js":"src/components/form/FieldGroup.js","../../components/form/Select.js":"src/components/form/Select.js","../../components/buttons/Button.js":"src/components/buttons/Button.js","../../components/form/InputQuantity.js":"src/components/form/InputQuantity.js","./ProductForm.js":"src/module/Product/ProductForm.js","./ProductPrice.js":"src/module/Product/ProductPrice.js","./ProductSawing.js":"src/module/Product/ProductSawing.js","./kpi/KPIInstaller.js":"src/module/Product/kpi/KPIInstaller.js","./kpi/KPIAssembler.js":"src/module/Product/kpi/KPIAssembler.js","../../dto/DTOProduct.js":"src/dto/DTOProduct.js","../Order/Order.js":"src/module/Order/Order.js","./products/Ramochnaya25.js":"src/module/Product/products/Ramochnaya25.js","./products/RamochnayaOptima.js":"src/module/Product/products/RamochnayaOptima.js","./products/RulonnayaItalia.js":"src/module/Product/products/RulonnayaItalia.js","./products/PlisseItalia.js":"src/module/Product/products/PlisseItalia.js","./products/PlisseRussia.js":"src/module/Product/products/PlisseRussia.js"}],"src/module/Extras/ExtrasSearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputSearch = exports.ButtonSearch = void 0;
var _InputText = _interopRequireDefault(require("../../components/form/InputText.js"));
var _Button = _interopRequireDefault(require("../../components/buttons/Button.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var InputSearch = exports.InputSearch = new _InputText.default('query').setPlaceholder('Поиск ...');
var ButtonSearch = exports.ButtonSearch = new _Button.default('button-search');
},{"../../components/form/InputText.js":"src/components/form/InputText.js","../../components/buttons/Button.js":"src/components/buttons/Button.js"}],"src/data/extras.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = exports.default = {
  dealer: [{
    "name": "Оконная ручка (Белая)",
    "unit": "шт",
    "price": "100"
  }, {
    "name": "Оконная ручка (Коричневая)",
    "unit": "шт",
    "price": "110"
  }, {
    "name": "Оконная ручка (Антрацит)",
    "unit": "шт",
    "price": "190"
  }, {
    "name": "Оконная ручка с замком (Белая)",
    "unit": "шт",
    "price": "400"
  }, {
    "name": "Оконная ручка с замком (Коричневая)",
    "unit": "шт",
    "price": "450"
  }, {
    "name": "Заглушка водоотведения оконная (Белая)",
    "unit": "шт",
    "price": "2"
  }, {
    "name": "Ручка балконная курильщика пластиковая (Белая)",
    "unit": "шт",
    "price": "20"
  }, {
    "name": "Ручка балконная курильщика металл (Белая)",
    "unit": "шт",
    "price": "40"
  }, {
    "name": "Ручка балконная курильщика металл (Коричневая)",
    "unit": "шт",
    "price": "40"
  }, {
    "name": "Ограничитель окна металл (Белая)",
    "unit": "шт",
    "price": "100"
  }, {
    "name": "Ограничитель окна металл  (Коричневая)",
    "unit": "шт",
    "price": "110"
  }, {
    "name": "Ограничитель окна пластик (Белая)",
    "unit": "шт",
    "price": "50"
  }, {
    "name": "Детский замок ТРОС (Белая)",
    "unit": "шт",
    "price": "500"
  }, {
    "name": "Детский замок ТРОС (Коричневая)",
    "unit": "шт",
    "price": "550"
  }, {
    "name": "Дверца для домашних животных mini",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Дверца для домашних животных max",
    "unit": "шт",
    "price": "1500"
  }, {
    "name": "Уплотнитель щеточный (Шлегель) 12мм серый",
    "unit": "пог.м.",
    "price": "40"
  }, {
    "name": "Уплотнитель щеточный (Шлегель) 6мм серый",
    "unit": "пог.м.",
    "price": "20"
  }, {
    "name": "Двухсторонней скотч черный",
    "unit": "пог.м.",
    "price": "100"
  }, {
    "name": "Двухсторонней скотч белый",
    "unit": "пог.м.",
    "price": "100"
  }, {
    "name": "Ролик для закатки шнура",
    "unit": "шт",
    "price": "400"
  }, {
    "name": "Ролик для закатки шнура металлический",
    "unit": "шт",
    "price": "600"
  }, {
    "name": "Угол 25мм цельнолитой пластиковый (Белый)",
    "unit": "шт",
    "price": "5"
  }, {
    "name": "Угол 25мм цельнолитой пластиковый (Коричневый)",
    "unit": "шт",
    "price": "6"
  }, {
    "name": "Угол 25мм цельнолитой пластиковый (Антрацит)",
    "unit": "шт",
    "price": "8"
  }, {
    "name": "Металлические Угол 25мм (Белый)",
    "unit": "шт",
    "price": "60"
  }, {
    "name": "Металлические Угол 25мм (Коричневый) ",
    "unit": "шт",
    "price": "70"
  }, {
    "name": "Металлические Угол 25мм (Антрацит)",
    "unit": "шт",
    "price": "80"
  }, {
    "name": "Металлические Угол 32мм (Белый)",
    "unit": "шт",
    "price": "90"
  }, {
    "name": "Металлические Угол 32мм (Коричневый) ",
    "unit": "шт",
    "price": "90"
  }, {
    "name": "Углы «Provedal» 4шт комплект",
    "unit": "компл.",
    "price": "100"
  }, {
    "name": "Угол «SKF» (Белый)",
    "unit": "шт",
    "price": "18"
  }, {
    "name": "Угол «SKF» (Коричневый)",
    "unit": "шт",
    "price": "20"
  }, {
    "name": "Угол «SKF» (Антрацит)",
    "unit": "шт",
    "price": "35"
  }, {
    "name": "Угол «Крыло» (Белый)",
    "unit": "шт",
    "price": "12"
  }, {
    "name": "Угол «Крыло» (Коричневый)",
    "unit": "шт",
    "price": "14"
  }, {
    "name": "Угол «Крыло» (Антрацит)",
    "unit": "шт",
    "price": "18"
  }, {
    "name": "Угол «Плиссе Россия» (Белый) 4шт",
    "unit": "компл.",
    "price": "600"
  }, {
    "name": "Угол «Плиссе Россия» (Коричневый) 4шт",
    "unit": "компл.",
    "price": "600"
  }, {
    "name": "Углы профиль 42мм 8шт комплект",
    "unit": "компл.",
    "price": "140"
  }, {
    "name": "Металлическая Ручка МС (Белые)",
    "unit": "шт",
    "price": "10"
  }, {
    "name": "Металлическая Ручка МС (Коричневые)",
    "unit": "шт",
    "price": "12"
  }, {
    "name": "Металлическая Ручка МС (Антрацит)",
    "unit": "шт",
    "price": "16"
  }, {
    "name": "Ручка МС пластиковой (Прозрачная)",
    "unit": "шт",
    "price": "2"
  }, {
    "name": "Z-крепления металлические Белые (комплект) 4 шт.",
    "unit": "компл.",
    "price": "30"
  }, {
    "name": "Z-крепления металлические Коричневые (комплект) 4 шт.",
    "unit": "компл.",
    "price": "32"
  }, {
    "name": "Z-крепления металлические Антрацит (комплект) 4 шт.",
    "unit": "компл.",
    "price": "40"
  }, {
    "name": "Плунжерные крепления 1шт. ",
    "unit": "шт",
    "price": "80"
  }, {
    "name": "Внутренние крепления (перья)(комплект) 4 шт",
    "unit": "компл.",
    "price": "100"
  }, {
    "name": "«Флажки» крепления для сеток (Белые)",
    "unit": "шт",
    "price": "10"
  }, {
    "name": "«Флажки» крепления для сеток (Коричневые)",
    "unit": "шт",
    "price": "10"
  }, {
    "name": "Крепление «SKF»",
    "unit": "шт",
    "price": "40"
  }, {
    "name": "Крепления «Крыло»",
    "unit": "шт",
    "price": "15"
  }, {
    "name": "Шнур 4,5мм",
    "unit": "пог.м.",
    "price": "5"
  }, {
    "name": "Шнур 5мм",
    "unit": "пог.м.",
    "price": "5"
  }, {
    "name": "Шнур 5,5мм",
    "unit": "пог.м.",
    "price": "6"
  }, {
    "name": "Шнур 6мм",
    "unit": "пог.м.",
    "price": "7"
  }, {
    "name": "Петли с доводчиками (Белые) ",
    "unit": "шт",
    "price": "400"
  }, {
    "name": "Петли с доводчиками (Коричневые)",
    "unit": "шт",
    "price": "400"
  }, {
    "name": "Петли металлические (Белые) ",
    "unit": "шт",
    "price": "70"
  }, {
    "name": "Петли металлические (Коричневые) ",
    "unit": "шт",
    "price": "80"
  }, {
    "name": "Петли металлические (Антрацит)",
    "unit": "шт",
    "price": "130"
  }, {
    "name": "Магнитный держатель (Белые) ",
    "unit": "шт",
    "price": "60"
  }, {
    "name": "Магнитный держатель (Коричневые) ",
    "unit": "шт",
    "price": "70"
  }, {
    "name": "Защелка (Белая) ",
    "unit": "шт",
    "price": "60"
  }, {
    "name": "Защелка (Коричневая) ",
    "unit": "шт",
    "price": "70"
  }, {
    "name": "Профиль 25мм (Белые)",
    "unit": "пог.м.",
    "price": "80"
  }, {
    "name": "Профиль 25мм (Коричневые) ",
    "unit": "пог.м.",
    "price": "85"
  }, {
    "name": "Профиль 25мм (Антрацит)",
    "unit": "пог.м.",
    "price": "100"
  }, {
    "name": "Профиль 32мм (Белые)",
    "unit": "пог.м.",
    "price": "250"
  }, {
    "name": "Профиль 32мм (Коричневые) ",
    "unit": "пог.м.",
    "price": "250"
  }, {
    "name": "Профиль 42мм (Белые)",
    "unit": "пог.м.",
    "price": "350"
  }, {
    "name": "Профиль 42мм (Коричневые) ",
    "unit": "пог.м.",
    "price": "350"
  }, {
    "name": "Профиль SKF (Белые)",
    "unit": "пог.м.",
    "price": "200"
  }, {
    "name": "Профиль SKF (Коричневые) ",
    "unit": "пог.м.",
    "price": "210"
  }, {
    "name": "Профиль SKF (Антрацит)",
    "unit": "пог.м.",
    "price": "250"
  }, {
    "name": "Профиль Provedal (Белые)",
    "unit": "пог.м.",
    "price": "300"
  }, {
    "name": "Профиль Provedal (Коричневые) ",
    "unit": "пог.м.",
    "price": "320"
  }, {
    "name": "Профиль Provedal (Антрацит)",
    "unit": "пог.м.",
    "price": "350"
  }, {
    "name": "Профиль «Плиссе Россия» (Белый)",
    "unit": "пог.м.",
    "price": "450"
  }, {
    "name": "Профиль «Плиссе Россия» (Коричневый)",
    "unit": "пог.м.",
    "price": "450"
  }, {
    "name": "Профиль ручка «Плиссе Россия» (Белый)",
    "unit": "пог.м.",
    "price": "500"
  }, {
    "name": "Профиль ручка «Плиссе Россия» (Коричневый)",
    "unit": "пог.м.",
    "price": "500"
  }, {
    "name": "Профиль Крыло (Белые)",
    "unit": "пог.м.",
    "price": "110"
  }, {
    "name": "Профиль Крыло (Коричневые) ",
    "unit": "пог.м.",
    "price": "120"
  }, {
    "name": "Профиль Крыло (Антрацит)",
    "unit": "пог.м.",
    "price": "150"
  }, {
    "name": "Профиль Поперечный (Белые)",
    "unit": "пог.м.",
    "price": "90"
  }, {
    "name": "Профиль Поперечный (Коричневые) ",
    "unit": "пог.м.",
    "price": "95"
  }, {
    "name": "Профиль Поперечный (Антрацит)",
    "unit": "пог.м.",
    "price": "110"
  }, {
    "name": "Полотно Стандарт 1.6м серое",
    "unit": "пог.м.",
    "price": "100"
  }, {
    "name": "Полотно Стандарт 1.4м серое",
    "unit": "пог.м.",
    "price": "90"
  }, {
    "name": "Полотно Стандарт 1.6м черное ",
    "unit": "пог.м.",
    "price": "110"
  }, {
    "name": "Полотно Стандарт 1.4м черное ",
    "unit": "пог.м.",
    "price": "100"
  }, {
    "name": "Полотно Антикошка 1.6м белое ",
    "unit": "пог.м.",
    "price": "900"
  }, {
    "name": "Полотно Антикошка 1.4м белое ",
    "unit": "пог.м.",
    "price": "800"
  }, {
    "name": "Полотно Антикошка 1.6м серое ",
    "unit": "пог.м.",
    "price": "900"
  }, {
    "name": "Полотно Антикошка 1.4м серое ",
    "unit": "пог.м.",
    "price": "800"
  }, {
    "name": "Полотно Антикошка 1.6м светло-серое",
    "unit": "пог.м.",
    "price": "900"
  }, {
    "name": "Полотно Антикошка 1.4м светло-серое",
    "unit": "пог.м.",
    "price": "800"
  }, {
    "name": "Полотно Антикошка 1.6м черное",
    "unit": "пог.м.",
    "price": "900"
  }, {
    "name": "Полотно Антикошка 1.4м черное",
    "unit": "пог.м.",
    "price": "800"
  }, {
    "name": "Полотно Антикошка 1.6м черно-белое ",
    "unit": "пог.м.",
    "price": "900"
  }, {
    "name": "Полотно Антикошка 1.4м черно-белое ",
    "unit": "пог.м.",
    "price": "800"
  }, {
    "name": "Полотно Антикошка 1.6м бронза ",
    "unit": "пог.м.",
    "price": "900"
  }, {
    "name": "Полотно Антикошка 1.4м бронза ",
    "unit": "пог.м.",
    "price": "800"
  }, {
    "name": "Антипыль 1.6м серый ",
    "unit": "пог.м.",
    "price": "550"
  }, {
    "name": "Антипыль 1.4м серый ",
    "unit": "пог.м.",
    "price": "500"
  }, {
    "name": "Антипыль 1.6м черный",
    "unit": "пог.м.",
    "price": "550"
  }, {
    "name": "Антипыль 1.4м черный",
    "unit": "пог.м.",
    "price": "500"
  }, {
    "name": "Полотно Ультравью 1.6м серое ",
    "unit": "пог.м.",
    "price": "350"
  }, {
    "name": "Полотно Ультравью 1.4м серое ",
    "unit": "пог.м.",
    "price": "300"
  }, {
    "name": "Полотно Ультравью 1.6м черное",
    "unit": "пог.м.",
    "price": "350"
  }, {
    "name": "Полотно Ультравью 1.4м черное",
    "unit": "пог.м.",
    "price": "300"
  }, {
    "name": "Полотно Антиптица 1.4м",
    "unit": "пог.м.",
    "price": "800"
  }, {
    "name": "Полотно Антипыльца 1.6м черное",
    "unit": "пог.м.",
    "price": "1500"
  }, {
    "name": "Полотно Солнцезащитное 1.6м ",
    "unit": "пог.м.",
    "price": "1500"
  }, {
    "name": "Образец Рамочная 25мм Антиптици, 4 крепления, 4цвета",
    "unit": "шт",
    "price": "500"
  }, {
    "name": "Образец SKF Стандарт",
    "unit": "шт",
    "price": "400"
  }, {
    "name": "Образец Крыло Стандарт",
    "unit": "шт",
    "price": "400"
  }, {
    "name": "Образцы полотен 14 полотен",
    "unit": "шт",
    "price": "600"
  }, {
    "name": "Образец «Плиссе Россия» 2 цвета, Антипыль",
    "unit": "шт",
    "price": "2000"
  }, {
    "name": "Образец «Плиссе Италия» 2 цвета, Стандарт",
    "unit": "шт",
    "price": "3500"
  }, {
    "name": "Образцы полотен Плиссе",
    "unit": "шт",
    "price": "100"
  }, {
    "name": "Образец «Рулонная Италия»",
    "unit": "шт",
    "price": "3000"
  }, {
    "name": "Стальное полотно 1.6 черное",
    "unit": "пог.м.",
    "price": "1300"
  }],
  employee: [{
    "name": "Фетр (белый)",
    "unit": "пог.м.",
    "price": "110"
  }, {
    "name": "Фетр (коричневый)",
    "unit": "пог.м.",
    "price": "110"
  }, {
    "name": "Фетр (RAL7016)",
    "unit": "пог.м.",
    "price": "110"
  }, {
    "name": "Крепление Z-образное металл, комплект 4шт (белый)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Крепление Z-образное металл, комплект 4шт (коричневый)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Крепление Z-образное металл, комплект 4шт (RAL7016)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Крепление Z-образное пвх, комплект 4шт (белый)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Крепление Z-образное пвх, комплект 4шт (коричневый)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Крепление Z-образное пвх, комплект 4шт (RAL7016)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Крепление внутренние крючки, комплект 4шт",
    "unit": "шт",
    "price": "660"
  }, {
    "name": "Крепление плунжерное, комплект 4шт",
    "unit": "шт",
    "price": "1000"
  }, {
    "name": "Металлические соединительные уголки рамочной сетки, комплект (белый)",
    "unit": "шт",
    "price": "450"
  }, {
    "name": "Металлические соединительные уголки рамочной сетки, комплект (коричневый)",
    "unit": "шт",
    "price": "450"
  }, {
    "name": "Металлические соединительные уголки рамочной сетки, комплект (RAL7016)",
    "unit": "шт",
    "price": "450"
  }, {
    "name": "Пластиковые соединительные уголки рамочной сетки, комплект (белый)",
    "unit": "шт",
    "price": "220"
  }, {
    "name": "Пластиковые соединительные уголки рамочной сетки, комплект (коричневый)",
    "unit": "шт",
    "price": "220"
  }, {
    "name": "Пластиковые соединительные уголки рамочной сетки, комплект (RAL7016)",
    "unit": "шт",
    "price": "220"
  }, {
    "name": "Металлические ручки для рамочной сетки, комплект (белый)",
    "unit": "шт",
    "price": "220"
  }, {
    "name": "Металлические ручки для рамочной сетки, комплект (коричневый)",
    "unit": "шт",
    "price": "220"
  }, {
    "name": "Металлические ручки для рамочной сетки, комплект (RAL7016)",
    "unit": "шт",
    "price": "220"
  }, {
    "name": "Пластиковые ручки для рамочной сетки, комплект (белый)",
    "unit": "шт",
    "price": "170"
  }, {
    "name": "Пластиковые ручки для рамочной сетки, комплект (коричневый)",
    "unit": "шт",
    "price": "170"
  }, {
    "name": "Пластиковые ручки для рамочной сетки, комплект (RAL7016)",
    "unit": "шт",
    "price": "170"
  }, {
    "name": "Дверной доп. профиль",
    "unit": "шт",
    "price": "550"
  }, {
    "name": "Плиссе дополнительный профиль",
    "unit": "пог.м.",
    "price": "770"
  }, {
    "name": "Стандартный профиль или перемычка",
    "unit": "пог.м.",
    "price": "400"
  }, {
    "name": "Установка доп.рамки",
    "unit": "шт.",
    "price": "060"
  }, {
    "name": "Ручка оконная HOPP (коричневая)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Ручка оконная ROTO (белая)",
    "unit": "шт",
    "price": "1500"
  }, {
    "name": "Ручка оконная ROTO (коричневая)",
    "unit": "шт",
    "price": "1500"
  }, {
    "name": "Ручка оконная REHAU (белая)",
    "unit": "шт",
    "price": "1500"
  }, {
    "name": "Ручка оконная REHAU (коричневая)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Ручка оконная ROTO с ключем (белая)",
    "unit": "шт",
    "price": "5500"
  }, {
    "name": "Ручка оконная ROTO с ключем (коричневая)",
    "unit": "шт",
    "price": "5500"
  }, {
    "name": "Ручка оконная HOPP (коричневая)",
    "unit": "шт",
    "price": "2000"
  }, {
    "name": "Ручка оконная HOPP (коричневая)",
    "unit": "шт",
    "price": "2000"
  }, {
    "name": "Гребенка ПВХ (белая)",
    "unit": "шт",
    "price": "500"
  }, {
    "name": "Гребенка ПВХ (коричневая)",
    "unit": "шт",
    "price": "500"
  }, {
    "name": "Гребенка металлическая (белая)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Гребенка металлическая (коричневая)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Грбенка под АЛ (белая)",
    "unit": "шт",
    "price": "900"
  }, {
    "name": "Шпингалет",
    "unit": "шт",
    "price": "600"
  }, {
    "name": "Детски замок на тросике (белый)",
    "unit": "шт",
    "price": "2000"
  }, {
    "name": "Детски замок на тросике (коричневый)",
    "unit": "шт",
    "price": "2000"
  }, {
    "name": "Детский замок под створку (белый)",
    "unit": "шт",
    "price": "2000"
  }, {
    "name": "Детский замок под створку (коричневый)",
    "unit": "шт",
    "price": "2000"
  }, {
    "name": "Ручка REHAU с детским замком",
    "unit": "шт",
    "price": "2300"
  }, {
    "name": "Ручка ракушка пластиковая (белая)",
    "unit": "шт",
    "price": "500"
  }, {
    "name": "Ручка ракушка пластиковая (коричневая)",
    "unit": "шт",
    "price": "500"
  }, {
    "name": "Ручка ракушка металлическая (белая)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Ручка ракушка металлическая (коричневая)",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Балконная защелка",
    "unit": "шт",
    "price": "800"
  }, {
    "name": "Магнитная балконная защелка",
    "unit": "шт",
    "price": "900"
  }, {
    "name": "Двухсторонняя ручка ",
    "unit": "шт",
    "price": "4000"
  }, {
    "name": "Крепление боковое (барашек) (белый) ",
    "unit": "шт",
    "price": "120"
  }, {
    "name": "Крепление боковое (барашек) (коричневый) ",
    "unit": "шт",
    "price": "120"
  }, {
    "name": "Лючок Мини 240*290",
    "unit": "шт",
    "price": "3500"
  }, {
    "name": "Лючок Макс 350*450",
    "unit": "шт",
    "price": "4000"
  }]
};
},{}],"src/components/Table.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _rows = /*#__PURE__*/new WeakMap();
// ToDo: Refactor class Table
var Table = exports.default = /*#__PURE__*/function () {
  function Table(key) {
    _classCallCheck(this, Table);
    _defineProperty(this, "$table", document.createElement('table'));
    _defineProperty(this, "$thead", document.createElement('thead'));
    _defineProperty(this, "$tbody", document.createElement('tbody'));
    _classPrivateFieldInitSpec(this, _rows, new Map());
    this.$table.id = 'table-' + key;
    this.$table.className = 'table-' + key;
    this.$table.classList.add('table', 'table-striped', 'table-hover');
    this.$table.append(this.$tbody);
  }
  return _createClass(Table, [{
    key: "setRows",
    value: function setRows(rows) {
      var _this = this;
      rows.forEach(function (row) {
        return _this.addRow(row);
      });
      return this;
    }
  }, {
    key: "addRow",
    value: function addRow(id, data) {
      _classPrivateFieldGet(_rows, this).set(id, data);
      return this;
    }
  }, {
    key: "deleteRow",
    value: function deleteRow(key) {
      if (_classPrivateFieldGet(_rows, this).has(key)) {
        _classPrivateFieldGet(_rows, this).delete(key);
      } else {
        throw "[Table.deleteRow] - Row key not found in table";
      }
      return this;
    }
  }, {
    key: "clear",
    value: function clear() {
      _classPrivateFieldSet(_rows, this, new Map());
      return this;
    }
  }, {
    key: "update",
    value: function update() {
      var _this2 = this;
      this.$tbody.innerHTML = '';
      var rowIndex = 1;
      var _iterator = _createForOfIteratorHelper(this.getRows().values()),
        _step;
      try {
        var _loop = function _loop() {
          var row = _step.value;
          var colIndex = 1;
          var $tr = _this2.tr(rowIndex++);
          row.forEach(function (column) {
            var $td = _this2.td(colIndex++);
            $td.append(column);
            $tr.append($td);
          });
          _this2.$tbody.append($tr);
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return this;
    }
  }, {
    key: "getRow",
    value: function getRow(key) {
      if (_classPrivateFieldGet(_rows, this).has(key)) return _classPrivateFieldGet(_rows, this).get(key);
    }
  }, {
    key: "getRows",
    value: function getRows() {
      return _classPrivateFieldGet(_rows, this);
    }
  }, {
    key: "getRowsCount",
    value: function getRowsCount() {
      return this.getRows().size;
    }
  }, {
    key: "tbody",
    value: function tbody() {
      return this.$tbody;
    }
  }, {
    key: "tr",
    value: function tr(index) {
      var $tr = document.createElement('tr');
      $tr.dataset.index = index;
      $tr.className = 'table-row-' + index;
      return $tr;
    }
  }, {
    key: "td",
    value: function td(index) {
      var $td = document.createElement('td');
      $td.className = 'td-' + index;
      return $td;
    }
  }, {
    key: "thead",
    value: function thead(columns) {
      var _this3 = this;
      var colIndex = 1;
      var $tr = this.tr(0);
      columns.forEach(function (item) {
        var $th = _this3.th(colIndex);
        $th.append(item);
        $tr.append($th);
        colIndex++;
      });
      this.$thead.append($tr);
      this.$table.prepend(this.$thead);
      return this;
    }
  }, {
    key: "th",
    value: function th(index) {
      var $th = document.createElement('th');
      $th.className = 'th-' + index;
      return $th;
    }
  }, {
    key: "render",
    value: function render() {
      return this.$table;
    }
  }]);
}();
},{}],"src/module/Extras/ExtrasTable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extras = _interopRequireDefault(require("../../data/extras.js"));
var _User = _interopRequireDefault(require("../../user/User.js"));
var _Order = _interopRequireDefault(require("../Order/Order.js"));
var _Table2 = _interopRequireDefault(require("../../components/Table.js"));
var _Button = _interopRequireDefault(require("../../components/buttons/Button.js"));
var _InputQuantity = _interopRequireDefault(require("../../components/form/InputQuantity.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var ExtrasTable = /*#__PURE__*/function (_Table) {
  function ExtrasTable() {
    var _this;
    _classCallCheck(this, ExtrasTable);
    _this = _callSuper(this, ExtrasTable, ['extras']);
    _this.thead(['#', 'Наименование', 'Кол-во', 'Цена, руб.', '#']);

    // Загружаем таблицу
    _this.setRowsFromData();
    return _this;
  }
  _inherits(ExtrasTable, _Table);
  return _createClass(ExtrasTable, [{
    key: "setRowsFromData",
    value: function setRowsFromData() {
      var _this2 = this;
      var itemIndex = 1;
      _extras.default[_User.default.getRole()].forEach(function (item) {
        item.id = itemIndex;
        _this2.addRow(item.id, _this2.createRow(item));
        itemIndex++;
      });
      _get(_getPrototypeOf(ExtrasTable.prototype), "update", this).call(this);
    }
  }, {
    key: "createRow",
    value: function createRow(item) {
      var itemInOrder = _Order.default.getExtrasItem(item.id);
      var ItemQuantity = this.createItemQuantity(item);
      var ButtonOrder = this.createButtonOrder(itemInOrder);
      ItemQuantity.setValue(itemInOrder ? itemInOrder.quantity : 1);
      ButtonOrder.on('click', function () {
        _Order.default.addOrUpdateExtras({
          id: item.id,
          name: item.name,
          quantity: ItemQuantity.getValue(),
          price: item.price
        });
        ButtonOrder.addClass('active').setText('Изменить');
      });
      return [item.id, item.name, ItemQuantity.render(), item.price + ' ₽', ButtonOrder.render()];
    }
  }, {
    key: "createItemQuantity",
    value: function createItemQuantity(item) {
      var input = new _InputQuantity.default('input-qty', 1);
      input.setLabel(item.unit);
      input.setId('input-qty-' + item.id);
      return input;
    }
  }, {
    key: "createButtonOrder",
    value: function createButtonOrder() {
      var inOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var button = new _Button.default('button-order');
      inOrder ? button.addClass('active').setText('Изменить') : button.removeClass('active').setText('В заказ');
      return button;
    }

    /**
     * Функция отрабатывающая на изменение данных в заказе
     */
  }, {
    key: "update",
    value: function update(order) {
      // Обновляем таблицу
      this.setRowsFromData();
      // console.log('Extras Table updated');
    }
  }]);
}(_Table2.default);
var _default = exports.default = new ExtrasTable();
},{"../../data/extras.js":"src/data/extras.js","../../user/User.js":"src/user/User.js","../Order/Order.js":"src/module/Order/Order.js","../../components/Table.js":"src/components/Table.js","../../components/buttons/Button.js":"src/components/buttons/Button.js","../../components/form/InputQuantity.js":"src/components/form/InputQuantity.js"}],"src/module/Extras/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
var _Order = _interopRequireDefault(require("../Order/Order.js"));
var _ExtrasSearch = require("./ExtrasSearch.js");
var _ExtrasTable = _interopRequireDefault(require("./ExtrasTable.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// Регистрация наблюдателей для компонентов модуля 
_Order.default.registerObserver(_ExtrasTable.default);

/**
 * События модуля
 */
// Обработчик поля поиска
var searchTimeout;
_ExtrasSearch.InputSearch.on('keyup', function () {
  var _this = this;
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(function () {
    tableFilter(_this.getValue());
  }, 500);
});
_ExtrasSearch.ButtonSearch.on('click', function () {
  tableFilter(_ExtrasSearch.InputSearch.getValue());
});

/**
 * Функции
 */
function tableFilter() {
  var textString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var tableRows = _ExtrasTable.default.tbody().querySelectorAll('tr'); // Получаем html строк таблицы 
  textString = textString.toLowerCase();
  tableRows.forEach(function (row) {
    var targetColumn = row.querySelector('.td-2');
    if (targetColumn !== undefined) {
      var content = targetColumn.textContent.toLowerCase();
      if (content.includes(textString)) {
        row.classList.remove('is-hidden');
      } else {
        row.classList.add('is-hidden');
      }
    }
  });
}
function render() {
  var $wrapper = document.createElement('div');
  $wrapper.className = 'module-container';
  $wrapper.innerHTML = "\n        <div class=\"module-extras-search\">\n            <div class=\"container\">\n                <div class=\"module-header\">\n                    <h2>\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435</h2>\n                </div>\n                <div class=\"form-search\" id=\"ModuleExtrasSearch\"></div>\n            </div>\n        </div>\n        <div class=\"module-extras-table\">\n            <div class=\"container\" id=\"ModuleExtrasTable\">\n            \n            </div>\n        </div>\n    ";
  $wrapper.querySelector('#ModuleExtrasSearch').append(_ExtrasSearch.InputSearch.render(), _ExtrasSearch.ButtonSearch.render());
  $wrapper.querySelector('#ModuleExtrasTable').append(_ExtrasTable.default.render());
  return $wrapper;
}
},{"../Order/Order.js":"src/module/Order/Order.js","./ExtrasSearch.js":"src/module/Extras/ExtrasSearch.js","./ExtrasTable.js":"src/module/Extras/ExtrasTable.js"}],"src/module/Order/components/ButtonClear.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Button = _interopRequireDefault(require("../../../components/buttons/Button.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var _default = exports.default = new _Button.default('order-clear').addClass('button-clear').setText('Очистить');
},{"../../../components/buttons/Button.js":"src/components/buttons/Button.js"}],"src/components/buttons/ButtonDelete.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Button2 = _interopRequireDefault(require("./Button.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var ButtonDelete = exports.default = /*#__PURE__*/function (_Button) {
  function ButtonDelete() {
    var _this;
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'button-delete';
    _classCallCheck(this, ButtonDelete);
    _this = _callSuper(this, ButtonDelete, [key]);
    _this.setIconSVG("\n            <svg width=\"18\" height=\"18\" viewBox=\"0 0 18 18\" fill=\"#ff0000\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path d=\"M9 0C4.037 0 0 4.038 0 9C0 13.962 4.037 18 9 18C13.963 18 18 13.962 18 9C18 4.038 13.963 0 9 0ZM9 16C5.141 16 2 12.86 2 9C2 5.14 5.141 2 9 2C12.859 2 16 5.14 16 9C16 12.86 12.859 16 9 16ZM9.707 9L12.353 6.354C12.4462 6.25998 12.4986 6.13292 12.4986 6.0005C12.4986 5.86808 12.4462 5.74102 12.353 5.647C12.259 5.55375 12.1319 5.50143 11.9995 5.50143C11.8671 5.50143 11.74 5.55375 11.646 5.647L9 8.293L6.354 5.646C6.2597 5.55492 6.1334 5.50452 6.0023 5.50566C5.8712 5.5068 5.74579 5.55939 5.65309 5.65209C5.56039 5.7448 5.5078 5.8702 5.50666 6.0013C5.50552 6.1324 5.55592 6.2587 5.647 6.353L8.293 9L5.647 11.646C5.55311 11.7398 5.50032 11.867 5.50022 11.9996C5.50013 12.1323 5.55275 12.2596 5.6465 12.3535C5.74025 12.4474 5.86746 12.5002 6.00015 12.5003C6.13283 12.5004 6.26011 12.4478 6.354 12.354L9 9.707L11.646 12.353C11.6921 12.4008 11.7472 12.439 11.8081 12.4653C11.8691 12.4916 11.9347 12.5054 12.0011 12.5061C12.0675 12.5068 12.1333 12.4942 12.1948 12.4692C12.2563 12.4441 12.3122 12.4071 12.3592 12.3602C12.4062 12.3133 12.4434 12.2575 12.4686 12.1961C12.4938 12.1347 12.5066 12.0689 12.5061 12.0025C12.5056 11.9361 12.4919 11.8705 12.4658 11.8095C12.4397 11.7484 12.4017 11.6932 12.354 11.647L9.707 9Z\" />\n            </svg>\n        ");
    _this.setTitle('Удалить');
    return _this;
  }
  _inherits(ButtonDelete, _Button);
  return _createClass(ButtonDelete);
}(_Button2.default);
},{"./Button.js":"src/components/buttons/Button.js"}],"src/module/Order/OrderTableProducts.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Table2 = _interopRequireDefault(require("../../components/Table.js"));
var _ButtonDelete = _interopRequireDefault(require("../../components/buttons/ButtonDelete.js"));
var _InputQuantity = _interopRequireDefault(require("../../components/form/InputQuantity.js"));
var _Order = _interopRequireDefault(require("./Order.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var OrderTableProducts = /*#__PURE__*/function (_Table) {
  function OrderTableProducts() {
    var _this;
    _classCallCheck(this, OrderTableProducts);
    _this = _callSuper(this, OrderTableProducts, ['order']);
    _this.thead(['#', 'Наименование', 'Кол-во', 'Цена, руб.', '#']);
    return _this;
  }
  _inherits(OrderTableProducts, _Table);
  return _createClass(OrderTableProducts, [{
    key: "createRow",
    value: function createRow(product) {
      var deleteButton = new _ButtonDelete.default();
      var quantityInput = new _InputQuantity.default('input-qty', 1, 99).setValue(product.quantity);
      deleteButton.on('click', function () {
        _Order.default.deleteProduct(product.id);
      });
      quantityInput.on('change', function () {
        product.quantity = quantityInput.getValue();
        _Order.default.setProduct(product.id, product);
      });
      return [product.index, product.name, quantityInput.render(), product.price + ' ₽', deleteButton.render()];

      // const debug = document.createElement('div');
      // debug.innerHTML = `
      //     ${product.name} <br>
      //     <div style="font-weight: bold; margin-top:5px;">
      //         KPI-монт: ${product.kpi.installer}; 
      //         KPI-сбор: ${product.kpi.assembler};
      //         распил: Ш:${product.sawing.width}/В:${product.sawing.height}/И:${product.sawing.impost}
      //     </div>
      // `

      // return [
      //     product.index, 
      //     debug, 
      //     quantityInput.render(), 
      //     product.price + ' ₽', 
      //     deleteButton.render()
      // ]
    }

    /**
     * Функция отрабатывающая на изменение данных в заказе
     */
  }, {
    key: "update",
    value: function update(order) {
      var _this2 = this;
      this.clear(); // Fix table HTML refresh bug
      order.getProducts().forEach(function (product, index) {
        product.index = index + 1;
        _this2.addRow(product.id, _this2.createRow(product));
      });
      _get(_getPrototypeOf(OrderTableProducts.prototype), "update", this).call(this);
    }
  }]);
}(_Table2.default);
var _default = exports.default = new OrderTableProducts();
},{"../../components/Table.js":"src/components/Table.js","../../components/buttons/ButtonDelete.js":"src/components/buttons/ButtonDelete.js","../../components/form/InputQuantity.js":"src/components/form/InputQuantity.js","./Order.js":"src/module/Order/Order.js"}],"src/module/Order/OrderTableExtras.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Table2 = _interopRequireDefault(require("../../components/Table.js"));
var _Button = _interopRequireDefault(require("../../components/buttons/Button.js"));
var _ButtonDelete = _interopRequireDefault(require("../../components/buttons/ButtonDelete.js"));
var _InputQuantity = _interopRequireDefault(require("../../components/form/InputQuantity.js"));
var _Order = _interopRequireDefault(require("./Order.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var OrderTableExtras = /*#__PURE__*/function (_Table) {
  function OrderTableExtras() {
    var _this;
    _classCallCheck(this, OrderTableExtras);
    _this = _callSuper(this, OrderTableExtras, ['order']);
    _this.thead(['#', 'Наименование', 'Кол-во', 'Цена, руб.', '#']);
    return _this;
  }
  _inherits(OrderTableExtras, _Table);
  return _createClass(OrderTableExtras, [{
    key: "setRowsFromCart",
    value: function setRowsFromCart(items) {
      var _this2 = this;
      this.clear();
      items.forEach(function (item, index) {
        item.index = index + 1;
        _this2.addRow(item.id, _this2.createRow(item));
      });
      _get(_getPrototypeOf(OrderTableExtras.prototype), "update", this).call(this);
    }
  }, {
    key: "createRow",
    value: function createRow(item) {
      var deleteButton = new _ButtonDelete.default();
      var quantityInput = new _InputQuantity.default('input-qty', 1, 99).setValue(item.quantity);
      deleteButton.on('click', function () {
        _Order.default.deleteExtras(item.id);
      });
      quantityInput.on('change', function () {
        item.quantity = quantityInput.getValue();
        _Order.default.setExtrasItem(item.id, item);
      });
      return [item.index, item.name, quantityInput.render(), item.price + ' ₽', deleteButton.render()];
    }

    /**
     * Функция отрабатывающая на изменение данных в заказе
     */
  }, {
    key: "update",
    value: function update(order) {
      this.setRowsFromCart(order.getExtras());
    }
  }]);
}(_Table2.default);
var _default = exports.default = new OrderTableExtras();
},{"../../components/Table.js":"src/components/Table.js","../../components/buttons/Button.js":"src/components/buttons/Button.js","../../components/buttons/ButtonDelete.js":"src/components/buttons/ButtonDelete.js","../../components/form/InputQuantity.js":"src/components/form/InputQuantity.js","./Order.js":"src/module/Order/Order.js"}],"src/components/form/InputPhone.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var InputPhone = exports.default = /*#__PURE__*/function (_Input) {
  function InputPhone(key) {
    var _this;
    _classCallCheck(this, InputPhone);
    _this = _callSuper(this, InputPhone, [key]);
    _this.$element.type = 'tel';
    _this.$element.classList.add('form-control', 'has-validation');
    // this.on('keyup', () => {
    //     setTimeout(() => {
    //         this.setPhoneMask()
    //     }, 300)
    // })

    _this.on('focus', _this.setPhoneMask);
    _this.on('keyup', _this.setPhoneMask);
    _this.on('blur', _this.validate);
    return _this;
  }
  _inherits(InputPhone, _Input);
  return _createClass(InputPhone, [{
    key: "setPhoneMask",
    value: function setPhoneMask() {
      var value = this.getValueNumbers();

      // Define the different parts of the phone number
      var countryCode = '+7';
      var firstThreeDigits = "(".concat(value.substring(1, 4), ")");
      var nextThreeDigits = value.substring(4, 7);
      var lastFourDigits = value.substring(7, 11);
      this.setValue("".concat(countryCode, " ").concat(firstThreeDigits, " ").concat(nextThreeDigits).concat(lastFourDigits));
    }
  }, {
    key: "getValueNumbers",
    value: function getValueNumbers() {
      return this.getValue().replace(/\D/g, '');
    }
  }, {
    key: "validate",
    value: function validate() {
      this.setValid(true);
      if (this.getValueNumbers().length < 11) {
        this.setValue('').setValid(false);
      }
      return this;
    }
  }]);
}(_Input2.default);
},{"./Input.js":"src/components/form/Input.js"}],"src/components/form/InputCount.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Input2 = _interopRequireDefault(require("./Input.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var InputCount = exports.default = /*#__PURE__*/function (_Input) {
  function InputCount(key, min, max, step) {
    var _this;
    _classCallCheck(this, InputCount);
    _this = _callSuper(this, InputCount, [key]);
    _defineProperty(_this, "min", null);
    _defineProperty(_this, "max", null);
    _defineProperty(_this, "step", null);
    _defineProperty(_this, "lang", 'en-US');
    _this.$element.type = 'value';
    _this.$element.className = 'form-control';
    _this.setMin(min);
    _this.setMax(max);
    _this.setStep(step);
    _this.setLang(_this.lang);
    _this.on('change', _this.validate.bind(_this));
    return _this;
  }
  _inherits(InputCount, _Input);
  return _createClass(InputCount, [{
    key: "getValue",
    value: function getValue() {
      return parseFloat(this.$element.value.toString());
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      if (value !== undefined) {
        var val = parseFloat(value);
        if (val < 0) {
          val = 0;
        }
        if ((this.min === null || val >= this.min) && (this.max === null || val <= this.max)) {
          this.$element.value = val.toString();
        }
      }
      return this;
    }
  }, {
    key: "setLimits",
    value: function setLimits(min, max) {
      this.setMin(min).setMax(max);
      return this;
    }
  }, {
    key: "setMin",
    value: function setMin(value) {
      if (value !== undefined) {
        this.min = parseFloat(value);
        this.$element.min = value.toString();
      }
      return this;
    }
  }, {
    key: "setMax",
    value: function setMax(value) {
      if (value !== undefined) {
        this.max = parseFloat(value);
        this.$element.max = value.toString();
      }
      return this;
    }
  }, {
    key: "setStep",
    value: function setStep(value) {
      if (value !== undefined) {
        this.step = parseFloat(value);
        this.$element.step = value;
      }
      return this;
    }
  }, {
    key: "setUnit",
    value: function setUnit(value) {
      if (value !== undefined) this.$label.append(' (' + value + ')');
      return this;
    }
  }, {
    key: "setLang",
    value: function setLang() {
      var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en-US';
      this.lang = lang;
      this.$element.lang = lang;
      return this;
    }
  }, {
    key: "isNumber",
    value: function isNumber(value) {
      return typeof value === 'number';
    }
  }, {
    key: "validate",
    value: function validate() {
      var value = this.getValue();
      if (isNaN(value) && this.min !== null) this.setValue(this.min.toString());
      if (value < 0) {
        this.setValue('0');
      } else if (this.min !== null && value < this.min) {
        this.setValue(this.min.toString());
      } else if (this.max !== null && value > this.max) {
        this.setValue(this.max.toString());
      }
      return this;
    }
  }]);
}(_Input2.default);
},{"./Input.js":"src/components/form/Input.js"}],"src/module/Order/OrderForm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _User = _interopRequireDefault(require("../../user/User.js"));
var _Order = _interopRequireDefault(require("./Order.js"));
var _Form2 = _interopRequireDefault(require("../../components/form/Form.js"));
var _Select = _interopRequireDefault(require("../../components/form/Select.js"));
var _InputText = _interopRequireDefault(require("../../components/form/InputText.js"));
var _InputQuantity = _interopRequireDefault(require("../../components/form/InputQuantity.js"));
var _InputPhone = _interopRequireDefault(require("../../components/form/InputPhone.js"));
var _Radio = _interopRequireDefault(require("../../components/form/Radio.js"));
var _Textarea = _interopRequireDefault(require("../../components/form/Textarea.js"));
var _InputNumber = _interopRequireDefault(require("../../components/form/InputNumber.js"));
var _InputCount = _interopRequireDefault(require("../../components/form/InputCount.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var OrderForm = /*#__PURE__*/function (_Form) {
  function OrderForm() {
    var _this;
    _classCallCheck(this, OrderForm);
    _this = _callSuper(this, OrderForm, ['OrderForm']);
    _this.addCSSClass('form-order');

    // Добавляем поля в форму согласно ролям пользователей: монтажник или диллер
    switch (_User.default.getRole()) {
      case 'employee':
        /*this.addField(this.inputShipment());*/
        /*this.addField(this.inputDeliveryAddress());*/
        _this.addField(_this.inputDeliveryDistance());
        _this.addField(_this.inputDeliveryCustom());
        _this.addField(_this.inputDeliveryCdek());
        /*this.addField(this.inputCustomerName());*/
        /*this.addField(this.inputCustomerPhone());*/
        /*this.addField(this.inputCustomerPickup());*/
        _this.addField(_this.inputBeznal());
        _this.addField(_this.inputNdc());
        _this.addField(_this.inputCdek());
        _this.addField(_this.inputDiscount());
        _this.addField(_this.inputComment());
        _this.addField(_this.inputDealID());
        break;
      case 'dealer':
        _this.addField(_this.inputShipment());
        _this.addField(_this.inputComment());
        break;
    }
    return _this;
  }

  /**
   * Функции отрабатывающие на изменение данных в заказе
   */
  // слушаетль изменений в заказе
  _inherits(OrderForm, _Form);
  return _createClass(OrderForm, [{
    key: "update",
    value: function update(order) {
      this.updateDeliveryDistanceInput(order);
      this.updateCustomerPickupInput(order);
      this.updateDeliveryAddressInput(order);
    }

    // Если есть монтаж в сетках в заказе то всегда показывается расстояние от мкад
    // Если монтажа нет то остается поле самовывоз и расстояние от 
    // мкад показывается уже в зависимости от самовывоза
  }, {
    key: "updateDeliveryDistanceInput",
    value: function updateDeliveryDistanceInput(order) {
      var input = this.getInput('delivery_distance');
      if (input) {
        input.setValue(order.deliveryDistance).setDisabled(false);
        if (order.hasPickup() && !order.hasMontage()) {
          input.setDisabled(true);
        } else {
          input.setDisabled(false);
        }
      }
    }

    // Если есть монтаж, то пропадает самовывоз из формы заказа
  }, {
    key: "updateCustomerPickupInput",
    value: function updateCustomerPickupInput(order) {
      var input = this.getInput('customer_pickup');
      if (input) input.setValue(order.hasPickup() ? 'on' : 'off').setDisabled(order.hasMontage());
    }

    // Если самовывоз установлен в значение "да" то пропадает поле адрес доставки
  }, {
    key: "updateDeliveryAddressInput",
    value: function updateDeliveryAddressInput(order) {
      var input = this.getInput('delivery_address');
      if (input) input.setDisabled(order.hasPickup());
    }

    /**
     * Основные поля формы
     */
    // Расстояние от МКАД(км):
  }, {
    key: "inputDeliveryDistance",
    value: function inputDeliveryDistance() {
      var input = new _InputQuantity.default('delivery_distance', 0, 9999, 1);
      input.setLabel('Расстояние от МКАД (км.)');
      input.setDefault('0');
      input.on('change', function () {
        _Order.default.setDeliveryDistance(this.getValue());
      });
      this.addInput(input);
      return input;
    }

    //Доставка + спец.транспорт
  }, {
    key: "inputDeliveryCustom",
    value: function inputDeliveryCustom() {
      var input = new _InputCount.default('delivery_custom', 0);
      input.setLabel('Доставка cпецтранспорт');
      input.setDefault('0');
      input.on('change', function () {
        _Order.default.setDeliveryCustom(this.getValue());
      });
      this.addInput(input);
      return input;
    }
  }, {
    key: "inputDeliveryCdek",
    value: function inputDeliveryCdek() {
      var input = new _InputCount.default('delivery_cdek', 0);
      input.setLabel('Тариф отправкой СДЭК');
      input.setDefault('0');
      input.on('change', function () {
        _Order.default.setDeliveryCdek(this.getValue());
      });
      this.addInput(input);
      return input;
    }

    // Самовывоз
  }, {
    key: "inputCustomerPickup",
    value: function inputCustomerPickup() {
      var input = new _Select.default('customer_pickup');
      input.setLabel('Самовывоз');
      input.addOption('off', 'Нет', true);
      input.addOption('on', 'Да');
      input.on('change', function () {
        _Order.default.setPickup(input.getValue() === 'on');
      });
      this.addInput(input);
      return input;
    }

    // Пункт отгрузки
  }, {
    key: "inputShipment",
    value: function inputShipment() {
      var input = new _Select.default('shipment');
      input.setLabel('Пункт отгрузки');
      input.addOption('Березовая роща д.1', 'Березовая роща д.1', true);
      this.addInput(input);
      return input;
    }

    // Адрес доставки
  }, {
    key: "inputDeliveryAddress",
    value: function inputDeliveryAddress() {
      var input = new _InputText.default('delivery_address');
      input.setLabel('Адрес доставки');
      this.addInput(input);
      return input;
    }

    // Имя:
  }, {
    key: "inputCustomerName",
    value: function inputCustomerName() {
      var input = new _InputText.default('customer_name');
      input.setLabel('Имя');
      this.addInput(input);
      return input;
    }

    // Телефон:
  }, {
    key: "inputCustomerPhone",
    value: function inputCustomerPhone() {
      var input = new _InputPhone.default('customer_phone');
      input.setLabel('Телефон');
      this.addInput(input);
      return input;
    }

    // ИД Сделки:
  }, {
    key: "inputDealID",
    value: function inputDealID() {
      var input = new _InputText.default('deal_id');
      input.setLabel('Идентификатор сделки');
      this.addInput(input);
      return input;
    }

    // Скидка:
  }, {
    key: "inputDiscount",
    value: function inputDiscount() {
      var input = new _Radio.default('discount');
      input.setLabel('Скидка');
      input.addItem('0', '0%', true);
      input.addItem('5', '5%');
      input.addItem('7', '7%');
      input.addItem('10', '10% ');
      input.addItem('15', '15%');
      input.setDefault('0');
      input.on('change', function () {
        _Order.default.setDiscount(this.getValue());
      });
      this.addInput(input);
      return input;
    }

    // Доставка до сдек
  }, {
    key: "inputCdek",
    value: function inputCdek() {
      var input = new _Radio.default('cdek');
      input.setLabel('Доставка до СДЭК (+1700р)');
      input.addItem('0', 'Нет', true); // По умолчанию нет доставки
      input.addItem('1700', 'Да'); // Стоимость доставки при выборе опции

      input.on('change', function () {
        _Order.default.setCdek(this.getValue()); // Передаем значение радиокнопки в setCdek
      });
      this.addInput(input);
      return input;
    }

    // Безнал:
  }, {
    key: "inputBeznal",
    value: function inputBeznal() {
      var input = new _Radio.default('beznal');
      input.setLabel('Безнал (Без НДС)');
      input.addItem('0', 'Нет', true);
      input.addItem('10', 'Да');
      input.setDefault('0');
      input.on('change', function () {
        _Order.default.setBeznal(this.getValue());
      });
      this.addInput(input);
      return input;
    }

    // с НДС:
  }, {
    key: "inputNdc",
    value: function inputNdc() {
      var input = new _Radio.default('ndc');
      input.setLabel('Безнал c (НДС 20%)');
      input.addItem('0', 'Нет', true);
      input.addItem('20', 'Да');
      input.setDefault('0');
      input.on('change', function () {
        _Order.default.setNdc(this.getValue());
      });
      this.addInput(input);
      return input;
    }

    // Комментарий к заказу:
  }, {
    key: "inputComment",
    value: function inputComment() {
      var input = new _Textarea.default('comment');
      input.setLabel('Комментарий к заказу');
      input.setRequired(true);
      this.addInput(input);
      return input;
    }

    /**
     * Валидатор полей формы
     */
  }, {
    key: "validate",
    value: function validate() {
      var _iterator = _createForOfIteratorHelper(this.getInputs().values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var input = _step.value;
          switch (input.key) {
            case 'comment':
              if (!input.isFilled()) return false;
              break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return true;
    }
  }]);
}(_Form2.default);
var _default = exports.default = new OrderForm();
},{"../../user/User.js":"src/user/User.js","./Order.js":"src/module/Order/Order.js","../../components/form/Form.js":"src/components/form/Form.js","../../components/form/Select.js":"src/components/form/Select.js","../../components/form/InputText.js":"src/components/form/InputText.js","../../components/form/InputQuantity.js":"src/components/form/InputQuantity.js","../../components/form/InputPhone.js":"src/components/form/InputPhone.js","../../components/form/Radio.js":"src/components/form/Radio.js","../../components/form/Textarea.js":"src/components/form/Textarea.js","../../components/form/InputNumber.js":"src/components/form/InputNumber.js","../../components/form/InputCount.js":"src/components/form/InputCount.js"}],"src/api.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchOrderToBitrix24 = fetchOrderToBitrix24;
exports.fetchUserData = fetchUserData;
var _config = _interopRequireDefault(require("./config.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function fetchUserData() {
  return _fetchUserData.apply(this, arguments);
} // Отправка заказа в битрикс24
function _fetchUserData() {
  _fetchUserData = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var apiUrl;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiUrl = window.location.href + 'userdata.json';
          _context.next = 3;
          return fetch(apiUrl).then(function (response) {
            return response.json();
          });
        case 3:
          return _context.abrupt("return", _context.sent);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _fetchUserData.apply(this, arguments);
}
function fetchOrderToBitrix24(_x) {
  return _fetchOrderToBitrix.apply(this, arguments);
}
function _fetchOrderToBitrix() {
  _fetchOrderToBitrix = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(data) {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (!_config.default.webhooks.bitrix24) {
            _context2.next = 7;
            break;
          }
          _context2.next = 3;
          return fetch(_config.default.webhooks.bitrix24, {
            method: 'POST',
            // mode: "no-cors",  
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
              'Accept': 'application/json'
            },
            body: JSON.stringify(data)
          });
        case 3:
          response = _context2.sent;
          _context2.next = 6;
          return response.json();
        case 6:
          return _context2.abrupt("return", _context2.sent);
        case 7:
          return _context2.abrupt("return", false);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _fetchOrderToBitrix.apply(this, arguments);
}
},{"./config.js":"src/config.js"}],"src/dto/DTOExtras.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var DTOExtras = exports.default = /*#__PURE__*/_createClass(function DTOExtras() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _classCallCheck(this, DTOExtras);
  this.id = data.id || new Date().getTime();
  this.name = data.name || '';
  this.quantity = data.quantity || 1;
  this.price = data.price || 0;
});
},{}],"src/dto/DTOOrderBitrix.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _DTOExtras = _interopRequireDefault(require("./DTOExtras.js"));
var _DTOProduct = _interopRequireDefault(require("./DTOProduct.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var DTOOrderBitrix = exports.default = /*#__PURE__*/_createClass(function DTOOrderBitrix() {
  var _this = this,
    _data$kpi,
    _data$kpi2;
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  _classCallCheck(this, DTOOrderBitrix);
  // Информация о заказе
  this.shipment = data.shipment || ''; // Пункт отгрузки
  this.delivery_address = data.delivery_address || ''; // Адрес доставки
  this.delivery_distance = data.delivery_distance || 0; // Расстояние от МКАД, км
  this.customer_name = data.customer_name || ''; // Имя
  this.customer_phone = data.customer_phone || ''; // Телефон
  this.pickup = data.pickup || false; // Самовывоз (нет/да)
  this.comment = data.comment || ''; // Комментарий                     
  this.discount = data.discount || 0; // % Скидки        
  this.deal_id = data.deal_id || ''; // ID Сделки    

  // Товары
  this.products = [];
  if (data.products && Array.isArray(data.products)) {
    data.products.forEach(function (product) {
      _this.products.push(new _DTOProduct.default(product));
    });
  }

  // Комплектующие
  this.extras = [];
  if (data.extras && Array.isArray(data.extras)) {
    data.extras.forEach(function (extras) {
      _this.extras.push(new _DTOExtras.default(extras));
    });
  }

  // Суммы
  this.total_kpi = {
    installer: ((_data$kpi = data.kpi) === null || _data$kpi === void 0 ? void 0 : _data$kpi.installer) || 0,
    assembler: ((_data$kpi2 = data.kpi) === null || _data$kpi2 === void 0 ? void 0 : _data$kpi2.assembler) || 0
  };
  this.total_price = data.totalPrice || 0;
}); // this.ral = data.ral || false;
// this.customer_pickup = data.customer_pickup;
// this.userRole = 'employee';
// this.totalKPIAssembler = data.kpi?.assembler || 0; 
// this.totalKPIInstaller = data.kpi?.installer || 0;
},{"./DTOExtras.js":"src/dto/DTOExtras.js","./DTOProduct.js":"src/dto/DTOProduct.js"}],"src/module/Order/OrderTotal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = require("../../api.js");
var _Button = _interopRequireDefault(require("../../components/buttons/Button.js"));
var _Order = _interopRequireDefault(require("./Order.js"));
var _OrderForm = _interopRequireDefault(require("./OrderForm.js"));
var _DTOOrderBitrix = _interopRequireDefault(require("../../dto/DTOOrderBitrix.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t.return || t.return(); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OrderTotal = /*#__PURE__*/function () {
  function OrderTotal() {
    _classCallCheck(this, OrderTotal);
    this.$wrapper = document.createElement('div');
    this.$buttonOrder = new _Button.default('button_order').setText('Заказать').setIcon('icon-loader');
    this.$buttonSave = new _Button.default('button_save').setText('Сохранить рассчет');
    this.$actions = document.createElement('div');
    this.$total = document.createElement('div');
    this.$wrapper.className = 'container';
    this.$actions.className = 'order-actions';
    this.$total.className = 'order-total';
    this.$buttonOrder.setClass('button button-order');
    this.$buttonSave.setClass('button button-save');
    this.$actions.append(this.$buttonOrder.render());
    this.$wrapper.append(this.$total, this.$actions);
    this.setButtonOrderActions();
  }
  return _createClass(OrderTotal, [{
    key: "setButtonOrderActions",
    value: function setButtonOrderActions() {
      var _this = this;
      this.$buttonOrder.on('click', function () {
        if (_OrderForm.default.validate()) {
          _this.sendOrderToBitrix();
        }
      });
    }

    /**
     * Отправка заказа в CRM Bitrix24
     */
  }, {
    key: "sendOrderToBitrix",
    value: function sendOrderToBitrix() {
      var _this2 = this;
      // Loader start ...
      this.$buttonOrder.addClass('loading').setDisabled(true);
      var OrderFormData = {};
      var _iterator = _createForOfIteratorHelper(_OrderForm.default.getFormData().values()),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var inputData = _step.value;
          OrderFormData[inputData.key] = inputData.value || '';
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var request = new _DTOOrderBitrix.default(_objectSpread(_objectSpread({}, _Order.default), OrderFormData));
      (0, _api.fetchOrderToBitrix24)(request).then(function (response) {
        // Loader end.
        _this2.$buttonOrder.removeClass('loading').setDisabled(false);
        if (response.status === 'ok') {
          if (confirm("\u0417\u0430\u043A\u0430\u0437 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D. \u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u043A\u0430\u0437\u0430?")) {
            _Order.default.clear(); // Очистка данных заказа
            _OrderForm.default.reset(); // Очистка формы заказа на значения по умолчанию
          }
        } else {
          console.log(response);
        }
      }).catch(function (error) {
        return console.log(error);
      });
    }

    /**
     * Функция отрабатывающая на изменение данных в заказе
     */
  }, {
    key: "update",
    value: function update(order) {
      var summary = "<ul class=\"order-total-debug\">";
      summary += "<li>\u0421\u0443\u043C\u043C\u0430: <span>".concat(order.totalPrice, "</span> \u20BD</li>");
      /*
      if (order.getUserRole() === 'employee') {
          summary += `<li>KPI.Монт: <span>${order.kpi.installer}</span> ₽ </li>`;
      }
      summary += `</ul>`;
      */
      // console.log(order.kpi);

      this.$total.innerHTML = summary;
    }
  }, {
    key: "render",
    value: function render() {
      // this.$actions.append(this.$buttonSave.render(), this.$buttonOrder.render());
      return this.$wrapper;
    }
  }]);
}();
var _default = exports.default = new OrderTotal();
},{"../../api.js":"src/api.js","../../components/buttons/Button.js":"src/components/buttons/Button.js","./Order.js":"src/module/Order/Order.js","./OrderForm.js":"src/module/Order/OrderForm.js","../../dto/DTOOrderBitrix.js":"src/dto/DTOOrderBitrix.js"}],"src/module/Order/components/OrderToggler.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var OrderToggler = /*#__PURE__*/function () {
  function OrderToggler(wrapper) {
    _classCallCheck(this, OrderToggler);
    this.wrapper = wrapper;
  }

  /**
   * Функция отрабатывающая на изменение данных в заказе
   */
  return _createClass(OrderToggler, [{
    key: "update",
    value: function update(order) {
      !order.isEmpty() ? this.wrapper.classList.remove('is-hidden') : this.wrapper.classList.add('is-hidden');
    }
  }]);
}();
var _default = exports.default = OrderToggler;
},{}],"src/module/Order/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
var _Order = _interopRequireDefault(require("./Order.js"));
var _ButtonClear = _interopRequireDefault(require("./components/ButtonClear.js"));
var _OrderTableProducts = _interopRequireDefault(require("./OrderTableProducts.js"));
var _OrderTableExtras = _interopRequireDefault(require("./OrderTableExtras.js"));
var _OrderForm = _interopRequireDefault(require("./OrderForm.js"));
var _OrderTotal = _interopRequireDefault(require("./OrderTotal.js"));
var _OrderToggler = _interopRequireDefault(require("./components/OrderToggler.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var $wrapper = document.createElement('div');
$wrapper.className = 'module-container is-hidden';

// Регистрация наблюдателей для компонентов модуля
_Order.default.registerObserver(new _OrderToggler.default($wrapper));
_Order.default.registerObserver(_OrderTableProducts.default);
_Order.default.registerObserver(_OrderTableExtras.default);
_Order.default.registerObserver(_OrderForm.default);
_Order.default.registerObserver(_OrderTotal.default);
_Order.default.update();

/**
 * События модуля
 */
_ButtonClear.default.on('click', function () {
  _Order.default.clear(); // Очистка данных заказа
  _OrderForm.default.reset(); // Очистка формы заказа на значения по умолчанию
});
function render() {
  $wrapper.innerHTML = "\n        <div class=\"module-order-table\">\n            <div class=\"container\">\n                <div class=\"module-header\" id=\"OrderHeader\">\n                    <h2>\u0412\u0430\u0448 \u0437\u0430\u043A\u0430\u0437</h2>\n                </div>\n                <div class=\"table-responsive\" id=\"OrderTableProducts\"></div>\n                <div class=\"table-responsive\" id=\"OrderTableExtras\"></div>\n            </div>\n        </div>\n        <div class=\"module-order-form\">\n            <div class=\"container\">\n                <div class=\"module-header\">\n                    <h2>\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u0430\u044F \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044F</h2>\n                </div>\n                <div id=\"OrderForm\"></div>\n            </div>\n        </div>\n        <div class=\"module-order-total fixed\" id=\"OrderTotal\"></div> \n    ";
  $wrapper.querySelector('#OrderHeader').append(_ButtonClear.default.render());
  $wrapper.querySelector('#OrderTableProducts').append(_OrderTableProducts.default.render());
  $wrapper.querySelector('#OrderTableExtras').append(_OrderTableExtras.default.render());
  $wrapper.querySelector('#OrderForm').append(_OrderForm.default.render());
  $wrapper.querySelector('#OrderTotal').append(_OrderTotal.default.render());
  return $wrapper;
}
},{"./Order.js":"src/module/Order/Order.js","./components/ButtonClear.js":"src/module/Order/components/ButtonClear.js","./OrderTableProducts.js":"src/module/Order/OrderTableProducts.js","./OrderTableExtras.js":"src/module/Order/OrderTableExtras.js","./OrderForm.js":"src/module/Order/OrderForm.js","./OrderTotal.js":"src/module/Order/OrderTotal.js","./components/OrderToggler.js":"src/module/Order/components/OrderToggler.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _User = _interopRequireDefault(require("./user/User.js"));
var ModuleProduct = _interopRequireWildcard(require("./module/Product/index.js"));
var ModuleExtras = _interopRequireWildcard(require("./module/Extras/index.js"));
var ModuleOrder = _interopRequireWildcard(require("./module/Order/index.js"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// App load
document.addEventListener('DOMContentLoaded', function () {
  createCalculator();
});
function createCalculator() {
  var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'app';
  var $app = document.getElementById(container);
  $app.innerHTML = "\n\n        <div class=\"container\">\n                <div class=\"content\">\n                 <div class=\"logo\"></div>\n                 <div class=\"logo-text\">\u0420\u0430\u0441\u0447\u0435\u0442 \u0441\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u0430</div>\n        </div>\n            <ul class=\"nav nav-tabs mb-3\">\n                <li class=\"nav-item\">\n                    <button class=\"nav-link active\" data-bs-toggle=\"tab\" data-bs-target=\"#ModuleProduct\" type=\"button\">\u041C\u043E\u0441\u043A\u0438\u0442\u043D\u044B\u0435 \u0441\u0435\u0442\u043A\u0438</button>\n                </li>\n                <li class=\"nav-item\">\n                    <button class=\"nav-link\" data-bs-toggle=\"tab\" data-bs-target=\"#ModuleExtras\" type=\"button\">\u041A\u043E\u043C\u043F\u043B\u0435\u043A\u0442\u0443\u044E\u0449\u0438\u0435</button>\n                </li>\n            </ul>\n        </div>\n        <div class=\"tab-content\">\n            <div class=\"tab-pane fade show active\" id=\"ModuleProduct\"></div>\n            <div class=\"tab-pane fade\" id=\"ModuleExtras\"></div>   \n        </div>\n        <div class=\"module-order\" id=\"ModuleOrder\"></div>\n    ";
  $app.querySelector('#ModuleProduct').append(ModuleProduct.render());
  $app.querySelector('#ModuleExtras').append(ModuleExtras.render());
  $app.querySelector('#ModuleOrder').append(ModuleOrder.render());
}
},{"./user/User.js":"src/user/User.js","./module/Product/index.js":"src/module/Product/index.js","./module/Extras/index.js":"src/module/Extras/index.js","./module/Order/index.js":"src/module/Order/index.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60733" + '/');
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
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map