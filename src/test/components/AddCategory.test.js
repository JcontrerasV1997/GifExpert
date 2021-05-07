import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/Dummies/AddCategory";
import '@testing-library/jest-dom';

describe("Pruebas en componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper =shallow(<AddCategory setCategories={setCategories}></AddCategory>)

  beforeEach(() =>{
      jest.clearAllMocks();
      wrapper=shallow(<AddCategory setCategories={setCategories}></AddCategory>)
  })

  test("debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar la caja de texto ", () => {
    const input = wrapper.find("input");
    const value = "hola amigos";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("no debe de postear onsubmit", () => {
    wrapper.find("form").simulate("submit", {preventDefault() {}});
    expect(setCategories).not.toHaveBeenCalled();
  });
});
