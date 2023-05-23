/*
  title: Location.js . 
  desc: For Add all card about location infos . 
  date: 20 - 5 - 2023. 
*/
import "../css/location.css";
import { Data, Data2, Data3 } from "../data/file";
import Item from "../components/ItemOfLocation";
export default function Location() {
  return (
    <div className="app">
      <div className="textCenter">
        <h2>Catch All Locations... touch on it !</h2>
      </div>

      <div className="row">
        {Data.map((item) => {
          return (
            <>
              <Item
                imageTo_Url={item.imageTo_Url}
                location={item.location}
                LocationPlace={item.value}
              />
            </>
          );
        })}
      </div>

      <div className="row">
        {Data2.map((item) => {
          return (
            <>
              <Item
                imageTo_Url={item.imageTo_Url}
                location={item.location}
                LocationPlace={item.value}
              />
            </>
          );
        })}
      </div>
      <div className="row">
        {Data3.map((item) => {
          return (
            <>
              <Item
                imageTo_Url={item.imageTo_Url}
                location={item.location}
                LocationPlace={item.value}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
