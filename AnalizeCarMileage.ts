type Car = {
  make: string;
  model: string;
  year: number;
  mileage: number;
};

type MileageStats = {
  averageMileage: number;
  highestMileage: number;
  lowestMileage: number;
  totalMileage: number;
};

const cars: Car[] = [
	{make: 'Toyota', model: 'Camry', year: 2020, mileage: 30800 },
  { make: 'Honda', model: 'Civic', year: 2018, mileage: 45200 },
  { make: 'Ford', model: 'Mustang', year: 2022, mileage: 12000 },
  { make: 'Chevrolet', model: 'Malibu', year: 2019, mileage: 36500 },
  { make: 'Tesla', model: 'Model 3', year: 2021, mileage: 18700 },
  { make: 'Nissan', model: 'Altima', year: 2017, mileage: 54000 }
]

function AnalizeCarMileage(cars): MileageStats {
  if(cars.length >100){
    return 'Number of allowed cars to analyze is less is greater than the constraints'
    }
  
	const mileage = {
  	averageMileage: 0,
    highestMileage: 0,
    lowestMileage: cars[0].mileage,
    totalMileage: 0
  }
  
  mileage.totalMileage = cars.reduce((count, car) => {
    mileage.highestMileage = mileage.highestMileage < car.mileage ? mileage.highestMileage = car.mileage : mileage.highestMileage
    mileage.lowestMileage = mileage.lowestMileage > car.mileage ? mileage.lowestMileage = car.mileage : mileage.lowestMileage
    return parseFloat( ((count + car.mileage, 2)).toFixed(2));
  }, 0)
  
  mileage.averageMileage = parseFloat( (mileage.totalMileage / cars.length).toFixed(2)) //constraints: 2 decimal place
  
  return mileage
}

console.log(AnalizeCarMileage(cars))

// SOLUTION 2

function analyzeCarMileage(cars: Car[]): MileageStats {
  if (cars.length === 0) {
    return {
      averageMileage: 0,
      highestMileage: 0,
      lowestMileage: 0,
      totalMileage: 0,
    };
  }

  const totalMileage = cars.reduce((sum, car) => sum + car.mileage, 0);
  const highestMileage = Math.max(...cars.map(car => car.mileage));
  const lowestMileage = Math.min(...cars.map(car => car.mileage));
  const averageMileage = totalMileage / cars.length;

  return {
    averageMileage,
    highestMileage,
    lowestMileage,
    totalMileage,
  };
}
