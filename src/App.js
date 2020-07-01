import React from 'react';
import Layout from "./hoc/Layout"
import Header from "./containers/Header"
import Menu from "./containers/Menu"
import Main from "./containers/Main";
import LowerNav from './containers/LowersNav';
class App extends React.Component{
  state = {
    imageUrl: "https://constructor.fulogy.com/images/kitchens/Angular/overhead/",
    images: ["warm", "day", "cold"],
    showMenu: false,
    menuLinks: [
      "Обучающее видео",
      "Оформление заказа",
      "Оплата",
      "Доставка",
      "Гарантия",
      "Возврат",
      "Контакты",
      "Партнёрам",
    ],
    info: {
      Класс: "Standard",
      "Потребяемая мощность": "3459 Люмен = 7.5 ламп накаливания по 40 Вт.",
      Гарантия: 3,
      Монтаж: true,
      "Итого Сумма": 3214
    },
    lowerNav: [
      "Вариант куни",
      "Размеры",
      "Сенсор",
      "Питающий кабель",
      "Блок питания",
      "Цвет Свечения",
      "Монтаж",
      "Корзина",
    ]
  }

  showMenuToggle = () => this.setState({showMenu: !this.state.showMenu})
  render(){
    return (
      <Layout>
        <Header toggle={this.showMenuToggle} showMenu={this.state.showMenu}/>
        <Menu showMenu={this.state.showMenu} menu={this.state.menu} links={this.state.menuLinks}/>
        <Main url={this.state.imageUrl} images={this.state.images}  info={this.state.info}/>
        <LowerNav nav={this.state.lowerNav}/>
      </Layout>
    )
  }
}

export default App;
