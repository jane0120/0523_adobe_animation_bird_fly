/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'market_1_9',
                            type: 'image',
                            rect: ['45px', '45px', '564px', '170px', 'auto', 'auto'],
                            autoOrient: false,
                            clip: 'rect(0px 146px 88px 5px)',
                            fill: ["rgba(0,0,0,0)",im+"market_1_9.jpg",'0px','0px'],
                            transform: [[],[],[],['1.13139']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '800px', '600px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 267,
                    autoPlay: true,
                    data: [
                        [
                            "eid9",
                            "background-position",
                            0,
                            0,
                            "linear",
                            "${market_1_9}",
                            [0,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid10",
                            "background-position",
                            67,
                            0,
                            "linear",
                            "${market_1_9}",
                            [0,0],
                            [-128,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid12",
                            "background-position",
                            133,
                            0,
                            "linear",
                            "${market_1_9}",
                            [-128,0],
                            [-256,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid14",
                            "background-position",
                            200,
                            0,
                            "linear",
                            "${market_1_9}",
                            [-256,0],
                            [-384,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid16",
                            "background-position",
                            267,
                            0,
                            "linear",
                            "${market_1_9}",
                            [-384,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid19",
                            "scaleX",
                            267,
                            0,
                            "linear",
                            "${market_1_9}",
                            '1.13139',
                            '1.13139'
                        ],
                        [
                            "eid6",
                            "clip",
                            0,
                            0,
                            "linear",
                            "${market_1_9}",
                            [0,142,88,0],
                            [0,142,88,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid11",
                            "clip",
                            67,
                            0,
                            "linear",
                            "${market_1_9}",
                            [0,142,88,0],
                            [0,146,88,6],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid13",
                            "clip",
                            133,
                            0,
                            "linear",
                            "${market_1_9}",
                            [0,146,88,6],
                            [0,163,88,14],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid15",
                            "clip",
                            200,
                            0,
                            "linear",
                            "${market_1_9}",
                            [0,163,88,14],
                            [0,170,88,33],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid20",
                            "clip",
                            267,
                            0,
                            "linear",
                            "${market_1_9}",
                            [0,170,88,33],
                            [0,146,88,5],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid8",
                            "top",
                            0,
                            0,
                            "linear",
                            "${market_1_9}",
                            '45px',
                            '45px'
                        ],
                        [
                            "eid18",
                            "top",
                            267,
                            0,
                            "linear",
                            "${market_1_9}",
                            '45px',
                            '46px'
                        ],
                        [
                            "eid7",
                            "left",
                            0,
                            0,
                            "linear",
                            "${market_1_9}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid17",
                            "left",
                            267,
                            0,
                            "linear",
                            "${market_1_9}",
                            '0px',
                            '45px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("smurf_edgeActions.js");
})("EDGE-1491247249");
