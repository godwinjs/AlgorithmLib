let idx = -1;

const arr = Array.from({ length: 100 }, (_, index, a) => {
    idx++

    const car = ['BMW', 'Toyota', 'Ferarri', 'Bugati']

    if(car[idx]){
        return { car: car[idx] }
    }else {
        idx = 0;
        return { car: car[idx] }
    }
}) // [{car: 'BMW'},{car: 'Toyota'},{car: 'Ferarri'},{car: 'Bugati'},{car: 'BMW'},{car: 'Toyota'},{car: 'Ferarri'},{car: 'Bugati'}...]
