
import './project.scss';
import Slider from 'infinite-react-carousel';
import { v4 as uuidv4 } from 'uuid';

export default function Project() {
    const data = [
        {
            id: '1',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://pharmeasy-website-clone.netlify.app/',
            linkGithub: 'https://github.com/Pankaj1947/Pharmeasy',
            linkBlog:
                'https://pharmeasy-website-clone.netlify.app/',
            title: 'PharmEasy',
            desc: 'PharmEasy is one of India’s leading healthcare aggregators and most trusted medicine delivery app - Android /iOS.',
            img: 'PharmEasy.png',
        },
        {
            id: '2',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAXVBMVEUAv7////8AvLy26Ojr+vqv4+Mew8Pk9fWA2dkyxcUAurq45ub3/f2y5+fw+/vW8vJZzs7L7+/D7Ox/2Nik4uJk0dGZ399CycmJ29t01dWd4eFPzMze9fW+6+tv1NQj4399AAAEAElEQVR4nO3d61LbQAwFYHuTmsY4hPsd3v8x2+lQIJa81i4EfA7n/IWm+oYZRdYuoWn503x3AV8QGTnyo4zDdsWW7TAyrvvEln49NqaGLUlGisjIERk5IiNHZOSIjByRkSMyckRGjsjIERk5IiNHZOSIjByRkSMyckRGjsjIERk5IiNHZOSIjByRkSMyckRGjsjIERk5IiNHZOSIjO/T7Sf6+vuZ/L7iV+/G2UzXEDWmo3Yvv0M/7+54P1PFd/sv3k4X/JJ1O87jtxmDtRca084Qh8x3Ixr7rSG2m+l6EI3p1hKvMuUAGtOpJd7mqgE0bixx1eeKADSeGOIuXwuc0Wmp65ki0IxeS52bGMCMXks9nasEy+i11IvZQrCMTku9zLZUQKNtqWeBMpCMvdNSI1UAGdPKEIfQIx6O0WupN6EiYIxeS72L7SxgjE5LvQ+uZWCMtqWez79rQBmdKfUxvFzDMPZOS40KQYz1LRXG6LXU3G4D0ei01OuSTTeC0bbU/G4Dz+i01JndBpzRaaknRcLlG72WOntQgGVMV5Y4u9sAMzotNbsuRjTalrotaqnLN/ZnhrgrJy7amO4NcW5djGZMz4Y4uy7+XOP8WvOjRqffPFRdVqg23toTeSfjOkuM9jg8uNv4NGNd4kan3wTWxVDG/tr82/BuA8TYOfNN9cWhhRofnH+7qkUu1Gjnm7bs2R/A6KeOiGU8q+s6UMbg4IFt/OJZ7nuM8eU4rrFs6QhqbG++0LgL/VmJ4083VtyTrjbehf4GxvhPnxQb7cNH+bJjoc/I/3PiXAJg2cu9ZOhSMmNdwakcgnGTmmTH89KHrEUb/602nM1V4bizZOPLc0Z6NF8pG3cWbHz9adnlVdmWdbnGt4kmXWS+iGx8/zaY7P6qZNxZqvF8/+WH8ddLxp2FGkcnxc4R3SX8vY5x40z2Gnl83Fmo0XzfR8YdFGNzY36QbPfl/v7/dnH+zHbvsemrxx0co/MeGhx3gIzpziBj9x+AjN5xXeiqDpKxdtyBMjqXPCPjDpSxctzBMr6W+5aBzug8Lz/NFoJmrBl30Izeld25IuCM3rgzUwqesXzcwTM2/ZNB5scdQKNzq/UoWwyi0TkeyI47iMYmXRpk7kYkpNE51M79PgSm0Rt3pp+XQY3Or31MjzugRud4YHoXiWp0npcntztx4+hNKbZKOZzROR6YOsw68GfodavYZ69V5ADnHbWVBD9D75DRZyFyREaOyMgRGTkiI0dk5IiMHJGRIzJyREaOyMgRGTkiI0dk5IiMHJGRIzJyREaOyMgRGTkiI0dk5IiMHJGRIzJyREaOyMgRGTkiI0d+pjH0GcBQ6cfG4RdfhpGRODJy5CcY/wCy8l9VoXLB9wAAAABJRU5ErkJggg==',
            linkSite: 'https://health-kart.netlify.app/',
            linkGithub: 'https://github.com/hlv-kakashi/HEALTHKART',
            linkBlog:
                'https://health-kart.netlify.app/',
            title: 'HealthKart',
            desc: 'HealthKart is your ideal platform for all nutrition, health and fitness products.',
            img: 'HealthKart.png',
        },
        {
            id: '3',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://weather-report-by-pankaj.netlify.app/',
            linkGithub: 'https://github.com/masai-course/pankaj_fw16_616/tree/master/unit-3/sprint-2/day-2/assignments/Weather%20Forcast',
            linkBlog:
                'https://weather-report-by-pankaj.netlify.app/',
            title: 'Weather Forcast',
            desc: 'Weather Forcast is developed by me in one day using openweather api',
            img: 'WeatherApp.png',
        },
        {
            id: '4',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://courageous-panda-a97c46.netlify.app/',
            linkGithub: 'https://github.com/mayur-ms-2310/Himalayausa-clone',
            linkBlog:
                'https://courageous-panda-a97c46.netlify.app/',
            title: 'Himalya USA',
            desc: 'Himalyausa.com is a leading provider of herbal and beauty products worldwide, offering ordering services through localized websites.',
            img: 'HimalayaUSA.png',
        },
        {
            id: '1',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://pharmeasy-website-clone.netlify.app/',
            linkGithub: 'https://github.com/Pankaj1947/Pharmeasy',
            linkBlog:
                'https://pharmeasy-website-clone.netlify.app/',
            title: 'PharmEasy',
            desc: 'PharmEasy is one of India’s leading healthcare aggregators and most trusted medicine delivery app - Android /iOS.',
            img: 'PharmEasy.png',
        },
        {
            id: '2',
            icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOMAAADeCAMAAAD4tEcNAAAAXVBMVEUAv7////8AvLy26Ojr+vqv4+Mew8Pk9fWA2dkyxcUAurq45ub3/f2y5+fw+/vW8vJZzs7L7+/D7Ox/2Nik4uJk0dGZ399CycmJ29t01dWd4eFPzMze9fW+6+tv1NQj4399AAAEAElEQVR4nO3d61LbQAwFYHuTmsY4hPsd3v8x2+lQIJa81i4EfA7n/IWm+oYZRdYuoWn503x3AV8QGTnyo4zDdsWW7TAyrvvEln49NqaGLUlGisjIERk5IiNHZOSIjByRkSMyckRGjsjIERk5IiNHZOSIjByRkSMyckRGjsjIERk5IiNHZOSIjByRkSMyckRGjsjIERk5IiNHZOSIjO/T7Sf6+vuZ/L7iV+/G2UzXEDWmo3Yvv0M/7+54P1PFd/sv3k4X/JJ1O87jtxmDtRca084Qh8x3Ixr7rSG2m+l6EI3p1hKvMuUAGtOpJd7mqgE0bixx1eeKADSeGOIuXwuc0Wmp65ki0IxeS52bGMCMXks9nasEy+i11IvZQrCMTku9zLZUQKNtqWeBMpCMvdNSI1UAGdPKEIfQIx6O0WupN6EiYIxeS72L7SxgjE5LvQ+uZWCMtqWez79rQBmdKfUxvFzDMPZOS40KQYz1LRXG6LXU3G4D0ei01OuSTTeC0bbU/G4Dz+i01JndBpzRaaknRcLlG72WOntQgGVMV5Y4u9sAMzotNbsuRjTalrotaqnLN/ZnhrgrJy7amO4NcW5djGZMz4Y4uy7+XOP8WvOjRqffPFRdVqg23toTeSfjOkuM9jg8uNv4NGNd4kan3wTWxVDG/tr82/BuA8TYOfNN9cWhhRofnH+7qkUu1Gjnm7bs2R/A6KeOiGU8q+s6UMbg4IFt/OJZ7nuM8eU4rrFs6QhqbG++0LgL/VmJ4083VtyTrjbehf4GxvhPnxQb7cNH+bJjoc/I/3PiXAJg2cu9ZOhSMmNdwakcgnGTmmTH89KHrEUb/602nM1V4bizZOPLc0Z6NF8pG3cWbHz9adnlVdmWdbnGt4kmXWS+iGx8/zaY7P6qZNxZqvF8/+WH8ddLxp2FGkcnxc4R3SX8vY5x40z2Gnl83Fmo0XzfR8YdFGNzY36QbPfl/v7/dnH+zHbvsemrxx0co/MeGhx3gIzpziBj9x+AjN5xXeiqDpKxdtyBMjqXPCPjDpSxctzBMr6W+5aBzug8Lz/NFoJmrBl30Izeld25IuCM3rgzUwqesXzcwTM2/ZNB5scdQKNzq/UoWwyi0TkeyI47iMYmXRpk7kYkpNE51M79PgSm0Rt3pp+XQY3Or31MjzugRud4YHoXiWp0npcntztx4+hNKbZKOZzROR6YOsw68GfodavYZ69V5ADnHbWVBD9D75DRZyFyREaOyMgRGTkiI0dk5IiMHJGRIzJyREaOyMgRGTkiI0dk5IiMHJGRIzJyREaOyMgRGTkiI0dk5IiMHJGRIzJyREaOyMgRGTkiI0d+pjH0GcBQ6cfG4RdfhpGRODJy5CcY/wCy8l9VoXLB9wAAAABJRU5ErkJggg==',
            linkSite: 'https://health-kart.netlify.app/',
            linkGithub: 'https://github.com/hlv-kakashi/HEALTHKART',
            linkBlog:
                'https://health-kart.netlify.app/',
            title: 'HealthKart',
            desc: 'HealthKart is your ideal platform for all nutrition, health and fitness products.',
            img: 'HealthKart.png',
        },
        {
            id: '3',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://weather-report-by-pankaj.netlify.app/',
            linkGithub: 'https://github.com/masai-course/pankaj_fw16_616/tree/master/unit-3/sprint-2/day-2/assignments/Weather%20Forcast',
            linkBlog:
                'https://weather-report-by-pankaj.netlify.app/',
            title: 'Weather Forcast',
            desc: 'Weather Forcast is developed by me in one day using openweather api',
            img: 'WeatherApp.png',
        },
        {
            id: '4',
            icon: 'data:image/png;base64,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',
            linkSite: 'https://courageous-panda-a97c46.netlify.app/',
            linkGithub: 'https://github.com/mayur-ms-2310/Himalayausa-clone',
            linkBlog:
                'https://courageous-panda-a97c46.netlify.app/',
            title: 'Himalya USA',
            desc: 'Himalyausa.com is a leading provider of herbal and beauty products worldwide, offering ordering services through localized websites.',
            img: 'HimalayaUSA.png',
        }
    ];

    return (
        <div className="Project" id="Project">
            <br />

            <h1>My Projects</h1>
            <hr
                style={{
                    width: 180,
                    marginTop: '-18px',
                    height: 4,
                    backgroundColor: '#18d26e',
                    border: 'none',
                }}
            />
            <br />
            <Slider
                autoplay={true}
                slidesToShow={2}
                centerMode={true}
                autoplayScroll={1}
                centerPadding={-60}
                arrows={true}
            >
                {data.map((d) => (
                    <div key={uuidv4()} className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2 style={{ color: 'crimson' }}>
                                        {d.title}
                                    </h2>
                                    <p>{d.desc}</p>
                                    <div className="button">
                                        <a
                                            href={d.linkBlog}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button>Website</button>
                                        </a>
                                        <a
                                            href={d.linkGithub}
                                            target="blank"
                                            style={{
                                                textDecoration: 'none',
                                                color: 'white',
                                            }}
                                        >
                                            <button style={{ marginLeft: 10 }}>
                                                Github
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <a href={d.linkSite} target="blank">
                                    <div>
                                        <img src={d.img} alt="" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
