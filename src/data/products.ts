// Ace Engineers - product data (single source of truth for all product cards, filters and modals)
// Prices are internal reference only (INR per piece). Do NOT show prices on the website; show "Get Best Price" instead.

export type Category = { slug: string; name: string };
export type Product = {
  id: string;
  category: string; // matches Category.slug
  name: string;
  image: string; // path inside /public
  price: number; // INR per piece, internal only
  specs: string[];
};

export const categories: Category[] = [
  { slug: "wire-strippers", name: "Wire Strippers" },
  { slug: "wire-cutters", name: "Wire Cutters" },
  { slug: "cutting-nippers", name: "Cutting Nippers" },
  { slug: "reversible-screwdrivers", name: "Reversible Screwdrivers" },
  { slug: "ego-soldering-irons", name: "EGO Soldering Irons" },
  { slug: "canon-soldering-irons", name: "Canon Soldering Irons" },
  { slug: "pliers", name: "Pliers" },
  { slug: "hand-tools", name: "Hand Tools" }
];

export const products: Product[] = [
  {"category": "wire-strippers", "id": "no-2-dlx-plus-self-adjusting-wire-stripper-and-cutter", "name": "No. 2 DLX Plus Self Adjusting Wire Stripper And Cutter", "image": "/images/products/wire-strippers/no-2-dlx-plus-self-adjusting-wire-stripper-and-cutter.jpg", "price": 167.2, "specs": ["Stripper Type: Automatic", "Overall Length: 7 Inch", "Brand: EGO"]},
  {"category": "wire-strippers", "id": "self-adjusting-wire-stripper-02-dlx-plus", "name": "Self Adjusting Wire Stripper (02 Dlx Plus+)", "image": "/images/products/wire-strippers/self-adjusting-wire-stripper-02-dlx-plus.jpg", "price": 164, "specs": ["Overall Length: 7 Inch", "Brand: EGO", "Model: 02 Dlx Plus+"]},
  {"category": "wire-strippers", "id": "150-b-executive-wire-stripper-and-cutter", "name": "150 B Executive Wire Stripper And Cutter", "image": "/images/products/wire-strippers/150-b-executive-wire-stripper-and-cutter.jpg", "price": 25.6, "specs": ["Stripper Type: Manual", "Wire Size Range: 0.5-2.5 sqmm", "Function: Strip And Cut"]},
  {"category": "wire-strippers", "id": "02-dlx-self-adjusting-wire-stripper", "name": "02 Dlx Self Adjusting Wire Stripper", "image": "/images/products/wire-strippers/02-dlx-self-adjusting-wire-stripper.jpg", "price": 155.42, "specs": ["Stripper Type: Self Adjusting", "Wire Size Range: 0.5-4 sqmm", "Size: 175mm"]},
  {"category": "wire-strippers", "id": "150-b-ego-deluxe-wire-stripper-and-cutter", "name": "150 B Ego Deluxe Wire Stripper And Cutter", "image": "/images/products/wire-strippers/150-b-ego-deluxe-wire-stripper-and-cutter.jpg", "price": 30.4, "specs": ["Overall Length: 5 Inch", "Material: Mild Steel", "Brand: EGO"]},
  {"category": "wire-strippers", "id": "wire-stripper-and-cutter", "name": "Wire Stripper And Cutter", "image": "/images/products/wire-strippers/wire-stripper-and-cutter.jpg", "price": 155.42, "specs": ["Stripper Type: Self Adjusting", "Function: Strip And Cut", "Overall Length: 7 Inch"]},
  {"category": "wire-strippers", "id": "self-adjusting-automatic-wire-stripper", "name": "Self Adjusting Automatic Wire Stripper", "image": "/images/products/wire-strippers/self-adjusting-automatic-wire-stripper.jpg", "price": 167.2, "specs": ["Stripper Type: Self Adjusting", "Function: Strip And Cut", "Overall Length: 7 Inch"]},
  {"category": "wire-cutters", "id": "stainless-steel-011-cutter", "name": "Stainless Steel 011 Cutter", "image": "/images/products/wire-cutters/stainless-steel-011-cutter.jpg", "price": 104.88, "specs": ["Material: Stainless Steel", "Handle Material: PVC", "Brand: EGO"]},
  {"category": "wire-cutters", "id": "cc-200-ego-stainless-steel-cable-cutter", "name": "CC 200 Ego Stainless Steel Cable Cutter", "image": "/images/products/wire-cutters/cc-200-ego-stainless-steel-cable-cutter.jpg", "price": 162.64, "specs": ["Size: 7 Inch", "Material: Mild Steel", "Model: CC 200 SS"]},
  {"category": "wire-cutters", "id": "cc-200-classic-ego-cable-cutter", "name": "CC 200 Classic Ego Cable Cutter", "image": "/images/products/wire-cutters/cc-200-classic-ego-cable-cutter.jpg", "price": 81.7, "specs": ["Size: 7 Inch", "Material: Mild Steel", "Application: Industrial"]},
  {"category": "wire-cutters", "id": "heavy-duty-easy-wire-stripper-cable-cutter", "name": "Heavy Duty Easy Wire Stripper & Cable Cutter", "image": "/images/products/wire-cutters/heavy-duty-easy-wire-stripper-cable-cutter.jpg", "price": 79.2, "specs": ["Overall Length: 7 Inch", "Brand: EGO", "Material: Carbon Steel"]},
  {"category": "wire-cutters", "id": "02-dlx-automatic-wire-cutter", "name": "02 DLX Automatic Wire Cutter", "image": "/images/products/wire-cutters/02-dlx-automatic-wire-cutter.jpg", "price": 155.42, "specs": ["Material: Mild Steel", "Brand: EGO", "Handle Material: Rubber + TPR"]},
  {"category": "wire-cutters", "id": "ego-ss-06-cutter", "name": "EGO SS 06 Cutter", "image": "/images/products/wire-cutters/ego-ss-06-cutter.jpg", "price": 110.96, "specs": ["Material: Stainless Steel", "Material Grade: Stainless Steel", "Handle Material: PVC"]},
  {"category": "cutting-nippers", "id": "royal-06-cutting-nipper", "name": "Royal 06 Cutting Nipper", "image": "/images/products/cutting-nippers/royal-06-cutting-nipper.jpg", "price": 52.44, "specs": ["Nipper Type: Nipper", "Blade Type: Straight", "Brand: EGO"]},
  {"category": "cutting-nippers", "id": "elegant-10-cutting-nipper", "name": "Elegant 10 Cutting Nipper", "image": "/images/products/cutting-nippers/elegant-10-cutting-nipper.jpg", "price": 41.42, "specs": ["Nipper Type: Nipper", "Size: 5 inch", "Brand: EGO"]},
  {"category": "cutting-nippers", "id": "deluxe-07-cutting-nipper", "name": "Deluxe 07 Cutting Nipper", "image": "/images/products/cutting-nippers/deluxe-07-cutting-nipper.jpg", "price": 41.6, "specs": ["Nipper Type: Nipper", "Blade Type: Curved", "Brand: EGO"]},
  {"category": "cutting-nippers", "id": "ego-cutting-nipper", "name": "EGO Cutting Nipper", "image": "/images/products/cutting-nippers/ego-cutting-nipper.jpg", "price": 30.78, "specs": ["Size: 5 inch", "Brand: EGO", "Model: Nipper 07"]},
  {"category": "cutting-nippers", "id": "ego-jewellery-tool-11-mini-cutting-nipper", "name": "EGO Jewellery Tool 11 Mini Cutting Nipper", "image": "/images/products/cutting-nippers/ego-jewellery-tool-11-mini-cutting-nipper.jpg", "price": 52.06, "specs": ["Size: 109 mm (4.36 Inch)", "Material: Carbon steel, Mild Steel"]},
  {"category": "cutting-nippers", "id": "07-wire-cutting-nipper-executive", "name": "07 Wire Cutting Nipper (Executive)", "image": "/images/products/cutting-nippers/07-wire-cutting-nipper-executive.jpg", "price": 30.4, "specs": ["Brand: EGO", "Size: 115 MM", "Product Code: 07EX"]},
  {"category": "reversible-screwdrivers", "id": "8-inch-reversible-hex-screw-driver", "name": "8 Inch Reversible Hex Screw Driver", "image": "/images/products/reversible-screwdrivers/8-inch-reversible-hex-screw-driver.jpg", "price": 52.35, "specs": ["Bit Type: Slotted + Phillips", "Ratchet Type: Reversible Ratchet", "Bit Length: 200 mm"]},
  {"category": "reversible-screwdrivers", "id": "10-inch-reversible-hex-screw-driver", "name": "10 Inch Reversible Hex Screw Driver", "image": "/images/products/reversible-screwdrivers/10-inch-reversible-hex-screw-driver.jpg", "price": 63, "specs": ["Size: 10 inch", "Material: Iron", "Type: Two in One Screwdriver"]},
  {"category": "reversible-screwdrivers", "id": "2-in-1-reversible-screwdriver", "name": "2 In 1 Reversible Screwdriver", "image": "/images/products/reversible-screwdrivers/2-in-1-reversible-screwdriver.jpg", "price": 34, "specs": ["Bit Type: Square + Phillips", "Size: 6 inch, 4 inch", "Ratchet Type: Reversible Ratchet"]},
  {"category": "reversible-screwdrivers", "id": "4-inch-ego-reversible-hex-screw-driver", "name": "4 Inch EGO Reversible Hex Screw Driver", "image": "/images/products/reversible-screwdrivers/4-inch-ego-reversible-hex-screw-driver.jpg", "price": 46.35, "specs": ["Size: 4 inch", "Type: 2 in 1", "Material: Stainless Steel"]},
  {"category": "reversible-screwdrivers", "id": "screwdriver-reversible-2-in-1-4-inch", "name": "Screwdriver Reversible Or 2 In 1 - 4 Inch", "image": "/images/products/reversible-screwdrivers/screwdriver-reversible-2-in-1-4-inch.jpg", "price": 32.64, "specs": ["Ratchet Type: Reversible Ratchet", "Size: 4 Inch", "Color: Green"]},
  {"category": "ego-soldering-irons", "id": "8-watt-ego-soldering-iron", "name": "8 Watt EGO Soldering Iron", "image": "/images/products/ego-soldering-irons/8-watt-ego-soldering-iron.jpg", "price": 58.56, "specs": ["Temperature Range: 50-480 Degree C", "Power: 8 W", "Brand: EGO"]},
  {"category": "ego-soldering-irons", "id": "12-watts-soldering-iron", "name": "12 Watts Soldering Iron", "image": "/images/products/ego-soldering-irons/12-watts-soldering-iron.jpg", "price": 56.64, "specs": ["Temperature Range: 50-480 Degree C", "Power: 15 W (as listed on old site - verify)", "Automation Grade: Automatic"]},
  {"category": "ego-soldering-irons", "id": "60-watt-soldering-iron", "name": "60 Watt Soldering Iron", "image": "/images/products/ego-soldering-irons/60-watt-soldering-iron.jpg", "price": 125.76, "specs": ["Temperature Range: 50-480 Degree C", "Power: 60W", "Power Consumption: 120W"]},
  {"category": "ego-soldering-irons", "id": "soldering-iron-15-watt", "name": "Soldering Iron 15 Watt", "image": "/images/products/ego-soldering-irons/soldering-iron-15-watt.jpg", "price": 58.56, "specs": ["Temperature Control: Digital", "Tip Shape: Needle", "Temperature Range: 50-480 Degree C"]},
  {"category": "ego-soldering-irons", "id": "50-watt-ego-soldering-iron", "name": "50 Watt EGO Soldering Iron", "image": "/images/products/ego-soldering-irons/50-watt-ego-soldering-iron.jpg", "price": 123.36, "specs": ["Temperature Range: 50-480 Degree C", "Power Consumption: >120W", "Brand: EGO"]},
  {"category": "canon-soldering-irons", "id": "15-watt-canon-soldering-iron", "name": "15 Watt Canon Soldering Iron", "image": "/images/products/canon-soldering-irons/15-watt-canon-soldering-iron.jpg", "price": 45, "specs": ["Temperature Range: 50-480 Degree C", "Power: 15 W", "Automation Grade: Automatic"]},
  {"category": "canon-soldering-irons", "id": "25-watt-canon-soldering-iron", "name": "25 Watt Canon Soldering Iron", "image": "/images/products/canon-soldering-irons/25-watt-canon-soldering-iron.jpg", "price": 49, "specs": ["Temperature Range: 50-480 Degree C", "Power: 25 W"]},
  {"category": "canon-soldering-irons", "id": "canon-25-watt-led-soldering-iron", "name": "Canon 25 Watt Led Soldering Iron", "image": "/images/products/canon-soldering-irons/canon-25-watt-led-soldering-iron.jpg", "price": 52, "specs": ["Temperature Range: 50-480 Degree C", "Power: 25 W"]},
  {"category": "canon-soldering-irons", "id": "8-watt-canon-soldering-iron", "name": "8 Watt Canon Soldering Iron", "image": "/images/products/canon-soldering-irons/8-watt-canon-soldering-iron.jpg", "price": 45, "specs": ["Power Consumption: 8 W", "Automation Grade: Automatic", "Cord Length: 1 m"]},
  {"category": "canon-soldering-irons", "id": "25-watt-deluxe-canon-soldering-iron", "name": "25 Watt Deluxe Canon Soldering Iron", "image": "/images/products/canon-soldering-irons/25-watt-deluxe-canon-soldering-iron.jpg", "price": 95, "specs": ["Power: 25 W", "Brand: kanun"]},
  {"category": "pliers", "id": "long-nose-plier-executive", "name": "Long Nose Plier Executive", "image": "/images/products/pliers/long-nose-plier-executive.jpg", "price": 72, "specs": ["Nose Type: Long Nose", "Material: Chrome Vanadium", "Size: 6 inch"]},
  {"category": "pliers", "id": "plier-dual-color", "name": "Plier Dual Color", "image": "/images/products/pliers/plier-dual-color.jpg", "price": 108, "specs": ["Plier Type: Combination", "Overall Length: 215mm", "Body Material: Chrome Vanadium"]},
  {"category": "pliers", "id": "plier-8-inch", "name": "Plier 8 Inch", "image": "/images/products/pliers/plier-8-inch.jpg", "price": 113.76, "specs": ["Plier Type: Combination", "Overall Length: 215mm", "Handle Type: PVC Grip"]},
  {"category": "hand-tools", "id": "electrical-line-tester-executive", "name": "Electrical Line Tester Executive", "image": "/images/products/hand-tools/electrical-line-tester-executive.jpg", "price": 15, "specs": ["Material: Alloy Steel", "Size: 123mm", "Weight: 18gm"]},
  {"category": "hand-tools", "id": "yellow-ego-line-tester", "name": "Yellow EGO Line Tester", "image": "/images/products/hand-tools/yellow-ego-line-tester.jpg", "price": 21.12, "specs": ["Material: Spring steel and acetate", "Color: Yellow", "Brand: EGO"]},
  {"category": "hand-tools", "id": "hand-cable-cutter", "name": "Hand Cable Cutter", "image": "/images/products/hand-tools/hand-cable-cutter.jpg", "price": 66.5, "specs": ["Size: 7 Inch", "Overall Length: 134 mm", "Insulation: Non Insulated"]},
  {"category": "hand-tools", "id": "micro-shear-06", "name": "Micro Shear 06", "image": "/images/products/hand-tools/micro-shear-06.jpg", "price": 52.44, "specs": ["Size: 5 inch", "Application: Industrial & Home Uses"]},
  {"category": "hand-tools", "id": "stainless-steel-cutter", "name": "Stainless Steel Cutter", "image": "/images/products/hand-tools/stainless-steel-cutter.jpg", "price": 110.96, "specs": ["Size: 127mm", "Material: Stainless Steel", "Application: Industrial"]},
  {"category": "hand-tools", "id": "apple-top-cutter", "name": "Apple Top Cutter", "image": "/images/products/hand-tools/apple-top-cutter.jpg", "price": 34, "specs": ["Size: 6 Inch", "Product Code: ATC-07", "Application: Professional & Home Usage"]}
];

export const getProductsByCategory = (slug: string) => products.filter((p) => p.category === slug);
