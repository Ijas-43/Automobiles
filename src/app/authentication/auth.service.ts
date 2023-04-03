import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpClient) {}
  country() {
    return [
      {
        id: 1,
        country: 'in',
        name: 'India',
      },
      {
        id: 2,
        country: 'pk',
        name: 'Pakistan',
      },
      {
        id: 3,
        country: 'en',
        name: 'England',
      },
      {
        id: 4,
        country: 'af',
        name: 'Afghanistan',
      },
    ];
  }
  state() {
    return [
      {
        id: 1,
        country: 'in',
        state: 'tn',
        name: 'Tamilnadu',
      },
      {
        id: 2,
        country: 'in',
        state: 'kl',
        name: 'Kerla',
      },
      {
        id: 3,
        country: 'in',
        state: 'ka',
        name: 'karnataka',
      },
      {
        id: 4,
        country: 'in',
        state: 'tl',
        name: 'Telangana',
      },
    ];
  }

  city() {
    return [
      {
        id: 1,
        state: 'tn',
        name: 'Chennai',
        city: 'TN-Chennai'
      },
      {
        id: 2,
        state: 'tn',
        name: 'Coimbatore',
        city:'TN-Coimbatore'
      },
      {
        id: 3,
        state: 'tn',
        name: 'Madurai',
        city:'TN-Madurai'
      },
      {
        id: 4,
        state: 'tn',
        name: 'Tiruchirappalli',
        city: 'TN-Tiruchirappalli'
      },
      {
        id: 5,
        state: 'tn',
        name: 'Tuticorin',
        city:'TN-Tuticorin'
      },
      {
        id: 6,
        state: 'tn',
        name: 'tiruvarur',
        city:'TN-Tiruvarur'
      },

      {
        id: 7,
        state: 'tn',
        name: 'Salem',
        city: 'TN-Salem'
      },
      {
        id: 8,
        state:'tn',
        name: 'Tirunelveli',
        city: 'TN-Tirunelveli'
      },
      {
        id: 9,
        state: 'tn',
        name: 'Tiruppur',
        city: 'TN-Tiruppur'
      },
      {
        id: 10,
        state: 'tn',
        name: 'Tirupathur',
        city: 'TN-Tirupathur'
      },
      {
        id: 12,
        state: 'tn',
        name: ' Vellore',
        city: 'TN-Vellore'
      },
      {
        id: 13,
        state: 'tn',
        name: 'Tiruvannamalai',
        city: 'TN-Tiruvannamalai'
      },
      {
        id: 14,
        state: 'tn',
        name: 'Erode',
        city: 'TN-Erode'
      },
      {
        id: 15,
        state: 'tn',
        name: 'Thoothukkudi',
        city: 'TN-Thoothukkudi'
      },
      {
        id: 16,
        state: 'tn',
        name: 'Dindigul',
        city: 'TN-Dindigul'
      },
      {
        id: 17,
        state: 'tn',
        name: 'Thanjavur',
        city: 'TN-Thanjavur'
      },
      {
        id: 18,
        state: 'tn',
        name: 'Ranipet',
        city: 'TN-Ranipet'
      },
      {
        id: 19,
        state: 'tn',
        name: 'Virudhunagar',
        city: 'TN-Virudhunagar'
      },
      {
        id: 20,
        state: 'tn',
        name: 'Karur',
        city: 'TN-Karur',
      },
      {
        id: 21,
        state: 'tn',
        name: 'Nilgiris',
        city: 'TN-Nilgiris'

      },
      {
        id: 22,
        state: 'tn',
        name: 'Krishnagiri',
        city : 'TN-Krishnagiri'
      },
      {
        id: 23,
        state: 'tn',
        name: 'Kanyakumari',
        city: 'TN-Kanyakumari'
      },
      {
        id: 24,
        state: 'tn',
        name: 'Kanchipuram',
        city: 'TN-Kanchipuram'
      },
      {
        id: 25,
        state: 'tn',
        name: 'Namakkal',
        city: ' TN-Namakkal'
      },
      {
        id: 26,
        state: 'tn',
        name: 'Sivagangai',
        city: 'TN-Sivagangai'
      },

      {
        id: 27,
        state: 'tn',
        name: 'Cuddalore',
        city: 'TN-Cuddalore'
      },

      {
        id: 28,
        state: 'tn',
        name: 'chengalpet',
        city: 'TN-chengalpet'
      },
      {
        id: 29,
        state: 'tn',
        name: 'Dharmapuri',
        city: 'TN-Dharmapuri'
      },
      {
        id: 30,
        state: 'tn',
        name: 'Kallakurichi',
        city: 'TN-Kallakurichi'
      },
      {
        id: 31,
        state: 'tn',
        name: 'Kancheepuram',
        city: 'TN-Kancheepuram'
      },
      {
        id: 32,
        state: 'tn',
        name: 'Mayiladuthurai',
        city: 'TN-Mayiladuthurai'
      },
      {
        id: 33,
        state: 'tn',
        name: 'Nagapattinam',
        city: 'TN-Nagapattinam'
      },
      {
        id: 34,
        state: 'tn',
        name: 'Perambalur',
        city: 'TN-Perambalur'
      },
      {
        id: 35,
        state: 'tn',
        name: 'Pudukottai',
        city: 'TN-Pudukottai'
      },
      {
        id: 36,
        state: 'tn',
        name: 'Ramanathapuram',
        city: 'TN-Ramanathapuram'
      },
      {
        id: 37,
        state: 'tn',
        name: 'vilupuram',
        city: 'TN-vilupuram'
      },

      {
        id: 1,
        state: 'kl',
        name: ' Wayanad',
        city: 'KL-Wayanad'
      },
      {
        id: 2,
        state: 'kl',
        name: 'Thrissur',
        city: 'KL-Thrissur'
      },
      {
        id: 3,
        state: 'kl',
        name: 'Thiruvananthapuram',
        city: 'KL-Thiruvananthapuram'
      },
      {
        id: 3,
        state: 'kl',
        name: 'Pathanamthitta',
        city: 'KL-Pathanamthitta'
      },
      {
        id: 4,
        state: 'kl',
        name: 'Palakkad',
        city: 'KL-Palakkad'
      },
      {
        id: 5,
        state: 'kl',
        name: 'Malappuram',
        city: 'KL-Malappuram'
      },
      {
        id: 6,
        state: 'kl',
        name: 'Kozhikode',
        city: 'KL-Kozhikode'
      },
      {
        id: 7,
        state: 'kl',
        name: 'Kottayam',
        city: 'KL-Kottayam'
      },
      {
        id: 8,
        state: 'kl',
        name: 'Kollam',
        city: 'KL-Kollam'
      },
      {
        id: 9,
        state: 'kl',
        name: 'Kasaragod',
        city: 'KL-Kasaragod'
      },
      {
        id: 10,
        state: 'kl',
        name: 'Kannur',
        city: 'KL-Kannur'
      },
      {
        id: 11,
        state: 'kl',
        name: 'Idukki',
        city: 'KL-Idukki'
      },
      {
        id: 12,
        state: 'kl',
        name: 'Ernakulam',
        city: 'KL-Ernakulam'
      },

      {
        id: 1,
        state: 'ka',
        name: 'Chamarajanagar',
        city: 'KA-Chamarajanagar'
      },
      {
        id: 2,
        state: 'ka',
        name: 'Vijayapur',
        city: 'KA-Vijayapur'
      },
      {
        id: 3,
        state: 'ka',
        name: 'Bidar',
        city: 'KA-Bidar'
      },
      {
        id: 4,
        state: 'ka',
        name: 'Ballari',
        city: 'KA-Ballari'
      },
      {
        id: 5,
        state: 'ka',
        name: 'Belagavi',
        city: 'KA-Belagavi'
      },
      {
        id: 6,
        state: 'ka',
        name: 'Bengaluru Rural',
        city: 'KA-Bengaluru Rural'
      },
      {
        id: 7,
        state: 'ka',
        name: 'Bengaluru Urban',
        city: 'KA-Bengaluru Urban',


      },
      {
        id: 8,
        state: 'ka',
        name: 'Bangalkot',
        city: 'KA-Bengalkot',

      },
      {
        id: 9,
        state: 'ka',
        name: 'Shivamogga',
        city: 'KA-Shivamogga'
      },
      {
        id: 10,
        state: 'ka',
        name: 'Ramanagara',
        city: 'KA-Ramanagara'
      },
      {
        id: 11,
        state: 'ka',
        name: 'Raichur',
        city: 'KA-Raichur'
      },
      {
        id: 12,
        state: 'ka',
        name: 'Mysuru',
        city: 'KA-Mysuru'
      },
      {
        id: 13,
        state: 'ka',
        name: 'Mandya',
        city: 'KA-Mandya'
      },
      {
        id: 14,
        state: 'ka',
        name: 'Koppal',
        city: 'KA-Koppal'
      },
      {
        id: 15,
        state: 'ka',
        name: 'Kolar',
        city: 'KA-Kolar'
      },
      {
        id: 16,
        state: 'ka',
        name: 'Kodagu',
        city: 'KA-Kodagu'
      },
      {
        id: 17,
        state: 'ka',
        name: 'Haveri',
        city: 'KA-Haveri'
      },
      {
        id: 18,
        state: 'ka',
        name: 'Hassan',
        city: 'KA-Hassan'
      },
      {
        id: 19,
        state: 'ka',
        name: 'Kalaburagi',
        city:'KA-Kalaburagi'
      },
      {
        id: 20,
        state: 'ka',
        name: 'Gadag',
        city: 'KA-Gadag'
      },
      {
        id: 21,
        state: 'ka',
        name: 'Yadgir',
        city: 'KA-Yadgir'
      },
      {
        id: 22,
        state: 'ka',
        name: 'Uttara',
        city: 'KA-Uttara'
      },
      {
        id: 23,
        state: 'ka',
        name: 'Udupi',
        city: 'KA-Udupi'
      },
      {
        id: 24,
        state: 'ka',
        name: 'Tumakuru',
        city: 'KA-Tumakuru'
      },
      {
        id: 25,
        state: 'ka',
        name: 'Dharwad',
        city: 'KA-Dharwad'
      },

      {
        id: 26,
        state: 'ka',
        name: ' Davanagere',
        city: 'KA-Davanagere'
      },
      {
        id: 27,
        state: 'ka',
        name: 'Dakshina',
        city: 'KA-Dakshina'
      },
      {
        id: 28,
        state: 'ka',
        name: 'Chitradurga',
        city: 'KA-Chitradurga'
      },
      {
        id: 29,
        state: 'ka',
        name: 'Chikkamagaluru',
        city: 'KA-Chikkamagaluru'
      },
      {
        id: 30,
        state: 'ka',
        name: 'Chikballapur',
        city: 'KA-Chikballapur'
      },

      {
        id: 1,
        state: 'tl',
        name: 'Adilabad',
        city: 'TL-Adilabad'
      },
      {
        id: 2,
        state: 'tl',
        name: 'Hyderabad',
        city: 'TL-Hyderabad'
      },
      {
        id: 3,
        state: 'tl',
        name: 'Karimnagar',
        city: 'TL-Karimnagar'
      },
      {
        id: 4,
        state: 'tl',
        name: 'Khammam',
        city: 'TL-Khammam'
      },
      {
        id: 5,
        state: 'tl',
        name: 'Mahabubnagar',
        city: 'TL-Mahabubnagar'
      },
      {
        id: 6,
        state: 'tl',
        name: 'medak',
        city: 'TL-Medak'
      },

      {
        id: 7,
        state: 'tl',
        name: 'Nalgonda',
        city: 'TL-Nalgonda'
      },
      {
        id: 8,
        state: 'tl',
        name: 'Nizamabad',
        city: 'TL-Nizamabad'
      },
      {
        id: 9,
        state: 'tl',
        name: 'Warangal',
        city: 'TL-Warangal'
      },
    ];
  }
  complaints() {
    return [
      {
        comId: 1,
        service: 'Engine Repair',
      },
      {
        comId: 2,
        service: 'Car Wash',
      },
      {
        comId: 3,
        service: 'Brake Repair',
      },
      {
        comId: 4,
        service: 'Tyres and Wheels',
      },
      {
        comId: 5,
        service: 'Accident Repair',
      },
      {
        comId: 6,
        service: 'Lights and Fitments',
      },
      {
        comId: 7,
        service: 'Steering Repair',
      },
      {
        comId: 8,
        service: 'Battery Repair',
      },
      {
        comId: 9,
        service: 'Denting and Painting',
      },
      {
        comId: 10,
        service: 'AC Service & Repair',
      },
      {
        comId: 11,
        service: 'Windshield and Glass',
      },
      {
        comId: 12,
        service: 'Oil Change',
      },
      {
        comId: 13,
        service: 'Running Repair',
      },
      {
        comId: 14,
        service: 'Periodic Maintenance Service',
      },
      {
        comId: 15,
        service: 'Other Complaints',
      },
    ];
  }
  vehicle() {
    return [
      {
        id: 1,
        vehicle: 'cr',
        name: 'Car',
      },
      {
        id: 2,
        vehicle: 'vn',
        name: 'Van',
      },
      {
        id: 3,
        vehicle: 'bk',
        name: 'Bike',
      },
      {
        id: 4,
        vehicle: 'bs',
        name: 'Bus',
      },
      {
        id: 5,
        vehicle: 'lry',
        name: 'Truck',
      },
    ];
  }
  brands() {
    return [
      {
        id: 1,
        vehicle: 'cr',
        brand: 'ww',
        name: 'Wolkswagon',
      },
      {
        id: 2,
        brand: 'bmw',
        vehicle: 'cr',
        name: 'BMW',
      },
      {
        id: 3,
        vehicle: 'cr',
        brand: 'mb',
        name: 'Mercedes-Benz',
      },
      {
        id: 4,
        vehicle: 'cr',
        brand: 'mh',
        name: 'Mahindra',
      },
      {
        id: 5,
        vehicle: 'cr',
        brand: 'ta',
        name: 'Tata',
      },
      {
        id: 6,
        vehicle: 'cr',
        brand: 'adi',
        name: 'Audi',
      },
      {
        id: 7,
        vehicle: 'cr',
        brand: 'hy',
        name: 'Hyundai',
      },
      {
        id: 8,
        vehicle: 'cr',
        brand: 'ms',
        name: 'Maruti Suzuki',
      },
      {
        id: 9,
        vehicle: 'cr',
        brand: 'ty',
        name: 'Toyota',
      },
      {
        id: 10,
        vehicle: 'bk',
        brand: 'ya',
        name: 'Yamaha',
      },

      {
        id: 11,
        vehicle: 'bk',
        brand: 'bj',
        name: 'Bajaj',
      },

      {
        id: 12,
        vehicle: 'bk',
        brand: 'hon',
        name: 'Honda',
      },
      {
        id: 13,
        vehicle: 'vn',
        brand: 'su',
        name: 'Maruti Suzuki',
      },

      {
        id: 14,
        vehicle: 'vn',
        brand: 'for',
        name: 'Force',
      },
      {
        id: 15,
        vehicle: 'vn',
        brand: 'mahi',
        name: 'Mahindra',
      },
      {
        id: 16,
        vehicle: 'vn',
        brand: 'hun',
        name: 'Hyundai',
      },
      {
        id: 17,
        vehicle: 'vn',
        brand: 'tt',
        name: 'Tata',
      },
      {
        id: 18,
        vehicle: 'vn',
        brand: 'hn',
        name: 'Honda',
      },
      {
        id: 19,
        vehicle: 'lry',
        brand: 'tat',
        name: 'Tata',
      },
      {
        id: 20,
        vehicle: 'lry',
        brand: 'mahin',
        name: 'Mahindra',
      },
      {
        id: 21,
        vehicle: 'lry',
        brand: 'ech',
        name: 'Eicher',
      },
      {
        id: 22,
        vehicle: 'lry',
        brand: 'asho',
        name: 'Ashok Leyland',
      },
      {
        id: 23,
        vehicle: 'lry',
        brand: 'fe',
        name: 'force',
      },
      {
        id: 24,
        vehicle: 'lry',
        brand: 'isu',
        name: 'Isuzu',
      },
      {
        id: 24,
        vehicle: 'lry',
        brand: 'bharat',
        name: 'Bharat Benz',
      },
      {
        id: 25,
        vehicle: 'bs',
        brand: 'benz',
        name: 'Bharat Benz',
      },
      {
        id: 26,
        vehicle: 'bs',
        brand: 'ley',
        name: 'Ashok Leyland',
      },
      {
        id: 27,
        vehicle: 'bs',
        brand: 'tata',
        name: 'Tata',
      },
      {
        id: 28,
        vehicle: 'bs',
        brand: 'forc',
        name: 'Force',
      },
      {
        id:29,
        vehicle: 'bs',
        brand: 'eicher',
        name: 'Eicher',
      },
    ];
  }

  model() {
    return [
      {
        id: 1,
        brand: 'ww',
        variant: 'polo',
      },
      {
        id: 2,
        brand: 'ww',
        variant: 'Ameo',
      },
      {
        id: 3,
        brand: 'ww',
        variant: 'Vento',
      },
      {
        id: 4,
        brand: 'ww',
        variant: 'Passat',
      },
      {
        id: 5,
        brand: 'ww',
        variant: 'Tiguan',
      },
      {
        id: 6,
        brand: 'ww',
        variant: 'Virtus',
      },
      {
        id: 7,
        brand: 'ww',
        variant: 'Taigun',
      },
      {
        id: 7,
        brand: 'ww',
        variant: 'Jetta',
      },
      {
        id: 1,
        brand: 'bmw',
        variant: 'X1',
      },
      {
        id: 2,
        brand: 'bmw',
        variant: 'X7',
      },
      {
        id: 3,
        brand: 'bmw',
        variant: 'X5',
      },
      {
        id: 4,
        brand: 'bmw',
        variant: 'Z4',
      },
      {
        id: 5,
        brand: 'bmw',
        variant: '3 Series',
      },
      {
        id: 6,
        brand: 'bmw',
        variant: 'X3',
      },
      {
        id: 7,
        brand: 'bmw',
        variant: '7 Series',
      },
      {
        id: 8,
        brand: 'bmw',
        variant: 'i7',
      },
      {
        id: 9,
        brand: 'bmw',
        variant: 'iX',
      },
      {
        id: 10,
        brand: 'bmw',
        variant: '2 series',
      },
      {
        id: 11,
        brand: 'bmw',
        variant: '5 Series',
      },
      {
        id: 12,
        brand: 'bmw',
        variant: '6 Series',
      },
      {
        id: 13,
        brand: 'bmw',
        variant: 'i4',
      },
      {
        id: 14,
        brand: 'bmw',
        variant: 'XM',
      },
      {
        VehId: 15,
        brand: 'bmw',
        variant: 'M4 Competition',
      },
      {
        id: 1,
        brand: 'mb',
        variant: '3 Series Gran Limousine',
      },
      {
        id: 2,
        brand: 'mb',
        variant: 'M8 Coupe Competition',
      },
      {
        id: 3,
        brand: 'mb',
        variant: 'GLA',
      },
      {
        id: 4,
        brand: 'mb',
        variant: 'S-Class',
      },
      {
        id: 5,
        brand: 'mb',
        variant: 'C-Class',
      },
      {
        id: 6,
        brand: 'mb',
        variant: 'GLE',
      },
      {
        id: 7,
        brand: 'mb',
        variant: 'E-Class',
      },
      {
        id: 8,
        brand: 'mb',
        variant: 'GLS',
      },
      {
        id: 9,
        brand: 'mb',
        variant: 'AMG G 63',
      },
      {
        id: 10,
        brand: 'mb',
        variant: 'AMG GLC 43',
      },
      {
        id: 11,
        brand: 'mb',
        variant: 'EQS',
      },
      {
        id: 12,
        brand: 'mb',
        variant: 'MayBach S-Clss',
      },
      {
        id: 13,
        brand: 'mb',
        variant: 'GLC',
      },
      {
        VehId: 14,
        brand: 'mb',
        variant: 'G-Class',
      },
      {
        id: 15,
        brand: 'mb',
        variant: 'GLB',
      },
      {
        id: 16,
        brand: 'mb',
        variant: 'AMG GLE 63S',
      },
      {
        id: 17,
        brand: 'mb',
        variant: 'AMG E53',
      },
      {
        id: 18,
        brand: 'mb',
        variant: 'A-Class Limousine',
      },
      {
        id: 19,
        brand: 'mb',
        variant: 'EQB',
      },
      {
        id: 20,
        brand:'mb',
        variant: 'AMG GLE 53',
      },
      {
        id: 21,
        brand:'mb',
        variant: 'EQC',
      },
      {
        id: 22,
        brand:'mb',
        variant: 'AMG 35',
      },
      {
        id: 23,
        brand:'mb',
        variant: 'AMG A45S',
      },
      {
        id: 24,
        brand:'mb',
        variant: 'AMG E53 Cabriolet',
      },
      {
        id: 25,
        brand:'mb',
        variant: 'AMG E63',
      },
      {
        id: 26,
        variant: 'AMG GLA 35',
      },
      {
        id: 27,
        variant: 'GLC Coupe',
      },
      {
        id: 1,
        brand:'mh',
        variant: 'Thar',
      },
      {
        id: 2,
        brand:'mh',
        variant: 'XUV 300',
      },
      {
        id: 3,
        brand:'mh',
        variant: 'XUV 500',
      },
      {
        id: 4,
        brand:'mh',
        variant: 'XUV 700',
      },
      {
        id: 5,
        brand:'mh',
        variant: 'Bolero',
      },
      {
        id: 6,
        brand:'mh',
        variant: 'Scorpio-N',
      },
      {
        id: 7,
        brand:'mh',
        variant: 'Scorpio Classic',
      },
      {
        id: 8,

        brand:'mh',
        variant: 'Bolero Neo',
      },
      {
        id: 9,
        brand:'mh',
        variant: 'Marazzo',
      },
      {
        id: 10,
        brand:'mh',
        variant: 'Bolero Camper',
      },
      {
        id: 11,
        brand:'mh',
        variant: 'XUV 400 EV',
      },
      {
        id: 12,
        brand:'mh',
        variant: 'KUV 100 NXT',
      },
      {
        id: 13,
        brand:'mh',
        variant: 'E Verito',
      },
      {
        id: 14,
        brand:'mh',
        variant: 'Bolero Maxitruck Plus',
      },
      {
        id: 15,
        brand:'mh',
        variant: 'Bolero Pikup Extralong',
      },
      {
        id: 16,
        brand:'mh',
        variant: 'Bolero Pikup Extrastrong',
      },
      {
        id: 1,
        brand:'ta',
        variant: 'Indica',
      },
      {
        id: 2,
        brand:'ta',
        variant: 'Indigo',
      },
      {
        id: 3,
        brand:'ta',
        variant: 'Manza',
      },
      {
        id: 4,
        brand:'ta',
        variant: 'Nexon',
      },
      {
        id: 5,
        brand:'ta',
        variant: 'Punch',
      },
      {
        id: 6,
        brand:'ta',
        variant: 'Harrier',
      },
      {
        id: 7,
        brand:'ta',
        variant: 'Tiago',
      },
      {
        id: 8,
        brand:'ta',
        variant: 'Altroz',
      },
      {
        id: 9,
        brand:'ta',
        variant: 'Safari',
      },
      {
        id: 10,
        brand:'ta',
        variant: 'Tiago EV',
      },
      {
        id: 11,
        brand:'ta',
        variant: 'Tigor',
      },
      {
        id: 12,
        brand:'ta',
        variant: 'Tigor EV',
      },
      {
        id: 13,
        brand:'ta',
        variant: 'Nexon EV Max',
      },
      {
        id: 14,
        brand:'ta',
        variant: 'Tiago Vxi',
      },
      {
        id: 15,
        brand:'ta',
        variant: 'Yodha Pikup',
      },
      {
        id: 16,
        brand:'ta',
        variant: 'Nexon EV Prime',
      },
      {
        id: 1,
        brand:'adi',
        variant: 'Q3',
      },
      {
        id: 2,
        brand:'adi',
        variant: 'Q5',
      },
      {
        id: 3,
        brand:'adi',
        variant: 'Q7',
      },
      {

        id: 4,
        brand:'adi',
        variant: 'Q8',
      },
      {
        id: 5,
        brand:'adi',
        variant: 'A4',
      },
      {
        id: 6,
        brand:'adi',
        variant: 'A6',
      },
      {
        id: 7,
        brand:'adi',
        variant: 'RS5',
      },
      {
        id: 8,
        brand:'adi',
        variant: 'e-tron',
      },
      {
        id: 9,
        brand:'adi',
        variant: 'RS e-tron GT',
      },
      {
        id: 10,
        brand:'adi',
        variant: 'A8L',
      },
      {
        id: 11,
        brand:'adi',
        variant: 'Q3 Sportback',
      },
      {
        id: 12,
        brand:'adi',
        variant: 'S5 Sportback',
      },
      {
        id: 13,
        brand:'adi',
        variant: 'RS Q8',
      },
      {
        id: 1,
        brand:'hy',
        variant: 'Creta',
      },
      {
        id: 2,
        brand:'hy',
        variant: 'Venue',
      },
      {
        id: 3,
        brand:'hy',
        variant: 'i20',
      },
      {
        id: 4,
        brand:'hy',
        variant: 'Aura',
      },
      {
        id: 5,
        brand:'hy',
        variant: 'Tucson',
      },
      {
        id: 6,
        brand:'hy',
        variant: 'Alcazar',
      },
      {
        id: 6,
        brand:'hy',
        variant: 'Elantra Xi',
      },
            {
        id: 7,
        brand:'hy',
        variant: 'Kona Electric',
      },
      {
        id: 8,
        brand:'hy',
        variant: 'Venue N Line',
      },
      {
        id: 9,
        brand:'hy',
        variant: 'Grand i10 Nios',
      },
      {
        id: 10,
        brand:'hy',
        variant: 'i10',
      },
      {
        id: 11,
        brand:'hy',
        variant: 'i20 N Line',
      },
      {
        id: 12,
        brand:'hy',
        variant: 'IONIQ 5',
      },
      {
        id: 1,
        brand:'ms',
        variant: 'Brezza',
      },
      {
        id: 2,
        brand:'ms',
        variant: 'Ertiga',
      },
      {
        id: 3,
        brand:'ms',
        variant: 'Swift',
      },
      {
        id: 4,
        brand:'ms',
        variant: 'Baleno',
      },
      {
        id: 5,
        brand:'ms',
        variant: 'Dzire',
      },
      {
        id: 6,
        brand:'ms',
        variant: 'Alto 800',
      },
      {
        id: 7,
        brand:'ms',
        variant: 'Wagon R',
      },
      {
        id: 8,
        brand:'ms',
        variant: 'Alto K10',
      },
      {
        id: 9,
        brand:'ms',
        variant: 'Eeco',
      },
      {
        id: 10,
        brand:'ms',
        variant: 'XL6',
      },
      {
        id: 11,
        brand:'ms',
        variant: 'Celerio',
      },
      {
        id: 12,
        brand:'ms',
        variant: 'Ignis',
      },
      {
        id: 13,
        brand:'ms',
        variant: 'S-Presso',
      },
      {
        id: 14,
        brand:'ms',
        variant: 'Ciaz',
      },
      {
        id: 15,
        brand:'ms',
        variant: 'Ertiga Tour',
      },
      {
        id: 16,
        brand:'ms',
        variant: 'Alto 800 Tour',
      },
      {
        id: 17,
        brand:'ms',
        variant: 'Eeco Cargo',
      },
      {
        id: 18,
        brand:'ms',
        variant: 'Grand Vitara',
      },
      {
        id: 19,
        brand:'ms',
        variant: 'Super Carry',
      },
      {
        id: 20,
        brand:'ms',
        variant: 'swift Dzire Tour',
      },
      {
        id: 21,
        brand:'ms',
        variant: 'Wagon R Tour',
      },
      {
        id: 1,
        brand:'ty',
        variant: 'Fortuner',
      },
      {
        id: 2,
        brand:'ty',
        variant: 'Land Crusier 300',
      },
      {
        id: 3,
        brand:'ty',
        variant: 'Urban Crusier Hyryder',
      },
      {
        id: 4,
        brand:'ty',
        variant: 'Hilux',
      },
      {
        id: 5,
        brand:'ty',
        variant: 'Vellfire',
      },
      {
        id: 6,
        brand:'ty',
        variant: 'Camry',
      },
      {
        id: 7,
        brand:'ty',
        variant: 'Fortuner Legender',
      },
      {
        id: 8,
        brand:'ty',
        variant: 'Glanza',
      },
      {
        id: 9,
        brand:'ty',
        variant: 'Innova Crysta',
      },
      {
        id: 10,
        brand:'ty',
        variant: 'Innova Hycross',
      },
      {
        id: 11,
        brand:'ty',
        variant: 'Corolla Altis',
      },
      {
        id: 1,
        brand:'ya',
        variant: 'R15',
      },
      {
        id: 2,
        brand:'ya',
        variant: 'FZS FI V4',
      },
      {
        id: 3,
        brand:'ya',
        variant: 'Fascino 125',
      },
      {
        id: 4,
        brand:'ya',
        variant: 'RayZR 125',
      },
      {
        id: 5,
        brand:'ya',
        variant: 'FZ S FI',
      },
      {
        id: 6,
        brand:'ya',
        variant: 'FZ FI',
      },
      {
        id: 7,
        brand:'ya',
        variant: 'R15S',
      },
      {
        id: 8,
        brand:'ya',
        variant: 'FZ25',
      },
      {
        id: 9,
        brand:'ya',
        variant: 'FZ X',
      },
      {
        id: 10,
        brand:'ya',
        variant: 'Aerox 155',
      },
      {
        id: 11,
        brand:'ya',
        variant: 'R15 V4',
      },

      {
        id: 1,
        brand:'bj',
        variant: 'Pulsar 125',
      },
      {
        id: 2,
        brand:'bj',
        variant: 'Pulsar 150',
      },
      {
        id: 3,
        brand:'bj',
        variant: 'Pulsar N160',
      },
      {
        id: 4,
        brand:'bj',
        variant: 'RS 200',
      },
      {
        id: 5,
        brand:'bj',
        variant: 'NS125',
      },
      {
        id: 6,
        brand:'bj',
        variant: 'NS200',
      },
      {
        id: 7,
        brand:'bj',
        variant: 'Paltina 100',
      },
      {
        id: 8,
        brand:'bj',
        variant: 'NS160',
      },
      {
        id: 9,
        brand:'bj',
        variant: 'Dominar 400',
      },
      {
        id: 10,
        brand:'bj',
        variant: 'Dominar 250',
      },
      {
        id: 11,
        brand:'bj',
        variant: 'Pulsar N250',
      },
      {
        id: 12,
        brand:'bj',
        variant: 'Platina 110',
      },
      {
        id: 13,
        brand:'bj',
        variant: 'Pulsar P150',
      },
      {
        id: 14,
        brand:'bj',
        variant: 'CT 110',
      },
      {
        id: 15,
        brand:'bj',
        variant: 'Avengers Street160',
      },
      {
        id: 16,
        brand:'bj',
        variant: 'Chetak',
      },
      {
        id: 17,
        brand:'bj',
        variant: 'CT 125X',
      },
      {
        id: 18,
        brand:'bj',
        variant: 'Pulsar F250',
      },
      {
        id: 19,
        brand:'bj',
        variant: 'Avenger Cruise 220',
      },
      {
        id: 1,
        brand:'hon',
        variant: 'Activa',
      },
      {
        id: 2,
        brand:'hon',
        variant: 'AP 125',
      },
      {
        id: 3,
        brand:'hon',
        variant: 'Shine',
      },
      {
        id: 4,
        brand:'hon',
        variant: 'Dio',
      },
      {
        id: 5,
        brand:'hon',
        variant: 'Unicorn',
      },
      {
        id: 6,
        brand:'hon',
        variant: 'Hness CB350',
      },
      {
        id: 7,
        brand:'hon',
        variant: 'Hornet',
      },
      {
        id: 8,
        brand:'hon',
        variant: 'Activa 125',
      },
      {
        id: 9,
        brand:'hon',
        variant: 'Livo',
      },
      {
        id: 10,
        brand:'hon',
        variant: 'X-Blade',
      },
      {
        id: 11,
        brand:'hon',
        variant: 'CB350RS',
      },
      {
        id: 12,
        brand:'hon',
        variant: 'CB300F',
      },
      {
        id: 13,
        brand:'hon',
        variant: 'CB300R',
      },
      {
        id: 14,
        brand:'hon',
        variant: 'CD 110Dream',
      },
      {
      id: 15,
      brand:'hon',
        variant: 'CBR 650R',
      },
      {
        id: 16,
        brand:'hon',
        variant: 'CB200X',
      },
      {
        id: 17,
        brand:'hon',
        variant: 'Grazia',
      },
      {
        id: 18,
        brand:'hon',
        variant: 'CBR1000RR-R Fireblade',
      },
      {
        id: 1,
        brand:'su',
        variant: 'Omni',
      },
    ];
  }
  service() {
    return [
      {
        Id: 1,
        Center: 'All in One Service Center',
      },
      {
        Id: 2,
        Center: 'Wolkswagon Service Center',
      },
      {
        Id: 3,
        Center: 'BMW Service Center',
      },
      {
        Id: 4,
        Center: 'Mercedez-Benz Service Center',
      },
      {
        Id: 5,
        Center: 'Mahindra Service Center',
      },
      {
        Id: 6,
        Center: 'Tata Service Center',
      },
      {
        Id: 7,
        Center: 'Yamaha Service Center',
      },
      {
        Id: 8,
        Center: 'Audi Service Center',
      },
      {
        Id: 9,
        Center: 'Bajaj Service Center',
      },
      {
        Id: 10,
        Center: 'Hyundai Service Center',
      },
      {
        Id: 11,
        Center: 'Honda Service Center',
      },
      {
        Id: 12,
        Center: 'Maruti Suzuki in One Service Center',
      },
      {
        Id: 13,
        Center: 'Toyoto Service Center',
      },
    ];
  }


  details=[
    {
      id:1,
      category:'bike',
      vehicle:'bk',
      brands: 'ya',
      image:'./assets/sales/bike/product-1.png',
      brand:'2021 Yamaha FZ',
      version:'FZ-S V3 Manual',
      price:'90000',
      km:'10000',
      owner: '1st',
      fuel:'petrol',
      reg:'TN-01',
      city: 'TN-Chennai',
      location: 'adayar, chennai'

    },
    {
      id:2,
      category:'car',
      vehicle:'cr',
      brands: 'ta',
      variant: 'Tiago Vxi',
      image:'./assets/sales/car/tata-tiago-2016.jpg',
      brand:'2016 Tata Tiago',
      version:'TDS FI Manual',
      price:'490000',
      km:'100000',
      owner: '2ND',
      fuel:'Diesel',
      reg:'TN-23',
      city: 'TN-Chennai',
      location: 'avadi, chennai'

    },
    {
      id:3,
      category:'van',
      vehicle:'vn',
      brands: 'su',
      variant: 'Omni',
      image:'./assets/sales/van/2014-marsuzu-omni.jpeg',
      brand:'2014 Suzuki Omni',
      version:'TDS XI Manual',
      price:'90000',
      km:'200000',
      owner: '2ND',
      fuel:'Gasoline',
      reg:'TN-12',
      city: 'TN-Chennai',
      location: 'OMR, chennai'

    },
    {
      id:4,
      category:'truck',
      vehicle:'lry',
      brands: 'asho',
      image:'./assets/sales/truck/Ashok-leyland-truck.jpg',
      brand:'2016 AshokLeyland',
      version:'Truck Manual',
      price:'110000',
      km:'100000',
      owner: '2ND',
      fuel:'Diesel',
      reg:'TN-04',
      city: 'TN-Chennai',
      location: 'guindy, chennai'

    },
    {
      id:5,
      category:'bus',
      vehicle:'bs',
      brands: 'tata',
      image:'./assets/sales/bus/bus1.jpeg',
      brand:'2016 Tata',
      version:'Bus Manual',
      price:'120000',
      km:'300000',
      owner: '1ST',
      fuel:'Diesel',
      reg:'TN-34',
      name: 'TN-Erode',
      location: 'mandi,Erode'

    },
    {
      id:6,
      category:'bike',
      vehicle:'bk',
      brands: 'bj',
      image:'./assets/sales/bike/pulsar.jpg',
      brand:'2019 Bajaj Pulsar',
      version:'Pulsar 150 Manual',
      price:'80000',
      km:'10000',
      owner: '1st',
      fuel:'petrol',
      reg:'TN-55',
      name: 'TN-Pudukottai',
      location: 'TVS ST, Pudukottai'
    },
    {
      id:7,
      category:'car',
      vehicle:'cr',
      brands: 'ty',
      variant: 'Corolla Altis',
      image:'./assets/sales/car/2014-Toyota-Corolla-Altis.jpg',
      brand:'2016 Toyota',
      version:'Corolla Altis Manual',
      price:'290000',
      km:'100000',
      owner: '3RD',
      fuel:'Petrol',
      reg:'TN-43',
      city:'TN-Madurai',
      location: 'South St, Madurai'

    },
    {
      id:8,
      category:'van',
      vehicle:'vn',
      brands: 'mahi',
      image:'./assets/sales/van/2019-mahindra-suprovx8.jpg',
      brand:'2014 Mahindra',
      version:'Supro vx8 Manual',
      price:'120000',
      km:'200000',
      owner: '1ST',
      fuel:'Petrol',
      reg:'TN-21',
      city: 'TN-Chennai',
      location: 'avadi, chennai'

    },
    {
      id:9,
      category:'truck',
      vehicle:'lry',
      brands: 'mahin',
      image:'./assets/sales/truck/BLAZO-25-TIPPER-mahindra.jpg',
      brand:'2014 Mahindra',
      version:'Blazo-25 Manual',
      price:'1400000',
      km:'200000',
      owner: '2ND',
      fuel:'Diesel',
      reg:'TN-04',
      city: 'TN-Chennai',
      location: 'Mannadi, chennai'

    },
    {
      id:10,
      category:'bus',
      vehicle:'bs',
      brands: 'ley',
      image:'./assets/sales/bus/bus2.jpg',
      brand:'2018 Ashok Leyland',
      version:'Tourist Manual',
      price:'120000',
      km:'300000',
      owner: '1ST',
      fuel:'Diesel',
      reg:'TN-34',
      name: 'TN-Erode',
      location: 'mandi,Erode'

    },
    {
      id:11,
      category:'bike',
      vehicle:'bk',
      brands: 'hon',
      image:'./assets/sales/bike/hornet.jpg',
      brand:'2018 Honda Hornet',
      version:'CB- Horner Manual',
      price:'50,000',
      km:'40,000',
      owner: '2ND',
      fuel:'petrol',
      reg:'TN-45',
      city: 'TN-Tiruchirappalli',
      location: 'KK nagar,trichy'
    },
    {
      id:12,
      category:'car',
      vehicle:'cr',
      image:'./assets/sales/car/2017-volkswagen-jetta.jpg',
      brand:'2017 Volkswagen',
      brands: 'ww',
      variant: 'Jetta',
      version:'Jetta VXI Automatic',
      price:'690000',
      km:'100000',
      owner: '1ST',
      fuel:'Diesel',
      reg:'TN-23',
      city: 'TN-Sivagangai',
      location: 'West St, Sivagangai'

    },
    {
      id:13,
      category:'van',
      vehicle:'vn',
      brands: 'mahi',
      image:'./assets/sales/van/2019-mahindra-excelo.jpg',
      brand:'2019 Mahindra',
      version:'Excelo Manual',
      price:'110000',
      km:'200000',
      owner: '1ST',
      fuel:'Diesel',
      reg:'TN-45',
      city: 'TN-Tiruchirappalli',
      location: 'Tvs Tolgate, Trichy'

    },
    {
      id:14,
      category:'truck',
      vehicle:'lry',
      brands: 'ech',
      image:'./assets/sales/truck/Eicher-truck.jpg',
      brand:'2014 Eicher',
      version:'Truck Heavy Manual',
      price:'1400000',
      km:'300000',
      owner: '2ND',
      fuel:'Diesel',
      reg:'TN-06',
      city: 'TN-Chennai',
      location: 'Avadi, chennai'

    },
    {
      id:15,
      category:'bus',
      vehicle:'bs',
      brands: 'forc',
      image:'./assets/sales/bus/bus-4.jpg',
      brand:'2018 Force',
      version:'Bus Manual',
      price:'110000',
      km:'200000',
      owner: '1ST',
      fuel:'Diesel',
      reg:'TN-45',
      city: 'TN-Tiruchirappalli',
      location: 'Tvs Tolgate, Trichy'

    },
    {
      id:16,
      category:'bike',
      vehicle:'bk',
      brands: 'ya',
      image:'./assets/sales/bike/victor.jpeg',
      brand:'2018 TVS',
      version:'Victor Manual',
      price:'30,000',
      km:'10000',
      owner: '!ST',
      fuel:'petrol',
      reg:'TN-46',
      city: 'TN-Namakkal',
      location: 'Periyar St,Namakkal'
    },
    {
      id:17,
      category:'car',
      vehicle:'cr',
      brands: 'hy',
      variant: 'Elantra Xi',
      image:'./assets/sales/car/2019-Hyundai-Elantra.jpg',
      brand:'2019 Hyundai',
      version:'Elantra Xi Manual',
      price:'800000',
      km:'100000',
      owner: '1ST',
      fuel:'Petrol',
      reg:'TN-34',
      city: 'TN-Sivagangai',
      location: 'East St, Sivagangai'

    },

    {
      id:18,
      category:'van',
      vehicle:'vn',
      brands: 'for',
      image:'./assets/sales/van/Force-2017-tourist van.jpg',
      brand:'2017 Force',
      version:'Tourist Manual',
      price:'105000',
      km:'100000',
      owner: '1ST',
      fuel:'Diesel',
      reg:'TN-53',
           city: 'TN-Kanchipuram',
      location: 'Mannadi, Kanchipuram'

    },
    {
      id:19,
      category:'truck',
      vehicle:'lry',
      brands: 'bharat',
      image:'./assets/sales/truck/BharatBenz-tripper-truck.jpg',
      brand:'2017 Bharat Benz',
      version:'Truck Manual',
      price:'1200000',
      km:'100000',
      owner: '2ND',
      fuel:'Diesel',
      reg:'TN-04',
      city: 'TN-Chennai',
      location: 'guindy, chennai'

    },
    {
      id:20,
      category:'bus',
      vehicle:'bs',
      brands: 'benz',
      image:'./assets/sales/bus/bus-3.jpg',
      brand:'2016 Benz',
      version:'Bus Manual',
      price:'1400000',
      km:'300000',
      owner: '2ND',
      fuel:'Diesel',
      reg:'TN-06',
      city: 'TN-Chennai',
      location: 'Avadi, chennai'

    },
    {
      id:21,
      category:'bike',
      vehicle:'bk',
      brands: 'bj',
      image:'./assets/sales/bike/re.jpg',
      brand:'2018 Royal Enfield',
      version:'Classic-350 Manual',
      price:'100000',
      km:'20,000',
      owner: '1ST',
      fuel:'petrol',
      reg:'TN-56',
            city: 'TN-Kanchipuram',
      location: 'North st,Kanchipuram'
    },



    {
      id:22,
      category:'car',
      vehicle:'cr',
      brands: 'mh',
      variant: 'Thar',
      image:'./assets/sales/car/mahindra-thar-2021.jpg',
      brand:'2021 Mahindra',
      version:'Thar 4x4 Automatic',
      price:'110000',
      km:'10000',
      owner: '1st',
      fuel:'Petrol',
      reg:'TN-65',
            city: 'TN-Coimbatore',
      location: 'Estate, Coimbatore'

    },






    {
      id:23,
      category:'truck',
      vehicle:'lry',
      brands: 'tat',
      image:'./assets/sales/truck/tata-tripper-truck.jpg',
      brand:'2019 Tata',
      version:'Tripper Truck Manual',
      price:'1600000',
      km:'500000',
      owner: '1ST',
      fuel:'Diesel',
      reg:'TN-35',
            city: 'TN-Namakkal',
      location: 'Raja st,Namakkal'

    },




    {
      id:24,
      category:'bus',
      vehicle:'bs',
      brands: 'benz',
      image:'./assets/sales/bus/bus-5.jpg',
      brand:'2012 Benz',
      version:'Bus Manual',
      price:'100000',
      km:'20,000',
      owner: '1ST',
      fuel:'petrol',
      reg:'TN-56',
            city: 'TN-Sivagangai',
      location: 'North st,Sivagangai'

    },

  ]

  help=[
    {
      name: 'Immediate Help'
    },
    {
      name: 'Repair Spot Help'
    },
    {
      name: 'Others'
    }
  ]

}
