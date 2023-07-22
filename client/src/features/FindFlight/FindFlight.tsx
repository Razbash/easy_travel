import { useState } from "react";
import Input from "../../ui/searchFormElements/Input/Input";
import Button from "../../ui/searchFormElements/LinkButton/LinkButton";
import './findFlight.scss';

const FindFlight = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [when, setWhen] = useState("");
    const [back, setBack] = useState("");
    const [countPassengers, setCountPassengers] = useState("");

    return(
        <div className="find-flight-form">
            <Input id="where_from"
                label="Откуда"
                value={from}
                onChange={(e: any) => setFrom(e.target.value)}
            />

            <Input id="where_to"
                label="Куда"
                value={to}
                onChange={(e: any) => setTo(e.target.value)}
            />

            <Input id="when"
                label="Когда"
                value={when}
                onChange={(e: any) => setWhen(e.target.value)}
            />

            <Input id="back"
                label="Обратно"
                value={back}
                onChange={(e: any) => setBack(e.target.value)}
            />

            <Input id="count_passengers"
                label="Пассажиры"
                value={countPassengers}
                onChange={(e: any) => setCountPassengers(e.target.value)}
            />

            Кнопка
            {/* <Button text="Найти билеты"/> */}
        </div>
    )
}

export default FindFlight;