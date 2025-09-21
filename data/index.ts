import { ImageSourcePropType } from "react-native";

export interface CategoryType{
    id:string,
    name:string,
    image?:ImageSourcePropType,
    index?:number
}

export const tabCategories =  [
  { id: "1", 
    name: "Cardiology" 
  },

  { id: "2", 
    name: "Neurology" 
  },

  { id: "3", 
    name: "Pediatrics" 
  },

  { id: "4", 
    name: "Orthopedics" 
  },

  { id: "5", 
    name: "Dermatology" 
  },

  { id: "6", 
    name: "Oncology" 
  },

  { id: "7", 
    name: "Radiology" 
  },

  { id: "8", 
    name: "Gastroenterology" 
  },

  { id: "9", 
    name: "Psychiatry" 
  },

  { id: "10", 
    name: "Endocrinology" 
  },

];

export const categoriesData = [
  {
    category:'Cardiology',
    list:[
        { id: "1", name: "General City Hospital" },
        { id: "2", name: "Mercy Medical Center" },
        { id: "3", name: "St. Mary's Hospital" },
        { id: "4", name: "Sunrise Health Clinic" },
        { id: "5", name: "Green Valley Hospital" },
        { id: "6", name: "Riverbend Medical Institute" },
        { id: "7", name: "Hopewell Community Hospital" },
        { id: "8", name: "Northside Healthcare Center" },
        { id: "9", name: "Lakeside General Hospital" },
        { id: "10", name: "Oakwood Medical Center" }
    ]
  },
  {
    category:'Neurology',
    list:[
        { id: "1", name: "General City Hospital" },
        { id: "2", name: "Mercy Medical Center" },
        { id: "3", name: "St. Mary's Hospital" },
        { id: "4", name: "Sunrise Health Clinic" },
        { id: "5", name: "Green Valley Hospital" },
        { id: "6", name: "Riverbend Medical Institute" },
        { id: "7", name: "Hopewell Community Hospital" },
        { id: "8", name: "Northside Healthcare Center" },
        { id: "9", name: "Lakeside General Hospital" },
        { id: "10", name: "Oakwood Medical Center" }
    ]
  },
  {
    category:'Pediatrics',
    list:[
        { id: "1", name: "General City Hospital" },
        { id: "2", name: "Mercy Medical Center" },
        { id: "3", name: "St. Mary's Hospital" },
        { id: "4", name: "Sunrise Health Clinic" },
        { id: "5", name: "Green Valley Hospital" },
        { id: "6", name: "Riverbend Medical Institute" },
        { id: "7", name: "Hopewell Community Hospital" },
        { id: "8", name: "Northside Healthcare Center" },
        { id: "9", name: "Lakeside General Hospital" },
        { id: "10", name: "Oakwood Medical Center" }
    ]
  }
]

export const hospitals = [
  { id: "1", name: "General City Hospital" },
  { id: "2", name: "Mercy Medical Center" },
  { id: "3", name: "St. Mary's Hospital" },
  { id: "4", name: "Sunrise Health Clinic" },
  { id: "5", name: "Green Valley Hospital" },
  { id: "6", name: "Riverbend Medical Institute" },
  { id: "7", name: "Hopewell Community Hospital" },
  { id: "8", name: "Northside Healthcare Center" },
  { id: "9", name: "Lakeside General Hospital" },
  { id: "10", name: "Oakwood Medical Center" }
];