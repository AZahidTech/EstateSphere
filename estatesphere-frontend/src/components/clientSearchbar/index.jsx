export const CITIES = [
    "Lahore",
    "Islamabad",
    "Karachi",
    "Rawalpindi",
    "Faisalabad",
    "Multan",
    "Peshawar",
    "Quetta",
    "Gujranwala",
    "Sialkot",
    "Abbottabad",
    "Murree"
];

export const PURPOSES = ["Buy", "Rent"];

export const PROPERTY_TYPES = {
    Homes: [
        "House",
        "Flat",
        "Upper Portion",
        "Lower Portion",
        "Farm House",
        "Room",
        "Penthouse"
    ],
    Plots: [
        "Residential Plot",
        "Commercial Plot",
        "Agricultural Land",
        "Industrial Land",
        "Plot File",
        "Plot Form"
    ],
    Commercial: [
        "Office",
        "Shop",
        "Warehouse",
        "Factory",
        "Building",
        "Other"
    ]
};

export const PRICE_RANGES = {
    min: [
        { label: "0", value: 0 },
        { label: "5 Lakh", value: 500000 },
        { label: "10 Lakh", value: 1000000 },
        { label: "20 Lakh", value: 2000000 },
        { label: "50 Lakh", value: 5000000 },
        { label: "1 Crore", value: 10000000 },
        { label: "2 Crore", value: 20000000 },
        { label: "5 Crore", value: 50000000 }
    ],
    max: [
        { label: "Any", value: Infinity },
        { label: "50 Lakh", value: 5000000 },
        { label: "1 Crore", value: 10000000 },
        { label: "2 Crore", value: 20000000 },
        { label: "5 Crore", value: 50000000 },
        { label: "10 Crore", value: 100000000 },
        { label: "20 Crore", value: 200000000 },
        { label: "50 Crore", value: 500000000 }
    ]
};

export const AREA_RANGES = {
    min: [
        { label: "0 Marla", value: 0 },
        { label: "3 Marla", value: 3 },
        { label: "5 Marla", value: 5 },
        { label: "10 Marla", value: 10 },
        { label: "15 Marla", value: 15 },
        { label: "1 Kanal", value: 20 },
        { label: "2 Kanal", value: 40 }
    ],
    max: [
        { label: "Any", value: Infinity },
        { label: "5 Marla", value: 5 },
        { label: "10 Marla", value: 10 },
        { label: "1 Kanal", value: 20 },
        { label: "2 Kanal", value: 40 },
        { label: "5 Kanal", value: 100 },
        { label: "10 Kanal", value: 200 }
    ]
};

export const DEFAULT_SEARCH_STATE = {
    purpose: 'Buy',
    city: '',
    location: '',
    category: 'Homes',
    subcategory: '',
    priceRange: { min: '', max: '' },
    areaRange: { min: '', max: '' }
};
