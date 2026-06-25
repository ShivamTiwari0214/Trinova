export interface Product {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  description: string;
  image?: string;
  materials: string[];
  finishes: string[];
  applications: string[];
  specifications?: string[];
  price?: string;
}

export const categories = [
  {
    id: 'fasteners',
    name: 'Industrial Fasteners',
    subcategories: ['Bolts', 'Nuts', 'Washers', 'Screws', 'Springs', 'Special Fasteners', 'Anchors & Fixings', 'Rigging Hardware', 'Lifting Accessories']
  },
  {
    id: 'agricultural',
    name: 'Agricultural & Farm Equipment',
    subcategories: ['Tractor Parts', 'Rotavator Parts', 'Implements Parts']
  },
  {
    id: 'cnc',
    name: 'CNC, VMC & Industrial Spares',
    subcategories: ['Ball Screws', 'Linear Guide Ways', 'Tool Holders', 'Bearings', 'Pulleys', 'Spindle Parts']
  },
  {
    id: 'safety',
    name: 'Safety Products',
    subcategories: ['Safety Gear', 'Protective Equipment', 'Fire Safety', 'Industrial Supplies']
  },
  {
    id: 'plastic',
    name: 'Plastic Products',
    subcategories: ['Containers', 'Bottles & Jars', 'Storage']
  },
  {
    id: 'twowheeler',
    name: 'Two Wheeler Parts',
    subcategories: ['Engine Parts', 'Brake System', 'Electrical', 'Body Parts']
  },
  {
    id: 'religious',
    name: 'Religious Souvenirs',
    subcategories: ['Temple Coins', 'Idols', 'Keychains']
  }
];

export const products: Product[] = [
  // Industrial Fasteners - Bolts
  {
    id: 'bolt-hex-001',
    name: 'Hex Bolt',
    category: 'Industrial Fasteners',
    subcategory: 'Bolts',
    description: 'High-strength hexagonal head bolt for industrial applications',
    materials: ['Carbon Steel', 'Stainless Steel', 'Alloy Steel'],
    finishes: ['Zinc Plated', 'Black Oxide', 'Hot Dip Galvanized'],
    applications: ['Automotive', 'Construction', 'Machinery'],
    specifications: ['M6 to M48', 'Grade 4.8, 8.8, 10.9', 'DIN 933, ISO 4017']
  },
  {
    id: 'bolt-carriage-001',
    name: 'Carriage Bolt',
    category: 'Industrial Fasteners',
    subcategory: 'Bolts',
    description: 'Round head bolt with square neck for wood applications',
    materials: ['Carbon Steel', 'Stainless Steel'],
    finishes: ['Zinc Plated', 'Plain'],
    applications: ['Construction', 'Furniture', 'Wood Structures'],
    specifications: ['M6 to M20', 'DIN 603']
  },
  {
    id: 'bolt-ubolt-001',
    name: 'U-Bolt',
    category: 'Industrial Fasteners',
    subcategory: 'Bolts',
    description: 'U-shaped bolt for pipe and tube mounting',
    materials: ['Carbon Steel', 'Stainless Steel'],
    finishes: ['Zinc Plated', 'Hot Dip Galvanized'],
    applications: ['Automotive', 'Piping', 'Construction'],
    specifications: ['Custom sizes available']
  },

  // Industrial Fasteners - Nuts
  {
    id: 'nut-hex-001',
    name: 'Hex Nut',
    category: 'Industrial Fasteners',
    subcategory: 'Nuts',
    description: 'Standard hexagonal nut for general fastening',
    materials: ['Carbon Steel', 'Stainless Steel', 'Brass'],
    finishes: ['Zinc Plated', 'Black Oxide', 'Plain'],
    applications: ['Automotive', 'Construction', 'Machinery', 'General Purpose'],
    specifications: ['M3 to M48', 'Grade 4, 8, 10', 'DIN 934, ISO 4032']
  },
  {
    id: 'nut-nyloc-001',
    name: 'Nylon Lock Nut',
    category: 'Industrial Fasteners',
    subcategory: 'Nuts',
    description: 'Self-locking nut with nylon insert to prevent loosening',
    materials: ['Carbon Steel', 'Stainless Steel'],
    finishes: ['Zinc Plated', 'Plain'],
    applications: ['Automotive', 'Vibration-prone assemblies'],
    specifications: ['M3 to M24', 'DIN 985']
  },
  {
    id: 'nut-wing-001',
    name: 'Wing Nut',
    category: 'Industrial Fasteners',
    subcategory: 'Nuts',
    description: 'Hand-tightenable nut with wing-shaped grips',
    materials: ['Carbon Steel', 'Stainless Steel', 'Brass'],
    finishes: ['Zinc Plated', 'Plain'],
    applications: ['Quick assembly', 'Adjustable fixtures'],
    specifications: ['M3 to M20', 'DIN 315']
  },

  // Washers
  {
    id: 'washer-flat-001',
    name: 'Flat Washer',
    category: 'Industrial Fasteners',
    subcategory: 'Washers',
    description: 'Plain flat washer for load distribution',
    materials: ['Carbon Steel', 'Stainless Steel', 'Brass'],
    finishes: ['Zinc Plated', 'Plain', 'Black Oxide'],
    applications: ['General Purpose', 'Construction', 'Machinery'],
    specifications: ['M3 to M48', 'DIN 125, ISO 7089']
  },
  {
    id: 'washer-spring-001',
    name: 'Spring Washer',
    category: 'Industrial Fasteners',
    subcategory: 'Washers',
    description: 'Split lock washer providing spring tension',
    materials: ['Spring Steel', 'Stainless Steel'],
    finishes: ['Zinc Plated', 'Black Oxide'],
    applications: ['Anti-vibration', 'Lock applications'],
    specifications: ['M3 to M36', 'DIN 127']
  },

  // Screws
  {
    id: 'screw-machine-001',
    name: 'Machine Screw',
    category: 'Industrial Fasteners',
    subcategory: 'Screws',
    description: 'Precision screw for metal-to-metal fastening',
    materials: ['Carbon Steel', 'Stainless Steel'],
    finishes: ['Zinc Plated', 'Black Oxide'],
    applications: ['Electronics', 'Machinery', 'Appliances'],
    specifications: ['M2 to M12', 'Phillips, Slotted, Hex']
  },
  {
    id: 'screw-selftap-001',
    name: 'Self-Tapping Screw',
    category: 'Industrial Fasteners',
    subcategory: 'Screws',
    description: 'Screw that forms its own thread in material',
    materials: ['Hardened Steel', 'Stainless Steel'],
    finishes: ['Zinc Plated', 'Black Phosphate'],
    applications: ['Sheet Metal', 'Plastic', 'Wood'],
    specifications: ['#4 to #14', 'Various head styles']
  },

  // Agricultural - Tractor Parts
  {
    id: 'tractor-gear-001',
    name: 'Tractor Transmission Gear',
    category: 'Agricultural & Farm Equipment',
    subcategory: 'Tractor Parts',
    description: 'Heavy-duty transmission gears for tractors',
    materials: ['Alloy Steel', 'Case Hardened Steel'],
    finishes: ['Heat Treated'],
    applications: ['Tractors', 'Farm Equipment'],
    specifications: ['Various sizes', 'OEM Compatible']
  },
  {
    id: 'tractor-shaft-001',
    name: 'PTO Shaft',
    category: 'Agricultural & Farm Equipment',
    subcategory: 'Tractor Parts',
    description: 'Power Take-Off shaft for implement connection',
    materials: ['Alloy Steel'],
    finishes: ['Painted', 'Powder Coated'],
    applications: ['Tractors', 'Agricultural Implements'],
    specifications: ['Standard 540/1000 RPM']
  },

  // Rotavator Parts
  {
    id: 'rotavator-blade-001',
    name: 'Rotavator Blade (L-Type)',
    category: 'Agricultural & Farm Equipment',
    subcategory: 'Rotavator Parts',
    description: 'L-shaped blade for soil cultivation',
    materials: ['Spring Steel', 'Boron Steel'],
    finishes: ['Heat Treated', 'Painted'],
    applications: ['Soil Tilling', 'Land Preparation'],
    specifications: ['L, C, J type available']
  },

  // CNC Parts
  {
    id: 'cnc-ballscrew-001',
    name: 'Precision Ball Screw',
    category: 'CNC, VMC & Industrial Spares',
    subcategory: 'Ball Screws',
    description: 'High-precision ball screw for CNC machines',
    materials: ['Alloy Steel', 'Stainless Steel'],
    finishes: ['Ground', 'Hardened'],
    applications: ['CNC Machines', 'VMC', 'Precision Equipment'],
    specifications: ['Various leads and diameters', 'C3-C7 accuracy']
  },
  {
    id: 'cnc-bearing-001',
    name: 'Precision Bearing',
    category: 'CNC, VMC & Industrial Spares',
    subcategory: 'Bearings',
    description: 'High-speed precision bearing for machine tools',
    materials: ['Chrome Steel', 'Ceramic Hybrid'],
    finishes: ['Polished'],
    applications: ['Spindles', 'High-speed machinery'],
    specifications: ['ABEC-7 to ABEC-9']
  },

  // Safety Products
  {
    id: 'safety-helmet-001',
    name: 'Industrial Safety Helmet',
    category: 'Safety Products',
    subcategory: 'Safety Gear',
    description: 'High-impact resistant safety helmet',
    materials: ['ABS Plastic', 'HDPE'],
    finishes: ['Various Colors'],
    applications: ['Construction', 'Manufacturing', 'Mining'],
    specifications: ['ISI Certified', 'EN 397']
  },
  {
    id: 'safety-gloves-001',
    name: 'Cut Resistant Gloves',
    category: 'Safety Products',
    subcategory: 'Safety Gear',
    description: 'High-performance cut resistant work gloves',
    materials: ['Kevlar', 'Nitrile Coated'],
    finishes: ['Various Sizes'],
    applications: ['Metalworking', 'Glass Handling', 'Construction'],
    specifications: ['Cut Level A4-A9', 'EN 388']
  },
  {
    id: 'safety-shoes-001',
    name: 'Safety Shoes with Steel Toe',
    category: 'Safety Products',
    subcategory: 'Safety Gear',
    description: 'Industrial safety shoes with steel toe cap',
    materials: ['Leather', 'Steel Toe Cap'],
    finishes: ['Black, Brown'],
    applications: ['Construction', 'Manufacturing', 'Warehousing'],
    specifications: ['ISI Marked', 'IS 15298']
  },

  // Plastic Products
  {
    id: 'plastic-bucket-001',
    name: 'Industrial Plastic Bucket',
    category: 'Plastic Products',
    subcategory: 'Containers',
    description: 'Heavy-duty plastic bucket for industrial use',
    materials: ['HDPE', 'PP'],
    finishes: ['Various Colors'],
    applications: ['Paint', 'Chemicals', 'Water Storage'],
    specifications: ['5L to 25L capacity']
  },
  {
    id: 'plastic-bottle-001',
    name: 'HDPE Chemical Bottle',
    category: 'Plastic Products',
    subcategory: 'Bottles & Jars',
    description: 'Chemical resistant HDPE bottle',
    materials: ['HDPE'],
    finishes: ['Natural', 'Colored'],
    applications: ['Chemicals', 'Detergents', 'Liquids'],
    specifications: ['250ml to 5L']
  },

  // Two Wheeler Parts
  {
    id: 'bike-clutch-001',
    name: 'Motorcycle Clutch Plate Set',
    category: 'Two Wheeler Parts',
    subcategory: 'Engine Parts',
    description: 'High-quality clutch plate set for motorcycles',
    materials: ['Friction Material', 'Steel'],
    finishes: ['Standard'],
    applications: ['Motorcycles', 'Scooters'],
    specifications: ['OEM Compatible', 'Various models']
  },
  {
    id: 'bike-brake-001',
    name: 'Brake Shoe Set',
    category: 'Two Wheeler Parts',
    subcategory: 'Brake System',
    description: 'Premium brake shoes for two-wheelers',
    materials: ['Asbestos-free Friction Material'],
    finishes: ['Standard'],
    applications: ['Motorcycles', 'Scooters'],
    specifications: ['ISI Certified']
  },

  // Religious Souvenirs
  {
    id: 'coin-ram-001',
    name: 'Ram Mandir Ayodhya Commemorative Coin',
    category: 'Religious Souvenirs',
    subcategory: 'Temple Coins',
    description: 'Gold-plated commemorative coin of Ram Mandir',
    materials: ['Brass'],
    finishes: ['Gold Plated', 'Silver Plated', 'Copper Plated'],
    applications: ['Souvenirs', 'Religious Gifts'],
    specifications: ['Various sizes available']
  },
  {
    id: 'coin-vaishno-001',
    name: 'Vaishno Mata Katra Coin',
    category: 'Religious Souvenirs',
    subcategory: 'Temple Coins',
    description: 'Sacred coin from Vaishno Mata temple',
    materials: ['Brass'],
    finishes: ['Gold Plated', 'Silver Plated'],
    applications: ['Souvenirs', 'Religious Gifts'],
    specifications: ['Standard temple design']
  }
];

export const materials = [
  'Carbon Steel',
  'Stainless Steel',
  'Alloy Steel',
  'Brass',
  'Spring Steel',
  'Hardened Steel',
  'HDPE',
  'ABS Plastic',
  'Leather'
];

export const finishes = [
  'Zinc Plated',
  'Black Oxide',
  'Hot Dip Galvanized',
  'Plain',
  'Painted',
  'Powder Coated',
  'Heat Treated',
  'Polished',
  'Gold Plated',
  'Silver Plated'
];

export const applications = [
  'Automotive',
  'Construction',
  'Machinery',
  'Agriculture',
  'Manufacturing',
  'Railway',
  'Electronics',
  'Mining',
  'General Purpose'
];
