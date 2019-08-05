const data = {
  countryName: "England",
  countryCode: "EN",
  mapCenter: {lat: "52.561928", lng: "-1.464854"},
  mapZoom: 6,
  maps: [
    {
      id: "EN_l1_2017-2018",
      category: "FOOTBALL",
      title: "Football 1st division clubs (2017/2018)",
      items: []
    },
    {
      id: "EN_l2_2017-2018",
      category: "FOOTBALL",
      title: "Football 2nd division clubs (2017/2018)",
      items: [
        {name: "Wolverhampton Wanderers", lat: "52.590369", lng: "-2.131498"},
        {name: "Derby County", lat: "52.915168", lng: "-1.447200"},
        {name: "Cardiff City", lat: "51.472821", lng: "-3.206112"},
        {name: "Aston Villa", lat: "52.509349", lng: "-1.884474"},
        {name: "Bristol City", lat: "51.440136", lng: "-2.620929"},
        {name: "Sheffield United", lat: "53.370045", lng: "-1.470522"},
        {name: "Leeds United", lat: "53.777986", lng: "-1.572147"},
        {name: "Fulham", lat: "51.474696", lng: "-0.220533"},
        {name: "Middlesbrough", lat: "54.578148", lng: "-1.217536"},
        {name: "Preston North End", lat: "53.772333", lng: "-2.688289"},
        {name: "Brentford", lat: "51.488018", lng: "-0.302265"},
        {name: "Ipswich Town", lat: "52.055308", lng: "1.145325"},
        {name: "Norwich City", lat: "52.622036", lng: "1.309806"},
        {name: "Queens Park Rangers", lat: "51.509415", lng: "-0.232084"},
        {name: "Nottingham Forest", lat: "52.940504", lng: "-1.132910"},
        {name: "Millwall", lat: "51.485493", lng: "-0.051263"},
        {name: "Sheffield Wednesday", lat: "53.410954", lng: "-1.500974"},
        {name: "Reading", lat: "51.422500", lng: "-0.983496"},
        {name: "Barnsley", lat: "53.551984", lng: "-1.468146"},
        {name: "Hull City", lat: "53.746249", lng: "-0.367924"},
        {name: "Bolton Wanderers", lat: "53.581557", lng: "-2.536943"},
        {name: "Burton Albion", lat: "52.821593", lng: "-1.626960"},
        {name: "Birmingham City", lat: "52.475428", lng: "-1.868415"},
        {name: "Sunderland", lat: "54.914084", lng: "-1.387920"}
      ],
    },
    {
      id: "EN_l3_2017-2018",
      category: "FOOTBALL",
      title: "Football 3nd division clubs (2017/2018)",
      items: [
        {name: "Wigan Athletic", lat: "53.547244", lng: "-2.654499"},
        {name: "Shrewsbury Town", lat: "52.688608", lng: "-2.748405"},
        {name: "Blackburn Rovers", lat: "53.728678", lng: "-2.489174"},
        {name: "Scunthorpe United", lat: "53.587429", lng: "-0.694871"},
        {name: "Bradford City", lat: "53.803998", lng: "-1.759426"},
        {name: "Charlton Athletic", lat: "51.486867", lng: "0.035858"},
        {name: "Portsmouth", lat: "50.796569", lng: "-1.064663"},
        {name: "Rotherham United", lat: "53.427108", lng: "-1.362769"},
        {name: "Peterborough United", lat: "52.564503", lng: "-0.240259"},
        {name: "Oxford United", lat: "51.715894", lng: "-1.207963"},
        {name: "Fleetwood Town", lat: "53.916852", lng: "-3.023899"},
        {name: "Doncaster Rovers", lat: "53.509763", lng: "-1.112932"},
        {name: "Plymouth Argyle", lat: "50.388575", lng: "-4.150990"},
        {name: "Gillingham", lat: "51.384419", lng: "0.560892"},
        {name: "Walsall", lat: "52.565756", lng: "-1.991095"},
        {name: "Blackpool", lat: "53.804379", lng: "-3.046887"},
        {name: "Bristol Rovers", lat: "51.486567", lng: "-2.583294"},
        {name: "Southend United", lat: "51.549588", lng: "0.702111"},
        {name: "Milton Keynes Dons", lat: "52.010004", lng: "-0.734547"},
        {name: "Oldham Athletic", lat: "53.555268", lng: "-2.128335"},
        {name: "Northampton Town", lat: "52.235318", lng: "-0.934171"},
        {name: "AFC Wimbledon", lat: "51.405424", lng: "-0.281403"},
        {name: "Rochdale", lat: "53.620759", lng: "-2.178985"},
        {name: "Bury", lat: "53.581102", lng: "-2.294996"}
      ],
    },
    {
      id: "EN_cities",
      category: "FOOTBALL",
      title: "biggest cities",
      items: [
        {name: "London", lat: "51.507222", lng: "-0.1275"},
        {name: "Birmingham", lat: "52.483056", lng: "-1.893611"},
        {name: "Leeds", lat: "53.799722", lng: "-1.549167"},
        {name: "Bristol", lat: "51.45", lng: "-2.583333"},
        {name: "Liverpool", lat: "53.4", lng: "-3"},
        {name: "Manchester", lat: "53.466667", lng: "-2.233333"},
        {name: "Sheffield", lat: "53.383611", lng: "-1.466944"},
        {name: "Leicester", lat: "52.633333", lng: "-1.133333"},
        {name: "Stoke-on-Trent", lat: "53", lng: "-2.183333"},
        {name: "Bradford", lat: "53.8", lng: "-1.75206"},
        {name: "Coventry", lat: "52.408056", lng: "-1.510556"},
        {name: "Notthingham", lat: "52.953389", lng: "-1.149472"},
        {name: "Kingston-upon-Hull", lat: "53.744333", lng: "-0.3325"},
        {name: "Newcastle-upon-Tyne", lat: "54.966667", lng: "-1.6"},
        {name: "Sunderland", lat: "54.9061", lng: "-1.38113"},
        {name: "Brighton", lat: "50.842941", lng: "-0.131312"},
        {name: "Derby", lat: "52.921944", lng: "-1.475833"},
        {name: "Plymouth", lat: "50.371389", lng: "-4.142222"},
        {name: "Wolverhampton", lat: "52.583333", lng: "-2.133333"},
        {name: "Southampton", lat: "50.9", lng: "-1.4"},
        {name: "Salford", lat: "53.509722", lng: "-2.334444"},
        {name: "Portsmouth", lat: "50.816667", lng: "-1.083333"},
        {name: "Milton Keynes", lat: "52.04", lng: "-0.76"},
        {name: "Northampton", lat: "52.230375", lng: "-0.893753"},
        {name: "Luton", lat: "51.879728", lng: "-0.417478"},
        {name: "Swindon", lat: "51.56", lng: "-1.78"},
        {name: "Warrington", lat: "53.391667", lng: "-2.597222"},
        {name: "Dudley", lat: "52.508", lng: "-2.089"},
        {name: "York", lat: "53.958333", lng: "-1.080278"}
      ]
    }
  ]
};

export const footballClubs = {

}

export default data;
