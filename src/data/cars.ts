import { Car } from '../types';

export const CARS: Car[] = [
  {
    id: 'porsche-911-gt3',
    name: 'Porsche 911 GT3 Touring',
    category: 'Track Special',
    power: '502 HP',
    acceleration: '3.2s 0-60',
    topSpeed: '198 MPH',
    pricePerDay: 440,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80',
    badge: 'FLAGSHIP SPEED',
    colorTag: '#ffe17c',
    specs: {
      seats: 2,
      range: 'Flat-6 9K RPM',
      drivetrain: 'RWD 6-Speed PDK'
    }
  },
  {
    id: 'tesla-model-s-plaid',
    name: 'Tesla Model S Plaid',
    category: 'Electric Sport',
    power: '1,020 HP',
    acceleration: '1.99s 0-60',
    topSpeed: '200 MPH',
    pricePerDay: 320,
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&w=1200&q=80',
    badge: 'TRI-MOTOR BEAST',
    colorTag: '#b7c6c2',
    specs: {
      seats: 5,
      range: '396 Miles EPA',
      drivetrain: 'AWD Tri-Motor'
    }
  },
  {
    id: 'bmw-m4-competition',
    name: 'BMW M4 Competition xDrive',
    category: 'Executive GT',
    power: '503 HP',
    acceleration: '3.4s 0-60',
    topSpeed: '180 MPH',
    pricePerDay: 280,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    badge: 'M-TWIN TURBO',
    colorTag: '#ffffff',
    specs: {
      seats: 4,
      range: 'Inline-6 Twin Turbo',
      drivetrain: 'M xDrive AWD'
    }
  },
  {
    id: 'rivian-r1t-quad',
    name: 'Rivian R1T Quad-Motor Adventure',
    category: 'Hyper Adventure',
    power: '835 HP',
    acceleration: '3.0s 0-60',
    topSpeed: '115 MPH',
    pricePerDay: 260,
    image: 'https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?auto=format&fit=crop&w=1200&q=80',
    badge: 'ANY TERRAIN',
    colorTag: '#b7c6c2',
    specs: {
      seats: 5,
      range: '328 Miles Range',
      drivetrain: 'Independent 4-Motor'
    }
  }
];

export const BRANDS = [
  'PORSCHE MOTORSPORT',
  'TESLA PERFORMANCE',
  'BMW M DIVISION',
  'MERCEDES-AMG',
  'AUDI RS SPORT',
  'RIVIAN ADVENTURE',
  'POLESTAR RACING',
  'ALFA ROMEO QUADRIFOGLIO'
];
