let year = 2008;
let champion = null;
let message = null;

switch (year) {
    case 2017:
      champion = 'Pittsburgh Penguins';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2016:
      champion = 'Pittsburgh Penguins';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2015:
      champion = 'Chicago Blackhawks';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2014:
      champion = 'Los Angeles Kings';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2013:
      champion = 'Chicago Blackhawks';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2012:
      champion = 'Los Angeles Kings';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2011:
      champion = 'Boston Bruins';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2010:
      champion = 'Chicago Blackhawks';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2009:
      champion = 'Pittsburgh Penguins';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2008:
      champion = 'Detroit Red Wings';
      monthDays = '31 days';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2007:
      champion = 'Anaheim Ducks';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    case 2006:
      champion = 'Carolina Hurricanes';
      message = `${champion} was the ${year} NHL Champion`;
      break;
    default:
       message = 'Error: Please input a year from 2006 to 2017';
  }
  
  console.log(message);