app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
  name: 'Bruschetta',
  description: 'Grilled bread garlic,tomatoes,olive oil.',
  price: 4.95
    }
    ];

//Add a new property called $scope.mains and fill it with at least 3 made up main courses of your choice.

$scope.mains = [
{
  name: 'Lasagna',
  description: 'served with salad and bread sticks.',
  price: 12.95
},
{
  name: 'Spaghetti',
  description: 'whole wheat sphaghetti served with our house marinera sauce made which organic ingredients.',
  price: 15.46
},
{
  name: 'Pizza Plannet Pizza',
  description:'a pizza with everything from our kitchen!! everything!! ("not your grandmother\'s home cookin\'.")',
  price: 20.95
}
];

$scope.extras = [
  {
    name: "Mashed Potatoes",
    description: "our mashed potatoes are made from the finest organic yellow potatoes imported from the mountains of Peru.",
    price: 3.00
  },
  {
    name: "salad",
    description: "Our salad is made with the finest organic ingredients.",
    price: 2.00

  },
  {
    name:"Mac & Cheese",
    description: "our delicious house Mac & Cheese is made with 4 types of cheeses made with Organic (hormone-free) milk from Free-range happy cows.",
    price:7.95
  }
];
}]);
