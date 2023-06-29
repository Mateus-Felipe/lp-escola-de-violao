import Image from 'next/image'
import styles from './styles.module.scss'
import CaraViolao from '@/images/homem-violao.jpg'
import CaraViolao2 from '@/images/homem-violao2.jpg'
import Button from '@/components/Button/Button'

export default function ContentInfo(){
    return(
        <div className={styles.container}>
            <div className={styles.itemInfo} style={{ marginBottom: 150 }}>
                <Image src={CaraViolao2} className={styles.image} alt='Cara tocando violao' loading={'lazy'} />
                <div>
                    <h1>
                        Violão <a>Popular</a>
                    </h1>
                    <p>
                    Acompanhe de ritmos e músicas populares pelo violão, como por exemplo: ritmos com MPB, Samba, Bossa Nova, Música Sertaneja, Rock, Blues, Xote, dentre outros muitos ritmos musicais de todo o Mundo.
                    </p>
                </div>
            </div>
            <div className={`${styles.itemInfo} ${styles.secondItem}` }>
                <Image src={CaraViolao} className={styles.image} alt='Cara tocando violao' loading={'lazy'} />
                <div>
                    <h1>
                        Violão <a>Erudito</a>
                    </h1>
                    <p>
                    Acompanhamento de músicas eruditas por um violão com cordas normalmente de nylon. Violão erudito – leitura musical e divisão rítmica.
                    </p>
                </div>
            </div>
            <div style={{ width: '50%', marginTop: '9rem' }}>
                <Button />
            </div>
        </div>
    )
}