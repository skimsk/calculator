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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'antracite', label: 'Антрацит'},
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
                                {value: 'antipyl', label: 'Антипыль "Micro Mesh"'},
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
                            key: 'fastings',
                            type: 'radio',
                            label: 'Тип крепления',
                            items: [
                                {value: 'z-krepleniya-m', label: 'Z-образное (металл)', checked: true},
                                {value: 'z-krepleniya-p', label: 'Z-образное (пластик)'},
                                {value: 'vnutrennie-zacepi', label: 'Внутренние зацепы'},
                                {value: 'plungery', label: 'Плунжеры'},
                                {value: 'bezkrepleniya', label: 'Без креплений'},
                            ]
                        },
                        {
                            key: 'komplekt',
                            type: 'select',
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
                                {value: 'metallicheskie', label: 'Металлические'},
                                {value: 'plastikovie', label: 'Пластиковые', checked: true},
                                {value: '45gradusov', label: '45 градусов'},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'select',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
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
        title: 'Вставная VSN',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'antracite', label: 'Антрацит'},
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
                                {value: 'antipyl', label: 'Антипыль "Micro Mesh"'},
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
                            key: 'corners',
                            type: 'radio',
                            label: 'Углы',
                            items: [
                                {value: 'plastikovie', label: 'Пластиковые', checked: true},
                                {value: '45gradusov', label: '45 градусов'},
                            ]
                        },    
                        {
                            key: 'peremychka',
                            type: 'select',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'antracite', label: 'Антрацит'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'antipyl', label: 'Антипыль "Micro Mesh"'},
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
                            type: 'select',
                            label: 'Комплект креплений',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'half', label: '1,5'},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'select',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
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
        title: 'Раздвижная «Проведал»',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'antracite', label: 'Антрацит'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'antipyl', label: 'Антипыль "Micro Mesh"'},
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
                            label: 'Длинна рельсы (направляющие)',
                            value: '0',
                            min: '0',
                            max: '20000',
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
                            key: 'handles',
                            type: 'radio',
                            label: 'Ручки',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические'},
                                {value: 'plastik', label: 'Пластиковые', checked: true},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'select',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'antracite', label: 'Антрацит'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'antipyl', label: 'Антипыль "Micro Mesh"'},
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
                            min: '400',
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
                            min: '400',
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
                                {value: 'metallicheskie', label: 'Без доводчика', checked: true},
                                {value: 's-dovodchikom', label: 'С доводчиком'},
                            ]
                        },
                        {
                            key: 'handles',
                            type: 'radio',
                            label: 'Ручки',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические'},
                                {value: 'plastik', label: 'Пластиковые', checked: true},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'select',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
                            ]
                        },
                        {
                            key: 'latches',
                            type: 'select',
                            label: 'Количество шпингалетов',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
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

    // Плиссе (Италия)
    {
        key: 'PlisseItaly',
        title: 'Плиссе (Италия)',
        // selected: true,
        form: {
            name: 'PlisseItaly',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'ral', label: 'Покраска в RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglassitatly', label: 'Стандарт "Fiberglass" (Италия)', selected: true}, 
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
                    key: 'options',
                    type: 'group',
                    label: 'Опции',
                    inputs: [
                        {
                            key: 'opening',
                            type: 'radio',
                            label: 'Тип закрывания',
                            items: [
                                {value: 'odnostoronee', label: 'Односторонние', checked: true},
                                {value: 'vstrechnoe', label: 'Встречное'},
                                {value: 'reversivnoe', label: 'Реверсивное'},
                                {value: 'verticalnoe', label: 'Вертикальное'},
                            ]
                        },
                        {
                            key: 'doorstep',
                            type: 'radio',
                            label: 'Порог',
                            items: [
                                {value: 'obichniy33mm', label: 'Обычный 33мм', checked: true},
                                {value: 'nizkiy4mm', label: 'Низкий 4мм'},
                            ]
                        },
                        {
                            key: 'montageplisse',
                            type: 'radio',
                            label: 'Тип монтажа',
                            items: [
                                {value: 'sobran', label: 'В сборке', checked: true},
                                {value: 'razobran', label: 'Без сборки'},
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

    // Роллетная (Италья)
    {
        key: 'RolletnaayaItaliya',
        title: 'Роллетная (Италья)',
        // selected: true,
        form: {
            name: 'RolletnaayaItaliya',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
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
                                {value: 'fiberglassitatly', label: 'Стандарт "Fiberglass" (Италия)', selected: true}, 
                                {value: 'antipo', label: 'Антипыль "Antipo" (Италия)'},
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
                            min: '500',
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
        key: 'RamochnayaOptima',
        title: 'Рамочная OPTIMA',
        // selected: true,
        form: {
            name: 'RamochnayaOptima',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
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
                                {value: 'antipyl', label: 'Антипыль "Micro Mesh"'},
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
                                {value: 'z-krepleniya-p', label: 'Z-образное (пластик)'},
                                {value: 'vnutrennie-zacepi', label: 'Внутренние зацепы'},
                                {value: 'plungery', label: 'Плунжеры'},
                                {value: 'bezkrepleniya', label: 'Без креплений'},
                            ]
                        },
                        {
                            key: 'komplekt',
                            type: 'select',
                            label: 'Комплект креплений',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'half', label: '1,5'},
                                {value: 'two', label: '2'},
                            ]
                        },
                        {
                            key: 'peremychka',
                            type: 'select',
                            label: 'Количество перемычек',
                            items: [
                                {value: 'one', label: '1', checked: true},
                                {value: 'two', label: '2'},
                                {value: 'three', label: '3'},
                                {value: 'four', label: '4'},
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                    key: 'montage',
                    type: 'select',
                    label: 'Установка',
                },
            ]
        }
    },

    // Трапеция «Стандарт»
    {
        key: 'TrapeciyaStandart',
        title: 'Трапеция «Стандарт»',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'antracite', label: 'Антрацит'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                            key: 'corners',
                            type: 'radio',
                            label: 'Углы',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                                {value: 'plastikovie', label: 'Пластиковые'},
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
        title: 'Арочная',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'antracite', label: 'Антрацит'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                            key: 'corners',
                            type: 'radio',
                            label: 'Углы',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                                {value: 'plastikovie', label: 'Пластиковые'},
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

    // Перекат
    {
        key: 'Perekatka',
        title: 'Перекат',
        // selected: true,
        form: {
            name: 'Perekatka',
            fields: [
                {
                    key: 'canvas',
                    type: 'group',
                    inputs: [
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                        {value: 'z-krepleniya', label: 'Z-Крепления'},
                        {value: 'vnutrennie-zacepi', label: 'Внутренние зацепы'},
                        {value: 'plungery', label: 'Плунжеры'},
                        {value: 'ugly-metallicheskie', label: 'Металлические углы'},
                        {value: 'ugly-plastikovie', label: 'Пластиковые углы'},
                        {value: 'ruchki-metallicheskie', label: 'Металлические ручки'},
                        {value: 'petli-metallicheskie', label: 'Металлические петли'},
                        {value: 'petli-s-dovodchikom', label: 'Петли с доводчиком 2 шт'},
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



    // Типы изделий отключены
    /*
    // Рамочная "USN"
    {
        key: 'RamochnayaUSN',
        title: 'Рамочная «USN»',
        // selected: true,
        form: {
            name: 'RamochnayaUSN',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'black', label: 'Черный'},
                                {value: 'antracite', label: 'Антрацит'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                            min: '300',
                            max: '3500',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
                    ]
                },
                // {
                //     key: 'montage',
                //     type: 'select',
                //     label: 'Установка',
                // },
            ]
        }
    },

    // Крыло
    {
        key: 'Krilo',
        title: 'Крыло',
        //selected: true,
        form: {
            name: 'Krilo',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'antracite', label: 'Антрацит'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                            max: '2000',
                            step: '1',
                            unit: 'мм.',
                            required: true,
                        },
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
                
            ]
        }
    },

    // Дверная 25мм
    {
        key: 'Dvernaya25',
        title: 'Дверная 25мм',
        // selected: true,
        form: {
            name: 'Dvernaya25',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'antracite', label: 'Антрацит'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                    key: 'fixation',
                    type: 'group',
                    label: 'Система фиксации',
                    inputs: [
                        {
                            key: 'fixation_handles',
                            type: 'radio',
                            label: 'Фиксация-ручки',
                            items: [
                                {value: 'ruchka-sleva', label: 'Ручка слева', checked: true},
                                {value: 'ruchka-sprava', label: 'Ручка справа'},
                            ]
                        },
                        {
                            key: 'fixation_magnets',
                            type: 'radio',
                            label: 'Фиксация-магниты',
                            items: [
                                {value: 'magnit', label: 'Магнит', checked: true},
                                {value: 'zashelka', label: 'Защёлка'},
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

    // Дверная 32мм
    {
        key: 'Dvernaya32',
        title: 'Дверная 32мм',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                    key: 'fixation',
                    type: 'group',
                    label: 'Система фиксации',
                    inputs: [
                        {
                            key: 'fixation_handles',
                            type: 'radio',
                            label: 'Фиксация-ручки',
                            items: [
                                {value: 'ruchka-sleva', label: 'Ручка слева', checked: true},
                                {value: 'ruchka-sprava', label: 'Ручка справа'},
                            ]
                        },
                        {
                            key: 'fixation_magnets',
                            type: 'radio',
                            label: 'Фиксация-магниты',
                            items: [
                                {value: 'magnit', label: 'Магнит', checked: true},
                                {value: 'zashelka', label: 'Защёлка'},
                            ]
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
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                                {value: 's-dovodchikom', label: 'С доводчиком'},
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

    // Дверная 52мм
    {
        key: 'Dvernaya52',
        title: 'Дверная 52мм',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                    key: 'fixation',
                    type: 'group',
                    label: 'Система фиксации',
                    inputs: [
                        {
                            key: 'fixation_handles',
                            type: 'radio',
                            label: 'Фиксация-ручки',
                            items: [
                                {value: 'ruchka-sleva', label: 'Ручка слева', checked: true},
                                {value: 'ruchka-sprava', label: 'Ручка справа'},
                            ]
                        },
                        {
                            key: 'fixation_magnets',
                            type: 'radio',
                            label: 'Фиксация-магниты',
                            items: [
                                {value: 'magnit', label: 'Магнит', checked: true},
                                {value: 'zashelka', label: 'Защёлка'},
                            ]
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
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                                {value: 's-dovodchikom', label: 'С доводчиком'},
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

    // Рулонная (Польша)
    {
        key: 'RulonnayaPolsha',
        title: 'Рулонная (Польша)',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'ral', label: 'RAL'},
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
                            min: '500',
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

    

    // Рулонная (Италия)
    {
        key: 'RulonnayaItalia',
        title: 'Рулонная (Италия)',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'ral', label: 'RAL'},
                            ]
                        },
                        {
                            key: 'ral',
                            type: 'ral',
                            label: 'Код RAL',
                        },
                        {
                            key: 'canvas',
                            type: 'select',
                            label: 'Полотно',
                            items: [
                                {value: 'standart-gray', label: 'Серое «Стандарт»', selected: true},
                                {value: 'sunox', label: 'Антибактериальное «Sunox»'},
                                {value: 'antipo-gray', label: 'Антипыль Серая «Antipo»'},
                                {value: 'antipo-black', label: 'Антипыль Черная «Antipo»'},
                            ]
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
                            max: '2500',
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
                            min: '500',
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


    // Трапеция «Стандарт»
    {
        key: 'TrapeciyaStandart',
        title: 'Трапеция «Стандарт»',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'antracite', label: 'Антрацит'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                            key: 'corners',
                            type: 'radio',
                            label: 'Углы',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические', checked: true},
                                {value: 'plastikovie', label: 'Пластиковые'},
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

    // Трапеция «Усиленная» 32мм
    {
        key: 'TrapeciyaUsilennaya32',
        title: 'Трапеция «Усиленная» 32мм',
        // selected: true,
        form: {
            name: 'TrapeciyaUsilennaya32',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
                                {value: 'petscreen', label: 'Антикошка "Pet Screen"'},
                                {value: 'micromesh', label: 'Антимошка "Micro Mesh"'},
                                {value: 'maxivision', label: 'Максимальный обзор "Maxi-Vision"'},
                                {value: 'polltex', label: 'Антипыльца "Poll-Tex"'},
                                {value: 'sunlight', label: 'Светоотражающие "Sunlight"'},
                                {value: 'antibird', label: 'Алюминиевая/Антиптица'},
                                {value: 'diamondsteel', label: 'Стальное "Diamond steel"'},
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
                            label: 'Высота лево',
                            value: '',
                            min: '200',
                            max: '3000',
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
                            max: '3000',
                            step: '1',
                            unit: 'мм.',
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
    */
]