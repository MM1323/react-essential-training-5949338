import "./App.css";

function Header({ name, year }) {
    return (
        <header>
            <h1>{name}'s App </h1>
            <p> Copyright {year}</p>
        </header>
    );
}

const items = ["React", "React Router", "React Query", "React Testing Library"];

const itemsObject = items.map((item, i) => ({ id: i, name: item }));

function Main({ components }) {
    return (
        <main>
            <h2> The Best App in the World!</h2>
            <p> Where dreams come to life!</p>
            <ul>
                {components.map((component) => (
                    <li key={component.id} style={{ listStyleType: "none" }}>
                        {component.name}
                    </li>
                ))}
            </ul>
        </main>
    );
}

function App() {
    return (
        <div>
            <Header name="Sam" year={new Date().getFullYear()} />
            <Main components={itemsObject} />
        </div>
    );
}

export default App;
