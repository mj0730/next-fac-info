//SES 2020 Payscale max (applies to base and any COLA)
const PAY_CAP = 197300;

//Basic Pay Scale current Jan 2020
const BASIC_PAY = [
  {
    level : 4,
    pay : {
      cpc : [52918, 71438],
      d3 : 49863
    }
  },
  {
    level : 5,
    pay : {
      cpc : [60061, 81802],
      d3 : 55219
    }
  },
  {
    level : 6,
    pay : {
      cpc : [66370, 89598],
      d3 : 59951,
      d2 : 53531
    }
  },
  {
    level : 7,
    pay : {
      cpc : [73338, 99006],
      d3 : 65179,
      d2 : 57017,
      d1 : 48854
    }
  },
  {
    level : 8,
    pay : {
      cpc : [81040, 109404],
      d3 : 70953,
      d2 : 60866,
      d1 : 50781
    }
  },
  {
    level : 9,
    pay : {
      cpc : [89546, 120887],
      d3 : 77335,
      d2 : 65119,
      d1 : 52909
    }
  },
  {
    level : 10,
    pay : {
      cpc : [102980, 139022],
      d3 : 87407,
      d2 : 71836,
      d1 : 56267
    }
  },
  {
    level : 11,
    pay : {
      cpc : [108382, 146318],
      d3 : 91461,
      d2 : 74540,
      d1 : 57616
    }
  },
  {
    level : 12,
    pay : {
      cpc : [113804, 153636],
      d3 : 95527,
      d2 : 77251,
      d1 : 58972
    }
  },
  {
    ag : 40694
  }
];

//Locality 2020
const LOCALITY = 
{ 
  alaska : {
    fullName : `Alaska`,
    percentage : .2967,
    facilities : ['A11', 'ANC', 'FAI', 'JNU', 'MRI', 'ZAN']
  },

  albany : {
    fullName : `Albany-Schenectady, NY-MA`,
    percentage : .1788,
    facilities : ['ALB']
  },

  albuquerque : {
    fullName : `Albuquerque-Santa Fe, NM`,
    percentage : .1668,
    facilities : ['ABQ', 'ZAB']
  },

  atlanta : {
    fullName : `Atlanta, GA`,
    percentage : .2216,
    facilities : ['A80', 'ATL', 'PDK', 'ZTL']
  },

  austin : {
    fullName : `Austin, TX`,
    percentage :.1817,
    facilities : ['AUS']
  },

  birmingham : {
    fullName : `Birmingham-Hoover-Talladega, AL`,
    percentage : .1626,
    facilities : ['BHM']
  },

  boston : {
      fullName : `Boston, Worcester-Lawrence, Massachusetts - New Hampshire - Maine - Connecticut`,
      percentage : .2911,
      facilities : ['A90', 'BED', 'BOS', 'MHT', 'PVD', 'PWM', 'ZBW']
  },

  buffalo : {
      fullName : `Buffalo`,
      percentage : .2020,
      facilities : ['BUF']
  },

  burlington : {
      fullName : `Burlington-South Burlington, VT`,
      percentage : .1689,
      facilities : ['BTV']
  },

  charlotte : {
      fullName : `Charlotte-Concord, NC-SC`,
      percentage : .1744,
      facilities : ['CLT']
  },

  chicago : {
      fullName : `Chicago-Naperville, IL-IN-WI`,
      percentage : .2859,
      facilities : ['ARR', 'C90', 'DPA', 'MDW', 'ORD', 'PWK', 'ZAU']
  },

  cincinnati : {
      fullName : `Cincinnati-Hamilton, Ohio - Kentucky - Indiana`,
      percentage : .2055,
      facilities : ['CVG']
  },

  cleveland : {
      fullName : `Cleveland-Akron, Ohio`,
      percentage : .2082,
      facilities : ['CAK', 'CLE', 'ZOB']
  },

  coloradoSprings : {
      fullName : `Colorado Springs, CO`,
      percentage : .1778,
      facilities : ['COS', 'PUB']
  },

  columbus : {
      fullName : `Columbus, Ohio`,
      percentage : .2002,
      facilities : ['CMH']
  },

  corpusChristi : {
      fullName : `Corpus Christi, TX`,
      percentage : .1656,
      facilities : ['CRP']
  },

  dallas : {
      fullName : `Dallas-Fort Worth, Texas`,
      percentage : .2468,
      facilities : ['ADS', 'AFW', 'D10', 'DAL', 'DFW', 'FTW', 'ZFW']
  },

  davenport : {
      fullName : `Davenport-Moline, IA-IL`,
      percentage : .1704,
      facilities : ['MLI']
  },
  
  dayton : {
      fullName : `Dayton-Springfield, Ohio`,
      percentage : .1918,
      facilities : ['DAY']
  },
  
  denver : {
      fullName : `Denver-Boulder-Greeley, Colorado`,
      percentage : .2713,
      facilities : ['APA', 'BJC', 'D01', 'DEN', 'ZDV']
  },
  
  detroit : {
      fullName : `Detroit-Ann Arbor-Flint, Michigan`,
      percentage : .2732,
      facilities : ['ARB', 'D21', 'DTW', 'FNT', 'PTK','YIP']
  },

  harrisburg : {
      fullName : `Harrisburg-Lebanon, PA`,
      percentage : .1720,
      facilities : ['MDT']
  },
  
  hartford : {
      fullName : `Hartford, Connecticut (including all of New London County, CT)`,
      percentage : .2949,
      facilities : ['BDL', 'Y90']
  },
  
  hawaii : {
      fullName : `Hawaii`,
      percentage : .1956,
      facilities : ['HCF', 'ITO', 'OGG']
  },
  
  houston : {
      fullName : `Houston-The Woodlands, TX`,
      percentage : .3332,
      facilities : ['DWH', 'HOU', 'I90', 'IAH', 'ZHU']
  },
  
  huntsville : {
      fullName : `Huntsville, Alabama`,
      percentage : .1985,
      facilities : ['HSV']
  },
  
  indianapolis : {
      fullName : `Indianapolis, Indiana`,
      percentage : .1692,
      facilities : ['IND', 'ZID']
  },
  
  kansasCity : {
      fullName : `Kansas City, MO-KS`,
      percentage : .1713,
      facilities : ['MCI', 'MKC', 'ZKC']
  },
  
  laredo : {
      fullName : `Laredo, TX`,
      percentage : .1888,
      facilities : []
  },
  
  lasVegas : {
      fullName : `Las Vegas-Henderson, NV-AZ`,
      percentage : .1768,
      facilities : ['L30', 'LAS', 'VGT']
  },

  losAngeles : {
      fullName : `Los Angeles-Riverside-Orange County, California `,
      percentage : .3241,
      facilities : ['BFL', 'BUR', 'CMA', 'CNO', 'EMT', 'JCF', 'LAX', 'LGB', 'ONT', 'POC', 'PSP', 'SBA', 'SNA', 'SMO', 'TOA', 'VNY', 'ZLA']
  },

  miami : {
      fullName : `Miami-Fort Lauderdale, Florida`,
      percentage : .2351,
      facilities : ['FLL', 'FPR', 'FXE', 'MIA', 'PBI', 'TMB', 'VRB', 'ZMA']
  },

  milwaukee : {
      fullName : `Milwaukee-Racine, Wisconsin`,
      percentage : .2096,
      facilities : ['MKE']
  },

  minneapolis : {
      fullName : `Minneapolis-St. Paul, Minnesota - Wisconsin`,
      percentage : .2466,
      facilities : ['FCT', 'M98', 'MIC', 'MSP', 'STP', 'ZMP']
  },

  newYork : {
      fullName : `New York-Northern New Jersey-Long Island, New York - New Jersey - Connecticut - Pennsylvania`,
      percentage : .3398,
      facilities : ['ABE', 'CDW', 'EWR', 'FRG', 'HPN', 'ISP', 'JFK', 'LGA', 'MMU', 'N90', 'POU', 'TEB', 'ZNY']
  },

  omaha : {
      fullName : `Omaha, NE`,
      percentage : .1633,
      facilities : ['OMA', 'R90']
  },

  palmBay : {
      fullName : `Palm Bay, Florida`,
      percentage : .1673,
      facilities : []
  },

  philadelphia : {
      fullName : `Philadelphia-Wilmington-Atlantic City, Pennsylvania - New Jersey - Delaware - Maryland`,
      percentage : .2604,
      facilities : ['ACY', 'ILG', 'PHL', 'PNE', 'RDG']
  },

  phoenix : {
      fullName : `Phoenix, Arizona`,
      percentage : .2012,
      facilities : ['DVT', 'FFZ', 'P50', 'PHX', 'SDL']
  },

  pittsburgh : {
      fullName : `Pittsburgh, Pennsylvania`,
      percentage : .1940,
      facilities : ['AGC', 'PIT']
  },

  portland : {
      fullName : `Portland-Salem, Oregon - Washington`,
      percentage : .2374,
      facilities : ['HIO', 'P80', 'PDX']
  },

  raleigh : {
      fullName : `Raleigh, North Carolina`,
      percentage : .2049,
      facilities : ['FAY', 'RDU']
  },

  richmond : {
      fullName : `Richmond-Petersburg, Virginia`,
      percentage : .1995,
      facilities : ['RIC']
  },

  sacramento : {
      fullName : `Sacramento-Yolo, California`,
      percentage : .2637,
      facilities : ['NCT', 'SMF']
  },

  sanAntonio : {
      fullName : `San Antonio-New Braunfels-Pearsall, TX`,
      percentage : .1677,
      facilities : ['SAT']
  },

  sanDiego : {
      fullName : `San Diego, California`,
      percentage : .2977,
      facilities : ['CRQ', 'MYF', 'SCT', 'SEE', 'SAN']
  },

  sanFrancisco : {
      fullName : `San Francisco-Oakland-San Jose, California`,
      percentage : .4144,
      facilities : ['APC', 'CCR', 'HWD', 'LVK', 'MRY', 'OAK', 'PAO', 'RHV', 'SCK', 'SFO', 'SJC', 'STS', 'ZOA']
  },

  seattle : {
      fullName : `Seattle-Tacoma-Bremerton, Washington`,
      percentage : .2702,
      facilities : ['BFI', 'PAE', 'S46', 'SEA', 'ZSE']
  },

  stLouis : {
      fullName : `St Louis-St Charlies-Farmingron, MO-IL`,
      percentage : .1765,
      facilities : ['CPS', 'STL', 'SUS', 'T75']
  },
  
  tucson : {
      fullName : `Tucson, AZ`,
      percentage : .1719,
      facilities : ['TUS', 'U90']
  },

  virginiaBeach : {
      fullName : `Virginia Beach-Norfolk, VA-NC`,
      percentage : .1651,
      facilities : ['ORF']
  },

  washington : {
      fullName : `Washington-Baltimore, District of Columbia - Maryland - Virginia - West Virginia`,
      percentage : .3048,
      facilities : ['ADW', 'BWI', 'DCA', 'HEF', 'IAD', 'PCT', 'ZDC']
  },

  rus : {
      fullName :  `Rest of United States`,
      percentage : .1595,
      facilities : [] //Do not enter anything
    },
}

//Facility list
const FACILITIES = {
    A11: {id: 'A11', name: 'Anchorage TRACON', level: 8, type: 'TRACON', address: '5200 W International Airport Rd', city: 'Anchorage', state: 'AK', zip: '99502', phone : '907-271-2700', hours: '0000-2359', travelDays: 9},
    A80: {id: 'A80', name: 'Atlanta TRACON', level: 12, type: 'TRACON', address: '784 S Hwy 74', city: 'Peachtree City', state: 'GA', zip: '30269', phone : '678-364-6000', hours: '0000-2359', travelDays: 2},
    A90: {id: 'A90', name: 'Boston TRACON', level: 11, type: 'TRACON', address: '25 Robert Milligan Pkwy', city: 'Merrimack', state: 'NH', zip: '03054', phone : '603-594-5501', hours: '0000-2359', travelDays: 4},
    ABE: {id: 'ABE', name: 'Allentown Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '135 Fashion Dr S', city: 'Allentown', state: 'PA', zip: '18109', phone : '610-264-4539', hours: '0000-2359', travelDays: 3},
    ABI: {id: 'ABI', name: 'Abilene Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '2925 Lance Dr', city: 'Abilene', state: 'TX', zip: '79602', phone : '325-201-9442', hours: '0000-2359', travelDays: 1},
    ABQ: {id: 'ABQ', name: 'Albuquerque Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '2800 Kirtland Dr SE', city: 'Albuquerque', state: 'NM', zip: '87117', phone : '505-856-4900', hours: '0000-2359', travelDays: 2},
    ACK: {id: 'ACK', name: 'Nantucket Tower', level: 5, type: 'TOWER WITH RADAR', address: '14 Airport Rd Unit 14', city: 'Nantucket', state: 'MA', zip: '02554', phone : '508-563-1487', hours: '0600-2200 MAY 15-SEP 30; 0600-2100 OCT 1-MAY 14', travelDays: 4},
    ACT: {id: 'ACT', name: 'Waco Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '7909 Karl May Dr', city: 'Waco', state: 'TX', zip: '76708', phone : '254-759-3015', hours: '0600-0000', travelDays: 1},
    ACY: {id: 'ACY', name: 'Atlantic City Tower', level: 7, type: 'COMBINED TRACON TOWER', address: 'Atlantic City International Airport', city: 'Atlantic City', state: 'NJ', zip: '08405', phone : '603-641-3940', hours: '0000-2359', travelDays: 4},
    ADS: {id: 'ADS', name: 'Addison Tower', level: 5, type: 'TOWER WITH RADAR', address: '16000 Dooley Rd', city: 'Addison', state: 'TX', zip: '75001', phone : '972-628-2403', hours: '0600-2200', travelDays: 1},
    ADW: {id: 'ADW', name: 'Andrews Tower', level: 5, type: 'TOWER WITH RADAR', address: 'FAA Andrews Air Base ATCT', city: 'Andrews AFB', state: 'MD', zip: '240-312-4096', phone : '240-312-4096', hours: '0000-2359', travelDays: 3},
    AFW: {id: 'AFW', name: 'Alliance Tower', level: 5, type: 'TOWER WITH RADAR', address: '2300 Alliance Blvd', city: 'Fort Worth', state: 'TX', zip: '76177', phone : '817-491-6100', hours: '0000-2359', travelDays: 1},
    AGC: {id: 'AGC', name: 'Allegheny Tower', level: 4, type: 'TOWER WITH RADAR', address: '12 Allegheny County Airport', city: 'West Mifflin', state: 'PA', zip: '15122', phone : '412-461-4388', hours: '0000-2359', travelDays: 3},
    AGS: {id: 'AGS', name: 'Augusta Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '1540 Hangar Rd', city: 'Augusta', state: 'GA', zip: '30906', phone : '706-798-5198', hours: '0645-2300', travelDays: 3},
    ALB: {id: 'ALB', name: 'Albany Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '128 Sicker Rd', city: 'Latham', state: 'NY', zip: '12110', phone : '518-862-1600', hours: '0000-2359', travelDays: 4},
    ALO: {id: 'ALO', name: 'Waterloo Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '2740 Livingston La', city: 'Waterloo', state: 'IA', zip: '50703', phone : '319-233-7230', hours: '0600-2000', travelDays: 2},
    AMA: {id: 'AMA', name: 'Amarillo Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '2000 English Rd', city: 'Amarillo', state: 'TX', zip: '79108', phone : '806-335-4090', hours: '0600-0000', travelDays: 1},
    ANC: {id: 'ANC', name: 'Anchorage Tower', level: 8, type: 'TOWER WITH RADAR', address: '5200 W International Airport Rd', city: 'Anchorage', state: 'AK', zip: '99502', phone : '', hours: '0000-2359', travelDays: 9},
    APA: {id: 'APA', name: 'Centennial Tower', level: 8, type: 'TRATOWER WITH RADARCON', address: '7800 S Peoria St E Wing', city: 'Englewood', state: 'CO', zip: '80112', phone : '720-873-2770', hours: '0000-2359', travelDays: 2},
    APC: {id: 'APC', name: 'Napa Tower', level: 8, type: 'TOWER WITH RADAR', address: '4000 Airport Rd', city: 'Napa', state: 'CA', zip: '94558', phone : '707-255-1533', hours: '0700-2000', travelDays: 4},
    ARB: {id: 'ARB', name: 'Ann Arbor Tower', level: 4, type: 'TOWER WITH RADAR', address: '875 Airport Dr', city: 'Ann Arbor', state: 'MI', zip: '48108', phone : '734-769-1830', hours: '0800-2000', travelDays: 3},
    ARR: {id: 'ARR', name: 'Aurora Tower', level: 4, type: 'TOWER WITH RADAR', address: '43 W 690 US 30', city: 'Sugar Grove', state: 'IL', zip: '60554', phone : '630-466-5610', hours: '0700-2100', travelDays: 2},
    ASE: {id: 'ASE', name: 'Aspen Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '150 W Airport Rd', city: 'Aspen', state: 'CO', zip: '81611', phone : '970-925-3703', hours: 'ATCT 0700-2200, TRACON 0700-2000', travelDays: 2},
    ATL: {id: 'ATL', name: 'Atlanta Tower', level: 12, type: 'TOWER WITH RADAR', address: '1106 M H Jackson Service Rd', city: 'Atlanta', state: 'GA', zip: '30354', phone : '404-559-5800', hours: '0000-2359', travelDays: 2},
    AUS: {id: 'AUS', name: 'Austin Tower', level: 9, type: 'COMBINED TRACON TOWER', address: '10102 Aircraft Ln', city: 'Austin', state: 'TX', zip: '78719', phone : '512-369-7800', hours: '0000-2359', travelDays: 1},
    AVL: {id: 'AVL', name: 'Asheville Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '61 Terminal Dr', city: 'Fletcher', state: 'NC', zip: '28732', phone : '828-684-0421', hours: '0630-2300', travelDays: 3},
    AVP: {id: 'AVP', name: 'Wilkes-Barre Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '534 Lidy Rd', city: 'Dupont', state: 'PA', zip: '18641', phone : '570-655-7500', hours: '0000-2359', travelDays: 3},
    AZO: {id: 'AZO', name: 'Kalamazoo Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '5400 Aviation Dr', city: 'Portgage', state: 'MI', zip: '49002', phone : '269-459-3350', hours: '0600-2300', travelDays: 2},
    BDL: {id: 'BDL', name: 'Bradley Tower', level: 5, type: 'TOWER WITH RADAR', address: '35 Perimeter Rd', city: 'Windsor Locks', state: 'CT', zip: '06096', phone : '860-386-3500', hours: '0000-2359', travelDays: 4},
    BED: {id: 'BED', name: 'Hanscom Tower', level: 6, type: 'TOWER WITH RADAR', address: 'LG Hanscom Field', city: 'Bedford', state: 'MA', zip: '01731', phone : '781-372-5500', hours: '0700-2300', travelDays: 4},
    BFI: {id: 'BFI', name: 'Boeing Tower', level: 7, type: 'TOWER WITH RADAR', address: '8200 E Marginal Way', city: 'Seattle', state: 'WA', zip: '98108', phone : '206-658-6400', hours: '0000-2359', travelDays: 5},
    BFL: {id: 'BFL', name: 'Bakersfield Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '1547 Boughton Dr', city: 'Bakersfield', state: 'CA', zip: '93308', phone : '661-399-3531', hours: '0600-2300', travelDays: 3},
    BGM: {id: 'BGM', name: 'Binghamton Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '2534 Airport Rd', city: 'Johnson City', state: 'NY', zip: '13790', phone : '607-729-6145', hours: '0600-0000', travelDays: 4},
    BGR: {id: 'BGR', name: 'Bangor Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '617 Griffin Rd', city: 'Bangor', state: 'ME', zip: '04401', phone : '207-561-2500', hours: '0000-2359', travelDays: 5},
    BHM: {id: 'BHM', name: 'Birmingham Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '5900 Messer Airport Hwy', city: 'Birmingham', state: 'AL', zip: '35212', phone : '205-769-3900', hours: '0000-2359', travelDays: 2},
    BIL: {id: 'BIL', name: 'Billings Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '1907 Terminal Cir', city: 'Bilings', state: 'MT', zip: '59105', phone : '406-255-2750', hours: '0000-2359', travelDays: 3},
    BIS: {id: 'BIS', name: 'Bismarck Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '2301 University Dr', city: 'Bismark', state: 'ND', zip: '58504', phone : '701-223-8790', hours: '0600-2359', travelDays: 2},
    BJC: {id: 'BJC', name: 'Rocky Mountain Metro Tower', level: 6, type: 'TOWER WITH RADAR', address: '11001 Control Tower Dr', city: 'Westminster', state: 'CO', zip: '80021', phone : '720-633-8600', hours: '0600-2200', travelDays: 2},
    BNA: {id: 'BNA', name: 'Nashville Tower', level: 9, type: 'COMBINED TRACON TOWER', address: '515 Olen Taylor Dr', city: 'Nashville', state: 'TN', zip: '37217', phone : '615-695-4500', hours: '0000-2359', travelDays: 2},
    BOI: {id: 'BOI', name: 'Boise Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '3001 W Harvard Way', city: 'Boise', state: 'ID', zip: '83705', phone : '208-364-5801', hours: '0000-2359', travelDays: 4},
    BOS: {id: 'BOS', name: 'Boston Tower', level: 10, type: 'TOWER WITH RADAR', address: '600 Control Tower', city: 'East Boston', state: 'MA', zip: '02128', phone : '617-455-3100', hours: '0000-2359', travelDays: 4},
    BPT: {id: 'BPT', name: 'Beaumont Tower', level: 4, type: 'TOWER WITH RADAR', address: '5040 W Airline Dr', city: 'Beaumont', state: 'TX', zip: '77705', phone : '409-720-5100', hours: '0600-2200', travelDays: 1},
    BTR: {id: 'BTR', name: 'Baton Rouge Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '8326 Merle Gustafson Dr', city: 'Baton Rouge', state: 'LA', zip: '70807', phone : '225-354-2100', hours: '0500-0000', travelDays: 2},
    BTV: {id: 'BTV', name: 'Burlington Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '1250 Airport Dr', city: 'South Burlington', state: 'VT', zip: '05403', phone : '802-657-4400', hours: '0530-0000', travelDays: 4},
    BUF: {id: 'BUF', name: 'Buffalo Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '165 Holtz Rd', city: 'Cheektowaga', state: 'NY', zip: '14225', phone : '716-633-0660', hours: '0000-2359', travelDays: 3},
    BUR: {id: 'BUR', name: 'Burbank Tower', level: 7, type: 'TOWER WITH RADAR', address: '2821 Hollywood Way', city: 'Burbank', state: 'CA', zip: '91505', phone : '818-567-4806', hours: '0000-2359', travelDays: 3},
    BWI: {id: 'BWI', name: 'Baltimore Tower', level: 8, type: 'TOWER WITH RADAR', address: '7062 Elm Rd', city: 'Baltimore', state: 'MD', zip: '21240', phone : '410-859-7255', hours: '0000-2359', travelDays: 3},
    C90: {id: 'C90', name: 'Chicago TRACON', level: 12, type: 'TRACON', address: '1100 Bowes Rd', city: 'Elgin', state: 'IL', zip: '60123', phone : '847-608-5509', hours: '0000-2359', travelDays: 2},
    CAE: {id: 'CAE', name: 'Columbia Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '2821 Aviation Way', city: 'West Columbia', state: 'SC', zip: '29170', phone : '803-822-4500', hours: '0000-2359', travelDays: 3},
    CAK: {id: 'CAK', name: 'Akron-Canton Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '5400 Lauby Rd NW', city: 'North Canton', state: 'OH', zip: '44720', phone : '330-492-3801', hours: 'ATCT 0000-2359, TRACON 0600-0000', travelDays: 3},
    CCR: {id: 'CCR', name: 'Concord Tower', level: 5, type: 'TOWER WITH RADAR', address: '201 John Glenn Dr', city: 'Concord', state: 'CA', zip: '94520', phone : '925-685-5743', hours: '0700-2200', travelDays: 4},
    CDW: {id: 'CDW', name: 'Caldwell Tower', level: 5, type: 'TOWER WITH RADAR', address: '31 Wright Way Ste #1', city: 'Fairfield', state: 'NJ', zip: '07004', phone : '973-575-6448', hours: '0700-2300', travelDays: 4},
    CHA: {id: 'CHA', name: 'Chatanooga Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '5921 Pinehurst Ave', city: 'Chattanooga', state: 'TN', zip: '37421', phone : '423-855-6475', hours: '0600-2350', travelDays: 2},
    CHS: {id: 'CHS', name: 'Charleston Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '5775 S Aviation Ave', city: 'Charleston', state: 'SC', zip: '29406', phone : '843-414-2800', hours: '0000-2359', travelDays: 3},
    CID: {id: 'CID', name: 'Cedar Rapids Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '9455 Shepard Ct SW', city: 'Cedar Rapids', state: 'IA', zip: '52404', phone : '319-364-2344', hours: '0500-2330', travelDays: 2},
    CKB: {id: 'CKB', name: 'Clarksburg Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '2500 Aviation Way', city: 'Bridgeport', state: 'WV', zip: '26330', phone : '304-842-4465', hours: '0600-2300 MON - FRI, 0700-2300 SAT - SUN', travelDays: 3},
    CLE: {id: 'CLE', name: 'Cleveland Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '5300 Riverside Dr', city: 'Cleveland', state: 'OH', zip: '44135', phone : '216-898-2020', hours: '0000-2359', travelDays: 3},
    CLT: {id: 'CLT', name: 'Charlotte Tower', level: 12, type: 'COMBINED TRACON TOWER', address: '5507 Josh BirMham Pkwy', city: 'Charlotte', state: 'NC', zip: '28208', phone : '704-359-1000', hours: '0000-2359', travelDays: 3},
    CMA: {id: 'CMA', name: 'Camarillo Tower', level: 6, type: 'TOWER WITH RADAR', address: '797 Aviation Dr', city: 'Camarillo', state: 'CA', zip: '93010', phone : '805-388-9730', hours: '0700-2100', travelDays: 3},
    CMH: {id: 'CMH', name: 'Columbus Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '4277 International Gtwy', city: 'Columbus', state: 'OH', zip: '43219', phone : '614-338-4030', hours: '0000-2359', travelDays: 2},
    CMI: {id: 'CMI', name: 'Champaign Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '1 Airport Rd', city: 'Savoy', state: 'IL', zip: '61874', phone : '217-355-4060', hours: '0600-2300', travelDays: 2},
    CNO: {id: 'CNO', name: 'Chino Tower', level: 7, type: 'TOWER WITH RADAR', address: '7000 Merrill Ave', city: 'Chino', state: 'CA', zip: '91710', phone : '909-597-1703', hours: '0700-2100', travelDays: 3},
    COS: {id: 'COS', name: 'Colorado Springs Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '460 Kincheloe Loop', city: 'Peterson AFB', state: 'CO', zip: '80914', phone : '719-380-6700', hours: '0000-2359', travelDays: 2},
    CPR: {id: 'CPR', name: 'Casper Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '7710 Fuller St', city: 'Casper', state: 'WY', zip: '82604', phone : '307-472-8940', hours: '0500-2100', travelDays: 2},
    CPS: {id: 'CPS', name: 'Downtown Tower', level: 6, type: 'TOWER WITH RADAR', address: '9951 Molla Dr', city: 'Cahokia', state: 'IL', zip: '62206', phone : '618-337-2589', hours: '0630-2200', travelDays: 1},
    CRP: {id: 'CRP', name: 'Corpus Christi Tower', level: 9, type: 'COMBINED TRACON TOWER', address: '6902 McGloin Rd', city: 'Corpus Christi', state: 'TX', zip: '78415', phone : '361-299-4200', hours: '0000-2359', travelDays: 2},
    CRQ: {id: 'CRQ', name: 'Palomar Tower', level: 6, type: 'TOWER WITH RADAR', address: '2200 Palomar Airport Rd', city: 'Carlsbad', state: 'CA', zip: '92010', phone : '760-438-4969', hours: '0700-2200', travelDays: 3},
    CRW: {id: 'CRW', name: 'Charleston Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '100 Airport Rd', city: 'Charleston', state: 'WV', zip: '25311', phone : '304-347-5285', hours: '0000-2359', travelDays: 3},
    CSG: {id: 'CSG', name: 'Columbus Tower', level: 4, type: 'TOWER WITH RADAR', address: '3250 W Britt David Rd', city: 'Columbus', state: 'GA', zip: '31909', phone : '706-323-4363', hours: '0900-2100', travelDays: 2},
    CVG: {id: 'CVG', name: 'Cincinnati Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '56 New Price Pike', city: 'Erlanger', state: 'KY', zip: '41018', phone : '859-372-6400', hours: '0000-2359', travelDays: 2},
    D01: {id: 'D01', name: 'Denver TRACON', level: 12, type: 'TRACON', address: '26705 E 68th Ave', city: 'Denver', state: 'CO', zip: '80249', phone : '303-342-1500', hours: '0000-2359', travelDays: 2},
    D10: {id: 'D10', name: 'Dallas - Ft Worth TRACON', level: 12, type: 'TRACON', address: '2401 International Pkwy', city: 'DFW Airport', state: 'TX', zip: '75261', phone : '972-615-2500', hours: '0000-2359', travelDays: 1},
    D21: {id: 'D21', name: 'Detroit TRACON', level: 11, type: 'TRACON', address: 'Detroit Metro Airport', city: 'Detroit', state: 'MI', zip: '48242', phone : '734-955-5000', hours: '0000-2359', travelDays: 3},
    DAB: {id: 'DAB', name: 'Daytona Beach Tower', level: 9, type: 'COMBINED TRACON TOWER', address: '2302 Bellevue Ave', city: 'Daytona Beach', state: 'FL', zip: '32114', phone : '386-226-3900', hours: '0000-2359', travelDays: 3},
    DAL: {id: 'DAL', name: 'Dallas Love Tower', level: 8, type: 'TOWER WITH RADAR', address: '8100 Aviation Pl', city: 'Dallas', state: 'TX', zip: '75235', phone : '214-353-1500', hours: '0000-2359', travelDays: 1},
    DAY: {id: 'DAY', name: 'Dayton Tower', level: 4, type: 'TOWER WITH RADAR', address: '3753 Cargo Rd', city: 'Vandalia', state: 'OH', zip: '45377', phone : '937-415-6800', hours: '0000-2359', travelDays: 2},
    DCA: {id: 'DCA', name: 'Washington National Tower', level: 9, type: 'TOWER WITH RADAR', address: '1 Aviation Circle', city: 'Washington', state: 'DC', zip: '20001', phone : '703-413-1530', hours: '0000-2359', travelDays: 3},
    DEN: {id: 'DEN', name: 'Denver Tower', level: 12, type: 'TOWER WITH RADAR', address: '8400 Pena Blvd Unit 492056', city: 'Denver', state: 'CO', zip: '80249', phone : '303-342-1600', hours: '0000-2359', travelDays: 2},
    DFW: {id: 'DFW', name: 'DFW Tower', level: 12, type: 'TOWER WITH RADAR', address: '2401 International Pkwy', city: 'DFW Airport', state: 'TX', zip: '75261', phone : '972-615-2600', hours: '0000-2359', travelDays: 1},
    DLH: {id: 'DLH', name: 'Duluth Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '4525 Airport Approach Rd', city: 'Duluth', state: 'MN', zip: '55811', phone : '218-722-7326', hours: '0000-2359', travelDays: 2},
    DPA: {id: 'DPA', name: 'Dupage Tower', level: 5, type: 'TOWER WITH RADAR', address: '2710 International Dr West', city: 'Chicago', state: 'IL', zip: '60185', phone : '630-587-7800', hours: '0000-2359', travelDays: 2},
    DSM: {id: 'DSM', name: 'Des Moines Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '3000 McKinley Ave', city: 'Des Moines', state: 'IA', zip: '50321', phone : '515-974-8010', hours: '0000-2359', travelDays: 2},
    DTW: {id: 'DTW', name: 'Detroit Tower', level: 11, type: 'TOWER WITH RADAR', address: 'Detroit Metro Airport Bldg 801', city: 'Detroit', state: 'MI', zip: '48242', phone : '734-955-5000', hours: '0000-2359', travelDays: 3},
    DVT: {id: 'DVT', name: 'Deer Valley Tower', level: 8, type: 'TOWER WITH RADAR', address: '705 W Airport Blvd', city: 'Phoenix', state: 'AZ', zip: '85027', phone : '623-581-1492', hours: '0600-2359', travelDays: 3},
    DWH: {id: 'DWH', name: 'Hooks Tower', level: 6, type: 'TOWER WITH RADAR', address: '9125 Boudreaux Rd', city: 'Tomball', state: 'TX', zip: '77375', phone : '281-376-9721', hours: '0700-2200', travelDays: 1},
    ELM: {id: 'ELM', name: 'Elmira Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '276 Sing Sing Rd', city: 'Horseheads', state: 'NY', zip: '14845', phone : '607-739-1971', hours: '0600-0000', travelDays: 3},
    ELP: {id: 'ELP', name: 'El Paso Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '2050 Hawkins Blvd', city: 'El Paso', state: 'TX', zip: '79925', phone : '915-774-9400', hours: '0000-2359', travelDays: 2},
    EMT: {id: 'EMT', name: 'El Monte Tower', level: 5, type: 'TOWER WITH RADAR', address: '4500 Riverview Ave', city: 'El Monte', state: 'CA', zip: '91731', phone : '626-442-4390', hours: '0800-2000', travelDays: 3},
    ERI: {id: 'ERI', name: 'Erie Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '4411 W 12th St', city: 'Erie', state: 'PA', zip: '16505', phone : '814-833-0841', hours: '0600-0000', travelDays: 3},
    EUG: {id: 'EUG', name: 'Eugene Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '28833 Douglas Dr', city: 'Eugene', state: 'OR', zip: '97402', phone : '541-607-4600', hours: '0600-2330', travelDays: 5},
    EVV: {id: 'EVV', name: 'Evansville Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '7405 Indianapolis Rd', city: 'Evansville', state: 'IN', zip: '47725', phone : '812-436-4660', hours: '0600-2300', travelDays: 2},
    EWR: {id: 'EWR', name: 'Newark Tower', level: 11, type: 'TOWER WITH RADAR', address: '118 Flagpole Rd ', city: 'Newark', state: 'NJ', zip: '07114', phone : '973-565-5000', hours: '0000-2359', travelDays: 4},
    F11: {id: 'F11', name: 'Central Florida TRACON', level: 11, type: 'TRACON', address: '9399 Jeff Fuqua Blvd S', city: 'Orlando', state: 'FL', zip: '32827', phone : '407-852-7570', hours: '0000-2359', travelDays: 3},
    FAI: {id: 'FAI', name: 'Fairbanks Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '3800 University Ave S', city: 'Fairbanks', state: 'AK', zip: '99709', phone : '907-474-0050', hours: '0000-2359', travelDays: 9},
    FAR: {id: 'FAR', name: 'Fargo Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '3101 Dakota Dr', city: 'Fargo', state: 'ND', zip: '58102', phone : '701-239-5188', hours: 'ATCT 0000-2359, TRACON 0600-2259', travelDays: 2},
    FAT: {id: 'FAT', name: 'Fresno Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '5055 E Anderson Ave', city: 'Fresno', state: 'CA', zip: '93727', phone : '559-487-5405', hours: '0000-2359', travelDays: 4},
    FAY: {id: 'FAY', name: 'Fayetteville Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '3041 Control Tower Rd', city: 'Fayetteville', state: 'NC', zip: '28306', phone : '910-484-6723', hours: '0000-2359', travelDays: 3},
    FCM: {id: 'FCM', name: 'Flying Cloud Tower', level: 5, type: 'TOWER WITH RADAR', address: '10110 Flying Cloud Dr', city: 'Eden Prairie', state: 'MN', zip: '55347', phone : '952-941-1188', hours: '0700-2200 APR-OCT, 0700-2100 NOV-MAR', travelDays: 2},
    FFZ: {id: 'FFZ', name: 'Falcon Tower', level: 7, type: 'TOWER WITH RADAR', address: '4822 E Falcon Dr', city: 'Mesa', state: 'AZ', zip: '85215', phone : '480-981-1376', hours: '0600-2100', travelDays: 2},
    FLL: {id: 'FFL', name: 'Fort Lauderdale Tower', level: 8, type: 'TOWER WITH RADAR', address: '4150 SW 12th Ter', city: 'Fort Lauderdale', state: 'FL', zip: '33315', phone : '954-921-9200', hours: '0000-2359', travelDays: 4},
    FLO: {id: 'FLO', name: 'Florence Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '2085 Terminal Dr', city: 'Florence', state: 'SC', zip: '29506', phone : '843-665-0632', hours: '0630-2200', travelDays: 3},
    FNT: {id: 'FNT', name: 'Flint Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '3900 W Maple Rd', city: 'Flint', state: 'MI', zip: '48507', phone : '810-342-7800', hours: '0545-2330', travelDays: 3},
    FPR: {id: 'FPR', name: 'St Lucie Tower', level: 6, type: 'TOWER WITH RADAR', address: '3300 Hammond Rd', city: ' Fort Pierce', state: 'FL', zip: '34946', phone : '772-465-0761', hours: '0700-2100', travelDays: 3},
    FRG: {id: 'FRG', name: 'Farmingdale Tower', level: 7, type: 'TOWER WITH RADAR', address: '7170 Republic Airport', city: 'Farmingdale', state: 'NY', zip: '11735', phone : '631-454-2332', hours: '0700-2300', travelDays: 4},
    FSD: {id: 'FSD', name: 'Sioux Falls Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '2601 Jaycee La', city: 'Sioux Falls', state: 'SD', zip: '57104', phone : '605-338-4841', hours: '0500-0000', travelDays: 2},
    FSM: {id: 'FSM', name: 'Fort Smith Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '5100 S 66th St', city: 'Fort Smith', state: 'AR', zip: '72903', phone : '479-649-2400', hours: '0530-2300', travelDays: 1},
    FTW: {id: 'FTW', name: 'Meacham Tower', level: 6, type: 'TOWER WITH RADAR', address: '4100 N Lincoln Ave', city: 'Fort Worth', state: 'TX', zip: '76106', phone : '817-740-3300', hours: '0000-2359', travelDays: 1},
    FWA: {id: 'FWA', name: 'Fort Wayne Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '3817 Winters Rd', city: 'Fort Wayne', state: 'IN', zip: '46809', phone : '260-479-6500', hours: '0000-2359', travelDays: 2},
    FXE: {id: 'FXE', name: 'Fort Lauderdale Exec. Tower', level: 7, type: 'TOWER WITH RADAR', address: '5550 NW 23rd Ave', city: 'Fort Lauderdale', state: 'FL', zip: '33309', phone : '954-776-1046', hours: '0000-2359', travelDays: 4},
    GCN: {id: 'GCN', name: 'Grand Canyon Tower', level: 5, type: 'TOWER WITH RADAR', address: '1393 Liberator Dr', city: 'Grand Canyon', state: 'AZ', zip: '86023', phone : '928-638-2850', hours: '0700-1900 Oct-May, 0600-2000 Jun-Sep', travelDays: 2},
    GEG: {id: 'GEG', name: 'Spokane Tower', level: 7, type: 'TRACOMBINED TRACON TOWERCON', address: '8314 W Electric Ave', city: 'Spokane', state: 'WA', zip: '99224', phone : '509-742-2500', hours: '0000-2359', travelDays: 4},
    GFK: {id: 'GFK', name: 'Grand Forks Tower', level: 9, type: 'TOWER WITH RADAR', address: '2780 Airport Dr RR #2', city: 'Grand Forks', state: 'ND', zip: '58203', phone : '701-792-4260', hours: '0600-2330', travelDays: 2},
    GGG: {id: 'GGG', name: 'Longview Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '214 Tower Rd', city: 'Longview', state: 'TX', zip: '75603', phone : '903-643-4015', hours: '0600-2200', travelDays: 1},
    GPT: {id: 'GPT', name: 'Gulfport Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '4445 10th Ave', city: 'Gulfport', state: 'MS', zip: '39501', phone : '228-265-6100', hours: '0600-2300', travelDays: 2},
    GRB: {id: 'GRB', name: 'Green Bay Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '2077 Airport Dr', city: 'Green Bay', state: 'AK', zip: '54313', phone : '920-431-5751', hours: '0530-2330', travelDays: 3},
    GRR: {id: 'GRR', name: 'Grand Rapids Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '5500 44th St SE', city: 'Grand Rapids', state: 'MI', zip: '49512', phone : '616-575-1902', hours: '0530-0000', travelDays: 2},
    GSO: {id: 'GSO', name: 'Greensboro Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '6429 Bryan Blvd', city: 'Greensboro', state: 'NC', zip: '27409', phone : '336-358-3440', hours: '0000-2359', travelDays: 3},
    GSP: {id: 'GSP', name: 'Greer Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '2000 GSP Dr', city: 'Greer', state: 'SC', zip: '29651', phone : '864-879-2155', hours: '0600-2345', travelDays: 3},
    GTF: {id: 'GTF', name: 'Great Falls Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '2830 Airport Ave A', city: 'Great Falls', state: 'MT', zip: '59404', phone : '406-454-7500', hours: '0000-2359', travelDays: 4},
    HCF: {id: 'HCF', name: 'Honolulu Control Facility', level: 11, type: 'COMBINED CONTROL FAC.', address: '760 Worchester Ave', city: 'Honolulu', state: 'HI', zip: '96818', phone : '808-840-6100', hours: '0000-2359', travelDays: 'N/A'},
    HEF: {id: 'HEF', name: 'Manassas Tower', level: 5, type: 'TOWER WITH RADAR', address: '10603 Observation Rd', city: 'Manassas', state: 'VA', zip: '20110', phone : '703-361-5800', hours: '0630-2230', travelDays: 3},
    HIO: {id: 'HIO', name: 'Hillsboro Tower', level: 7, type: 'TOWER WITH RADAR', address: '3119 NE Cornell Rd', city: 'Hillsboro', state: 'OR', zip: '97124', phone : '503-615-5470', hours: '0600-2200', travelDays: 5},
    HLN: {id: 'HLN', name: 'Helena Tower', level: 5, type: 'NON-RADAR APP/TOWER', address: '3100 Airport Rd', city: 'Helena', state: 'MT', zip: '59601', phone : '406-449-5756', hours: '0600-2200', travelDays: 4},
    HOU: {id: 'HOU', name: 'Hobby Tower', level: 8, type: 'TOWER WITH RADAR', address: '8410 Lockheed', city: 'Houston', state: 'TX', zip: '77061', phone : '713-847-1400', hours: '0000-2359', travelDays: 1},
    HPN: {id: 'HPN', name: 'Westchester Tower', level: 7, type: 'TOWER WITH RADAR', address: '91 Tower Rd', city: 'White Plains', state: 'NY', zip: '10604', phone : '914-948-6520', hours: '0600-2300', travelDays: 4},
    HSV: {id: 'HSV', name: 'Huntsville Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '1000 E Boeing Cir', city: 'Huntsville', state: 'AL', zip: '35824', phone : '256-542-2060', hours: '0600-0000 TUE-SAT, SUN 0600-TUE 0000', travelDays: 2},
    HTS: {id: 'HTS', name: 'Huntington Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '1471 Airport Rd', city: 'Huntington', state: 'WV', zip: '25704', phone : '304-453-1201', hours: '0000-2359', travelDays: 2},
    HUF: {id: 'HUF', name: 'Terre Haute Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '580 Airport St', city: 'Terre Haute', state: 'IN', zip: '47803', phone : '812-877-7730', hours: '0000-2359', travelDays: 2},
    HWD: {id: 'HWD', name: 'Hayward Tower', level: 6, type: 'TOWER WITH RADAR', address: '20305 Skywest Dr', city: 'Hayward', state: 'CA', zip: '94541', phone : '510-785-5248', hours: '0700-2100', travelDays: 4},
    I90: {id: 'I90', name: 'Houston TRACON', level: 12, type: 'TRACON', address: '4005 Greens Rd', city: 'Houston', state: 'TX', zip: '77032', phone : '281-443-5840', hours: '0000-2359', travelDays: 1},
    IAD: {id: 'IAD', name: 'Dulles Tower', level: 9, type: 'TOWER WITH RADAR', address: '24525 Flight Line Rd Gate 317', city: 'Dulles', state: 'VA', zip: '20166', phone : '571-323-6351', hours: '0000-2359', travelDays: 3},
    IAH: {id: 'IAH', name: 'Houston Intercontinental Tower', level: 11, type: 'TOWER WITH RADAR', address: '4215 Will Clayton Pkwy', city: 'Houston', state: 'TX', zip: '77032', phone : '281-209-8600', hours: '0000-2359', travelDays: 1},
    ICT: {id: 'ICT', name: 'Wichita Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '2196 Airport Rd', city: 'Wichita', state: 'KS', zip: '67209', phone : '316-350-1500', hours: '0000-2359', travelDays: 1},
    ILG: {id: 'ILG', name: 'Wilmington Tower', level: 4, type: 'TOWER WITH RADAR', address: '#1 DRBA Way', city: 'New Castle', state: 'DE', zip: '19720', phone : '302-324-0265', hours: '0630-2300', travelDays: 3},
    ILM: {id: 'ILM', name: 'Wilmington Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '2220 Control Tower Dr', city: 'Wilmington', state: 'NC', zip: '28405', phone : '910-815-4530', hours: '0600-2300', travelDays: 3},
    IND: {id: 'IND', name: 'Indianapolis Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '8100 Col H Weir Cook Memorial Dr S', city: 'Indianapolis', state: 'IN', zip: '46241', phone : '317-227-5780', hours: '0000-2359', travelDays: 2},
    ISP: {id: 'ISP', name: 'Islip Tower', level: 6, type: 'TOWER WITH RADAR', address: '5 Airway Rd', city: 'Ronkonkoma', state: 'NY', zip: '11779', phone : '631-619-9040', hours: '0600-2359', travelDays: 4},
    ITO: {id: 'ITO', name: 'Hilo Tower', level: 6, type: 'COMBINED TRACON TOWER', address: 'Hilo International Airport', city: 'Hilo', state: 'HI', zip: '96720', phone : '808-935-4658', hours: '0600-2200', travelDays: 'N/A'},
    JAN: {id: 'JAN', name: 'Jackson Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '100 International Dr', city: 'Jackson', state: 'MS', zip: '39298', phone : '601-965-5793', hours: '0600-2300', travelDays: 2},
    JAX: {id: 'JAX', name: 'Jacksonville Tower', level: 9, type: 'COMBINED TRACON TOWER', address: '14400 Whirlwind Ave', city: 'Jacksonville', state: 'FL', zip: '32218', phone : '904-741-0700', hours: '0000-2359', travelDays: 3},
    JCF: {id: 'JCF', name: 'Joshua Control Facility', level: 8, type: 'COMBINED CONTROL FAC.', address: '100 E Sparks Dr', city: 'Edwards AFB', state: 'CA', zip: '93524', phone : '661-575-2100', hours: '0000-2359', travelDays: 3},
    JFK: {id: 'JFK', name: 'Kennedy Tower', level: 11, type: 'TOWER WITH RADAR', address: 'JFK International Airport', city: 'Jamaica', state: 'NY', zip: '11430', phone : '718-656-0335', hours: '0000-2359', travelDays: 4},
    JNU: {id: 'JNU', name: 'Juneau Tower', level: 5, type: 'TOWER WITH RADAR', address: '1873 Shell Simmons Dr', city: 'Juneau', state: 'AK', zip: '99801', phone : '907-586-7411', hours: '0600-2300 APR-SEP; 0700-2000 OCT-MAR', travelDays: 8},
    L30: {id: 'L30', name: 'Las Vegas TRACON', level: 11, type: 'TRACON', address: '699 Wright Brothers Ln', city: 'Las Vegas', state: 'NV', zip: '89119', phone : '702-262-5900', hours: '0000-2359', travelDays: 3},
    LAF: {id: 'LAF', name: 'Lafayette Tower', level: 5, type: 'TOWER WITH RADAR', address: '1560 Aviation Dr', city: 'West Lafayette', state: 'IN', zip: '47906', phone : '765-743-2611', hours: '0700-2100', travelDays: 2},
    LAN: {id: 'LAN', name: 'Lansing Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '4100 Capital City Blvd', city: 'Lansing', state: 'MI', zip: '48906', phone : '517-321-1355', hours: '0000-2359', travelDays: 3},
    LAS: {id: 'LAS', name: 'Las Vegas Tower', level: 11, type: 'TOWER WITH RADAR', address: '699 Wright Brothers Ln', city: 'Las Vegas', state: 'NV', zip: '89119', phone : '702-262-5910', hours: '0000-2359', travelDays: 3},
    LAX: {id: 'LAX', name: 'Los Angeles Tower', level: 12, type: 'TOWER WITH RADAR', address: '245 World Way N', city: 'Los Angeles', state: 'CA', zip: '90045', phone : '310-342-4900', hours: '0000-2359', travelDays: 3},
    LBB: {id: 'LBB', name: 'Lubbock Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '7001 N Martin Luther King Jr Blvd', city: 'Lubbock', state: 'TX', zip: '79403', phone : '806-766-6503', hours: '0000-2359', travelDays: 1},
    LCH: {id: 'LCH', name: 'Lake Charles Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '500 Airport Blvd', city: 'Lake Charles', state: 'LA', zip: '70607', phone : '337-477-2016', hours: '0600-2200', travelDays: 2},
    LEX: {id: 'LEX', name: 'Lexington Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '4051 Terminal Dr', city: 'Lexington', state: 'KY', zip: '40510', phone : '859-514-7901', hours: '0000-2359', travelDays: 2},
    LFT: {id: 'LFT', name: 'Lafayette Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '220 Tower Dr', city: 'Lafayette', state: 'LA', zip: '70508', phone : '337-234-4935', hours: '0530-2230', travelDays: 2},
    LGA: {id: 'LGA', name: 'La Guardia Tower', level: 11, type: 'TOWER WITH RADAR', address: 'LaGuardia Airport', city: 'Flushing', state: 'NY', zip: '11371', phone : '347-846-1710', hours: '0000-2359', travelDays: 4},
    LGB: {id: 'LGB', name: 'Long Beach Tower', level: 8, type: 'TOWER WITH RADAR', address: '3601 E Spring St', city: 'Long Beach', state: 'CA', zip: '90806', phone : '562-424-7128', hours: '0615-2345', travelDays: 3},
    LIT: {id: 'LIT', name: 'Little Rock Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '2601 David Grundfest Dr', city: 'Little Rock', state: 'AR', zip: '72206', phone : '501-379-2900', hours: '0000-2359', travelDays: 1},
    LNK: {id: 'LNK', name: 'Lincoln Tower', level: 5, type: 'TOWER WITH RADAR', address: '2600 W Adams St', city: 'Lincoln', state: 'NE', zip: '68524', phone : '402-474-3011', hours: '0530-0000', travelDays: 1},
    LOU: {id: 'LOU', name: 'Bowman Tower', level: 5, type: 'TOWER WITH RADAR', address: '2710 Moran Ave', city: 'Louisville', state: 'KY', zip: '40205', phone : '502-479-3173', hours: '0700-2200', travelDays: 2},
    LVK: {id: 'LVK', name: 'Livermore Tower', level: 6, type: 'TOWER WITH RADAR', address: '590 Airway Blvd', city: 'Livermore', state: 'CA', zip: '94551', phone : '925-443-0666', hours: '0700-2100', travelDays: 4},
    M03: {id: 'M03', name: 'Memphis TRACON', level: 9, type: 'TRACON', address: '2515 Winchester Rd', city: 'Memphis', state: 'TN', zip: '38116', phone : '901-842-8400', hours: '0000-2359', travelDays: 1},
    M98: {id: 'M98', name: 'Minneapolis TRACON', level: 11, type: 'TRACON', address: '6311 34th Ave S', city: 'Minneapolis', state: 'MN', zip: '55450', phone : '612-713-4000', hours: '0000-2359', travelDays: 2},
    MAF: {id: 'MAF', name: 'Midland Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '2500 N Pliska Dr', city: 'Midland', state: 'TX', zip: '79711', phone : '432-488-2000', hours: '0600-0000', travelDays: 1},
    MBS: {id: 'MBS', name: 'Saginaw Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '8570 Freeland Rd', city: 'Freeland', state: 'MI', zip: '48623', phone : '989-695-9143', hours: '0600-2300', travelDays: 3},
    MCI: {id: 'MCI', name: 'Kansas City Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '#4 International Sq', city: 'Kansas City', state: 'MO', zip: '64153', phone : '816-329-2700', hours: '0000-2359', travelDays: 1},
    MCO: {id: 'MCO', name: 'Orlando Tower', level: 9, type: 'TOWER WITH RADAR', address: '9685 Jeff Fuqua Blvd N', city: 'Orlando', state: 'FL', zip: '32827', phone : '407-852-7500', hours: '0000-2359', travelDays: 3},
    MDT: {id: 'MDT', name: 'Harrisburg Tower', level: 7, type: 'COMBINED TRACON TOWER', address: 'Harrisburg International Airport', city: 'Middletown', state: 'PA', zip: '17057', phone : '717-948-9180', hours: '0000-2359', travelDays: 3},
    MDW: {id: 'MDW', name: 'Midway Tower', level: 8, type: 'TOWER WITH RADAR', address: '6200 S Laramie Ave', city: 'Chicago', state: 'IL', zip: '60638', phone : '773-884-3670', hours: '0000-2359', travelDays: 2},
    MEM: {id: 'MEM', name: 'Memphis Tower', level: 8, type: 'TOWER WITH RADAR', address: '2515 Winchester Rd', city: 'Memphis', state: 'TN', zip: '38116', phone : '901-842-8400', hours: '0000-2359', travelDays: 1},
    MFD: {id: 'MFD', name: 'Mansfield Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '2101 Harrington Memorial Rd', city: 'Mansfield', state: 'OH', zip: '44903', phone : '419-522-7272', hours: '0000-2359', travelDays: 3},
    MGM: {id: 'MGM', name: 'Montgomery Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '4701-B Tower Rd', city: 'Hope Hull', state: 'AL', zip: '36043', phone : '334-284-0384', hours: '0600-2300', travelDays: 2},
    MHT: {id: 'MHT', name: 'Manchester Tower', level: 4, type: 'TOWER WITH RADAR', address: '8 Ammon Dr', city: 'Manchester', state: 'NH', zip: '03103', phone : '603-621-1700', hours: '0000-2359', travelDays: 4},
    MIA: {id: 'MIA', name: 'Miami Tower', level: 12, type: 'COMBINED TRACON TOWER', address: '6400 NW 22nd St', city: 'Miami', state: 'FL', zip: '33122', phone : '305-869-5400', hours: '0000-2359', travelDays: 4},
    MIC: {id: 'MIC', name: 'Crystal Tower', level: 4, type: 'TOWER WITH RADAR', address: '5800 Crystal Airport Rd', city: 'Crystal', state: 'MN', zip: '55429', phone : '763-537-9161', hours: '0700-2200 MAY-SEP, 0700-2100 OCT-APR', travelDays: 3},
    MKC: {id: 'MKC', name: 'Downtown Tower', level: 5, type: 'TOWER WITH RADAR', address: '653 Lou Holland Dr', city: 'Kansas City', state: 'MO', zip: '64116', phone : '816-329-2880', hours: '0000-2359', travelDays: 1},
    MKE: {id: 'MKE', name: 'Milwaukee Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '5330 S Howell Ave', city: 'Milwaukee', state: 'WI', zip: '53207', phone : '414-489-2150', hours: '0000-2359', travelDays: 2},
    MKG: {id: 'MKG', name: 'Muskegon Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '113 Sinclair Dr', city: 'Muskegon', state: 'MI', zip: '49441', phone : '231-798-1222', hours: '0600-2300', travelDays: 2},
    MLI: {id: 'MLI', name: 'Quad City Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '6421 74th Ave', city: 'Milan', state: 'IL', zip: '61264', phone : '309-799-5195', hours: '0530-2230', travelDays: 2},
    MLU: {id: 'MLU', name: 'Monroe Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '5403 Operations Rd', city: 'Monroe', state: 'LA', zip: '71203', phone : '318-327-5600', hours: '0600-2200', travelDays: 1},
    MMU: {id: 'MMU', name: 'Morristown Tower', level: 5, type: 'TOWER WITH RADAR', address: '4 Airport Rd', city: 'Morristown', state: 'NJ', zip: '07960', phone : '973-267-0331', hours: '0645-2230', travelDays: 4},
    MOB: {id: 'MOB', name: 'Mobile Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '101 Flave Pierce Rd', city: 'Mobile', state: 'AL', zip: '36608', phone : '251-662-6200', hours: '0600-2300', travelDays: 2},
    MRI: {id: 'MRI', name: 'Merrill Tower', level: 6, type: 'TOWER WITH RADAR', address: '1950 E 5th Ave', city: 'Anchorage', state: 'AK', zip: '99501', phone : '907-271-2698', hours: '0700-0000 May-Aug 0700-2200 Sep-Apr', travelDays: 9},
    MRY: {id: 'MRY', name: 'Monterey Tower', level: 5, type: 'TOWER WITH RADAR', address: '2475 Henderson Way', city: 'Monterey', state: 'CA', zip: '93940', phone : '831-375-1211', hours: '0600-2100', travelDays: 4},
    MSN: {id: 'MSN', name: 'Madison Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '4301 International La', city: 'Madison', state: 'WI', zip: '53704', phone : '608-244-5691', hours: '0600-2300', travelDays: 2},
    MSP: {id: 'MSP', name: 'Minneapolis Tower', level: 11, type: 'TOWER WITH RADAR', address: '6311 34th Ave S', city: 'Minneapolis', state: 'MN', zip: '55450', phone : '612-713-4000', hours: '0000-2359', travelDays: 2},
    MSY: {id: 'MSY', name: 'New Orleans Tower', level: 9, type: 'COMBINED TRACON TOWER', address: '900 Airport Rd', city: 'Kenner', state: 'LA', zip: '70062', phone : '504-471-4300', hours: '0000-2359', travelDays: 2},
    MWH: {id: 'MWH', name: 'Grant County Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '7820 Andrews St NE', city: 'Moses Lake', state: 'WA', zip: '98837', phone : '509-762-1367', hours: '0600-2200', travelDays: 5},
    MYF: {id: 'MYF', name: 'Montgomery Tower', level: 7, type: 'TOWER WITH RADAR', address: '4298 Ponderosa Ave', city: 'San Diego', state: 'CA', zip: '92123', phone : '858-277-5601', hours: '0600-2100', travelDays: 3},
    MYR: {id: 'MYR', name: 'Myrtle Beach Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '3242 Tower St', city: 'Myrtle Beach', state: 'SC', zip: '29577', phone : '843-238-3008', hours: '0600-2300', travelDays: 3},
    N90: {id: 'N90', name: 'New York TRACON', level: 12, type: 'COMBINED TRACON', address: '1515 Stewart Ave', city: 'Westbury', state: 'NY', zip: '11590', phone : '516-683-2900', hours: '0000-2359', travelDays: 4},
    NCT: {id: 'NCT', name: 'Northern California TRACON', level: 12, type: 'TRACON', address: '11375 Douglas Rd', city: 'Mather', state: 'CA', zip: '95655', phone : '916-366-4001', hours: '0000-2359', travelDays: 4},
    NEW: {id: 'NEW', name: 'Lakefront Tower', level: 5, type: 'TOWER WITH RADAR', address: '8500 Lloyd Stearman Dr', city: 'New Orleans', state: 'LA', zip: '70126', phone : '504-240-3335', hours: '0800-1800', travelDays: 2},
    OAK: {id: 'OAK', name: 'Oakland Tower', level: 8, type: 'TOWER WITH RADAR', address: '1 Airport Dr', city: 'Oakland', state: 'CA', zip: '94621', phone : '510-214-1700', hours: '0000-2359', travelDays: 4},
    OGG: {id: 'OGG', name: 'Maui Tower', level: 6, type: 'TOWER WITH RADAR', address: '1 Eena St', city: 'Kahului', state: 'HI', zip: '96732', phone : '808-877-0725', hours: '0600-2300 DST, 0600-0000 STD', travelDays: 'N/A'},
    OKC: {id: 'OKC', name: 'Oklahoma City Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '4500 SW 67th St', city: 'Oklahoma City', state: 'OK', zip: '73159', phone : '405-686-4700', hours: '0000-2359', travelDays: 0},
    OMA: {id: 'OMA', name: 'Eppley Tower', level: 6, type: 'TOWER WITH RADAR', address: '4501 Abbott Dr', city: 'Omaha', state: 'NE', zip: '68110', phone : '402-271-7500', hours: '0000-2359', travelDays: 1},
    ONT: {id: 'ONT', name: 'Ontario Tower', level: 5, type: 'TOWER WITH RADAR', address: '1250 Tower Dr', city: 'Ontario', state: 'CA', zip: '91761', phone : '909-605-0057', hours: '0000-2359', travelDays: 3},
    ORD: {id: 'ORD', name: "Chicago O'Hare Tower", level: 12, type: 'TOWER WITH RADAR', address: "Chicago O'Hare International Airport", city: 'Chicago', state: 'IL', zip: '60666', phone : '773-601-7601', hours: '0000-2359', travelDays: 2},
    ORF: {id: 'ORF', name: 'Norfolk Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '1245 Miller Store Rd', city: 'Virginia Beach', state: 'VA', zip: '23455', phone : '757-460-5142', hours: '0000-2359', travelDays: 4},
    ORL: {id: 'ORL', name: 'Orlando Executive Tower', level: 5, type: 'TOWER WITH RADAR', address: '4599 ORL Tower Rd', city: 'Orlando', state: 'FL', zip: '32807', phone : '407-648-6290', hours: '0700-2200', travelDays: 3},
    P31: {id: 'P31', name: 'Pensacola TRACON', level: 9, type: 'TRACON', address: '4230 Airfield Rd', city: 'Pensacola', state: 'FL', zip: '32504', phone : '850-266-6900', hours: '0000-2359', travelDays: 2},
    P50: {id: 'P50', name: 'Phoenix TRACON', level: 11, type: 'TRACON', address: '3500 E Sky Harbor Blvd', city: 'Phoenix', state: 'AZ', zip: '85034', phone : '602-306-2500', hours: '0000-2359', travelDays: 3},
    P80: {id: 'P80', name: 'Portland TRACON', level: 9, type: 'TRACON', address: '7108 NE Airport Way', city: 'Portland', state: 'OR', zip: '97218', phone : '503-493-7500', hours: '0000-2359', travelDays: 5},
    PAE: {id: 'PAE', name: 'Paine Tower', level: 6, type: 'TOWER WITH RADAR', address: '3310 100th St SW', city: 'Everett', state: 'WA', zip: '98204', phone : '425-923-1400', hours: '0700-2100', travelDays: 5},
    PAO: {id: 'PAO', name: 'Palo Alto Tower', level: 6, type: 'TOWER WITH RADAR', address: '1909 Embarcadero Rd', city: 'Palo Alto', state: 'CA', zip: '94303', phone : '650-493-0641', hours: '0700-2100', travelDays: 4},
    PBI: {id: 'PBI', name: 'Palm Beach Tower', level: 9, type: 'COMBINED TRACON TOWER', address: '3550 Belvedere Road', city: 'West Palm Beach', state: 'FL', zip: '33406', phone : '561-683-1867', hours: '0000-2359', travelDays: 4},
    PCT: {id: 'PCT', name: 'Potomac TRACON', level: 12, type: 'TRACON', address: '3699 Macintosh Dr', city: 'Warrenton', state: 'VA', zip: '20187', phone : '540-349-7503', hours: '0000-2359', travelDays: 3},
    PDK: {id: 'PDK', name: 'DeKalb - Peachtree Tower', level: 7, type: 'TOWER WITH RADAR', address: '2001 Airport Rd', city: 'Chamblee', state: 'GA', zip: '30341', phone : '678-495-5230', hours: '0630-2300 MON-FRI 0700-2300 SAT-SUN', travelDays: 2},
    PDX: {id: 'PDX', name: 'Portland Tower', level: 8, type: 'TOWER WITH RADAR', address: '7108 NE Airport Way', city: 'Portland', state: 'OR', zip: '97218', phone : '503-493-7500', hours: '0000-2359', travelDays: 5},
    PHF: {id: 'PHF', name: 'Patrick Henry Tower', level: 5, type: 'TOWER WITH RADAR', address: '2402 G Ave', city: 'Newport News', state: 'VA', zip: '23602', phone : ' 757-875-5080', hours: '0600-2300', travelDays: 3},
    PHL: {id: 'PHL', name: 'Philadelphia Tower', level: 11, type: 'COMBINED TRACON TOWER', address: '15 Hog Island Rd', city: 'Philadelphia', state: 'PA', zip: '19153', phone : '215-492-4100', hours: '0000-2359', travelDays: 4},
    PHX: {id: 'PHX', name: 'Phoenix Tower', level: 10, type: 'TOWER WITH RADAR', address: '3500 E Sky Harbor Blvd', city: 'Phoenix', state: 'AZ', zip: '85034', phone : '602-306-2500', hours: '0000-2359', travelDays: 3},
    PIA: {id: 'PIA', name: 'Peoria Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '6100 W Dirksen Pkwy', city: 'Peoria', state: 'IL', zip: '61607', phone : '309-697-0751', hours: '0000-2359', travelDays: 2},
    PIE: {id: 'PIE', name: 'St Petersburg Tower', level: 7, type: 'TOWER WITH RADAR', address: '14510 Airport Pkwy', city: 'Clearwater', state: 'FL', zip: '33762', phone : '727-539-6867', hours: '0600-2300', travelDays: 3},
    PIT: {id: 'PIT', name: 'Pittsburgh Tower', level: 9, type: 'COMBINED TRACON TOWER', address: 'Tower Rd', city: 'Pittsburgh', state: 'PA', zip: '15231', phone : '412-269-9237', hours: '0000-2359', travelDays: 3},
    PNE: {id: 'PNE', name: 'Northeast Philadelphia Tower', level: 4, type: 'TOWER WITH RADAR', address: '3060 Red Lion Rd Gate #17', city: 'Philadelphia', state: 'PA', zip: '19114', phone : '215-673-7626', hours: '0600-2300', travelDays: 4},
    PNS: {id: 'PNS', name: 'Pensacola Tower', level: 6, type: 'TOWER WITH RADAR', address: '4230 Airfield Rd', city: 'Pensacola', state: 'FL', zip: '32504', phone : '850-266-6901', hours: '0530-2300', travelDays: 2},
    POC: {id: 'POC', name: 'Brackett Tower', level: 5, type: 'TOWER WITH RADAR', address: '1600 Puddingstone Rd', city: 'La Verne', state: 'CA', zip: '91750', phone : '909-593-2539', hours: '0700-2100', travelDays: 3},
    POU: {id: 'POU', name: 'Poughkeepsie Tower', level: 4, type: 'TOWER WITH RADAR', address: '265 New Hackensack Rd', city: 'Wappingers Falls', state: 'NY', zip: '12590', phone : '845-462-3434', hours: '0700-2200 15 May-14 Sept, 0700-2100 15 Sept-14 May', travelDays: 4},
    PRC: {id: 'PRC', name: 'Prescott Tower', level: 7, type: 'TOWER WITH RADAR', address: '6500 Wilkinson Dr', city: 'Prescott', state: 'AZ', zip: '86301', phone : '928-445-2160', hours: '0600-2200', travelDays: 3},
    PSC: {id: 'PSC', name: 'Pasco Tower 6', level: 6, type: 'COMBINED TRACON TOWER', address: '3601 N 20th Ave', city: 'Pasco', state: 'WA', zip: '99301', phone : '509-542-4200', hours: '0600-2200', travelDays: 4},
    PSP: {id: 'PSP', name: 'Palm Springs Tower', level: 5, type: 'TOWER WITH RADAR', address: '280 N El Cielo Rd', city: 'Palm Springs', state: 'CA', zip: '92262', phone : '760-327-1546', hours: '0600-2300', travelDays: 3},
    PTK: {id: 'PTK', name: 'Pontiac Tower', level: 6, type: 'TOWER WITH RADAR', address: '6510 Highland Rd', city: 'Waterford', state: 'MI', zip: '48327', phone : '248-886-8500', hours: '0600-0000', travelDays: 3},
    PUB: {id: 'PUB', name: 'Pueblo Tower', level: 7, type: 'TOWER WITH RADAR', address: '31385 Bryan Cir', city: 'Pueblo', state: 'CO', zip: '81001', phone : '719-948-3374', hours: '0600-2200', travelDays: 2},
    PVD: {id: 'PVD', name: 'Providence Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '464 Warwick Industrial Dr', city: 'Warwick', state: 'RI', zip: '02886', phone : '401-734-2800', hours: '0545-0000', travelDays: 4},
    PWK: {id: 'PWK', name: 'Chicago Executive Tower', level: 5, type: 'TOWER WITH RADAR', address: '1060 S Milwaukee Ave', city: 'Wheeling', state: 'IL', zip: '60090', phone : '847-229-6000', hours: '0600-2200 MON-FRI & 0700-2200 SAT-SUN', travelDays: 2},
    PWM: {id: 'PWM', name: 'Portland Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '1003 Westbrook St', city: 'Portland', state: 'ME', zip: '04102', phone : '207-775-0602', hours: '0545-0000', travelDays: 4},
    R90: {id: 'R90', name: 'Omaha TRACON', level: 8, type: 'TRACON', address: '100 TRACON Hill', city: 'Bellevue', state: 'NE', zip: '68005', phone : '402-682-4340', hours: '0000-2359', travelDays: 1},
    RDG: {id: 'RDG', name: 'Reading Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '2405 B Bernville Rd', city: 'Reading', state: 'PA', zip: '19605', phone : '610-374-8039', hours: '0600-0000', travelDays: 3},
    RDU: {id: 'RDU', name: 'Raleigh-Durham Tower', level: 9, type: 'COMBINED TRACON TOWER', address: '1000 Sawyer Cir', city: 'Morrisville', state: 'NC', zip: '27560', phone : '919-380-3110', hours: '0000-2359', travelDays: 3},
    RFD: {id: 'RFD', name: 'Rockford Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '5701 Falcon Rd', city: 'Rockford', state: 'IL', zip: '61109', phone : '815-484-5312', hours: '0000-2359', travelDays: 2},
    RHV: {id: 'RHV', name: 'Reid-Hillview Tower', level: 6, type: 'TOWER WITH RADAR', address: '2204 Waverly Ave', city: 'San Jose', state: 'CA', zip: '95122', phone : '408-272-5917', hours: '0700-2200', travelDays: 4},
    RIC: {id: 'RIC', name: 'Richmond Tower', level: 6, type: 'TOWER WITH RADAR', address: '5701 Gulfstream Rd', city: 'Richmond', state: 'VA', zip: '23250', phone : '804-226-6520', hours: '0000-2359', travelDays: 3},
    RNO: {id: 'RNO', name: 'Reno Tower', level: 5, type: 'TOWER WITH RADAR', address: 'S Rock Blvd', city: 'Reno', state: 'NV', zip: '89502', phone : '775-324-8553', hours: '0000-2359', travelDays: 4},
    ROA: {id: 'ROA', name: 'Roanoke Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '5354 Aviation Dr', city: 'Roanoke', state: 'VA', zip: '24102', phone : '540-265-2280', hours: '0000-2359', travelDays: 3},
    ROC: {id: 'ROC', name: 'Rochester Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '1375 Scottsville Rd', city: 'Rochester', state: 'NY', zip: '14624', phone : '585-463-3800', hours: '0000-2359', travelDays: 3},
    ROW: {id: 'ROW', name: 'Roswell Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '30 W Challenger', city: 'Roswell', state: 'NM', zip: '88202', phone : '505-347-2800', hours: '0600-2100', travelDays: 1},
    RST: {id: 'RST', name: 'Rochester Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '9 Helgerson Dr', city: 'Rochester', state: 'MN', zip: '55902', phone : '507-289-3198', hours: '0500-2300', travelDays: 2},
    RSW: {id: 'RSW', name: 'Fort Myers Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '11900 Regional Ln SE', city: 'Ft Myers', state: 'FL', zip: '33913', phone : '239-768-5985', hours: '0600-0000', travelDays: 4},
    RVS: {id: 'RVS', name: 'Riverside Tower', level: 7, type: 'TOWER WITH RADAR', address: '8801 Jack Bates Ave', city: 'Tulsa', state: 'OK', zip: '74132', phone : '918-299-6355', hours: '0700-2200', travelDays: 1},
    S46: {id: 'S46', name: 'Seattle TRACON', level: 10, type: 'TRACON', address: '825 S 160th St', city: 'Burien', state: 'WA', zip: '98148', phone : '206-214-4600', hours: '0000-2359', travelDays: 5},
    S56: {id: 'S56', name: 'Salt Lake City TRACON', level: 10, type: 'TRACON', address: '1201 N 4000 W St', city: 'Salt Lake City', state: 'UT', zip: '84116', phone : '801-325-9600', hours: '0000-2359', travelDays: 3},
    SAN: {id: 'SAN', name: 'San Diego Tower', level: 8, type: 'TOWER WITH RADAR', address: '3690 Pacific Hwy', city: 'San Diego', state: 'CA', zip: '92101', phone : '619-299-0677', hours: '0000-2359', travelDays: 3},
    SAT: {id: 'SAT', name: 'San Antonio Tower', level: 9, type: 'COMBINED TRACON TOWER', address: '9434 Airport Blvd', city: 'San Antonio', state: 'TX', zip: '78216', phone : '210-805-5507', hours: '0000-2359', travelDays: 1},
    SAV: {id: 'SAV', name: 'Savannah Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '100 Melaver Dr', city: 'Savannah', state: 'GA', zip: '31408', phone : '912-964-3700', hours: '0600-0000', travelDays: 3},
    SBA: {id: 'SBA', name: 'Santa Barbara Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '10 Burns Pl', city: 'Santa Barbara', state: 'CA', zip: '93117', phone : '805-681-0534', hours: '0600-2300', travelDays: 4},
    SBN: {id: 'SBN', name: 'South Bend Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '4713 Lathrop ST', city: 'South Bend', state: 'IN', zip: '46628', phone : '574-251-2600', hours: '0530-0000 SUN-FRI, 0530-2345 SAT', travelDays: 2},
    SCK: {id: 'SCK', name: 'Stockton Tower', level: 5, type: 'TOWER WITH RADAR', address: '7434 S Lindbergh St', city: 'Stockton', state: 'CA', zip: '95206', phone : '209-982-4744', hours: '0700-2100', travelDays: 4},
    SCT: {id: 'SCT', name: 'Southern California TRACON', level: 12, type: 'COMBINED TRACON', address: '9175 Kearny Villa Rd', city: 'San Diego', state: 'CA', zip: '92126', phone : '858-537-5800', hours: '0000-2359', travelDays: 3},
    SDF: {id: 'SDF', name: 'Standiford Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '755 Grade La', city: 'Louisville', state: 'KY', zip: '40213', phone : '502-375-7415', hours: '0000-2359', travelDays: 2},
    SDL: {id: 'SDL', name: 'Scottsdale Tower', level: 6, type: 'TOWER WITH RADAR', address: '14960 N 78th Way', city: 'Scottsdale', state: 'AZ', zip: '85260', phone : '480-609-7585', hours: '0600-2100', travelDays: 2},
    SEA: {id: 'SEA', name: 'Seattle Tower', level: 9, type: 'TOWER WITH RADAR', address: '2440 S 166th St', city: 'Seattle', state: 'WA', zip: '98158', phone : '206-214-2500', hours: '0000-2359', travelDays: 5},
    SEE: {id: 'SEE', name: 'Gillespie Tower', level: 7, type: 'TOWER WITH RADAR', address: '2001 N Marshall Ave', city: 'El Cajon', state: 'CA', zip: '92020', phone : '619-448-1449', hours: '0700-2100', travelDays: 3},
    SFB: {id: 'SFB', name: 'Sanford Tower', level: 8, type: 'TOWER WITH RADAR', address: '747 Control Tower Ln', city: 'Sanford', state: 'FL', zip: '32773', phone : '407-330-9816', hours: '0630-2300', travelDays: 3},
    SFO: {id: 'SFO', name: 'San Francisco Tower', level: 10, type: 'TOWER WITH RADAR', address: 'Terminal 2 Room 630', city: 'San Francisco', state: 'CA', zip: '94128', phone : '650-876-2883', hours: '0000-2359', travelDays: 4},
    SGF: {id: 'SGF', name: 'Springfield Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '2365 N FAA Ave', city: 'Springfield', state: 'MO', zip: '65802', phone : '417-868-5600', hours: '0000-2359', travelDays: 1},
    SHV: {id: 'SHV', name: 'Shreveport Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '3694 Range Rd', city: 'Barksdale AFB', state: 'LA', zip: '71110', phone : '318-747-8500', hours: '0000-2359', travelDays: 1},
    SJC: {id: 'SJC', name: 'San Jose Tower', level: 7, type: 'TOWER WITH RADAR', address: '275 Martin Ave', city: 'Santa Clara', state: 'CA', zip: '95050', phone : '408-982-0750', hours: '0600-0000', travelDays: 4},
    SJU: {id: 'SJU', name: 'San Juan Tower', level: 7, type: 'TOWER WITH RADAR', address: "Luis Munoz Marin Int'l Airport", city: 'San Juan', state: 'PR', zip: '00917', phone : '787-253-4605', hours: '0000-2359', travelDays: 'N/A'},
    SLC: {id: 'SLC', name: 'Salt Lake City Tower', level: 10, type: 'TOWER WITH RADAR', address: '1201 North 4000 West', city: 'Salt Lake City', state: 'UT', zip: '84116', phone : '801-325-9600', hours: '0000-2359', travelDays: 3},
    SMF: {id: 'SMF', name: 'Sacramento Tower', level: 5, type: 'TOWER WITH RADAR', address: '5620 Alan Boyd Dr', city: 'Sacramento', state: 'CA', zip: '95837', phone : '916-929-5151', hours: '0000-2359', travelDays: 4},
    SMO: {id: 'SMO', name: 'Santa Monica Tower', level: 5, type: 'TOWER WITH RADAR', address: '3300 Donald Douglas Loop N', city: 'Santa Monica', state: 'CA', zip: '90405', phone : '310-398-1525', hours: '0700-2100', travelDays: 3},
    SNA: {id: 'SNA', name: 'John Wayne Tower', level: 8, type: 'TOWER WITH RADAR', address: '370 Paularino Ave', city: 'Costa Mesa', state: 'CA', zip: '92626', phone : '714-668-0141', hours: '0615-2300', travelDays: 3},
    SPI: {id: 'SPI', name: 'Springfield Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '#1 Tower Dr', city: 'Springfield', state: 'IL', zip: '62707', phone : '217-535-1400', hours: '0600-2200', travelDays: 2},
    SRQ: {id: 'SRQ', name: 'Sarasota Tower', level: 6, type: 'TOWER WITH RADAR', address: '1120 Clyde Jones Rd', city: 'Sarasota', state: 'FL', zip: '34243', phone : '941-355-3105', hours: '0600-0000', travelDays: 3},
    STL: {id: 'STL', name: 'St Louis Tower', level: 8, type: 'TOWER WITH RADAR', address: '10789 Lambert International Blvd', city: 'Bridgeton', state: 'MO', zip: '63044', phone : '314-890-4703', hours: '0000-2359', travelDays: 1},
    STP: {id: 'STP', name: 'St Paul Tower', level: 4, type: 'TOWER WITH RADAR', address: '514 Tower Rd', city: 'St Paul', state: 'MN', zip: '55107', phone : '651-312-8840', hours: '0600-2200 MON-FRI, 0700-2200 SAT-SUN', travelDays: 2},
    STS: {id: 'STS', name: 'Sonoma Tower', level: 5, type: 'TOWER WITH RADAR', address: '2245 Airport Blvd', city: 'Santa Rosa', state: 'CA', zip: '95403', phone : '707-546-4294', hours: '0700-2000', travelDays: 4},
    STT: {id: 'STT', name: 'St Thomas Tower', level: 5, type: 'TOWER WITH RADAR', address: '1 John Brewers Bay', city: 'Charlotte Amalie', state: 'VI', zip: '00802', phone : '340-714-0793', hours: '0700-2230, 0700-2130 DST', travelDays: 'N/A'},
    SUS: {id: 'SUS', name: 'Spirit Tower', level: 5, type: 'TOWER WITH RADAR', address: '553 Beechcraft Dr', city: 'Chesterfield', state: 'MO', zip: '63005', phone : '314-890-7282', hours: '0600-2300', travelDays: 1},
    SUX: {id: 'SUX', name: 'Sioux Gateway Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '6001 Mitchell St', city: 'Sioux City', state: 'IA', zip: '51111', phone : '712-277-3579', hours: '0600-2130', travelDays: 2},
    SYR: {id: 'SYR', name: 'Syracuse Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '200 Constellation Way N', city: 'North Syracuse', state: 'NY', zip: '13212', phone : '315-426-4727', hours: '0000-2359', travelDays: 4},
    T75: {id: 'T75', name: 'St Louis TRACON', level: 9, type: 'TRACON', address: '22 Research Park Ct', city: 'St Charles', state: 'MO', zip: '63304', phone : '314-890-1003', hours: '0000-2359', travelDays: 1},
    TEB: {id: 'TEB', name: 'Teterboro Tower', level: 9, type: 'TOWER WITH RADAR', address: '225 Fred Wehran Dr', city: 'Teterboro', state: 'NJ', zip: '07608', phone : '201-288-1889', hours: '0000-2359', travelDays: 4},
    TLH: {id: 'TLH', name: 'Tallahassee Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '5700 Springhill Rd', city: 'Tallahassee', state: 'FL', zip: '32305', phone : '850-942-9642', hours: '0600-2300', travelDays: 3},
    TMB: {id: 'TMB', name: 'Tamiami Tower', level: 8, type: 'TOWER WITH RADAR', address: '14744 SW 128th St', city: 'Miami', state: 'FL', zip: '33196', phone : '305-256-7628', hours: '0700-2300', travelDays: 4},
    TOA: {id: 'TOA', name: 'Torrance Tower', level: 5, type: 'TOWER WITH RADAR', address: '25311 Aero Way', city: 'Torrance', state: 'CA', zip: '90505', phone : '310-539-1278', hours: '0700-2000', travelDays: 3},
    TOL: {id: 'TOL', name: 'Toledo Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '11013 Airport Hwy', city: 'Swanton', state: 'OH', zip: '43558', phone : '419-865-5075', hours: '0000-2359', travelDays: 2},
    TPA : {id: 'TPA', name: 'Tampa Tower', level: 10, type: 'COMBINED TRACON TOWER', address: '4180 George J Bean Pkwy Suite 100', city: 'Tampa', state: 'FL', zip: '33607', phone : '813-371-7700', hours: '0000-2359', travelDays: 3},
    TRI: {id: 'TRI', name: 'Tri-Cities Tower', level: 6, type: 'COMBINED TRACON TOWER', address: '2701 Hwy 75', city: 'Blountville', state: 'TN', zip: '37617', phone : '423-325-6271', hours: '0600-0000', travelDays: 3},
    TUL: {id: 'TUL', name: 'Tulsa Tower', level: 8, type: 'COMBINED TRACON TOWER', address: '3232 N Memorial Dr', city: 'Tulsa', state: 'OK', zip: '74115', phone : '918-831-6700', hours: '0000-2359', travelDays: 1},
    TUS: {id: 'TUS', name: 'Tucson Tower', level: 7, type: 'TOWER WITH RADAR', address: '1865 E Aero Park Blvd', city: 'Tucson', state: 'AZ', zip: '85756', phone : '520-670-5810', hours: '0000-2359', travelDays: 2},
    TVC: {id: 'TVC', name: 'Traverse City Tower', level: 5, type: 'TOWER WITH RADAR', address: '1220 Airport Access Rd', city: 'Traverse City', state: 'MI', zip: '49686', phone : '231-947-0453', hours: '0700-2200', travelDays: 3},
    TWF: {id: 'TWF', name: 'Twin Falls Tower', level: 5, type: 'NON-RADAR APP/TOWER', address: '350 Airport Loop', city: 'Twin Falls', state: 'ID', zip: '83301', phone : '208-734-7160', hours: '0600-2100', travelDays: 3},
    TYS: {id: 'TWS', name: 'Knoxville Tower', level: 7, type: 'COMBINED TRACON TOWER', address: '2207 Airbase Rd', city: 'Louisville', state: 'TN', zip: '37777', phone : '865-970-3025', hours: '0000-2359', travelDays: 2},
    U90: {id: 'U90', name: 'Tucson TRACON', level: 8, type: 'TRACON', address: '4445 Phoenix St', city: 'Tucson', state: 'AZ', zip: '85708', phone : '520-670-5087', hours: '0000-2359', travelDays: 2},
    VGT: {id: 'VGT', name: 'North Las Vegas Tower', level: 7, type: 'TOWER WITH RADAR', address: '3700 Thunderbird Field Rd', city: 'North Las Vegas', state: 'NV', zip: '89032', phone : '702-648-6588', hours: '0600-2000 OCT-MAR, 0600-2100 APR-SEP', travelDays: 3},
    VNY: {id: 'VNY', name: 'Van Nuys Tower', level: 7, type: 'TOWER WITH RADAR', address: '7550 Hayvenhurst Pl', city: 'Van Nuys', state: 'CA', zip: '91406', phone : '818-904-6166', hours: '0600-2245', travelDays: 3},
    VRB: {id: 'VRB', name: 'Vero Beach Tower', level: 7, type: 'TOWER WITH RADAR', address: '2930 Flight Safety Dr', city: 'Vero Beach', state: 'FL', zip: '32960', phone : '772-299-0129', hours: '0700-2100', travelDays: 3},
    Y90: {id: 'Y90', name: 'Yankee TRACON', level: 8, type: 'TRACON', address: '35 Perimeter Rd', city: 'Windsor Locks', state: 'CT', zip: '06096', phone : '860-386-3500', hours: '0000-2359', travelDays: 4},
    YIP: {id: 'YIP', name: 'Willow Run Tower', level: 5, type: 'TOWER WITH RADAR', address: '8800 Beck Rd', city: 'Belleville', state: 'MI', zip: '48111', phone : '734-480-9247', hours: '0000-2359', travelDays: 3},
    YNG: {id: 'YNG', name: 'Youngstown Tower', level: 5, type: 'COMBINED TRACON TOWER', address: '3976 Kings-Graves Rd', city: 'Vienna', state: 'OH', zip: '44473', phone : '330-856-4806', hours: 'ATCT 0000-2359 TRACON 0600-2359', travelDays: 3},
    ZAB: {id: 'ZAB', name: 'Albuquerque Center', level: 10, type: 'ARTCC', address: '8000 Louisiana Blvd NE', city: 'Albuquerque', state: 'NM', zip: '87109', phone : '505-856-4500', hours: '0000-2359', travelDays: 2},
    ZAN: {id: 'ZAN', name: 'Anchorage Center', level: 10, type: 'ARTCC', address: '700 N Boniface Pkwy', city: 'Anchorage', state: 'AK', zip: '99506', phone : '253-351-3500', hours: '0000-2359', travelDays: 9},
    ZAU: {id: 'ZAU', name: 'Chicago Center', level: 12, type: 'ARTCC', address: '619 W New Indian Trail Rd', city: 'Aurora', state: 'IL', zip: '60506', phone : '630-906-8220', hours: '0000-2359', travelDays: 2},
    ZBW: {id: 'ZBW', name: 'Boston Center', level: 11, type: 'ARTCC', address: '35 Northeastern Blvd', city: 'Nashua', state: 'NH', zip: '03062', phone : '603-879-6633', hours: '0000-2359', travelDays: 4},
    ZDC: {id: 'ZDC', name: 'Washington Center', level: 12, type: 'ARTCC', address: '825 E Market St', city: 'Leesburg', state: 'VA', zip: '20176', phone : '703-771-3401', hours: '0000-2359', travelDays: 3},
    ZDV: {id: 'ZDV', name: 'Denver Center', level: 10, type: 'ARTCC', address: '2211 17th Ave', city: 'Longmont', state: 'CO', zip: '80501', phone : '303-651-4100', hours: '0000-2359', travelDays: 2},
    ZFW: {id: 'ZFW', name: 'Fort Worth Center', level: 12, type: 'ARTCC', address: '13800 FAA Rd', city: 'Fort Worth', state: 'TX', zip: '76155', phone : '817-858-7500', hours: '0000-2359', travelDays: 1},
    ZHU: {id: 'ZHU', name: 'Houston Center', level: 11, type: 'ARTCC', address: '16600 John F Kennedy Blvd', city: 'Houston', state: 'TX', zip: '77032', phone : '713-230-5500', hours: '0000-2359', travelDays: 1},
    ZID: {id: 'ZID', name: 'Indianapolis Center', level: 12, type: 'ARTCC', address: '1850 S Sigsbee St', city: 'Indianapolis', state: 'IN', zip: '46241', phone : '317-247-2234', hours: '0000-2359', travelDays: 2},
    ZJX: {id: 'ZJX', name: 'Jacksonville Center', level: 11, type: 'ARTCC', address: '37075 Aviation Ln', city: 'Hilliard', state: 'FL', zip: '32046', phone : '904-549-1537', hours: '0000-2359', travelDays: 3},
    ZKC: {id: 'ZKC', name: 'Kansas City Center', level: 11, type: 'ARTCC', address: '250 S Rogers Rd', city: 'Olathe', state: 'KS', zip: '66062', phone : '913-254-8400', hours: '0000-2359', travelDays: 1},
    ZLA: {id: 'ZLA', name: 'Los Angeles Center', level: 12, type: 'ARTCC', address: '2555 E Ave P', city: 'Palmdale', state: 'CA', zip: '93550', phone : '510-745-3000', hours: '0000-2359', travelDays: 3},
    ZLC: {id: 'ZLC', name: 'Salt Lake City Center', level: 10, type: 'ARTCC', address: '2150 W 700 N', city: 'Salt Lake City', state: 'UT', zip: '84116', phone : '303-651-4109', hours: '0000-2359', travelDays: 3},
    ZMA: {id: 'ZMA', name: 'Miami Center', level: 11, type: 'ARTCC', address: '7500 NW 58th St', city: 'Miami', state: 'FL', zip: '33166', phone : '305-716-1500', hours: '0000-2359', travelDays: 4},
    ZME: {id: 'ZME', name: 'Mephis Center', level: 12, type: 'ARTCC', address: '3229 Democrat Rd', city: 'Memphis', state: 'TN', zip: '38118', phone : '901-368-8160', hours: '0000-2359', travelDays: 1},
    ZMP: {id: 'ZMP', name: 'Minneapolis Center', level: 11, type: 'ARTCC', address: '512 Division St', city: 'Farmington', state: 'MN', zip: '55024', phone : '651-463-5510', hours: '0000-2359', travelDays: 2},
    ZNY: {id: 'ZNY', name: 'New York Center', level: 12, type: 'ARTCC', address: '4205 Johnson Ave', city: 'Ronkonkoma', state: 'NY', zip: '11779', phone : '631-468-1001', hours: '0000-2359', travelDays: 4},
    ZOA: {id: 'ZOA', name: 'Oakland Center', level: 11, type: 'ARTCC', address: '5125 Central Ave', city: 'Fremont', state: 'CA', zip: '94536', phone : '808-935-4658', hours: '0000-2359', travelDays: 4},
    ZOB: {id: 'ZOB', name: 'Cleveland Center', level: 12, type: 'ARTCC', address: '326 E Lorain St', city: 'Oberlin', state: 'OH', zip: '44074', phone : '440-774-0300', hours: '0000-2359', travelDays: 3},
    ZSE: {id: 'ZSE', name: 'Seattle Center', level: 10, type: 'ARTCC', address: '3101 Auburn Way S', city: 'Auburn', state: 'WA', zip: '98902', phone : '801-320-2500', hours: '0000-2359', travelDays: 5},
    ZSU: {id: 'ZSU', name: 'San Juan CERAP', level: 9, type: 'ARTCC', address: '5000 Carretera 190', city: 'Carolina', state: 'PR', zip: '00979', phone : '828-684-0421', hours: '0000-2359', travelDays: 'N/A'},
    ZTL: {id: 'ZTL', name: 'Atlanta Center', level: 12, type: 'ARTCC', address: '299 Woolsey Rd', city: 'Hampton', state: 'GA', zip: '30228', phone : '770-210-7601', hours: '0000-2359', travelDays: 2},
    ZUA: {id: 'ZUA', name: 'Guam CERAP', level: 8, type: 'ARTCC', address: '1775 Admiral Sherman Blvd', city: 'Barrigada', state: 'GU', zip: '96913', phone : '671-473-1200', hours: '0000-2359', travelDays: 'N/A'},
}

//COLA 2020
const COLA_LIST = ['A11', 'ANC', 'MRI', 'ZAN', 'FAI', 'JNU', 'HCF', 'ITO', 'OGG', 'SJU', 'ZSU', 'STT', 'ZUA'];
const COLA = {
    anchorage : {
        percentage : .0286,
        facilities : ['A11', 'ANC', 'MRI', 'ZAN']
    },

    fairbanks : {
        percentage : .0286,
        facilities : ['FAI']
    },

    juneau : {
        percentage : .0286,
        facilities : ['JNU']
    },

    otherAlaska : {
        percentage : .0440,
        facilities : []
    },
    
    honolulu : {
        percentage : .1028,
        facilities : ['HCF']
    },

    hawaii : {
        percentage : .0442,
        facilities : ['ITO']
    },

    kauai : {
        percentage : .1028,
        facilities : []
    },

    maui : {
        percentage : .1028,
        facilities : ['OGG']
    },

    puertoRico : {
        percentage : .0313,
        facilities : ['SJU', 'ZSU']
    },

    virginIslands : {
        percentage : .1262,
        facilities : ['STT']
    },

    guam : {
        percentage : .1262,
        facilities : ['ZUA']
    }
}

//CIP
const CIP = {
    A90 : 0.075,
    ACK : 0.08,
    ACY : 0.017,
    ADS : 0.02,
    ADW : 0.059,
    APA : 0.029,
    APC : 0.1,
    ARB : 0.053,
    ARR : 0.063,
    ASE : 0.08,
    BDL : 0.057,
    BED : 0.1,
    BFI : 0.057,
    BJC : 0.036,
    BOS : 0.075,
    BUR : 0.1,
    BWI : 0.017,
    C90 : 0.08,
    CCR : 0.1,
    CDW : 0.1,
    CMA : 0.085,
    CNO : 0.02,
    CRQ : 0.071,
    D01 : 0.032,
    D21 : 0.024,
    DAL : 0.025,
    DCA : 0.033,
    DEN : 0.032,
    DPA : 0.056,
    DTW : 0.024,
    EMT : 0.1,
    EWR : 0.084,
    FAI : 0.08,
    FCM : 0.056,
    FRG : 0.1,
    GCN : 0.08,
    GRR : 0.011,
    HEF : 0.066,
    HIO : 0.015,
    HPN : 0.1,
    HWD : 0.1,
    IAD : 0.046,
    ISP : 0.1,
    JFK : 0.1,
    K90 : 0.073,
    LAN : 0.011,
    LAX : 0.081,
    LGA : 0.1,
    LGB : 0.1,
    LVK : 0.1,
    M98 : 0.042,
    MDW : 0.08,
    MIC : 0.056,
    MKE : 0.023,
    MMU : 0.067,
    MRY : 0.1,
    MSN : 0.007,
    MSP : 0.042,
    MYF : 0.072,
    N90 : 0.1,
    NCT : 0.032,
    OAK : 0.1,
    OGG : 0.037,
    ONT : 0.022,
    ORD : 0.1,
    P80 : 0.009,
    PAE : 0.031,
    PAO : 0.1,
    PCT : 0.046,
    PDX : 0.009,
    PHL : 0.031,
    PNE : 0.064,
    POC : 0.1,
    POU : 0.028,
    PSP : 0.036,
    PTK : 0.02,
    PVD : 0.056,
    PWK : 0.1,
    PWM : 0.015,
    RHV : 0.1,
    RNO : 0.014,
    ROC : 0.019,
    S46 : 0.07,
    SAN : 0.07,
    SBA : 0.1,
    SCK : 0.014,
    SCT : .074,
    SEA : 0.07,
    SEE : 0.071,
    SFO : 0.1,
    SJC : 0.1,
    SJU : 0.04,
    SMF : 0.035,
    SMO : 0.1,
    SNA : 0.068,
    STP : 0.033,
    STS : 0.1,
    TEB : 0.1,
    TMB : 0.036,
    TOA : 0.1,
    TUS : 0.017,
    U90 : 0.014,
    VNY : 0.1,
    Y90 : 0.046,
    YIP : 0.04,
    ZAU : 0.051,
    ZDC : 0.046,
    ZMA : 0.018,
    ZNY : 0.1,
    ZOA : 0.1,
    ZSE : 0.031,
    ZSU : 0.031
}

//Differential
const DIFFERENTIAL = {
    ACK : ['Affordability', LOCALITY.boston.percentage],
    ASE : ['Affordability', LOCALITY.denver.percentage],
    ZUA : ['Post', .2]
}

//Construct BASIC PAY scale
function getBasicPay(facility) {
    //retrieve the facility basic pay
    let basicPayScale = BASIC_PAY[FACILITIES[facility].level - 4];
    let cpcMax = basicPayScale.pay.cpc[1];
    let cpcMin = basicPayScale.pay.cpc[0];
    let d3 = basicPayScale.pay.d3 || 0;
    let d2 = basicPayScale.pay.d2 || 0;
    let d1 = basicPayScale.pay.d1 || 0;
    let ag = BASIC_PAY[9].ag;

    //construct an array with the pay scale, highest to lowest.
    return [cpcMax, cpcMin, d3, d2, d1, ag];
}

//Match locality area
function getLocality(fac) {
    for (let key in LOCALITY) {
        let locAreaCheck = LOCALITY[key].facilities;

        if(locAreaCheck.length > 0) {
            for (let i = 0; i < locAreaCheck.length; i++) {
                if (locAreaCheck[i] === fac) {
                    return [LOCALITY[key].fullName, LOCALITY[key].percentage];
                }
            }
        } else {
            continue;
        }
    }
    
    return [LOCALITY.rus.fullName, LOCALITY.rus.percentage];
}

//Create BASE PAY scale
function getBasePay(callback, facility) {
    const localityResult = getLocality(facility);
    // let locName = locality[0]; //not used for now. Used to display the text on the front end
    let locRate = 1 + localityResult[1];

    //multiply locality with the basic pay 
    const basePayTable = callback(facility).map(x => Math.round(x * locRate));

     //cap at federal maximum
     for (let i = 0; i < basePayTable.length; i++) {
         if (basePayTable[i] > PAY_CAP) {
             basePayTable[i] = PAY_CAP;
         }
     }

     return basePayTable;
}

//Find CIP or return 0
function getCip(facility) {
    //edge case for N90 handled in final table function
    //All others
    for (let key in CIP) {
        if (key === facility) {
            return CIP[key];
        }
    }
    return 0;
}

//Check for COLA and return multipler if it exists
function getCola(facility) {
    if (COLA_LIST.indexOf(facility) > -1) {
        for (let key in COLA) {
            let colaArea = COLA[key].facilities
            for (let i = 0; i < colaArea.length; i++) {
                if (colaArea[i] === facility) {
                    return COLA[key].percentage;
                }
            }
        }
    }

    return 0;
}

//Check for differential and return the modifier and type of differential, if it exists
    //afford diff is greater of base X 10%, or base X (difference in locality)
    //if old locality + .1 < new locality, use new locality
function getAffordabilityDifferential(facility) {
    let localityDifference = DIFFERENTIAL[facility][1] - localityResult[1];
    let differentialAmount = [];

    if (localityDifference > .1) {
        basePayTable.forEach(x => {
            differentialAmount.push(Math.round(x * localityDifference)) 
        });
        return differentialAmount;
    } else {
        basePayTable.forEach(x => {
            differentialAmount.push(Math.round(x * .1))
        });
        return differentialAmount;
    }
}
//pay is cola, plus (post diff-cola), capped at post diff   
function getPostDifferntial(facility) {
    return postDifferntialAmount = DIFFERENTIAL[facility][1] - getCola(facility);
}

function getDifferentialType(facility) {
    for (let key in DIFFERENTIAL) {
        if (key === facility) {
            return DIFFERENTIAL[key][0];
        }
    }
    return undefined;
}

//Compile all the pay information
function completePayTable(facility) {
    if (facility.length !== 3 || typeof facility !== 'string') {
        console.error('ERROR: Input is incorrect type or length');
    }

    facility = facility.toUpperCase();

    const basePayTable = getBasePay(getBasicPay, facility);

    let cipPercentage = getCip(facility) * 100 || 0;
    let cipAmounts = [];
    basePayTable.forEach(element => {
        cipAmounts.push(Math.round(element * cipPercentage / 100));
    });
    
    //COLA is subject to the payscale max
    let colaPercentage = getCola(facility) * 100;
    let colaAmounts = basePayTable.map(x => Math.round(x * colaPercentage / 100));

    //enforce pay cap with cola
    if (colaPercentage > 0) {
        basePayTable.map(x => x > PAY_CAP ? x = PAY_CAP : x = x);
    }

    let differentialAmount, differentialType;
    if (getDifferentialType(facility)) {
        //check which type. if its afford, run that function
        if (differentialType === 'Affordability') {
            differentialAmount = getAffordabilityDifferential(facility);
            //else run post diff function
        } else {
            differentialAmount = getPostDifferntial(facility);
        }
    } else {
        differentialAmount = 0;
    }

    //add N90 temporary CIP 
    if (facility === 'N90') {
        const N90CIP = [.25, .25, .22, .18, .14];
        for (let i = 0; i < N90CIP.length; i++) {
            cipPercentage = 25;
            cipAmounts[i] = Math.round(basePayTable[i] * N90CIP[i]);
        }
    }

    return {'PayTable' : basePayTable, 'CIP%' : cipPercentage, 'CIP' : cipAmounts, 'COLA%' : colaPercentage, 'COLA' : colaAmounts, 'differentialType' : differentialType, 'differentialAmount' : differentialAmount};
}

export {FACILITIES, LOCALITY, COLA, CIP, DIFFERENTIAL, completePayTable, getLocality};