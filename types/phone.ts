export interface Product {
  status: string;
  data: Data;
}

interface Data {
  specs: Specs;
  _id: string;
  name: string;
  brand: string;
  image: string;
  price: number;
  description: string;
  category: string;
  stock: number;
  averageRatings: number;
  ratingQuantity: number;
  createdAt: string;
  __v: number;
}

interface Specs {
  body: Body;
  display: Display;
  platform: Platform;
  memory: Memory;
  battery: Battery;
  features: Features;
  connectivity: Connectivity;
}

interface Connectivity {
  wlan: string;
  bluetooth: string;
  gps: string;
  usb: string;
}

interface Features {
  sensors: string;
  audio: string;
}

interface Battery {
  type: string;
  charging: string;
}

interface Memory {
  internal: string;
  cardSlot: string;
}

interface Platform {
  os: string;
  chipset: string;
  cpu: string;
  gpu: string;
}

interface Display {
  type: string;
  size: string;
  resolution: string;
}

interface Body {
  dimensions: string;
  weight: string;
  build: string;
}