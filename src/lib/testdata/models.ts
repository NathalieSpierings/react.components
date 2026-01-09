
import { NotFoundError } from "../errors";

const products = [
  { "id": "1", "naam": "Eettafel Acacia", "categorie": "Meubels", "status": "Beschikbaar", "merk": "IKEA", "prijs": 50.7, "beschikbaarVanaf": "2025-02-04" },
  { "id": "2", "naam": "Bouwset Mega Blocks", "categorie": "Speelgoed", "status": "Uitverkocht", "merk": "LEGO", "prijs": 1335.81, "beschikbaarVanaf": "2025-03-11" },
  { "id": "3", "naam": "Laptop Pro 16", "categorie": "Electronics", "status": "Pre-order", "merk": "Apple", "prijs": 1264.65, "beschikbaarVanaf": "2025-03-10" },
  { "id": "4", "naam": "Dames Trenchcoat", "categorie": "Kleding", "status": "Uitverkocht", "merk": "Zara", "prijs": 629.46, "beschikbaarVanaf": "2025-03-24" },
  { "id": "5", "naam": "Poppenhuis Deluxe", "categorie": "Speelgoed", "status": "Pre-order", "merk": "Mattel", "prijs": 168.71, "beschikbaarVanaf": "2025-01-11" },
  { "id": "6", "naam": "RC Raceauto X200", "categorie": "Speelgoed", "status": "Pre-order", "merk": "LEGO", "prijs": 479.02, "beschikbaarVanaf": "2025-02-27" },
  { "id": "7", "naam": "Heren Casual Shirt", "categorie": "Kleding", "status": "Uitverkocht", "merk": "H&M", "prijs": 977.74, "beschikbaarVanaf": "2025-01-11" },
  { "id": "8", "naam": "Bureaustoel Ergonomisch", "categorie": "Meubels", "status": "Pre-order", "merk": "BoConcept", "prijs": 221.15, "beschikbaarVanaf": "2025-03-22" },
  { "id": "9", "naam": "Educatieve Puzzel 1000 pcs", "categorie": "Speelgoed", "status": "Uitverkocht", "merk": "Hasbro", "prijs": 1642.95, "beschikbaarVanaf": "2025-01-17" },
  { "id": "10", "naam": "Pluche Knuffelbeer XL", "categorie": "Speelgoed", "status": "Uitverkocht", "merk": "Mattel", "prijs": 422.59, "beschikbaarVanaf": "2025-03-22" },
  { "id": "11", "naam": "Bouwset Mega Blocks Deluxe", "categorie": "Speelgoed", "status": "Pre-order", "merk": "LEGO", "prijs": 100.29, "beschikbaarVanaf": "2025-01-17" },
  { "id": "12", "naam": "Winterjas Parka", "categorie": "Kleding", "status": "Beschikbaar", "merk": "Nike", "prijs": 850.21, "beschikbaarVanaf": "2025-03-20" },
  { "id": "13", "naam": "4K OLED TV 55 inch", "categorie": "Electronics", "status": "Uitverkocht", "merk": "LG", "prijs": 1080.52, "beschikbaarVanaf": "2025-01-19" },
  { "id": "14", "naam": "Sportlegging High Waist", "categorie": "Kleding", "status": "Pre-order", "merk": "Adidas", "prijs": 1523.75, "beschikbaarVanaf": "2025-03-06" },
  { "id": "15", "naam": "Sneakers Unisex", "categorie": "Kleding", "status": "Beschikbaar", "merk": "Nike", "prijs": 1829.83, "beschikbaarVanaf": "2025-03-23" },
  { "id": "16", "naam": "RC Raceauto X200 Pro", "categorie": "Speelgoed", "status": "Pre-order", "merk": "Mattel", "prijs": 356.62, "beschikbaarVanaf": "2025-01-13" },
  { "id": "17", "naam": "C# Masterclass", "categorie": "Boeken", "status": "Beschikbaar", "merk": "Pearson", "prijs": 1228.06, "beschikbaarVanaf": "2025-01-01" },
  { "id": "18", "naam": "Filosofie voor Beginners", "categorie": "Boeken", "status": "Pre-order", "merk": "Van Dale", "prijs": 1401.22, "beschikbaarVanaf": "2025-02-02" },
  { "id": "19", "naam": "Kinderboek Dierenrijk", "categorie": "Boeken", "status": "Beschikbaar", "merk": "Bruna", "prijs": 168.14, "beschikbaarVanaf": "2025-03-12" },
  { "id": "20", "naam": "Heren Casual Shirt Premium", "categorie": "Kleding", "status": "Beschikbaar", "merk": "H&M", "prijs": 175.45, "beschikbaarVanaf": "2025-03-29" },
  { "id": "21", "naam": "Leren Bankstel 3-zits", "categorie": "Meubels", "status": "Uitverkocht", "merk": "LeenBakker", "prijs": 1859.02, "beschikbaarVanaf": "2025-02-19" },
  { "id": "22", "naam": "Smart Home Hub", "categorie": "Electronics", "status": "Pre-order", "merk": "Samsung", "prijs": 1098.87, "beschikbaarVanaf": "2025-01-23" },
  { "id": "23", "naam": "Dames Trenchcoat Deluxe", "categorie": "Kleding", "status": "Uitverkocht", "merk": "Mango", "prijs": 258.71, "beschikbaarVanaf": "2025-03-04" },
  { "id": "24", "naam": "TV-meubel Industrial", "categorie": "Meubels", "status": "Pre-order", "merk": "IKEA", "prijs": 1603.49, "beschikbaarVanaf": "2025-02-07" },
  { "id": "25", "naam": "Eettafel Acacia Premium", "categorie": "Meubels", "status": "Beschikbaar", "merk": "BoConcept", "prijs": 829.11, "beschikbaarVanaf": "2025-02-05" },
  { "id": "26", "naam": "Winterjas Parka Luxe", "categorie": "Kleding", "status": "Pre-order", "merk": "Nike", "prijs": 1697.56, "beschikbaarVanaf": "2025-03-09" },
  { "id": "27", "naam": "Staafmixer 1200W", "categorie": "Huishouden", "status": "Pre-order", "merk": "Philips", "prijs": 18.24, "beschikbaarVanaf": "2025-02-08" },
  { "id": "28", "naam": "Bureaustoel Ergonomisch Deluxe", "categorie": "Meubels", "status": "Pre-order", "merk": "LeenBakker", "prijs": 48.27, "beschikbaarVanaf": "2025-02-10" },
  { "id": "29", "naam": "Leren Bankstel 3-zits Comfort", "categorie": "Meubels", "status": "Beschikbaar", "merk": "Henders & Hazel", "prijs": 290.89, "beschikbaarVanaf": "2025-03-30" },
  { "id": "30", "naam": "Wireless Noise Cancelling Headphones", "categorie": "Electronics", "status": "Pre-order", "merk": "Sony", "prijs": 247.35, "beschikbaarVanaf": "2025-01-08" },
  { "id": "31", "naam": "RC Raceauto X500", "categorie": "Speelgoed", "status": "Pre-order", "merk": "LEGO", "prijs": 1111.3, "beschikbaarVanaf": "2025-03-09" },
  { "id": "32", "naam": "Laptop Pro 14", "categorie": "Electronics", "status": "Pre-order", "merk": "Apple", "prijs": 175.51, "beschikbaarVanaf": "2025-03-17" },
  { "id": "33", "naam": "Smartphone Galaxy Z", "categorie": "Electronics", "status": "Pre-order", "merk": "Samsung", "prijs": 619.97, "beschikbaarVanaf": "2025-03-22" },
  { "id": "34", "naam": "Educatieve Puzzel 500 pcs", "categorie": "Speelgoed", "status": "Uitverkocht", "merk": "Hasbro", "prijs": 1307.64, "beschikbaarVanaf": "2025-03-28" },
  { "id": "35", "naam": "Sportlegging High Waist Pro", "categorie": "Kleding", "status": "Uitverkocht", "merk": "Adidas", "prijs": 1719.66, "beschikbaarVanaf": "2025-02-22" },
  { "id": "36", "naam": "Bureau Industrial", "categorie": "Meubels", "status": "Uitverkocht", "merk": "IKEA", "prijs": 94.65, "beschikbaarVanaf": "2025-03-06" },
  { "id": "37", "naam": "Bankstel Lederen Comfort", "categorie": "Meubels", "status": "Beschikbaar", "merk": "Henders & Hazel", "prijs": 501.83, "beschikbaarVanaf": "2025-03-04" },
  { "id": "38", "naam": "Smartwatch X10", "categorie": "Electronics", "status": "Beschikbaar", "merk": "Apple", "prijs": 463.7, "beschikbaarVanaf": "2025-02-23" },
  { "id": "39", "naam": "Dames Trenchcoat Casual", "categorie": "Kleding", "status": "Beschikbaar", "merk": "Mango", "prijs": 375.46, "beschikbaarVanaf": "2025-03-08" },
  { "id": "40", "naam": "Heren Casual Shirt Slim Fit", "categorie": "Kleding", "status": "Uitverkocht", "merk": "H&M", "prijs": 1675.48, "beschikbaarVanaf": "2025-02-13" },
  { "id": "41", "naam": "De Avonturen van Tom Sawyer", "categorie": "Boeken", "status": "Pre-order", "merk": "Pearson", "prijs": 1916.79, "beschikbaarVanaf": "2025-01-29" },
  { "id": "42", "naam": "TV-meubel Industrial XL", "categorie": "Meubels", "status": "Pre-order", "merk": "BoConcept", "prijs": 1159.35, "beschikbaarVanaf": "2025-02-21" },
  { "id": "43", "naam": "Kookboek Italiaans", "categorie": "Boeken", "status": "Uitverkocht", "merk": "Bruna", "prijs": 1026.86, "beschikbaarVanaf": "2025-01-30" },
  { "id": "44", "naam": "Stofzuiger Cyclone Pro", "categorie": "Huishouden", "status": "Uitverkocht", "merk": "Bosch", "prijs": 589.19, "beschikbaarVanaf": "2025-01-17" },
  { "id": "45", "naam": "Airfryer XXL", "categorie": "Huishouden", "status": "Beschikbaar", "merk": "Philips", "prijs": 44.17, "beschikbaarVanaf": "2025-01-18" },
  { "id": "46", "naam": "Waterkoker RVS 1.7L", "categorie": "Huishouden", "status": "Uitverkocht", "merk": "Tefal", "prijs": 1768.26, "beschikbaarVanaf": "2025-02-08" },
  { "id": "47", "naam": "Headset Pro Gaming", "categorie": "Electronics", "status": "Pre-order", "merk": "Sony", "prijs": 1608.25, "beschikbaarVanaf": "2025-02-22" },
  { "id": "48", "naam": "Koffiemachine Espresso", "categorie": "Huishouden", "status": "Beschikbaar", "merk": "DeLonghi", "prijs": 1313.79, "beschikbaarVanaf": "2025-01-28" },
  { "id": "49", "naam": "Airfryer Compact", "categorie": "Huishouden", "status": "Pre-order", "merk": "Philips", "prijs": 984.45, "beschikbaarVanaf": "2025-02-24" },
  { "id": "50", "naam": "Bouwset Mini Blocks", "categorie": "Speelgoed", "status": "Uitverkocht", "merk": "LEGO", "prijs": 29.27, "beschikbaarVanaf": "2025-02-07" },
  { "id": "51", "naam": "Heren Casual Shirt Sport", "categorie": "Kleding", "status": "Uitverkocht", "merk": "Adidas", "prijs": 1558.95, "beschikbaarVanaf": "2025-03-17" },
  { "id": "52", "naam": "Smart TV 50 inch", "categorie": "Electronics", "status": "Uitverkocht", "merk": "Samsung", "prijs": 592.35, "beschikbaarVanaf": "2025-02-22" },
  { "id": "53", "naam": "Bankstel Modern", "categorie": "Meubels", "status": "Pre-order", "merk": "IKEA", "prijs": 272.9, "beschikbaarVanaf": "2025-03-03" },
  { "id": "54", "naam": "Eettafel Acacia Compact", "categorie": "Meubels", "status": "Beschikbaar", "merk": "BoConcept", "prijs": 153.93, "beschikbaarVanaf": "2025-03-31" },
  { "id": "55", "naam": "Stofzuiger Cyclone Mini", "categorie": "Huishouden", "status": "Beschikbaar", "merk": "Bosch", "prijs": 439.6, "beschikbaarVanaf": "2025-02-06" },
  { "id": "56", "naam": "Filosofie voor Beginners Deluxe", "categorie": "Boeken", "status": "Beschikbaar", "merk": "Van Dale", "prijs": 1972.94, "beschikbaarVanaf": "2025-02-14" },
  { "id": "57", "naam": "RC Raceauto Mini", "categorie": "Speelgoed", "status": "Pre-order", "merk": "LEGO", "prijs": 1034.14, "beschikbaarVanaf": "2025-01-03" },
  { "id": "58", "naam": "Educatieve Puzzel Junior", "categorie": "Speelgoed", "status": "Beschikbaar", "merk": "Hasbro", "prijs": 1569.66, "beschikbaarVanaf": "2025-01-11" },
  { "id": "59", "naam": "Bankstel Lederen Luxe", "categorie": "Meubels", "status": "Pre-order", "merk": "Henders & Hazel", "prijs": 1760.83, "beschikbaarVanaf": "2025-02-26" },
  { "id": "60", "naam": "Sneakers Unisex Pro", "categorie": "Kleding", "status": "Pre-order", "merk": "Nike", "prijs": 667.15, "beschikbaarVanaf": "2025-03-05" },
  { "id": "61", "naam": "Airfryer Deluxe", "categorie": "Huishouden", "status": "Pre-order", "merk": "Tefal", "prijs": 1028.01, "beschikbaarVanaf": "2025-03-15" },
  { "id": "62", "naam": "Bankstel Modern Compact", "categorie": "Meubels", "status": "Uitverkocht", "merk": "BoConcept", "prijs": 1033.45, "beschikbaarVanaf": "2025-02-22" },
  { "id": "63", "naam": "Eettafel Acacia XL", "categorie": "Meubels", "status": "Pre-order", "merk": "IKEA", "prijs": 33.86, "beschikbaarVanaf": "2025-02-26" },
  { "id": "64", "naam": "Koffiemachine Espresso Mini", "categorie": "Huishouden", "status": "Uitverkocht", "merk": "DeLonghi", "prijs": 1274.24, "beschikbaarVanaf": "2025-01-08" },
  { "id": "65", "naam": "TV-meubel Industrial XL", "categorie": "Meubels", "status": "Uitverkocht", "merk": "IKEA", "prijs": 1064.71, "beschikbaarVanaf": "2025-03-30" }
];


const orders = [
  { "id": "1", "productId": "1", "klant": "Jan de Vries", "aantal": 2, "datumBesteld": "2025-03-01", "status": "Verzonden" },
  { "id": "2", "productId": "1", "klant": "Sofie Jansen", "aantal": 1, "datumBesteld": "2025-03-05", "status": "In behandeling" },
  { "id": "3", "productId": "2", "klant": "Tom Bakker", "aantal": 3, "datumBesteld": "2025-03-10", "status": "Geannuleerd" },
  { "id": "4", "productId": "3", "klant": "Lisa Vermeer", "aantal": 1, "datumBesteld": "2025-03-12", "status": "Verzonden" },
  { "id": "5", "productId": "3", "klant": "Mark de Boer", "aantal": 2, "datumBesteld": "2025-03-15", "status": "In behandeling" },
  { "id": "6", "productId": "4", "klant": "Emma Smit", "aantal": 1, "datumBesteld": "2025-03-18", "status": "Verzonden" },
  { "id": "7", "productId": "5", "klant": "Pieter Vos", "aantal": 5, "datumBesteld": "2025-03-20", "status": "In behandeling" },
  { "id": "8", "productId": "6", "klant": "Anouk de Wit", "aantal": 1, "datumBesteld": "2025-03-22", "status": "Verzonden" },
  { "id": "9", "productId": "6", "klant": "Joris Kramer", "aantal": 2, "datumBesteld": "2025-03-25", "status": "In behandeling" },
  { "id": "10", "productId": "7", "klant": "Kevin Maas", "aantal": 2, "datumBesteld": "2025-03-27", "status": "In behandeling" },
  { "id": "11", "productId": "8", "klant": "Nina van Dijk", "aantal": 1, "datumBesteld": "2025-03-28", "status": "Geannuleerd" },
  { "id": "12", "productId": "8", "klant": "Joris Kramer", "aantal": 3, "datumBesteld": "2025-03-29", "status": "Verzonden" },
  { "id": "13", "productId": "9", "klant": "Lotte Hermans", "aantal": 2, "datumBesteld": "2025-03-30", "status": "In behandeling" },
  { "id": "14", "productId": "10", "klant": "Sanne de Graaf", "aantal": 1, "datumBesteld": "2025-04-01", "status": "Verzonden" },
  { "id": "15", "productId": "11", "klant": "Rick van Leeuwen", "aantal": 4, "datumBesteld": "2025-04-02", "status": "Verzonden" },
  { "id": "16", "productId": "12", "klant": "Emma de Jong", "aantal": 1, "datumBesteld": "2025-04-03", "status": "In behandeling" },
  { "id": "17", "productId": "13", "klant": "Kevin de Bruin", "aantal": 2, "datumBesteld": "2025-04-04", "status": "Verzonden" },
  { "id": "18", "productId": "14", "klant": "Sofie van Dijk", "aantal": 3, "datumBesteld": "2025-04-05", "status": "In behandeling" },
  { "id": "19", "productId": "15", "klant": "Pieter van Dam", "aantal": 1, "datumBesteld": "2025-04-06", "status": "Verzonden" },
  { "id": "20", "productId": "16", "klant": "Anouk Vermeer", "aantal": 2, "datumBesteld": "2025-04-07", "status": "In behandeling" },
  { "id": "21", "productId": "17", "klant": "Rick de Vos", "aantal": 1, "datumBesteld": "2025-04-08", "status": "Verzonden" },
  { "id": "22", "productId": "18", "klant": "Lotte de Vries", "aantal": 3, "datumBesteld": "2025-04-09", "status": "In behandeling" },
  { "id": "23", "productId": "19", "klant": "Tom Smit", "aantal": 2, "datumBesteld": "2025-04-10", "status": "Verzonden" },
  { "id": "24", "productId": "20", "klant": "Sanne Bakker", "aantal": 1, "datumBesteld": "2025-04-11", "status": "Verzonden" },
  { "id": "25", "productId": "21", "klant": "Emma Jansen", "aantal": 1, "datumBesteld": "2025-04-12", "status": "In behandeling" },
  { "id": "26", "productId": "22", "klant": "Tom de Graaf", "aantal": 2, "datumBesteld": "2025-04-13", "status": "Verzonden" },
  { "id": "27", "productId": "23", "klant": "Sofie Kramer", "aantal": 1, "datumBesteld": "2025-04-14", "status": "In behandeling" },
  { "id": "28", "productId": "24", "klant": "Pieter Maas", "aantal": 3, "datumBesteld": "2025-04-15", "status": "Verzonden" },
  { "id": "29", "productId": "25", "klant": "Anouk de Jong", "aantal": 2, "datumBesteld": "2025-04-16", "status": "In behandeling" },
  { "id": "30", "productId": "26", "klant": "Kevin Vos", "aantal": 1, "datumBesteld": "2025-04-17", "status": "Verzonden" },
  { "id": "31", "productId": "27", "klant": "Lotte de Boer", "aantal": 2, "datumBesteld": "2025-04-18", "status": "In behandeling" },
  { "id": "32", "productId": "28", "klant": "Rick Hermans", "aantal": 1, "datumBesteld": "2025-04-19", "status": "Verzonden" },
  { "id": "33", "productId": "29", "klant": "Sanne Vermeer", "aantal": 3, "datumBesteld": "2025-04-20", "status": "In behandeling" },
  { "id": "34", "productId": "30", "klant": "Tom de Vries", "aantal": 2, "datumBesteld": "2025-04-21", "status": "Verzonden" },
  { "id": "35", "productId": "31", "klant": "Emma Bakker", "aantal": 1, "datumBesteld": "2025-04-22", "status": "Verzonden" },
  { "id": "36", "productId": "32", "klant": "Pieter de Jong", "aantal": 2, "datumBesteld": "2025-04-23", "status": "In behandeling" },
  { "id": "37", "productId": "33", "klant": "Anouk van Dijk", "aantal": 1, "datumBesteld": "2025-04-24", "status": "Verzonden" },
  { "id": "38", "productId": "34", "klant": "Kevin Smit", "aantal": 3, "datumBesteld": "2025-04-25", "status": "In behandeling" },
  { "id": "39", "productId": "35", "klant": "Lotte de Graaf", "aantal": 2, "datumBesteld": "2025-04-26", "status": "Verzonden" },
  { "id": "40", "productId": "36", "klant": "Rick de Wit", "aantal": 1, "datumBesteld": "2025-04-27", "status": "In behandeling" },
  { "id": "41", "productId": "37", "klant": "Sanne van Dijk", "aantal": 2, "datumBesteld": "2025-04-28", "status": "Verzonden" },
  { "id": "42", "productId": "38", "klant": "Tom de Boer", "aantal": 1, "datumBesteld": "2025-04-29", "status": "In behandeling" },
  { "id": "43", "productId": "39", "klant": "Emma Vermeer", "aantal": 3, "datumBesteld": "2025-04-30", "status": "Verzonden" },
  { "id": "44", "productId": "40", "klant": "Pieter de Vos", "aantal": 1, "datumBesteld": "2025-05-01", "status": "In behandeling" },
  { "id": "45", "productId": "41", "klant": "Anouk Jansen", "aantal": 2, "datumBesteld": "2025-05-02", "status": "Verzonden" },
  { "id": "46", "productId": "42", "klant": "Kevin Bakker", "aantal": 1, "datumBesteld": "2025-05-03", "status": "In behandeling" },
  { "id": "47", "productId": "43", "klant": "Lotte de Jong", "aantal": 2, "datumBesteld": "2025-05-04", "status": "Verzonden" },
  { "id": "48", "productId": "44", "klant": "Rick van Dam", "aantal": 1, "datumBesteld": "2025-05-05", "status": "In behandeling" },
  { "id": "49", "productId": "45", "klant": "Sanne Hermans", "aantal": 2, "datumBesteld": "2025-05-06", "status": "Verzonden" },
  { "id": "50", "productId": "46", "klant": "Tom de Graaf", "aantal": 1, "datumBesteld": "2025-05-07", "status": "In behandeling" },
  { "id": "51", "productId": "47", "klant": "Emma van Dijk", "aantal": 2, "datumBesteld": "2025-05-08", "status": "Verzonden" },
  { "id": "52", "productId": "48", "klant": "Pieter de Wit", "aantal": 1, "datumBesteld": "2025-05-09", "status": "In behandeling" },
  { "id": "53", "productId": "49", "klant": "Anouk Smit", "aantal": 3, "datumBesteld": "2025-05-10", "status": "Verzonden" },
  { "id": "54", "productId": "50", "klant": "Kevin van Dijk", "aantal": 1, "datumBesteld": "2025-05-11", "status": "In behandeling" },
  { "id": "55", "productId": "51", "klant": "Lotte de Vries", "aantal": 2, "datumBesteld": "2025-05-12", "status": "Verzonden" },
  { "id": "56", "productId": "52", "klant": "Rick Smit", "aantal": 1, "datumBesteld": "2025-05-13", "status": "In behandeling" },
  { "id": "57", "productId": "53", "klant": "Sanne de Vos", "aantal": 2, "datumBesteld": "2025-05-14", "status": "Verzonden" },
  { "id": "58", "productId": "54", "klant": "Tom de Vries", "aantal": 1, "datumBesteld": "2025-05-15", "status": "In behandeling" },
  { "id": "59", "productId": "55", "klant": "Emma Bakker", "aantal": 2, "datumBesteld": "2025-05-16", "status": "Verzonden" },
  { "id": "60", "productId": "56", "klant": "Pieter de Jong", "aantal": 1, "datumBesteld": "2025-05-17", "status": "In behandeling" },
  { "id": "61", "productId": "57", "klant": "Anouk van Dijk", "aantal": 2, "datumBesteld": "2025-05-18", "status": "Verzonden" },
  { "id": "62", "productId": "58", "klant": "Kevin Smit", "aantal": 1, "datumBesteld": "2025-05-19", "status": "In behandeling" },
  { "id": "63", "productId": "59", "klant": "Lotte de Graaf", "aantal": 3, "datumBesteld": "2025-05-20", "status": "Verzonden" },
  { "id": "64", "productId": "60", "klant": "Rick de Wit", "aantal": 1, "datumBesteld": "2025-05-21", "status": "In behandeling" },
  { "id": "65", "productId": "61", "klant": "Sanne van Dijk", "aantal": 2, "datumBesteld": "2025-05-22", "status": "Verzonden" },
  { "id": "66", "productId": "62", "klant": "Tom de Boer", "aantal": 1, "datumBesteld": "2025-05-23", "status": "In behandeling" },
  { "id": "67", "productId": "63", "klant": "Emma Vermeer", "aantal": 3, "datumBesteld": "2025-05-24", "status": "Verzonden" },
  { "id": "68", "productId": "64", "klant": "Pieter de Vos", "aantal": 1, "datumBesteld": "2025-05-25", "status": "In behandeling" },
  { "id": "69", "productId": "65", "klant": "Anouk Jansen", "aantal": 2, "datumBesteld": "2025-05-26", "status": "Verzonden" },
  { "id": "70", "productId": "1", "klant": "Pierre Maas", "aantal": 1, "datumBesteld": "2025-07-22", "status": "Verzonden" },
  { "id": "71", "productId": "1", "klant": "Chantal Janssen", "aantal": 2, "datumBesteld": "2025-04-13", "status": "Verzonden" },
  { "id": "72", "productId": "1", "klant": "Dionne Stax", "aantal": 1, "datumBesteld": "2025-11-02", "status": "Verzonden" },
  { "id": "73", "productId": "1", "klant": "Patrick Heubels", "aantal": 1, "datumBesteld": "2025-08-24", "status": "Verzonden" },
  { "id": "74", "productId": "1", "klant": "Jannke van Lierop", "aantal": 2, "datumBesteld": "2025-05-03", "status": "Verzonden" },
];


export interface ProductGetModel {
  id: string;
  product: string;
  categorie: "Meubels" | "Huishouden" | "Elektronica" | "Kleding" | "Sport" | "Boeken";
  status: "Pre-order" | "Op voorraad" | "Uitverkocht";
  merk: string;
  prijs: number;
  beschikbaarVanaf: Date;
}

export interface OrderGetModel {
  id: string;
  productId: string;
  klant: string;
  aantal: number;
  datumBesteld: Date;
  status: "Verzonden" | "In behandeling" | "Bezorgd" | "Geannuleerd";
}


export const getProductsQuery = () => {
  return {
    queryKey: ["Products"],
    queryFn: async () => {
      const resp = {
        products,
        status: 200,
        statusText: 'Ok'
      };

      if (resp.status === 404) {
        throw new NotFoundError();
      }

      if (resp.status >= 400) {
        throw new Response("", {
          status: resp.status,
          statusText: resp.statusText,
        });
      }

      return resp.products.map(product => ({
        id: product.id,
        product: product.naam,
        categorie: product.categorie as ProductGetModel["categorie"],
        status: product.status as ProductGetModel["status"],
        merk: product.merk,
        prijs: product.prijs,
        beschikbaarVanaf: new Date(product.beschikbaarVanaf),
      })) as ProductGetModel[];
    }
  };
};

export const getOrdersQuery = () => {
  return {
    queryKey: ["Orders"],
    queryFn: async () => {
      const resp = {
        orders,
        status: 200,
        statusText: 'Ok'
      };

      if (resp.status === 404) {
        throw new NotFoundError();
      }

      if (resp.status >= 400) {
        throw new Response("", {
          status: resp.status,
          statusText: resp.statusText,
        });
      }

      return resp.orders.map(order => ({
        ...order,
        datumBesteld: new Date(order.datumBesteld),
      })) as OrderGetModel[];
    }
  };
};

export const getOrdersForProduct = (productId: string) => {
  return {
    queryKey: ["Orders", productId],
    queryFn: async () => {
      const resp = {
        orders,
        status: 200,
        statusText: 'Ok'
      };

      if (resp.status === 404) {
        throw new NotFoundError();
      }

      if (resp.status >= 400) {
        throw new Response("", {
          status: resp.status,
          statusText: resp.statusText,
        });
      }

      // Filter orders voor het specifieke product
      const productOrders = resp.orders
        .filter(order => order.productId === productId)
        .map(order => ({
          ...order,
          datumBesteld: new Date(order.datumBesteld),
        })) as OrderGetModel[];

      return productOrders;
    }
  };
};