import Link from "next/link";
import style from './header.module.css'

const pages = [
    {href: '/', title: "Список дел"},
    {href: '/about', title: 'О нас'}
]

export default function Header(){
    return <header className={style.header}>
            <ul>
                {pages.map(({href,title})=>
                <li key={href}>
                <Link href={href}>{title}</Link>
                </li>)}
            </ul>
    </header>
}