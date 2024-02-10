import { ChangeEvent, useState } from "react";
import "./App.css";

const countries: string[] = ["India", "USA", "France"];

function App() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);

  const selectCountry = (country: string) => {
    setSelectedCountries([...selectedCountries, country]);
  };

  const deselectCountry = (country: string) => {
    setSelectedCountries(selectedCountries.filter((item) => item !== country));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      selectCountry(event.target.id);
    } else {
      deselectCountry(event.target.id);
    }
  };

  const handleAllChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedCountries(countries);
    } else {
      setSelectedCountries([]);
    }
  };

  const isChecked = (id: string): boolean => {
    if (id === "All") {
      return selectedCountries.length === countries.length;
    }
    return selectedCountries.includes(id);
  };

  return (
    <div className="container">
      <div>
        <input
          type="checkbox"
          id="All"
          onChange={handleAllChange}
          checked={isChecked("All")}
        />
        <label htmlFor="All">Select All</label>
      </div>
      {countries.map((item) => {
        return (
          <div key={item}>
            <input
              type="checkbox"
              id={item}
              onChange={handleChange}
              checked={isChecked(item)}
            />
            <label htmlFor={item}>{item}</label>
          </div>
        );
      })}
    </div>
  );
}

export default App;
