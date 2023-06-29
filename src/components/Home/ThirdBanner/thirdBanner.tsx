import Button from '@/components/Button/Button'
import styles from './styles.module.scss'
import Image from 'next/image'
import stIcon from '@/icons/certificado.png'
import ndIcon from '@/icons/internet.png'
import rdIcon from '@/icons/plataforma.png'
import thIcon from '@/icons/violao.png'

export default function ThirdBanner(){
    return(
        <div className={styles.container}>
            <div className={styles.info}> {/*Textos */}
                <h1>
                    Estamos juntos <a>com você nessa</a>
                </h1>
                <p>
                    Você terá todo o suporte da nossa equipe e de nossos professores para tirar duvidas e acelerar o seu aprendizado.
                    Nenhuma dúvida deixará de ser sanada.
                </p>
                <Button width='100%' />
            </div>
            <div className={styles.icons}> {/* Ícones */}
                <div className={styles.individualIcon}>
                    <Image src={stIcon} alt='icone' />
                    <p>Fórum de<br/>discursão</p>
                </div>
                <div className={styles.individualIcon}>
                    <Image src={ndIcon} alt='icone' />
                    <p>Comunidade<br/>100% ativa</p>
                </div>
                <div className={styles.individualIcon}>
                    <Image src={rdIcon} alt='icone' />
                    <p>Material de<br/>apoio</p>
                </div>
                <div className={styles.individualIcon}>
                    <Image src={thIcon} alt='icone' />
                    <p>Plataforma<br/>interativa</p>
                </div>
            </div>
        </div>
    )
}