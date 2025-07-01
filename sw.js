const CACHE_NAME = 'crypto-news-v1';
const urlsToCache = [
  '',
  'staticjsbundle.js',
  'staticcssmain.css',
  'manifest.json'
];

 Install SW
self.addEventListener('install', (event) = {
  event