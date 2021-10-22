
import { Component } from 'react';
import FilmeCard from '../filmecard/filmecard';

export default class FilmesProximos extends Component {

    constructor(props) {
        super(props);
        this.filmeLista = [{
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
            "backdrop_path": "/kTOheVmqSBDIRGrQLv2SiSc89os.jpg",
            "genre_ids": [16, 35, 10751],
            "id": 639721,
            "original_language": "en",
            "original_title": "The Addams Family 2",
            "overview": "The Addams get tangled up in more wacky adventures and find themselves involved in hilarious run-ins with all sorts of unsuspecting characters.",
            "popularity": 1922.643,
            "poster_path": "/xYLBgw7dHyEqmcrSk2Sq3asuSq5.jpg",
            "release_date": "2021-10-01",
            "title": "The Addams Family 2",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 338
        }, {
            "adult": false,
            "backdrop_path": "/hrzoy8vvUrxQixOM11pwW9AX7Bu.jpg",
            "genre_ids": [80, 18],
            "id": 524369,
            "original_language": "en",
            "original_title": "The Many Saints of Newark",
            "overview": "Young Anthony Soprano is growing up in one of the most tumultuous eras in Newark, N.J., history, becoming a man just as rival gangsters start to rise up and challenge the all-powerful DiMeo crime family. Caught up in the changing times is the uncle he idolizes, Dickie Moltisanti, whose influence over his nephew will help shape the impressionable teenager into the all-powerful mob boss, Tony Soprano.",
            "popularity": 1143.19,
            "poster_path": "/1UkbPQspPbq1FPbFP4VV1ELCfSN.jpg",
            "release_date": "2021-09-22",
            "title": "The Many Saints of Newark",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 135
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