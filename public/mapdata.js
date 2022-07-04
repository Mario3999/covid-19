var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    popups: "detect",
    
    //State defaults
    state_description: "State Description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: 22,
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: -1,
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    HI: {
      color: "#ff6666",
      name: "Hawaii",
      url: "/13",
      description: "Deaths: 445"
    },
    AK: {
      url: "/0",
      color: "#ff6666",
      name: "Alaska",
      description: "Deaths: 305"
    },
    FL: {
      color: "#990000",
      name: "Florida",
      url: "/10",
      description: "Deaths: 32266"
    },
    NH: {
      color: "#ff6666",
      name: "New Hampshire",
      url: "/33",
      description: "Deaths: 1184"
    },
    VT: {
      color: "#ff6666",
      name: "Vermont",
      url: "/51",
      description: "Deaths: 208"
    },
    ME: {
      color: "#ff6666",
      name: "Maine",
      url: "/23",
      description: "Deaths: 706"
    },
    RI: {
      color: "#ff3333",
      name: "Rhode Island",
      url: "/43",
      description: "Deaths: 2547"
    },
    NY: {
      color: "#990000",
      name: "New York",
      description: "Deaths: 39029",
      url: "/37"
    },
    PA: {
      color: "#990000",
      name: "Pennsylvania",
      description: "Deaths: 24349",
      url: "/41"
    },
    NJ: {
      color: "#990000",
      name: "New Jersey",
      description: "Deaths: 23574",
      url: "/34"
    },
    DE: {
      color: "#ff3333",
      name: "Delaware",
      description: "Deaths: 1473",
      url: "/9"
    },
    MD: {
      color: "#cc0000",
      name: "Maryland",
      description: "Deaths: 7955",
      url: "/22"
    },
    VA: {
      color: "#cc0000",
      name: "Virginia",
      description: "Deaths: 9596",
      url: "/49"
    },
    WV: {
      color: "#ff3333",
      name: "West Virginia",
      description: "Deaths: 2325",
      url: "/54"
    },
    OH: {
      color: "#990000",
      name: "Ohio",
      description: "Deaths: 17656",
      url: "/38"
    },
    IN: {
      color: "#cc0000",
      name: "Indiana",
      description: "Deaths: 12737",
      url: "/17"
    },
    IL: {
      color: "#990000",
      name: "Illinois",
      description: "Deaths: 23014",
      url: "/16"
    },
    CT: {
      color: "#cc0000",
      name: "Connecticut",
      description: "Deaths: 7704",
      url: "/7"
    },
    WI: {
      color: "#cc0000",
      name: "Wisconsin",
      description: "Deaths: 7106",
      url: "/53"
    },
    NC: {
      color: "#cc0000",
      name: "North Carolina",
      description: "Deaths: 11502",
      url: "/30"
    },
    DC: {
      color: "#ff6666",
      name: "District of Columbia",
      description: "Deaths: 1030",
      url: "/8"
    },
    MA: {
      color: "#990000",
      name: "Massachusetts",
      description: "Deaths: 16417",
      url: "/21"
    },
    TN: {
      color: "#cc0000",
      name: "Tennessee",
      description: "Deaths: 11543",
      url: "/46"
    },
    AR: {
      color: "#ff0000",
      name: "Arkansas",
      description: "Deaths: 5319",
      url: "/2"
    },
    MO: {
      color: "#cc0000",
      name: "Missouri",
      description: "Deaths:  8161",
      url: "/26"
    },
    GA: {
      color: "#990000",
      name: "Georgia",
      description: "Deaths: 17906",
      url: "/11"
    },
    SC: {
      color: "#cc0000",
      name: "South Carolina",
      description: "Deaths: 8754",
      url: "/44"
    },
    KY: {
      color: "#ff0000",
      name: "Kentucky",
      description: "Deaths: 4819",
      url: "/19"
    },
    AL: {
      color: "#cc0000",
      name: "Alabama",
      description: "Deaths: 10148",
      url: "/1"
    },
    LA: {
      color: "#cc0000",
      name: "Louisiana",
      description: "Deaths: 9748",
      url: "/20"
    },
    MS: {
      color: "#ff0000",
      name: "Mississippi",
      description: "Deaths: 6808",
      url: "/28"
    },
    IA: {
      color: "#ff0000",
      name: "Iowa",
      description: "Deaths: 5558",
      url: "/14"
    },
    MN: {
      color: "#ff0000",
      name: "Minnesota",
      description: "Deaths: 6550",
      url: "/25"
    },
    OK: {
      color: "#ff0000",
      name: "Oklahoma",
      description: "Deaths: 4534",
      url: "/39"
    },
    TX: {
      color: "#990000",
      name: "Texas",
      description: "Deaths: 44451",
      url: "/47"
    },
    NM: {
      color: "#ff0000",
      name: "New Mexico",
      description: "Deaths: 3808",
      url: "/35"
    },
    KS: {
      color: "#ff0000",
      name: "Kansas",
      description: "Deaths: 4812",
      url: "/18"
    },
    NE: {
      color: "#ff3333",
      name: "Nebraska",
      description: "Deaths: 2113",
      url: "/32"
    },
    SD: {
      color: "#ff3333",
      name: "South Dakota",
      description: "Deaths: 1900",
      url: "/45"
    },
    ND: {
      color: "#ff3333",
      name: "North Dakota",
      description: "Deaths: 1478",
      url: "/31"
    },
    WY: {
      color: "#ff6666",
      name: "Wyoming",
      description: "Deaths: 682",
      url: "/55"
    },
    MT: {
      color: "#ff3333",
      name: "Montana",
      description: "Deaths: 1381",
      url: "/29"
    },
    CO: {
      color: "#ff0000",
      name: "Colorado",
      description: "Deaths: 5989",
      url: "/6"
    },
    UT: {
      color: "#ff3333",
      name: "Utah",
      description: "Deaths: 1976",
      url: "/48"
    },
    AZ: {
      color: "#990000",
      name: "Arizona",
      description: "Deaths: 16328",
      url: "/4"
    },
    NV: {
      color: "#ff0000",
      name: "Nevada",
      description: "Deaths: 5037",
      url: "/36"
    },
    OR: {
      color: "#ff3333",
      name: "Oregon",
      description: "Deaths: 2296",
      url: "/40"
    },
    WA: {
      color: "#ff0000",
      name: "Washington",
      description: "Deaths: 5041",
      url: "/52"
    },
    CA: {
      color: "#990000",
      name: "California",
      description: "Deaths: 54124",
      url: "/5"
    },
    MI: {
      color: "#990000",
      name: "Michigan",
      description: "Deaths: 16658",
      url: "/24"
    },
    ID: {
      color: "#ff3333",
      name: "Idaho",
      description: "Deaths: 1879",
      url: "/15"
    },
    GU: {
      color: "#ff6666",
      hide: "yes",
      name: "Guam",
      description: "Deaths: 133",
      url: "/12"
    },
    VI: {
      color: "#ff6666",
      hide: "yes",
      name: "Virgin Islands",
      description: "Deaths: 25",
      url: "/50"
    },
    PR: {
      color: "#ff3333",
      hide: "yes",
      name: "Puerto Rico",
      description: "Deaths: 2062",
      url: "/42"
    },
    MP: {
      color: "#ff6666",
      hide: "yes",
      name: "Northern Mariana Islands",
      description: "Deaths: 2",
      url: "/27"
    },
    AS: {
      color: "#ff6666",
      hide: "yes",
      name: "American Samoa",
      description: "Deaths: 0",
      url: "/3"
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "all"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "all"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "all"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "all"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "all"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580"
    }
  },
  legend: {
    entries: []
  },
  regions: {},
  data: {
    data: {
      AK: "305",
      AL: "10148",
      AR: "5319",
      AS: "0",
      AZ: "16328",
      CA: "54124",
      CO: "5989",
      CT: "7704",
      DC: "1030",
      DE: "1473",
      FL: "32266",
      GA: "17906",
      GU: "133",
      HI: "445",
      IA: "5558",
      ID: "1879",
      IL: "23014",
      IN: "12737",
      KS: "4812",
      KY: "4819",
      LA: "9748",
      MA: "16417",
      MD: "7955",
      ME: "706",
      MI: "16658",
      MN: "6550",
      MO: "8161",
      MP: "2",
      MS: "6808",
      MT: "1381",
      NC: "11502",
      ND: "1478",
      NE: "2113",
      NH: "1184",
      NJ: "23574",
      NM: "3808",
      NV: "5037",
      NY: "39029",
      OH: "17656",
      OK: "4534",
      OR: "2296",
      PA: "24349",
      PR: "2062",
      RI: "2547",
      SC: "8754",
      SD: "1900",
      TN: "11543",
      TX: "44451",
      UT: "1976",
      VA: "9596",
      VI: "25",
      VT: "208",
      WA: "5041",
      WI: "7106",
      WV: "2325",
      WY: "682"
    }
  }
};