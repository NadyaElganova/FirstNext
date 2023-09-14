import React from 'react';
import FormInput from './formInput'
import List from './List'

const tempDoList = [
    {
      id:1,
      text:"Сходить за покупками",
      done: false,
    },
    {
      id:2,
      text:"Пойти в спортзал",
      done: false,
    }
  ];
  
  export default function ToDoList(){
      const [list, setList] = React.useState(tempDoList);
      const [value, setValue] = React.useState('-Введите новое дело-');
      //удалить все
      const handlerDeleteDone = () => {
          setList((prevlist)=>prevlist.filter((element)=>!element.done));
      }
      //cheked
      const handlerOnChecked= (id)=>{
          setList((prevlist)=>{
              let element = prevlist.find((elem)=>elem.id==id);      
              element.done = !element.done;  
              const index = prevlist.indexOf(element);
              prevlist[index] = element;
              return prevlist;
          })
      }
      //удалить дело из списка
      const handlerDeleteDoList = (id) => {
          setList((prevlist)=>prevlist.filter((element)=>element.id!=id));
      };
      //добавить дело в список
      const handlerAddDoList = () =>{
          if(!value.length){
              alert("Заполните поле!");
              return;
          }
          const newItem = {
              id: list.length?list[list.length-1].id+1:1, 
              text: value, 
              done: false
          };
          setList((prevList)=>[...prevList, newItem]);
      };
      //сохранение состояния value
      const handlerValue = (textInput) => {  
          setValue(textInput)
      }
  
      return <>
          <FormInput list={list} value={value} add={handlerAddDoList} update={handlerValue}/>
          <List list={list} deleteDoList={handlerDeleteDoList} onChecked={handlerOnChecked} deleteDone={handlerDeleteDone}/>
      </>
}
