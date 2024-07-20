import React, { useRef } from "react";

const SearchForm = () => {
  const heroSearchFormDateInput = useRef();
  const heroSearchFormBudgetInput = useRef();
  // const heroSearchFormProfileInput = useRef();

  const handleHeroSearchForm = (elem) => {
    elem.current.classList.remove("-none");
    elem.current.showPicker();
  };

  return (
    <form
      action="/"
      className="bg-glass rounded-pill px-2 py-2 ps-3 d-flex justify-content-center align-items-center mt-5 text-white "
      id="hero-search-form"
      style={{ width: "fit-content" }}
    >
      {/* //item-1  */}
      <input
        type="color"
        name="budget"
        id=""
        className="h-0 w-0 border-0"
        ref={heroSearchFormBudgetInput}
      />
      <div
        className="item"
        onClick={() => handleHeroSearchForm(heroSearchFormBudgetInput)}
      >
        <i className="bi bi-calendar3"></i>
        <span className="ms-2 me-3">Budget</span>
        <i className="bi bi-caret-down-fill"></i>
      </div>
      {/* //item-2 */}
      {/* <input
        type="date"
        name="profile"
        id=""
        className="h-0 w-0 border-0"
        ref={heroSearchFormProfileInput}
      />
      <div
        className="item"
        onClick={() => handleHeroSearchForm(heroSearchFormProfileInput)}
      >
        <i className="bi bi-calendar3"></i>
        <span className="ms-2 me-3">Profile</span>
        <i className="bi bi-caret-down-fill"></i>
      </div> */}
      {/* //item-3 */}
      <input
        type="date"
        name="date"
        id=""
        className="h-0 w-0 border-0"
        ref={heroSearchFormDateInput}
      />
      <div
        className="item"
        onClick={() => handleHeroSearchForm(heroSearchFormDateInput)}
      >
        <i className="bi bi-calendar3"></i>
        <span className="ms-2 me-3">Date</span>
        <i className="bi bi-caret-down-fill"></i>
      </div>

      <input type="submit" className="sit_btn " value="Search" />
    </form>
  );
};

export default SearchForm;
