import "./card.css";
export const Cards = (props: {
    title: string;
    subtitle: string;
    placeholder1: string;
    placeholder2: boolean;
}) => {
    return (
        <div className="card">
            <div className="container">
                <div className="containerUser">
                    <h4>
                        <b>{props.title}</b>
                    </h4>
                    <img src={props.placeholder1} alt="nopic" />
                </div>
                <h5>{props.placeholder2 && "disponibile"}</h5>
                <p>{props.subtitle}</p>
            </div>
        </div>
    );
};
