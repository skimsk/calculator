export default [
    // Рамочная 25мм
    {
        key: 'Ramochnaya25',
        title: 'Рамочная 25мм',
        // selected: true,
        form: {
            name: 'Ramochnaya25',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'antracite', label: 'Антрацит (7016)'},
                                {value: 'black', label: 'Черный (9005)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '60',
                            max: '2000',
                            step: '1',
                            unit: 'мм.',
                            required: true,


                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '60',
                            max: '3000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'fastings',
                            type: 'radio',
                            label: 'Тип крепления',
                            items: [
                                {value: 'z-krepleniya-m', label: 'Z-образное (металл)'},
                                {value: 'z-krepleniya-p', label: 'Z-образное (пластик)', checked: true},
                                {value: 'vnutrennie-zacepi', label: 'Внутренние зацепы'},
                                {value: 'plungery', label: 'Плунжеры'},
                                {value: 'bezkrepleniya', label: 'Без креплений'},
                            ]
                        },
                        {
                            key: 'komplekt',
                            type: 'radio',
                            label: 'Комплект креплений',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'half', label: '1,5'},
                                {value: 'two', label: '2'},
                            ]
                        },
                        {
                            key: 'corners',
                            type: 'radio',
                            label: 'Углы',
                            items: [
                                {value: 'plastikovie', label: 'Пластиковые'},
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },
                        {
                            key: 'handles',
                            type: 'radio',
                            label: 'Ручки',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические'},
                                {value: 'silikonovie', label: 'Силиконовые', checked: true},
                                {value: 'bezruchek', label: 'Без ручек'},
                            ]
                        },
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    // Вставная VSN
    {
        key: 'VstavnayaVSN',
        title: 'Вставная «VSN» ',
        // selected: true,
        form: {
            name: 'VstavnayaVSN',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'antracite', label: 'Антрацит (7016)'},
                                {value: 'black', label: 'Черный (9005)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '1600',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '200',
                            max: '3000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'komplekt',
                            type: 'radio',
                            label: 'Комплект креплений',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'half', label: '1,5'},
                                {value: 'two', label: '2'},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Кол-во перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },   
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    // Рамочная "AlumSN"
    {
        key: 'RamochnayaAlumSN',
        title: 'Рамочная «AlumSN»',
        // selected: true,
        form: {
            name: 'RamochnayaAlumSN',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'antracite', label: 'Антрацит (7016)'},
                                {value: 'black', label: 'Черный (9005)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            
                            min: '200',
                            max: '1600',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '300',
                            max: '3500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'komplekt',
                            type: 'radio',
                            label: 'Комплект креплений',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'half', label: '1,5'},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Кол-во перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },  
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    // Раздвижная «Проведал»
    {
        key: 'RazdvignayaProvedal',
        title: 'Раздвижная «PROVEDAL»',
        // selected: true,
        form: {
            name: 'RazdvignayaProvedal',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '1600',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '200',
                            max: '2500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'rail',
                            type: 'number',
                            name: 'rail',
                            label: 'Длинна рельс (направляющих)',
                            value: '0',
                            min: '0',
                            max: '6000',
                            step: '1',
                            unit: 'мм.',
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'rails',
                            type: 'radio',
                            label: 'Кол-во рельс',
                            items: [
                                {value: 'two', label: '2', checked: true},
                                {value: 'one', label: '1'},
                                {value: 'norels', label: 'без рельс'},
                            ]
                        },  
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Кол-во перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },  
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка'
                },
            ]
        }
    },
    // Дверная 42мм
    {
        key: 'Dvernaya42',
        title: 'Дверная 42мм',
        // selected: true,
        form: {
            name: 'Dvernaya42',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'antracite', label: 'Антрацит (7016)'},
                                {value: 'black', label: 'Черный (9005)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '2000',
                            step: '1',
                            unit: 'мм.',
                            required: true,


                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '200',
                            max: '3000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'hinges',
                            type: 'radio',
                            label: 'Петли',
                            items: [
                                {value: 'bez-dovodchika', label: 'Без доводчика', checked: true},
                                {value: 's-dovodchikom', label: 'С доводчиком'},
                                {value: 'usilenye', label: 'Усиленные'}
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Кол-во перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },
                        {
                            key: 'latche',
                            type: 'radio',
                            label: 'Кол-во шпингалетов',
                            items: [
                                {value: 'null', label: '0', checked: true},
                                {value: 'onelatche', label: '1'},
                                {value: 'twolatche', label: '2'}
                            ]
                        },
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },
    // Плиссе22 (Италия)
    {
        key: 'PlisseItalia',
        title: 'PLISSE22 (Италия)',
        // selected: true,
        form: {
            name: 'PlisseItalia',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        }
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass" (Италия)', selected: true}, 
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '400',
                            max: '3000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '400',
                            max: '3000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'opening',
                    type: 'radio',
                    label: 'Открывание',
                    items: [
                        { value: 'odnostoronee', label: 'Односторонние', checked: true },
                        { value: 'vstrechnoe', label: 'Встречное' },
                        { value: 'reversivnoe', label: 'Реверсивное' },
                        { value: 'verticalnoe', label: 'Вертикальное' },
                    ]
                },
                {
                    key: 'doorstep',
                    type: 'radio',
                    label: 'Порог',
                    items: [
                        {value: 'obichniy29mm', label: 'Обычный 29мм', checked: true},
                        {value: 'nizkiy7mm', label: 'Низкий 7мм'},
                    ]
                },
                {
                    key: 'montageplisse',
                    type: 'radio',
                    label: 'Тип монтажа',
                    items: [
                        {value: 'sobran', label: 'В собранном виде', checked: true},
                        {value: 'razobran', label: 'В разобранном виде'},
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },
    {
        key: 'RulonnayaItalia',
        title: 'Роллетная KLIP40 (Италия)',
        // selected: true,
        form: {
            name: 'RulonnayaItalia',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglassrollet', label: 'Стандарт "Fiberglass" (Италия)', selected: true},
                                {value: 'polltexrollet', label: 'Антикошка "Pet Screen" (Италия)'},
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '1600',
                            step: '1',
                            unit: 'мм.',
                            required: true,


                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '200',
                            max: '2500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    // Рамочная OPTIMA
    {
        key: 'Dvernaya52',
        title: 'Рамочная OPTIMA',
        // selected: true,
        form: {
            name: 'Dvernaya52',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'antracite', label: 'Антрацит (7016)'},
                                {value: 'black', label: 'Черный (9005)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '300',
                            max: '2000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '300',
                            max: '3000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'komplekt',
                            type: 'radio',
                            label: 'Комплект креплений',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'half', label: '1,5'},
                                {value: 'two', label: '2'},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    // Рамочная 32мм
    {
        key: 'Ramochnaya32',
        title: 'Рамочная 32мм',
        // selected: true,
        form: {
            name: 'Ramochnaya32',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '2000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '300',
                            max: '3500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'fastings',
                            type: 'radio',
                            label: 'Тип крепления',
                            items: [
                                {value: 'z-krepleniya-m', label: 'Z-образное (металл)', checked: true},
                                {value: 'bezkrepleniya', label: 'Без креплений'},
                            ]
                        },
                        {
                            key: 'komplekt',
                            type: 'radio',
                            label: 'Комплект креплений',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'half', label: '1,5'},
                                {value: 'two', label: '2'},
                            ]
                        },
                        {
                            key: 'corners',
                            type: 'radio',
                            label: 'Углы',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },
                        {
                            key: 'handles',
                            type: 'radio',
                            label: 'Ручки',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                            ]
                        },
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    {
        key: 'PlisseRussia',
        title: 'Плиссе DMF',
        // selected: true,
        form: {
            name: 'PlisseRussia',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        }
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '400',
                            max: '3000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '400',
                            max: '3000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'opening',
                    type: 'radio',
                    label: 'Открывание',
                    items: [
                        { value: 'odnostoronee', label: 'Односторонние', checked: true },
                        { value: 'vstrechnoe', label: 'Встречное' },
                        { value: 'reversivnoe', label: 'Реверсивное' },
                        { value: 'verticalnoe', label: 'Вертикальное' },
                    ]
                },
                {
                    key: 'doorstep',
                    type: 'radio',
                    label: 'Порог',
                    items: [
                        {value: 'obichniy29mm', label: 'Обычный 29мм', checked: true},
                        {value: 'nizkiy7mm', label: 'Низкий 7мм'},
                    ]
                },
                {
                    key: 'montageplisse',
                    type: 'radio',
                    label: 'Тип монтажа',
                    items: [
                        {value: 'sobran', label: 'В собранном виде', checked: true},
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    // Трапеция «25мм»
    {
        key: 'TrapeciyaStandart',
        title: 'Трапеция 25мм',
        // selected: true,
        form: {
            name: 'TrapeciyaStandart',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'antracite', label: 'Антрацит (7016)'},
                                {value: 'black', label: 'Черный (9005)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '1600',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота прямоугольной части',
                            value: '',
                            min: '200',
                            max: '2500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height_left',
                            type: 'number',
                            name: 'height_left',
                            label: 'Высота лево',
                            value: '1000',
                            min: '200',
                            max: '2500',
                            step: '1',
                            unit: 'мм.',
                        },
                        {
                            key: 'height_right',
                            type: 'number',
                            name: 'height_right',
                            label: 'Высота право',
                            value: '1000',
                            min: '200',
                            max: '2500',
                            step: '1',
                            unit: 'мм.',
                        },   
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'fastings',
                            type: 'radio',
                            label: 'Тип крепления',
                            items: [
                                {value: 'z-krepleniya-m', label: 'Z-образное (металл)', checked: true},
                                {value: 'z-krepleniya-p', label: 'Z-образное (пластик)'},
                                {value: 'plungery', label: 'Плунжеры'},
                                {value: 'bezkrepleniya', label: 'Без креплений'},
                            ]
                        },
                        {
                            key: 'komplekt',
                            type: 'radio',
                            label: 'Комплект креплений',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'half', label: '1,5'},
                                {value: 'two', label: '2'},
                            ]
                        },
                        {
                            key: 'corners',
                            type: 'radio',
                            label: 'Углы',
                            items: [
                                {value: 'plastikovie', label: 'Пластиковые', checked: true},
                                {value: 'metallicheskie', label: 'Металлические'},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },
                        {
                            key: 'handles',
                            type: 'radio',
                            label: 'Ручки',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                                {value: 'silikonovie', label: 'Силиконовые'},
                            ]
                        },
                        {
                            key: 'plusprice',
                            type: 'radio',
                            items: [
                                {value: 'priceplus', label: '', checked: true},
                            ] 
                        }
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    // Арочная
    {
        key: 'Arochnaya',
        title: 'Арочная 25мм',
        // selected: true,
        form: {
            name: 'Arochnaya',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'antracite', label: 'Антрацит (7016)'},
                                {value: 'black', label: 'Черный (9005)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '1600',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота прямоугольной части',
                            value: '',
                            min: '200',
                            max: '2500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height_rect',
                            type: 'number',
                            name: 'height_rect',
                            label: 'Высота дуги',
                            value: '1000',
                            min: '200',
                            max: '2500',
                            step: '1',
                            unit: 'мм.',
                            // required: true,
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'fastings',
                            type: 'radio',
                            label: 'Тип крепления',
                            items: [
                                {value: 'z-krepleniya-m', label: 'Z-образное (металл)', checked: true},
                                {value: 'z-krepleniya-p', label: 'Z-образное (пластик)'},
                                {value: 'plungery', label: 'Плунжеры'},
                                {value: 'bezkrepleniya', label: 'Без креплений'},
                            ]
                        },
                        {
                            key: 'komplekt',
                            type: 'radio',
                            label: 'Комплект креплений',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'half', label: '1,5'},
                                {value: 'two', label: '2'},
                            ]
                        },
                        {
                            key: 'corners',
                            type: 'radio',
                            label: 'Углы',
                            items: [
                                {value: 'plastikovie', label: 'Пластиковые'},
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                            ]
                        },
                        {
                            key: 'handles',
                            type: 'radio',
                            label: 'Ручки',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                                {value: 'silikonovie', label: 'Силиконовые'},
                            ]
                        },
                        {
                            key: 'plusprice',
                            type: 'radio',
                            items: [
                                {value: 'priceplus', label: '', checked: true},
                            ] 
                        }
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    // Раздвижная "SLIDORS"
    {
        key: 'RulonnayaPolsha',
        title: 'Раздвижная SLIDORS',
        // selected: true,
        form: {
            name: 'RulonnayaPolsha',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},

                            ]
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '1600',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '200',
                            max: '2500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'rail',
                            type: 'number',
                            name: 'rail',
                            label: 'Длинна рельс (направляющих)',
                            value: '0',
                            min: '0',
                            max: '6000',
                            step: '1',
                            unit: 'мм.',
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'rails',
                            type: 'radio',
                            label: 'Кол-во рельс',
                            items: [
                                {value: 'two', label: '2', checked: true},
                                {value: 'one', label: '1'},
                                {value: 'norels', label: 'без рельс'},
                            ]
                        },  
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Кол-во перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },
                        {
                            key: 'plusprice',
                            type: 'radio',
                            items: [
                                {value: 'priceplus', label: '', checked: true},
                            ] 
                        }
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка'
                },
            ]
        }
    },

    //Рамочная в раме Provedal
    {
        key: 'Dvernaya32',
        title: 'Рамочная в раме «PROVEDAL» ',
        // selected: true,
        form: {
            name: 'Dvernaya32',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '1600',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '200',
                            max: '2500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                {
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
 
                        {
                            key: 'peremychka',
                            type: 'radio',
                            label: 'Кол-во перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                                {value: 'krest', label: 'Крестообразная'},
                                {value: 'null', label: 'Без перемычек'},
                            ]
                        },
                        {
                            key: 'plusprice',
                            type: 'radio',
                            items: [
                                {value: 'priceplus', label: '', checked: true},
                            ] 
                        }
                    ]
                },
                {
                    key: 'montage',
                    type: 'select',
                    label: 'Установка'
                },
            ]
        }
    },

    // Перекат
    {
        key: 'Perekat',
        title: 'Перекат',
        // selected: true,
        form: {
            name: 'Perekat',
            fields: [
                {
                    key: 'frame',
                    type: 'group',
                    inputs: [
                        {
                            key: 'frame_color',
                            type: 'select',
                            label: 'Цвет рамки',
                            required: true,
                            items: [
                                {value: 'white', label: 'Белый (9003)', selected: true},
                                {value: 'brown', label: 'Коричневый (8017)'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                    ] 
                },
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт "Fiberglass"', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'antipyl', label: 'Антипыль'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'diamond', label: 'Металлическая "Diamond"'},
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
                                {value: 'metalmesh', label: 'Металлическая сетка 20*20'},
                                {value: 'maxivision', label: 'Ультравью "Maxi vision"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'resplion', label: 'Антибактериальная “Respilon”'}
                            ]
                        },
                        {
                            key: 'canvas_color',
                            type: 'canvas_color',
                            label: 'Цвет полотна',
                        },
                    ] 
                },
                {
                    key: 'size',
                    type: 'group',
                    label: 'Размеры конструкции',
                    inputs: [
                        {
                            key: 'width',
                            type: 'number',
                            name: 'width',
                            label: 'Ширина',
                            value: '',
                            min: '200',
                            max: '2000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        {
                            key: 'height',
                            type: 'number',
                            name: 'height',
                            label: 'Высота',
                            value: '',
                            min: '300',
                            max: '3500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                        
                    ]
                },
                {
                    key: 'remake',
                    type: 'checkbox',
                    label: 'Переделать',
                    items: [
                        {value: 'z-krepleniya-m', label: 'Z-образное (металл)'},
                        {value: 'z-krepleniya-p', label: 'Z-образное (пластик)'},
                        {value: 'vnutrennie-zacepi', label: 'Внутренние зацепы'},
                        {value: 'plungery', label: 'Плунжеры'},
                        {value: 'ugly-metallicheskie', label: 'Металлические углы'},
                        {value: 'ugly-plastikovie', label: 'Пластиковые углы'},
                        {value: 'ruchki-metallicheskie', label: 'Металлические ручки'},
                        {value: 'ruchki-plastikovie', label: 'Пластиковые ручки'},
                        {value: 'fetr', label: 'Фетр'},
                    ]
                },
            ]
        }
    },
]