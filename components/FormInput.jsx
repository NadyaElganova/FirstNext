import style from './FormInput.module.css';

export default function FormInput({value, update, add}){
    return <>
    <fieldset className={style.fieldset} >
     <legend>Введите дело</legend>
     <input className={style.text} placeholder={value} onInput={evt=>update(evt.target.value)}/>
     <button className={style.add} onClick={()=>add()}>Добавить</button>
   </fieldset>
   </>;
}