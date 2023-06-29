import Image from 'next/image'
import styles from './styles.module.scss'
import Ambassador from '@/images/ambassador.jpg'

export default function AmbassadorSection(){
    return(
        <div className={styles.container}>
            <div className={styles.textBaloon}> {/* textos */}
                <p>
                    <q>Acredito muito na proposta de democratização da música,
                    por isso apoio a Maior Escola de Música do Brasil e tenho
                    certeza que a plataforma mudará completamente a realidade
                    de brasileiros que buscam estudar e entender a música por um
                    preço acessível e uma alta qualidade.</q>
                </p>
                <div className={styles.about}>
                    <h1>Kiko Navarro</h1>
                    <p>Sócio e embaixador da Maior Escola de Música do Brasil</p>
                </div>
            </div>
            <div className={styles.Image}> {/* Imagem */}
                <Image src={Ambassador} alt='cara com guitarra' loading='lazy'/>
            </div>
        </div>
    )
}