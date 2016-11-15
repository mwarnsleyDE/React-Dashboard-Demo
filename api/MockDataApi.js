const initialData = [
  {id: 1, country: "USA", population: "320,000,000", states: "50", language: "English"},
  {id: 2, country: "China", population: "2,320,000,000", states: "450", language: "Chinese"},
  {id: 3, country: "Japan", population: "2,657,849,000", states: "254", language: "Japanese"},
  {id: 4, country: "Mexico", population: "75,857,000", states: "78", language: "Spanish"},
  {id: 5, country: "Germany", population: "125,467,000", states: "546", language: "German"},
  {id: 6, country: "Fiji", population: "15,000,000", states: "45", language: "Fiji Hindi"},
  {id: 7, country: "Afghanistan", population: "25,999,000", states: "50", language: "Pashto"},
  {id: 8, country: "India", population: "620,164,000", states: "450", language: "Indian"},
  {id: 9, country: "Russia", population: "437,869,000", states: "254", language: "Russian"},
  {id: 10, country: "Brazil", population: "320,000,000", states: "50", language: "English"},
  {id: 11, country: "Denmark", population: "2,320,000,000", states: "450", language: "Chinese"},
  {id: 12, country: "Haiti", population: "320,000,000", states: "254", language: "Japanese"},
  {id: 13, country: "Ecuador", population: "320,000,000", states: "78", language: "Spanish"},
  {id: 14, country: "Finland", population: "320,000,000", states: "546", language: "German"},
  {id: 15, country: "Dominica", population: "320,000,000", states: "45", language: "Fiji Hindi"},
  {id: 16, country: "El Salvador", population: "320,000,000", states: "50", language: "Pashto"},
  {id: 17, country: "Djibouti", population: "2,320,000,000", states: "450", language: "Indian"},
  {id: 18, country: "Gambia", population: "320,000,000", states: "254", language: "Russian"},
];

const changeData = [
  {id: 1, country: "STAR", population: "320,000,000", states: "50", language: "English"},
  {id: 2, country: "STAR", population: "2,320,000,000", states: "450", language: "Chinese"},
  {id: 3, country: "STAR", population: "2,657,849,000", states: "254", language: "Japanese"},
  {id: 4, country: "STAR", population: "75,857,000", states: "78", language: "Spanish"},
  {id: 5, country: "STAR", population: "125,467,000", states: "546", language: "German"},
  {id: 6, country: "STAR", population: "15,000,000", states: "45", language: "Fiji Hindi"},
  {id: 7, country: "STAR", population: "25,999,000", states: "50", language: "Pashto"},
  {id: 8, country: "STAR", population: "620,164,000", states: "450", language: "Indian"},
];

class DataApi {
  static getAllData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], initialData));
      });
    });
  }
  static updateAllData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], changeData));
      });
    });
  }
}

export default DataApi;
