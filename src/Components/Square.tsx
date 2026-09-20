type SquareProps = {
    value: string;
    onClick: () => void;
};

const Square = ({ value, onClick }: SquareProps) => {
    return (
        <div
            onClick={onClick}
            style={{
                backgroundColor: "#fff",
                border: "solid 1px black",
                padding: "2px",
                margin: "0.5px",
                minWidth: "30px",
                minHeight: "30px",
                cursor: "pointer",
            }}
        >
            <span style={{color:'black'}}>{value}</span>
        </div>
    );
};

export default Square;