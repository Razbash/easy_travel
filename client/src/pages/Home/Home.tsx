import { Title, StrongText } from '../../ui/typography/inedx';
import MainForm from '../../widgets/MainForm/MainForm';
import './home.scss';

const Home = () => {
    return(
        <section className="home">
            <Title text="Не знаете куда отправиться в отпуск?"/>
            <StrongText text="Мы поможем вам найти самые популярные и выгодные авиабилеты"/>
            <MainForm/>
        </section>
    )
}

export default Home;