
import { Component } from 'react';
import FilmeCard from '../filmecard/filmecard';

export default class FilmesEmCartaz extends Component {

    constructor(props) {
        super(props);
        this.filmeLista = [{
            "adult": false,
            "backdrop_path": "/lNyLSOKMMeUPr1RsL4KcRuIXwHt.jpg",
            "genre_ids": [878, 28],
            "id": 580489,
            "original_language": "en",
            "original_title": "Venom: Let There Be Carnage",
            "overview": "After finding a host body in investigative reporter Eddie Brock, the alien symbiote must face a new enemy, Carnage, the alter ego of serial killer Cletus Kasady.",
            "popularity": 7339.989,
            "poster_path": "/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg",
            "release_date": "2021-09-30",
            "title": "Venom: Let There Be Carnage",
            "video": false,
            "vote_average": 7,
            "vote_count": 882
        }, {
            "adult": false,
            "backdrop_path": "/2cdrhlf3hvvueGyQDx0u8jpWvQR.jpg",
            "genre_ids": [27, 53],
            "id": 610253,
            "original_language": "en",
            "original_title": "Halloween Kills",
            "overview": "Minutes after Laurie Strode, her daughter Karen and granddaughter Allyson left masked monster Michael Myers caged and burning in Laurie's basement, Laurie is rushed to the hospital with life-threatening injuries, believing she finally killed her lifelong tormentor. But when Michael manages to free himself from Laurie's trap, his ritual bloodbath resumes. As Laurie fights her pain and prepares to defend herself against him, she inspires all of Haddonfield to rise up against their unstoppable monster. The Strode women join a group of other survivors of Michael's first rampage who decide to take matters into their own hands, forming a vigilante mob that sets out to hunt Michael down, once and for all.",
            "popularity": 3691.799,
            "poster_path": "/qmJGd5IfURq8iPQ9KF3les47vFS.jpg",
            "release_date": "2021-10-14",
            "title": "Halloween Kills",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 500
        }, {
            "adult": false,
            "backdrop_path": "/8Y43POKjjKDGI9MH89NW0NAzzp8.jpg",
            "genre_ids": [35, 28, 12, 878],
            "id": 550988,
            "original_language": "en",
            "original_title": "Free Guy",
            "overview": "A bank teller called Guy realizes he is a background character in an open world video game called Free City that will soon go offline.",
            "popularity": 3278.457,
            "poster_path": "/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg",
            "release_date": "2021-08-11",
            "title": "Free Guy",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 2955
        }]
    }

    render() {
        return (
            <section>
                {
                    this.filmeLista.map(function (filme) {
                        return <FilmeCard filme={filme} />
                    })
                }
            </section>
        )
    }


}