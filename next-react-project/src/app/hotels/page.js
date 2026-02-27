import Image from "next/image";

async function getData() {
    const res = await fetch("https://snowtooth-api-rest.fly.dev");
    return res.json();
}

function HotelBlock({ id, name, capacity }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Capacity: {capacity}</p>
            <Image src={id} width={300} height={300} />
        </div>
    );
}

export default async function Page() {
    const data = await getData();
    return (
        <main>
            <div>
                <h1>Hotel Name</h1>
                <div>
                    {data.map((hotel) => (
                        <HotelBlock
                            key={hotel.id}
                            name={hotel.name}
                            capacity={hotel.capacity}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}
