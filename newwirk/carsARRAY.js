const cars = [
    // TOYOTA
    {id:1,name:"Toyota Camry",brand:"TOYOTA",price:"$28,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
    {id:2,name:"Toyota RAV4",brand:"TOYOTA",price:"$32,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
    {id:3,name:"Toyota Highlander",brand:"TOYOTA",price:"$40,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",type:"Automatic",leters:"68 L",Air:"Air Conditioner"},
    {id:4,name:"Toyota Corolla",brand:"TOYOTA",price:"$23,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",type:"Automatic",leters:"50 L",Air:"Air Conditioner"},
    {id:5,name:"Toyota Tacoma",brand:"TOYOTA",price:"$35,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",type:"Automatic",leters:"80 L",Air:"Air Conditioner"},
    {id:6,name:"Toyota Tundra",brand:"TOYOTA",price:"$45,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",type:"Automatic",leters:"100 L",Air:"Air Conditioner"},
    {id:7,name:"Toyota 4Runner",brand:"TOYOTA",price:"$42,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",type:"Automatic",leters:"85 L",Air:"Air Conditioner"},
    {id:8,name:"Toyota Prius",brand:"TOYOTA",price:"$27,000",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",type:"Automatic",leters:"43 L",Air:"Air Conditioner"},
    {id:9,name:"Toyota Sienna",brand:"TOYOTA",price:"$38,000",image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
    {id:10,name:"Toyota Crown",brand:"TOYOTA",price:"$45,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},

    // HONDA
    {id:11,name:"Honda CR-V",brand:"HONDA",price:"$31,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",type:"Automatic",leters:"57 L",Air:"Air Conditioner"},
    {id:12,name:"Honda Civic",brand:"HONDA",price:"$25,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",type:"Automatic",leters:"47 L",Air:"Air Conditioner"},
    {id:13,name:"Honda Accord",brand:"HONDA",price:"$29,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",type:"Automatic",leters:"56 L",Air:"Air Conditioner"},
    {id:14,name:"Honda Pilot",brand:"HONDA",price:"$39,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
    {id:15,name:"Honda HR-V",brand:"HONDA",price:"$27,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",type:"Automatic",leters:"50 L",Air:"Air Conditioner"},
    {id:16,name:"Honda Odyssey",brand:"HONDA",price:"$38,000",image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",type:"Automatic",leters:"68 L",Air:"Air Conditioner"},
    {id:17,name:"Honda Ridgeline",brand:"HONDA",price:"$37,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",type:"Automatic",leters:"80 L",Air:"Air Conditioner"},
    {id:18,name:"Honda Passport",brand:"HONDA",price:"$36,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
    {id:19,name:"Honda Insight",brand:"HONDA",price:"$28,000",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",type:"Automatic",leters:"40 L",Air:"Air Conditioner"},
    {id:20,name:"Honda Element",brand:"HONDA",price:"$26,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",type:"Automatic",leters:"55 L",Air:"Air Conditioner"},

    // 👉 REMAINING BRANDS CONTINUE SAME PATTERN...
    // FORD
{ id:21,name:"Ford F-150",brand:"FORD",price:"$38,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",type:"Automatic",leters:"95 L",Air:"Air Conditioner"},
{ id:22,name:"Ford Explorer",brand:"FORD",price:"$36,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
{ id:23,name:"Ford Mustang",brand:"FORD",price:"$42,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",type:"Manual",leters:"60 L",Air:"Air Conditioner"},
{ id:24,name:"Ford Bronco",brand:"FORD",price:"$40,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",type:"Automatic",leters:"80 L",Air:"Air Conditioner"},
{ id:25,name:"Ford Escape",brand:"FORD",price:"$30,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",type:"Automatic",leters:"55 L",Air:"Air Conditioner"},
{ id:26,name:"Ford Ranger",brand:"FORD",price:"$33,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",type:"Automatic",leters:"75 L",Air:"Air Conditioner"},
{ id:27,name:"Ford Edge",brand:"FORD",price:"$32,000",image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
{ id:28,name:"Ford Maverick",brand:"FORD",price:"$28,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",type:"Automatic",leters:"55 L",Air:"Air Conditioner"},
{ id:29,name:"Ford Expedition",brand:"FORD",price:"$55,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",type:"Automatic",leters:"90 L",Air:"Air Conditioner"},
{ id:30,name:"Ford Transit",brand:"FORD",price:"$35,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},

// CHEVROLET
{ id:31,name:"Chevrolet Silverado",brand:"CHEVROLET",price:"$40,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",type:"Automatic",leters:"90 L",Air:"Air Conditioner"},
{ id:32,name:"Chevrolet Equinox",brand:"CHEVROLET",price:"$30,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:33,name:"Chevrolet Tahoe",brand:"CHEVROLET",price:"$55,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",type:"Automatic",leters:"95 L",Air:"Air Conditioner"},
{ id:34,name:"Chevrolet Camaro",brand:"CHEVROLET",price:"$43,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",type:"Manual",leters:"70 L",Air:"Air Conditioner"},
{ id:35,name:"Chevrolet Malibu",brand:"CHEVROLET",price:"$28,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:36,name:"Chevrolet Traverse",brand:"CHEVROLET",price:"$38,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",type:"Automatic",leters:"80 L",Air:"Air Conditioner"},
{ id:37,name:"Chevrolet Colorado",brand:"CHEVROLET",price:"$35,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",type:"Automatic",leters:"75 L",Air:"Air Conditioner"},
{ id:38,name:"Chevrolet Suburban",brand:"CHEVROLET",price:"$60,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",type:"Automatic",leters:"105 L",Air:"Air Conditioner"},
{ id:39,name:"Chevrolet Blazer",brand:"CHEVROLET",price:"$33,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
{ id:40,name:"Chevrolet Corvette",brand:"CHEVROLET",price:"$70,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},

// NISSAN
{ id:41,name:"Nissan Rogue",brand:"NISSAN",price:"$28,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
{ id:42,name:"Nissan Altima",brand:"NISSAN",price:"$27,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:43,name:"Nissan Pathfinder",brand:"NISSAN",price:"$38,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
{ id:44,name:"Nissan Frontier",brand:"NISSAN",price:"$32,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",type:"Automatic",leters:"75 L",Air:"Air Conditioner"},
{ id:45,name:"Nissan Sentra",brand:"NISSAN",price:"$23,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",type:"Automatic",leters:"50 L",Air:"Air Conditioner"},
{ id:46,name:"Nissan Murano",brand:"NISSAN",price:"$34,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
{ id:47,name:"Nissan Titan",brand:"NISSAN",price:"$42,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",type:"Automatic",leters:"95 L",Air:"Air Conditioner"},
{ id:48,name:"Nissan Armada",brand:"NISSAN",price:"$50,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",type:"Automatic",leters:"90 L",Air:"Air Conditioner"},
{ id:49,name:"Nissan Versa",brand:"NISSAN",price:"$20,000",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",type:"Automatic",leters:"40 L",Air:"Air Conditioner"},
{ id:50,name:"Nissan Maxima",brand:"NISSAN",price:"$37,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},


// (Hyundai, Kia, BMW, Mercedes, Audi continue same pattern...)
// HYUNDAI
{ id:51,name:"Hyundai Tucson",brand:"HYUNDAI",price:"$30,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",time:"per day",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:52,name:"Hyundai Elantra",brand:"HYUNDAI",price:"$23,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"50 L",Air:"Air Conditioner"},
{ id:53,name:"Hyundai Santa Fe",brand:"HYUNDAI",price:"$34,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",time:"per day",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
{ id:54,name:"Hyundai Palisade",brand:"HYUNDAI",price:"$42,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",time:"per day",type:"Automatic",leters:"80 L",Air:"Air Conditioner"},
{ id:55,name:"Hyundai Sonata",brand:"HYUNDAI",price:"$28,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:56,name:"Hyundai Kona",brand:"HYUNDAI",price:"$25,000",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",time:"per day",type:"Automatic",leters:"50 L",Air:"Air Conditioner"},
{ id:57,name:"Hyundai Ioniq 5",brand:"HYUNDAI",price:"$45,000",image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",time:"per day",type:"Automatic",leters:"0 L",Air:"Air Conditioner"},
{ id:58,name:"Hyundai Venue",brand:"HYUNDAI",price:"$22,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",time:"per day",type:"Automatic",leters:"45 L",Air:"Air Conditioner"},
{ id:59,name:"Hyundai Accent",brand:"HYUNDAI",price:"$21,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"43 L",Air:"Air Conditioner"},
{ id:60,name:"Hyundai Genesis",brand:"HYUNDAI",price:"$50,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"75 L",Air:"Air Conditioner"},

// KIA
{ id:61,name:"Kia Sportage",brand:"KIA",price:"$29,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",time:"per day",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:62,name:"Kia Sorento",brand:"KIA",price:"$34,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",time:"per day",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
{ id:63,name:"Kia Telluride",brand:"KIA",price:"$45,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",time:"per day",type:"Automatic",leters:"80 L",Air:"Air Conditioner"},
{ id:64,name:"Kia Forte",brand:"KIA",price:"$22,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"50 L",Air:"Air Conditioner"},
{ id:65,name:"Kia K5",brand:"KIA",price:"$27,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"55 L",Air:"Air Conditioner"},
{ id:66,name:"Kia Soul",brand:"KIA",price:"$23,000",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",time:"per day",type:"Automatic",leters:"50 L",Air:"Air Conditioner"},
{ id:67,name:"Kia Carnival",brand:"KIA",price:"$36,000",image:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",time:"per day",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
{ id:68,name:"Kia EV6",brand:"KIA",price:"$48,000",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",time:"per day",type:"Automatic",leters:"0 L",Air:"Air Conditioner"},
{ id:69,name:"Kia Stinger",brand:"KIA",price:"$50,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
{ id:70,name:"Kia Niro",brand:"KIA",price:"$30,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"50 L",Air:"Air Conditioner"},

// BMW
{ id:71,name:"BMW X5",brand:"BMW",price:"$65,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",time:"per day",type:"Automatic",leters:"80 L",Air:"Air Conditioner"},
{ id:72,name:"BMW 3 Series",brand:"BMW",price:"$45,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:73,name:"BMW X3",brand:"BMW",price:"$50,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",time:"per day",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
{ id:74,name:"BMW 5 Series",brand:"BMW",price:"$55,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"68 L",Air:"Air Conditioner"},
{ id:75,name:"BMW X7",brand:"BMW",price:"$80,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",time:"per day",type:"Automatic",leters:"85 L",Air:"Air Conditioner"},
{ id:76,name:"BMW M4",brand:"BMW",price:"$75,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:77,name:"BMW i4",brand:"BMW",price:"$60,000",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",time:"per day",type:"Automatic",leters:"0 L",Air:"Air Conditioner"},
{ id:78,name:"BMW X1",brand:"BMW",price:"$42,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",time:"per day",type:"Automatic",leters:"50 L",Air:"Air Conditioner"},
{ id:79,name:"BMW 7 Series",brand:"BMW",price:"$95,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",time:"per day",type:"Automatic",leters:"75 L",Air:"Air Conditioner"},
{ id:80,name:"BMW Z4",brand:"BMW",price:"$65,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"55 L",Air:"Air Conditioner"},

// MERCEDES
{ id:81,name:"Mercedes C-Class",brand:"MERCEDES",price:"$48,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",time:"per day",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
{ id:82,name:"Mercedes E-Class",brand:"MERCEDES",price:"$60,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
{ id:83,name:"Mercedes GLC",brand:"MERCEDES",price:"$52,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
{ id:84,name:"Mercedes GLE",brand:"MERCEDES",price:"$65,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",time:"per day",type:"Automatic",leters:"80 L",Air:"Air Conditioner"},
{ id:85,name:"Mercedes S-Class",brand:"MERCEDES",price:"$110,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"75 L",Air:"Air Conditioner"},
{ id:86,name:"Mercedes A-Class",brand:"MERCEDES",price:"$40,000",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",time:"per day",type:"Automatic",leters:"45 L",Air:"Air Conditioner"},
{ id:87,name:"Mercedes GLS",brand:"MERCEDES",price:"$85,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",time:"per day",type:"Automatic",leters:"90 L",Air:"Air Conditioner"},
{ id:88,name:"Mercedes CLA",brand:"MERCEDES",price:"$45,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"55 L",Air:"Air Conditioner"},
{ id:89,name:"Mercedes G-Wagon",brand:"MERCEDES",price:"$150,000",image:"https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",time:"per day",type:"Automatic",leters:"95 L",Air:"Air Conditioner"},
{ id:90,name:"Mercedes EQE",brand:"MERCEDES",price:"$75,000",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",time:"per day",type:"Automatic",leters:"0 L",Air:"Air Conditioner"},

// AUDI
{ id:91,name:"Audi A4",brand:"AUDI",price:"$45,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:92,name:"Audi Q5",brand:"AUDI",price:"$50,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",time:"per day",type:"Automatic",leters:"65 L",Air:"Air Conditioner"},
{ id:93,name:"Audi A6",brand:"AUDI",price:"$60,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
{ id:94,name:"Audi Q7",brand:"AUDI",price:"$65,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",time:"per day",type:"Automatic",leters:"80 L",Air:"Air Conditioner"},
{ id:95,name:"Audi A3",brand:"AUDI",price:"$38,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"55 L",Air:"Air Conditioner"},
{ id:96,name:"Audi Q3",brand:"AUDI",price:"$42,000",image:"https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",time:"per day",type:"Automatic",leters:"60 L",Air:"Air Conditioner"},
{ id:97,name:"Audi e-tron",brand:"AUDI",price:"$70,000",image:"https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800",time:"per day",type:"Automatic",leters:"0 L",Air:"Air Conditioner"},
{ id:98,name:"Audi A8",brand:"AUDI",price:"$90,000",image:"https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800",time:"per day",type:"Automatic",leters:"75 L",Air:"Air Conditioner"},
{ id:99,name:"Audi RS7",brand:"AUDI",price:"$120,000",image:"https://images.unsplash.com/photo-1549924231-f129b911e442?w=800",time:"per day",type:"Automatic",leters:"70 L",Air:"Air Conditioner"},
{ id:100,name:"Audi TT",brand:"AUDI",price:"$55,000",image:"https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=800",time:"per day",type:"Automatic",leters:"55 L",Air:"Air Conditioner"},
];