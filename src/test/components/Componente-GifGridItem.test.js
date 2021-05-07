import React from "react";
import { shallow } from "enzyme";
import {GifGridItem}  from "../../components/Dummies/GifGridItem";

describe("Pruebas en el Componente GifGriditem", () => {
  const title= "algo";
  const url ="https://localhost/algo";
  const wrapper = shallow(<GifGridItem title={title} url={url}></GifGridItem>);
  
  test("Debe mostrar el componente correctamente", () => {  
    expect(wrapper).toMatchSnapshot();
  });

  test('debe tener un parrafo con el title', () => {
    const p= wrapper.find('p'); //con este metodo busco etiqueta
    expect(p.text().trim()).toBe(title);//al buscar la etiqueta p que se supone parrafo le aplico texto y trim. con eso verifico que pase texto
  })

  test('debe tener la imagen igual al url y alt de los props', () => {
    const img =wrapper.find('img'); //busco imagen en el
    expect(img.prop('src')).toBe(url); //extraigo prop de etiqueta esto es para asegurarme de que los parametros estan en los prop correcto
    expect(img.prop('alt')).toBe(title);
  })
  
// con esto pruebo que una etiqueta tenga un clase correctamente.
  test('debe de tener un animate_fadeIn', () => {
    const div=wrapper.find('div');
    const className= div.prop('className');
    expect(className.includes('animate__bounce')).toBe(true);
  })
  
  
  
});
