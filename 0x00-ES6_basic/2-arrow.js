export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Arrow functions don't have their own `this`, so `self` isn't needed
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);
    return this.sanFranciscoNeighborhoods;
  };
}
