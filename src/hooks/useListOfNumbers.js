import { useEffect, useState } from "react";

export function useListOfNumbers() {
  const [numbers, setNumbers] = useState([]);

  useEffect(function () {
    const aux = [];
    for (var i = 1; i <= 100; i++) {
      if (i % 2 === 0 && i % 5 === 0) {
        aux.push(i + " buzz bazz");
      } else if (i % 2 === 0) {
        aux.push(i + " buzz");
      } else if(i % 5 === 0){
        aux.push(i + "bazz");
      }else {
        aux.push(i)
      }
    }
    setNumbers(aux);
  }, []);

  return numbers;
}
