import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import LayoutPage from './pagesCriteria/LayoutPage';

import styles from './studentProject.module.scss';

const StudentProject = () => {
    const [handle, setHandle] = useState(false);
    const [data, setData] = useState({
        name: "Облачное хранилище",
        img: "https://hameleone.ru/wp-content/uploads/6/6/5/665264c2bb2389ab5c24b560728f9216.jpeg",
        description: `sudusshdhsudhhsdhhshdushduhsudhushderetr6tert6e6gpdopgodirojgjdjgkfkgodrituifjgkfibidbdfjg
            hdushduhsudhushderetr6tert6e6gpdopgodirojgjdjgkfkgodrituifjgkfibidbdfjghdushduhsudhushde
            retr6tert6e6gpdopgodirojgjdjgkfkgodrituifjgkfibidbdfjghdushduhsudhushderetr6tert6e6gpdopgodirojgjdjgkfkgo
            drituifjgkfibidbdfjghdushduhsudhushderetr6tert6e6gpdopgodirojgjdjgkfkgodrituifjgkfibidbdfjg`,
        participants: ["dsds Dsdsd", "dsds sdsd", "dsdsd dsdsdsdsd"],
        ref: "https://youtu.be/b_g8CocJlBE"      
    });

    // useEffect(() => {
    //     const answer = Request();
    //     setData(answer);
    // }, []);

    // const Request = async () => {
    //     const res = await fetch('url');
    //     const body = await res.json();
    //     return body;
    // };

    return (
        <div className={styles.wrapper}>
            <div>
            <h2>{data.name}</h2>
                <div className={styles.passport}>
                    <div>
                        <img src={data.img} alt="Заставка проекта" width="400px" height="300px" />
                    </div>
                    <div className={styles.text}>
                        <div className={styles.description}>{data.description}</div>
                        <div className={styles.team}>{data.participants}</div>
                        <div className={styles.rat}>{data.rat}</div>
                    </div>
                </div>
            </div>
            <div>
                <div className={styles.wrapper__video} >
                    {handle ?                     
                        <Portal>
                            <Msg />
                        </Portal> 
                            : 
                        null
                    }
                    <iframe width="820" height="480" 
                        src="https://www.youtube.com/embed/JXI2CsT2ZZQ" 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                </div>
            </div>
            <div className={styles.btn__assessment}>
                <button onClick={() => setHandle(true)}>Оценить Проект</button>
            </div>
        </div>
    )
}

const Portal = ({children}) => {
    const node = document.createElement('div');
    document.querySelector('iframe').before(node);
    return ReactDOM.createPortal(children, node)
}

const Msg = () => {
    return (
        <LayoutPage />
    )
}

export default StudentProject;