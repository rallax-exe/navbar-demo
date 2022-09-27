
import '../css/componentes.css';
import webpacklogo from '../assets/img/webpack-logo.png';


export const navbar = (  ) => {

    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.querySelector('.navigation');

    menuToggle.onClick = () => {
        navigation.classList.toggle('open');
    }

    const listItems = document.querySelectorAll('.list-item');
    listItems.forEach(item => {
        item.onClick = () => {
            listItems.forEach(item => item.classList.remove('active'));
            item.classList.add('active');
        }
    })

}