import type { Component } from 'solid-js';
import PostC from '@/components/PostC/PostC';

interface Data {
    title: string,
    residence: string,
    hour: string,
    message: string,
    color: string,
}
const Home: Component = () => {
    const json: Data[] = [
        {
            title: "administracion",
            residence: "veramonte living",
            hour: "12h",
            message: "#DENUNCIA Una joven denuncia el exceso de ruido que generan los ciudadanos extranjeros enfarrados con lo que parecen ser menores de edad. Segun afirma el momento fue registrado siendo las 6:30am de este martes 17 de diciembre pero no informa en que sector se presento el inconveniente",
            color: "var(--package-color)"
        },
        {
            title: "porteria",
            residence: "conejera",
            hour: "12h",
            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis hac, volutpat porta blandit facilisis arcu purus venenatis molestie tellus, habitant quisque habitasse nibh",
            color: "var(--mail-color)"
        },
        {
            title: "administracion",
            residence: "veramonte living",
            hour: "12h",
            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis hac, volutpat porta blandit facilisis arcu purus venenatis molestie tellus, habitant quisque habitasse nibh",
            color: "var(--package-color)"
        },
        {
            title: "administracion",
            residence: "veramonte living",
            hour: "12h",
            message: "Lorem ipsum dolor sit amet consectetur adipiscing elit sagittis hac, volutpat porta blandit facilisis arcu purus venenatis molestie tellus, habitant quisque habitasse nibh",
            color: "var(--package-color)"
        },
    ]
    return (
        <div style="margin-bottom:3.5rem;margin-top:5rem">
        {
            json.map(item => (
                <PostC data={item}/> )
            )
        }
        </div>
    );
};

export default Home;
