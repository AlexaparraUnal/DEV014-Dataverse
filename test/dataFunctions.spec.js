import { sortData, filterData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


console.log(fakeData);

describe('filterData', () => {

  it('filtro por especie', () => {

    expect(filterData(fakeData, "especie", "Humano")).toEqual([{

      "facts": {
        "especie": "Humano",
      },
    }]);

  });
});
describe('sortData', () => {
  it('ordenar de manera accendente', () => {
    expect(sortData(fakeData, "name", "asc")).toEqual([
      {
        "name": "Finn el Humano",
        "facts": {
          "especie": "Humano"
        },
      },
      {
        "name": "Pan de Canela",
        "facts": {
          "especie": "Entidad mágica"
        }
      }
    ]);
  });
});
