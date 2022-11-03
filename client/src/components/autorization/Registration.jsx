import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hook/useAuth';

import styles from  './register.module.scss';

const Registration = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {sign} = useAuth();

    const fromPage = location.state?.from?.pathname || '/';

    const [value, setValue] = useState({
        userName: '',
        email: '',
        password: ''
    });

    const sendForm = async () => {
        console.log(value);
        sign(value, () => navigate(fromPage, {replace: true}), 'register');
    };

    const handleValue = e => {
        setValue(() => ({
            ...value,
            [e.target.name]: e.target.value
        }))
    };

    const { userName, email, password } = value;
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.authorization}>
                <h2>Зарегистрируйся на сайте!</h2>
                <input type="text" name="userName" value={userName} placeholder="Логин" onChange={handleValue} />
                <input type="text" name="email" value={email} placeholder="Почта" onChange={handleValue} />
                <input type="password" name="password" value={password} placeholder="Пароль" onChange={handleValue} />
                <div className={styles.link}><Link to="/login">Авторизация</Link></div>
                <button className={styles.button} onClick={sendForm}>Создать</button>
            </div>
        </div>
    )
}

export default Registration;

















// api and прочее

    //Получение ролей

    // const handleRole = e => {
    //     setValue(() => ({
    //         ...value,
    //         role: e.target.name
    //     }));
    // }

    // <div className={styles.checkRole}>
    //     <h3>Кем вы хотите быть?</h3>
    //     <div>
    //         <button name="user" onClick={handleRole} >Пользователем</button>
    //         <button name="expert" onClick={handleRole} >Экспертом</button>
    //     </div>
    // </div> 