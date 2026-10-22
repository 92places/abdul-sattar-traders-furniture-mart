import { OwnerContact, ServiceItem, GalleryItem, WhyChooseUsItem } from '../types';

export const BUSINESS_INFO = {
  name: "Abdul Sattar Trader's & Furniture Mart",
  tagline: "Custom Furniture & Complete Woodwork Solutions",
  heroSubtitle: "From beautifully crafted sofas, beds and modern plywood furniture to kitchen cabinets, wooden doors, timber cutting and firewood, we help bring your woodwork ideas to life in Kot Radha Kishan, Kasur.",
  location: "Kot Radha Kishan, Kasur, Punjab, Pakistan",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kot+Radha+Kishan+Kasur+Punjab+Pakistan",
  hours: "Saturday to Thursday: 8:00 AM to 8:00 PM PKT",
  fridayStatus: "Friday: Closed",
  owners: [
    {
      id: 'zahid',
      name: 'Zahid Abdul Sattar',
      role: 'Workshop Manager & Furniture Specialist',
      phone: '+92 300 4306527',
      telLink: 'tel:+923004306527',
      waLink: 'https://wa.me/923004306527',
    },
    {
      id: 'shahid',
      name: 'Shahid Abdul Sattar',
      role: 'Operations & Woodwork Specialist',
      phone: '+92 321 8672673',
      telLink: 'tel:+923218672673',
      waLink: 'https://wa.me/923218672673',
    },
  ] as OwnerContact[],
};

export const PRESET_MESSAGES = {
  general: "Assalam-o-Alaikum! I would like to inquire about furniture and woodwork services at Abdul Sattar Trader's & Furniture Mart.",
  sofaPoshish: "Assalam-o-Alaikum! I would like to inquire about sofa making, repair, poshish or master foam installation.",
  customFurniture: "Assalam-o-Alaikum! I would like to discuss a customized furniture project. Please guide me about the available designs, materials and pricing.",
  timberCutting: "Assalam-o-Alaikum! I would like to inquire about timber log cutting and plank sizes. Please guide me about the service and charges.",
  firewood: "Assalam-o-Alaikum! I would like to inquire about firewood availability, quantity and price.",
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'sofa-making-poshish',
    title: 'Sofa Making, Repair & Poshish',
    badgeLabel: 'Sofa & Poshish Work',
    shortDescription: 'Custom sofa construction, structural repairs, reupholstery (poshish) and fabric replacement tailored to your room seating.',
    fullDescription: 'We provide complete sofa manufacturing and refurbishment services. Whether you want a brand-new sofa set built to your room dimensions, or want to renew an existing sofa frame with fresh fabric and upholstery (poshish), we discuss framing, fabric choices, and comfort directly with you.',
    category: 'upholstery',
    imageUrl: './assets/images/sofa-making-poshish.jpg',
    altText: 'Custom upholstered sofa in warm fabric showcasing neat poshish craftsmanship',
    commonRequests: [
      '5-seater, 6-seater, and 7-seater drawing room sets',
      'L-shaped and sectional sofa seating',
      'Fabric replacement, foam tightening, and frame repairs',
      'Choice of velvet, chenille, textured and durable upholstery fabrics'
    ],
    features: [
      'Custom frame sizes to fit living and drawing rooms',
      'Thorough inspection of existing wooden frames',
      'High-grade stitching and precision fabric fitting'
    ],
    prefilledMessage: PRESET_MESSAGES.sofaPoshish,
  },
  {
    id: 'master-foam-installation',
    title: 'Master Foam Installation (Sofa Re-Foaming)',
    badgeLabel: 'Sofa Re-Foaming on Frame',
    shortDescription: 'Replacing old worn-out foam down to the wooden frame skeleton (dhancha) and fitting fresh, high-density Master foam.',
    fullDescription: 'Our Master foam service specializes in stripping away old, deteriorated, or sagging foam right down to the sofa’s bare wooden skeleton frame (lakri ka dhancha). Our craftsmen inspect the joints, re-tension the base webbing, and fit brand-new, authentic high-density Master foam layers and contour cushions to restore showroom firmness and comfort.',
    category: 'upholstery',
    imageUrl: './assets/images/master-foam-sofa-refoaming.jpg',
    altText: 'Craftsman fitting fresh high-density Master foam padding onto the wooden sofa frame skeleton',
    commonRequests: [
      'Removing old, crumbling foam down to the bare wooden frame',
      'Fitting authentic high-density Master foam for maximum firmness',
      'Re-tensioning sofa base springs and heavy-duty webbing straps',
      'Custom deewan, mattress pads, and seating contouring'
    ],
    features: [
      'Work done directly on the wooden frame skeleton',
      'Choice of Master Molty foam densities according to firmness preference',
      'Reinforced internal bonding so cushions do not slip or sag'
    ],
    prefilledMessage: PRESET_MESSAGES.sofaPoshish,
  },
  {
    id: 'beds-bedroom-furniture',
    title: 'Beds & Bedroom Furniture',
    badgeLabel: 'Beds & Bedroom Sets',
    shortDescription: 'Handcrafted wooden beds, king and queen size frames, tufted or wooden headboards, and bedside tables.',
    fullDescription: 'Customized wooden beds and bedroom furniture designed to suit the dimensions and style of your home. We craft sturdy wooden bed frames, king and queen sizes, matching headboards, and side tables, discussing timber selection and finishes directly with you.',
    category: 'bedroom',
    imageUrl: './assets/images/beds-bedroom-furniture.jpg',
    altText: 'Modern solid wood bed frame with elegant headboard and matching side tables',
    commonRequests: [
      'King-size, Queen-size, and single bed dimensions',
      'Modern low-profile or traditional elevated designs',
      'Wood panel headboards or cushioned upholstery headboards',
      'Matching pair of bedside tables with drawers'
    ],
    features: [
      'Sturdy under-bed cross-beam framing for weight support',
      'Smooth sanded finishes with protective polish or paint',
      'Custom sizing to accommodate standard Pakistani mattresses'
    ],
    prefilledMessage: PRESET_MESSAGES.customFurniture,
  },
  {
    id: 'dressing-tables',
    title: 'Dressing Tables & Mirrors',
    badgeLabel: 'Dressing & Vanity Units',
    shortDescription: 'Functional wooden dressing tables featuring integrated vanity mirrors, cosmetics storage, and smooth sliding drawers.',
    fullDescription: 'Practical and elegant dressing tables built from solid wood or high-grade plywood. Designed with a clear vanity mirror in front, spacious table surface for makeup and cosmetics, and compartmentalized drawers for personal grooming essentials.',
    category: 'bedroom',
    imageUrl: './assets/images/dressing-table-mirror-makeup.jpg',
    altText: 'Wooden dressing table vanity with clear mirror in front and cosmetics makeup items on table',
    commonRequests: [
      'Vanity dressing unit with clear front mirror and makeup item storage',
      'Multiple sliding drawers with smooth channels for accessories',
      'Space-saving corner dressing units for compact bedrooms',
      'Rich wood grain finishes matching existing bedroom furniture'
    ],
    features: [
      'Secure mirror framing and vibration-free mounting',
      'Deep, smooth drawers for makeup bottles and accessories',
      'Protective water-resistant wood polish on the tabletop'
    ],
    prefilledMessage: PRESET_MESSAGES.customFurniture,
  },
  {
    id: 'dining-tables-chairs',
    title: 'Dining Tables & Chairs',
    badgeLabel: 'Dining Tables & Chairs',
    shortDescription: 'Custom dining tables and matching wooden chairs tailored for family meals, gatherings, and formal spaces.',
    fullDescription: 'Bring family together around a sturdy dining table built to order. We discuss shape, seating capacity (4, 6, 8 or 10 seaters), tabletop style, and matching cushioned or wooden chairs with durable joints made for daily household use.',
    category: 'living',
    imageUrl: './assets/images/dining-tables-chairs.jpg',
    altText: 'Sturdy wooden dining table with comfortable dining chairs in a family dining area',
    commonRequests: [
      '4-seater, 6-seater, and 8-seater dining table sets',
      'Rectangular, square, or custom dimensional tabletops',
      'Solid wood chairs with cushioned fabric upholstery',
      'Heat and spill-resistant wood polishes'
    ],
    features: [
      'Reinforced mortise and tenon corner joints for table stability',
      'Ergonomic backrests for comfortable dining posture',
      'Custom wood staining from natural teak to dark walnut'
    ],
    prefilledMessage: PRESET_MESSAGES.customFurniture,
  },
  {
    id: 'modern-plywood-furniture',
    title: 'Modern Plywood Furniture',
    badgeLabel: 'Modern Plywood Work',
    shortDescription: 'Clean-lined contemporary furniture crafted from quality commercial and marine plywood boards.',
    fullDescription: 'Plywood is one of the most versatile and durable materials for modern living. We build clean, modular, and contemporary household furniture using quality plywood sheets, laminates, and edge banding that resist warping in Pakistani weather conditions.',
    category: 'living',
    imageUrl: './assets/images/modern-plywood-furniture.jpg',
    altText: 'Contemporary plywood storage unit and shelving with clean modern lines',
    commonRequests: [
      'Modular display shelves and bookshelf units',
      'Home study desks, computer tables, and workstations',
      'Custom room dividers and partition screens',
      'Laminated plywood cabinets for moisture resistance'
    ],
    features: [
      'Precision cutting for flush joints and seamless aesthetics',
      'Quality edge banding to protect board sides',
      'Wide choice of textures, wood grain laminates, and matte colors'
    ],
    prefilledMessage: PRESET_MESSAGES.customFurniture,
  },
  {
    id: 'wardrobes-storage-cabinets',
    title: 'Wardrobes & Storage Cabinets',
    badgeLabel: 'Wardrobes & Almirahs',
    shortDescription: 'Custom bedroom wardrobes and almirahs featuring organized internal shelves, clothes hanging rails, and bottom drawers.',
    fullDescription: 'Maximize bedroom storage with custom-built wardrobes made to fit your specific room walls and ceiling heights. Our wardrobes feature well-planned interior layouts with clothes hanging space, deep storage shelves, and lockable internal drawers.',
    category: 'bedroom',
    imageUrl: './assets/images/modern-plywood-wardrobes.jpg',
    altText: 'Spacious open bedroom wardrobe showing organized internal wooden shelves and clothes storage',
    commonRequests: [
      '2-door, 3-door, and 4-door wardrobe configurations',
      'Open shelving sections, hanging rail, and bottom drawers',
      'Internal drawers with safety locks for valuables',
      'Sliding or hinged door wardrobes matching room decor'
    ],
    features: [
      'Heavy-duty hinges and durable sliding track systems',
      'Custom compartmentalization tailored to Pakistani clothes storage',
      'Reinforced internal shelves that do not sag under weight'
    ],
    prefilledMessage: PRESET_MESSAGES.customFurniture,
  },
  {
    id: 'modular-kitchen-woodwork',
    title: 'Modular-Style Kitchen Woodwork',
    badgeLabel: 'Kitchen Cabinetry',
    shortDescription: 'Wooden and plywood kitchen base cabinets, wall-mounted overhead units, spice racks, and utensil drawers.',
    fullDescription: 'Custom kitchen cabinetry built from durable plywood and treated wood. We create practical overhead cabinets, sink base units, pantry towers, and cutlery drawers designed for everyday cooking and organized storage. (Note: We specialize in woodwork and cabinetry; plumbing and stone tops are coordinated separately).',
    category: 'kitchen-interior',
    imageUrl: './assets/images/modular-kitchen-wood-cabinets.jpg',
    altText: 'Practical wooden kitchen cabinetry with overhead wall units and base cabinets with drawers',
    commonRequests: [
      'Overhead wall units with glass or solid wooden shutters',
      'Base cabinets with heavy-duty pot and pan drawers',
      'Moisture-resistant plywood construction for kitchen durability',
      'Custom spice racks and pull-out organizer compartments'
    ],
    features: [
      'Built specifically around your kitchen layout and dimensions',
      'Quality stainless steel hinges and smooth drawer sliders',
      'Easy-to-clean laminated or polished exterior surfaces'
    ],
    prefilledMessage: PRESET_MESSAGES.customFurniture,
  },
  {
    id: 'tv-units-media-consoles',
    title: 'TV Units & Media Consoles',
    badgeLabel: 'TV Units & Consoles',
    shortDescription: 'Modern low-profile TV consoles, wall-mounted media panels, and entertainment center storage units.',
    fullDescription: 'The central piece of your living room. We build custom TV units, low-profile media consoles, and full wall-mounted TV panels designed to support modern flat-screen televisions, conceal messy cables, and store set-top boxes, gaming consoles, and decorative items.',
    category: 'living',
    imageUrl: './assets/images/tv-units-media-consoles.jpg',
    altText: 'Clean modern wooden TV console unit with cable management and storage drawers',
    commonRequests: [
      'Low-height TV stands with drawers and open media shelves',
      'Wall-mounted floating TV consoles for modern living rooms',
      'Full-feature TV wall panels with integrated display shelving',
      'Concealed cable routing cutouts'
    ],
    features: [
      'Sturdy construction to safely support large TV sizes',
      'Cable pass-through holes for a tidy, cord-free appearance',
      'Choice of natural wood textures, veneer, or modern two-tone laminates'
    ],
    prefilledMessage: PRESET_MESSAGES.customFurniture,
  },
  {
    id: 'wooden-doors-interior-woodwork',
    title: 'Wooden Doors & Interior Woodwork',
    badgeLabel: 'Doors & Wood Paneling',
    shortDescription: 'Solid wood and engineered interior room doors, main door frames, architraves, and custom woodwork.',
    fullDescription: 'Doors are the first impression of every room. We manufacture solid wood and panel doors, entrance doors, and internal bedroom doors according to your required dimensions, door frame (chokhat) sizes, and carving or paneling preferences.',
    category: 'kitchen-interior',
    imageUrl: './assets/images/wooden-door-carpentry.jpg',
    altText: 'Artisan carved solid wooden entrance door design showcasing rich paneling and natural wood grain',
    commonRequests: [
      'Main entrance doors with decorative paneling and carving',
      'Bedroom and room interior doors in standard and custom sizes',
      'Wooden door frames (chokhats) and door trims',
      'Custom wood staining, lacquer polishing, and varnish'
    ],
    features: [
      'Precision jointing to prevent warping and sagging over time',
      'Custom sizing tailored to non-standard masonry openings',
      'Smooth surface preparation ready for locks and hardware'
    ],
    prefilledMessage: PRESET_MESSAGES.customFurniture,
  },
  {
    id: 'timber-cutting-sawing',
    title: 'Timber Cutting / Log Sawing (Trolley Sawmill)',
    badgeLabel: 'Sawmill & Log Sawing',
    shortDescription: 'Heavy-duty trolley carriage saw machine (trolli wala araa) actively cutting customer-supplied tree logs into planks and beams.',
    fullDescription: 'Our heavy-duty sawmill features a mechanical carriage trolley band saw (trolli wala araa) built to take whole tree logs and raw timber trunks and cut them into precise planks, rafters, and construction beams according to your exact inch and foot measurements. Customers bring their timber to our facility in Kot Radha Kishan and our experienced saw operators process the job efficiently.',
    category: 'timber',
    imageUrl: './assets/images/trolley-log-sawing-service.jpg',
    altText: 'Heavy sawmill trolley carriage machine cutting large timber log into wooden planks in workshop',
    commonRequests: [
      'Sawing whole tree trunks on the trolley carriage saw (trolli wala araa)',
      'Cutting timber logs to specific inch and foot thicknesses',
      'Custom beam sizing for construction and roofing rafters',
      'Commercial and agricultural timber breakdown'
    ],
    features: [
      'Heavy-duty trolley carriage mechanism capable of handling large trunks',
      'Accurate plank thickness according to customer specifications',
      'Clear, straightforward cutting process with transparent charges'
    ],
    prefilledMessage: PRESET_MESSAGES.timberCutting,
  },
  {
    id: 'firewood-sales',
    title: 'Firewood Sales & Weighing',
    badgeLabel: 'Firewood & Weight Scale',
    shortDescription: 'Seasoned firewood and sawmill offcuts from tree sawing stacked in workshop yard, weighed honestly on platform scale (tarazu).',
    fullDescription: 'We supply cut firewood in various quantities for domestic heating, tandoor, cooking, and other lawful purposes. Sourced directly from our sawmill operations, the wood pieces and offcuts are stacked in our workshop yard and weighed on our traditional platform scale (tarazu) so customers get verified, honest weight per maund or kilo.',
    category: 'timber',
    imageUrl: './assets/images/firewood-yard-weighing-scale.jpg',
    altText: 'Heaps of cut firewood logs and sawmill offcuts in workshop yard ready for weighing on scale',
    commonRequests: [
      'Domestic firewood for winter heating and stoves',
      'Wood supply for traditional cooking and tandoors',
      'Bulk firewood sacks or vehicle loads verified by weight on scale (tarazu)',
      'Direct pickup and loading assistance at our workshop'
    ],
    features: [
      'Dry, seasoned pieces cut to convenient handling lengths',
      'Honest weight verification on the workshop platform scale (tarazu)',
      'Friendly assistance with loading at our workshop yard'
    ],
    prefilledMessage: PRESET_MESSAGES.firewood,
  },
];

export const WHY_CHOOSE_US: WhyChooseUsItem[] = [
  {
    title: 'Customized Furniture Designs',
    description: 'Every home has unique dimensions. We build furniture to your exact sizes, room layout, and styling preferences rather than forcing standard factory molds.',
    iconName: 'Ruler',
  },
  {
    title: 'A Wide Range of Woodwork Services',
    description: 'From living room sofas and bedroom suites to kitchen cabinets, interior doors, and timber sawing, manage all your woodwork needs under one roof.',
    iconName: 'Hammer',
  },
  {
    title: 'Furniture Upholstery & Foam Solutions',
    description: 'We do not just build frames; we handle complete poshish work with quality Master foam and durable fabrics to deliver comfortable seating.',
    iconName: 'Armchair',
  },
  {
    title: 'Practical Household Carpentry',
    description: 'We combine traditional Pakistani woodworking techniques with modern plywood materials to ensure your furniture stands up to daily family life.',
    iconName: 'Wrench',
  },
  {
    title: 'Timber Cutting & Sawmill Services',
    description: 'Equipped with heavy timber cutting machinery, we can accept your raw tree logs and saw them into usable planks and beams according to your measurements.',
    iconName: 'Trees',
  },
  {
    title: 'Direct Contact With the Business Owners',
    description: 'Speak directly with brothers Zahid Abdul Sattar or Shahid Abdul Sattar. No middlemen, no sales agents — just direct, honest communication.',
    iconName: 'PhoneCall',
  },
];

export const WORK_PROCESS_STEPS = [
  {
    step: '1',
    title: 'Share Your Requirements',
    description: 'Contact Zahid or Shahid via WhatsApp or phone call. Share your required furniture type, room sizes, or timber cutting needs.',
  },
  {
    step: '2',
    title: 'Discuss Design, Size & Materials',
    description: 'We discuss wood types, plywood options, foam density, upholstery fabric, or plank dimensions to match your vision.',
  },
  {
    step: '3',
    title: 'Confirm the Work & Pricing Directly',
    description: 'We provide clear cost estimates based on agreed specifications. Once approved, the work is scheduled directly with our workshop.',
  },
  {
    step: '4',
    title: 'Coordinate the Job With the Workshop',
    description: 'Our craftsmen complete the carpentry, upholstery, or log sawing. We coordinate inspection and collection at our Kot Radha Kishan workshop.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-sofa-1',
    title: 'Custom 5-Seater Drawing Room Sofa Set',
    category: 'Sofas & Poshish',
    categorySlug: 'sofas',
    imageUrl: './assets/images/sofa-making-poshish.jpg',
    altText: 'Custom upholstered living room sofa with deep seating and tailored fabric',
    description: 'Crafted with seasoned wooden framing, high-density foam cushions, and durable upholstery fabric.',
  },
  {
    id: 'gal-sofa-2',
    title: 'Master Foam Fitted Living Room Couch & Frame Padding',
    category: 'Sofas & Poshish',
    categorySlug: 'sofas',
    imageUrl: './assets/images/master-foam-sofa-refoaming.jpg',
    altText: 'Clean modern sofa frame with firm master foam seating cushions fitted',
    description: 'High-density foam seating refurbished directly on wooden frame for superior comfort and durability.',
  },
  {
    id: 'gal-bed-1',
    title: 'Modern Solid Wood King Bed & Headboard',
    category: 'Beds & Bedroom Furniture',
    categorySlug: 'beds',
    imageUrl: './assets/images/beds-bedroom-furniture.jpg',
    altText: 'Sturdy wooden bed frame with rich wood polish and matching side tables',
    description: 'Handcrafted king-size bed with reinforced sub-frame and matching twin bedside tables.',
  },
  {
    id: 'gal-dining-1',
    title: '6-Seater Family Dining Table with Cushioned Chairs',
    category: 'Dining Tables & Chairs',
    categorySlug: 'dining',
    imageUrl: './assets/images/dining-tables-chairs.jpg',
    altText: 'Wooden dining table with sturdy legs and comfortable upholstered chairs',
    description: 'Solid wooden dining table with sturdy cross-frame construction and comfortable padded seating.',
  },
  {
    id: 'gal-dressing-1',
    title: 'Contemporary Dressing Table with Vanity Mirror & Cosmetics',
    category: 'Dressing Tables',
    categorySlug: 'dressing',
    imageUrl: './assets/images/dressing-table-mirror-makeup.jpg',
    altText: 'Wooden dressing vanity with mirror in front and cosmetics arranged on tabletop',
    description: 'Custom dressing table featuring clear vanity mirror in front and smooth sliding storage drawers.',
  },
  {
    id: 'gal-wardrobe-1',
    title: 'Spacious Bedroom Wardrobe with Organized Shelves & Hanging Rail',
    category: 'Wardrobes & Plywood Furniture',
    categorySlug: 'wardrobes',
    imageUrl: './assets/images/modern-plywood-wardrobes.jpg',
    altText: 'Spacious modern bedroom wardrobe with open shelves and clothes storage layout',
    description: 'Built with quality wood and plywood, featuring internal clothes hanging space and organized shelves.',
  },
  {
    id: 'gal-plywood-1',
    title: 'Modern Plywood Bookshelf & Storage Unit',
    category: 'Wardrobes & Plywood Furniture',
    categorySlug: 'wardrobes',
    imageUrl: './assets/images/modern-plywood-furniture.jpg',
    altText: 'Clean modern plywood display shelves and modular storage cabinet',
    description: 'Precision-cut plywood cabinetry with edge-banding and smooth laminate surfaces.',
  },
  {
    id: 'gal-kitchen-1',
    title: 'Custom Wooden Kitchen Overhead & Base Cabinets',
    category: 'Kitchen Cabinets',
    categorySlug: 'kitchen',
    imageUrl: './assets/images/modular-kitchen-wood-cabinets.jpg',
    altText: 'Fitted kitchen woodwork cabinets and drawers built to room dimensions',
    description: 'Custom wooden cabinetry tailored for cooking areas with organized drawer layouts.',
  },
  {
    id: 'gal-tv-1',
    title: 'Wall-Mounted Living Room TV Console & Media Unit',
    category: 'TV Units',
    categorySlug: 'tv-units',
    imageUrl: './assets/images/tv-units-media-consoles.jpg',
    altText: 'Modern floating wooden TV console with storage compartments and cable organization',
    description: 'Low-profile TV console with cable management channels and compartments for media equipment.',
  },
  {
    id: 'gal-door-1',
    title: 'Carved Solid Wooden Entrance & Room Door Panel',
    category: 'Wooden Doors',
    categorySlug: 'doors',
    imageUrl: './assets/images/wooden-door-carpentry.jpg',
    altText: 'Crafted wooden panel door highlighting natural wood grain and precision jointing',
    description: 'Traditional solid wood panel door with rich wood carving built to exact architectural frame measurements.',
  },
  {
    id: 'gal-timber-1',
    title: 'Sawmill Trolley Carriage Machine Cutting Timber Log',
    category: 'Timber Cutting',
    categorySlug: 'timber',
    imageUrl: './assets/images/trolley-log-sawing-service.jpg',
    altText: 'Heavy sawmill trolley machine cutting large timber log into planks in workshop',
    description: 'Mechanical sawing of customer-provided tree logs into precise building planks on carriage band saw.',
  },
  {
    id: 'gal-firewood-1',
    title: 'Seasoned Firewood Offcuts in Workshop Yard',
    category: 'Firewood',
    categorySlug: 'firewood',
    imageUrl: './assets/images/firewood-yard-weighing-scale.jpg',
    altText: 'Stacked dry firewood logs and sawmill offcuts in workshop yard ready for weighing on scale',
    description: 'Dry, seasoned firewood cut to convenient pieces for domestic heating, verified by weight on workshop scale.',
  },
];
