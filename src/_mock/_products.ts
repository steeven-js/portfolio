import { _mock } from './_mock';

// ----------------------------------------------------------------------

const NAMES = [
  'Apple iPhone',
  'Samsung Galaxy',
  'Nike Air Max',
  'Adidas Ultraboost',
  'Sony PlayStation',
  'Microsoft Surface',
  'Tesla Model S',
  'Amazon Echo',
  'Google Pixel',
  'Bose QuietComfort',
  'Canon EOS',
  'HP Spectre',
  'LG OLED',
  'Rolex Submariner',
  'Chanel No.5',
  'Louis Vuitton Speedy',
  'Gucci Ace',
  'Ray-Ban Aviator',
  'Herschel Little America',
  'Le Creuset Dutch Oven',
  'Yeti Tumbler',
  'Patagonia Nano Puff',
  'Lululemon Align Leggings',
  'Allbirds Wool Runners',
];

const CATEGORIES = [
  'Electronics',
  'Fashion and apparel',
  'Home and garden',
  'Beauty and Personal care',
  'Health and wellness',
  'Toys and games',
  'Sports and outdoors',
  'Baby and kids',
  'Automotive and industrial',
  'Pet supplies',
  'Food and beverage',
  'Office and School supplies',
  'Jewelry and accessories',
  'Arts and crafts',
  'Books and media',
  'Travel and luggage',
  'Gifts and flowers',
  'Musical instruments',
  'Party supplies',
  'Business and Industrial supplies',
  'Tools and hardware',
  'Electronics accessories',
  'Furniture and decor',
  'Computer and software',
];

const DESCRIPTION = `
<h5>Specifications</h5>
<table>
  <tbody>
    <tr>
      <td>Category</td>
      <td>Mobile</td>
    </tr>
    <tr>
      <td>Manufacturer</td>
      <td>Apple</td>
    </tr>
    <tr>
      <td>Warranty</td>
      <td>12 Months</td>
    </tr>
    <tr>
      <td>Serial number</td>
      <td>358607726380311</td>
    </tr>
    <tr>
      <td>Ships from</td>
      <td>United States</td>
    </tr>
  </tbody>
</table>

<h5>Description</h5>
<p>Aenean viverra rhoncus pede. Etiam feugiat lorem non metus. Quisque malesuada placerat nisl.</p>
<ul>
  <li> Updated with a more matte texture, perfect for casual styling. </li>
  <li> Durable water-repellent coating. </li>
  <li> Anti-static lining. </li>
</ul>
<p>Living in today’s metropolitan world of cellular phones, mobile computers and other high-tech gadgets is not just hectic but very impersonal. We make money and then invest our time and effort in making more money.</p>
`;

// ----------------------------------------------------------------------

export const _productsTable = Array.from({ length: 12 }, (_, index) => ({
  id: _mock.id(index),
  orderId: `#011120${index + 1}`,
  item: NAMES[index],
  deliveryDate: _mock.time(index),
  price: _mock.number.price(index),
  status: ['Completed', 'To process', 'Cancelled', 'Return'][index] || 'Completed',
}));

export const _productsCarousel = Array.from({ length: 4 }, (_, index) => ({
  id: _mock.id(index),
  name: _mock.productName(index),
  caption: _mock.description(index),
  coverUrl: _mock.image.product(index),
  label: 'Opening Sale Discount 50%',
}));

export const _productsCompare = [
  'Apple iPhone 12 Pro',
  'Apple iPhone 13 Pro',
  'Apple iPhone 14 Pro',
].map((name, index) => ({
  id: _mock.id(index),
  name,
  price: _mock.number.price(index),
  coverUrl: _mock.image.product(4),
  ratingNumber: _mock.number.rating(index),
  details: (index === 0 && [
    'Super Retina XDR (OLED)',
    'Up to 29 hours video playback',
    'A14 Bionic',
    'True Tone',
    'IP68',
    '2017',
  ]) || ['Super Retina XDR (OLED)', '', 'A14 Bionic', '', 'IP68', '2017'],
}));

export const _products = Array.from({ length: 24 }, (_, index) => ({
  id: _mock.id(index),
  stock: 100,
  name: NAMES[index],
  description: DESCRIPTION,
  category: CATEGORIES[index],
  price: _mock.number.price(index),
  sold: Math.round(100 / (index + 1)),
  caption: _mock.description(index),
  coverUrl: _mock.image.product(index),
  ratingNumber: _mock.number.rating(index),
  totalReviews: _mock.number.nativeL(index),
  label: ['sale', 'new', 'sale', 'sale'][index] || '',
  priceSale:
    [
      _mock.number.price(1),
      _mock.number.price(2),
      _mock.number.price(3),
      _mock.number.price(4),
      _mock.number.price(5),
    ][index] || 0,
  images: [
    _mock.image.product(1),
    _mock.image.product(2),
    _mock.image.product(3),
    _mock.image.product(4),
    _mock.image.product(5),
    _mock.image.product(6),
    _mock.image.product(7),
    _mock.image.product(8),
  ],
}));
