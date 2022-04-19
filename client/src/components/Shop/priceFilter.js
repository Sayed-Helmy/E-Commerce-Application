import React, { useCallback, useEffect, useState, useRef } from "react";
import classnames from "classnames";
import "./priceFilter.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { productsActions } from "../../store/productsSlice";

const PriceFilter = ({ min, max, categories }) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(null);
  const maxValRef = useRef(null);
  const range = useRef(null);
  const dispatch = useDispatch();

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value); // Preceding with '+' converts the value from type string to type number

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  const priceHandler = async (e) => {
    let url = `http://localhost:5000/api/v1/products`;
    e.preventDefault();
    if (categories.length > 0)
      url = `http://localhost:5000/api/v1/products?category=${categories.join(
        ","
      )}&price=${minVal},${maxVal}`;
    const result = await axios.get(url, {
      withCredentials: true,
    });
    dispatch(productsActions.setFiltered(result.data));
  };

  return (
    <form onSubmit={priceHandler}>
      <h3 className="my-10 font-medium text-gray-900">Price</h3>
      <div className="container_price_filter">
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          ref={minValRef}
          onChange={(event) => {
            const value = Math.min(+event.target.value, maxVal - 1);
            setMinVal(value);
            event.target.value = value.toString();
          }}
          className={classnames("thumb thumb--zindex-3", {
            "thumb--zindex-5": minVal > max - 100,
          })}
        />
        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          ref={maxValRef}
          onChange={(event) => {
            const value = Math.max(+event.target.value, minVal + 1);
            setMaxVal(value);
            event.target.value = value.toString();
          }}
          className="thumb thumb--zindex-4"
        />
        <div className="slider">
          <div className="slider__track" />
          <div ref={range} className="slider__range" />
          <div className="slider__left-value">{minVal}</div>
          <div className="slider__right-value">{maxVal}</div>
        </div>
      </div>
      <button
        type="submit"
        className="mx-auto mt-16 block rounded-md bg-black px-8 text-white"
      >
        Filter
      </button>
    </form>
  );
};

export default PriceFilter;
