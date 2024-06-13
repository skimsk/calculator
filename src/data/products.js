export default [
    // Рамочная «Стандарт»
    {
        key: 'RamochnayaStandart',
        title: 'Рамочная «Стандарт»',
        // selected: true,
        form: {
            name: 'RamochnayaStandart',
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
                            value: '700',
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
                            value: '1400',
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
                                {value: 'z-krepleniya', label: 'Z-Крепления', checked: true},
                                {value: 'vnutrennie-zacepi', label: 'Внутренние зацепы'},
                                {value: 'plungery', label: 'Плунжеры'},
                            ]
                        },
                        {
                            key: 'corners',
                            type: 'radio',
                            label: 'Углы',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические'},
                                {value: 'plastikovie', label: 'Пластиковые', checked: true},
                            ]
                        },
                        {
                            key: 'handles',
                            type: 'radio',
                            label: 'Ручки',
                            items: [
                                {value: 'metallicheskie', label: 'Металлические'},
                                {value: 'silikonovie', label: 'Силиконовые', checked: true},
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

    // Рамочная «Усиленная» 32мм
    {
        key: 'Ramochnaya32',
        title: 'Рамочная «Усиленная» 32мм',
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
                            value: '700',
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
                            value: '1400',
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
                            value: '700',
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
                            value: '1400',
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
                            value: '700',
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
                            value: '1400',
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

    // Вставная SKF
    {
        key: 'VstavnayaSKF',
        title: 'Вставная SKF',
        // selected: true,
        form: {
            name: 'VstavnayaSKF',
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
                            value: '700',
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
                            value: '1400',
                            min: '200',
                            max: '3000',
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
                            value: '700',
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
                            value: '1400',
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
                            value: '700',
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
                            value: '1400',
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
                    key: 'montage',
                    type: 'select',
                    label: 'Установка'
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
                            value: '700',
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
                            value: '1400',
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
                            value: '700',
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
                            value: '1400',
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
                            value: '700',
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
                            value: '1400',
                            min: '400',
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
                            value: '700',
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
                            value: '1400',
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
                            value: '700',
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
                            value: '1400',
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
                            value: '700',
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
                            value: '1400',
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

    // Плиссе (Россия)
    {
        key: 'PlisseRussia',
        title: 'Плиссе (Россия)',
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
                                {value: 'antivandal-gray', label: 'Серое «Антивандальное»'},
                                {value: 'maxivision-black', label: 'Черное «Максимальный обзор»'},
                                {value: 'antipo-gray', label: 'Серое «Антипыльца»'},
                                {value: 'waterproof-gray', label: 'Серое «Waterproof»'},
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
                            value: '700',
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
                            value: '1400',
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
                            label: 'Открывание',
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
                                {value: 'obichniy33mm-sborka', label: 'Обычный 33мм (в сборе)'},
                                {value: 'obichniy33mm', label: 'Обычный 33мм (без сборки)', checked: true},
                                {value: 'nizkiy4mm', label: 'Низкий 4мм (без сборки)'},
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
        key: 'PlisseItalia',
        title: 'Плиссе (Италия)',
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
                                {value: 'white', label: 'Белый', selected: true},
                                {value: 'brown', label: 'Коричневый'},
                                {value: 'ral', label: 'RAL'},
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
                                {value: 'fiberglass', label: 'Стандарт «Fiberglass»', selected: true},
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
                            value: '700',
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
                            value: '1400',
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
                    key: 'install',
                    type: 'select',
                    label: 'Тип монтажа',
                    items: [
                        { value: 'proem7mm', label: 'В проем с низким порогом 7мм (без сборки)' },
                        { value: 'nakladka7mm', label: 'В накладку с низким порогом 7мм (без сборки)', checked: true },
                        { value: 'nakladka30mm-sborka', label: 'В накладку с обычным порогом 30мм (в сборе)', checked: true },
                        { value: 'nakladka30mm', label: 'В накладку с обычным порогом 30мм (без сборки)', checked: true },
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
                            value: '700',
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
                            value: '1400',
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
                            value: '700',
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
                            value: '1400',
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
                            value: '700',
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
                            value: '1400',
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

    // Перекатка
    {
        key: 'Perekatka',
        title: 'Перекатка',
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
                            value: '700',
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
                            value: '1400',
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
]