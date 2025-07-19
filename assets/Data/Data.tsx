export const phones = [
  {
  id: 1,
  name: "iPhone 15 Pro Max",
  brand: "Apple",
  image: require("./../../assets/phones/iphone15promax.jpeg"),
  price: 255,
  description: "Apple's most advanced iPhone with a powerful A17 Pro chip and titanium design.",
  specs: {
    body: {
      dimensions: "159.9 x 76.7 x 8.3 mm",
      weight: "221 g",
      build: "Titanium frame, Ceramic Shield front, glass back",
      sim: "Nano-SIM and eSIM / Dual SIM (China)"
    },
    display: {
      type: "LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision",
      size: "6.7 inches",
      resolution: "1290 x 2796 pixels"
    },
    platform: {
      os: "iOS 17",
      chipset: "Apple A17 Pro (3 nm)",
      cpu: "Hexa-core (2x3.78 GHz + 4x efficiency)",
      gpu: "Apple GPU (6-core)"
    },
    memory: {
      internal: "256GB / 512GB / 1TB NVMe",
      cardSlot: "No"
    },
    mainCamera: {
      triple: "48 MP (wide), 12 MP (telephoto), 12 MP (ultrawide)",
      features: "Dual-LED flash, HDR, panorama",
      video: "4K@24/25/30/60fps, 1080p@25/30/60/120/240fps"
    },
    selfieCamera: {
      single: "12 MP, f/1.9",
      features: "HDR, Cinematic mode",
      video: "4K@24/25/30/60fps, 1080p@25/30/60/120fps"
    },
    battery: {
      type: "Li-Ion 4422 mAh, non-removable",
      charging: "Wired 50% in 30 min, MagSafe wireless charging 15W"
    },
    features: {
      sensors: "Face ID, accelerometer, gyro, proximity, compass, barometer",
      audio: "Stereo speakers, no 3.5mm jack"
    },
    connectivity: {
      wlan: "Wi-Fi 6e",
      bluetooth: "5.3",
      gps: "Yes, with dual-band A-GPS, GLONASS, GALILEO, BDS, QZSS",
      nfc: "Yes",
      usb: "USB Type-C 3.0"
    }
  }
}
,
 {
  id: 2,
  name: "Samsung Galaxy S24 Ultra",
  brand: "Samsung",
  image: require("./../../assets/phones/sgu24.jpeg"),
  price: 255,
  description: "Samsung’s flagship with S-Pen support, Snapdragon 8 Gen 3, and incredible zoom camera.",
  specs: {
    body: {
      dimensions: "162.3 x 79.0 x 8.6 mm",
      weight: "232 g",
      build: "Titanium frame, Gorilla Glass Armor front/back",
      sim: "Nano-SIM and eSIM / Dual SIM (market dependent)"
    },
    display: {
      type: "Dynamic AMOLED 2X, 120Hz, HDR10+, 2600 nits",
      size: "6.8 inches",
      resolution: "1440 x 3120 pixels"
    },
    platform: {
      os: "Android 14, One UI 6.1",
      chipset: "Snapdragon 8 Gen 3 (4 nm)",
      cpu: "Octa-core",
      gpu: "Adreno 750"
    },
    memory: {
      internal: "256GB / 512GB / 1TB UFS 4.0",
      cardSlot: "No"
    },
    mainCamera: {
      quad: "200 MP (wide), 10 MP (periscope telephoto), 10 MP (telephoto), 12 MP (ultrawide)",
      features: "LED flash, auto-HDR, panorama",
      video: "8K@24/30fps, 4K@30/60fps, 1080p@30/60/240fps"
    },
    selfieCamera: {
      single: "12 MP, f/2.2",
      features: "Dual video call, Auto-HDR, HDR10+",
      video: "4K@30/60fps, 1080p@30fps"
    },
    battery: {
      type: "Li-Ion 5000 mAh, non-removable",
      charging: "Wired 65% in 30 min, 45W, Wireless 15W"
    },
    features: {
      sensors: "Ultrasonic under-display fingerprint, accelerometer, gyro, proximity, compass, barometer",
      audio: "Stereo speakers, no 3.5mm jack"
    },
    connectivity: {
      wlan: "Wi-Fi 7",
      bluetooth: "5.3",
      gps: "Yes, with A-GPS, GLONASS, BDS, GALILEO",
      nfc: "Yes",
      usb: "USB Type-C 3.2"
    }
  }
}
,
 {
  id: 3,
  name: "Google Pixel 8 Pro",
  brand: "Google",
  image: require("./../../assets/phones/pixel.jpeg"),
  price: 255,
  description: "The smartest Pixel ever with Google Tensor G3 and powerful AI photography features.",
  specs: {
    body: {
      dimensions: "162.6 x 76.5 x 8.8 mm",
      weight: "213 g",
      build: "Glass front (Gorilla Glass Victus 2), glass back, aluminum frame",
      sim: "Nano-SIM and eSIM"
    },
    display: {
      type: "LTPO OLED, 120Hz, HDR10+, 2400 nits (peak)",
      size: "6.7 inches",
      resolution: "1344 x 2992 pixels"
    },
    platform: {
      os: "Android 14",
      chipset: "Google Tensor G3 (4 nm)",
      cpu: "9-core (1x3.0 GHz + 4x2.45 GHz + 4x2.15 GHz)",
      gpu: "Immortalis-G715s MC10"
    },
    memory: {
      internal: "128GB / 256GB / 512GB / 1TB UFS 3.1",
      cardSlot: "No"
    },
    mainCamera: {
      triple: "50 MP (wide), 48 MP (ultrawide), 48 MP (telephoto, 5x zoom)",
      features: "Dual-LED flash, Pixel Shift, Ultra-HDR, panorama",
      video: "4K@24/30/60fps, 1080p@30/60/120/240fps"
    },
    selfieCamera: {
      single: "10.5 MP, f/2.2",
      features: "Auto-HDR, panorama",
      video: "4K@24/30/60fps, 1080p@30/60fps"
    },
    battery: {
      type: "Li-Ion 5050 mAh, non-removable",
      charging: "Wired 30W, 50% in 30 min, Wireless 23W"
    },
    features: {
      sensors: "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, barometer",
      audio: "Stereo speakers, no 3.5mm jack"
    },
    connectivity: {
      wlan: "Wi-Fi 6e",
      bluetooth: "5.3",
      gps: "Yes, with A-GPS, GLONASS, GALILEO, QZSS, BDS",
      nfc: "Yes",
      usb: "USB Type-C 3.2 Gen 2"
    }
  }
}
,
 {
  id: 4,
  name: "OnePlus 12",
  brand: "OnePlus",
  image: require("./../../assets/phones/oneplus.jpeg"),
  price: 255,
  description: "Flagship performance with Snapdragon 8 Gen 3, massive battery, and bright AMOLED display.",
  specs: {
    body: {
      dimensions: "164.3 x 75.8 x 9.2 mm",
      weight: "220 g",
      build: "Glass front (Gorilla Glass Victus 2), glass back, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)"
    },
    display: {
      type: "LTPO AMOLED, 120Hz, Dolby Vision, HDR10+, 4500 nits (peak)",
      size: "6.82 inches",
      resolution: "1440 x 3168 pixels"
    },
    platform: {
      os: "Android 14, OxygenOS 14",
      chipset: "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
      cpu: "Octa-core",
      gpu: "Adreno 750"
    },
    memory: {
      internal: "256GB / 512GB / 1TB UFS 4.0",
      cardSlot: "No"
    },
    mainCamera: {
      triple: "50 MP (wide), 64 MP (periscope telephoto, 3x optical zoom), 48 MP (ultrawide)",
      features: "Hasselblad Color Calibration, LED flash, HDR, panorama",
      video: "8K@24fps, 4K@30/60fps, 1080p@30/60/240fps"
    },
    selfieCamera: {
      single: "32 MP, f/2.4",
      features: "Auto-HDR",
      video: "4K@30fps, 1080p@30fps"
    },
    battery: {
      type: "Li-Po 5400 mAh, non-removable",
      charging: "Wired 100W, Wireless 50W, Reverse wireless"
    },
    features: {
      sensors: "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum",
      audio: "Stereo speakers, no 3.5mm jack"
    },
    connectivity: {
      wlan: "Wi-Fi 7",
      bluetooth: "5.4",
      gps: "Yes, with dual-band A-GPS, GLONASS, BDS, GALILEO, QZSS",
      nfc: "Yes",
      usb: "USB Type-C 3.2"
    }
  }
}
,
 {
  id: 5,
  name: "Xiaomi 14 Ultra",
  brand: "Xiaomi",
  image: require("./../../assets/phones/xiaomi.jpeg"),
  price: 255,
  description: "A Leica-powered camera beast with Snapdragon 8 Gen 3 and premium titanium build.",
  specs: {
    body: {
      dimensions: "161.4 x 75.3 x 9.2 mm",
      weight: "224.4 g (glass), 229.5 g (vegan leather)",
      build: "Titanium frame, glass or eco-leather back, Gorilla Glass Victus 2 front",
      sim: "Nano-SIM and eSIM / Dual SIM (market dependent)"
    },
    display: {
      type: "LTPO AMOLED, 120Hz, Dolby Vision, HDR10+, 3000 nits (peak)",
      size: "6.73 inches",
      resolution: "1440 x 3200 pixels"
    },
    platform: {
      os: "Android 14, HyperOS",
      chipset: "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
      cpu: "Octa-core",
      gpu: "Adreno 750"
    },
    memory: {
      internal: "256GB / 512GB / 1TB UFS 4.0",
      cardSlot: "No"
    },
    mainCamera: {
      quad: "50 MP (wide), 50 MP (periscope telephoto, 5x optical zoom), 50 MP (telephoto, 3.2x), 50 MP (ultrawide)",
      features: "Leica optics, Dual-LED flash, HDR, panorama",
      video: "8K@24fps, 4K@24/30/60fps, 1080p@30/60/120/240/960fps"
    },
    selfieCamera: {
      single: "32 MP, f/2.0",
      features: "HDR, panorama",
      video: "4K@30/60fps, 1080p@30/60fps"
    },
    battery: {
      type: "Li-Po 5000 mAh, non-removable",
      charging: "Wired 90W, Wireless 80W, Reverse wireless 10W"
    },
    features: {
      sensors: "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, color spectrum",
      audio: "Stereo speakers, 32-bit/384kHz audio, tuned by Harman Kardon"
    },
    connectivity: {
      wlan: "Wi-Fi 7",
      bluetooth: "5.4",
      gps: "Yes, with dual-band A-GPS, GLONASS, BDS, GALILEO, QZSS, NavIC",
      nfc: "Yes",
      usb: "USB Type-C 3.2, DisplayPort"
    }
  }
}
,
 {
  id: 6,
  name: "Sony Xperia 1 V",
  brand: "Sony",
  image: require("./../../assets/phones/sony.jpeg"),
  price: 255,
  description: "Sony’s flagship with 4K OLED display and professional-grade camera tuning.",
  specs: {
    body: {
      dimensions: "165 x 71 x 8.3 mm",
      weight: "187 g",
      build: "Gorilla Glass Victus 2 front/back, aluminum frame",
      sim: "Nano-SIM and eSIM / Dual SIM"
    },
    display: {
      type: "OLED, 120Hz, HDR BT.2020",
      size: "6.5 inches",
      resolution: "1644 x 3840 pixels (4K)"
    },
    platform: {
      os: "Android 13, upgradable",
      chipset: "Qualcomm Snapdragon 8 Gen 2 (4 nm)",
      cpu: "Octa-core",
      gpu: "Adreno 740"
    },
    memory: {
      internal: "256GB / 512GB UFS",
      cardSlot: "microSDXC (shared SIM slot)"
    },
    mainCamera: {
      triple: "48 MP (wide), 12 MP (telephoto, 3.5x), 12 MP (ultrawide)",
      features: "Zeiss optics, Eye tracking, LED flash, panorama, HDR",
      video: "4K@24/25/30/60/120fps"
    },
    selfieCamera: {
      single: "12 MP, f/2.0",
      features: "HDR",
      video: "4K@30fps, 1080p@30fps"
    },
    battery: {
      type: "Li-Po 5000 mAh, non-removable",
      charging: "Wired 30W, Wireless 15W"
    },
    features: {
      sensors: "Fingerprint (side-mounted), accelerometer, gyro, proximity, compass, barometer",
      audio: "Stereo speakers, 3.5mm jack, 24-bit audio"
    },
    connectivity: {
      wlan: "Wi-Fi 6e",
      bluetooth: "5.3",
      gps: "Yes, with dual-band A-GPS, GLONASS, BDS, GALILEO",
      nfc: "Yes",
      usb: "USB Type-C 3.2"
    }
  }
}
,
 {
  id: 7,
  name: "Motorola Edge+ (2023)",
  brand: "Motorola",
  image: require("./../../assets/phones/motorola.jpeg"),
  price: 255,
  description: "Clean Android experience, curved OLED, and powerful Snapdragon performance.",
  specs: {
    body: {
      dimensions: "161.2 x 74 x 8.6 mm",
      weight: "203 g",
      build: "Glass front (Gorilla Glass Victus), glass back, aluminum frame",
      sim: "Nano-SIM and eSIM"
    },
    display: {
      type: "OLED, 165Hz, HDR10+, 1300 nits",
      size: "6.67 inches",
      resolution: "1080 x 2400 pixels"
    },
    platform: {
      os: "Android 13",
      chipset: "Qualcomm Snapdragon 8 Gen 2 (4 nm)",
      cpu: "Octa-core",
      gpu: "Adreno 740"
    },
    memory: {
      internal: "512GB UFS 4.0",
      cardSlot: "No"
    },
    mainCamera: {
      triple: "50 MP (wide), 12 MP (telephoto), 50 MP (ultrawide)",
      features: "Dual-LED flash, HDR, panorama",
      video: "8K@30fps, 4K@30/60fps, 1080p@30/60/120fps"
    },
    selfieCamera: {
      single: "60 MP, f/2.2",
      features: "HDR",
      video: "4K@30fps, 1080p@30/60fps"
    },
    battery: {
      type: "Li-Po 5100 mAh, non-removable",
      charging: "Wired 68W, Wireless 15W, Reverse 5W"
    },
    features: {
      sensors: "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
      audio: "Stereo speakers"
    },
    connectivity: {
      wlan: "Wi-Fi 6e",
      bluetooth: "5.3",
      gps: "Yes, with A-GPS, GLONASS, GALILEO",
      nfc: "Yes",
      usb: "USB Type-C 3.2"
    }
  }
}
,
{
  id: 8,
  name: "Asus ROG Phone 8",
  brand: "Asus",
  image: require("./../../assets/phones/asus.jpeg"),
  price: 255,
  description: "A gaming powerhouse with active cooling, shoulder triggers, and insane specs.",
  specs: {
    body: {
      dimensions: "163.8 x 76.8 x 8.9 mm",
      weight: "225 g",
      build: "Glass front (Gorilla Glass Victus 2), aluminum frame, RGB logo",
      sim: "Dual SIM (Nano-SIM, dual stand-by)"
    },
    display: {
      type: "LTPO AMOLED, 165Hz, HDR10+, 2500 nits",
      size: "6.78 inches",
      resolution: "1080 x 2400 pixels"
    },
    platform: {
      os: "Android 14, ROG UI",
      chipset: "Qualcomm Snapdragon 8 Gen 3 (4 nm)",
      cpu: "Octa-core",
      gpu: "Adreno 750"
    },
    memory: {
      internal: "256GB / 512GB UFS 4.0",
      cardSlot: "No"
    },
    mainCamera: {
      triple: "50 MP (wide), 32 MP (telephoto, 3x), 13 MP (ultrawide)",
      features: "LED flash, HDR, panorama",
      video: "8K@24fps, 4K@30/60fps, 1080p@30/60/120fps"
    },
    selfieCamera: {
      single: "32 MP, f/2.5",
      features: "Panorama",
      video: "1080p@30fps"
    },
    battery: {
      type: "Li-Po 5500 mAh, non-removable",
      charging: "Wired 65W, PD3.0, QC5"
    },
    features: {
      sensors: "Fingerprint (under display), pressure-sensitive triggers, all standard sensors",
      audio: "Stereo speakers, Dirac sound, 3.5mm jack"
    },
    connectivity: {
      wlan: "Wi-Fi 7",
      bluetooth: "5.4",
      gps: "Yes, with dual-band A-GPS, GLONASS, GALILEO, BDS, QZSS",
      nfc: "Yes",
      usb: "USB Type-C 3.2 (side + bottom)"
    }
  }
}
,
 {
  id: 9,
  name: "Realme GT 6",
  brand: "Oppo",
  image: require("./../../assets/phones/realme.jpeg"),
  price: 255,
  description: "A flagship killer with blazing performance and 120W fast charging.",
  specs: {
    body: {
      dimensions: "162 x 75.1 x 8.6 mm",
      weight: "191 g",
      build: "Glass front, aluminum frame",
      sim: "Dual SIM (Nano-SIM, dual stand-by)"
    },
    display: {
      type: "AMOLED, 120Hz, HDR10+, 6000 nits peak",
      size: "6.78 inches",
      resolution: "1264 x 2780 pixels"
    },
    platform: {
      os: "Android 14, Realme UI 5.0",
      chipset: "Qualcomm Snapdragon 8s Gen 3 (4 nm)",
      cpu: "Octa-core",
      gpu: "Adreno 735"
    },
    memory: {
      internal: "256GB / 512GB UFS 4.0",
      cardSlot: "No"
    },
    mainCamera: {
      triple: "50 MP (wide), 50 MP (telephoto 2x), 8 MP (ultrawide)",
      features: "Dual-LED flash, HDR, panorama",
      video: "4K@30/60fps, 1080p@30/60fps"
    },
    selfieCamera: {
      single: "32 MP, f/2.5",
      features: "HDR",
      video: "1080p@30fps"
    },
    battery: {
      type: "Li-Po 5500 mAh, non-removable",
      charging: "Wired 120W, 50% in 10 min (advertised)"
    },
    features: {
      sensors: "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass",
      audio: "Stereo speakers"
    },
    connectivity: {
      wlan: "Wi-Fi 6",
      bluetooth: "5.4",
      gps: "Yes, with A-GPS, GLONASS, GALILEO, BDS, QZSS",
      nfc: "Yes",
      usb: "USB Type-C 2.0"
    }
  }
}
,
 {
  id: 10,
  name: "Huawei P60 Pro",
  brand: "Huawei",
  image: require("./../../assets/phones/huawei.jpeg"),
  price: 255,
  description: "A photography beast with variable aperture and elegant design, Google-free experience.",
  specs: {
    body: {
      dimensions: "161 x 74.5 x 8.3 mm",
      weight: "200 g",
      build: "Glass front/back, aluminum frame",
      sim: "Nano-SIM and eSIM / Dual SIM"
    },
    display: {
      type: "LTPO OLED, 120Hz, HDR10+",
      size: "6.67 inches",
      resolution: "1220 x 2700 pixels"
    },
    platform: {
      os: "HarmonyOS 3.1 (China) / EMUI 13.1 (Global)",
      chipset: "Qualcomm Snapdragon 8+ Gen 1 4G (4 nm)",
      cpu: "Octa-core",
      gpu: "Adreno 730"
    },
    memory: {
      internal: "256GB / 512GB UFS",
      cardSlot: "NM (Nano Memory), up to 256GB"
    },
    mainCamera: {
      triple: "48 MP (variable aperture f/1.4-4.0), 48 MP (telephoto 3.5x), 13 MP (ultrawide)",
      features: "LED flash, HDR, panorama",
      video: "4K@30/60fps, 1080p@30/60/120/240/960fps"
    },
    selfieCamera: {
      single: "13 MP, f/2.4",
      features: "HDR, panorama",
      video: "4K@30fps, 1080p@30fps"
    },
    battery: {
      type: "Li-Po 4815 mAh, non-removable",
      charging: "Wired 88W, Wireless 50W, Reverse wireless 7.5W"
    },
    features: {
      sensors: "Fingerprint (under display, optical), accelerometer, gyro, proximity, compass, barometer",
      audio: "Stereo speakers"
    },
    connectivity: {
      wlan: "Wi-Fi 6, dual-band",
      bluetooth: "5.2",
      gps: "Yes, with dual-band A-GPS, GLONASS, BDS, GALILEO, QZSS",
      nfc: "Yes",
      usb: "USB Type-C 3.1"
    }
  }
}
,
];



