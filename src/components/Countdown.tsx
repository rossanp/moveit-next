import { useState, useEffect } from 'react'
import styles from '../styles/components/Countdown.module.css'

export function Countdown() {
    const [time, setTime] = useState(25 * 60) //estado para iniciar o countdown
    const [active, setActive] = useState(false) //estado iniciando active como falso

    const minutes = Math.floor(time / 60) //arredondando o minuto para baixo
    const seconds = time % 60

    const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('') //Transforma os minutos em string dando um padstart (quando o valor não tiver 2 casas, ele acrescenta 0 a esquerda) e com o split, divide cada caracter em um array.
    const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('')

    function startCowntDown() {
        setActive(true)
    }

    useEffect(() => {
        if (active && time > 0) { 
            setTimeout(() => {
                setTime(time - 1)
            }, 1000) //settimeout executa uma função depois de algum tempo, logo, executa a função depois de 1 segundo
        }
    }, [active, time]) //useeffect passase sempre 2 parametros. O primeiro parametros sempre é o que se quer executar (quase sempre será uma função). O segundo paramentro é quando se quer executar o primeiro parametro. Logo, nesta aplicação, queremos executar uma função sempre que o valor de active mudar junto com o time (que está mudando dentro da função settimeout) que está mudando criando um loop.

    return(
        <div>
            <div className={styles.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            <button type="button" className={styles.countdownButton} onClick={startCowntDown}>
                Iniciar um ciclo
            </button>
        </div>
    )
}