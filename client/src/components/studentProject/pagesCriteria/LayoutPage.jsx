import { useState, useEffect } from 'react';

import TitlePage from '../pagesCriteria/TitlePage';
import CriteriaPage from '../pagesCriteria/CriteriaPage';

import styles from '../studentProject.module.scss';


const LayoutPage = () => {
    const [value, setValue] = useState([
        ["", ""],
        ["", ""],
        ["", "", ""]
    ]);

    const [disable, setDisable] = useState(0);

    const firstStep = disable === 0;
    // console.log(value);

    const handleValue = (e, id, stepPage) => {
        const newArr = [
            ["", ""],
            ["", ""],
            ["", "", ""]
        ];

        for (let i = 0; i < newArr.length; i++) {
            for (let j = 0; j < newArr[i].length; j++) {
                newArr[i][j] = value[i][j];
            }
        }

        id = id - 1;
        stepPage = stepPage - 1;
        // console.log(id, stepPage);
        newArr[stepPage][id] = e.target.value;

        setValue(newArr);
    };

    const handlePage = (step) => {
        setDisable(disable => disable + step);
    };

    const Request = async () => {
        // id присылает Ильюха
        const ratMark = {id: 1, rat: [0, 0, 0], count: 0, sum: 0};

        const sum = [[0, 0], [0, 0], [0, 0]];

        for (let i = 0; i < value.length; i++) {
            for (let j = 0; j < value[i].length; j++) {
                sum[i][0] = sum[i][0] + Number(value[i][j]); 
            }
            sum[i][1] = value[i].length;
        }

        sum.map((item, i) => {
            sum[i] = sum[i][0] / sum[i][1];
        });

        ratMark.rat = sum;
        ratMark.rat.forEach(item => {
            ratMark.sum = ratMark.sum + item;
        });

        ratMark.count = ratMark.count + 1;

        // const res = await fetch('url', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json;charset=utf-8'
        //     },
        //     body: JSON.stringify(ratMark)
        // });

        // const answer = await res.json();

        // console.log(answer);
        console.log(ratMark);
    };

    return (
        <div className={styles.assessment}>
            {disable === 0 ? <TitlePage /> : null}
            {disable > 0 && disable < 4 ? <CriteriaPage value={value} handleValue={(e, id, stepPage) => handleValue(e, id, stepPage)} disable={disable}/> : null}
            <div className={styles.nav__btn}>
                <button disabled={firstStep} onClick={() => handlePage(-1)}>Назад</button>
                {disable === 3
                ?
                    <button onClick={Request}>Отправить оценку</button>
                :
                    <button onClick={() => handlePage(1)}>Вперед</button>
                }
            </div>
        </div>
    )
}

export default LayoutPage;