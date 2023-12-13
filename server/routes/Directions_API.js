const dotenv = require("dotenv");
const router = require("express").Router();
const axios = require("axios");
const { response } = require("express");

dotenv.config();

router.route("/route").get(async (req, res) => {
  //var params = req.body;
  params = {
    destination: "Toronto", // (can be address, coordinates, plus codes) REQUIRED',
    origin: "Montreal", //REQUIRED',
    alternatives: "true",
    avoid: "tolls|highways|ferries",
    //departure_time: 'seconds since midnight (transit or vehicle mode only)',
    //arrival_time: "seconds since midnight (transit or driving mode only)",
    //language: 'english',
    //mode: 'driving|walking|bicycling|transit',
    //traffic_model: 'best_guess|pessimistic|optimistic',
    //transit_mode: 'bus|subway|train|tram|rail(transit_mode=train|tram|subway)',
    //transit_routing_preference: 'less_walking|fewer_transfers',
    units: "imperial", //'metric|imperial',
    //waypoints: '10 max, don't use optimized'
    key: process.env.MAPS_API,
  };

  await axios
    .get(`https://maps.googleapis.com/maps/api/directions/json?`, { params })
    .then((response) => {
      console.log(response);
      res.status(200).json({ route: response.data });
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = router;

const example = {
  geocoded_waypoints: [
    {
      geocoder_status: "OK",
      place_id: "ChIJ6egHOKJ8bIcRCdGnkC8s_k8",
      types: ["premise"],
    },
    {
      geocoder_status: "OK",
      place_id: "ChIJ_84pTFaHa4cRFFUyXLr2vEA",
      types: ["premise"],
    },
  ],
  routes: [
    {
      bounds: {
        northeast: {
          lat: 39.7808045,
          lng: -104.8634538,
        },
        southwest: {
          lat: 39.739347,
          lng: -105.034614,
        },
      },
      copyrights: "Map data ©2023 Google",
      legs: [
        {
          distance: {
            text: "13.7 mi",
            value: 21984,
          },
          duration: {
            text: "22 mins",
            value: 1329,
          },
          end_address: "1444 Lowell Blvd, Denver, CO 80204, USA",
          end_location: {
            lat: 39.739347,
            lng: -105.034614,
          },
          start_address: "2000 Hanover St, Aurora, CO 80010, USA",
          start_location: {
            lat: 39.7476899,
            lng: -104.8670085,
          },
          steps: [
            {
              distance: {
                text: "95 ft",
                value: 29,
              },
              duration: {
                text: "1 min",
                value: 4,
              },
              end_location: {
                lat: 39.7474282,
                lng: -104.8670089,
              },
              html_instructions:
                "Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eHanover St\u003c/b\u003e toward \u003cb\u003eE Montview Blvd\u003c/b\u003e",
              polyline: {
                points: "afrqFxy`_Sr@?",
              },
              start_location: {
                lat: 39.7476899,
                lng: -104.8670085,
              },
              travel_mode: "DRIVING",
            },
            {
              distance: {
                text: "0.1 mi",
                value: 204,
              },
              duration: {
                text: "1 min",
                value: 30,
              },
              end_location: {
                lat: 39.74741789999999,
                lng: -104.8646213,
              },
              html_instructions:
                "Turn \u003cb\u003eleft\u003c/b\u003e at the 1st cross street onto \u003cb\u003eE Montview Blvd\u003c/b\u003e",
              maneuver: "turn-left",
              polyline: {
                points: "mdrqFxy`_S@qB?I?kA?i@?sB?i@?mA",
              },
              start_location: {
                lat: 39.7474282,
                lng: -104.8670089,
              },
              travel_mode: "DRIVING",
            },
            {
              distance: {
                text: "0.8 mi",
                value: 1359,
              },
              duration: {
                text: "3 mins",
                value: 182,
              },
              end_location: {
                lat: 39.7595367,
                lng: -104.8642031,
              },
              html_instructions:
                "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eIola St\u003c/b\u003e",
              maneuver: "turn-left",
              polyline: {
                points:
                  "kdrqFzj`_SiB?wA?S?_D?iJAiJ@g@@kBAc@?c@Aq@@Q@UASCQ?WO{BDiB?m@?gAAiA?W?s@Ao@@iAAmA?y@@{@@U?I?I?IAIASE[YOOKQ",
              },
              start_location: {
                lat: 39.74741789999999,
                lng: -104.8646213,
              },
              travel_mode: "DRIVING",
            },
            {
              distance: {
                text: "187 ft",
                value: 57,
              },
              duration: {
                text: "1 min",
                value: 9,
              },
              end_location: {
                lat: 39.75986520000001,
                lng: -104.8647108,
              },
              html_instructions:
                "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eN Havana Wy\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eM.L.K. Jr Blvd\u003c/b\u003e",
              maneuver: "turn-left",
              polyline: {
                points: "cptqFfh`_SEH{@zA",
              },
              start_location: {
                lat: 39.7595367,
                lng: -104.8642031,
              },
              travel_mode: "DRIVING",
            },
            {
              distance: {
                text: "1.2 mi",
                value: 1880,
              },
              duration: {
                text: "3 mins",
                value: 197,
              },
              end_location: {
                lat: 39.776508,
                lng: -104.8657795,
              },
              html_instructions:
                'Continue straight onto \u003cb\u003eHavana St\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eN Havana Wy\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eContinue to follow Havana St\u003c/div\u003e',
              maneuver: "straight",
              polyline: {
                points:
                  "ertqFlk`_SKTKPOPQTWZEBc@\\k@Ve@LG@q@FkCNcAFS@_@Bc@Bg@?{@@EBCAGAC?E?G?I?E?E?G?G?E?E?I?Y?Y?G?C?G@E?G?O?{@?{@@[?y@Es@Cw@CwACcBE[Ae@?gBCuCEk@?c@Cm@?KAO@G?}@Da@BS@U@C?sAAkD?gA?wB?qCBQ?Q?i@?yABM?s@@S?Y?a@?U@iB?mA?m@Am@?q@AwAB",
              },
              start_location: {
                lat: 39.75986520000001,
                lng: -104.8647108,
              },
              travel_mode: "DRIVING",
            },
            {
              distance: {
                text: "6.2 mi",
                value: 9966,
              },
              duration: {
                text: "7 mins",
                value: 417,
              },
              end_location: {
                lat: 39.77970029999999,
                lng: -104.9763268,
              },
              html_instructions:
                "Take the ramp onto \u003cb\u003eI-70 W\u003c/b\u003e",
              maneuver: "ramp-right",
              polyline: {
                points:
                  "ezwqFbr`_SSKMEIGGKCGCGCMCe@R_CL}ABa@BUBK@EDMHO@ALMFEHEREL?J@RHNLJRFT@F@F@F?H?N?L?VNf@QvEEx@GzAKfC_@`KQzD?HK`C?Hm@tNYbJOtDCn@I|BEfAKpBCfAGdACx@Cv@Ep@?NIhBM|CStFKjCMlCAZAXU|Fa@nJ?BALAPGdBQnEE|@C^?@?JALAP?JCn@E`AAZCv@AVAL[pICt@c@pKM~E?HK~EAr@Af@Al@A`AAbBC`C?p@@Z?Z?R?T?pC?nC?~A?~A?vA?nAInBAjA?vA@j@?b@?lA?bA@fA?z@?lBBjD?nC?fD?rA?dB@|B?tH?b@?b@?^?`@?~@@n@?^?^?X?X?^A^@tFAxA@zB?vA?jA?jA?`B?t@?\\@`A?n@Ax@?b@?P?tA@`@?@?R?t@Ax@?d@?LAx@AREfBCd@AJCh@Cp@IhAGv@OzACZEVS`BE^ALCPALEV?@AF?BALEXADAHOlAK~@MhACRWtBIp@E^UnBIp@Gl@AFc@jDAFOfAE^ALEh@CXATAJADC`@Cl@C~@Cn@Cn@A\\?PAv@AZ?F?p@?lBBtI@pF@nD?j@?d@Ab@?~@A`@CtB?D?\\ErCIdEEvAATC`BCrAAn@Cx@KpECnAC~AAnAAnA?j@?~@?lE@dA?n@@rF?v@?X@tC?P@~@@rC@Z?hA?Z?~@?F?V?fA?VBtD?jC?lC?L?L?dC?~@?^?^A~@?z@?j@?L?XAdAAvB?`@?TAZ?ZAd@AtA?dA?f@Ad@?Z@`@@hF@RDjDBhAFbCNhDBfAPnFBhABp@@`AHpCBbADdB@`@?j@Bx@@`B?@B~@NhFBtABz@Bz@Bx@@v@@b@Bj@BhAD`B?f@H~C@h@@f@DbB",
              },
              start_location: {
                lat: 39.776508,
                lng: -104.8657795,
              },
              travel_mode: "DRIVING",
            },
            {
              distance: {
                text: "4.0 mi",
                value: 6457,
              },
              duration: {
                text: "5 mins",
                value: 305,
              },
              end_location: {
                lat: 39.7429297,
                lng: -105.015791,
              },
              html_instructions:
                "Take exit \u003cb\u003e274\u003c/b\u003e to merge onto \u003cb\u003eI-25 S\u003c/b\u003e",
              maneuver: "ramp-right",
              polyline: {
                points:
                  "cnxqF`ev_SM`@?t@?^?b@?x@?f@Av@?v@AP?j@CdA?BA^?BC~A?BKjD?RAn@AXEdB?HAZE|A?HAb@C`@?N?F?NAbA?@?bC?@?D?tA?bC?N?~@?T?F?`@Ar@@N?L?JAL?XARAXAPCVANA@ANCNERERGRI\\[`AUt@GNCJQn@Qp@CPBL?@?@AN@`@?Z@\\@F@N@HBN@HDLJ\\HRJTJPFJBFHJBBFFRNj@Zt@TR@J@H?F?B?HALANCPCRGVI`@O`@Mt@WLE@?^M`@M@APGZKJCBAXINCVC@?PARAX?P?t@?`@@f@@\\BP@RBd@HXFTDTFVD^HJBRDf@JTDVDPBTBT@Z?N@T?T?R?T@T?`@?L@RB^BB@PBH@b@J@?f@Nf@Nj@Tb@Rx@b@@@j@BRRJJp@l@RNTR\\\\TRNRNL^d@PRNR^f@NTXd@h@|@LT\\p@l@pAHTJTJVHVL^FPFPHXHXHV@DPl@HX^nA\\nAZhA@?@DFRLb@V`AJZHXFVHT?BHVHXHXHXHXTn@HXTl@LXJTJVNXLTP\\NVRX`@j@V\\Z^NPd@d@^\\`@\\d@`@t@l@B@DFx@p@TP`@\\r@h@xCdCv@n@ZVXV^Zf@d@^^d@d@NPn@t@r@~@`@j@HJNR\\h@fAdBj@~@vBhDJRZd@lAjBJL`@p@NTx@nAh@x@\\h@FHFJ\\f@T\\x@`Al@|@\\f@\\f@\\f@HLDFZd@NRj@|@j@z@d@r@NVz@pAf@v@b@l@b@n@nAjBDFPTZd@NRNPPTLNPT^`@PPBBLL^^PPRPPNPNb@ZPLZVr@b@DDHDhB~@fAb@D@RHTHPDVHz@VLDZHhA\\@@j@PPFTH\\Jv@VRHt@T@?PFTFRF~@TPBB@TBh@Hh@FV@|@BV?RAZATCPAVCRERCLCBAB?NEXGTIRGRId@S\\OJGRMPKRMPOPOPMb@a@^_@^a@FGJMHGh@m@NQNO@C`@c@NQPQVYBC",
              },
              start_location: {
                lat: 39.77970029999999,
                lng: -104.9763268,
              },
              travel_mode: "DRIVING",
            },
            {
              distance: {
                text: "0.2 mi",
                value: 279,
              },
              duration: {
                text: "1 min",
                value: 29,
              },
              end_location: {
                lat: 39.7404878,
                lng: -105.0154293,
              },
              html_instructions:
                "Take exit \u003cb\u003e210A\u003c/b\u003e for \u003cb\u003eUS-40\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-287\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eColfax Ave\u003c/b\u003e",
              maneuver: "ramp-right",
              polyline: {
                points:
                  "ihqqFt{}_Sb@GTSNIJGHCLGPGRGHADAD?JCLAJAR?X?b@@H@D?X@j@BB?^?T@P?b@@",
              },
              start_location: {
                lat: 39.7429297,
                lng: -105.015791,
              },
              travel_mode: "DRIVING",
            },
            {
              distance: {
                text: "1.0 mi",
                value: 1642,
              },
              duration: {
                text: "2 mins",
                value: 131,
              },
              end_location: {
                lat: 39.74034650000001,
                lng: -105.0346126,
              },
              html_instructions:
                'Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eUS-287 N\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eUS-40 W\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eW Colfax Ave\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eContinue to follow US-40 W/\u003cwbr/\u003eW Colfax Ave\u003c/div\u003e\u003cdiv style="font-size:0.9em"\u003ePass by 7-Eleven (on the right in 0.9 mi)\u003c/div\u003e',
              maneuver: "turn-right",
              polyline: {
                points:
                  "aypqFly}_S?d@?d@?DAbA?fA?VAp@AzAAj@?P?@ApA?BAj@?ZAj@?B?j@?`@?`@Af@?h@?bB?T?x@?rB?|@?@?F?fA?fA?hA?rC?h@BtBFvCB`A@\\FtCBvA@pA?b@?vC?`B?V@fB?rA@pA@rB?NAnB?nA@l@D\\?jA?P?h@?Z?Z?f@?jA?rA?\\?hA?l@",
              },
              start_location: {
                lat: 39.7404878,
                lng: -105.0154293,
              },
              travel_mode: "DRIVING",
            },
            {
              distance: {
                text: "364 ft",
                value: 111,
              },
              duration: {
                text: "1 min",
                value: 25,
              },
              end_location: {
                lat: 39.739347,
                lng: -105.034614,
              },
              html_instructions:
                'Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLowell Blvd\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eDestination will be on the left\u003c/div\u003e',
              maneuver: "turn-left",
              polyline: {
                points: "expqFhqa`SfA?~B?",
              },
              start_location: {
                lat: 39.74034650000001,
                lng: -105.0346126,
              },
              travel_mode: "DRIVING",
            },
          ],
          traffic_speed_entry: [],
          via_waypoint: [],
        },
      ],
      overview_polyline: {
        points:
          "afrqFxy`_Sr@?@qB?uA?uGuJ?gZ?kC@i@EQ?WOeFDuBAeE?mG@s@A]Gk@i@KQEHgApB[b@i@p@i@`@k@Ve@Ly@HoEVs@DkAB{@@EBKC[?kA?gC@wA@mBIoGOoIIqAC[?{BJY@_GAcJBcDBcC@_C@{BAm@?iC@a@QQSGOGs@h@uGDQN]`@[`@EJ@b@VRh@D`@?t@Nf@WpGeA`Xy@jSw@fUk@zN_Bja@iAfXOfEc@nLg@fMMhFQhJCdDCrD@`B?`N?fDInBAjA@bC?pB@tHBzH?zF@|P?dD@xM@v]AhDIbEMlCe@xFm@`Fi@pEaBtNw@bGQpBEf@O~DGvCAbEFbXCjDIlHUtKUnKKnI@~J@tJF|P?~BB|MAzLEtIChF@lIRlKh@jPRhIJlF@bBRhHNfG\\dPFjCM`@?xBGxIUpKShIAhF?hJ?|AEtAIz@QfAcAhDo@|BCPBL?B@jBHp@\\hA^r@X^~@j@t@TR@T@J?x@KnBo@vDoAx@S~@GbC@dADd@DjB^vAXfBZvAFtA@xAD~@Jd@JnA^nAh@z@d@j@BRR|@x@|AtA~@fApAdBbAbBj@fAnAtCf@zAxBxHbB~FbApDt@vBd@fA~@dBt@dAr@|@tAtA`CnBxK`J`CxBt@v@bBtBxAtBvFbJhHzKbAzAfB~Bz@nAhAbBlC`EbHhKlA`BpAxAbAbAzAlAfBnArBdAlAd@rAb@nDdAtFhB|@VjB^rAPtAD|AGpAOd@KvAc@bAc@^UhAy@t@o@~@aAfAkAbAiA|@aAb@GTSr@]t@Sj@GzABzDHCfHGxHC`R?lJNxJHrDDhD?tHD`K?|FD\\?jA?z@?jD?hFfE?",
      },
      summary: "I-70 W",
      warnings: [],
      waypoint_order: [],
    },
  ],
  status: "OK",
};
