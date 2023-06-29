import styles from './styles.module.scss'
import Image from 'next/image'
import ViolaoIcon from '../../../icons/violao.png'
import Certificado from '@/icons/certificado.png'
import Plataforma from '@/icons/plataforma.png'
import Internet from '@/icons/internet.png'
import Button from '@/components/Button/Button'


export default function FirstBanner() {
    return (
        <div className={styles.Container}>
            <div className={styles.containerInfo}>
                <h1>
                    Aprenda a tocar Violão com a maior escola
                    de musica do Brasil
                </h1>
                <p className=" description">Agora não tem mais desculpas para você
                    dizer que não consegue aprender a
                    tocar violão
                </p>
            <div className={styles.icons}>
                <div>
                    <Image alt='certificado' src={Certificado}  />
                    <p>Professores<br/><a style={{fontWeight: 'bold'}}>Renomados</a></p>
                </div>
                <div className={styles.divider}></div>
                <div>
                    <Image alt='certificado' src={Internet} />
                    <p>Assista aonde<br/><a style={{fontWeight: 'bold'}}>Quiser</a></p>
                </div>
                <div className={styles.divider}></div>
                <div>
                    <Image alt='certificado' src={Plataforma} />
                    <p>Plataforma<br/><a style={{fontWeight: 'bold'}}>Interativa</a></p>
                </div>
            </div>
            </div>
            <div className={styles.containerCTA}>
                <div className={styles.CTABox}>
                    <Image className={styles.violao} alt="Violão" src={ViolaoIcon} />
                    <div className={styles.CTAContent}>
                        <h3 className={styles.CTATitle}>Aulas de Violão</h3>
                        <div>
                            <h3>R$</h3>
                            <h1>19,99</h1>
                        </div>
                        <p>por mês*</p>
                    </div>
                    {/* <button>Quero começar agora</button> */}
                    <Button />
                </div>
            </div>
        </div>
    )
}