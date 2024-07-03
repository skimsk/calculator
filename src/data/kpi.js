export default {
    // Монтажник
    installer: {
        Ramochnaya25: [
            { key: 'easy', fix: 200, percent: 10 },
            { key: 'hard', fix: 250, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        Ramochnaya32: [
            { key: 'easy', fix: 200, percent: 10 },
            { key: 'hard', fix: 250, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        RamochnayaAlumSN: [
            { key: 'easy', fix: 0, percent: 12 },
            { key: 'hard', fix: 0, percent: 12 },
            { key: 'off', fix: 0, percent: 12 },
        ],
        RamochnayaUSN: [
            { key: 'easy', fix: 0, percent: 12 },
            { key: 'hard', fix: 0, percent: 12 },
            { key: 'off', fix: 0, percent: 12 },
        ],
        VstavnayaVSN: [
            { key: 'easy', fix: 0, percent: 14 },
            { key: 'hard', fix: 0, percent: 14 },
        ],
        VstavnayaSKF: [
            { key: 'easy', fix: 0, percent: 14 },
            { key: 'hard', fix: 0, percent: 14 },
        ],
        Krilo: [
            { key: 'easy', fix: 0, percent: 15 },
            { key: 'hard', fix: 0, percent: 15 },
        ],
        RazdvignayaProvedal: [
            { key: 'easy', fix: 400, percent: 10 },
            { key: 'hard', fix: 500, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        Dvernaya25: [
            { key: 'easy', fix: 400, percent: 10 },
            { key: 'hard', fix: 500, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        Dvernaya32: [
            { key: 'easy', fix: 400, percent: 10 },
            { key: 'hard', fix: 500, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        Dvernaya42: [
            { key: 'easy', fix: 400, percent: 10 },
            { key: 'hard', fix: 500, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        Dvernaya52: [
            { key: 'easy', fix: 400, percent: 10 },
            { key: 'hard', fix: 500, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        RulonnayaPolsha: [
            { key: 'easy', fix: 0, percent: 15 },
            { key: 'hard', fix: 0, percent: 18 },
            { key: 'off', fix: 0, percent: 5 },
        ],
        RulonnayaItalia: [
            { key: 'easy', fix: 0, percent: 15 },
            { key: 'hard', fix: 0, percent: 18 },
            { key: 'off', fix: 0, percent: 5 },
        ],
        PlisseRussia: [
            { key: 'easy', fix: 0, percent: 10 },
            { key: 'hard', fix: 0, percent: 13 },
            { key: 'off', fix: 0, percent: 5 },
        ],
        PlisseItalia: [
            { key: 'easy', fix: 0, percent: 10 },
            { key: 'hard', fix: 0, percent: 13 },
            { key: 'off', fix: 0, percent: 5 },
        ],
        Arochnaya: [
            { key: 'easy', fix: 400, percent: 10 },
            { key: 'hard', fix: 500, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        TrapeciyaStandart: [
            { key: 'easy', fix: 400, percent: 10 },
            { key: 'hard', fix: 500, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        TrapeciyaUsilennaya32: [
            { key: 'easy', fix: 400, percent: 10 },
            { key: 'hard', fix: 500, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
        Perekat: [
            { key: 'easy', fix: 250, percent: 10 },
            { key: 'hard', fix: 350, percent: 10 },
            { key: 'off', fix: 0, percent: 10 },
        ],
    },

    // Сборщик
    assembler: {
        Ramochnaya25: {
            canvas: [
                { key: 'fiberglass', price: 60 },
                { key: 'petscreen', price: 150 },
                { key: 'micromesh', price: 60 },
                { key: 'maxivision', price: 60 },
                { key: 'polltex', price: 160 },
                { key: 'sunlight', price: 60 },
                { key: 'antibird', price: 160 },
                { key: 'diamondsteel', price: 200 },
            ],
            corners: [
                { key: 'metallicheskie', price: 10 },
            ],
            handles: [
                { key: 'metallicheskie', price: 20 },
            ],
            fastings: [
                { key: 'vnutrennie-zacepi', price: 100 },
                { key: 'plungery', price: 130 },
            ]
        },
        VstavnayaVSN: {
            canvas: [
                { key: 'fiberglass', price: 90 },
                { key: 'petscreen', price: 200 },
                { key: 'micromesh', price: 90 },
                { key: 'maxivision', price: 90 },
                { key: 'polltex', price: 190 },
                { key: 'sunlight', price: 90 },
                { key: 'antibird', price: 190 },
                { key: 'diamondsteel', price: 230 },
            ],
        },
        Ramochnaya32: {
            canvas: [
                { key: 'fiberglass', price: 100 },
                { key: 'petscreen', price: 190 },
                { key: 'micromesh', price: 100 },
                { key: 'maxivision', price: 100 },
                { key: 'polltex', price: 200 },
                { key: 'sunlight', price: 100 },
                { key: 'antibird', price: 200 },
                { key: 'diamondsteel', price: 240 },
            ],
            corners: [
                { key: 'metallicheskie', price: 10 },
            ],
            handles: [
                { key: 'metallicheskie', price: 20 },
            ],
            fastings: [
                { key: 'vnutrennie-zacepi', price: 100 },
                { key: 'plungery', price: 130 },
            ]
        },
        RamochnayaAlumSN: {
            canvas: [
                { key: 'fiberglass', price: 200 },
                { key: 'petscreen', price: 290 },
                { key: 'micromesh', price: 200 },
                { key: 'maxivision', price: 200 },
                { key: 'polltex', price: 300 },
                { key: 'sunlight', price: 200 },
                { key: 'antibird', price: 300 },
                { key: 'diamondsteel', price: 340 },
            ],
        },
        RamochnayaUSN: {
            canvas: [
                { key: 'fiberglass', price: 200 },
                { key: 'petscreen', price: 290 },
                { key: 'micromesh', price: 200 },
                { key: 'maxivision', price: 200 },
                { key: 'polltex', price: 300 },
                { key: 'sunlight', price: 200 },
                { key: 'antibird', price: 300 },
                { key: 'diamondsteel', price: 340 },
            ],
        },
        VstavnayaSKF: {
            canvas: [
                { key: 'fiberglass', price: 90 },
                { key: 'petscreen', price: 200 },
                { key: 'micromesh', price: 90 },
                { key: 'maxivision', price: 90 },
                { key: 'polltex', price: 190 },
                { key: 'sunlight', price: 90 },
                { key: 'antibird', price: 190 },
                { key: 'diamondsteel', price: 230 },
            ],
        },
        Krilo: {
            canvas: [
                { key: 'fiberglass', price: 100 },
                { key: 'petscreen', price: 190 },
                { key: 'micromesh', price: 100 },
                { key: 'maxivision', price: 100 },
                { key: 'polltex', price: 200 },
                { key: 'sunlight', price: 100 },
                { key: 'antibird', price: 200 },
                { key: 'diamondsteel', price: 240 },
            ],
        },
        RazdvignayaProvedal: {
            canvas: [
                { key: 'fiberglass', price: 160 },
                { key: 'petscreen', price: 250 },
                { key: 'micromesh', price: 160 },
                { key: 'maxivision', price: 160 },
                { key: 'polltex', price: 260 },
                { key: 'sunlight', price: 160 },
                { key: 'antibird', price: 260 },
                { key: 'diamondsteel', price: 300 },
            ],
        },
        Dvernaya25: {
            canvas: [
                { key: 'fiberglass', price: 160 },
                { key: 'petscreen', price: 250 },
                { key: 'micromesh', price: 160 },
                { key: 'maxivision', price: 160 },
                { key: 'polltex', price: 260 },
                { key: 'sunlight', price: 160 },
                { key: 'antibird', price: 260 },
                { key: 'diamondsteel', price: 300 },
            ],
        },
        Dvernaya32: {
            canvas: [
                { key: 'fiberglass', price: 200 },
                { key: 'petscreen', price: 280 },
                { key: 'micromesh', price: 200 },
                { key: 'maxivision', price: 200 },
                { key: 'polltex', price: 290 },
                { key: 'sunlight', price: 200 },
                { key: 'antibird', price: 290 },
                { key: 'diamondsteel', price: 330 },
            ],
        },
        Dvernaya42: {
            canvas: [
                { key: 'fiberglass', price: 200 },
                { key: 'petscreen', price: 280 },
                { key: 'micromesh', price: 200 },
                { key: 'maxivision', price: 200 },
                { key: 'polltex', price: 290 },
                { key: 'sunlight', price: 200 },
                { key: 'antibird', price: 290 },
                { key: 'diamondsteel', price: 330 },
            ],
        },
        Dvernaya52: {
            canvas: [
                { key: 'fiberglass', price: 200 },
                { key: 'petscreen', price: 280 },
                { key: 'micromesh', price: 200 },
                { key: 'maxivision', price: 200 },
                { key: 'polltex', price: 290 },
                { key: 'sunlight', price: 200 },
                { key: 'antibird', price: 290 },
                { key: 'diamondsteel', price: 330 },
            ],
        },
        RulonnayaPolsha: {
            canvas: [
                { key: 'all', price: 350 },
            ],    
        },
        RulonnayaItalia: {
            canvas: [
                { key: 'all', price: 500 },
            ],
        },
        PlisseRussia: {
            opening: [
                { key: 'odnostoronee', price: 450 },
                { key: 'vstrechnoe', price: 550 },
                { key: 'reversivnoe', price: 550 },
                { key: 'verticalnoe', price: 450 },
            ],
        },
        PlisseItalia: {
            opening: [
                { key: 'odnostoronee', price: 550, install: 600 },
                { key: 'vstrechnoe', price: 650, install: 700 },
                { key: 'reversivnoe', price: 650, install: 700 },
                { key: 'verticalnoe', price: 550, install: 600 },
            ],
            install: [
                { key: 'nakladka7mm', price: 600 },
                { key: 'nakladka30mm-sborka', price: 800 },
                { key: 'nakladka30mm', price: 800 },
            ]
        },
        Arochnaya: {
            canvas: [
                { key: 'fiberglass', price: 1000 },
                { key: 'petscreen', price: 1100 },
                { key: 'micromesh', price: 1000 },
                { key: 'maxivision', price: 1000 },
                { key: 'polltex', price: 1110 },
                { key: 'sunlight', price: 1000 },
                { key: 'antibird', price: 1110 },
                { key: 'diamondsteel', price: 1150 },
            ],
            corners: [
                { key: 'metallicheskie', price: 10 },
            ],
            handles: [
                { key: 'metallicheskie', price: 20 },
            ],
        },
        TrapeciyaStandart: {
            canvas: [
                { key: 'fiberglass', price: 500 },
                { key: 'petscreen', price: 600 },
                { key: 'micromesh', price: 500 },
                { key: 'maxivision', price: 500 },
                { key: 'polltex', price: 610 },
                { key: 'sunlight', price: 500 },
                { key: 'antibird', price: 610 },
                { key: 'diamondsteel', price: 650 },
            ],
            corners: [
                { key: 'metallicheskie', price: 10 },
            ],
            handles: [
                { key: 'metallicheskie', price: 20 },
            ],
        },
        TrapeciyaUsilennaya32: {
            canvas: [
                { key: 'fiberglass', price: 600 },
                { key: 'petscreen', price: 700 },
                { key: 'micromesh', price: 600 },
                { key: 'maxivision', price: 600 },
                { key: 'polltex', price: 710 },
                { key: 'sunlight', price: 600 },
                { key: 'antibird', price: 710 },
                { key: 'diamondsteel', price: 750 },
            ],
        },
        Perekat: {
            canvas: [
                { key: 'fiberglass', price: 60 },
                { key: 'petscreen', price: 150 },
                { key: 'micromesh', price: 60 },
                { key: 'maxivision', price: 60 },
                { key: 'polltex', price: 160 },
                { key: 'sunlight', price: 60 },
                { key: 'antibird', price: 160 },
                { key: 'diamondsteel', price: 200 },
            ],
            remake: [
                { key: 'z-krepleniya', price: 0 },
                { key: 'vnutrennie-zacepi', price: 100 },
                { key: 'plungery', price: 130 },
                { key: 'ugly-metallicheskie', price: 30 },
                { key: 'ugly-plastikovie', price: 20 },
                { key: 'ruchki-metallicheskie', price: 20 },
                { key: 'petli-metallicheskie', price: 30 },
                { key: 'petli-s-dovodchikom', price: 40 },
            ], 
        } 
    },  
}